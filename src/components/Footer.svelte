<script>
  import Button from "./atoms/Button.svelte";
  import Facebook from "./icons/Facebook.svelte";
  import Instagram from "./icons/Instagram.svelte";
  import Linkedin from "./icons/Linkedin.svelte";
  import Spotify from "./icons/Spotify.svelte";
</script>

<footer
  id="contacto"
  class="w-full bg-black text-xl text-white text-center px-4"
>
  <section
    class="max-w-screen-2xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:items-center gap-4 lg:gap-8 justify-center"
  >
    <div class="grid gap-4 lg:gap-8 order-last lg:order-first">
      <nav class="order-first">
        <ul class="gap-4 hidden lg:flex">
          <li><a href="#testimonios">TESTIMONIOS</a></li>
          <li><a href="#ceo-de-tu-vida">CEO DE TU VIDA</a></li>
          <li><a href="#ceo-hacking">CEO HACKING</a></li>
          <li><a href="#ceo-mind">CEO MIND</a></li>
          <li><a href="#ceo-training">CEO TRAINING</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#contacto">CONTACTO</a></li>
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
        <li class="opacity-75 hover:opacity-100"><Spotify /></li>
        <li class="opacity-75 hover:opacity-100"><Instagram /></li>
        <li class="opacity-75 hover:opacity-100"><Linkedin /></li>
        <li class="opacity-75 hover:opacity-100"><Facebook /></li>
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
