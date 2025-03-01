<script>
  import Button from "../../components/atoms/Button.svelte";
  import FadeUp from "../../components/atoms/FadeUp.svelte";
</script>

<main class="max-w-screen-2xl mx-auto">
  <section class="mx-auto text-xl p-4">
    <!-- Ajuste del banner para que no se corte -->
    <img
      src="CEOtraining.png"
      alt="CEO TRAINING Logo"
      class="w-full max-h-[300px] object-cover"
    />

    <!-- Sección Principal con Imagen Pequeña -->
    <div class="grid lg:grid-cols-2 gap-12 px-4 py-12 items-center">
      <div class="flex flex-col justify-center gap-4">
        <h1 class="font-[500] text-left pb-4">
          CEO TRAINING: El entrenamiento para que pases de tener una vida que no te gusta, a tener las herramientas para que cada aspecto de tu vida se sienta en expansión.
        </h1>

        <p class="text-left">
          Es el programa de mentoría grupal que recablea tu mente, transforma tu realidad y te enseña a generar más dinero, más éxito y más felicidad, sin sacrificios ni dramas innecesarios.
        </p>
      </div>

      <div class="hidden lg:block">
        <img src="/training.webp" alt="CEO Training" class="w-full rounded-lg">
      </div>
    </div>

    <!-- Sección Resultados de CEO TRAINING -->
    <div class="grid lg:grid-cols-2 gap-8">
      <div class="bg-black text-white p-6 rounded-lg">
        <h2 class="font-[500] text-left text-2xl pb-4">RESULTADOS QUE OBTIENEN MIS CLIENTES</h2>

        <ul class="list-disc ml-6 space-y-4">
          <li>Han triplicado sus ingresos en menos de un año.</li>
          <li>Han conseguido ascensos que llevaban años persiguiendo sin éxito.</li>
          <li>Han pasado de ser invisibles en su empresa a ser reconocidos como líderes.</li>
          <li>Han renunciado a trabajos tóxicos y han conseguido opciones mucho mejor pagadas.</li>
          <li>Han lanzado su propio negocio y han empezado a generar más dinero del que creían posible.</li>
          <li>Han aprendido a negociar y han logrado aumentos salariales que parecían imposibles.</li>
          <li>Han dejado de sentirse pequeños ante sus jefes y ahora hablan con seguridad.</li>
          <li>Han recuperado su tiempo libre y han dejado de ser esclavos del trabajo.</li>
          <li>Han creado fuentes de ingreso extra sin trabajar más horas.</li>
          <li>Han reprogramado su mente para atraer oportunidades en vez de perseguirlas.</li>
          <li>Han eliminado la culpa de ponerse en primer lugar y han aprendido a decir NO sin miedo.</li>
          <li>Han transformado su relación con el dinero y ahora el dinero fluye sin esfuerzo.</li>
          <li>Han cambiado su vida por completo en cuestión de meses.</li>
        </ul>
      </div>
    </div>

    <!-- Sección Información General -->
    <div class="grid lg:grid-cols-2 gap-8 mt-12">
      <div class="bg-black text-white p-6 rounded-lg">
        <h2 class="font-[500] text-left text-2xl pb-4">INFORMACIÓN GENERAL</h2>

        <ul class="list-disc ml-6 space-y-4">
          <li><strong>Duración:</strong> 4 meses.</li>
          <li><strong>Modalidad:</strong> Online en vivo (cada semana tendremos una sesión semanal de 2 horas).</li>
          <li><strong>Estructura:</strong> 4 módulos estratégicos + herramientas de alto impacto.</li>
          <li><strong>Metodología:</strong> Neurociencia, Física Cuántica, PNL, Psicología Positiva, Coaching Ejecutivo.</li>
          <li><strong>Herramientas clave:</strong> Desarrollo de KPI’s personales, Inventario de Riqueza, Master Plan de Vida Altamente Rentable y modelo Canvas de vida.</li>
        </ul>
      </div>

      <div class="bg-black text-white p-6 rounded-lg">
        <h2 class="font-[500] text-left text-2xl pb-4">ESTRUCTURA DEL PROGRAMA</h2>

        <ul class="list-disc ml-6 space-y-4">
          <li><strong>MÓDULO 1:</strong> BIENVENIDO A TU NUEVO PUESTO – ONBOARDING COMO CEO DE TU VIDA.</li>
          <li><strong>MÓDULO 2:</strong> RECABLEADO MENTAL – RECONFIGURANDO TU SISTEMA OPERATIVO.</li>
          <li><strong>MÓDULO 3:</strong> CREACIÓN CUÁNTICA – HACKEA TU PRESENTE Y FUTURO CON NEUROCIENCIA CUÁNTICA.</li>
          <li><strong>MÓDULO 4:</strong> RIQUEZA Y ABUNDANCIA – GENERA MÁS DINERO Y OPORTUNIDADES EN TU VIDA.</li>
        </ul>
      </div>
    </div>

    <!-- Sección Bonus Exclusivos -->
    <div class="bg-black text-white p-6 rounded-lg mt-12">
      <h2 class="font-[500] text-left text-2xl pb-4">BONUS EXCLUSIVOS</h2>

      <ul class="list-disc ml-6 space-y-4">
        <li>Ejercicios para que generes nuevas conexiones neuronales y acelerar tu reconfiguración mental.</li>
        <li>Acceso a una comunidad privada en donde tendremos conversaciones para sostenerte durante todo el proceso.</li>
        <li>Materiales descargables (Cuaderno de Trabajo y Manual de Operación del CEO) diseñados para reforzar lo visto en las sesiones, hacer ejercicios prácticos, llevar registros de tus avances, así como para la implementación del Master Plan de la vida que quieres tener en los próximos 3 años.</li>
      </ul>
    </div>

    <!-- Sección Final -->
    <div class="bg-black text-white p-6 rounded-lg text-center mt-12">
      <h2 class="font-[500] text-2xl pb-4">ESTO NO ES PARA CUALQUIERA</h2>

      <p class="text-left lg:text-center py-2">
        CEO TRAINING NO ES para quienes buscan soluciones mágicas sin comprometerse con su transformación.
      </p>

      <p class="text-left lg:text-center py-2 font-bold">
        Es solo para personas decididas, ambiciosas y hartas de tener una vida “normal”, que saben que merecen más pero no han encontrado el camino para lograrlo.
      </p>
    </div>

    <div class="grid justify-center mt-12">
      <a href="https://walink.co/45aabc" target="_blank" rel="noopener noreferrer" class="my-8">
        <Button value="¡Inscríbete al CEO TRAINING!" />
      </a>
    </div>
  </section>
</main>
