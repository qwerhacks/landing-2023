<script lang="ts">
  import BottomLeft from "$lib/media/bottom_left.svg";
  import BottomRight from "$lib/media/bottom_right.svg";
  import TopRight from "$lib/media/top_right.svg";
  import Left from "$lib/media/left_side.svg";
  import Right from "$lib/media/right_side.svg";
</script>

<div class="w-full h-full bg-[#FFF7F1]">
  <img src={BottomLeft} alt="" class="fixed left-0 bottom-0 z-10 max-w-screen max-h-[50vh] md:max-w-[40vw]"/>
  <img src={BottomRight} alt="" class="hidden md:block fixed right-0 bottom-0 z-10 max-w-[30vw] max-h-[60vh]"/>
  <img src={TopRight} alt="" class="fixed right-0 top-0 max-w-[80vw] md:max-w-[60vw]"/>
  <img src={Left} alt="" class="fixed top-0 bottom-0 left-0 h-full"/>
  <img src={Right} alt="" class="fixed top-0 bottom-0 right-0 hidden h-full lg:block"/>
</div>