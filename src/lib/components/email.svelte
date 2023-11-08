<script lang="ts">
	import Arrow from "$lib/media/arrow.svg";
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
	class="flex flex-row w-full max-w-[40ch] lg:max-w-[50ch] xl:max-w-[65ch] relative justify-between gap-8"
	on:submit|preventDefault={submitHandler}
>
	{#if error === undefined && !success}
		<input
			bind:value={text}
			type="email"
			placeholder="Enter your email for updates"
			class="w-full px-5 py-2 leading-tight text-gray-900 bg-white appearance-none font-reactor7 lg:text-2xl xl:text-4xl focus:shadow-outline"
			style="border-radius:50px"
		/>
		{#if !loading }
			<button type="submit" id="submit" class="px-3 py-3 hidden md:block" style="border-radius:100%;aspect-ratio:1/1;width:50px;height:50px;background:#05034a">
				<img src={Arrow}/>
			</button>
		{:else}
			<button disabled type="submit" id="submit" class="px-2 py-2 hidden md:block" style="border-radius:100%;aspect-ratio:1/1;width:50px;height:50px;background:#05034a">
				<Circle2 size="30" colorOuter="#fff" colorCenter="#fff" colorInner="#fff"/>
			</button>
		{/if}
	{:else if success}
		<div>
			<p class="text-center font-reactor7 text-whit text-2xl lg:text-5xl ">
				Thank you! Please keep an eye on your email for more info.
			</p>
		</div>
	{:else}
		<div>Error encountered. Please reload and try again.</div>
		<div class="max-h-[7ch] overflow-scroll">Error: {error}</div>
	{/if}
</form>

<style>
	@import url(https://db.onlinewebfonts.com/c/3101d0058e2d7317cd5a5af7a1216ff3?family=Reactor7); 
	input::placeholder {
		text-align: center;
		font-family: 'Reactor7', monospace;
	}
	input, button {
		outline: solid 8px #05034a;
	}
</style>
