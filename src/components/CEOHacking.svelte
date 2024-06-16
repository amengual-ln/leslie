<script>
  import Button from "./atoms/Button.svelte";
</script>

<section id="ceo-hacking" class="mx-auto text-xl p-4">
  <img
    src="CEOhacking.png"
    alt="CEO Hacking Logo"
    class="aspect-[16/5] object-cover"
  />
  <div class="flex flex-col lg:flex-row gap-12 px-4 py-12">
    <div class="flex flex-col justify-center gap-4 flex-1">
      <p class="text-center lg:text-left">
        CEO Hacking es para que tengas una vida profesional por diseño y no por
        accidente. Está dirigido a directivos que desean avanzar en su carrera:
        directivos de área que quieren ascender a directores generales,
        directivos que buscan fundar su propia empresa o aquellos que aspiran a
        la presidencia de su organización.
      </p>
    </div>
  </div>
  <p class="text-center font-[600]">
    ¡Descubre cómo maximizar tu potencial con CEO Hacking!
  </p>
  <div class="grid justify-center">
    <a href="/ceo-hacking" class="mt-12">
      <Button value="Conoce más..." />
    </a>
  </div>
</section>
