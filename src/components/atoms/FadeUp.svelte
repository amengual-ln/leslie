<script>
  import { fly } from "svelte/transition";
  import { inview } from "svelte-inview";

  let isInView;
</script>

<div
  use:inview={{ unobserveOnEnter: true, rootMargin: "0%" }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
>
  {#if isInView}
    <div in:fly={{ delay: 250, duration: 500, y: 100, opacity: 0 }}>
      <slot />
    </div>
  {/if}
</div>
