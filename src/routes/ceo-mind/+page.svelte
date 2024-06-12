<script>
  import Button from "../../components/atoms/Button.svelte";
</script>

<main class="max-w-screen-2xl mx-auto">
  <section id="ceo-mind" class="text-xl p-4">
    <img
      src="CEOmind.png"
      alt="CEO Mind Logo"
      class="aspect-[16/5] object-cover"
    />
    <div class="flex flex-col lg:flex-row gap-12 px-4 py-12">
      <div class="flex flex-col justify-center gap-4 flex-1">
        <p>
          CEOmind es una membresía de mantenimiento diseñada para aquellos que
          ya han trabajado conmigo durante al menos un año. Este programa es
          exclusivo para personas que han completado CEO Training o al menos dos
          CEO Hacking.
        </p>
      </div>
      <div class="flex flex-col justify-center flex-1">
        <p>
          CEOmind se enfoca en mantener y continuar desarrollando las
          habilidades adquiridas, asegurando un crecimiento continuo. Nos
          reunimos dos veces al mes en sesiones grupales para:
        </p>
        <ul class="flex flex-col gap-4 list-disc my-8 ml-8">
          <li>Revisar y ajustar tus metas y estrategias</li>
          <li>Proporcionar apoyo continuo y comunidad</li>
          <li>Ofrecer contenido exclusivo y actualizaciones</li>
        </ul>
        <p>
          CEOmind es el siguiente nivel para aquellos comprometidos con su
          desarrollo a largo plazo y que desean mantener una vida profesional y
          personal por diseño.
        </p>
      </div>
    </div>
    <div class="grid justify-center">
      <a href="/" target="_blank" rel="noopener noreferrer" class="my-8">
        <Button value="¿Estas listo para tomar el control?" />
      </a>
    </div>
  </section>
</main>
