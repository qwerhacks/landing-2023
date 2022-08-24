<script lang="ts">
	let text: string = '';

	let error: string | undefined = undefined;

	let success: boolean = false;

	async function submitHandler(e: Event) {
		console.log(text);

		try {
			const resp = await fetch(
				'/api/email?' +
					new URLSearchParams({
						email: text
					}),
				{
					method: 'POST'
				}
			);

			if (resp.ok) {
				success = true;
			} else {
				error = await resp.text()
				success = false
			}
		} catch (err) {
			let message = 'Unknown Error';
			if (err instanceof Error) message = err.message;
			error = message;
			success = false
		}
		console.error(error);
	}
</script>

<form
	class="w-full max-w-[40ch] lg:max-w-[50ch] xl:max-w-[65ch]"
	on:submit|preventDefault={submitHandler}
>
	{#if error === undefined && !success}
		<input
			bind:value={text}
			type="email"
			placeholder="Enter your email for updates"
			class="w-full px-3 py-2 leading-tight text-gray-900 bg-transparent border-b border-gray-900 appearance-none font-nunito lg:text-2xl xl:text-4xl focus:shadow-outline"
		/>
	{:else if success}
		<div><p class="text-center font-nunito">Thank you! Please keep an eye on your email for more info.</p></div>
	{:else}
		<div>Error encountered. Please reload and try again.</div>
		<div class="max-h-[7ch] overflow-scroll">Error: {error}</div>
	{/if}
</form>
