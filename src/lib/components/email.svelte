<script lang="ts">
	let text: string = "";

	let error: string | undefined = undefined;

	function submitHandler(e: Event) {
		console.log(text)
	}
</script>

<form 
	class="w-full max-w-[40ch] lg:max-w-[50ch] xl:max-w-[65ch]"
	on:submit|preventDefault={submitHandler}
	>
	<input
		bind:value={text}
		type="email"
		placeholder="Enter your email for updates"
		class="w-full px-3 py-2 leading-tight text-gray-900 bg-transparent border-b border-gray-900 appearance-none font-nunito lg:text-2xl xl:text-4xl focus:shadow-outline"
	/>

	{#if error !== undefined}
		<div>Please enter a valid email</div>
	{/if}
</form>
