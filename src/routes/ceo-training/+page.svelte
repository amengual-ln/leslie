<script>
  import Button from "../../components/atoms/Button.svelte";
  import FadeUp from "../../components/atoms/FadeUp.svelte";
</script>

<!-- Tipografía uniforme -->
<main class="max-w-screen-2xl mx-auto text-xl md:text-2xl leading-loose">
  <section class="p-4 space-y-16">
    <!-- Hero -->
    <img
      src="CEOtraining.png"
      alt="CEO TRAINING Logo"
      class="w-full max-h-[400px] object-cover"
    />

    <!-- Intro Block -->
    <div class="grid gap-12 lg:grid-cols-2">
      <div class="flex flex-col justify-center gap-6">
        <h1 class="text-5xl md:text-4xl font-medium">
          La mentoría estratégica para Gerentes, Directores y Empresarios que ya lo lograron todo… pero quieren más.
        </h1>

        <p>
          Has seguido el camino correcto. Tienes un buen puesto, buen sueldo y reconocimiento.
          <strong>Pero por dentro sientes que algo te falta.</strong>
        </p>
        <p>
          Has leído, tomado cursos, incluso ido a terapia… y aún no encuentras ese “click” que lo cambie todo.
          Has llegado a la cima de “la montaña del éxito”, pero ahora te preguntas:
          <strong>¿Y qué sigue?</strong>
        </p>
        <p>
          Los demás te ven como un ejemplo de éxito y superación, pero tú no te sientes realmente feliz ni realizado/a.
          No estás mal, pero sabes que podrías estar mejor.
          Estás listo para más, pero no sabes por dónde empezar.
        </p>
            <p>
          <strong>Entonces, el CEO TRAINING es para ti.</strong>
          Una mentoría grupal de 5 meses donde dejarás de vivir en automático para comenzar a dirigir tu vida con estrategia, claridad y expansión.
        </p>
      </div>

      <!-- What is included -->
      <div class="bg-white/10 p-6 rounded-lg space-y-4 leading-relaxed">
        <p>Aquí vas a:</p>

        <ul class="list-disc ml-6 space-y-2">
          <li>Reprogramar tu mente y tu sistema nervioso para dejar de reaccionar… y empezar a liderar.</li>
          <li>Establecer KPIs personales y medir tus avances reales.</li>
          <li>Diseñar tu Master Plan de Vida para los próximos 3 años.</li>
          <li>Aplicar herramientas de alto rendimiento basadas en neurociencia, física cuántica y coaching ejecutivo.</li>
          <li>Y sobre todo: transformarte en CEO de tu vida.</li>
        </ul>

        <p>
          Es para quienes quieren dejar de tener una vida ordinaria y comenzar a construir una
          <strong>Vida EXTRA-ordinaria y Altamente Rentable</strong>.
        </p>

        <!-- CTA añadido dentro del bloque Intro para reforzar la conversión -->
        <div class="text-center">
          <a
            href="https://wa.link/ceotraining"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block my-8"
          >
            <Button value="¡Quiero ser CEO de mi Vida!" />
          </a>
        </div>
      </div>
    </div>

    <!-- Results -->
    <div class="bg-black text-white p-6 rounded-lg space-y-6">
      <h2 class="text-4xl md:text-5xl font-medium">RESULTADOS QUE NO CABEN EN UN CV</h2>
      <p><strong>Esto es lo que logran las personas que han tomado el CEO TRAINING:</strong></p>
      <ul class="list-disc ml-6 space-y-4 leading-relaxed">
        <li><strong>Triplican sus ingresos sin sacrificar su vida personal:</strong> Aprenden a negociar, cobrar con seguridad y experimentar abundancia real.</li>
        <li><strong>Cumplen sueños que llevaban años guardados:</strong> Publican libros, lanzan empresas, dan conferencias internacionales, aceptan puestos globales.</li>
        <li><strong>Recuperan su tiempo, su energía y su paz:</strong> Se desconectan sin culpa, retoman el control de su agenda y viven con dirección.</li>
        <li><strong>Se hacen visibles y dejan de pedir permiso:</strong> Ocupan su lugar, toman decisiones firmes y se expresan con claridad.</li>
        <li><strong>Transforman su cuerpo, mente e identidad:</strong> Tienen más vitalidad y propósito; se despiertan con entusiasmo, no con ansiedad.</li>
      </ul>
    </div>

    <!-- Includes & Life Skills -->
    <div class="grid gap-8 lg:grid-cols-2">
      <div class="space-y-6">
        <h2 class="text-4xl md:text-5xl font-medium">¿QUÉ INCLUYE EL CEO TRAINING?</h2>
        <ul class="list-disc ml-6 space-y-4 leading-relaxed">
          <li>5 meses de mentoría grupal online en vivo (una sesión semanal de 2 horas).</li>
          <li>4 módulos estratégicos: Onboarding, Recableado, Creación Cuántica y Abundancia.</li>
          <li>Herramientas clave: Master Plan, KPIs personales, Canvas de Vida y más.</li>
          <li>Comunidad privada de alto nivel.</li>
          <li>Materiales descargables y ejercicios de integración.</li>
        </ul>
      </div>

      <div class="space-y-6">
        <h2 class="text-4xl md:text-5xl font-medium">DESARROLLARÁS LAS 4 LIFE SKILLS DEL CEO</h2>
        <ul class="list-disc ml-6 space-y-4 leading-relaxed">
          <li><strong>Recableado Mental:</strong> Rompe techos mentales y crea nuevas conexiones neuronales.</li>
          <li><strong>Creación Cuántica:</strong> Aprende a vibrar en la frecuencia de la expansión.</li>
          <li><strong>Riqueza y Abundancia:</strong> Diseña una vida donde el dinero fluya con gozo y estrategia.</li>
          <li><strong>Rebeldía Estratégica:</strong> Toma decisiones valientes y fieles a ti.</li>
        </ul>
      </div>
    </div>

    <!-- CTA · Medio -->
    <div class="text-center">
      <a
        href="https://wa.link/ceotraining"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block my-8"
      >
        <Button value="¡Inscríbete al CEO TRAINING!" />
      </a>
    </div>

    <!-- Platform -->
    <div class="grid gap-12 lg:grid-cols-5 items-center">
      <div class="lg:col-span-3">
        <div class="bg-white/10 p-6 rounded-lg space-y-4 leading-relaxed">
          <h2 class="text-4xl md:text-5xl font-medium">ACCESO EXCLUSIVO A TU PLATAFORMA DE ALTA DIRECCIÓN PERSONAL</h2>
          <p>Obtendrás acceso exclusivo a una plataforma de alto nivel, diseñada para ayudarte a dirigir tu vida como tu empresa más importante.</p>
          <p>Aquí podrás:</p>
          <ul class="list-disc ml-6 space-y-4">
            <li>Registrar y dar seguimiento a tus KPIs personales.</li>
            <li>Evaluar tus roles de vida como líneas de negocio.</li>
            <li>Llevar una bitácora emocional estratégica.</li>
            <li>Visualizar en tiempo real tus avances hacia una vida altamente rentable.</li>
          </ul>
          <p>No es una simple plataforma, es tu centro de comando… e <em>incluye</em> en tu proceso.</p>
        </div>
      </div>

      <div class="lg:col-span-2 hidden lg:block">
        <img src="/training.webp" alt="CEO Training" class="w-full rounded-lg" />
      </div>
    </div>

    <!-- Investment -->
    <div class="bg-black text-white p-6 rounded-lg text-center space-y-4">
      <h2 class="text-4xl md:text-5xl font-medium">INVERSIÓN</h2>
      <p class="leading-relaxed">La inversión es de $40,000 MXN (≈ $2,105 USD) con posibilidad de plan de pagos.</p>
      <p class="font-bold leading-relaxed">
        Los lugares son limitados. Esto no es para cualquiera; es para quienes están listos para dejar de ejecutar… y empezar a dirigir.
      </p>
    </div>

    <!-- CTA Button -->
    <div class="text-center">
      <a
        href="https://wa.link/ceotraining"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block my-8"
      >
        <Button value="¡Inscríbete al CEO TRAINING!" />
      </a>
    </div>
  </section>
</main>
