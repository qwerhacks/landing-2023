<script lang="ts">
	import Background from '$lib/components/background.svelte';
import Email from '$lib/components/email.svelte';
	import Logo from '../lib/components/logo.svelte';
</script>

<div class="overscroll-contain overflow-hidden w-full h-full">
	<div id="background" class="absolute w-full h-full -z-10" >
		<Background />
	</div>
	<div id="content" class="w-full h-full flex flex-col justify-center items-center z-10 gap-6 p-10">
		<Logo />
		<Email />
	</div>
</div>
