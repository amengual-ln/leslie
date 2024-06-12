<script>
  import Button from "./atoms/Button.svelte";
</script>

<section id="ceo-mind" class="text-xl p-4">
  <img
    src="CEOmind.png"
    alt="CEO Mind Logo"
    class="aspect-[16/5] object-cover"
  />
  <div class="flex flex-col lg:flex-row gap-12 px-4 py-12">
    <div class="flex flex-col justify-center gap-4 flex-1">
      <p class="text-center lg:text-left">
        CEOmind es una membresía de mantenimiento diseñada para aquellos que ya
        han trabajado conmigo durante al menos un año. Este programa es
        exclusivo para personas que han completado CEO Training o al menos dos
        CEO Hacking.
      </p>
    </div>
  </div>
  <p class="text-center font-[600]">
    ¡Sé parte de CEO Mind y mantente inspirado en tu camino hacia el éxito!
  </p>
  <div class="grid justify-center">
    <a href="/ceo-mind" class="mt-12">
      <Button value="CONOCÉ MÁS" />
    </a>
  </div>
</section>
