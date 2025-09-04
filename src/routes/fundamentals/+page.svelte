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
  /* Paletas de sección */
  .sec-brown { background: var(--webinar-secondary); color: var(--webinar-secondary-foreground); }
  .sec-light { background: #f5f0e6; color: #111827; } /* beige/dorado rebajado */

  /* Tipografía base más grande que MailerLite (>=18px en móvil) */
  .webinar-page {
    font-size: 18px;        /* base móvil */
    line-height: 1.7;       /* más aire */
    letter-spacing: 0.1px;
  }
  @media (min-width: 640px) { /* sm */
    .webinar-page { font-size: 19px; }
  }
  @media (min-width: 768px) { /* md */
    .webinar-page { font-size: 20px; }
  }
  @media (min-width: 1024px) { /* lg */
    .webinar-page { font-size: 20.5px; }
  }

  /* Contenedores y ritmo vertical */
  .container { max-width: 72rem; } /* más ancho cómodo */
  .stack > * + * { margin-top: 1.25rem; }
  .stack-lg > * + * { margin-top: 1.5rem; }
  .stack-xl > * + * { margin-top: 2rem; }

  /* Botones */
  .btn {
    display:inline-block; padding:.7rem 1.1rem; border-radius:.6rem;
    font-weight:600; border:1px solid currentColor; font-size:1em;
    transition:transform .15s ease, filter .15s ease, background .15s ease, color .15s ease;
    text-align:center;
  }
  .btn-primary { background: var(--webinar-primary); color:#fff; border-color: var(--webinar-primary); }
  .btn-primary:hover { filter: brightness(1.06); transform: translateY(-1px); }
  .btn-ghost   { background: transparent; color: var(--webinar-primary); border-color: var(--webinar-primary); }
  .btn-ghost:hover { background: var(--webinar-primary); color:#fff; }

  /* Tarjetas */
  .card {
    background: rgba(0,0,0,.35);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 14px;
    padding: 1.25rem;
  }
  @media (min-width:768px){
    .card { padding: 1.5rem; }
  }

  /* Headings (títulos sin resaltar la palabra) */
  h1, h2, h3 { line-height: 1.2; letter-spacing: .2px; }
  h1 { font-size: 1.55em; }
  h2 { font-size: 1.35em; }
  h3 { font-size: 1.15em; }
  @media (min-width:768px){
    h1 { font-size: 1.9em; }
    h2 { font-size: 1.55em; }
    h3 { font-size: 1.2em; }
  }

  /* Listas con aire */
  .bullets { display:grid; gap:.75rem; }
  @media (min-width:768px){ .bullets { gap:.9rem; } }

  /* Vídeos */
  .video { width:100%; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,.25); }
  .video iframe { width:100%; height: 48vw; max-height: 520px; min-height: 260px; }
  @media (min-width:640px){ .video iframe { min-height: 320px; } }
  @media (min-width:768px){ .video iframe { min-height: 420px; } }

  /* Grid responsivo */
  .grid-2 { display:grid; gap:1rem; }
  @media (min-width:768px){ .grid-2 { grid-template-columns: 1fr 1fr; gap:1.25rem; } }
</style>

{#if mounted}
<main class="webinar-page font-poppins">
  <!-- HERO -->
  <section class="relative flex items-center justify-center h-[22vh] sm:h-[28vh] bg-black">
    <img src="/fundamentals.png" alt="FUNDAMENTALS (LOGO)" class="h-full w-auto object-contain" />
    <div class="absolute inset-0 bg-black/55 pointer-events-none"></div>
  </section>

  <!-- INTRO -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-6 max-w-4xl text-center stack">
      <h1>Estás cumpliendo con todo… menos contigo.</h1>
      <p>
        Te volviste experto en apagar fuegos, pero ya no sabes qué te ilusiona. Cada día rindes, entregas, funcionas… pero sientes que tu chispa se esfumó.
        <strong class="text-white">Fundamentals</strong> es el primer paso para salir del caos, reconectar contigo y recuperar el timón de tu vida.
      </p>
      <ul class="bullets text-left">
        <li>✔ Solo 5 semanas</li>
        <li>✔ A tu ritmo y sin horarios fijos</li>
        <li>✔ 100% online y de acceso inmediato</li>
        <li>✔ Soporte directo de Leslie Beltrán, Business Life Coach</li>
      </ul>
    </div>
  </section>

  <!-- PARA QUIÉN ES -->
  <section class="sec-light py-12">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center">¿Para quién es Fundamentals?</h2>
      <p><strong class="text-[var(--webinar-primary)]">Fundamentals</strong> no es para los que se engañan diciendo “todo está bien”. Es para quienes reconocen que la vida que llevan no se parece en nada a la que soñaron.</p>
      <p>Si esto resuena contigo, <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> es para ti:</p>
      <ul class="bullets">
        <li>• Vives en caos, corriendo de un pendiente a otro sin dirección.</li>
        <li>• Estás abrumado, apagando fuegos todo el día y sin energía para lo que importa.</li>
        <li>• Llevas años en el mismo puesto y, aunque no lo digas, sientes que tu vida está estancada.</li>
        <li>• Tu vida se volvió gris, sin emoción, sin chispa, sin ilusión.</li>
        <li>• Te la pasas complaciendo a los demás, aunque eso signifique borrarte a ti.</li>
        <li>• Siempre te pones en el último lugar de tu lista de prioridades.</li>
      </ul>
      <div class="card">
        <p>❌ No es que no tengas tiempo.<br>✅ Es que dejaste de ser el protagonista de tu propia vida.</p>
      </div>
    </div>
  </section>

  <!-- LOGROS (5 semanas) -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center">En 5 semanas, esto es lo que lograrás:</h2>
      <ul class="bullets">
        <li>• Salir del desorden mental que te drena todos los días.</li>
        <li>• Saber qué priorizar sin sentir que todo es urgente.</li>
        <li>• Decidir con seguridad, sin dar tantas vueltas en tu cabeza.</li>
        <li>• Recuperar energía y entusiasmo para tu vida personal y profesional.</li>
        <li>• Ganar tiempo real para ti y tu familia.</li>
      </ul>
      <p><strong class="text-white">Fundamentals</strong> es para quienes ya se cansaron de correr sin rumbo… y ahora quieren tomar el timón de su vida.</p>
    </div>
  </section>

  <!-- CTA PAGO #1 -->
  <section class="sec-light py-12 text-center">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2>COMIENZA HOY</h2>
      <div class="grid-2">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
        <a class="btn btn-ghost"   href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
      </div>
      <div>
        <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
      </div>
    </div>
  </section>

  <!-- ¿QUÉ MÁS VAS A LOGRAR? -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center">¿Qué más vas a lograr en Fundamentals?</h2>
      <p>En solo 5 semanas, vas a lograr cambios que se sienten en tu día a día:</p>
      <ul class="bullets">
        <li>• Recuperar tiempo para ti, sin descuidar tus responsabilidades.</li>
        <li>• Dormir en paz, sin que tu cabeza siga dándole vueltas a los pendientes a la 1:00 a.m.</li>
        <li>• Llegar a casa con mejor humor, disfrutando a tu familia en lugar de descargar el estrés en ellos.</li>
        <li>• Tener dirección clara, dejar de sentir que trabajas mucho pero avanzas poco.</li>
        <li>• Tomar decisiones más rápidas y efectivas, sin gastar energía en darle vueltas una y otra vez.</li>
        <li>• Reconectarte contigo mismo, y recordar quién eres más allá del trabajo.</li>
        <li>• Bajar la irritabilidad y el estrés, dejando de exigirte como si fueras una máquina.</li>
        <li>• Volver a entusiasmarte con tus proyectos y tu vida, con la energía de estar construyendo algo que sí vale la pena.</li>
      </ul>
      <p>🔥 <strong class="text-white">Fundamentals</strong> no solo te ayuda a ordenar tu mente: te devuelve la claridad, el ánimo y la fuerza para retomar el timón de tu vida.</p>
    </div>
  </section>

  <!-- ¿SUENA DEMASIADO BUENO...? + MÉTODO -->
  <section class="sec-light py-12">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center">¿Suena demasiado bueno para ser verdad?</h2>
      <p>Es normal que lo pienses. Sobre todo si ya intentaste cambiar desde la fuerza de voluntad, desde libros de autoayuda o terapias que no conectan contigo.</p>
      <p>Pero esto no es un cursito para “sentirte mejor”. Es un método probado, basado en:</p>
      <ul class="bullets">
        <li>• Neurociencia aplicada</li>
        <li>• Herramientas para reenfocar tu mente y salir del caos</li>
        <li>• Coaching de alto desempeño</li>
      </ul>
      <p>No te doy motivación. Te doy dirección.</p>
      <p>No te doy teoría. Te doy estrategia.</p>
    </div>
  </section>

  <!-- ¿POR QUÉ SOLO 5 SEMANAS? -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center">¿Y por qué solo 5 semanas?</h2>
      <p>Porque cuando entiendes cómo funciona tu mente, no necesitas años. Necesitas herramientas precisas. Y eso es lo que obtienes aquí:</p>
      <ul class="bullets">
        <li>→ Recableas tu sistema operativo mental</li>
        <li>→ Tomas decisiones desde otro nivel de conciencia</li>
        <li>→ Recuperas el timón de tu vida</li>
      </ul>
      <div class="grid-2">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
        <a class="btn btn-ghost"   href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
      </div>
    </div>
  </section>

  <!-- FORMATO -->
  <section class="sec-light py-12">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center">El formato de Fundamentals</h2>
      <p><strong class="text-[var(--webinar-primary)]">Fundamentals</strong> fue diseñado para adaptarse a tu vida, no para exigirte más.</p>
      <ul class="bullets">
        <li>• Hazlo a tu ritmo, sin horarios fijos.</li>
        <li>• Acceso inmediato al inscribirte.</li>
        <li>• 5 módulos en video, breves y al punto.</li>
        <li>• Plantillas descargables para aplicar de inmediato.</li>
        <li>• Acompañamiento directo de Leslie Beltrán para resolver tus dudas.</li>
      </ul>
      <p>Tú eliges el ritmo. Nosotros te damos la dirección.</p>
    </div>
  </section>

  <!-- VIDEO: POR QUÉ FUNCIONA -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2 class="text-center">Aquí te cuento por qué funciona <span class="text-white">Fundamentals</span></h2>
      <div class="video"><iframe src={VIDEO_FUNCIONA} title="Por qué funciona Fundamentals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>
  </section>

  <!-- PLAN 5 SEMANAS + PDF -->
  <section class="sec-light py-12">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center">Aquí está tu plan de 5 semanas</h2>
      <p>Así es como avanzas dentro de <strong class="text-[var(--webinar-primary)]">Fundamentals</strong>:</p>
      <ul class="bullets">
        <li><strong>MÓDULO 1: El gran error que te está costando la vida</strong><br>Descubres cómo dejar de ponerte en último lugar y empezar a priorizarte sin culpa.</li>
        <li><strong>MÓDULO 2: Rompiendo el guion que no es tuyo</strong><br>Sueltas creencias heredadas de éxito y felicidad que hoy te drenan.</li>
        <li><strong>MÓDULO 3: Construyendo tu FAE (Felicidad, Autoconcepto, Éxito)</strong><br>Diseñas tu brújula interna para tomar mejores decisiones.</li>
        <li><strong>MÓDULO 4: Diseñando tu nueva vida</strong><br>Aprendes a recablear tu mente y cuerpo para sostener hábitos y cambios reales.</li>
        <li><strong>MÓDULO 5: Edificando tu FAE</strong><br>Llevas todo a la acción con pasos concretos y comienzas a rodearte de lo que sí suma a tu expansión.</li>
      </ul>
      <p>👉 ¿Quieres ver lo que lograrás semana a semana? <a href={PDF_PLAN} target="_blank" class="underline text-[var(--webinar-primary)]">Descargar PDF con el plan completo</a></p>
    </div>
  </section>

  <!-- VIDEO: ASÍ SE VE POR DENTRO -->
  <section class="sec-light py-0">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2 class="text-center">Así se vive <span class="text-[var(--webinar-primary)]">Fundamentals</span> desde dentro</h2>
      <div class="video"><iframe src={VIDEO_ADENTRO} title="Así se ve Fundamentals desde adentro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>
  </section>

  <!-- ¿POR QUÉ LO CREÉ? -->
  <section class="sec-brown py-12">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center">¿Por qué creé Fundamentals?</h2>
      <p>Después de trabajar con cientos de ejecutivos y empresarios descubrí algo claro: muchos viven con agendas llenas, pero vacíos por dentro. Yo también estuve ahí.</p>
      <ul class="bullets">
        <li>• Sé lo que es correr todo el día y sentir que no avanzas.</li>
        <li>• Sé lo que es vivir en modo supervivencia, aparentando que todo está bien cuando por dentro no lo está.</li>
        <li>• <strong class="text-white">Fundamentals</strong> nació de mi propia experiencia y de años acompañando a líderes como tú.</li>
        <li>• No es un cursito motivacional. Es una guía para crear una vida con sentido, desde adentro hacia afuera.</li>
      </ul>
      <p>Y no se trata de lograr más. Se trata de reconectar contigo, redefinir tu éxito y diseñar una vida que realmente se sienta tuya. Y sí, es posible.</p>
    </div>
  </section>

  <!-- TESTIMONIOS (TEXTO · 2 COLUMNAS) -->
  <section class="sec-brown py-0">
    <div class="container mx-auto px-6 max-w-5xl stack-xl">
      <h2 class="text-center">Lo que dicen quienes ya vivieron <span class="text-white">Fundamentals</span></h2>
      <div class="grid-2">
        <div class="card text-left">
          <p class="italic">“Estoy terminando la quinta semana de <span class="text-white">Fundamentals</span> y estoy impactado de mis logros: he dejado de andar corriendo todo el día. Llevo dos semanas que termino los pendientes en tiempo y forma. Mis niveles de estrés han bajado en un 50%.”</p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Rodrigo, Gerente de Operaciones</p>
        </div>
        <div class="card text-left">
          <p class="italic">“Es increíble cómo en 5 semanas mi caos se fue. Me siento enfocado y con mucha claridad para decidir, delegar y hasta para decir NO. Ya no necesito correr entre semana para ganar tiempo.”</p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Sofía, Directora de RRHH</p>
        </div>
        <div class="card text-left">
          <p class="italic">“Estoy terminando el módulo 3 de <span class="text-white">Fundamentals</span> y amo los cambios que estoy viendo en mi vida. Siento que me estoy quitando toneladas de culpas, miedos e inseguridades. Ya hasta mi esposo me dijo que ando de mejor humor.”</p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Miguel, Ejecutivo Comercial</p>
        </div>
        <div class="card text-left">
          <p class="italic">“En la oficina me siento con claridad mental, ya no ahogado en mil pendientes. Participo más en reuniones y mis ideas han sido aplaudidas. Y en casa, la comunicación ha mejorado muchísimo.”</p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Ana, Consultora Financiera</p>
        </div>
        <div class="card text-left">
          <p class="italic">“A raíz de <span class="text-white">Fundamentals</span> mis días han dejado de ser caóticos y me siento más seguro a la hora de dar mi opinión en reuniones. Gracias por crear este programa que me permitió ir a mi ritmo.”</p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Javier, Director de Estrategia</p>
        </div>
        <div class="card text-left">
          <p class="italic">“Acabo de hacer la primera actividad del módulo 1 de <span class="text-white">Fundamentals</span> y me di cuenta de cómo yo solo me estaba poniendo el pie para subir de puesto. Estoy en shock, pero con claridad porque por fin pude ver dónde me estaba atorando.”</p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Valeria, Líder de Proyecto</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CIERRE + CTA FINAL + WHATSAPP -->
  <section class="sec-light py-12">
    <div class="container mx-auto px-6 max-w-4xl text-center stack">
      <h2>Tu vida puede sentirse más ligera, empieza aquí.</h2>
      <p>No tienes que seguir corriendo sin parar ni vivir con la mente saturada. Hoy puedes elegir un camino más claro, con tiempo para ti y tranquilidad en tu día a día. <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> es tu guía para recuperar enfoque, calma y dirección.</p>
      <div class="grid-2">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
        <a class="btn btn-ghost"   href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
      </div>
      <div>
        <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
      </div>
    </div>
  </section>
</main>
{/if}
