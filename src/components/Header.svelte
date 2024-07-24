<script>
    let open = false;
    let subMenuOpen = false;
</script>

<header
    class="w-full flex justify-between items-center bg-leslie_black text-white px-8 py-2"
>
    <a href="/">
        <img src="/logo.png" alt="Leslie Beltrán" class="h-12 lg:h-20" />
    </a>

    <nav>
        <ul class="gap-4 hidden lg:flex">
            <li><a href="/#ceo-de-tu-vida">INICIO</a></li>
            <li
                on:mouseenter={() => (subMenuOpen = true)}
                on:mouseleave={() => (subMenuOpen = !subMenuOpen)}
                class="relative cursor-pointer"
            >
                <a href="/#ceo-de-tu-vida">SERVICIOS</a>
                <span class="ml-1">▼</span>
                <div
                    style="display: 'hidden'"
                    class={`absolute w-48 top-6 bg-leslie_black p-4 gap-4 flex-col ${subMenuOpen ? "flex" : "hidden"} z-10`}
                >
                    <li><a href="/#ceo-training">CEO TRAINING</a></li>
                    <li><a href="/#ceo-hacking">CEO HACKING</a></li>
                    <li><a href="/#ceo-mind">CEO MIND</a></li>
                </div>
            </li>
            <li><a href="/webinars">WEBINARS</a></li>
            <li><a href="/#testimonios">TESTIMONIOS</a></li>
            <li><a href="/#blog">CEO TEST</a></li>
            <li><a href="/#contacto">CONTACTO</a></li>
        </ul>
        <button
            on:click={() => {
                open = !open;
            }}
            class="lg:hidden text-3xl px-4 py-2"
        >
            =
        </button>
    </nav>
</header>

<div
    class={`absolute bg-leslie_black w-full p-4 text-white text-center text-2xl ${open ? "block" : "hidden"} z-50`}
>
    <ul class="flex flex-col gap-4 opacity-75 hover:opacity:100">
        <li>
            <a
                on:click={() => {
                    open = !open;
                }}
                href="/#ceo-de-tu-vida">INICIO</a
            >
        </li>
        <li>
            <a
                on:click={() => {
                    open = !open;
                }}
                href="/#ceo-de-tu-vida">SERVICIOS</a
            >
        </li>
        <li>
            <a
                on:click={() => {
                    open = !open;
                }}
                href="/#ceo-training">CEO TRAINING</a
            >
        </li>
        <li>
            <a
                on:click={() => {
                    open = !open;
                }}
                href="/#ceo-hacking">CEO HACKING</a
            >
        </li>
        <li>
            <a
                on:click={() => {
                    open = !open;
                }}
                href="/#ceo-mind">CEO MIND</a
            >
        </li>
        <li>
            <a
                on:click={() => {
                    open = !open;
                }}
                href="/webinars">WEBINARS</a
            >
        </li>
        <li>
            <a
                on:click={() => {
                    open = !open;
                }}
                href="/#testimonios">TESTIMONIOS</a
            >
        </li>
        <li>
            <a
                on:click={() => {
                    open = !open;
                }}
                href="/#blog">CEO TEST</a
            >
        </li>
        <li>
            <a
                on:click={() => {
                    open = !open;
                }}
                href="/#contacto">CONTACTO</a
            >
        </li>
    </ul>
</div>
