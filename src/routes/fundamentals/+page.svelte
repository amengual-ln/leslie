<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let mounted = false;

  const PAY_ONCE = "https://academy.ceodetuvida.com/courses/offers/aba9c77c-959f-42bb-bfd4-4eefe1b60de6";
  const PAY_SPLIT = "https://academy.ceodetuvida.com/courses/offers/c7d9708c-a13a-463c-9b65-be0e98abf33b";

  onMount(() => { mounted = true; });
</script>

<style>
  .sec-brown { background: var(--webinar-secondary); color: var(--webinar-secondary-foreground); }
  .sec-light { background: #ffffff; color: #111827; }
  .badge { display:inline-block; padding:.2rem .4rem; border-radius:.4rem; background: var(--webinar-primary); color:#fff; font-weight:600; font-size:.6rem; letter-spacing:.02em; }
  .btn { display:inline-block; padding:.4rem .6rem; border-radius:.5rem; font-weight:600; border:1px solid currentColor; font-size:.7rem; }
  .btn-primary { background: var(--webinar-primary); color:#fff; border-color: var(--webinar-primary); }
  .btn-primary:hover { filter: brightness(1.05); transform: translateY(-1px); }
  .btn-ghost { background: transparent; color: var(--webinar-primary); border-color: var(--webinar-primary); }
  .btn-ghost:hover { background: var(--webinar-primary); color:#fff; }
</style>

{#if mounted}
<main class="font-poppins min-h-screen">
  <section class="relative flex items-center justify-center h-[20vh] sm:h-[25vh] md:h-[28vh] lg:h-[32vh] bg-black">
    <img src="/fundamentals.png" alt="FUNDAMENTALS (logo)" class="h-full w-auto object-contain" />
    <div class="absolute inset-0 bg-black/55 pointer-events-none"></div>
  </section>

  <!-- Intro -->
  <section class="sec-brown py-8 sm:py-10">
    <div class="container mx-auto px-4 max-w-3xl text-center">
      <span class="badge mb-3">FUNDAMENTALS</span>
      <h1 class="text-sm sm:text-base md:text-lg font-bold leading-snug mb-3">Estás cumpliendo con todo… menos contigo.</h1>
      <p class="text-xs sm:text-sm md:text-base opacity-90 mb-4">
        Te volviste experto en apagar fuegos, pero ya no sabes qué te ilusiona. Cada día rindes, entregas, funcionas… pero sientes que tu chispa se esfumó.
        <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> es el primer paso para salir del caos, reconectar contigo y recuperar el timón de tu vida.
      </p>
      <ul class="mt-4 grid sm:grid-cols-2 gap-2 text-left text-xs sm:text-sm md:text-base">
        <li>✔ Solo 5 semanas</li>
        <li>✔ A tu ritmo y sin horarios fijos</li>
        <li>✔ 100% online y de acceso inmediato</li>
        <li>✔ Soporte directo de Leslie Beltrán</li>
      </ul>
    </div>
  </section>

  <!-- Para quién es -->
  <section class="sec-light py-8 sm:py-10">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-sm sm:text-base md:text-lg font-bold text-center mb-4">¿Para quién es <span class="text-[var(--webinar-primary)]">Fundamentals</span>?</h2>
      <p class="text-xs sm:text-sm md:text-base text-center mb-4">
        <strong>Fundamentals no es para los que se engañan diciendo “todo está bien”.</strong> Es para quienes reconocen que la vida que llevan no se parece en nada a la que soñaron.
      </p>
      <ul class="space-y-2 text-xs sm:text-sm md:text-base">
        <li>• Vives en caos, corriendo de un pendiente a otro sin dirección.</li>
        <li>• Estás abrumado, apagando fuegos todo el día.</li>
        <li>• Llevas años en el mismo puesto y sientes que tu vida está estancada.</li>
        <li>• Tu vida se volvió gris, sin chispa, sin ilusión.</li>
        <li>• Te la pasas complaciendo a los demás.</li>
        <li>• Siempre te pones en el último lugar.</li>
      </ul>
      <div class="mt-6 p-3 rounded-lg border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm md:text-base">
        <p><span class="font-bold">La verdad es dura:</span> ❌ No es que no tengas tiempo. <span class="text-green-700 font-semibold">✅ Es que dejaste de ser el protagonista.</span></p>
      </div>
    </div>
  </section>

  <!-- Logros -->
  <section class="sec-brown py-8 sm:py-10">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-sm sm:text-base md:text-lg font-bold text-center mb-4">En 5 semanas, esto es lo que lograrás</h2>
      <ul class="space-y-2 text-xs sm:text-sm md:text-base">
        <li>• Salir del desorden mental.</li>
        <li>• Saber qué priorizar sin sentir que todo es urgente.</li>
        <li>• Decidir con seguridad, sin tantas vueltas.</li>
        <li>• Recuperar energía y entusiasmo.</li>
        <li>• Ganar tiempo real para ti y tu familia.</li>
      </ul>
      <div class="mt-6 flex flex-col sm:flex-row gap-2 justify-center text-xs sm:text-sm md:text-base">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">COMIENZA HOY · $6,500 MXN</a>
        <a class="btn btn-ghost" href={PAY_SPLIT} target="_blank">O 2 pagos de $3,250 MXN</a>
      </div>
    </div>
  </section>

  <!-- Más logros -->
  <section class="sec-light py-8 sm:py-10">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-sm sm:text-base md:text-lg font-bold text-center mb-4">¿Qué más vas a lograr?</h2>
      <ul class="space-y-2 text-xs sm:text-sm md:text-base">
        <li>• Recuperar tiempo para ti.</li>
        <li>• Dormir en paz, sin vueltas mentales.</li>
        <li>• Llegar a casa con mejor humor.</li>
        <li>• Tener dirección clara.</li>
        <li>• Tomar decisiones más rápidas.</li>
        <li>• Reconectarte contigo mismo.</li>
        <li>• Bajar la irritabilidad y el estrés.</li>
        <li>• Volver a entusiasmarte.</li>
      </ul>
      <p class="mt-4 text-xs sm:text-sm md:text-base">🔥 Fundamentals te devuelve la claridad, el ánimo y la fuerza.</p>
    </div>
  </section>

  <!-- Y así sucesivamente para cada sección... -->
</main>
{/if}
