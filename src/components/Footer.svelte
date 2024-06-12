<script>
  import Button from "./atoms/Button.svelte";
  import Facebook from "./icons/Facebook.svelte";
  import Instagram from "./icons/Instagram.svelte";
  import Linkedin from "./icons/Linkedin.svelte";
  import Youtube from "./icons/Youtube.svelte";
</script>

<footer
  id="contacto"
  class="w-full bg-black text-xl text-white text-center px-4"
>
  <section
    class="max-w-screen-2xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:items-center gap-4 lg:gap-8 justify-center"
  >
    <div class="grid justify-center gap-4 lg:gap-8 order-last lg:order-first">
      <nav class="order-first">
        <ul class="gap-4 hidden lg:flex">
          <li><a href="/#ceo-de-tu-vida">CEO DE TU VIDA</a></li>
          <li><a href="/webinars">WEBINARS</a></li>
          <li><a href="/#testimonios">TESTIMONIOS</a></li>
          <li><a href="/#blog">BLOG</a></li>
          <li><a href="/#contacto">CONTACTO</a></li>
        </ul>
      </nav>
      <div class="order-last lg:order-first">
        <img
          src="/logo.png"
          alt="Leslie Beltrán"
          class="h-20 lg:h-32 mx-auto"
        />
        <span class="text-sm opacity-80">MINDSET FOR SUCCESS</span>
      </div>
      <ul class="flex justify-center gap-8 mt-2">
        <li class="opacity-75 hover:opacity-100">
          <a
            href="https://www.facebook.com/leslie.bienestar"
            target="_blank"
            rel="noopener noreferrer"><Facebook /></a
          >
        </li>
        <li class="opacity-75 hover:opacity-100">
          <a
            href="https://www.instagram.com/lesliebeltran.oficial/"
            target="_blank"
            rel="noopener noreferrer"><Instagram /></a
          >
        </li>
        <li class="opacity-75 hover:opacity-100">
          <a
            href="https://www.linkedin.com/in/leslie-beltr%C3%A1n-%F0%9F%87%B2%F0%9F%87%BD-872267130/"
            target="_blank"
            rel="noopener noreferrer"><Linkedin /></a
          >
        </li>
        <li class="opacity-75 hover:opacity-100">
          <a
            href="https://www.youtube.com/channel/UCxKftN2Ia_DKYROt13GOS-A"
            target="_blank"
            rel="noopener noreferrer"><Youtube /></a
          >
        </li>
      </ul>
    </div>
    <div>
      <form class="grid gap-4 mt-2">
        <h2>Suscríbete al newsletter</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          class="py-1 px-2 w-full"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          class="py-1 px-2 w-full"
        />
        <Button type="submit" value="Suscribirme" />
      </form>
    </div>
  </section>
</footer>
