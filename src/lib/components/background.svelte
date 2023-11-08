<script lang="ts">
  import BottomLeft from "$lib/media/bottom_left.svg";
  import BottomRight from "$lib/media/bottom_right.svg";
  import TopRight from "$lib/media/top_right.svg";
  import TopLeft from "$lib/media/top_left.svg";
  import Right from "$lib/media/right_side.svg";
</script>

<div class="w-full h-full bg-[#491b55]">
  <img src={BottomLeft} alt="" class="fixed left-0 bottom-0 z-10 max-w-screen max-h-[70vh] md:max-w-[82vw]"/>
  <img src={TopRight} alt="" class="fixed right-0 top-0 max-w-[60vw] md:max-w-[40vw]"/>
  <img src={TopLeft} alt="" class="fixed top-0 left-0 max-w-[60vw] md:max-w-[55vw]"/>
</div>