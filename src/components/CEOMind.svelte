<script>
  import Button from "./atoms/Button.svelte";
</script>

<section
  id="ceo-mind"
  class="text-xl p-4 intersect:animate-fade-up intersect-once"
>
  <img
    src="CEOmind.png"
    alt="CEO MIND Logo"
    class="aspect-[16/5] object-cover intersect:animate-fade-up intersect-once"
  />
  <div class="flex flex-col lg:flex-row gap-12 px-4 py-12">
    <div class="flex flex-col justify-center gap-4 flex-1">
      <p class="text-center lg:text-left">
        Este programa es exclusivo para personas que han completado CEO TRAINING
        o al menos dos CEO HACKING.
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
</section>
