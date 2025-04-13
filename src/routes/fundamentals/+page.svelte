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
        title: "IMPLEMENTACIÓN Y SOPORTE",
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
    <!-- Hero Pillars Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
    <div class="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lesnoback-OWSuBlYLiyaDAcZnXB4oJU5Puc39be.png')] bg-cover bg-center opacity-10 bg-no-repeat"></div>
    
    <div class="container mx-auto px-4 relative z-10 text-center max-w-4xl">
      
      <h1 class="text-5xl md:text-6xl font-bold mb-8 leading-tight">
        <span class="text-[var(--webinar-primary)]">F</span>UND<span class="text-[var(--webinar-primary)]">A</span>M<span class="text-[var(--webinar-primary)]">E</span>NTALS
      </h1>
  
      <h2 class="text-xl md:text-2xl mb-8">
        Los tres pilares para transformarte en el CEO de tu vida:
        <br/>
        <span class="text-[var(--webinar-primary)]">Felicidad</span>. <span class="text-[var(--webinar-primary)]">Autoconcepto</span>. <span class="text-[var(--webinar-primary)]">Éxito</span>
      </h2>
<!-- Introducción a FAE con h3 y estilo visual mejorado -->
<section class="py-10 bg-black/90 text-[var(--gray-light)]">
  <div class="container mx-auto px-4 max-w-4xl text-left">
    <h3 class="text-2xl mb-6 text-white font-bold">
      Este es el primer paso para liderar tu vida:
    </h3>
    <ul class="text-2xl text-white list-disc list-inside mb-10 space-y-2">
      <li><strong>Sin sacrificar lo que amas</strong></li>
      <li>Sin obligarte a encajar en un molde que no es tuyo</li>
      <li>Sin cargar con las expectativas de otros</li>
    </ul>

    <h3 class="text-2xl mb-6 text-center">
      <strong class="text-white">✔ FUNDAMENTALS</strong> es un programa 
      <span class="text-[var(--webinar-primary)] font-bold">breve, profundo y poderoso de</span> 
      <span class="text-white font-bold">solo 5 semanas</span>.
    </h3>

    <h3 class="text-2xl mb-6 text-white">
      Diseñado para ejecutivos y líderes que, 
      <span class="font-medium">a pesar de tener una carrera “exitosa”</span> según los estándares externos,
      se sienten:
    </h3>
    <ul class="text-2xl text-white list-disc list-inside mb-10 space-y-2">
      <li>Abrumados</li>
      <li>Desconectados de sí mismos</li>
      <li>Viviendo en automático</li>
    </ul>

    <h3 class="text-2xl mb-8 leading-relaxed text-white text-center">
      <span class="text-[var(--webinar-primary)]">💡</span> 
      Es un <strong>espacio estratégico</strong> donde vas a 
      <strong>cuestionar lo que has venido creyendo</strong> sobre el éxito, sobre ti y sobre la felicidad.
    </h3>

    <div class="text-center mb-6">
      <h3 class="text-3xl font-bold text-[var(--webinar-primary)] mt-10">
        Aquí vas a construir tu FAE:
      </h3>
      <h3 class="text-2xl text-white mt-2">
        Tu propia definición de <strong>Felicidad</strong>, <strong>Autoconcepto</strong> y <strong>Éxito</strong>.
      </h3>
    </div>
  </div>
