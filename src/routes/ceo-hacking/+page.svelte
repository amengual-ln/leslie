<script>
  import Button from "../../components/atoms/Button.svelte";
</script>

<main class="max-w-screen-2xl mx-auto">
  <section class="mx-auto text-xl p-4">
    <img
      src="CEOhacking.png"
      alt="CEO HACKING Logo"
      class="aspect-[16/5] object-cover"
    />
    <div class="flex flex-col lg:flex-row gap-12 px-4 py-12">
      <div class="flex flex-col justify-center gap-4 flex-1">
        <p class="text-center lg:text-left">
          CEO HACKING es para que tengas una vida profesional por diseño y no
          por accidente. Está dirigido a directivos que desean avanzar en su
          carrera: directivos de área que quieren ascender a directores
          generales, directivos que buscan fundar su propia empresa o aquellos
          que aspiran a la presidencia de su organización.
        </p>
        <p class="text-center lg:text-left">
          Es para líderes que tienen claros sus objetivos profesionales y
          sienten la necesidad de desarrollar más habilidades de vida, pulir su
          liderazgo y superar el síndrome del impostor. Son personas que ya son
          exitosas profesionalmente, pero que quieren alcanzar nuevas alturas.
        </p>
      </div>
      <div class="block lg:hidden">
        <img src="/hacking.webp" alt="hacking">
      </div>
      <div class="flex flex-col justify-center flex-1">
        <p class="text-center lg:text-left">
          CEO HACKING es un proceso individual de coaching que dura tres meses.
          Aunque puede extenderse, empezamos con un compromiso de tres meses con
          sesiones semanales. Este programa ofrece:
        </p>
        <ul class="flex flex-col gap-4 list-disc my-8 ml-8">
          <li>Identificación de bloqueos personales</li>
          <li>Mejora de productividad y eficiencia</li>
          <li>Plan de acción personalizado</li>
        </ul>
        <p class="text-center lg:text-left">
          Y lo más importante, es un acompañamiento continuo. No solo nos
          reunimos una vez a la semana, sino que me convierto en tu coach
          personal durante esos tres meses. Tienes línea directa conmigo para
          cualquier situación, convirtiéndome en tu apoyo constante y personal.
        </p>
      </div>
    </div>
    <div class="grid justify-center">
      <a href="https://walink.co/bccb88" target="_blank" rel="noopener noreferrer" class="my-8">
        <Button value="¿Estas listo para tomar el control?" />
      </a>
    </div>
  </section>
</main>
