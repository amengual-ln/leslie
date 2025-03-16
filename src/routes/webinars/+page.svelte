<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  const benefits = [
    {
      title: "Identificar tu techo de cristal",
      description: "Descubre qué está limitando realmente tu crecimiento profesional y personal en este momento.",
    },
    {
      title: "Definir tu siguiente paso estratégico",
      description: "Obtén claridad sobre la dirección que debes tomar en tu carrera o negocio para maximizar resultados.",
    },
    {
      title: "Tomar decisiones con seguridad",
      description: "Gana la confianza para decidir sobre ascensos, cambios de trabajo o emprender tu propio negocio.",
    },
    {
      title: "Generar más ingresos sin desgaste",
      description: "Descubre estrategias para aumentar tus ingresos sin sacrificar tu bienestar o tiempo personal.",
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Directora de Marketing",
      text: "La sesión estratégica me dio exactamente lo que necesitaba: claridad y un plan de acción concreto. En 90 minutos resolví lo que llevaba meses postergando.",
    },
    {
      name: "Carlos Rodríguez",
      role: "CEO & Fundador",
      text: "Increíble cómo en tan poco tiempo pudimos identificar el verdadero obstáculo que frenaba mi negocio. La inversión más valiosa que he hecho este año.",
    },
    {
      name: "Ana Martínez",
      role: "Ejecutiva Senior",
      text: "Llegué con dudas sobre mi próximo paso profesional y salí con un plan claro. Dos semanas después conseguí el ascenso que buscaba.",
    },
  ];

  const forYouPoints = [
    "Eres un director, ejecutivo o empresario que quiere salir del estancamiento y tomar decisiones con estrategia.",
    "Quieres una solución clara y aplicable, sin rodeos ni teoría innecesaria.",
    "Necesitas resolver un problema puntual y definir el siguiente paso con confianza.",
    "Estás listo para tomar acción y dejar de postergar tu crecimiento.",
  ];

  const notForYouPoints = [
    "Solo buscas inspiración o motivación sin intención de ejecutar.",
    "Esperas que todo cambie sin hacer ajustes en tu mentalidad o estrategia.",
    "Quieres una solución mágica sin estar dispuesto a tomar acción.",
  ];

  onMount(() => {
    // Script para modificar iframe después de cargar
    const script = document.createElement("script");
    script.innerHTML = `
      window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'funnelia-form-loaded') {
          const iframes = document.querySelectorAll('iframe[id^="inline-i5UoJ3r34ktXLZTmECfs"]');
          iframes.forEach(iframe => {
            try {
              const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
              const style = iframeDoc.createElement('style');
              style.textContent = \`
                input, textarea, select {
                  background-color: #000000 !important;
                  color: #ffffff !important;
                }
              \`;
              iframeDoc.head.appendChild(style);
            } catch (e) {
              console.error('Could not access iframe content:', e);
            }
          });
        }
      });
    `;
    document.body.appendChild(script);
  });
</script>

<main class="font-sans bg-secondary text-white min-h-screen">
  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
    <div class="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lesnoback-OWSuBlYLiyaDAcZnXB4oJU5Puc39be.png')] bg-cover bg-right-top opacity-10 bg-no-repeat" />
    <div class="container mx-auto px-4 relative z-10 text-center" in:fade>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        SESIÓN ESTRATÉGICA <span class="text-primary">DE EXPANSIÓN</span>
      </h1>
      <h2 class="text-xl md:text-3xl font-semibold mb-6">
        90 MINUTOS PARA SALIR DEL ESTANCAMIENTO Y TOMAR ACCIÓN CON CLARIDAD
      </h2>
      <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Esta sesión <strong>NO</strong> es teoría, <strong>NO</strong> es motivación pasajera, <strong>NO</strong> es más información sin aplicación.
      </p>
      <iframe
        src="https://link.funnelia.io/widget/form/i5UoJ3r34ktXLZTmECfs?theme=dark&inputBg=black"
        style="width: 100%; height: 432px; border: none; border-radius: 10px;"
        id="inline-i5UoJ3r34ktXLZTmECfs"
        title="Landing Sesión Diagnóstico"
      ></iframe>
    </div>
  </section>

  <!-- What You Can Solve -->
  <section class="py-20 bg-black/50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        ¿QUÉ PUEDES RESOLVER EN ESTA SESIÓN?
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        {#each benefits as benefit, index}
          <div class="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-all flex items-start gap-4" in:fade={{delay: index * 200}}>
            <span class="text-primary text-xl">🔹</span>
            <div>
              <h3 class="text-xl font-bold mb-2 text-primary">{benefit.title}</h3>
              <p class="text-gray-300">{benefit.description}</p>
            </div>
          </div>
        {/each}
      </div>
      <div class="mt-12 text-center">
        <p class="text-xl max-w-3xl mx-auto">
          Después de esta sesión, tendrás claridad sobre qué hacer y un plan de acción concreto para avanzar sin dudar.
        </p>
      </div>
    </div>
  </section>

  <!-- Continúa con los demás bloques igual -->

  <!-- Funnelia Script -->
  <script src="https://link.funnelia.io/js/form_embed.js" />
</main>
