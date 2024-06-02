<script>
  export let value;
  export let handleClick = () => null;
  export let type = "text";
</script>

<button
  {type}
  class="py-2 px-4 bg-[#e2a317] text-[#0D0E0E] font-medium"
  onclick={handleClick}
  >{value}
</button>
