<script>
    let open = false;
</script>

<header
    class="w-full flex justify-between items-center bg-leslie_black text-white px-8 py-2"
>
    <img src="/logo.png" alt="Leslie Beltrán" class="h-12 md:h-20" />

    <nav>
        <ul class="gap-4 hidden md:flex">
            <li><a href="#testimonios">TESTIMONIOS</a></li>
            <li><a href="#ceo-de-tu-vida">CEO DE TU VIDA</a></li>
            <li><a href="#ceo-hacking">CEO HACKING</a></li>
            <li><a href="#ceo-mind">CEO MIND</a></li>
            <li><a href="#ceo-training">CEO TRAINING</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
        </ul>
        <button
            on:click={() => {
                open = !open;
            }}
            class="md:hidden text-3xl px-4 py-2"
        >
            =
        </button>
    </nav>
</header>

<div class={`absolute bg-leslie_black w-full p-4 text-white text-center text-2xl ${open ? "block" : "hidden"}`}>
    <ul class="flex flex-col gap-4 opacity-75 hover:opacity:100">
        <li><a on:click={() => {open = !open}} href="#testimonios">TESTIMONIOS</a></li>
        <li><a on:click={() => {open = !open}} href="#ceo-de-tu-vida">CEO DE TU VIDA</a></li>
        <li><a on:click={() => {open = !open}} href="#ceo-hacking">CEO HACKING</a></li>
        <li><a on:click={() => {open = !open}} href="#ceo-mind">CEO MIND</a></li>
        <li><a on:click={() => {open = !open}} href="#ceo-training">CEO TRAINING</a></li>
        <li><a on:click={() => {open = !open}} href="#blog">BLOG</a></li>
        <li><a on:click={() => {open = !open}} href="#contacto">CONTACTO</a></li>
    </ul>
</div>
