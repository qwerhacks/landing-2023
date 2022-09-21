<script lang="ts">
  import { Circle2, Circle } from 'svelte-loading-spinners'

	let text: string = '';

	let error: string | undefined = undefined;

	let success: boolean = false;

	let loading: boolean = false;

	async function submitHandler(e: Event) {
		console.log("Submitted")
		loading = true
		grecaptcha.ready(function () {
			console.log("recaptcha ready")
			grecaptcha
				.execute('6LdT9hkiAAAAAM1maiWvJtgGAKTBfSYorsZ-IBV3', { action: 'submit' })
				.then(async function (token: string) {
					console.log("Recaptcha Callback")
					try {
						const resp = await fetch(
							'/api/email?' +
								new URLSearchParams({
									email: text,
									token
								}),
							{
								method: 'POST'
							}
						);

						if (resp.ok) {
							success = true;
							loading = false;
						} else {
							error = await resp.text();
							success = false;
							loading = false;
						}
					} catch (err) {
						let message = 'Unknown Error';
						if (err instanceof Error) message = err.message;
						error = message;
						success = false;
						loading = false;
					}
					console.error(error);
				});
		});
	}
</script>

<form
	class="w-full max-w-[40ch] lg:max-w-[50ch] xl:max-w-[65ch] relative"
	on:submit|preventDefault={submitHandler}
>
	{#if error === undefined && !success}
		<input
			bind:value={text}
			type="email"
			placeholder="Enter your email for updates"
			class="w-full px-3 py-2 leading-tight text-gray-900 bg-transparent border-b border-gray-900 appearance-none font-nunito lg:text-2xl xl:text-4xl focus:shadow-outline"
		/>
		{#if loading }
		<div class="absolute right-2 top-0 bottom-0 my-auto h-[80%]">
			<div class="static">
				<!-- <Circle size="60" color="#59C6D7"/> -->
				<Circle2 size="30" colorOuter="#59C6D7" colorCenter="#AAD6A1" colorInner="#FDDE97"/>
			</div>
		</div>
		{/if}
	{:else if success}
		<div>
			<p class="text-center font-nunito">
				Thank you! Please keep an eye on your email for more info.
			</p>
		</div>
	{:else}
		<div>Error encountered. Please reload and try again.</div>
		<div class="max-h-[7ch] overflow-scroll">Error: {error}</div>
	{/if}
</form>
