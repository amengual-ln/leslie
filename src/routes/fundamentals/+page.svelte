<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
  
    let mounted = false;
  
    const pillars = [
      { title: "Felicidad", description: "Redefine qué significa ser feliz para ti y construye tu propio concepto." },
      { title: "Autoconcepto", description: "Rompe con el autoconcepto impuesto y diseña quién eres desde tu autenticidad." },
      { title: "Éxito", description: "Deja de perseguir definiciones ajenas y empieza a crear tu propio modelo de éxito." }
    ];
  
    const includes = [
      "5 semanas de contenido grabado con videos directos y accionables.",
      "Ejercicios prácticos en cada módulo para aplicar lo aprendido.",
      "2 sesiones en vivo de Preguntas y Respuestas conmigo para profundizar en tu proceso.",
      "Material descargable para acompañar tu transformación.",
      "Acceso a la comunidad privada para compartir avances y recibir apoyo."
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
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div class="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lesnoback-OWSuBlYLiyaDAcZnXB4oJU5Puc39be.png')] bg-cover bg-center opacity-10 bg-no-repeat"></div>
      <div class="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span class="text-[var(--webinar-primary)]">F</span>UND<span class="text-[var(--webinar-primary)]">A</span>M<span class="text-[var(--webinar-primary)]">E</span>NTALS
          </h1>
          <h2 class="text-xl md:text-2xl mb-6">
            Los tres pilares para transformarte en el CEO de tu vida:
            <br/>
            <span class="text-[var(--webinar-primary)]">Felicidad</span>. <span class="text-[var(--webinar-primary)]">Autoconcepto</span>. <span class="text-[var(--webinar-primary)]">Éxito</span>.
          </h2>
          <p class="text-lg mb-4 max-w-3xl mx-auto">
            No puedes liderar tu vida si estás viviendo bajo reglas que no son tuyas. <br />
            Y no puedes expandirte si no sabes quién eres ni qué estás persiguiendo.
          </p>
          <p class="text-lg mb-10 max-w-3xl mx-auto">
            Es hora de soltar el deber, el miedo y las expectativas ajenas. Reconecta con lo esencial y comienza a tomar decisiones alineadas con lo que verdaderamente eres y deseas.
          </p>
        <div class="max-w-md mx-auto h-[432px] mt-10">
          <iframe
            src="https://link.funnelia.io/widget/form/HhoGA8ulHKhERBCb5ACZ"
            style="width:100%;height:100%;border:none;border-radius:10px"
            title="Form de Fundamentals"
          ></iframe>
        </div>
      </div>
    </section>
  
   <!-- Pillars -->
<section class="py-20 bg-black/50"> 
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">
        Tu <span class="text-[var(--webinar-primary)]">FAE</span>: 
        <span class="text-[var(--webinar-primary)]">Felicidad</span>, 
        <span class="text-[var(--webinar-primary)]">Autoconcepto</span> y 
        <span class="text-[var(--webinar-primary)]">Éxito</span>
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#each pillars as p, index}
          <div in:fly={{ y: 20, duration: 500, delay: index * 200 }} class="bg-[var(--gray-dark)] p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-[var(--webinar-primary)] mb-4"><span class="text-[var(--webinar-primary)]">{p.title}</span></h3>
            <p class="text-[var(--gray-light)]">{p.description}</p>
          </div>
        {/each}
      </div>
      <p class="text-xl max-w-3xl mx-auto mt-12 text-[var(--gray-light)]">En 5 semanas, construirás tu propia definición de éxito, felicidad y autoconcepto, y empezarás a vivir desde ahí.</p>
    </div>
  </section>
  
      
  
    <!-- What Includes -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">¿Qué incluye este programa?</h2>
        <ul class="space-y-6 max-w-4xl mx-auto">
          {#each includes as item}
            <li class="flex items-start gap-3"><span class="text-[var(--webinar-primary)] text-xl">✔️</span><span>{item}</span></li>
          {/each}
        </ul>
      </div>
    </section>
  
    <!-- Who For -->
    <section class="py-20 bg-[var(--gray-dark)]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">¿Para quién es este programa?</h2>
        <ul class="space-y-6 max-w-4xl mx-auto">
          {#each whoFor as item}
            <li class="flex items-start gap-3"><span class="text-[var(--webinar-primary)] text-xl">✔️</span><span>{item}</span></li>
          {/each}
        </ul>
      </div>
    </section>
  
    <!-- Not For -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">¿Para quién NO es este programa?</h2>
        <ul class="space-y-6 max-w-4xl mx-auto">
          {#each notFor as item}
            <li class="flex items-start gap-3"><span class="text-[var(--red)] text-xl">❌</span><span>{item}</span></li>
          {/each}
        </ul>
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
  
    <!-- Final CTA -->
    <section class="py-20 bg-[var(--cta-bg)]">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Reconecta contigo y empieza ahora</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Tu <span class="text-[var(--webinar-primary)]">FAE</span> te está esperando. Y del otro lado de esta decisión… está la vida que realmente mereces.</p>
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
  