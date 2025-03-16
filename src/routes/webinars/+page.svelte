<script>
  import Button from "../../components/atoms/Button.svelte";
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { spring } from 'svelte/motion';
  import { Check, X, ChevronRight, Star } from 'lucide-svelte';

  // Font loading would be handled in app.html or with svelte:head
  
  let mounted = false;
  
  const benefits = [
    {
      title: "Identificar tu techo de cristal",
      description:
        "Descubre qué está limitando realmente tu crecimiento profesional y personal en este momento.",
    },
    {
      title: "Definir tu siguiente paso estratégico",
      description:
        "Obtén claridad sobre la dirección que debes tomar en tu carrera o negocio para maximizar resultados.",
    },
    {
      title: "Tomar decisiones con seguridad",
      description: "Gana la confianza para decidir sobre ascensos, cambios de trabajo o emprender tu propio negocio.",
    },
    {
      title: "Generar más ingresos sin desgaste",
      description: "Descubre estrategias para aumentar tus ingresos sin sacrificar tu bienestar o tiempo personal.",
    },
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
    "Estás listo para tomar acción y dejar de postergar tu crecimiento."
  ];

  const notForYouPoints = [
    "Solo buscas inspiración o motivación sin intención de ejecutar.",
    "Esperas que todo cambie sin hacer ajustes en tu mentalidad o estrategia.",
    "Quieres una solución mágica sin estar dispuesto a tomar acción."
  ];

  let currentTestimonialIndex = 0;
  
  function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  }
  
  function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  }

  onMount(() => {
    mounted = true;
    
    // Initialize MailerLite script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '780653');
    `;
    document.body.appendChild(script);
  });
</script>

{#if mounted}
<main class="font-poppins bg-secondary text-white min-h-screen">
  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
    <div class="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lesnoback-OWSuBlYLiyaDAcZnXB4oJU5Puc39be.png')] bg-cover bg-right-top opacity-10 bg-no-repeat"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div in:fade={{ duration: 800, delay: 200 }} class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          <span class="text-primary">SESIÓN ESTRATÉGICA</span> DE EXPANSIÓN
        </h1>
        <h2 class="text-xl md:text-3xl font-semibold mb-6">
          90 MINUTOS PARA SALIR DEL ESTANCAMIENTO Y TOMAR ACCIÓN CON CLARIDAD
        </h2>
        <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Esta sesión <strong>NO</strong> es teoría, <strong>NO</strong> es motivación pasajera, <strong>NO</strong> es más información sin aplicación.
        </p>
        <p class="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Es una estrategia puntual, práctica y accionable diseñada para que en 90 minutos obtengas claridad y un plan para resolver lo que te está frenando ahora mismo.
        </p>
        
        <!-- Subscription Form -->
        <!-- Funnelia Form -->
<div class="max-w-md mx-auto h-[432px]">
  <iframe
    src="https://link.funnelia.io/widget/form/olof0u8d468YHvfDLv65"
    style="width:100%;height:100%;border:none;border-radius:10px"
    id="inline-olof0u8d468YHvfDLv65" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Form de landing para Lista de Espera"
    data-height="432"
    data-layout-iframe-id="inline-olof0u8d468YHvfDLv65"
    data-form-id="olof0u8d468YHvfDLv65"
    title="Form de landing para Lista de Espera"
  >
  </iframe>
</div>

<!-- Funnelia Script -->
<svelte:head>
  <script src="https://link.funnelia.io/js/form_embed.js"></script>
</svelte:head>
      </div>
    </div>
  </section>

  <!-- What You Can Solve Section -->
  <section class="py-20 bg-black/50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        <span class="text-primary">🎯</span> ¿QUÉ PUEDES RESOLVER EN ESTA SESIÓN?
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        {#each benefits as benefit, index}
          <div 
            in:fly={{ y: 20, duration: 500, delay: index * 200 }}
            class="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-all flex items-start gap-4"
          >
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

  <!-- Is This For You Section -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">¿ESTA SESIÓN ES PARA TI?</h2>
      
      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- For You -->
        <div class="bg-white/5 p-8 rounded-lg">
          <h3 class="text-2xl font-bold mb-6 text-primary flex items-center">
            <Check class="mr-2 h-6 w-6" /> SÍ, ES PARA TI SI...
          </h3>
          <ul class="space-y-4">
            {#each forYouPoints as point, index}
              <li class="flex items-start gap-3">
                <Check class="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            {/each}
          </ul>
        </div>
        
        <!-- Not For You -->
        <div class="bg-white/5 p-8 rounded-lg">
          <h3 class="text-2xl font-bold mb-6 text-red-500 flex items-center">
            <X class="mr-2 h-6 w-6" /> NO ES PARA TI SI...
          </h3>
          <ul class="space-y-4">
            {#each notForYouPoints as point, index}
              <li class="flex items-start gap-3">
                <X class="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-20 bg-black/30">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Lo que dicen quienes ya tomaron su sesión</h2>
      
      <div class="max-w-4xl mx-auto relative">
        {#each [testimonials[currentTestimonialIndex]] as testimonial, i (currentTestimonialIndex)}
          <div 
            in:fade={{ duration: 300 }}
            class="bg-white/5 p-8 rounded-lg text-center"
          >
            <div class="flex justify-center mb-4">
              {#each Array(5) as _, i}
                <Star class="h-5 w-5 text-primary fill-primary" />
              {/each}
            </div>
            <p class="text-lg mb-6 italic">"{testimonial.text}"</p>
            <p class="font-semibold text-primary">{testimonial.name}</p>
            <p class="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        {/each}
        
        <button 
          on:click={prevTestimonial}
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 rounded-full p-2 hover:bg-white/20"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        
        <button 
          on:click={nextTestimonial}
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 rounded-full p-2 hover:bg-white/20"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="py-20 bg-primary/10">
    <div class="container mx-auto px-4 text-center">
      <div in:fly={{ y: 20, duration: 500 }}>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">¿QUÉ SIGUE AHORA?</h2>
        <p class="text-xl mb-4 max-w-2xl mx-auto">
          Si quieres dejar de sentirte estancado y avanzar con claridad, agenda tu sesión ahora mismo.
        </p>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          90 minutos pueden darte la dirección y la estrategia que hoy necesitas.
        </p>
        <p class="text-2xl font-bold text-primary mb-8">
          Comienza hoy.
        </p>
        
        <!-- Subscription Form (CTA) -->
        <div id="mlb2-16173497" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-16173497 max-w-md mx-auto">
          <div class="ml-form-align-center">
            <div class="ml-form-embedWrapper embedForm">
              <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <form
                  class="ml-block-form"
                >
                  <div class="ml-form-formContent">
                    <div class="ml-form-fieldRow ml-last-item">
                      <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input
                          aria-label="email"
                          aria-required="true"
                          type="email"
                          class="form-control mb-4 w-full bg-white/10 border-primary text-white placeholder:text-gray-400 p-2 rounded"
                          data-inputmask=""
                          name="fields[email]"
                          placeholder="Tu correo electrónico"
                          autocomplete="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="ml-form-embedPermissions"></div>
                  <div class="ml-form-checkboxRow ml-validate-required">
                    <label class="checkbox flex items-center gap-4 mb-6 cursor-pointer">
                      <input type="checkbox" class="text-center" required />
                      <p class="text-sm">
                        Acepto la{" "}
                        <a
                          href="https://drive.google.com/file/d/1MZL1P-ShhQN_z_q7H-JdR86WuouRsICm/view?usp=sharing"
                          target="_blank"
                          class="text-primary underline"
                        >
                          Política de Privacidad
                        </a>
                      </p>
                    </label>
                  </div>
                  <input type="hidden" name="ml-submit" value="1" />
                  <div class="ml-form-embedSubmit">
                    <button 
                      type="submit" 
                      class="bg-primary text-primary-foreground hover:bg-primary/90 w-full p-2 rounded flex items-center justify-center"
                    >
                      Quiero mi sesión estratégica
                      <ChevronRight class="ml-2 h-4 w-4" />
                    </button>
                  </div>
                  <input type="hidden" name="anticsrf" value="true" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
{/if}

<style>
  :global(body) {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
  
  :global(:root) {
    --primary: #D4AF37;
    --primary-foreground: #000000;
    --secondary: #000000;
    --secondary-foreground: #ffffff;
  }
  
  .text-primary {
    color: var(--primary);
  }
  
  .bg-primary {
    background-color: var(--primary);
  }
  
  .text-primary-foreground {
    color: var(--primary-foreground);
  }
  
  .bg-secondary {
    background-color: var(--secondary);
  }
  
  .text-secondary-foreground {
    color: var(--secondary-foreground);
  }
  
  .fill-primary {
    fill: var(--primary);
  }
  
  /* Additional styles to complement Tailwind */
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

