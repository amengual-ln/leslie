<script>
  import Button from "./atoms/Button.svelte";
  import FadeUp from "./atoms/FadeUp.svelte";
  import { register } from "swiper/element/bundle";
  register();
</script>

<FadeUp>
<section id="blog" class="m-4 bg-black pt-4 pb-2 text-xl">
    <h1 class="text-3xl text-center text-leslie_gold font-medium">BLOG</h1>
    <div class="hidden lg:flex">
      <article class="bg-[#222] m-4 p-4 text-white flex-1 flex flex-col gap-4">
        <img src="blog1.png" alt="Imagen del articulo" />
        <p class="py-2 text-justify text-balance">
          Que las circunstancias, un “mal jefe”, una mala racha, tu agenda o tu
          pareja NO controlen tu vida o decidan tu estado de ánimo. Ante
          cualquier situación tu siempre tienes el poder de elegir que actitud
          tomar. Elige siempre lo que te dé paz.
        </p>
        <div class="text-center pt-4">
          <a
            href="https://lesliebeltran.mx/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button value="Leer más" />
          </a>
        </div>
      </article>
      <article class="bg-[#222] m-4 p-4 text-white flex-1 flex flex-col gap-4">
        <img src="blog2.jpeg" alt="Imagen del articulo" />
        <p class="py-2 text-justify text-balance">
          Que tu pasado o las etiquetas que te han impuesto NO te definan. Tú
          vas a ser quien elijas ser a partir de hoy.
        </p>
        <div class="text-center pt-4">
          <a
            href="https://lesliebeltran.mx/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button value="Leer más" />
          </a>
        </div>
      </article>
      <article class="bg-[#222] m-4 p-4 text-white flex-1 flex flex-col gap-4">
        <img src="blog3.jpeg" alt="Imagen del articulo" />
        <p class="py-2 text-justify text-balance">
          Que tus emociones no secuestren tu objetividad y capacidad de
          decisión. La inteligencia emocional es una capacidad que se puede
          desarrollar. Es normal y sano sentir enojo, frustración, tristeza o
          miedo, pero no te funciona tomar decisiones definitivas cuando
          transitas por emociones temporales.
        </p>
        <div class="text-center pt-4">
          <a
            href="https://lesliebeltran.mx/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button value="Leer más" />
          </a>
        </div>
      </article>
    </div>

    <swiper-container autoplay-delay="10000" loop class="lg:hidden">
      <swiper-slide>
        <article class="bg-[#222] m-4 p-4 text-white">
          <img src="blog1.png" alt="Imagen del articulo" />
          <p class="py-2 text-justify text-balance">
            Que las circunstancias, un “mal jefe”, una mala racha, tu agenda o
            tu pareja NO controlen tu vida o decidan tu estado de ánimo. Ante
            cualquier situación tu siempre tienes el poder de elegir que actitud
            tomar. Elige siempre lo que te dé paz.
          </p>
          <div class="text-center pt-4">
            <a
              href="https://lesliebeltran.mx/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button value="Leer más" />
            </a>
          </div>
        </article>
      </swiper-slide>
      <swiper-slide>
        <article class="bg-[#222] m-4 p-4 text-white">
          <img src="blog2.jpeg" alt="Imagen del articulo" />
          <p class="py-2 text-justify text-balance">
            Que tu pasado o las etiquetas que te han impuesto NO te definan. Tú
            vas a ser quien elijas ser a partir de hoy.
          </p>
          <div class="text-center pt-4">
            <a
              href="https://lesliebeltran.mx/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button value="Leer más" />
            </a>
          </div>
        </article>
      </swiper-slide>
      <swiper-slide>
        <article class="bg-[#222] m-4 p-4 text-white">
          <img src="blog3.jpeg" alt="Imagen del articulo" />
          <p class="py-2 text-justify text-balance">
            Que tus emociones no secuestren tu objetividad y capacidad de
            decisión. La inteligencia emocional es una capacidad que se puede
            desarrollar. Es normal y sano sentir enojo, frustración, tristeza o
            miedo, pero no te funciona tomar decisiones definitivas cuando
            transitas por emociones temporales.
          </p>
          <div class="text-center pt-4">
            <a
              href="https://lesliebeltran.mx/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button value="Leer más" />
            </a>
          </div>
        </article>
      </swiper-slide>
    </swiper-container>
  </section>
</FadeUp>
