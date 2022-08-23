<script lang="ts">
	import Background from '$lib/components/background.svelte';
import Hero from '$lib/components/hero.svelte';
</script>

<div class="w-full h-full overflow-hidden overscroll-contain">
	<div id="background" class="absolute w-full h-full -z-10" >
		<Background />
	</div>
	<div id="content" class="z-10 flex flex-col items-center justify-center w-screen h-screen p-10">
		<Hero />
	</div>
</div>
