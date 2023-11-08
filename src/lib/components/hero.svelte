<script lang="ts">
import Email from './email.svelte';
	import Logo from './logo.svelte';
</script>

<div class="flex flex-col justify-center items-center gap-8 p-10 md:p-14 rounded-xl w-max lg:w-[60%] max-w-[95vw] md:max-w-[70vw]">
  <Logo />
  <Email />
  <span class="text-center text-white text-2xl lg:text-5xl font-reactor7 inline-block" style="text-shadow:#200b3a 4px 0px 0px,#200b3a -4px 0px 0px,#200b3a 0px 4px 0px,#200b3a 0px -4px 0px">the lgbtqia community? <wbr/>at MY hackathon???<br/>it's more likely than you think.</span>
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