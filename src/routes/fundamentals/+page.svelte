
<script>
  import { onMount } from 'svelte';
  let mounted = false;
  onMount(() => { mounted = true; });

  // Enlaces
  const PAY_ONCE   = "https://academy.ceodetuvida.com/courses/offers/aba9c77c-959f-42bb-bfd4-4eefe1b60de6";
  const PAY_SPLIT  = "https://academy.ceodetuvida.com/courses/offers/c7d9708c-a13a-463c-9b65-be0e98abf33b";
  const PDF_PLAN   = "https://drive.google.com/file/d/1RI4RRpaB7B0L3v1jL3tvSNXCbL5KiGva/view?usp=sharing";
  const WHATSAPP   = "https://wa.link/fundamentals";
  const VIDEO_FUNCIONA = "https://www.youtube.com/embed/GfJJV4_EqYg?si=NcQY4c4ROdrCCDV2";
  const VIDEO_ADENTRO  = "https://www.youtube.com/embed/vYoHHJQISiw";
</script>

<style>
  .sec-brown { background: var(--webinar-secondary); color: var(--webinar-secondary-foreground); }
  .sec-light { background: #f5f0e6; color: #111827; } /* beige/dorado rebajado */

  .btn {
    display:inline-block; padding:.6rem 1rem; border-radius:.5rem;
    font-weight:600; border:1px solid currentColor; font-size:1rem;
    transition:transform .15s ease, filter .15s ease, background .15s ease, color .15s ease;
  }
  .btn-primary { background: var(--webinar-primary); color:#fff; border-color: var(--webinar-primary); }
  .btn-primary:hover { filter: brightness(1.05); transform: translateY(-1px); }
  .btn-ghost   { background: transparent; color: var(--webinar-primary); border-color: var(--webinar-primary); }
  .btn-ghost:hover { background: var(--webinar-primary); color:#fff; }
</style>

{#if mounted}
<main class="font-poppins min-h-screen">
  <!-- HERO -->
  <section class="relative flex items-center justify-center h-[22vh] sm:h-[28vh] bg-black">
    <img src="/fundamentals.png" alt="FUNDAMENTALS (LOGO)" class="h-full w-auto object-contain" />
    <div class="absolute inset-0 bg-black/55 pointer-events-none"></div>
  </section>

  <!-- INTRO -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-4 max-w-3xl text-center">
      <h1 class="text-lg sm:text-xl md:text-2xl font-bold mb-4">Estás cumpliendo con todo… menos contigo.</h1>
      <p class="text-base sm:text-lg md:text-xl mb-5">
        Te volviste experto en apagar fuegos, pero ya no sabes qué te ilusiona. Cada día rindes, entregas, funcionas… pero sientes que tu chispa se esfumó.
        <strong class="text-white">Fundamentals</strong> es el primer paso para salir del caos, reconectar contigo y recuperar el timón de tu vida.
      </p>
      <ul class="text-left text-base sm:text-lg md:text-xl space-y-2">
        <li>✔ Solo 5 semanas</li>
        <li>✔ A tu ritmo y sin horarios fijos</li>
        <li>✔ 100% online y de acceso inmediato</li>
        <li>✔ Soporte directo de Leslie Beltrán</li>
      </ul>
    </div>
  </section>

  <!-- PARA QUIÉN ES -->
  <section class="sec-light py-12">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-5 text-center">¿Para quién es Fundamentals?</h2>
      <p class="text-base sm:text-lg md:text-xl mb-4">
        <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> no es para los que se engañan diciendo “todo está bien”. Es para quienes reconocen que la vida que llevan no se parece en nada a la que soñaron.
      </p>
      <ul class="text-base sm:text-lg md:text-xl space-y-2">
        <li>• Vives en caos, corriendo de un pendiente a otro sin dirección.</li>
        <li>• Estás abrumado, apagando fuegos todo el día y sin energía para lo que importa.</li>
        <li>• Llevas años en el mismo puesto y sientes que tu vida está estancada.</li>
        <li>• Tu vida se volvió gris, sin emoción, sin chispa, sin ilusión.</li>
        <li>• Te la pasas complaciendo a los demás.</li>
        <li>• Siempre te pones en el último lugar.</li>
      </ul>
      <div class="mt-6 text-base sm:text-lg md:text-xl bg-red-50 border border-red-200 p-4 rounded">
        <p>❌ No es que no tengas tiempo.<br>✅ Es que dejaste de ser el protagonista de tu propia vida.</p>
      </div>
    </div>
  </section>

  <!-- LOGROS PRINCIPALES -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-5 text-center">En 5 semanas, esto es lo que lograrás:</h2>
      <ul class="text-base sm:text-lg md:text-xl space-y-2">
        <li>• Salir del desorden mental.</li>
        <li>• Saber qué priorizar sin sentir que todo es urgente.</li>
        <li>• Decidir con seguridad.</li>
        <li>• Recuperar energía y entusiasmo.</li>
        <li>• Ganar tiempo real para ti y tu familia.</li>
      </ul>
      <p class="text-base sm:text-lg md:text-xl mt-3">
        <strong class="text-white">Fundamentals</strong> es para quienes ya se cansaron de correr sin rumbo… y ahora quieren tomar el timón de su vida.
      </p>
    </div>
  </section>

  <!-- CTA PAGOS #1 -->
  <section class="sec-light py-12 text-center">
    <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-4">COMIENZA HOY</h2>
    <div class="flex flex-col sm:flex-row justify-center gap-4 text-base sm:text-lg md:text-xl">
      <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
      <a class="btn btn-ghost"   href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
    </div>
  </section>

  <!-- WHATSAPP REFUERZO #1 -->
  <section class="sec-light py-6 text-center">
    <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
  </section>

  <!-- VIDEO 1: POR QUÉ FUNCIONA -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-4 max-w-4xl text-center">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-6">
        Te explico por qué funciona <span class="text-white">Fundamentals</span>
      </h2>
      <div class="w-full rounded-2xl shadow-2xl overflow-hidden">
        <iframe
          src={VIDEO_FUNCIONA}
          title="Video: Por qué funciona Fundamentals"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
        </iframe>
      </div>
    </div>
  </section>

  <!-- MÁS LOGROS -->
  <section class="sec-brown py-12 pt-0">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-5 text-center">¿Qué más vas a lograr en Fundamentals?</h2>
      <ul class="text-base sm:text-lg md:text-xl space-y-2">
        <li>• Recuperar tiempo para ti.</li>
        <li>• Dormir en paz sin vueltas mentales.</li>
        <li>• Llegar a casa con mejor humor.</li>
        <li>• Tener dirección clara.</li>
        <li>• Tomar decisiones más rápidas.</li>
        <li>• Reconectarte contigo mismo.</li>
        <li>• Bajar la irritabilidad y el estrés.</li>
        <li>• Volver a entusiasmarte.</li>
      </ul>
      <p class="mt-4 text-base sm:text-lg md:text-xl">
        🔥 <strong class="text-white">Fundamentals</strong> no solo te ayuda a ordenar tu mente: te devuelve la claridad, el ánimo y la fuerza.
      </p>
    </div>
  </section>

  <!-- FORMATO -->
  <section class="sec-light py-12">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-5">El formato de Fundamentals</h2>
      <ul class="text-base sm:text-lg md:text-xl space-y-2">
        <li>• Hazlo a tu ritmo, sin horarios fijos.</li>
        <li>• Acceso inmediato al inscribirte.</li>
        <li>• 5 módulos en video, breves y al punto.</li>
        <li>• Plantillas descargables.</li>
        <li>• Acompañamiento directo de Leslie Beltrán.</li>
      </ul>
    </div>
  </section>

  <!-- PLAN (PDF) -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-5">Aquí está tu plan de 5 semanas</h2>
      <ul class="text-base sm:text-lg md:text-xl space-y-2">
        <li>MÓDULO 1: El gran error que te está costando la vida</li>
        <li>MÓDULO 2: Rompiendo el guion que no es tuyo</li>
        <li>MÓDULO 3: Construyendo tu FAE</li>
        <li>MÓDULO 4: Diseñando tu nueva vida</li>
        <li>MÓDULO 5: Edificando tu FAE</li>
      </ul>
      <p class="mt-3 text-base sm:text-lg md:text-xl">
        👉 ¿Quieres ver lo que lograrás semana a semana?
        <a href={PDF_PLAN} target="_blank" class="underline text-[var(--webinar-primary)]">Descargar PDF</a>
      </p>
    </div>
  </section>

  <!-- VIDEO 2: ASÍ SE VE POR DENTRO -->
  <section class="sec-light py-12">
    <div class="container mx-auto px-4 max-w-4xl text-center">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-6">
        Así se ve por dentro <span class="text-[var(--webinar-primary)]">Fundamentals</span>
      </h2>
      <div class="w-full rounded-2xl shadow-xl overflow-hidden border border-[var(--webinar-primary)]/30">
        <iframe
          src={VIDEO_ADENTRO}
          title="Video: Así se ve Fundamentals por dentro"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
        </iframe>
      </div>

      <!-- CTA pagos debajo del video -->
      <div class="mt-6 flex flex-col sm:flex-row justify-center gap-4 text-base sm:text-lg md:text-xl">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
        <a class="btn btn-ghost"   href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
      </div>
    </div>
  </section>

  <!-- WHATSAPP REFUERZO #2 -->
  <section class="sec-light py-6 text-center">
    <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
  </section>

  <!-- TESTIMONIOS (TEXTO, 2 COLUMNAS) -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-4 max-w-5xl text-center">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-8">
        Lo que dicen quienes ya vivieron <span class="text-white">Fundamentals</span>
      </h2>

      <div class="grid gap-6 md:grid-cols-2">
        <!-- Testimonio 1 -->
        <div class="bg-black/40 p-6 rounded-lg shadow text-left">
          <p class="text-base sm:text-lg md:text-xl text-[var(--gray-light)] italic">
            “Estoy terminando la quinta semana de <span class="text-white">Fundamentals</span> y estoy impactado de mis logros: he dejado de andar corriendo todo el día.
            Llevo dos semanas que termino los pendientes en tiempo y forma. Mis niveles de estrés han bajado en un 50%.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Rodrigo, Gerente de Operaciones</p>
        </div>

        <!-- Testimonio 2 -->
        <div class="bg-black/40 p-6 rounded-lg shadow text-left">
          <p class="text-base sm:text-lg md:text-xl text-[var(--gray-light)] italic">
            “Es increíble cómo en 5 semanas mi caos se fue. Me siento enfocado y con mucha claridad para decidir, delegar y hasta para decir NO.
            Ya no necesito correr entre semana para ganar tiempo.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Sofía, Directora de RRHH</p>
        </div>

        <!-- Testimonio 3 -->
        <div class="bg-black/40 p-6 rounded-lg shadow text-left">
          <p class="text-base sm:text-lg md:text-xl text-[var(--gray-light)] italic">
            “Estoy terminando el módulo 3 de <span class="text-white">Fundamentals</span> y amo los cambios que estoy viendo en mi vida.
            Siento que me estoy quitando toneladas de culpas, miedos e inseguridades. Ya hasta mi esposo me dijo que ando de mejor humor.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Miguel, Ejecutivo Comercial</p>
        </div>

        <!-- Testimonio 4 -->
        <div class="bg-black/40 p-6 rounded-lg shadow text-left">
          <p class="text-base sm:text-lg md:text-xl text-[var(--gray-light)] italic">
            “En la oficina me siento con claridad mental, ya no ahogado en mil pendientes. Participo más en reuniones y mis ideas han sido aplaudidas.
            Y en casa, la comunicación ha mejorado muchísimo.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Ana, Consultora Financiera</p>
        </div>

        <!-- Testimonio 5 -->
        <div class="bg-black/40 p-6 rounded-lg shadow text-left">
          <p class="text-base sm:text-lg md:text-xl text-[var(--gray-light)] italic">
            “A raíz de <span class="text-white">Fundamentals</span> mis días han dejado de ser caóticos y me siento más seguro a la hora de dar mi opinión en reuniones.
            Gracias por crear este programa que me permitió ir a mi ritmo.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Javier, Director de Estrategia</p>
        </div>

        <!-- Testimonio 6 -->
        <div class="bg-black/40 p-6 rounded-lg shadow text-left">
          <p class="text-base sm:text-lg md:text-xl text-[var(--gray-light)] italic">
            “Acabo de hacer la primera actividad del módulo 1 de <span class="text-white">Fundamentals</span> y me di cuenta de cómo yo solo me estaba poniendo el pie para subir de puesto.
            Estoy en shock, pero con claridad porque por fin pude ver dónde me estaba atorando.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Valeria, Líder de Proyecto</p>
        </div>
      </div>
    </div>
  </section>

  <!-- POR QUÉ LO CREÉ -->
  <section class="sec-brown py-12 pt-0">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-5">¿Por qué creé Fundamentals?</h2>
      <p class="text-base sm:text-lg md:text-xl mb-2">Después de trabajar con cientos de ejecutivos y empresarios descubrí algo claro: muchos viven con agendas llenas, pero vacíos por dentro. Yo también estuve ahí.</p>
      <p class="text-base sm:text-lg md:text-xl mb-2">Sé lo que es correr todo el día y sentir que no avanzas.</p>
      <p class="text-base sm:text-lg md:text-xl mb-2">Sé lo que es vivir en modo supervivencia.</p>
      <p class="text-base sm:text-lg md:text-xl mb-2">
        <strong class="text-white">Fundamentals</strong> nació de mi propia experiencia y de años acompañando a líderes como tú.
      </p>
      <p class="text-base sm:text-lg md:text-xl">Está basado en neurociencias, ciencias de la felicidad y coaching de alto desempeño. No es un cursito motivacional, es una guía para crear una vida con sentido.</p>
    </div>
  </section>

  <!-- CIERRE + CTA FINAL -->
  <section class="sec-light py-12 text-center">
    <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-4">Tu vida puede sentirse más ligera, empieza aquí</h2>
    <p class="text-base sm:text-lg md:text-xl mb-4">
      No tienes que seguir corriendo sin parar ni vivir con la mente saturada. Hoy puedes elegir un camino más claro, con tiempo para ti y tranquilidad en tu día a día.
    </p>
    <p class="text-base sm:text-lg md:text-xl mb-6">
      <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> es tu guía para recuperar enfoque, calma y dirección.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4 text-base sm:text-lg md:text-xl">
      <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
      <a class="btn btn-ghost"   href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
    </div>
    <!-- Refuerzo WhatsApp final -->
    <div class="mt-6">
      <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
    </div>
  </section>
</main>
{/if}
