<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { ChevronRight, Star } from 'lucide-svelte';

  let mounted = false;
  let isSubmitting = false;
  let isSuccess = false;
  let acceptedPolicy = false;
  let email = '';

  const benefits = [
    {
      title: "Descubre tu Potencial",
      description: "Para que obtengas herramientas para recablear tu mente y usarla de forma estrategia.",
    },
    {
      title: "Estrategias Probadas",
      description: "Para que recibas en tu correo electrónico los tips y secretos que han ayudado a cientos de ejecutivos a llevar su vida al siguiente nivel.",
    },
    {
      title: "Comunidad de Líderes",
      description: "Para dejar de pensar cómo la abuelita de tu abuelita y empieces a vivir bajo tus propias reglas.",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Emprendedora",
      text: "El newsletter me ha ayudado a mantener el enfoque en mis metas y a tomar mejores decisiones en mi negocio.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Director Ejecutivo",
      text: "Los consejos semanales son oro puro. Han transformado mi manera de liderar y gestionar equipos.",
    },
    {
      name: "Ana Martínez",
      role: "Consultora",
      text: "La calidad del contenido es excepcional. Cada semana espero con ansias el próximo newsletter.",
    },
  ];

  onMount(() => {
    mounted = true;
  });

  async function handleSubscribe(e) {
    e.preventDefault();
    if (!acceptedPolicy) {
      alert("Por favor, acepta la Política de Privacidad para suscribirte.");
      return;
    }
    isSubmitting = true;

    try {
      const formData = new FormData();
      formData.append('fields[email]', email);

      const response = await fetch("https://assets.mailerlite.com/jsonp/780653/forms/125961743657600458/subscribe", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        isSuccess = true;
      } else {
        throw new Error("Error en la suscripción");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error. Por favor intenta de nuevo.");
    } finally {
      isSubmitting = false;
    }
  }
</script>

{#if mounted}
<main class="font-poppins bg-white text-secondary min-h-screen">
  <!-- Hero Section -->
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lesnoback-I7nMfplh87uHUUpdw8L86TiuT1nGDP.png')] bg-[length:900px] bg-[center_top_6rem] sm:bg-contain sm:bg-[center_bottom_-6.5rem] bg-no-repeat bg-fixed opacity-40 "></div>
    <div class="container mx-auto px-4 relative mt-64 z-10">
      <div in:fly="{{ y: 20, duration: 800 }}" class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-secondary">
          Conviértete en el <span class="text-primary">CEO de tu Vida</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-secondary">
          Suscríbete a mi newsletter y descubre cómo romper tus techos de cristal, liderarte con maestría y empezar a tener una VAR (Vida Altamente Rentable): más dinero, más éxito, más felicidad y más satisfacción
        </p>
        <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          {#if !isSuccess}
            <form on:submit={handleSubscribe} class="space-y-4">
              <div class="text-center mb-4">
                <p>¡Suscríbete a mi Newsletter para recibir mi contenido!</p>
              </div>
              <input type="email" bind:value={email} placeholder="Email" required class="w-full p-2 border rounded" />
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="privacy-policy" bind:checked={acceptedPolicy} />
                <label for="privacy-policy" class="text-sm text-gray-700 cursor-pointer">
                  Acepto la <a href="https://drive.google.com/file/d/1MZL1P-ShhQN_z_q7H-JdR86WuouRsICm/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-primary underline">Política de Privacidad</a>
                </label>
              </div>
              <button type="submit" class="w-full bg-primary text-white hover:bg-primary/90 p-2 rounded" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Suscribirse"}
              </button>
            </form>
          {:else}
            <div class="text-center">
              <h3 class="text-xl font-bold mb-2">¡Gracias!</h3>
              <p>Te has suscrito con éxito.</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="py-20 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary">¿Por qué suscribirte?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#each benefits as benefit, index}
          <div in:fly="{{ y: 20, duration: 500, delay: index * 200 }}" class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 class="text-xl font-bold mb-4 text-primary">{benefit.title}</h3>
            <p class="text-secondary">{benefit.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="pb-20 bg-gray-100">
    <div class="container mx-auto px-4 text-center">
      <div in:fly="{{ y: 20, duration: 500 }}">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-secondary">Comienza Tu Transformación Hoy</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-secondary">
          Únete a nuestra comunidad y recibe contenido exclusivo que te ayudará a alcanzar tus metas.
        </p>
        <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          {#if !isSuccess}
            <form on:submit={handleSubscribe} class="space-y-4">
              <div class="text-center mb-4">
                <p>¡Suscríbete a mi Newsletter para recibir mi contenido!</p>
              </div>
              <input type="email" bind:value={email} placeholder="Email" required class="w-full p-2 border rounded" />
              <div class="flex items-center space-x-2">
                <input type="checkbox" id="privacy-policy-2" bind:checked={acceptedPolicy} />
                <label for="privacy-policy-2" class="text-sm text-gray-700 cursor-pointer">
                  Acepto la <a href="https://drive.google.com/file/d/1MZL1P-ShhQN_z_q7H-JdR86WuouRsICm/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-primary underline">Política de Privacidad</a>
                </label>
              </div>
              <button type="submit" class="w-full bg-primary text-white hover:bg-primary/90 p-2 rounded" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Suscribirse"}
              </button>
            </form>
          {:else}
            <div class="text-center">
              <h3 class="text-xl font-bold mb-2">¡Gracias!</h3>
              <p>Te has suscrito con éxito.</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
</main>
{/if}

<style>
  :global(body) {
    font-family: 'Poppins', sans-serif;
  }

  .text-primary {
    color: #D4AF37;
  }

  .bg-primary {
    background-color: #D4AF37;
  }

  .text-secondary {
    color: #4A5568;
  }
</style>
