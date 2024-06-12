<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import WhatsappWidget from "../components/WhatsappWidget.svelte";
    import "../app.css";
</script>

<Header />

<slot />
<WhatsappWidget />

<Footer />
