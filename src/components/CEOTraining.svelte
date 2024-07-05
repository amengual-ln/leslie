<script>
  import Button from "./atoms/Button.svelte";
  import FadeUp from "./atoms/FadeUp.svelte";
</script>

<section id="ceo-training" class="text-xl p-4">
  <FadeUp>
    <img
      src="CEOtraining.png"
      alt="CEO TRAINING Logo"
      class="aspect-[16/5] object-cover"
    />
    <div class="flex gap-12 px-4 py-12">
      <div class="flex flex-col gap-2 justify-center flex-1">
        <p class="text-center lg:text-left">
          ¿Sabías que tu proyecto y empresa más importante es tu vida?
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
  </FadeUp>
</section>
