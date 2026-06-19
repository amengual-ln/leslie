<script>
  import { onMount } from 'svelte';
  let mounted = false;
  onMount(() => { mounted = true; });

  const PAY_ONCE = "https://buy.stripe.com/6oU3cv2pFa3f8nf8KB1Nu0p";
  const PAY_SPLIT = "https://wa.link/fundamentals";
  const PDF_PLAN = "https://drive.google.com/file/d/1kTSqyYbuSeEWJRY2Zjnvv88nj0-xr7oC/view";
  const WHATSAPP = "https://wa.link/fundamentals";
  const VIDEO_FUNCIONA = "https://www.youtube.com/embed/GfJJV4_EqYg?si=NcQY4c4ROdrCCDV2";
  const VIDEO_ADENTRO  = "https://www.youtube.com/embed/vYoHHJQISiw";
</script>

<svelte:head>
  <meta property="og:title" content="Fundamentals — Deja de sentir que tu vida y tu trabajo se han vuelto una carga muy pesada" />
  <meta property="og:description" content="Recupera el control de tu día, tu carrera y tu vida. Solo necesitas 20 minutos al día, 100% online y a tu ritmo." />
  <meta property="og:image" content="https://i.ibb.co/gZr70S09/og-fundamentals-square.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="1200" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.ceodetuvida.com/fundamentals" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://i.ibb.co/gZr70S09/og-fundamentals-square.png" />
</svelte:head>

