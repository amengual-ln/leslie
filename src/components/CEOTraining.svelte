<script>
  import { fly } from "svelte/transition";
  import { inview } from "svelte-inview";
  import Button from "./atoms/Button.svelte";

  let isInView;
</script>

<section id="ceo-training" class="text-xl p-4">
  <div
    use:inview={{ unobserveOnEnter: true, rootMargin: "0%" }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
  >
    {#if isInView}
      <img
        in:fly={{ delay: 250, duration: 500, y: 100, opacity: 0 }}
        src="CEOtraining.png"
        alt="CEO TRAINING Logo"
        class="aspect-[16/5] object-cover"
      />
    {/if}
    <div class="flex gap-12 px-4 py-12">
      <div class="flex flex-col gap-2 justify-center flex-1">
        <p class="text-center lg:text-left">
          ¿Sabías que el verdadero crecimiento como líder ocurre cuando te
          rodeas de otros líderes y mentores que te desafían y apoyan?
        </p>
        <p class="text-center lg:text-left">
          En CEO TRAINING, te ofrecemos un programa de mentoría grupal integral,
          diseñado para transformar tu vida y liderazgo.
        </p>
        <p class="text-center lg:text-left">
          Si quieres tener una vida por diseño y ya no por accidente, el CEO
          TRAINING es para ti.
        </p>
      </div>
    </div>
    <p class="text-center font-[600]">
      ¡Forma parte del CEO TRAINING y aprende a liderar tu vida con maestría!
    </p>
    <div class="grid justify-center">
      <a href="/ceo-training" class="mt-12">
        <Button value="Conoce más..." />
      </a>
    </div>
  </div>
</section>
