<script>
  import Button from "./atoms/Button.svelte";
  import FadeUp from "./atoms/FadeUp.svelte";
</script>

<FadeUp>
<section
  class="m-4 bg-leslie_black text-white p-8 lg:px-20 lg:grid grid-cols-2 gap-18 text-center items-center text-xl"
>
    <span class="text-3xl lg:text-6xl pb-4">
      ¿Estás listo para tomar el control?
    </span>
    <div class="flex flex-col gap-4 my-4 mx-2 lg:mx-6">
      <p>
        No esperes más para transformar tu vida. Elige el formato que mejor se
        adapte a tus necesidades y comienza tu viaje hacia la excelencia con
        "CEO de tu Vida".
      </p>
      <p>¡Únete hoy y conviértete en el líder que siempre has soñado ser!</p>
    </div>
    <div class="pt-4 lg:pt-8 col-span-2">
      <a
        href="https://walink.co/bccb88"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button value="Hablemos" />
      </a>
    </div>
  </section>
</FadeUp>
