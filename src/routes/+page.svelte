<script lang="ts">
	import Background from '$lib/components/background.svelte';
	import Hero from '$lib/components/hero.svelte';
</script>

<div class="w-full h-full overflow-hidden overscroll-contain">
	<a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=yellow" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-yellow.svg" alt="Major League Hacking 2024 Hackathon Season" style="width:100%"></a>
	<div id="background" class="absolute w-full h-full -z-10">
		<div id="bg-overlay" class="absolute w-full h-full" style="z-index:100;background:#491b55;opacity:0.5;mix-blend-mode:dodge"/>
		<Background />
	</div>
	<div id="content" class="z-10 flex flex-col items-center justify-center w-screen h-screen p-10">
		<Hero />
	</div>
</div>

<style>
.c {
	mix-blend-mode: screen;
}
</style>

<svelte:head>
	<link rel="preload" href="/fonts/NightyDEMO.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="/fonts/RanilleNormal-Regular.woff2" as="font" type="font/woff2" crossorigin>
	<link rel="preload" href="/fonts/Reactor7.woff2" as="font" type="font/woff2" crossorigin>
</svelte:head>