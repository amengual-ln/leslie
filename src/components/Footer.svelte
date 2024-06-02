<script>
  import Button from "./atoms/Button.svelte";
  import Facebook from "./icons/Facebook.svelte";
  import Instagram from "./icons/Instagram.svelte";
  import Linkedin from "./icons/Linkedin.svelte";
  import Spotify from "./icons/Spotify.svelte";
</script>

<footer
  id="contacto"
  class="w-full grid gap-8 justify-center bg-black text-xl text-white text-center py-4"
>
  <form class="grid gap-4 mt-2">
    <h2>Suscríbete al newsletter</h2>
    <input type="text" name="nombre" placeholder="Nombre" class="py-1 px-2" />
    <input type="text" name="email" placeholder="Email" class="py-1 px-2" />
    <Button type="submit" value="Suscribirme" />
  </form>
  <ul class="flex justify-center gap-8 mt-2">
    <li class="opacity-75 hover:opacity-100"><Spotify /></li>
    <li class="opacity-75 hover:opacity-100"><Instagram /></li>
    <li class="opacity-75 hover:opacity-100"><Linkedin /></li>
    <li class="opacity-75 hover:opacity-100"><Facebook /></li>
  </ul>
  <img src="/logo.png" alt="Leslie Beltrán" class="h-20 md:h-20 mx-auto" />
  <span class="text-sm opacity-80">MINDSET FOR SUCCESS</span>
</footer>
