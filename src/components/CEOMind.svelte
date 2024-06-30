<script>
  import { fly } from "svelte/transition";
  import { inview } from "svelte-inview";
  import Button from "./atoms/Button.svelte";

  let isInView;
</script>

<section id="ceo-mind" class="text-xl p-4">
  <div
    use:inview={{ unobserveOnEnter: true, rootMargin: "0%" }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
  >
    {#if isInView}
      <img
        in:fly={{ delay: 250, duration: 500, y: 100, opacity: 0 }}
        src="CEOmind.png"
        alt="CEO MIND Logo"
        class="aspect-[16/5] object-cover"
      />
    {/if}
    <div class="flex flex-col lg:flex-row gap-12 px-4 py-12">
      <div class="flex flex-col justify-center gap-4 flex-1">
        <p class="text-center lg:text-left">
          Este programa es exclusivo para personas que han completado CEO
          TRAINING o al menos dos CEO HACKING.
        </p>
      </div>
    </div>
    <p class="text-center font-[600]">
      ¡Sé parte de CEO MIND y mantente inspirado en tu camino hacia el éxito!
    </p>
    <div class="grid justify-center">
      <a href="/ceo-mind" class="mt-12">
        <Button value="Conoce más..." />
      </a>
    </div>
  </div>
</section>
