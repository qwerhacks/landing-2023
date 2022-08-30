<script lang="ts">
	import Frog from '../media/frog.svg';
	import Text from '../media/text.svg';
</script>

<!-- <div id="logo-parent" class="w-full grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-5"> -->
<div id="logo-parent" class="w-full flex flex-col md:flex-row gap-5">
	<div id="image" class="flex grow-[1] items-center justify-center">
		<img src={Frog} alt="A stylized frog" class="w-9/12 md:w-11/12 h-11/12"/>
	</div>
	<div id="text" class="flex grow-[2] items-center justify-center">
		<img src={Text} alt="QWER Hacks - Jan 27-29" class="w-11/12 md:w-[100%] h-11/12"/>
	</div>
</div>
