<script>
  import Button from "../../components/atoms/Button.svelte";
</script>

<main class="max-w-screen-2xl mx-auto">
  <section class="mx-auto text-xl p-4">
    <img
      src="CEOhacking.png"
      alt="CEO HACKING Logo"
      class="aspect-[16/5] object-cover animate-fade-up"
    />
    <div class="flex flex-col lg:flex-row gap-12 px-4 py-12">
      <div class="flex flex-col justify-center gap-4 flex-1">
        <p class="text-left lg:text-left">
          CEO HACKING es para que tengas una vida profesional por diseño y no
          por accidente.</p>
          <p class="text-left lg:text-left"> Está dirigido a:
            <li> Directivos de área que quieren ascender a directores generales</li>
            <li> Directivos que buscan fundar su propia empresa</li>
            <li> Directivos que aspiran a la presidencia de su organización</li>      
        </p>
        <p class="text-left lg:text-left">
          Este proceso es para líderes que tienen claros sus objetivos profesionales y
          sienten la necesidad de desarrollar más habilidades de vida, pulir su
          liderazgo y superar el síndrome del impostor. Son personas que ya son
          exitosas profesionalmente, pero que quieren alcanzar nuevas alturas.
        </p>
      </div>
      <div class="block lg:hidden">
        <img src="/hacking.webp" alt="hacking">
      </div>
      <div class="flex flex-col justify-center flex-1">
        <p class="text-left lg:text-left">
          CEO HACKING es un proceso individual de coaching+mentoring con duración de tres meses, con posibilidad de extenderse.
        </p>     
        <p class="text-left lg:text-left">     
          Este programa incluye:
        </p>
        <ul class="flex flex-col gap-4 list-disc my-8 ml-8">
          <li>Identificación de techos de cristal mentales</li>
          <li>Desarrollo de la inteligencia que más dinero y paz mental te va a hacer ganar: La Inteligencia Emocional</li>
          <li>Desarollo de comunicación efectiva</li>
          <li>Plan de acción personalizado</li>
        </ul>
        <p class="text-left lg:text-left">
          Y lo más importante, es un acompañamiento continuo. No solo nos
          reunimos una vez a la semana, sino que me convierto en tu Coach
          personal, y tienes línea directa conmigo para
          cualquier situación, convirtiéndome en tu apoyo constante.
        </p>
      </div>
    </div>
    <div class="grid justify-center">
      <a href="https://walink.co/45aabc" target="_blank" rel="noopener noreferrer" class="my-8">
        <Button value="¡Es momento de tomar acción!" />
      </a>
    </div>
  </section>
</main>
