<script>
  import FadeUp from "./atoms/FadeUp.svelte";
  import { browser } from "$app/environment";
  import { register } from "swiper/element/bundle";
  register();

  let windowWidth;

  if (browser) {
    windowWidth = window.innerWidth;
  }
</script>

<section id="testimonios" class="m-4 mt-0 min-h-[50vh]">
  <FadeUp>
    <hr class="my-4" />
    <h2 class="text-leslie_black text-3xl font-medium text-center mb-4">
      TESTIMONIOS
    </h2>
    <swiper-container
      autoplay-delay="100000"
      loop
      slides-per-view={windowWidth > 768 ? 3 : 1}
      space-between={18}
    >
      <swiper-slide
        ><img
          src="testimonios/testi1.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi2.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi3.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi4.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi5.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi6.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi7.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi8.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi9.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi10.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi11.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
      <swiper-slide
        ><img
          src="testimonios/testi12.png"
          alt="Testimonio de un cliente"
        /></swiper-slide
      >
    </swiper-container>
  </FadeUp>
</section>