<style>
  /* Paletas */
  .sec-brown { background: var(--webinar-secondary); color: var(--webinar-secondary-foreground); }
  .sec-light { background: #f5f0e6; color: #111827; }
  .sec-light h1, .sec-light h2, .sec-light h3 { color: #111827 !important; }

  /* Tipografía base grande + aire */
  .webinar-page { font-size: 18px; line-height: 1.7; letter-spacing: .1px; }
  @media (min-width:640px){ .webinar-page { font-size: 19px; } }
  @media (min-width:768px){ .webinar-page { font-size: 20px; } }
  @media (min-width:1024px){ .webinar-page { font-size: 20.5px; } }

  /* Contenedor y ritmo vertical */
  .container { max-width: 72rem; }
  .stack > * + * { margin-top: 1.25rem; }
  .stack-lg > * + * { margin-top: 1.5rem; }
  .stack-xl > * + * { margin-top: 2rem; }

  /* Botones */
  .btn {
    display:inline-block; padding:.8rem 1.2rem; border-radius:.6rem;
    font-weight:600; border:1px solid currentColor; font-size:1.1rem;
    transition:.15s ease; transition-property: transform, filter, background, color;
    text-align:center;
  }
  .btn-primary { background: var(--webinar-primary); color:#fff; border-color: var(--webinar-primary); }
  .btn-primary:hover { filter: brightness(1.06); transform: translateY(-1px); }
  .btn-ghost   { background: transparent; color: var(--webinar-primary); border-color: var(--webinar-primary); }
  .btn-ghost:hover { background: var(--webinar-primary); color:#fff; }

  /* Tarjeta sutil para mensajes / testimonios */
  .card-dark {
    background: rgba(0,0,0,.35);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 14px; padding: 1.25rem;
  }

  /* Vídeos */
  .video { width:100%; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,.25); }
  .video iframe { width:100%; height: 48vw; max-height: 540px; min-height: 260px; }
  @media (min-width:640px){ .video iframe { min-height: 340px; } }
  @media (min-width:768px){ .video iframe { min-height: 460px; } }

  /* Grid 2 columnas fijas (siempre 2) */
  .grid-fixed-2 {
    display:grid; grid-template-columns: 1fr 1fr; gap: 1rem;
  }
  @media (min-width:768px){ .grid-fixed-2 { gap: 1.25rem; } }

  /* Headings */
  h1,h2,h3 { line-height: 1.2; letter-spacing: .2px; }
  h1 { font-size: 1.8em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }
  @media (min-width:768px){
    h1 { font-size: 2.1em; }
    h2 { font-size: 1.7em; }
    h3 { font-size: 1.3em; }
  }

  .body-text {
    font-size: 1.05rem;
    line-height: 1.75;
  }
  @media (min-width:640px){
    .body-text { font-size: 1.1rem; }
  }
  @media (min-width:768px){
    .body-text { font-size: 1.15rem; }
  }

  /* Tarjetas de logros */
  .outcome-card {
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 14px;
    padding: 1.25rem;
  }

  /* Semanas timeline */
  .week-item {
    border-left: 3px solid var(--webinar-primary);
    padding-left: 1.25rem;
  }
</style>

{#if mounted}
<main class="webinar-page font-poppins">

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- HERO                                                    -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="relative flex items-center justify-center h-[18vh] sm:h-[22vh] bg-black">
    <img src="/fundamentals.png" alt="FUNDAMENTALS (LOGO)" class="h-full w-auto object-contain z-10" />
    <div class="absolute inset-0 bg-transparent pointer-events-none"></div>
  </section>

  <section class="sec-brown pt-0 pb-8 sm:pb-10">
    <div class="container mx-auto px-6 max-w-4xl text-left space-y-6">

      <h2 style="font-size: 1.5rem;" class="font-bold">
        Deja de sentir que tu vida y tu trabajo se han vuelto una carga muy pesada.  
      </h2>
      <hr class="border-white/20 my-4" />

      <p class="body-text leading-relaxed">
        Recupera el control de tu día, tu carrera y tu vida para dejar de sentirte
        saturado y empezar a avanzar con más
        <span class="font-semibold text-[var(--webinar-primary)]">orden y menos peso</span>.
      </p>

      <hr class="border-white/20 my-4" />

      <ul class="body-text space-y-2">
        <li><strong>✔ Solo necesitas 20 minutos al día</strong></li>
        <li><strong>✔ Programa grabado y de acceso inmediato</strong></li>
        <li><strong>✔ 2 sesiones grupales en vivo conmigo</strong> para resolver dudas y darte seguimiento puntual</li>
        <li><strong class="text-[var(--webinar-primary)]">✔ 100% online y a tu ritmo</strong></li>
      </ul>

      <hr class="border-white/20 my-4" />
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- ¿ES PARA TI?                                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-light py-14">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">

      <h2 class="text-center font-bold text-xl sm:text-2xl">
        ¿Es para ti?
      </h2>

      <p class="mt-6 body-text">
        <strong>
          <span class="text-[var(--webinar-primary)]">Fundamentals</span> NO es para quienes siguen diciéndose:
        </strong>
      </p>
      <p class="mt-2 body-text italic text-center">
        "Estoy bien, solo es una etapa."
      </p>

      <p class="mt-4 body-text font-bold">
        Es para quienes ya se dieron cuenta de que algo no está funcionando.
      </p>

      <p class="mt-4 body-text font-bold">
        <span class="text-[var(--webinar-primary)]">✔</span> Es para ti, sí:
      </p>

      <ul class="stack mt-4 body-text space-y-2">
        <li>• Tu día empieza corriendo y termina sintiendo que <strong>faltó tiempo</strong>.</li>
        <li>• Trabajas muchísimo pero sientes que tu esfuerzo <strong>no está dando los resultados</strong> que esperabas.</li>
        <li>• Llegas a casa <strong>cansado, de mal humor</strong>, sin ganas de hablar, jugar o conectar con tu familia.</li>
        <li>• Vives con <strong>culpa</strong> por no ser el padre/madre que te gustaría ser, ya que el trabajo absorbe todo tu tiempo y energía.</li>
        <li>• No descansas porque <strong>tu cabeza sigue pensando en pendientes</strong>.</li>
        <li>• Sientes que <strong>todo es urgente</strong> y vives apagando fuegos todo el tiempo.</li>
        <li>• Te prometes organizarte mejor cada semana, pero el viernes vuelves a terminar <strong>igual de saturado</strong>.</li>
        <li>• Aunque trabajas mucho, sientes que <strong>avanzas poco</strong>.</li>
      </ul>

      <div class="card-dark sec-brown mt-6 p-4 rounded-lg text-center body-text">
        <p>❌ Tu problema no es falta de tiempo.<br>
        ✅ Tu problema es que todo se volvió urgente y terminaste cargando más de lo que te toca.</p>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- EN 5 SEMANAS VAS A LOGRAR                               -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">

      <h2 class="text-center font-bold text-xl sm:text-2xl">
        En solo 5 semanas esto es lo que vas a lograr:
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div class="outcome-card">
          <h3 class="font-bold text-[var(--webinar-primary)] mb-2">Dejar de sentir que todo era para ayer</h3>
          <p class="body-text">Tener prioridades claras y menos saturación.</p>
        </div>
        <div class="outcome-card">
          <h3 class="font-bold text-[var(--webinar-primary)] mb-2">Volver a disfrutar tu vida sin culpa</h3>
          <p class="body-text">Llegar a casa con energía y ganas para tu pareja, hijos y para ti.</p>
        </div>
        <div class="outcome-card">
          <h3 class="font-bold text-[var(--webinar-primary)] mb-2">Recuperar energía y espacio para empezar a disfrutar tu vida</h3>
          <p class="body-text">Dejar de estar corriendo todo el tiempo y empezar a vivir con más claridad y orden.</p>
        </div>
        <div class="outcome-card">
          <h3 class="font-bold text-[var(--webinar-primary)] mb-2">Construir una vida que sí se siente tuya</h3>
          <p class="body-text">Dejar de hacer mucho y sentir que avanzas poco, y empezar a tomar decisiones más alineadas a lo que tú realmente quieres lograr.</p>
        </div>
      </div>

      <div class="mt-8 text-center">
        <p class="body-text font-bold text-[var(--webinar-primary)]">
          Y lo mejor: estos cambios no se quedan en teoría.
        </p>
        <p class="body-text mt-2">
          Se sienten en tu trabajo, en tu energía y en tu día a día.
        </p>
      </div>

    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- CTA PAGOS #1                                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-light py-14 text-center">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2>COMIENZA HOY</h2>
      <div class="grid-fixed-2">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank" rel="noopener noreferrer">
          $6,500 un solo pago con tarjeta
        </a>
        <a class="btn btn-ghost" href={PAY_SPLIT} target="_blank" rel="noopener noreferrer">
          Quiero pagar a meses por WhatsApp
        </a>
      </div>
    </div>
  </section>

  <section class="sec-light py-6 text-center">
    <a class="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- TESTIMONIOS                                             -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-5xl stack-xl">
      <h2 class="text-center font-bold">Lo que dicen quienes ya vivieron <span class="text-white">Fundamentals</span></h2>

      <div class="grid-fixed-2">
        {#each [
          { file: "testimonio1.jpeg", name: "Rodrigo, Gerente de Operaciones" },
          { file: "testimonio2.webp", name: "Ramiro, Director de RRHH" },
          { file: "testimonio3.webp", name: "Sofia, Ejecutiva Comercial" },
          { file: "testimonio4.webp", name: "Ana, Consultora Financiera" },
          { file: "testimonio5.jpeg", name: "Javier, Director de Estrategia" },
          { file: "testimonio6.webp", name: "Valeria, Líder de Proyecto" }
        ] as t}
          <div class="card-dark text-left">
            <img
              src={"/testimonios/" + t.file}
              alt={"Testimonio de " + t.name}
              class="w-full h-auto rounded"
              loading="lazy"
              decoding="async"
            />
            <p class="mt-3 font-semibold text-[var(--webinar-primary)]">{t.name}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- FORMATO                                                 -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-light py-14">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center font-bold">
        Diseñado para personas que sienten que no tienen tiempo
      </h2>

      <p class="body-text">
        <span class="text-[var(--webinar-primary)]">Fundamentals</span> fue diseñado para adaptarse a tu vida,
        <strong>no para exigirte más.</strong>
      </p>

      <ul class="stack body-text">
        <li>
          • <strong>Solo necesitas aproximadamente 20 minutos al día.</strong>
          Fundamentals no es un programa con videos eternos y puro bla, bla, bla.
          Es un programa con videos breves, directos y en cada uno de ellos tendrás herramientas para poner en práctica lo aprendido.
        </li>

        <li>• <strong>Programa grabado y de acceso inmediato</strong></li>

        <li>
          • <strong>2 sesiones grupales en vivo conmigo</strong> para resolver dudas y darte seguimiento puntual.
        </li>

        <li>• <strong>5 módulos claros y aplicables</strong></li>
        <li>• <strong>Plantillas descargables</strong></li>
        <li>• <strong>Tendrás 7 semanas de acceso</strong> (5 del programa + 2 adicionales para repasar o ponerte al corriente)</li>
        <li>• Al inscribirte recibirás un <strong>correo con acceso inmediato a la plataforma</strong></li>
      </ul>
      <p class="body-text">
        <strong>Tú eliges el ritmo. Nosotros te damos la estructura y el soporte.</strong>
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- VIDEO 1: POR QUÉ FUNCIONA                              -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2 class="text-center">Te explico porque funciona <span class="text-white">Fundamentals</span></h2>
      <div class="video">
        <iframe src={VIDEO_FUNCIONA} title="Por qué funciona Fundamentals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SUENA DEMASIADO BUENO (se mantiene)                     -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center"><strong>¿Suena demasiado bueno para ser verdad?</strong></h2>

      <p>Es normal que lo pienses.</p>

      <p>
        Sobre todo si ya intentaste cambiar desde la fuerza de voluntad, libros de autoayuda
        o terapias que no conectan contigo.
      </p>

      <p>
        Pero esto no es un cursito para "sentirte mejor".
      </p>

      <p><strong class="text-[var(--webinar-primary)]">Es un método probado, basado en:</strong></p>

      <ul class="stack">
        <li>• Neurociencia aplicada</li>
        <li>• Herramientas para <u>reenfocar</u> tu mente y salir del modo saturación</li>
        <li>• Coaching de alto desempeño</li>
      </ul>

      <p>No te doy motivación.<br>
        <strong class="text-[var(--webinar-primary)]">Te doy dirección.</strong>
      </p>

      <p>No te doy teoría.<br>
        <strong class="text-[var(--webinar-primary)]">Te doy estrategia.</strong>
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- PLAN DE 5 SEMANAS                                       -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-light py-14">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center font-bold">Tu plan de 5 semanas</h2>

      <div class="space-y-6 mt-8">
        <div class="week-item">
          <h3 class="font-bold text-[var(--webinar-primary)]">Semana 1</h3>
          <p class="body-text">Detecta qué te está drenando energía todos los días y cómo eso impacta en tus resultados.</p>
        </div>
        <div class="week-item">
          <h3 class="font-bold text-[var(--webinar-primary)]">Semana 2</h3>
          <p class="body-text">Deja de cargar con expectativas y responsabilidades que no te corresponden. Haz tu trabajo más ligero.</p>
        </div>
        <div class="week-item">
          <h3 class="font-bold text-[var(--webinar-primary)]">Semana 3</h3>
          <p class="body-text">Aprende a identificar qué sí importa y qué no, para tomar el control de tus días.</p>
        </div>
        <div class="week-item">
          <h3 class="font-bold text-[var(--webinar-primary)]">Semana 4</h3>
          <p class="body-text">Empieza a construir hábitos para dejar de vivir apagando fuegos, y empezar a dirigir tu vida y tu carrera con dirección.</p>
        </div>
        <div class="week-item">
          <h3 class="font-bold text-[var(--webinar-primary)]">Semana 5</h3>
          <p class="body-text">Crea una red y un plan real para sostener cambios.</p>
        </div>
      </div>

      <p class="body-text mt-6">👉 ¿Quieres ver el recorrido completo? <a href={PDF_PLAN} target="_blank" rel="noopener noreferrer" class="underline text-[var(--webinar-primary)]">Ver PDF con el plan de 5 semanas</a></p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- VIDEO 2: DESDE ADENTRO                                  -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-light py-14">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2 class="text-center font-bold">
        Así se ve <span class="text-[var(--webinar-primary)]">Fundamentals</span> desde adentro
      </h2>

      <div class="video">
        <iframe
          src={VIDEO_ADENTRO}
          title="Así se ve Fundamentals desde adentro"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div class="grid-fixed-2">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank" rel="noopener noreferrer">
          $6,500 un solo pago con tarjeta
        </a>
        <a class="btn btn-ghost" href={PAY_SPLIT} target="_blank" rel="noopener noreferrer">
          Quiero pagar a meses por WhatsApp
        </a>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- METODOLOGÍA (nueva sección)                             -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center font-bold">La metodología detrás de <span class="text-[var(--webinar-primary)]">Fundamentals</span></h2>

      <p class="body-text">
        El problema no está en tu agenda. Tampoco es que no sepas organizarte.
      </p>
      <p class="body-text">
        El problema está en <strong class="text-[var(--webinar-primary)]">la forma en la que tu mente aprendió a operar</strong>
        y en las reglas del éxito que hoy están dirigiendo tu vida.
      </p>

      <p class="body-text mt-4">
        Por eso <span class="text-[var(--webinar-primary)] font-bold">Fundamentals</span> combina dos cosas:
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div class="outcome-card">
          <h3 class="font-bold text-[var(--webinar-primary)] mb-2">Neurociencia aplicada</h3>
          <p class="body-text">Para ayudarte a entender cómo funciona tu cerebro, romper patrones automáticos y dejar de vivir en modo "cansancio y saturación".</p>
        </div>
        <div class="outcome-card">
          <h3 class="font-bold text-[var(--webinar-primary)] mb-2">Coaching de alto desempeño</h3>
          <p class="body-text">Para convertir esa claridad en decisiones, hábitos y acciones que puedas aplicar en tu trabajo y en tu vida.</p>
        </div>
      </div>

      <div class="mt-6 body-text">
        <p>No se trata de motivarte.</p>
        <p class="mt-2"><strong class="text-[var(--webinar-primary)]">Se trata de enseñarte a usar tu mente y tu energía de forma más estratégica.</strong></p>
        <p class="mt-2">
          Para que tu trabajo y tu vida <strong class="text-[var(--webinar-primary)]">dejen de sentirse tan pesados</strong>
          y tú puedas crecer profesionalmente y a la vez disfrutar de tu vida.
        </p>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- ¿POR QUÉ CREÉ FUNDAMENTALS?                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center font-bold">¿Por qué creé <span class="text-[var(--webinar-primary)]">Fundamentals</span>?</h2>

      <p class="body-text">Después de trabajar con cientos de ejecutivos, empecé a ver el mismo patrón una y otra vez.</p>
      <p class="body-text">Personas inteligentes, responsables y comprometidas que se la pasaban:</p>

      <ul class="stack body-text">
        <li>• Trabajando todo el tiempo</li>
        <li>• Disponibles 24/7</li>
        <li>• Resolviendo problemas de todos</li>
        <li>• Dejando sus necesidades al final</li>
        <li>• Llegando a casa cansados y sin energía</li>
      </ul>

      <p class="body-text mt-4">Y mientras más saturados se sentían, más trabajaban.</p>

      <ul class="stack body-text">
        <li>Se levantaban más temprano.</li>
        <li>Dormían menos.</li>
        <li>Trataban de organizarse mejor.</li>
        <li>Intentaban ser más disciplinados.</li>
        <li>Se exigían más.</li>
      </ul>

      <p class="body-text mt-4">Pero el resultado casi siempre era el mismo:</p>

      <p class="body-text font-bold text-[var(--webinar-primary)]">
        Más cansancio. Más culpa. Más saturación.
      </p>
      <p class="body-text">
        Y la frustración de saber que hacían muchísimo, pero avanzaban poco.
      </p>

      <hr class="border-white/20 my-6" />

      <p class="body-text">Y descubrí algo:</p>
      <p class="body-text">
        <strong class="text-[var(--webinar-primary)]">El problema nunca fue falta de capacidad ni de disciplina.</strong>
      </p>
      <p class="body-text">
        El problema era que estaban intentando resolver el caos haciendo más, cargando más y exigiéndose más,
        cuando lo que necesitaban era <strong class="text-[var(--webinar-primary)]">un sistema distinto</strong>.
      </p>

      <p class="body-text mt-4">
        Por eso creé <strong class="text-[var(--webinar-primary)]">Fundamentals</strong>.
      </p>
      <p class="body-text">
        No como otro curso motivacional ni como una lista de hábitos imposibles de seguir.
      </p>
      <p class="body-text">
        Lo creé como <strong class="text-[var(--webinar-primary)]">una guía práctica basada en neurociencia y coaching de alto desempeño</strong>
        para ayudarte a recuperar el control de tu día, tu carrera y tu vida.
      </p>
      <p class="body-text mt-2 font-bold text-[var(--webinar-primary)]">
        Para que tu trabajo y tu vida dejen de sentirse tan pesados y tú puedas crecer profesionalmente y a la vez disfrutar de tu vida. 
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- WHATSAPP REFUERZO                                       -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-light py-6 text-center">
    <a class="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
  </section>


  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- CTA FINAL                                               -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <section class="sec-light py-14 text-center">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2 class="font-bold">Deja de sentir que haces mucho y avanzas poco.</h2>
      <p class="body-text">
        Empieza hoy a recuperar el control de tu día, tu carrera y tu vida.
      </p>
      <p class="body-text">
        <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> es una guía práctica para ayudarte a dejar de sentirte saturado
        y empezar a avanzar con más orden y menos peso.
      </p>

      <div class="grid-fixed-2">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank" rel="noopener noreferrer">
          $6,500 un solo pago con tarjeta
        </a>
        <a class="btn btn-ghost" href={PAY_SPLIT} target="_blank" rel="noopener noreferrer">
          Quiero pagar a meses por WhatsApp
        </a>
      </div>

      <div>
        <a class="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          ¿Tienes dudas? Habla con nuestro equipo en WhatsApp
        </a>
      </div>
    </div>
  </section>

</main>
{/if}
