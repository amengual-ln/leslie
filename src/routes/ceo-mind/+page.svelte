<script>
  import Button from "../../components/atoms/Button.svelte";
</script>

<main class="max-w-screen-2xl mx-auto">
  <section id="ceo-mind" class="text-xl p-4">
    <img
      src="CEOmind.png"
      alt="CEO MIND Logo"
      class="aspect-[16/5] object-cover animate-fade-up"
    />
    <div class="flex flex-col lg:flex-row gap-12 px-4 py-12">
      <div class="flex flex-col justify-center gap-4 flex-1">
        <p class="text-left lg:text-left">
          CEO Mind es una membresía de mantenimiento exclusiva para personas que 
          han completado CEO TRAINING o al menos dos CEO HACKING.
        </p>
        <p class="text-left lg:text-left">
          CEO Mind se enfoca en mantener y continuar desarrollando
          life skills para que tu Vida Altamente Rentable sea sustentable.
        </p>
        <br/>
      </div>
      <div class="block lg:hidden">
        <img src="/mind.webp" alt="Yoga">
      </div>
      <div class="flex flex-col justify-center flex-1">
        <p class="text-left lg:text-left">
          Nos reunimos dos veces al mes en sesiones grupales para:
        </p>
        
        <ul class="flex flex-col gap-4 list-disc my-8 ml-8">
          <li>Revisar y ajustar tus metas y estrategias</li>
          <li>Proporcionar apoyo continuo y comunidad</li>
          <li>Ofrecer contenido exclusivo y actualizaciones</li>
        </ul>
        <p class="text-left lg:text-left">
          CEO Mind es el siguiente nivel para aquellos comprometidos con su
          desarrollo a largo plazo y que desean mantener una vida profesional y
          personal por diseño.
        </p>
      </div>
    </div>
    <div class="grid justify-center">
      <a href="https://walink.co/bccb88" target="_blank" rel="noopener noreferrer" class="my-8">
        <Button value="¡Es momento de tomar acción!" />
      </a>
    </div>
  </section>
</main>
