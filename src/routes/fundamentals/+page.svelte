<script>
  import { onMount } from 'svelte';
  let mounted = false;
  onMount(() => { mounted = true; });
</script>

{#if mounted}
<main class="font-poppins min-h-screen">
  <!-- HERO -->
  <section class="relative flex items-center justify-center h-[20vh] sm:h-[25vh] bg-black">
    <img src="/fundamentals.png" alt="FUNDAMENTALS (LOGO)" class="h-full w-auto object-contain" />
    <div class="absolute inset-0 bg-black/55 pointer-events-none"></div>
  </section>

  <!-- Intro -->
  <section class="bg-[var(--webinar-secondary)] text-[var(--webinar-secondary-foreground)] py-8">
    <div class="container mx-auto px-4 max-w-3xl text-center">
      <h1 class="text-sm sm:text-base md:text-lg font-bold mb-3">Estás cumpliendo con todo… menos contigo.</h1>
      <p class="text-xs sm:text-sm md:text-base mb-4">
        Te volviste experto en apagar fuegos, pero ya no sabes qué te ilusiona. Cada día rindes, entregas, funcionas… pero sientes que tu chispa se esfumó.
        <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> es el primer paso para salir del caos, reconectar contigo y recuperar el timón de tu vida.
      </p>
      <ul class="text-left text-xs sm:text-sm md:text-base space-y-1">
        <li>✔ Solo 5 semanas</li>
        <li>✔ A tu ritmo y sin horarios fijos</li>
        <li>✔ 100% online y de acceso inmediato</li>
        <li>✔ Soporte directo de Leslie Beltrán</li>
      </ul>
    </div>
  </section>

  <!-- Para quién es -->
  <section class="bg-white text-black py-8">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-sm sm:text-base md:text-lg font-bold mb-4 text-center">¿Para quién es Fundamentals?</h2>
      <p class="text-xs sm:text-sm md:text-base mb-3">Fundamentals no es para los que se engañan diciendo “todo está bien”. Es para quienes reconocen que la vida que llevan no se parece en nada a la que soñaron.</p>
      <ul class="text-xs sm:text-sm md:text-base space-y-1">
        <li>• Vives en caos, corriendo de un pendiente a otro sin dirección.</li>
        <li>• Estás abrumado, apagando fuegos todo el día y sin energía para lo que importa.</li>
        <li>• Llevas años en el mismo puesto y sientes que tu vida está estancada.</li>
        <li>• Tu vida se volvió gris, sin emoción, sin chispa, sin ilusión.</li>
        <li>• Te la pasas complaciendo a los demás.</li>
        <li>• Siempre te pones en el último lugar.</li>
      </ul>
      <div class="mt-4 text-xs sm:text-sm md:text-base bg-red-50 border border-red-200 p-3 rounded">
        <p>❌ No es que no tengas tiempo.<br>✅ Es que dejaste de ser el protagonista de tu propia vida.</p>
      </div>
    </div>
  </section>

  <!-- Logros -->
  <section class="bg-[var(--webinar-secondary)] text-[var(--webinar-secondary-foreground)] py-8">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-sm sm:text-base md:text-lg font-bold mb-4 text-center">En 5 semanas, esto es lo que lograrás:</h2>
      <ul class="text-xs sm:text-sm md:text-base space-y-1">
        <li>• Salir del desorden mental.</li>
        <li>• Saber qué priorizar sin sentir que todo es urgente.</li>
        <li>• Decidir con seguridad.</li>
        <li>• Recuperar energía y entusiasmo.</li>
        <li>• Ganar tiempo real para ti y tu familia.</li>
      </ul>
      <p class="text-xs sm:text-sm md:text-base mt-3">Fundamentals es para quienes ya se cansaron de correr sin rumbo… y ahora quieren tomar el timón de su vida.</p>
    </div>
  </section>

  <!-- Botones -->
  <section class="bg-white text-black py-8 text-center">
    <h2 class="text-sm sm:text-base md:text-lg font-bold mb-3">COMIENZA HOY</h2>
    <div class="flex flex-col sm:flex-row justify-center gap-2 text-xs sm:text-sm md:text-base">
      <a href="#" class="px-3 py-2 bg-[var(--webinar-primary)] text-white rounded">Pago único $6,500 MXN</a>
      <a href="#" class="px-3 py-2 border border-[var(--webinar-primary)] text-[var(--webinar-primary)] rounded">2 pagos de $3,250 MXN</a>
    </div>
  </section>

  <!-- Más logros -->
  <section class="bg-[var(--webinar-secondary)] text-[var(--webinar-secondary-foreground)] py-8">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-sm sm:text-base md:text-lg font-bold mb-4 text-center">¿Qué más vas a lograr en Fundamentals?</h2>
      <ul class="text-xs sm:text-sm md:text-base space-y-1">
        <li>• Recuperar tiempo para ti.</li>
        <li>• Dormir en paz sin vueltas mentales.</li>
        <li>• Llegar a casa con mejor humor.</li>
        <li>• Tener dirección clara.</li>
        <li>• Tomar decisiones más rápidas.</li>
        <li>• Reconectarte contigo mismo.</li>
        <li>• Bajar la irritabilidad y el estrés.</li>
        <li>• Volver a entusiasmarte.</li>
      </ul>
      <p class="text-xs sm:text-sm md:text-base mt-3">🔥 Fundamentals no solo te ayuda a ordenar tu mente: te devuelve la claridad, el ánimo y la fuerza.</p>
    </div>
  </section>

  <!-- Formato -->
  <section class="bg-white text-black py-8">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-sm sm:text-base md:text-lg font-bold mb-4">El formato de Fundamentals</h2>
      <ul class="text-xs sm:text-sm md:text-base space-y-1">
        <li>• Hazlo a tu ritmo, sin horarios fijos.</li>
        <li>• Acceso inmediato al inscribirte.</li>
        <li>• 5 módulos en video, breves y al punto.</li>
        <li>• Plantillas descargables.</li>
        <li>• Acompañamiento directo de Leslie Beltrán.</li>
      </ul>
    </div>
  </section>

  <!-- Plan -->
  <section class="bg-[var(--webinar-secondary)] text-[var(--webinar-secondary-foreground)] py-8">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-sm sm:text-base md:text-lg font-bold mb-4">Aquí está tu plan de 5 semanas</h2>
      <ul class="text-xs sm:text-sm md:text-base space-y-1">
        <li>MÓDULO 1: El gran error que te está costando la vida</li>
        <li>MÓDULO 2: Rompiendo el guion que no es tuyo</li>
        <li>MÓDULO 3: Construyendo tu FAE (Felicidad, Autoconcepto, Éxito)</li>
        <li>MÓDULO 4: Diseñando tu nueva vida</li>
        <li>MÓDULO 5: Edificando tu FAE</li>
      </ul>
      <p class="mt-3 text-xs sm:text-sm md:text-base">👉 ¿Quieres ver lo que lograrás semana a semana? [ Descargar PDF ]</p>
    </div>
  </section>

  <!-- Porque funciona -->
  <section class="bg-white text-black py-8">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-sm sm:text-base md:text-lg font-bold mb-4">¿Por qué creé Fundamentals?</h2>
      <p class="text-xs sm:text-sm md:text-base mb-2">Después de trabajar con cientos de ejecutivos y empresarios descubrí algo claro: muchos viven con agendas llenas, pero vacíos por dentro. Yo también estuve ahí.</p>
      <p class="text-xs sm:text-sm md:text-base mb-2">Sé lo que es correr todo el día y sentir que no avanzas.</p>
      <p class="text-xs sm:text-sm md:text-base mb-2">Sé lo que es vivir en modo supervivencia.</p>
      <p class="text-xs sm:text-sm md:text-base mb-2">Fundamentals nació de mi propia experiencia y de años acompañando a líderes como tú.</p>
      <p class="text-xs sm:text-sm md:text-base">Está basado en neurociencias, ciencias de la felicidad y coaching de alto desempeño. No es un cursito motivacional, es una guía para crear una vida con sentido.</p>
    </div>
  </section>

  <!-- Testimonios -->
  <section class="bg-[var(--webinar-secondary)] text-[var(--webinar-secondary-foreground)] py-8">
    <div class="container mx-auto px-4 max-w-3xl text-center">
      <h2 class="text-sm sm:text-base md:text-lg font-bold mb-4">Lo que dicen quienes ya vivieron Fundamentals</h2>
      <p class="text-xs sm:text-sm md:text-base">[ Aquí van testimonios + screenshots ]</p>
    </div>
  </section>

  <!-- Cierre -->
  <section class="bg-white text-black py-8 text-center">
    <h2 class="text-sm sm:text-base md:text-lg font-bold mb-3">Tu vida puede sentirse más ligera, empieza aquí</h2>
    <p class="text-xs sm:text-sm md:text-base mb-3">No tienes que seguir corriendo sin parar ni vivir con la mente saturada. Hoy puedes elegir un camino más claro, con tiempo para ti y tranquilidad en tu día a día.</p>
    <div class="flex flex-col sm:flex-row justify-center gap-2 text-xs sm:text-sm md:text-base">
      <a href="#" class="px-3 py-2 bg-[var(--webinar-primary)] text-white rounded">Pago único $6,500 MXN</a>
      <a href="#" class="px-3 py-2 border border-[var(--webinar-primary)] text-[var(--webinar-primary)] rounded">2 pagos de $3,250 MXN</a>
    </div>
  </section>
</main>
{/if}
