<script>
  import Button from "./atoms/Button.svelte";
  import { register } from "swiper/element/bundle";
  register();
</script>

<section id="blog" class="m-4 bg-black pt-4 pb-2 text-xl">
  <h1 class="text-3xl text-center text-leslie_gold font-medium">BLOG</h1>
  <div class="hidden md:flex">
    <article class="bg-[#222] m-4 p-4 text-white">
      <img src="blog1.png" alt="Imagen del articulo" />
      <p class="py-2 text-justify text-balance">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
        reiciendis? Consequatur possimus nostrum labore voluptatibus quisquam
        ipsa optio, sequi a porro, maxime perspiciatis aliquam rerum non
        nesciunt nulla earum cum.
      </p>
      <div class="text-center pt-4">
        <Button value="Leer más" />
      </div>
    </article>
    <article class="bg-[#222] m-4 p-4 text-white">
      <img src="blog2.jpeg" alt="Imagen del articulo" />
      <p class="py-2 text-justify text-balance">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
        reiciendis? Consequatur possimus nostrum labore voluptatibus quisquam
        ipsa optio, sequi a porro, maxime perspiciatis aliquam rerum non
        nesciunt nulla earum cum.
      </p>
      <div class="text-center pt-4">
        <Button value="Leer más" />
      </div>
    </article>
    <article class="bg-[#222] m-4 p-4 text-white">
      <img src="blog3.jpeg" alt="Imagen del articulo" />
      <p class="py-2 text-justify text-balance">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
        reiciendis? Consequatur possimus nostrum labore voluptatibus quisquam
        ipsa optio, sequi a porro, maxime perspiciatis aliquam rerum non
        nesciunt nulla earum cum.
      </p>
      <div class="text-center pt-4">
        <Button value="Leer más" />
      </div>
    </article>
  </div>

  <swiper-container autoplay-delay="5000" loop class="md:hidden">
    <swiper-slide>
      <article class="bg-[#222] m-4 p-4 text-white">
        <img src="blog1.png" alt="Imagen del articulo" />
        <p class="py-2 text-justify text-balance">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
          reiciendis? Consequatur possimus nostrum labore voluptatibus quisquam
          ipsa optio, sequi a porro, maxime perspiciatis aliquam rerum non
          nesciunt nulla earum cum.
        </p>
        <div class="text-center pt-4">
          <Button value="Leer más" />
        </div>
      </article>
    </swiper-slide>
    <swiper-slide>
      <article class="bg-[#222] m-4 p-4 text-white">
        <img src="blog2.jpeg" alt="Imagen del articulo" />
        <p class="py-2 text-justify text-balance">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
          reiciendis? Consequatur possimus nostrum labore voluptatibus quisquam
          ipsa optio, sequi a porro, maxime perspiciatis aliquam rerum non
          nesciunt nulla earum cum.
        </p>
        <div class="text-center pt-4">
          <Button value="Leer más" />
        </div>
      </article>
    </swiper-slide>
    <swiper-slide>
      <article class="bg-[#222] m-4 p-4 text-white">
        <img src="blog3.jpeg" alt="Imagen del articulo" />
        <p class="py-2 text-justify text-balance">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
          reiciendis? Consequatur possimus nostrum labore voluptatibus quisquam
          ipsa optio, sequi a porro, maxime perspiciatis aliquam rerum non
          nesciunt nulla earum cum.
        </p>
        <div class="text-center pt-4">
          <Button value="Leer más" />
        </div>
      </article>
    </swiper-slide>
  </swiper-container>
</section>
