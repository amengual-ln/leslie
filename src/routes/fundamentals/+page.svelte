<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let mounted = false;

  const pillars = [
    { title: "Felicidad", description: "Redefine qué significa ser feliz para ti y construye tu propio concepto." },
    { title: "Autoconcepto", description: "Rompe con el autoconcepto impuesto y diseña quién eres desde tu autenticidad." },
    { title: "Éxito", description: "Deja de perseguir definiciones ajenas y empieza a crear tu propio modelo de éxito." }
  ];
  const weeks = [
    {
      week: "Semana 1",
      title: "EL GRAN ERROR QUE TE ESTÁ COSTANDO TU VIDA",
      objective: "Darte cuenta de que estás viviendo en segundo lugar y del costo real de seguir así."
    },
    {
      week: "Semana 2",
      title: "ROMPIENDO EL GUIÓN QUE NO ES TUYO",
      objective: "Identificar y desprogramar los conceptos de éxito y felicidad que has heredado para que dejes de pensar como la abuelita de tu abuelita."
    },
    {
      week: "Semana 3",
      title: "REDEFINIENDO TU FAE (FELICIDAD, AUTOCONCEPTO Y ÉXITO)",
      objective: "Diseñar tu propio concepto de Felicidad, Autoconcepto y Éxito, desde la claridad y la autenticidad."
    },
    {
      week: "Semana 4",
      title: "DISEÑANDO TU NUEVA VIDA – PRIMEROS PASOS PARA HACERLO REALIDAD",
      objective: "Crear estrategias simples para empezar a vivir HOY tu FAE."
    },
    {
      week: "Semana 5",
      title: "EDIFICANDO TU FAE",
      objective: "Implementación de las estrategias y seguimiento."
    }
  ];
  const achievements = [
    "Vas a dejar de sentirte atrapado en una vida que no se siente tuya.",
    "Vas a soltar la culpa de ponerte en primer lugar.",
    "Vas a tomar decisiones con claridad y seguridad, sin miedo al juicio externo.",
    "Vas a tener por fin una brújula interna para avanzar sin perderte en lo que los demás esperan de ti.",
    "Vas a dejar de autoexigirte tanto, porque ya no estarás tratando de llenar un molde ajeno.",
    "Vas a recuperar tu energía y tu enfoque, porque estarás alineado con lo que realmente te importa.",
    "Vas a empezar a construir un éxito que no te desgaste… sino que te expanda.",
    "Y vas a recuperar algo que habías olvidado: tu voz, tus sueños y lo que te hace feliz."
  ];
  const includes = [
    "5 semanas de contenido grabado con videos directos y accionables.",
    "Ejercicios prácticos en cada módulo para aplicar lo aprendido.",
    "2 sesiones en vivo de Preguntas y Respuestas conmigo para profundizar en tu proceso.",
    "Material descargable para acompañar tu transformación.",
    "Acceso a la comunidad privada para compartir avances y recibir apoyo."
  ];
  const reasons = [
    "Porque veo que muchos ejecutivos, empresarios y profesionales exitosos siguen sintiéndose vacíos y agotados.",
    "Porque he trabajado con cientos de clientes que se han pasado la vida en segundo lugar sin siquiera darse cuenta.",
    "Porque sé que el éxito real no es solo dinero o títulos, sino vivir con claridad, propósito y bienestar.",
    "Porque antes de enseñar estrategias de expansión y abundancia, es clave que tengas un punto de partida sólido.",
    "Porque quiero que dejes de actuar como el office boy de tu vida y empieces a liderarla como un verdadero CEO."
  ];
  const whoFor = [
    "Gerentes y Directores que han invertido años acumulando títulos y siguen sin sentirse plenos.",
    "Personas que saben que necesitan hacer un cambio, pero no tienen claro por dónde empezar.",
    "Quienes buscan resultados reales, en poco tiempo y con un proceso flexible.",
    "Ejecutivos que quieren claridad sobre su concepto de éxito y felicidad personal."
  ];

  const notFor = [
    "Personas que creen que el éxito solo se logra sacrificando bienestar.",
    "Quienes esperan soluciones mágicas sin cuestionarse o cambiar mentalidad.",
    "Los que prefieren seguir en automático y no tomar decisiones conscientes."
  ];

  const testimonials = [
    { name: "Luis", role: "Director Comercial", text: "Llevaba 20 años intentando alcanzar un éxito que nunca fue mío. En 5 semanas redefiní lo que realmente quiero y, por primera vez, me sentí libre." },
    { name: "Alejandra", role: "Gerente de Finanzas", text: "Siempre creí que necesitaba otra maestría. FUNDAMENTALS me mostró que no me faltaba preparación, me faltaba claridad." },
    { name: "Carla", role: "Directora de Marketing", text: "Pensé que priorizarme era egoísta. Hoy sé que es necesario. Gracias a este programa, aprendí a tomar decisiones sin culpa y a reconectarme conmigo." },
  ];

  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
