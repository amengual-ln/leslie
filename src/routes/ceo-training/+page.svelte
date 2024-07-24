<script>
  import Button from "../../components/atoms/Button.svelte";
  import FadeUp from "../../components/atoms/FadeUp.svelte";
</script>

<main class="max-w-screen-2xl mx-auto">
  <section id="ceo-training" class="text-xl p-4">
    <img
      src="CEOtraining.png"
      alt="CEO TRAINING Logo"
      class="aspect-[16/5] object-cover animate-fade-up"
    />
    <div class="flex gap-12 px-4 py-12 text-left lg:text-left">
      <div class="flex flex-col justify-center flex-1 gap-4">
        <p class="text-left lg:text-left">
          ¿Sabías que tu proyecto y empresa más importante es tu vida?
        </p>
        <p class="text-left lg:text-left">
          En CEO TRAINING, te ofrecemos un programa de mentoría grupal integral,
          diseñado para transformar tu vida y liderazgo.
        </p>        
        <p class="text-left lg:text-left">
          Los módulos son:
        </p>
        <ol class="flex flex-col gap-4 list-disc my-8 mx-8">
          <li>
            <b>Onboarding:</b> Tu bienvenida como CEO de tu vida y establecimiento de los
            <b>indicadores de desempeño de tu Vida Altamente Rentable</b>. 
            Medimos muchas cosas en nuestras vida, pero casi nunca medimos nuestro propio
            desempeño en nuestro día a día, así que aquí elaboramos tus KPIs y de
            manera mensual te evaluamos para ver si estás enfocado realmente en
            lo que quieres vivir, sentir y tener.
          </li>
          <li>
            <b>Recableado mental:</b> Te enseñamos a usar tu cerebro de forma
            funcional y cómo trabajar tu inteligencia emocional desde la
            perspectiva de las neurociencias. Aquí también empiezas a descubrir
            tus techos de cristal y hacemos una
            <b
              >poda neuronal para erradicar los patrones de pensamiento y
              comportamiento</b
            > que ya no son funcionales para ti.
          </li>
          <li>
            <b>Creación cuántica:</b> Te enseñamos a convertirte en un creador
            cuántico y a
            <b>transformar tu realidad a través de lo que piensas y sientes</b>.
            También aprenderás cómo dejar de ser la persona que has venido
            siendo, para transformarte en una nueva versión de ti:
            <b>más valiente, más audaz, más creativa y más brillante</b>. No es
            brujería, es ciencia 😉
            
          </li>
          <li>
            <b>Riqueza y abundancia:</b> Revisamos en qué proyectos, personas o
            situaciones estás invirtiendo tus 5 recursos más importantes:
            <b>tiempo, energía, emociones, pensamientos y dinero</b> y si te
            están dando las ganancias que quieres. <br /><br /> Te enseñamos cómo
            generar una vida más abundante, ya que la abundancia es una forma
            de ser, así que aquí aprendes a ser <b>un imán de bendiciones</b>.
            
          </li>
          <li>
            <b>Rebeldía:</b> Nos han enseñado a no incomodar, a no molestar,
            a encajar a la fuerza y a contenernos. En este módulo
            rompemos con eso y te mostramos cómo ser rebelde para ser tú mismo,
            ser rebelde para ir por tus sueños más ambiciosos y a
            <b>tomar decisiones impopulares sin culpa</b>.
          </li>
        </ol>
        <div class="block lg:hidden">
          <img src="/training.webp" alt="Training" />
        </div>
        <p class="text-left lg:text-left">
          Adicional a todo esto, también tendrás acceso:
        </p>
        <ul class="flex flex-col gap-4 list-disc my-8 mx-8">
          <li>
            Clases de yoga porque mi premisa es que <b>una mente flexible vive
            en un cuerpo flexible</b> y si tu mente ve que tu cuerpo va más allá
            de sus límites, tu mente también se empieza a expandir.
          </li>
          <li>
            Master classes con expertos invitados, un sábado al mes, para que
            puedas tener herramientas de otros expertos que te ayudarán a
            <b>aumentar la rentabilidad de tu vida</b>.            
          </li>
        </ul>
        <p>
          El objetivo del CEO TRAINING es que tengas herramientas para hacer
          <b>tu Vida Altamente Rentable</b>
          con más tiempo, más energía, más salud, más felicidad, propósito y dinero, alcanzando tus
          sueños más ambiciosos, y así dejar de ser el office boy.          
        </p>
      </div>
    </div>
    <div class="grid justify-center">
      <a
        href="https://walink.co/bccb88"
        target="_blank"
        rel="noopener noreferrer"
        class="my-8"
      >
        <Button value="¡Es momento de tomar acción!" />
      </a>
    </div>
  </section>
</main>