</section>

      <!-- Separador -->
      <h2 class="text-3xl md:text-4xl font-bold mb-16 mt-20">
        Tu <span class="text-[var(--webinar-primary)]">FAE</span>: 
        <span class="text-[var(--webinar-primary)]">Felicidad</span>, 
        <span class="text-[var(--webinar-primary)]">Autoconcepto</span> y 
        <span class="text-[var(--webinar-primary)]">Éxito</span>
      </h2>
  
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        {#each pillars as p, index}
          <div in:fly={{ y: 20, duration: 500, delay: index * 200 }} class="bg-[var(--gray-dark)] p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-[var(--webinar-primary)] mb-4"><span class="text-[var(--webinar-primary)]">{p.title}</span></h3>
            <p class="text-[var(--gray-light)]">{p.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  <!-- Achievements -->  
  <section class="py-20 bg-black/90">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 mt-20"> <!-- agrega mt-20 -->
        ¿Qué vas a lograr al finalizar el programa?
      </h2>
      <ul class="space-y-6 max-w-4xl mx-auto text-left">
        {#each achievements as item, index}
          <li class="flex items-start gap-3" in:fly={{ y: 20, duration: 500, delay: index * 150 }}>
            <span class="text-[var(--webinar-primary)] text-xl">📌</span>
            <span class="text-[var(--gray-light)]">{item}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section> 
    <!-- Infografías FAE -->
    <section class="py-16 bg-black/80">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">Tu FAE, visualizado</h2>    
        <!-- Imagen 1: Diagrama de Flujo -->
        <div class="mb-12 sm:mb-16" in:fade={{ duration: 700 }}>
          <img 
            src="infog1.png" 
            alt="Proceso FAE" 
            class="w-full max-w-md sm:max-w-3xl mx-auto rounded-lg shadow-lg"
            loading="lazy"
          />
          <p class="mt-4 text-sm text-white italic">Procesoo FAE</p>
        </div>
    
        <!-- Imagen 2: Escalera FAE -->
        <div in:fade={{ duration: 700, delay: 200 }}>
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
<script>
      import { fade } from 'svelte/transition';
</script>
  <!-- ¿Para quién es este programa? -->
<section class="py-20 bg-[var(--gray-dark)] text-[var(--gray-light)]">
  <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-16">
      ¿Para quién es este programa?
    </h2>
    <ul class="space-y-6 text-lg">
      <li class="flex gap-3" in:fade={{ delay: 0 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> Tienes un puesto directivo o ejecutivo, y aunque todo parece ir bien en lo profesional, por dentro te sientes perdida(o), cansada(o) y con la sensación de que algo no está bien.</li>
      <li class="flex gap-3" in:fade={{ delay: 100 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> Vives con caos constante, haciendo malabares para complacer a todos, pero postergándote a ti misma(o) una y otra vez.</li>
      <li class="flex gap-3" in:fade={{ delay: 200 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> Ya no sabes si lo que estás haciendo es por ti o solo por cumplir con lo que otros esperan.</li>
      <li class="flex gap-3" in:fade={{ delay: 300 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> Has logrado lo que “se supone” que te haría feliz, pero no te llena.</li>
      <li class="flex gap-3" in:fade={{ delay: 400 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> Quieres tener claridad sobre qué decisiones, ajustes o acciones necesitas tomar para dejar de vivir en automático y empezar a liderar tu vida con propósito.</li>
      <li class="flex gap-3" in:fade={{ delay: 500 }}><span class="text-[var(--webinar-primary)] text-xl">🔹</span> No quieres perder más tiempo, necesitas algo que te dé claridad y dirección rápida, sin largas teorías, sin perderte en contenido interminable.</li>
    </ul>
  </div>
</section>

<!-- ¿Para quién NO es este programa? -->
<section class="py-20 bg-black text-[var(--gray-light)]">
  <div class="container mx-auto px-4 max-w-4xl">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-16">
      ¿Para quién NO es este programa?
    </h2>
    <ul class="space-y-6 text-lg">
      <li class="flex gap-3" in:fade={{ delay: 0 }}><span class="text-[var(--red)] text-xl">❌</span> Estás esperando una fórmula mágica que lo resuelva todo sin cuestionarte.</li>
      <li class="flex gap-3" in:fade={{ delay: 100 }}><span class="text-[var(--red)] text-xl">❌</span> Prefieres seguir haciendo lo que “toca” aunque no te haga sentido.</li>
      <li class="flex gap-3" in:fade={{ delay: 200 }}><span class="text-[var(--red)] text-xl">❌</span> No estás dispuesto a desafiar los conceptos que te enseñaron sobre ti, el éxito o la felicidad.</li>
      <li class="flex gap-3" in:fade={{ delay: 300 }}><span class="text-[var(--red)] text-xl">❌</span> Buscas motivación momentánea pero no estás listo(a) para tomar decisiones y hacer cambios reales.</li>
      <li class="flex gap-3" in:fade={{ delay: 400 }}><span class="text-[var(--red)] text-xl">❌</span> Crees que el éxito es solo sacrificio, perfección y complacer a los demás.</li>
    </ul>
  </div>
</section>

   <!-- CTA1 -->
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
            <strong class="text-[var(--webinar-primary)] font-extrabold text-3xl">$6,500 MXN</strong>,
            <br class="hidden sm:block" />
            que puedes pagar en 
            <strong class="text-[var(--webinar-primary)] font-extrabold text-3xl">2 exhibiciones de $3,250 MXN</strong>.
          </p>
      </div>
      <div class="max-w-md mx-auto h-[432px] mt-10">
        <iframe
          src="https://link.funnelia.io/widget/form/HhoGA8ulHKhERBCb5ACZ"
          style="width:100%;height:100%;border:none;border-radius:10px"
          title="Form de Fundamentals"
        ></iframe>
    </div>
   </section>
    <!-- Program -->    
    <section class="py-20 bg-black/50">
        <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 mt-20"> <!-- agrega mt-20 -->Temario del Programa</h2>
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

  <!-- ¿Qué más vas a lograr? -->
<section class="py-20 bg-black/90">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-12" in:fade={{ duration: 500 }}>
      ¿Qué más vas a lograr?
    </h2>

    <ul class="space-y-6 max-w-4xl mx-auto text-left">
      <li class="flex items-start gap-3" in:fade={{ delay: 100 }}>
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
    
  <!-- Reason -->  
  <section class="py-20 bg-black/50">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">¿Por qué estoy creando este programa?</h2>
      <ul class="space-y-6 max-w-4xl mx-auto text-left">
        {#each reasons as reason, index}
          <li class="flex items-start gap-3" in:fly={{ y: 20, duration: 500, delay: index * 150 }}>
            <span class="text-[var(--webinar-primary)] text-xl">🔥</span>
            <span class="text-[var(--gray-light)]">{reason}</span>
          </li>
        {/each}
      </ul>
      <p class="text-xl max-w-3xl mx-auto mt-12 text-[var(--gray-light)]">Si aún tienes duda de si es para ti…</p>
    </div>
  </section>
    <!-- Testimonials -->
    <section class="py-20 bg-black/30">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Lo que dicen quienes han tomado FUNDAMENTALS</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {#each testimonials as t, index}
            <div class="bg-[var(--gray-dark)] p-8 rounded-lg text-center" in:fade={{ duration: 300 }}>
              <div class="flex justify-center mb-4">
                {#each Array(5) as _}<span class="text-[var(--webinar-primary)] text-xl">⭐</span>{/each}
              </div>
              <p class="italic mb-6">"{t.text}"</p>
              <p class="font-semibold text-[var(--webinar-primary)]">{t.name}</p>
              <p class="text-sm text-[var(--gray-role)]">{t.role}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>
    <!-- CTA: Primer Paso -->
<section class="py-20 bg-black/80">
  <div class="container mx-auto px-4 text-center max-w-3xl">
    <p class="text-2xl font-semibold text-white mb-6 leading-relaxed" in:fade={{ duration: 500 }}>
      Si quieres vivir con más claridad, tomar decisiones con seguridad y construir una vida que realmente te represente, este es tu primer paso.
    </p>
    <p class="text-xl text-[var(--gray-light)] leading-relaxed" in:fade={{ delay: 200 }}>
      <strong class="text-white">FUNDAMENTALS</strong> no te promete que vas a cambiar toda tu vida en cinco semanas.
    </p>
    <p class="text-xl text-[var(--gray-light)] mt-4" in:fade={{ delay: 400 }}>
      Pero sí te promete algo <strong class="text-[var(--webinar-primary)]">MUY PODEROSO</strong>: te va a devolver el timón para que seas tú quien la dirija.
    </p>
  </div>
</section>

    <!-- Final CTA -->
    <section class="py-20 bg-[var(--cta-bg)]">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">No dejes pasar esta oportunidad</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Es hora de crear tu propio <span class="text-[var(--webinar-primary)]">FAE</span> y de quien quieres ser.</p>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Al otro lado de esta decisión… está la vida que realmente mereces.</p>
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
  