<main class="font-poppins bg-[var(--webinar-secondary)] text-[var(--webinar-secondary-foreground)] min-h-screen webinar-page">
    <!-- Hero section: compact height, no animations -->
  <section class="relative isolate flex items-center justify-center py-16">
    <!-- Background image -->
    <img
      src="/fundamentals.png"
      alt="Fondo caligráfico de la palabra 'fundamentals'"
      class="absolute inset-0 -z-10 w-full h-full object-cover object-center" />

    <!-- Dark overlay to improve contrast -->
    <div class="absolute inset-0 -z-10 bg-black/70"></div>

    <!-- Copy block -->
    <div class="max-w-3xl px-6 text-center">
      <p class="mb-4 text-lg sm:text-xl font-light tracking-wider text-white/80">
        Los tres pilares para empezar a transformarte en el CEO de tu vida:
      </p>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
        <span class="text-[var(--webinar-primary)]">Felicidad</span>
        <span class="text-white">.</span>
        <span class="text-[var(--webinar-primary)]">Autoconcepto</span>
        <span class="text-white">.</span>
        <span class="text-[var(--webinar-primary)]">Éxito</span>
      </h1>
    </div>
  </section>
  <section class="py-10 bg-black/90 text-[var(--gray-light)]">
    <div class="container mx-auto px-4 max-w-4xl text-left">

      <h3 class="text-2xl mb-4 text-center text-white">
        Es un programa 
        <span class="text-[var(--webinar-primary)] font-bold">breve, profundo y poderoso</span> 
        de <span class="text-white font-bold">solo 5 semanas</span>.
      </h3>

      <h3 class="text-2xl mb-6 text-white">
        Diseñado para ejecutivos y líderes que se sienten:
      </h3>

      <ul class="text-2xl text-white list-disc list-inside mb-10 space-y-2">
        <li>En caos</li>
        <li>Abrumados</li>
        <li>Desconectados de sí mismos</li>
        <li>Viviendo en automático</li>
        <li>Complaciendo a los demás</li>
        <li>Poniéndose en segundo lugar de su lista de prioridades</li>
      </ul>

      <h3 class="text-2xl mb-6 text-white font-bold">
        Este es el primer paso para liderar tu vida:
      </h3>

      <ul class="text-2xl text-white list-disc list-inside mb-10 space-y-2">
        <li>Sin sacrificar lo que amas</li>
        <li>Sin obligarte a encajar en un molde que no es tuyo</li>
        <li>Sin cargar con las expectativas de otros</li>
      </ul>

      <h3 class="text-2xl mb-8 leading-relaxed text-white text-center">
        Este programa es un <strong>espacio estratégico</strong> donde vas a 
        <strong>cuestionar lo que has venido creyendo</strong> sobre el éxito, sobre ti y sobre la felicidad.
      </h3>

      <div class="text-center mb-10">
        <h3 class="text-3xl font-bold text-[var(--webinar-primary)] mt-10">
          Aquí vas a construir tu FAE:
        </h3>
        <h3 class="text-2xl text-white mt-2">
          Tu propia definición de <strong>Felicidad</strong>, <strong>Autoconcepto</strong> y <strong>Éxito</strong> para que dejes de vivir bajo las reglas absurdas y arcaicas que otros te han impuesto.
        </h3>
      </div>
      <div class="container mx-auto px-4 text-center">
        <div class="mb-12 sm:mb-16" in:fade={{ duration: 700 }}>
          <img 
            src="infog1.png" 
            alt="Proceso FAE" 
            class="w-full max-w-md sm:max-w-3xl mx-auto rounded-lg shadow-lg"
            loading="lazy"
          />
          <p class="mt-4 text-sm text-white italic">Proceso FAE</p>
        </div>
      </div>
    </div>
  </section>

  <h2 class="text-3xl md:text-4xl font-bold mb-16 mt-20 text-center"> Tu <span class="text-[var(--webinar-primary)]">FAE</span>: </h2>
  <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center"> <span class="text-[var(--webinar-primary)]">Felicidad</span>, 
    <span class="text-[var(--webinar-primary)]">Autoconcepto</span> y 
    <span class="text-[var(--webinar-primary)]">Éxito</span>
  </h2>

  <div class="container mx-auto px-4"> <div class="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"> {#each pillars as p, index}
        <div in:fly={{ y: 20, duration: 500, delay: index * 200 }} class="bg-[var(--gray-dark)] p-8 rounded-lg">
          <h3 class="text-2xl font-bold text-[var(--webinar-primary)] mb-4"><span class="text-[var(--webinar-primary)]">{p.title}</span></h3>
          <p class="text-[var(--gray-light)]">{p.description}</p>
        </div>
      {/each}
    </div>
  </div>
  <section class="py-20 bg-black/50"> 
    <style>
      @keyframes fadeInHighlight {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>

    <div class="bg-white/10 backdrop-blur-md border border-[var(--webinar-primary)] rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-10 shadow-xl animate-[fadeInHighlight_0.8s_ease-out]">
      <div class="text-center text-[var(--webinar-primary)] text-4xl mb-4">🎁</div>
      <p class="text-2xl sm:text-3xl font-semibold text-[var(--gray-light)] leading-relaxed text-center">
        El programa <strong class="text-white font-bold">Fundamentals</strong> tiene un valor regular de
        <strong class="text-[var(--webinar-primary)] font-extrabold text-3xl">$6,500 MXN</strong>.
      </p>

      <div class="mt-8 text-center space-y-4">
        <p class="text-xl text-[var(--gray-light)]">
          👉 <a href="https://academy.ceodetuvida.com/courses/offers/aba9c77c-959f-42bb-bfd4-4eefe1b60de6" 
              target="_blank" 
              class="underline text-[var(--webinar-primary)] font-semibold hover:text-white transition-colors">
            Haz clic aquí para pagar en una sola exhibición
          </a>
        </p>
        <p class="text-xl text-[var(--gray-light)]">
          👉 <a href="https://academy.ceodetuvida.com/courses/offers/c7d9708c-a13a-463c-9b65-be0e98abf33b" 
              target="_blank" 
              class="underline text-[var(--webinar-primary)] font-semibold hover:text-white transition-colors">
            O haz clic aquí para pagar en 2 exhibiciones de $3,250 MXN
          </a>
        </p>
      </div>
    </div>
  </section>

  <section class="py-20 bg-black/90">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 mt-20">
        ¿Qué vas a lograr al finalizar el programa?
      </h2>

      <ul class="space-y-6 max-w-4xl mx-auto text-left text-2xl text-[var(--gray-light)]">
        {#each achievements as item, index}
          {#if index === Math.floor(achievements.length / 2)}
            <li class="text-center text-white font-bold mt-6 mb-4 text-2xl">
              y también...
            </li>
          {/if}
          <li class="flex items-start gap-3" in:fly={{ y: 20, duration: 500, delay: index * 150 }}>
            <span class="text-[var(--webinar-primary)]">📌</span>
            <span>{item}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="py-20 bg-black text-center text-white">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-3xl md:text-4xl font-bold mb-10">
        Mira por qué <span class="text-[var(--webinar-primary)]">Fundamentals</span> te ayuda a tomar el timón de tu vida
      </h2>
      <div class="w-full rounded-2xl shadow-2xl overflow-hidden">
        <iframe 
          src="https://www.youtube.com/embed/GfJJV4_EqYg" 
          title="Video de Bienvenida Fundamentals" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
          class="w-full h-[400px] md:h-[500px]">
        </iframe>
      </div>
    </div>
  </section>

  <section class="py-20 bg-black/90 text-white text-center">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-3xl md:text-4lg font-bold mb-10">
        Empieza ahora y a tu propio ritmo
      </h2>

      <ul class="space-y-6 max-w-4xl mx-auto text-left text-2xl text-[var(--gray-light)]">
        <li class="flex items-start gap-3">
          <span class="text-[var(--webinar-primary)] text-2lg">✔️</span>
          100% online: estudia desde cualquier lugar.
        </li>
        <li class="flex items-start gap-3">
          <span class="text-[var(--webinar-primary)] text-2lg">✔️</span>
          Videos pregrabados que puedes ver a tu propio ritmo.
        </li>
        <li class="flex items-start gap-3">
          <span class="text-[var(--webinar-primary)] text-2l">✔️</span>
          Acceso inmediato: el contenido ya está disponible.
        </li>
        <li class="flex items-start gap-3">
          <span class="text-[var(--webinar-primary)] text-2xlg">✔️</span>
          Ideal si tienes poco tiempo y quieres avanzar con flexibilidad.
        </li>
        <li class="flex items-start gap-3">
          <span class="text-[var(--webinar-primary)] text-2lg">✔️</span>
          Soporte directo con Leslie Beltrán para aclarar dudas, dentro de la plataforma,
        </li>
      </ul>
    </div>
  </section>
  <section class="py-16 bg-black/80 text-center"> <div class="container mx-auto px-4"> <div in:fade={{ duration: 700, delay: 200 }}>
        <img 
          src="infog2.png" 
          alt="Escalera FAE" 
          class="w-full max-w-md sm:max-w-2xl mx-auto rounded-lg shadow-lg"
          loading="lazy"
        />
        <p class="mt-4 text-sm text-white italic">Escalera FAE</p>
      </div>
    </div>
  </section>
  <section class="py-20 bg-[var(--gray-dark)] text-[var(--gray-light)]">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-16">
        ¿Para quién es este programa?
      </h2>
      <ul class="space-y-6 max-w-4xl mx-auto text-left text-2xl text-[var(--gray-light)]">
        <li class="flex gap-3" in:fade={{ delay: 0 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> Tienes un puesto directivo o ejecutivo, y aunque todo parece ir bien en lo profesional, por dentro te sientes perdida(o), cansada(o) y con la sensación de que algo no está bien.</li>
        <li class="flex gap-3" in:fade={{ delay: 100 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> Vives con caos constante, haciendo malabares para complacer a todos, pero postergándote a ti misma(o) una y otra vez.</li>
        <li class="flex gap-3" in:fade={{ delay: 200 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> Ya no sabes si lo que estás haciendo es por ti o solo por cumplir con lo que otros esperan.</li>
        <li class="flex gap-3" in:fade={{ delay: 300 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> Has logrado lo que “se supone” que te haría feliz, pero no te llena.</li>
        <li class="flex gap-3" in:fade={{ delay: 400 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> Quieres tener claridad sobre qué decisiones, ajustes o acciones necesitas tomar para dejar de vivir en automático y empezar a liderar tu vida con propósito.</li>
        <li class="flex gap-3" in:fade={{ delay: 500 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> No quieres perder más tiempo, necesitas algo que te dé claridad y dirección rápida, sin largas teorías, sin perderte en contenido interminable.</li>
      </ul>
    </div>
  </section>

  <section class="py-20 bg-black text-[var(--gray-light)]">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-16">
        ¿Para quién NO es este programa?
      </h2>
      <ul class="space-y-6 max-w-4xl mx-auto text-left text-2xl text-[var(--gray-light)]">
        <li class="flex gap-3" in:fade={{ delay: 0 }}><span class="text-[var(--red)] text-xl">❌</span> Estás esperando una fórmula mágica que lo resuelva todo sin cuestionarte.</li>
        <li class="flex gap-3" in:fade={{ delay: 100 }}><span class="text-[var(--red)] text-xl">❌</span> Prefieres seguir haciendo lo que “toca” aunque no te haga sentido.</li>
        <li class="flex gap-3" in:fade={{ delay: 200 }}><span class="text-[var(--red)] text-xl">❌</span> No estás dispuesto a desafiar los conceptos que te enseñaron sobre ti, el éxito o la felicidad.</li>
        <li class="flex gap-3" in:fade={{ delay: 300 }}><span class="text-[var(--red)] text-xl">❌</span> Buscas motivación momentánea pero no estás listo(a) para tomar decisiones y hacer cambios reales.</li>
        <li class="flex gap-3" in:fade={{ delay: 400 }}><span class="text-[var(--red)] text-xl">❌</span> Crees que el éxito es solo sacrificio, perfección y complacer a los demás.</li>
      </ul>
    </div>
  </section>

  <section class="py-20 bg-black/50"> 
    <div class="bg-white/10 backdrop-blur-md border border-[var(--webinar-primary)] rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-10 shadow-xl animate-[fadeInHighlight_0.8s_ease-out]">
      <div class="text-center text-[var(--webinar-primary)] text-4xl mb-4">🎁</div>
      <p class="text-2xl sm:text-3xl font-semibold text-[var(--gray-light)] leading-relaxed text-center">
        El programa <strong class="text-white font-bold">Fundamentals</strong> tiene un valor regular de
        <strong class="text-[var(--webinar-primary)] font-extrabold text-3xl">$6,500 MXN</strong>.
      </p>

      <div class="mt-8 text-center space-y-4">
        <p class="text-xl text-[var(--gray-light)]">
          👉 <a href="https://academy.ceodetuvida.com/courses/offers/aba9c77c-959f-42bb-bfd4-4eefe1b60de6" 
              target="_blank" 
              class="underline text-[var(--webinar-primary)] font-semibold hover:text-white transition-colors">
            Haz clic aquí para pagar en una sola exhibición
          </a>
        </p>
        <p class="text-xl text-[var(--gray-light)]">
          👉 <a href="https://academy.ceodetuvida.com/courses/offers/c7d9708c-a13a-463c-9b65-be0e98abf33b" 
              target="_blank" 
              class="underline text-[var(--webinar-primary)] font-semibold hover:text-white transition-colors">
            O haz clic aquí para pagar en 2 exhibiciones de $3,250 MXN
          </a>
        </p>
      </div>
    </div>
  </section>

  <section class="py-20 bg-black/50">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 mt-20">Temario del Programa</h2>
      <div class="space-y-12 max-w-5xl mx-auto">
        {#each weeks as week, index}
          <div class="bg-[var(--gray-dark)] p-8 rounded-lg text-left flex flex-col md:flex-row gap-6 items-start" in:fly={{ y: 20, duration: 500, delay: index * 200 }}>
            <div class="flex-shrink-0 text-[var(--webinar-primary)] text-4xl font-bold">{week.week}</div>
            <div>
              <h3 class="text-xl font-bold mb-2 text-[var(--webinar-primary)]">{week.title}</h3>
              <p class="text-[var(--gray-light)]"><strong>Objetivo:</strong> {week.objective}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section> 

  <section class="py-20 bg-black/90">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12" in:fade={{ duration: 500 }}>
        ¿Qué más vas a lograr?
      </h2>

      <ul class="space-y-6 max-w-4xl mx-auto text-left text-2xl text-[var(--gray-light)]"> <li class="flex items-start gap-3" in:fade={{ delay: 100 }}>
          <span class="text-[var(--webinar-primary)] text-xl">✅</span>
          <span class="text-[var(--gray-light)]">Vas a tener claridad sobre tu siguiente paso personal y profesional, sin culpa ni miedo.</span>
        </li>
        <li class="flex items-start gap-3" in:fade={{ delay: 200 }}>
          <span class="text-[var(--webinar-primary)] text-xl">✅</span>
          <span class="text-[var(--gray-light)]">Vas a dejar de vivir por inercia y empezar a tomar decisiones desde quien realmente eres.</span>
        </li>
        <li class="flex items-start gap-3" in:fade={{ delay: 300 }}>
          <span class="text-[var(--webinar-primary)] text-xl">✅</span>
          <span class="text-[var(--gray-light)]">Vas a identificar de dónde vienen tus patrones de autosabotaje, complacencia y agotamiento.</span>
        </li>
        <li class="flex items-start gap-3" in:fade={{ delay: 400 }}>
          <span class="text-[var(--webinar-primary)] text-xl">✅</span>
          <span class="text-[var(--gray-light)]">Vas a descubrir por qué el éxito y la felicidad que persigues no te están llenando… y vas a crear nuevas definiciones que te representen de verdad.</span>
        </li>
        <li class="flex items-start gap-3" in:fade={{ delay: 500 }}>
          <span class="text-[var(--webinar-primary)] text-xl">✅</span>
          <span class="text-[var(--gray-light)]">Vas a salir del caos y vas a recuperar dirección, enfoque y control.</span>
        </li>
        <li class="flex items-start gap-3" in:fade={{ delay: 600 }}>
          <span class="text-[var(--webinar-primary)] text-xl">✅</span>
          <span class="text-[var(--gray-light)]">Vas a empezar a ponerte en primer lugar, incluso si eso implica dejar de encajar donde ya no te corresponde.</span>
        </li>
      </ul>
    </div>
  </section>
  
  <section class="py-20 bg-black/50">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">¿Por qué estoy creando este programa?</h2>
      <ul class="space-y-6 max-w-4xl mx-auto text-left text-2xl text-[var(--gray-light)]"> {#each reasons as reason, index}
          <li class="flex items-start gap-3" in:fly={{ y: 20, duration: 500, delay: index * 150 }}>
            <span class="text-[var(--webinar-primary)] text-xl">🔥</span>
            <span class="text-[var(--gray-light)]">{reason}</span>
          </li>
        {/each}
      </ul>
      <p class="space-y-6 max-w-4xl mx-auto text-left text-2xl text-[var(--gray-light)]">Si aún tienes duda de si es para ti…</p>
    </div>
  </section>
  <section class="py-20 bg-black/30">
    <div class="container mx-auto px-4">
      <h2 class="space-y-6 max-w-4xl mx-auto text-left text-2xl text-[var(--gray-light)]">Lo que dicen quienes han tomado FUNDAMENTALS</h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {#each testimonials as t, index}
          <div class="bg-[var(--gray-dark)] p-8 rounded-lg text-center" in:fade={{ duration: 300, delay: index * 100 }}> <div class="flex justify-center mb-4">
              {#each Array(5) as _}<span class="text-[var(--webinar-primary)] text-xl">⭐</span>{/each}
            </div>
            <p class="italic mb-6 text-[var(--gray-light)]">"{t.text}"</p> <p class="font-semibold text-[var(--webinar-primary)]">{t.name}</p>
            <p class="text-sm text-[var(--gray-role)]">{t.role}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  <section class="py-20 bg-black/80">
    <div class="container mx-auto px-4 text-center max-w-3xl">
      <p class="text-2xl font-semibold text-white mb-6 leading-relaxed" in:fade={{ duration: 500 }}>
        Si quieres vivir con más claridad, tomar decisiones con seguridad y construir una vida que realmente se sienta tuya y un éxito que te expanda y no que te asfixie, este es tu primer paso.
      </p>
      <p class="text-xl text-[var(--gray-light)] leading-relaxed" in:fade={{ delay: 200, duration: 500 }}>
        <strong class="text-white">FUNDAMENTALS</strong> no te promete que vas a cambiar toda tu vida en cinco semanas.
      </p>
      <p class="text-xl text-[var(--gray-light)] mt-4" in:fade={{ delay: 400, duration: 500 }}>
        Pero sí te promete algo muy poderoso:
      </p>
      <p class="text-xl text-[var(--webinar-primary)] font-bold mt-4" in:fade={{ delay: 600, duration: 500 }}> Te va a devolver el timón para que seas tú quien la dirija.
      </p>
    </div>
  </section>

  <section class="py-20 bg-[var(--cta-bg)]">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">No dejes pasar esta oportunidad</h2> <p class="text-xl mb-8 max-w-2xl mx-auto text-[var(--gray-light)]">Es hora de crear tu propio <span class="text-[var(--webinar-primary)]">FAE</span> y vivir bajo tus propias reglas.</p>
      <p class="text-xl mb-8 max-w-2xl mx-auto text-[var(--gray-light)]">Al otro lado de esta decisión… está la vida que realmente mereces.</p>
      <div class="max-w-md mx-auto h-[432px]">
        <iframe
          src="https://link.funnelia.io/widget/form/HhoGA8ulHKhERBCb5ACZ"
          style="width:100%;height:100%;border:none;border-radius:10px"
          title="Form de Fundamentals"
        ></iframe>
      </div>
    </div>
  </section>
  
  <script src="https://link.funnelia.io/js/form_embed.js"></script>
</main>
{/if}
