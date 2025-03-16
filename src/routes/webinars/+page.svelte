<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { Check, X, Star } from 'lucide-svelte';

  let mounted = false;

  const benefits = [
    { title: "Identificar tu techo de cristal", description: "Descubre qué está limitando realmente tu crecimiento profesional y personal en este momento." },
    { title: "Definir tu siguiente paso estratégico", description: "Obtén claridad sobre la dirección que debes tomar en tu carrera o negocio para maximizar resultados." },
    { title: "Tomar decisiones con seguridad", description: "Gana la confianza para decidir sobre ascensos, cambios de trabajo o emprender tu propio negocio." },
    { title: "Generar más ingresos sin desgaste", description: "Descubre estrategias para aumentar tus ingresos sin sacrificar tu bienestar o tiempo personal." }
  ];

  const testimonials = [
    { name: "María González", role: "Directora de Marketing", text: "La sesión estratégica me dio exactamente lo que necesitaba: claridad y un plan de acción concreto. En 90 minutos resolví lo que llevaba meses postergando." }
  ];

  const forYouPoints = [
    "Eres un director, ejecutivo o empresario que quiere salir del estancamiento y tomar decisiones con estrategia.",
    "Quieres una solución clara y aplicable, sin rodeos ni teoría innecesaria.",
    "Necesitas resolver un problema puntual y definir el siguiente paso con confianza.",
    "Estás listo para tomar acción y dejar de postergar tu crecimiento."
  ];

  const notForYouPoints = [
    "Solo buscas inspiración o motivación sin intención de ejecutar.",
    "Esperas que todo cambie sin hacer ajustes en tu mentalidad o estrategia.",
    "Quieres una solución mágica sin estar dispuesto a tomar acción."
  ];

  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
<main class="font-sans bg-[var(--secondary)] text-[var(--secondary-foreground)] min-h-screen">
  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
    <div class="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lesnoback-OWSuBlYLiyaDAcZnXB4oJU5Puc39be.png')] bg-cover bg-center opacity-10 bg-no-repeat"></div>
    <div class="container mx-auto px-4 relative z-10 text-center max-w-4xl" in:fade>
      <h1 class="text-4xl md:text-6xl font-bold mb-4">SESIÓN <span class="text-[var(--primary)]">ESTRATÉGICA</span> <span class="text-[var(--secondary-foreground)]">DE EXPANSIÓN</span></h1>
      <h2 class="text-xl md:text-2xl font-semibold mb-6">90 MINUTOS PARA SALIR DEL ESTANCAMIENTO Y TOMAR ACCIÓN CON CLARIDAD</h2>
      <p class="text-lg mb-6">Esta sesión <strong>NO</strong> es teoría, <strong>NO</strong> es motivación pasajera, <strong>NO</strong> es más información sin aplicación.</p>
      <p class="text-lg mb-10">Es una estrategia puntual, práctica y accionable diseñada para que en 90 minutos obtengas claridad y un plan para resolver lo que te está frenando ahora mismo.</p>
      <div class="max-w-md mx-auto">
        <iframe src="https://link.funnelia.io/widget/form/i5UoJ3r34ktXLZTmECfs?theme=dark&inputBg=black" style="width: 100%; height: 432px; border: none; border-radius: 10px;" id="inline-i5UoJ3r34ktXLZTmECfs" title="Landing Sesión Diagnóstico"></iframe>
      </div>
    </div>
  </section>

  <!-- What You Can Solve -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">🎯 ¿QUÉ PUEDES RESOLVER EN ESTA SESIÓN?</h2>
      <div class="grid md:grid-cols-2 gap-8">
        {#each benefits as benefit, index}
          <div class="bg-[var(--gray-dark)] p-8 rounded-lg flex items-start gap-4" in:fly={{y: 20, duration: 500, delay: index * 200}}>
            <span class="text-[var(--blue)] text-xl">🔹</span>
            <div>
              <h3 class="text-xl font-bold mb-2 text-[var(--primary)]">{benefit.title}</h3>
              <p class="text-[var(--gray-light)]">{benefit.description}</p>
            </div>
          </div>
        {/each}
      </div>
      <div class="mt-12 text-center">
        <p class="text-xl max-w-3xl mx-auto">Después de esta sesión, tendrás claridad sobre qué hacer y un plan de acción concreto para avanzar sin dudar.</p>
      </div>
    </div>
  </section>

  <!-- Is This For You Section -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">¿ESTA SESIÓN ES PARA TI?</h2>
      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div class="bg-[var(--gray-dark)] p-8 rounded-lg">
          <h3 class="text-2xl font-bold mb-6 text-[var(--primary)] flex items-center">✔️ SÍ, ES PARA TI SI...</h3>
          <ul class="space-y-4">
            {#each forYouPoints as point}
              <li class="flex items-start gap-3"><span class="text-[var(--primary)]">✔️</span><span>{point}</span></li>
            {/each}
          </ul>
        </div>
        <div class="bg-[var(--gray-dark)] p-8 rounded-lg">
          <h3 class="text-2xl font-bold mb-6 text-[var(--red)] flex items-center">❌ NO ES PARA TI SI...</h3>
          <ul class="space-y-4">
            {#each notForYouPoints as point}
              <li class="flex items-start gap-3"><span class="text-[var(--red)]">❌</span><span>{point}</span></li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Lo que dicen quienes ya tomaron su sesión</h2>
      <div class="max-w-3xl mx-auto bg-[var(--gray-dark)] p-8 rounded-lg text-center">
        <div class="flex justify-center mb-4">{#each Array(5) as _}<span class="text-[var(--primary)] text-xl">⭐</span>{/each}</div>
        <p class="text-lg mb-6 italic">"{testimonials[0].text}"</p>
        <p class="font-semibold text-[var(--primary)]">{testimonials[0].name}</p>
        <p class="text-sm text-[var(--gray-role)]">{testimonials[0].role}</p>
      </div>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="py-20 bg-[var(--cta-bg)]">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">¿QUÉ SIGUE AHORA?</h2>
      <p class="text-xl mb-4 max-w-2xl mx-auto">Si quieres dejar de sentirte estancado y avanzar con claridad, agenda tu sesión ahora mismo.</p>
      <p class="text-xl mb-8 max-w-2xl mx-auto">90 minutos pueden darte la dirección y la estrategia que hoy necesitas.</p>
      <p class="text-2xl font-bold text-[var(--primary)] mb-8">Comienza hoy.</p>
    </div>
  </section>

  <script src="https://link.funnelia.io/js/form_embed.js" />
</main>
{/if}

<style>
  :global(body) {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
</style>
