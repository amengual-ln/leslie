<script>
  import { onMount } from 'svelte';
  let mounted = false;
  onMount(() => { mounted = true; });

  const PAY_ONCE = "https://academy.ceodetuvida.com/courses/offers/aba9c77c-959f-42bb-bfd4-4eefe1b60de6";
  const PAY_SPLIT = "https://academy.ceodetuvida.com/courses/offers/c7d9708c-a13a-463c-9b65-be0e98abf33b";
  const PDF_PLAN = "https://drive.google.com/file/d/1RI4RRpaB7B0L3v1jL3tvSNXCbL5KiGva/view?usp=sharing";
</script>

<style>
  .sec-brown { background: var(--webinar-secondary); color: var(--webinar-secondary-foreground); }
  .sec-light { background: #f5f0e6; color: #111827; } /* beige/dorado rebajado */
  .btn { display:inline-block; padding:.5rem .8rem; border-radius:.5rem; font-weight:600; border:1px solid currentColor; font-size:.9rem; }
  .btn-primary { background: var(--webinar-primary); color:#fff; border-color: var(--webinar-primary); }
  .btn-primary:hover { filter: brightness(1.05); transform: translateY(-1px); }
  .btn-ghost { background: transparent; color: var(--webinar-primary); border-color: var(--webinar-primary); }
  .btn-ghost:hover { background: var(--webinar-primary); color:#fff; }
</style>

{#if mounted}
<main class="font-poppins min-h-screen">
  <!-- HERO -->
  <section class="relative flex items-center justify-center h-[20vh] sm:h-[25vh] bg-black">
    <img src="/fundamentals.png" alt="FUNDAMENTALS (LOGO)" class="h-full w-auto object-contain" />
    <div class="absolute inset-0 bg-black/55 pointer-events-none"></div>
  </section>

  <!-- Intro -->
  <section class="sec-brown py-10">
    <div class="container mx-auto px-4 max-w-3xl text-center">
      <h1 class="text-base sm:text-lg md:text-xl font-bold mb-4">Estás cumpliendo con todo… menos contigo.</h1>
      <p class="text-sm sm:text-base md:text-lg mb-5">
        Te volviste experto en apagar fuegos, pero ya no sabes qué te ilusiona. Cada día rindes, entregas, funcionas… pero sientes que tu chispa se esfumó.
        <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> es el primer paso para salir del caos, reconectar contigo y recuperar el timón de tu vida.
      </p>
      <ul class="text-left text-sm sm:text-base md:text-lg space-y-1">
        <li>✔ Solo 5 semanas</li>
        <li>✔ A tu ritmo y sin horarios fijos</li>
        <li>✔ 100% online y de acceso inmediato</li>
        <li>✔ Soporte directo de Leslie Beltrán</li>
      </ul>
    </div>
  </section>

  <!-- Para quién es -->
  <section class="sec-light py-10">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-base sm:text-lg md:text-xl font-bold mb-5 text-center">¿Para quién es Fundamentals?</h2>
      <p class="text-sm sm:text-base md:text-lg mb-4">Fundamentals no es para los que se engañan diciendo “todo está bien”. Es para quienes reconocen que la vida que llevan no se parece en nada a la que soñaron.</p>
      <ul class="text-sm sm:text-base md:text-lg space-y-1">
        <li>• Vives en caos, corriendo de un pendiente a otro sin dirección.</li>
        <li>• Estás abrumado, apagando fuegos todo el día y sin energía para lo que importa.</li>
        <li>• Llevas años en el mismo puesto y sientes que tu vida está estancada.</li>
        <li>• Tu vida se volvió gris, sin emoción, sin chispa, sin ilusión.</li>
        <li>• Te la pasas complaciendo a los demás.</li>
        <li>• Siempre te pones en el último lugar.</li>
      </ul>
      <div class="mt-6 text-sm sm:text-base md:text-lg bg-red-50 border border-red-200 p-4 rounded">
        <p>❌ No es que no tengas tiempo.<br>✅ Es que dejaste de ser el protagonista de tu propia vida.</p>
      </div>
    </div>
  </section>

  <!-- Logros -->
  <section class="sec-brown py-10">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-base sm:text-lg md:text-xl font-bold mb-5 text-center">En 5 semanas, esto es lo que lograrás:</h2>
      <ul class="text-sm sm:text-base md:text-lg space-y-1">
        <li>• Salir del desorden mental.</li>
        <li>• Saber qué priorizar sin sentir que todo es urgente.</li>
        <li>• Decidir con seguridad.</li>
        <li>• Recuperar energía y entusiasmo.</li>
        <li>• Ganar tiempo real para ti y tu familia.</li>
      </ul>
      <p class="text-sm sm:text-base md:text-lg mt-3">Fundamentals es para quienes ya se cansaron de correr sin rumbo… y ahora quieren tomar el timón de su vida.</p>
    </div>
  </section>

  <!-- Botones -->
  <section class="sec-light py-10 text-center">
    <h2 class="text-base sm:text-lg md:text-xl font-bold mb-4">COMIENZA HOY</h2>
    <div class="flex flex-col sm:flex-row justify-center gap-3 text-sm sm:text-base md:text-lg">
      <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
      <a class="btn btn-ghost" href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
    </div>
  </section>

  <!-- Más logros -->
  <section class="sec-brown py-10">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-base sm:text-lg md:text-xl font-bold mb-5 text-center">¿Qué más vas a lograr en Fundamentals?</h2>
      <ul class="text-sm sm:text-base md:text-lg space-y-1">
        <li>• Recuperar tiempo para ti.</li>
        <li>• Dormir en paz sin vueltas mentales.</li>
        <li>• Llegar a casa con mejor humor.</li>
        <li>• Tener dirección clara.</li>
        <li>• Tomar decisiones más rápidas.</li>
        <li>• Reconectarte contigo mismo.</li>
        <li>• Bajar la irritabilidad y el estrés.</li>
        <li>• Volver a entusiasmarte.</li>
      </ul>
      <p class="mt-4 text-sm sm:text-base md:text-lg">🔥 Fundamentals no solo te ayuda a ordenar tu mente: te devuelve la claridad, el ánimo y la fuerza.</p>
    </div>
  </section>

  <!-- Formato -->
  <section class="sec-light py-10">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-base sm:text-lg md:text-xl font-bold mb-5">El formato de Fundamentals</h2>
      <ul class="text-sm sm:text-base md:text-lg space-y-1">
        <li>• Hazlo a tu ritmo, sin horarios fijos.</li>
        <li>• Acceso inmediato al inscribirte.</li>
        <li>• 5 módulos en video, breves y al punto.</li>
        <li>• Plantillas descargables.</li>
        <li>• Acompañamiento directo de Leslie Beltrán.</li>
      </ul>
    </div>
  </section>

  <!-- Plan -->
  <section class="sec-brown py-10">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-base sm:text-lg md:text-xl font-bold mb-5">Aquí está tu plan de 5 semanas</h2>
      <ul class="text-sm sm:text-base md:text-lg space-y-1">
        <li>MÓDULO 1: El gran error que te está costando la vida</li>
        <li>MÓDULO 2: Rompiendo el guion que no es tuyo</li>
        <li>MÓDULO 3: Construyendo tu FAE</li>
        <li>MÓDULO 4: Diseñando tu nueva vida</li>
        <li>MÓDULO 5: Edificando tu FAE</li>
      </ul>
      <p class="mt-3 text-sm sm:text-base md:text-lg">👉 ¿Quieres ver lo que lograrás semana a semana? <a href={PDF_PLAN} target="_blank" class="underline text-[var(--webinar-primary)]">Descargar PDF</a></p>
    </div>
  </section>

  <!-- Porque funciona -->
  <section class="sec-light py-10">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-base sm:text-lg md:text-xl font-bold mb-5">¿Por qué creé Fundamentals?</h2>
      <p class="text-sm sm:text-base md:text-lg mb-2">Después de trabajar con cientos de ejecutivos y empresarios descubrí algo claro: muchos viven con agendas llenas, pero vacíos por dentro. Yo también estuve ahí.</p>
      <p class="text-sm sm:text-base md:text-lg mb-2">Sé lo que es correr todo el día y sentir que no avanzas.</p>
      <p class="text-sm sm:text-base md:text-lg mb-2">Sé lo que es vivir en modo supervivencia.</p>
      <p class="text-sm sm:text-base md:text-lg mb-2">Fundamentals nació de mi propia experiencia y de años acompañando a líderes como tú.</p>
      <p class="text-sm sm:text-base md:text-lg">Está basado en neurociencias, ciencias de la felicidad y coaching de alto desempeño. No es un cursito motivacional, es una guía para crear una vida con sentido.</p>
    </div>
  </section>


  <!-- Cierre -->
  <section class="sec-light py-10 text-center">
    <h2 class="text-base sm:text-lg md:text-xl font-bold mb-4">Tu vida puede sentirse más ligera, empieza aquí</h2>
    <p class="text-sm sm:text-base md:text-lg mb-4">No tienes que seguir corriendo sin parar ni vivir con la mente saturada. Hoy puedes elegir un camino más claro, con tiempo para ti y tranquilidad en tu día a día.</p>
    <div class="flex flex-col sm:flex-row justify-center gap-3 text-sm sm:text-base md:text-lg">
      <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
      <a class="btn btn-ghost" href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
    </div>
  </section>
</main>
{/if}
