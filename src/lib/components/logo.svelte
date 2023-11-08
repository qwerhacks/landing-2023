<script lang="ts">
	import Deadjim from '../media/deadjim.svg';
</script>

<!-- <div id="logo-parent" class="w-full grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-5"> -->
<div id="logo-parent" class="w-full flex flex-col md:flex-row">
	<div id="image" class="flex grow-[1] items-center justify-center flex-col">
		<span class="ucla">@UCLA</span>
		<img src={Deadjim} alt="QWERHACKS Logo" class="w-[120%] max-w-[120%] md:max-w-full md:w-11/12 h-full"/>
		<span class="date">JAN 27-29, 2024</span>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600&display=swap');
	.name {
		display: grid;
		grid-template-areas: "zero";
		min-height: 0;
		grid-template-columns: 1fr;
		grid-template-columns: 1fr;
		font-size: 5rem;
	}
	.front {
		grid-area: zero;
		z-index: 1000;
	}
	.back {
		-webkit-text-stroke-color: red;
		-webkit-text-stroke-width: 30px;
		grid-area: zero;
		position: relative;
		left: 20px;
		top: 20px;
	}
	span {
		font-family: 'Fredoka', sans-serif;
		font-size: max(3.5vw, 1.4rem);
		color: white;
	}
	.ucla {
		position: relative;
		color: white;
		left: 25%;
		bottom: -12%;
	}
	.date {
		margin-top: -3%;
	}
</style>
