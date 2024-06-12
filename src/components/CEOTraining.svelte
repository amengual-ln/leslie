<script>
  import Button from "./atoms/Button.svelte";
</script>

<section id="ceo-training" class="text-xl p-4">
  <img
    src="CEOtraining.png"
    alt="CEO Training Logo"
    class="aspect-[16/5] object-cover"
  />
  <div class="flex gap-12 px-4 py-12">
    <div class="flex flex-col gap-2 justify-center flex-1">
      <p>
        ¿Sabías que el verdadero crecimiento como líder ocurre cuando te rodeas
        de otros líderes y mentores que te desafían y apoyan?
      </p>
      <p>
        En CEO Training, te ofrecemos un programa de mentoría grupal integral,
        diseñado para transformar tu vida y liderazgo.
      </p>
    </div>
  </div>
  <p class="text-center font-[600]">
    ¡Forma parte de CEO Training y lleva tu liderazgo al siguiente nivel!
  </p>
  <div class="grid justify-center">
    <a href="/ceo-training" class="mt-12">
      <Button value="CONOCÉ MÁS" />
    </a>
  </div>
</section>
