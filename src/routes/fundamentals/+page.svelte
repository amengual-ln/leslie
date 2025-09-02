<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let mounted = false;

  // Links de pago
  const PAY_ONCE = "https://academy.ceodetuvida.com/courses/offers/aba9c77c-959f-42bb-bfd4-4eefe1b60de6";
  const PAY_SPLIT = "https://academy.ceodetuvida.com/courses/offers/c7d9708c-a13a-463c-9b65-be0e98abf33b";

  onMount(() => { mounted = true; });
</script>

<style>
  /* Alternancia de secciones: marrón (usa tu var actual) y blanco */
  .sec-brown { background: var(--webinar-secondary); color: var(--webinar-secondary-foreground); }
  .sec-light { background: #ffffff; color: #111827; }
  .badge { display:inline-block; padding:.25rem .6rem; border-radius:.5rem; background: var(--webinar-primary); color:#fff; font-weight:600; font-size:.75rem; letter-spacing:.02em; }
  .btn { display:inline-block; padding:.75rem 1rem; border-radius:.75rem; font-weight:700; border:1px solid currentColor; transition: all .2s ease; }
  .btn-primary { background: var(--webinar-primary); color:#fff; border-color: var(--webinar-primary); }
  .btn-primary:hover { filter: brightness(1.05); transform: translateY(-1px); }
  .btn-ghost { background: transparent; color: var(--webinar-primary); border-color: var(--webinar-primary); }
  .btn-ghost:hover { background: var(--webinar-primary); color:#fff; }
</style>

{#if mounted}
<main class="font-poppins min-h-screen">
  <!-- HERO compacto con logo (puedes reemplazar la imagen por tu logo) -->
  <section class="relative flex items-center justify-center h-[24vh] sm:h-[30vh] md:h-[34vh] lg:h-[40vh] bg-black">
    <img src="/fundamentals.png" alt="FUNDAMENTALS (logo)" class="h-full w-auto object-contain" />
    <div class="absolute inset-0 bg-black/55 pointer-events-none"></div>
  </section>

  <!-- 1) Intro · MARRÓN -->
  <section class="sec-brown py-12 sm:py-16">
    <div class="container mx-auto px-4 max-w-4xl text-center">
      <span class="badge mb-4">FUNDAMENTALS</span>
      <h1 class="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-6">Estás cumpliendo con todo… menos contigo.</h1>
      <p class="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
        Te volviste experto en apagar fuegos, pero ya no sabes qué te ilusiona. Cada día rindes, entregas, funcionas… pero sientes que tu chispa se esfumó.
        <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> es el primer paso para salir del caos, reconectar contigo y recuperar el timón de tu vida.
      </p>
      <ul class="mt-6 grid sm:grid-cols-2 gap-3 text-left text-sm sm:text-base md:text-lg">
        <li>✔ Solo 5 semanas</li>
        <li>✔ A tu ritmo y sin horarios fijos</li>
        <li>✔ 100% online y de acceso inmediato</li>
        <li>✔ Soporte directo de Leslie Beltrán</li>
      </ul>
    </div>
  </section>

  <!-- 2) ¿Para quién es? · BLANCO -->
  <section class="sec-light py-12 sm:py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">¿Para quién es <span class="text-[var(--webinar-primary)]">Fundamentals</span>?</h2>
      <p class="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-6">
        <strong>Fundamentals no es para los que se engañan diciendo “todo está bien”.</strong> Es para quienes reconocen que la vida que llevan no se parece en nada a la que soñaron. Si esto resuena contigo, es para ti:
      </p>
      <ul class="space-y-4 text-base sm:text-lg md:text-xl">
        <li>• Vives en caos, corriendo de un pendiente a otro sin dirección.</li>
        <li>• Estás abrumado, apagando fuegos todo el día y sin energía para lo que importa.</li>
        <li>• Llevas años en el mismo puesto y sientes que tu vida está estancada.</li>
        <li>• Tu vida se volvió gris, sin emoción, sin chispa, sin ilusión.</li>
        <li>• Te la pasas complaciendo a los demás, aunque eso signifique borrarte a ti.</li>
        <li>• Siempre te pones en el último lugar de tu lista de prioridades.</li>
      </ul>
      <div class="mt-8 p-4 rounded-xl border border-[var(--red,#ef4444)]/30 bg-red-50 text-red-800">
        <p class="text-sm sm:text-base md:text-lg"><span class="font-bold">La verdad es dura:</span> ❌ No es que no tengas tiempo. <span class="text-green-700 font-semibold">✅ Es que dejaste de ser el protagonista de tu propia vida.</span></p>
      </div>
    </div>
  </section>

  <!-- 3) Lo que lograrás en 5 semanas · MARRÓN -->
  <section class="sec-brown py-12 sm:py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">En 5 semanas, esto es lo que lograrás</h2>
      <ul class="space-y-4 text-base sm:text-lg md:text-xl">
        <li>• Salir del desorden mental que te drena todos los días.</li>
        <li>• Saber qué priorizar sin sentir que todo es urgente.</li>
        <li>• Decidir con seguridad, sin dar tantas vueltas en tu cabeza.</li>
        <li>• Recuperar energía y entusiasmo para tu vida personal y profesional.</li>
        <li>• Ganar tiempo real para ti y tu familia.</li>
      </ul>
      <p class="mt-6 text-base sm:text-lg md:text-xl opacity-90">Fundamentals es para quienes ya se cansaron de correr sin rumbo… y ahora quieren tomar el timón de su vida.</p>
      <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">COMIENZA HOY · Pago único $6,500 MXN</a>
        <a class="btn btn-ghost" href={PAY_SPLIT} target="_blank">O 2 pagos de $3,250 MXN</a>
      </div>
    </div>
  </section>

  <!-- 4) ¿Qué más vas a lograr? · BLANCO -->
  <section class="sec-light py-12 sm:py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">¿Qué más vas a lograr en Fundamentals?</h2>
      <p class="text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto mb-8">En solo 5 semanas, vas a lograr cambios que se sienten en tu día a día:</p>
      <ul class="space-y-4 text-base sm:text-lg md:text-xl">
        <li>• Recuperar tiempo para ti, sin descuidar tus responsabilidades.</li>
        <li>• Dormir en paz, sin que tu cabeza siga dándole vuelta a los pendientes.</li>
        <li>• Llegar a casa con mejor humor, disfrutando a tu familia.</li>
        <li>• Tener dirección clara: dejar de sentir que trabajas mucho pero avanzas poco.</li>
        <li>• Tomar decisiones más rápidas y efectivas.</li>
        <li>• Reconectarte contigo mismo y recordar quién eres más allá del trabajo.</li>
        <li>• Bajar la irritabilidad y el estrés; dejar de exigirte como si fueras una máquina.</li>
        <li>• Volver a entusiasmarte con tus proyectos y tu vida.</li>
      </ul>
      <p class="mt-6 text-base sm:text-lg md:text-xl"><span class="font-semibold">🔥 Fundamentals no solo te ayuda a ordenar tu mente:</span> te devuelve la claridad, el ánimo y la fuerza para retomar el timón de tu vida.</p>
    </div>
  </section>

  <!-- 5) Formato del programa · MARRÓN -->
  <section class="sec-brown py-12 sm:py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">El formato de Fundamentals</h2>
      <p class="text-base sm:text-lg md:text-xl text-center mb-6">Fundamentals fue diseñado para adaptarse a tu vida, no para exigirte más.</p>
      <ul class="grid sm:grid-cols-2 gap-4 text-base sm:text-lg md:text-xl">
        <li>• Hazlo a tu ritmo, sin horarios fijos.</li>
        <li>• Acceso inmediato al inscribirte.</li>
        <li>• 5 módulos en video, breves y al punto.</li>
        <li>• Plantillas descargables para aplicar de inmediato.</li>
        <li>• Acompañamiento directo de Leslie Beltrán para resolver tus dudas.</li>
      </ul>
      <p class="mt-6 text-base sm:text-lg md:text-xl opacity-90 text-center">Tú eliges el ritmo. Nosotros te damos la dirección.</p>
      <div class="mt-6 text-center">
        <a href="#video-plataforma" class="underline text-[var(--webinar-primary)] font-semibold">Así se vive Fundamentals desde dentro (ver video)</a>
      </div>
    </div>
  </section>

  <!-- 6) Plan 5 semanas · BLANCO -->
  <section class="sec-light py-12 sm:py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">Aquí está tu plan de 5 semanas</h2>
      <p class="text-base sm:text-lg md:text-xl text-center mb-8">Así es como avanzas dentro de Fundamentals:</p>
      <div class="space-y-6">
        <div><strong>MÓDULO 1:</strong> El gran error que te está costando la vida — Dejar de ponerte en último lugar y empezar a priorizarte sin culpa.</div>
        <div><strong>MÓDULO 2:</strong> Rompiendo el guion que no es tuyo — Soltar creencias heredadas de éxito y felicidad que hoy te drenan.</div>
        <div><strong>MÓDULO 3:</strong> Construyendo tu FAE (Felicidad, Autoconcepto, Éxito) — Diseñar tu brújula interna para tomar mejores decisiones.</div>
        <div><strong>MÓDULO 4:</strong> Diseñando tu nueva vida — Recablear mente y cuerpo para sostener hábitos y cambios reales.</div>
        <div><strong>MÓDULO 5:</strong> Edificando tu FAE — Llevar todo a la acción con pasos concretos y rodearte de lo que sí suma a tu expansión.</div>
      </div>
      <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">QUIERO EMPEZAR YA · $6,500 MXN</a>
        <a class="btn btn-ghost" href={PAY_SPLIT} target="_blank">O 2 pagos de $3,250 MXN</a>
      </div>
      <div class="mt-6 text-center">
        <a href="#" class="underline text-[var(--webinar-primary)] font-semibold">👉 Descargar PDF con el plan completo</a>
      </div>
    </div>
  </section>

  <!-- 7) Video explicación · MARRÓN -->
  <section id="video-plataforma" class="sec-brown py-12 sm:py-16 text-center">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Aquí te cuento por qué funciona Fundamentals</h2>
      <div class="w-full rounded-2xl shadow-2xl overflow-hidden">
        <iframe src="https://www.youtube.com/embed/GfJJV4_EqYg" title="Video de la plataforma Fundamentals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[500px]"></iframe>
      </div>
    </div>
  </section>

  <!-- 8) ¿Por qué lo creé? · BLANCO -->
  <section class="sec-light py-12 sm:py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">¿Por qué creé Fundamentals?</h2>
      <div class="space-y-4 text-base sm:text-lg md:text-xl">
        <p>Después de trabajar con cientos de ejecutivos y empresarios descubrí algo claro: muchos viven con agendas llenas, pero vacíos por dentro. Yo también estuve ahí.</p>
        <p>Sé lo que es correr todo el día y sentir que no avanzas. Sé lo que es vivir en modo supervivencia, aparentando que todo está bien cuando por dentro no lo está.</p>
        <p>Fundamentals nació de mi propia experiencia y de años acompañando a líderes como tú. Está basado en neurociencias, ciencias de la felicidad y coaching de alto desempeño.</p>
        <p><strong>No es un cursito motivacional.</strong> Es una guía para crear una vida con sentido, desde adentro hacia afuera. No se trata de lograr más; se trata de reconectar contigo, redefinir tu éxito y diseñar una vida que realmente se sienta tuya. Y sí, es posible.</p>
      </div>
    </div>
  </section>

  <!-- 9) Testimonios · MARRÓN -->
  <section class="sec-brown py-12 sm:py-16">
    <div class="container mx-auto px-4 max-w-5xl text-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-10">Lo que dicen quienes ya vivieron Fundamentals</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <div class="bg-white/10 rounded-xl p-6">
          <p class="italic mb-4">“Llevaba 20 años intentando alcanzar un éxito que nunca fue mío. En 5 semanas redefiní lo que realmente quiero y, por primera vez, me sentí libre.”</p>
          <p class="font-semibold text-[var(--webinar-primary)]">Luis</p>
          <p class="text-sm opacity-80">Director Comercial</p>
        </div>
        <div class="bg-white/10 rounded-xl p-6">
          <p class="italic mb-4">“Siempre creí que necesitaba otra maestría. FUNDAMENTALS me mostró que no me faltaba preparación, me faltaba claridad.”</p>
          <p class="font-semibold text-[var(--webinar-primary)]">Alejandra</p>
          <p class="text-sm opacity-80">Gerente de Finanzas</p>
        </div>
        <div class="bg-white/10 rounded-xl p-6">
          <p class="italic mb-4">“Pensé que priorizarme era egoísta. Hoy sé que es necesario. Aprendí a tomar decisiones sin culpa y a reconectarme conmigo.”</p>
          <p class="font-semibold text-[var(--webinar-primary)]">Carla</p>
          <p class="text-sm opacity-80">Directora de Marketing</p>
        </div>
      </div>
      <div class="mt-8">
        <p class="text-sm sm:text-base md:text-lg opacity-90">¿Te gustaría agregar <strong>screenshots</strong> de mensajes reales? Puedo armar un carrusel con 4 imágenes.</p>
      </div>
    </div>
  </section>

  <!-- 10) Cierre/CTA · BLANCO -->
  <section class="sec-light py-12 sm:py-16">
    <div class="container mx-auto px-4 max-w-3xl text-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Tu vida puede sentirse más ligera, empieza aquí.</h2>
      <p class="text-base sm:text-lg md:text-xl">No tienes que seguir corriendo sin parar ni vivir con la mente saturada. Hoy puedes elegir un camino más claro, con tiempo para ti y tranquilidad en tu día a día. <strong>Fundamentals</strong> es tu guía para recuperar enfoque, calma y dirección.</p>
      <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">LISTO PARA ENTRAR · $6,500 MXN</a>
        <a class="btn btn-ghost" href={PAY_SPLIT} target="_blank">O 2 pagos de $3,250 MXN</a>
      </div>
    </div>
  </section>
</main>
{/if}
