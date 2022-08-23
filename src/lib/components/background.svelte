<script lang="ts">
  import BottomLeft from "$lib/media/bottom_left.svg";
  import BottomRight from "$lib/media/bottom_right.svg";
  import TopRight from "$lib/media/top_right.svg";
  import Left from "$lib/media/left_side.svg";
  import Right from "$lib/media/right_side.svg";
</script>

<div class="w-full h-full bg-[#FFF7F1]">
  <img src={BottomLeft} alt="" class="fixed left-0 bottom-0 z-10"/>
  <img src={BottomRight} alt="" class="fixed right-0 bottom-0 z-10"/>
  <img src={TopRight} alt="" class="fixed right-0 top-0"/>
  <img src={Left} alt="" class="fixed left-0 top-0 bottom-0 h-full"/>
  <img src={Right} alt="" class="fixed right-0 top-0 bottom-0 h-full"/>
</div>