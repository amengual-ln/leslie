<script>
  import { onMount } from 'svelte';
  let mounted = false;
  onMount(() => { mounted = true; });

  const PAY_ONCE = "https://academy.ceodetuvida.com/courses/offers/aba9c77c-959f-42bb-bfd4-4eefe1b60de6";
  const PAY_SPLIT = "https://academy.ceodetuvida.com/courses/offers/c7d9708c-a13a-463c-9b65-be0e98abf33b";
  const PDF_PLAN = "https://drive.google.com/file/d/1kTSqyYbuSeEWJRY2Zjnvv88nj0-xr7oC/view";
  const WHATSAPP = "https://wa.link/fundamentals";
  const VIDEO_FUNCIONA = "https://www.youtube.com/embed/GfJJV4_EqYg?si=NcQY4c4ROdrCCDV2";
  const VIDEO_ADENTRO  = "https://www.youtube.com/embed/vYoHHJQISiw";
</script>

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
</style>

{#if mounted}
<main class="webinar-page font-poppins">
  <!-- HERO -->
  <section class="relative flex items-center justify-center h-[22vh] sm:h-[28vh] bg-black">
    <img src="/fundamentals.png" alt="FUNDAMENTALS (LOGO)" class="h-full w-auto object-contain" />
    <div class="absolute inset-0 bg-black/55 pointer-events-none"></div>
  </section>

<!-- INTRO -->
<section class="sec-brown py-14">
  <div class="container mx-auto px-6 max-w-4xl text-left space-y-6">
    
    <!-- Título -->
    <h2 class="text-xl sm:text-2xl font-bold">
      Estás cumpliendo con todo… menos contigo.
    </h2>
    <hr class="border-white/20 my-4" />

    <!-- Texto introductorio -->
    <p class="text-base sm:text-lg leading-relaxed">
      Te volviste experto en apagar fuegos, pero ya no sabes qué te ilusiona. 
      Cada día rindes, entregas, <em>funcionas</em>… pero sientes que tu chispa se esfumó.
    </p>
    <p class="text-base sm:text-lg leading-relaxed">
      <span class="text-white font-bold">Fundamentals</span> es el primer paso para salir del 
      <strong>caos, reconectar contigo y recuperar el timón de tu vida</strong>.
    </p>

    <hr class="border-white/20 my-4" />

    <!-- Lista de beneficios -->
    <ul class="text-base sm:text-lg space-y-2">
      <li><strong>✔ Solo 5 semanas</strong></li>
      <li><strong>✔ A tu ritmo y sin horarios fijos</strong></li>
      <li><strong>✔ 100% online y de acceso inmediato</strong></li>
      <li><strong>✔ Soporte directo de Leslie Beltrán, Business Life Coach</strong></li>
    </ul>

    <hr class="border-white/20 my-4" />
  </div>
</section>


 <!-- PARA QUIÉN ES -->
<section class="sec-light py-14">
  <div class="container mx-auto px-6 max-w-4xl stack-xl">
    
    <!-- Título -->
    <h2 class="text-center font-bold text-xl sm:text-2xl">
      ¿Para quién es <span class="text-[var(--webinar-primary)]">Fundamentals</span>?
    </h2>

    <!-- Párrafo introductorio -->
    <p class="mt-6 text-base sm:text-lg">
      <strong>
        <span class="text-[var(--webinar-primary)]">Fundamentals</span> no es para los que se engañan diciendo “todo está bien”.
      </strong>
      Es para quienes reconocen que la vida que llevan no se parece en nada a la que soñaron.
    </p>

    <!-- Respuesta -->
    <p class="mt-4 text-base sm:text-lg font-bold">
      Si esto resuena contigo, <span class="text-[var(--webinar-primary)]">Fundamentals</span> es para ti:
    </p>

    <!-- Lista -->
    <ul class="stack mt-4 text-base sm:text-lg space-y-2">
      <li>• Vives en <strong>caos</strong>, corriendo de un pendiente a otro sin dirección.</li>
      <li>• Estás <strong>abrumado</strong>, apagando fuegos todo el día y sin energía para lo que importa.</li>
      <li>• Llevas años en el mismo puesto y, aunque no lo digas, sientes que tu vida está <strong>estancada</strong>.</li>
      <li>• Tu vida se volvió <strong>gris</strong>, sin emoción, sin chispa, sin ilusión.</li>
      <li>• Te la pasas <strong>complaciendo a los demás</strong>, aunque eso signifique borrarte a ti.</li>
      <li>• Siempre te pones en el <strong>último lugar</strong> de tu lista de prioridades.</li>
    </ul>

    <!-- Recuadro -->
    <div class="card-dark sec-brown mt-6 p-4 rounded-lg text-center text-base sm:text-lg">
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

    <!-- Lista -->
    <ul class="stack mt-6 text-base sm:text-lg space-y-3">
      <li>• <strong>Salir del desorden mental</strong> que te drena todos los días.</li>
      <li>• <strong>Saber qué priorizar</strong> sin sentir que todo es urgente.</li>
      <li>• <strong>Decidir con seguridad</strong>, sin dar tantas vueltas en tu cabeza.</li>
      <li>• <strong>Recuperar energía y entusiasmo</strong> para tu vida personal y profesional.</li>
      <li>• <strong>Ganar tiempo real</strong> para ti y tu familia.</li>
    </ul>

    <!-- Párrafo de cierre -->
    <p class="mt-6 text-base sm:text-lg">
      <span class="text-white font-bold">Fundamentals</span> es para quienes ya se cansaron de correr sin rumbo… y ahora quieren tomar el timón de su vida.
    </p>

  </div>
</section>


  <!-- CTA PAGOS #1 -->
  <section class="sec-light py-14 text-center">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2>COMIENZA HOY</h2>
      <div class="grid-fixed-2">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
        <a class="btn btn-ghost"   href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
      </div>
    </div>
  </section>

  <!-- WHATSAPP REFUERZO #1 -->
  <section class="sec-light py-6 text-center">
    <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
  </section>

<!-- MÁS LOGROS -->
<section class="sec-brown py-14">
  <div class="container mx-auto px-6 max-w-4xl stack-xl">

    <!-- Título -->
    <h2 class="text-center font-bold text-xl sm:text-2xl mb-6">
      ¿Qué más vas a lograr en <span class="text-white">Fundamentals</span>?
    </h2>

    <!-- Intro -->
    <p class="text-base sm:text-lg mb-6">
      En solo 5 semanas, vas a lograr cambios <strong>que se sienten en tu día a día</strong>:
    </p>

    <!-- Lista de logros -->
    <ul class="text-base sm:text-lg space-y-4">
      <li>• Recuperar tiempo para ti, <strong>sin descuidar tus responsabilidades.</strong></li>
      <li>• Dormir en paz, <strong>sin que tu cabeza siga dándole vueltas a los pendientes a la 1:00 a.m.</strong></li>
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
      Sobre todo si ya intentaste cambiar desde la fuerza de voluntad, desde libros de autoayuda
      o terapias que no conectan contigo.
    </p>

    <p>
      Pero esto no es un cursito para “sentirte mejor”.
    </p>

    <p><strong>Es un método probado, basado en:</strong></p>

    <ul class="stack">
      <li>• Neurociencia aplicada</li>
      <li>• Herramientas para <u>reenfocar</u> tu mente y salir del caos</li>
      <li>• Coaching de alto desempeño</li>
    </ul>

    <p>No te doy motivación.<br>
    <strong>Te doy dirección.</strong></p>

    <p>No te doy teoría.<br>
    <strong>Te doy estrategia.</strong></p>
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
<!-- CTA PAGOS #2 -->
  <section class="sec-light py-14 text-center">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2>COMIENZA HOY</h2>
      <div class="grid-fixed-2">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
        <a class="btn btn-ghost"   href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
      </div>
    </div>
  </section>

  <!-- WHATSAPP REFUERZO #2 -->
  <section class="sec-light py-6 text-center">
    <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
  </section>

<!-- FORMATO -->
<section class="sec-light py-14">
  <div class="container mx-auto px-6 max-w-4xl stack-xl">
    <h2 class="text-center"><strong>El formato de <span class="text-[var(--webinar-primary)]">Fundamentals</span></strong></h2>

    <p>
      <span class="text-[var(--webinar-primary)]">Fundamentals</span> fue diseñado para adaptarse a tu vida, 
      <strong>no para exigirte más.</strong>
    </p>

    <ul class="stack">
      <li>• <strong>Hazlo a tu ritmo</strong>, sin horarios fijos.</li>
      <li>• <strong>Acceso inmediato</strong> al inscribirte.</li>
      <li>• <strong>5 módulos en video</strong>, breves y al punto.</li>
      <li>• <strong>Plantillas descargables</strong> para aplicar de inmediato.</li>
      <li>• <strong>Acompañamiento directo</strong> de Leslie Beltrán para resolver tus dudas.</li>
    </ul>

    <p>
      <strong>Tú eliges el ritmo. Nosotros te damos la dirección.</strong>
    </p>
  </div>
</section>

 <!-- VIDEO 2: ASÍ SE VE POR DENTRO -->
  <section class="sec-light py-14">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2 class="text-center">Así se vive <span class="text-[var(--webinar-primary)]">Fundamentals</span> desde dentro</h2>
      <div class="video"><iframe src={VIDEO_ADENTRO} title="Así se ve Fundamentals desde adentro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      <div class="grid-fixed-2">
        <a class="btn btn-primary" href={PAY_ONCE} target="_blank">Pago único $6,500 MXN</a>
        <a class="btn btn-ghost"   href={PAY_SPLIT} target="_blank">2 pagos de $3,250 MXN</a>
      </div>
    </div>
  </section>

  <!-- PLAN 5 SEMANAS + PDF -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-4xl stack-xl">
      <h2 class="text-center">Aquí está tu plan de 5 semanas</h2>
      <p>Así es como avanzas dentro de <strong class="text-white">Fundamentals</strong>:</p>
      <ul class="stack">
        <li><strong>MÓDULO 1:</strong> El gran error que te está costando la vida — Dejar de ponerte en último lugar y empezar a priorizarte sin culpa.</li>
        <li><strong>MÓDULO 2:</strong> Rompiendo el guion que no es tuyo — Soltar creencias heredadas de éxito y felicidad que hoy te drenan.</li>
        <li><strong>MÓDULO 3:</strong> Construyendo tu FAE (Felicidad, Autoconcepto, Éxito) — Diseñar tu brújula interna para tomar mejores decisiones.</li>
        <li><strong>MÓDULO 4:</strong> Diseñando tu nueva vida — Recablear mente y cuerpo para sostener hábitos y cambios reales.</li>
        <li><strong>MÓDULO 5:</strong> Edificando tu FAE — Llevar todo a la acción con pasos concretos y rodearte de lo que sí suma.</li>
      </ul>
      <p>👉 ¿Quieres ver lo que lograrás semana a semana? <a href={PDF_PLAN} target="_blank" class="underline text-[var(--webinar-primary)]">Descargar PDF con el plan completo</a></p>
    </div>
  </section>

<!-- POR QUÉ LO CREÉ -->
<section class="sec-brown py-14">
  <div class="container mx-auto px-6 max-w-4xl stack-xl">
    <h2 class="text-center">¿Por qué creé <span class="text-white">Fundamentals</span>?</h2>
    <p>Después de trabajar con cientos de ejecutivos y empresarios descubrí algo claro: muchos viven con agendas llenas, pero vacíos por dentro.</p>
    <p>Yo también estuve ahí.</p>

    <ul class="stack">
      <li>• <strong>Sé lo que es correr todo el día y sentir que no avanzas.</strong></li>
      <li>• <strong>Sé lo que es vivir en modo supervivencia</strong>, aparentando que todo está bien cuando por dentro no lo está.</li>
      <li>• <strong class="text-white">Fundamentals</strong> <strong>nació de mi propia experiencia</strong> y de años acompañando a líderes como tú.</li>
      <li>• No es un cursito motivacional. Es una guía para crear una vida con sentido, desde adentro hacia afuera.</li>
    </ul>

    <p>Y no se trata de lograr más.</p>
    <p><strong>Se trata de reconectar contigo, redefinir tu éxito y diseñar una vida que realmente se sienta tuya.</strong></p>
    <p>Y sí, es posible.</p>
  </div>
</section>


  <!-- WHATSAPP REFUERZO #2 -->
  <section class="sec-light py-6 text-center">
    <a class="btn btn-ghost" href={WHATSAPP} target="_blank">¿Tienes dudas? Habla con nuestro equipo en WhatsApp</a>
  </section>

  <!-- TESTIMONIOS (2 columnas fijas) -->
  <section class="sec-brown py-14">
    <div class="container mx-auto px-6 max-w-5xl stack-xl">
      <h2 class="text-center">Lo que dicen quienes ya vivieron <span class="text-white">Fundamentals</span></h2>

      <div class="grid-fixed-2">
        <div class="card-dark text-left">
          <p class="italic">
            “Estoy terminando la quinta semana de <span class="text-white">Fundamentals</span> y estoy impactado de mis logros:
            he dejado de andar corriendo todo el día. Llevo dos semanas que termino los pendientes en tiempo y forma.
            Mis niveles de estrés han bajado en un 50%.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Rodrigo, Gerente de Operaciones</p>
        </div>

        <div class="card-dark text-left">
          <p class="italic">
            “Es increíble cómo en 5 semanas mi caos se fue. Me siento enfocada y con mucha claridad para decidir, delegar y hasta para decir NO.
            Ya no necesito correr entre semana para ganar tiempo.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Sofía, Directora de RRHH</p>
        </div>

        <div class="card-dark text-left">
          <p class="italic">
            “Estoy terminando el módulo 3 de <span class="text-white">Fundamentals</span> y amo los cambios que estoy viendo en mi vida.
            Siento que me estoy quitando toneladas de culpas, miedos e inseguridades. Ya hasta mi esposa me dijo que ando de mejor humor.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Miguel, Ejecutivo Comercial</p>
        </div>

        <div class="card-dark text-left">
          <p class="italic">
            “En la oficina me siento con claridad mental, ya no ahogada en mil pendientes. Participo más en reuniones y mis ideas han sido aplaudidas.
            Y en casa, la comunicación ha mejorado muchísimo.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Ana, Consultora Financiera</p>
        </div>

        <div class="card-dark text-left">
          <p class="italic">
            “A raíz de <span class="text-white">Fundamentals</span> mis días han dejado de ser caóticos y me siento más seguro al dar mi opinión en reuniones.
            Gracias por crear este programa que me permitió ir a mi ritmo.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Javier, Director de Estrategia</p>
        </div>

        <div class="card-dark text-left">
          <p class="italic">
            “Acabo de hacer la primera actividad del módulo 1 de <span class="text-white">Fundamentals</span> y me di cuenta de cómo yo solo me estaba poniendo el pie para subir de puesto.
            Estoy en shock, pero con claridad porque por fin pude ver dónde me estaba atorando.”
          </p>
          <p class="mt-3 font-semibold text-[var(--webinar-primary)]">Valeria, Líder de Proyecto</p>
        </div>
      </div>
    </div>
  </section>


  <!-- CIERRE + CTA FINAL -->
  <section class="sec-light py-14 text-center">
    <div class="container mx-auto px-6 max-w-4xl stack">
      <h2>Tu vida puede sentirse más ligera, empieza aquí.</h2>
      <p>No tienes que seguir corriendo sin parar ni vivir con la mente saturada. Hoy puedes elegir un camino más claro, con tiempo para ti y tranquilidad en tu día a día. <strong class="text-[var(--webinar-primary)]">Fundamentals</strong> es tu guía para recuperar enfoque, calma y dirección.</p>
      <div class="grid-fixed-2">
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


