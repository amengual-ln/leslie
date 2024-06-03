<script>
  export let value;
  export let handleClick = () => null;
  export let type = "text";
</script>

<button
  {type}
  class="py-2 px-4 bg-leslie_gold text-leslie_black font-medium hover:opacity-80"
  onclick={handleClick}
  >{value}
</button>
