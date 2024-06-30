<script>
  import Button from "./atoms/Button.svelte";
  import FadeUp from "./atoms/FadeUp.svelte";
</script>

<section id="ceo-hacking" class="text-xl p-4">
  <FadeUp>
    <img
      src="CEOhacking.png"
      alt="CEO HACKING Logo"
      class="aspect-[16/5] object-cover"
    />
    <div class="flex flex-col lg:flex-row gap-12 px-4 py-12">
      <div class="flex flex-col justify-center gap-4 flex-1">
        <p class="text-center lg:text-left">
          CEO HACKING es un proceso individual exclusivo para Directivos, para
          que rompan con sus viejos patrones de liderazgo y se entrenen en el
          desarrollo de life skills que les ayudarán a liderar a sus equipos de
          forma consciente y efectiva, llevándolos a dar mejores resultados, sin
          perder su paz mental en el camino y sin tener que pasar más horas en
          la oficina o sacrificar su vida personal.
        </p>
      </div>
    </div>
    <p class="text-center font-[600]">
      ¡Descubre cómo maximizar tu potencial con CEO HACKING!
    </p>
    <div class="grid justify-center">
      <a href="/ceo-hacking" class="mt-12">
        <Button value="Conoce más..." />
      </a>
    </div>
  </FadeUp>
</section>
