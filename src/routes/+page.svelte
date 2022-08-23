<script lang="ts">
	import Background from '$lib/components/background.svelte';
import Hero from '$lib/components/hero.svelte';
</script>

<div class="overscroll-contain overflow-hidden w-full h-full">
	<div id="background" class="absolute w-full h-full -z-10" >
		<Background />
	</div>
	<div id="content" class="w-full h-full flex flex-col justify-center items-center z-10 p-10">
		<Hero />
	</div>
</div>
