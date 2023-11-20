<script lang="ts">
	import Email from './email.svelte';
	import Logo from './logo.svelte';
	import Window from './window.svelte';
</script>

<div class="mt-auto" />

<div
	class="flex flex-col justify-center items-center gap-8 p-10 md:p-14 rounded-xl w-max lg:w-[60%] max-w-[95vw] md:max-w-[70vw]"
>
	<!-- <Logo />
	<Email /> -->
	<Window />
	<span
		class="text-center text-white text-2xl lg:text-5xl font-reactor7 inline-block"
		style="text-shadow:#200b3a 4px 0px 0px,#200b3a -4px 0px 0px,#200b3a 0px 4px 0px,#200b3a 0px -4px 0px"
		>the lgbtqia community? <wbr />at MY hackathon???<br />it's more likely than you think.</span
	>
</div>

<div
	class="mt-auto max-w-prose text-center py-5 px-5 text-white font-reactor7 text-2xl lg:text-3xl"
	style="text-shadow:#200b3a 2px 0px 0px,#200b3a -2px 0px 0px,#200b3a 0px 2px 0px,#200b3a 0px -2px 0px"
>
	Interested in helping us make this event happen? <a
		href="https://drive.google.com/file/d/1bEVtQlb4Yw58R0a8gH0P0BWTpXJEpXQC/view"
		class="underline text-sky-light">Check out our sponsorship packet</a
	>!
</div>

<style>
	.outlined::after {
		-webkit-text-fill-color: #200b3a;
		color: red;
		font-size: 4rem;
		content: "the lgbtqia community? at MY hackathon???\nit's more likely than you think.";
		position: absolute;
		left: 0;
	}
</style>
