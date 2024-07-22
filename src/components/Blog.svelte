<script>
  import Button from "./atoms/Button.svelte";
  import FadeUp from "./atoms/FadeUp.svelte";
  import { register } from "swiper/element/bundle";
  register();
</script>

<FadeUp>
<section id="blog" class="m-4 bg-black pt-4 pb-2 text-xl">
    <h1 class="text-3xl text-center text-leslie_gold font-medium">CEOTest</h1>
    <div class="hidden lg:flex">
      <article class="bg-[#222] m-4 p-4 text-white flex-1 flex flex-col gap-4">
        <img src="blog1.png" alt="Imagen del articulo" />
        <p class="py-2 text-justify text-balance">
          CEO Test Da el primer paso para transformarte en CEO de tu vida!El CEOTest te permitirá identificar si eres el CEO de tu vida o el office boy. Responde el CEOTest y te regalo una sesión individual conmigo para conversar sobre tus resultados y generar una estrategia que te ayude a transformarte en CEO de tu vida. Precio Especial:$39 USD ¡Adquiérelo ahora!
        </p>
        <div class="text-center pt-4">
          <a
            href="https://walink.co/d35a95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button value="Quiero hacer el CEO Test" />
          </a>
        </div>
      </article>
    </div>

    <swiper-container autoplay-delay="10000" loop class="lg:hidden">
      <swiper-slide>
        <article class="bg-[#222] m-4 p-4 text-white">
          <img src="blog1.png" alt="Imagen del articulo" />
          <p class="py-2 text-justify text-balance">
            CEO Test Da el primer paso para transformarte en CEO de tu vida!El CEO Test te permitirá identificar si eres el CEO de tu vida o el Office Boy. Responde el CEO TEST y te regalo una sesión individual conmigo para conversar sobre tus resultados y generar una estrategia que te ayude a transformarte en CEO de tu vida. Precio Especial:$39 USD Adquiérelo Ahora
          </p>
          <div class="text-center pt-4">
            <a
              href="https://walink.co/bccb88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button value="Quiero hacer el CEO Test" />
            </a>
          </div>
        </article>
      </swiper-slide>      
    </swiper-container>
  </section>
</FadeUp>
