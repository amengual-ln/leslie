<script>
  import { onMount } from 'svelte';
  let mounted = false;
  onMount(() => { mounted = true; });

  const PAY_ONCE = "https://www.skool.com/ceo-academy/about";
  const PAY_SPLIT = "https://wa.link/fundamentals";
  const PDF_PLAN = "https://drive.google.com/file/d/1kTSqyYbuSeEWJRY2Zjnvv88nj0-xr7oC/view";
  const WHATSAPP = "https://wa.link/fundamentals";
  const VIDEO_FUNCIONA = "https://www.youtube.com/embed/GfJJV4_EqYg?si=NcQY4c4ROdrCCDV2";
  const VIDEO_ADENTRO  = "https://www.youtube.com/embed/vYoHHJQISiw";
</script>

<svelte:head>
  <meta property="og:title" content="Fundamentals — Recupera el timón de tu vida" />
  <meta property="og:description" content="El primer paso para salir del caos, reconectar contigo y recuperar el timón de tu vida. 5 semanas, a tu ritmo, 100% online." />
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

  /* FIX 3: Texto de cuerpo más grande en móvil para igualar sección "Suena demasiado bueno" */
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
</style>

{#if mounted}
<main class="webinar-page font-poppins">
  <!-- HERO — FIX 1: reducido el alto del hero para acercar al intro -->
<section class="relative flex items-center justify-center h-[10vh] sm:h-[14vh] bg-black">
  <img src="/fundamentals.png" alt="FUNDAMENTALS (LOGO)" class="h-full w-auto object-contain z-10" />
  <div class="absolute inset-0 bg-transparent pointer-events-none"></div>
</section>

<!-- INTRO -->
<section class="sec-brown pt-0 pb-8 sm:pb-10">
  <div class="container mx-auto px-6 max-w-4xl text-left space-y-6">
    
    <!-- Título -->
    <h2 class="text-base sm:text-lg font-bold">
      Estás cumpliendo con todo… menos contigo.
    </h2>
    <hr class="border-white/20 my-4" />

    <!-- Texto introductorio — FIX 3: clase body-text para tamaño más grande -->
    <p class="body-text leading-relaxed">
      Te volviste experto en apagar fuegos, pero ya no sabes qué te ilusiona. 
      Cada día rindes, entregas, <em>funcionas</em>… pero sientes que tu chispa se esfumó.
    </p>
    <p class="body-text leading-relaxed">
      <span class="font-bold text-[var(--webinar-primary)]">Fundamentals</span> 
      es el primer paso para salir del 
      <span class="font-semibold text-[var(--webinar-primary)]">
        caos, reconectar contigo y recuperar el timón de tu vida
      </span>.
    </p>

    <hr class="border-white/20 my-4" />

    <!-- Lista de beneficios — FIX 3 -->
    <ul class="body-text space-y-2">
      <li><strong>✔ Solo 5 semanas</strong></li>
      <li><strong>✔ A tu ritmo y sin horarios fijos</strong></li>
      <li><strong>✔ 100% online y de acceso inmediato</strong></li>
      <li><strong class="text-[var(--webinar-primary)]">✔ Soporte directo de Leslie Beltrán, Business Life Coach</strong></li>
    </ul>

    <hr class="border-white/20 my-4" />
  </div>
</section>


 <!-- PARA QUIÉN ES -->
<section class="sec-light py-14">
  <div class="container mx-auto px-6 max-w-4xl stack-xl">
    
    <!-- Título -->
    <h2 class="text-center font-bold text-xl sm:text-2xl">
      ¿Para quién es <span class="text-[var(--webinar-primary)]"></span>?
    </h2>

    <!-- FIX 2: Mayúscula inicial en "No" y FIX 3: body-text -->
    <p class="mt-6 body-text">
      <strong>
        <span class="text-[var(--webinar-primary)]"></span> No es para los que se engañan diciendo "todo está bien".
      </strong>
      Es para quienes reconocen que la vida que llevan no se parece en nada a la que soñaron.
    </p>

    <!-- FIX 2: Mayúscula inicial en "Es" -->
    <p class="mt-4 body-text font-bold">
      <span class="text-[var(--webinar-primary)]"></span> Es para ti, sí:
    </p>

    <!-- FIX 3: body-text -->
    <ul class="stack mt-4 body-text space-y-2">
      <li>• Vives en <strong>caos</strong>, corriendo de un pendiente a otro sin dirección.</li>
      <li>• Estás <strong>abrumado</strong>, apagando fuegos todo el día y sin energía para lo que importa.</li>
      <li>• Llevas años en el mismo puesto y, aunque no lo digas, sientes que tu vida está <strong>estancada</strong>.</li>
      <li>• Tu vida se volvió <strong>gris</strong>, sin emoción, sin chispa, sin ilusión.</li>
      <li>• Te la pasas <strong>complaciendo a los demás</strong>, aunque eso signifique borrarte a ti.</li>
      <li>• Siempre te pones en el <strong>último lugar</strong> de tu lista de prioridades.</li>
    </ul>

    <!-- Recuadro -->
    <div class="card-dark sec-brown mt-6 p-4 rounded-lg text-center body-text">
      <p>❌ No es que no tengas tiempo.<br>✅ Es que dejaste de ser el protagonista de tu propia vida.</p>
    </div>
  </div>
</section>


 <!-- LOGROS 5 SEMANAS -->
<section class="sec-brown py-14">
  <div class="container mx-auto px-6 max-w-4xl stack-xl">
    
    <!-- Título -->
    <h2 class="text-center font-bold text-xl sm:text-2xl">
      En 5 semanas, esto es lo que lograrás:
    </h2>

    <!-- FIX 3: body-text -->
    <ul class="stack mt-6 body-text space-y-3">
      <li><span class="text-[var(--webinar-primary)]">•</span> <strong class="text-[var(--webinar-primary)]">Salir del desorden mental</strong> que te drena todos los días.</li>
      <li><span class="text-[var(--webinar-primary)]">•</span> <strong class="text-[var(--webinar-primary)]">Saber qué priorizar</strong> sin sentir que todo es urgente.</li>
      <li><span class="text-[var(--webinar-primary)]">•</span> <strong class="text-[var(--webinar-primary)]">Decidir con seguridad</strong>, sin dar tantas vueltas en tu cabeza.</li>
      <li><span class="text-[var(--webinar-primary)]">•</span> <strong class="text-[var(--webinar-primary)]">Recuperar energía y entusiasmo</strong> para tu vida personal y profesional.</li>
      <li><span class="text-[var(--webinar-primary)]">•</span> <strong class="text-[var(--webinar-primary)]">Ganar tiempo real</strong> para ti y tu familia.</li>
    </ul>

    <!-- FIX 3: body-text -->
    <p class="mt-6 body-text">
      <span class="text-white font-bold"></span> es para quienes ya se cansaron de correr sin rumbo… y ahora quieren tomar el timón de su vida.
    </p>

  </div>
</section>


  <!-- CTA PAGOS #1 — FIX 4: eliminado tooltip del botón de $7,800 -->
<section class="sec-light py-14 text-center">
  <div class="container mx-auto px-6 max-w-4xl stack">
    <h2>COMIENZA HOY</h2>
    <div class="grid-fixed-2">
      <a class="btn btn-primary" href={PAY_ONCE} target="_blank">
        $6,500 un solo pago con tarjeta
      </a>

      <a
        class="btn btn-ghost"
        href={PAY_SPLIT}
        target="_blank"
      >
        $7,800 pago hasta 12 meses con tarjeta de crédito
      </a>
    </div>
  </div>
</section>

  <!-- WHATSAPP REFUERZO #1 -->
  <section class="sec-light py-6 text-center">
    <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
  </section>

<!-- MÁS LOGROS — FIX 3: body-text -->
<section class="sec-brown py-14 [&_strong]:text-[var(--webinar-primary)]">
  <div class="container mx-auto px-6 max-w-4xl stack-xl">

    <h2 class="text-center font-bold text-xl sm:text-2xl mb-6">
     ¿Qué más vas a lograr en <span class="text-[var(--webinar-primary)]">Fundamentals</span>?
    </h2>

    <p class="body-text mb-6">
      En solo 5 semanas, vas a lograr cambios <strong>que se sienten en tu día a día</strong>:
    </p>

    <ul class="body-text space-y-4">
      <li>• Recuperar tiempo para ti, <strong>sin descuidar tus responsabilidades.</strong></li>
      <li>• Dormir en paz, <strong>sin que tu cabeza siga dándole vueltas a los pendientes en la madrugada</strong></li>
      <li>• Llegar a casa con mejor humor, disfrutando a tu familia <strong>en lugar de descargar el estrés en ellos.</strong></li>
      <li>• Tener dirección clara, <strong>dejar de sentir que trabajas mucho pero avanzas poco.</strong></li>
      <li>• Tomar decisiones más rápidas y efectivas, <strong>sin gastar energía en darle vueltas una y otra vez.</strong></li>
      <li>• <strong>Reconectarte</strong> contigo mismo, y <strong>recordar quién eres más allá del trabajo.</strong></li>
      <li>• Bajar la irritabilidad y el estrés, <strong>dejando de exigirte como si fueras una máquina.</strong></li>
      <li>• Volver a <strong>entusiasmarte con</strong> tus proyectos y tu vida, <strong>con la energía de estar construyendo algo que sí vale la pena.</strong></li>
    </ul>

  </div>
</section>



  <!-- VIDEO 1: POR QUÉ FUNCIONA -->
  <section class="sec-brown py-0">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2 class="text-center">Te explico por qué funciona <span class="text-white">Fundamentals</span></h2>
      <div class="video"><iframe src={VIDEO_FUNCIONA} title="Por qué funciona Fundamentals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>
  </section>

<!-- SUENA DEMASIADO BUENO -->
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
      <li>• Herramientas para <u>reenfocar</u> tu mente y salir del caos</li>
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
<!-- POR QUÉ 5 SEMANAS -->
<section class="sec-light py-14">
  <div class="container mx-auto px-6 max-w-4xl stack-xl">
    <h2 class="text-center"><strong>¿Y por qué solo 5 semanas?</strong></h2>

    <p>
      Porque <strong>cuando entiendes cómo funciona tu mente, no necesitas años.</strong>
    </p>

    <p><strong>Necesitas herramientas precisas.</strong></p>

    <p><strong>Y eso es lo que obtienes aquí:</strong></p>

    <ul class="stack">
      <li>→ Recableas tu sistema operativo mental</li>
      <li>→ Tomas decisiones desde otro nivel de conciencia</li>
      <li>→ Recuperas el timón de tu vida</li>
    </ul>
  </div>
</section>
<!-- CTA PAGOS #2 — FIX 4: eliminado tooltip -->
<section class="sec-light py-14 text-center">
  <div class="container mx-auto px-6 max-w-4xl stack">
    <h2>COMIENZA HOY</h2>
    <div class="grid-fixed-2">
      <a class="btn btn-primary" href={PAY_ONCE} target="_blank">
        $6,500 un solo pago con tarjeta
      </a>

      <a
        class="btn btn-ghost"
        href={PAY_SPLIT}
        target="_blank"
      >
        $7,800 pago hasta 12 meses con tarjeta de crédito
      </a>
    </div>
  </div>
</section>


  <!-- WHATSAPP REFUERZO #2 -->
  <section class="sec-light py-6 text-center">
    <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
  </section>

<!-- FORMATO — FIX 3: body-text -->
<section class="sec-light py-14">
  <div class="container mx-auto px-6 max-w-4xl stack-xl">
    <h2 class="text-center"><strong>El formato de <span class="text-[var(--webinar-primary)]">Fundamentals</span></strong></h2>

    <p class="body-text">
      <span class="text-[var(--webinar-primary)]">Fundamentals</span> fue diseñado para adaptarse a tu vida, 
      <strong>no para exigirte más.</strong>
    </p>

    <ul class="stack body-text">
      <li>• <strong>Hazlo a tu ritmo</strong>, sin horarios fijos.</li>
      <li>• <strong>Acceso inmediato</strong> al inscribirte.</li>
      <li>• <strong>5 módulos en video</strong>, claros y al punto.</li>
      <li>• <strong>Plantillas descargables</strong> para aplicar de inmediato.</li>
      <li>• <strong>Acompañamiento directo</strong> de <span class="text-[var(--webinar-primary)]">Leslie Beltrán</span> para resolver tus dudas.</li>
    </ul>

    <p class="body-text">
      <strong>Tú eliges el ritmo. Nosotros te damos la dirección.</strong>
    </p>
  </div>
</section>

<!-- VIDEO 2: ASÍ SE VE POR DENTRO — FIX 4: eliminado tooltip -->
<section class="sec-light py-14">
  <div class="container mx-auto px-6 max-w-4xl stack">
    <h2 class="text-center font-bold">
      Así se vive <span class="text-[var(--webinar-primary)]">Fundamentals</span> desde adentro
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
      <a class="btn btn-primary" href={PAY_ONCE} target="_blank">
        $6,500 un solo pago por transferencia
      </a>

      <a
        class="btn btn-ghost"
        href={PAY_SPLIT}
        target="_blank"
      >
        $7,800 pago hasta 12 meses con tarjeta de crédito
      </a>
    </div>
  </div>
</section>


  <!-- PLAN 5 SEMANAS + PDF -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center font-bold">Aquí está tu plan de 5 semanas</h2>
      <p class="body-text">Así es como avanzas dentro de <strong class="text-white">Fundamentals</strong>:</p>
      <ul class="stack body-text">
        <li>
          <span class="text-[var(--webinar-primary)] font-bold">
            • MÓDULO 1: El gran error que te está costando la vida
          </span>
          — Dejar de ponerte en último lugar y empezar a priorizarte sin culpa.
        </li>
        <li>
          <span class="text-[var(--webinar-primary)] font-bold">
            • MÓDULO 2: Rompiendo el guion que no es tuyo
          </span>
          — Soltar creencias heredadas de éxito y felicidad que hoy te drenan.
        </li>
        <li>
          <span class="text-[var(--webinar-primary)] font-bold">
            • MÓDULO 3: Construyendo tu FAE (Felicidad, Autoconcepto, Éxito)
          </span>
          — Diseñar tu brújula interna para tomar mejores decisiones.
        </li>
        <li>
          <span class="text-[var(--webinar-primary)] font-bold">
            • MÓDULO 4: Diseñando tu nueva vida
          </span>
          — Recablear mente y cuerpo para sostener hábitos y cambios reales.
        </li>
        <li>
          <span class="text-[var(--webinar-primary)] font-bold">
            • MÓDULO 5: Edificando tu FAE
          </span>
          — Llevar todo a la acción con pasos concretos y rodearte de lo que sí suma.
        </li>
      </ul>
      <p class="body-text">👉 ¿Quieres ver lo que lograrás semana a semana? <a href={PDF_PLAN} target="_blank" class="underline text-[var(--webinar-primary)]">Descargar PDF con el plan completo</a></p>
    </div>
  </section>

  <!-- POR QUÉ LO CREÉ -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center font-bold">¿Por qué creé <span class="text-[var(--webinar-primary)]">Fundamentals</span>?</h2>
      <p class="body-text">Después de trabajar con cientos de ejecutivos y empresarios descubrí algo claro: muchos viven con agendas llenas, pero vacíos por dentro.</p>
      <p class="body-text">Yo también estuve ahí.</p>

      <ul class="stack body-text">
        <li>• <strong class="text-[var(--webinar-primary)]">Sé lo que es correr todo el día y sentir que no avanzas.</strong></li>
        <li>• <strong class="text-[var(--webinar-primary)]">Sé lo que es vivir en modo supervivencia</strong>, aparentando que todo está bien cuando por dentro no lo está.</li>
        <li>• <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> <strong class="text-[var(--webinar-primary)]">nació de mi propia experiencia</strong> y de años acompañando a líderes como tú.</li>
        <li>• No es un cursito motivacional. Es una guía para crear una vida con sentido, desde adentro hacia afuera.</li>
      </ul>

      <p class="body-text">Y no se trata de lograr más <strong class="text-[var(--webinar-primary)]">sin un rumbo claro</strong>.</p>
      <p class="body-text"><strong class="text-[var(--webinar-primary)]">Se trata de reconectar contigo, redefinir tu éxito y diseñar una vida que realmente se sienta tuya.</strong></p>
      <p class="body-text">Y sí, es posible.</p>
    </div>
  </section>


  <!-- WHATSAPP REFUERZO -->
  <section class="sec-light py-6 text-center">
    <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
  </section>

  <!-- TESTIMONIOS (2 columnas fijas) -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-5xl stack-xl">
      <h2 class="text-center font-bold">Lo que dicen quienes ya vivieron <span class="text-white">Fundamentals</span></h2>

      <div class="grid-fixed-2">
        {#each [
          { file: "testimonio1.webp", name: "Rodrigo, Gerente de Operaciones" },
          { file: "testimonio2.webp", name: "Ramiro, Director de RRHH" },
          { file: "testimonio3.webp", name: "Sofia, Ejecutiva Comercial" },
          { file: "testimonio4.webp", name: "Ana, Consultora Financiera" },
          { file: "testimonio5.webp", name: "Javier, Director de Estrategia" },
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


  <!-- CIERRE + CTA FINAL -->
<section class="sec-light py-14 text-center">
  <div class="container mx-auto px-6 max-w-4xl stack">
    <h2 class="font-bold">Tu vida puede sentirse más ligera, empieza aquí.</h2>
    <p class="body-text">No tienes que seguir corriendo sin parar ni vivir con la mente saturada. Hoy puedes elegir un camino más claro, con tiempo para ti y tranquilidad en tu día a día.</p>
    <p class="body-text"><strong class="text-[var(--webinar-primary)]">Fundamentals</strong> es tu guía para recuperar enfoque, calma y dirección.</p>

    <div class="grid-fixed-2">
      <a class="btn btn-primary" href={PAY_ONCE} target="_blank">
        $6,500 un solo pago con tarjeta
      </a>

      <a
        class="btn btn-ghost"
        href={PAY_SPLIT}
        target="_blank"
      >
        $7,800 pago hasta 12 meses con tarjeta de crédito
      </a>
    </div>

    <div>
      <a class="btn btn-ghost" href={WHATSAPP} target="_blank">
        ¿Tienes dudas? Habla con nuestro equipo en WhatsApp
      </a>
    </div>
  </div>

  <div class="mt-6 text-left leading-relaxed max-w-3xl mx-auto body-text px-6">
    <p><strong>Tiempo:</strong> Solo necesitas dedicarle aproximadamente <strong>90 minutos a la semana</strong>.</p>
    <p class="mt-2"><strong>Acceso:</strong> El programa dura <strong>5 semanas</strong>, pero tendrás <strong>2 semanas extras de acceso</strong> para ponerte al corriente o repasar.</p>
    <p class="mt-2"><strong>Inicio:</strong> Al inscribirte recibirás un <strong>correo con tu acceso a la plataforma</strong> para empezar de inmediato.</p>
  </div>
</section>

</main>
{/if}
