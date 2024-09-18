<script>
  import Button from "./atoms/Button.svelte";
  import FadeUp from "./atoms/FadeUp.svelte";
  import { register } from "swiper/element/bundle";
  register();
</script>

<section
  id="blog"
  class="flex items-center m-4 bg-leslie_black pt-4 pb-2 text-xl min-h-[60vh]"
>
  <FadeUp>
    <!-- <h1 class="text-3xl text-center text-leslie_gold font-medium">CEO Test</h1> -->
    <div class="grid lg:grid-cols-2">
      <img src="CEOtest.png" alt="CEO test" class="p-8" />
      <article
        class="m-4 p-4 text-white flex-1 flex flex-col justify-center gap-4"
      >
        <h2 class="font-[600] text-center">
          ¡Da el primer paso para transformarte en CEO de tu vida!
        </h2>

        <div class="text-center">
          <p>
            El CEO Test te permitirá identificar si eres el CEO de tu vida o el
            office boy.
          </p>
          <br />
          <p>
            Responde el CEO Test y obtén de regalo una sesión para conversar
            sobre tus resultados y generar una estrategia que te ayude a
            comenzar tu transformación.
          </p>
          <p class="mt-6 font-[500] line-through">$139 USD</p>
          <p class="mt-2 font-[600] text-xl">Precio Especial: $39 USD ¡Adquiérelo ahora!</p>
        </div>

        <div class="text-center pt-4">
          <a
            href="https://walink.co/45aabc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button value="Quiero hacer el CEO Test" />
          </a>
        </div>
      </article>
    </div>
  </FadeUp>
</section>
