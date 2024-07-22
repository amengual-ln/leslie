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
          <li><a href="/#ceo-de-tu-vida">SERVICIOS</a></li>
          <li><a href="/webinars">WEBINARS</a></li>
          <li><a href="/#testimonios">TESTIMONIOS</a></li>
          <li><a href="/#blog">CEO TEST</a></li>
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
    <div
      id="mlb2-16173497"
      class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-16173497"
    >
      <div class="ml-form-align-center">
        <div class="ml-form-embedWrapper embedForm">
          <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <div class="ml-form-embedContent text-center mb-4">
              <p>¡Suscríbete a mi Newsletter para recibir mi contenido!</p>
            </div>
            <form
              class="ml-block-form"
              action="https://assets.mailerlite.com/jsonp/780653/forms/125961743657600458/subscribe"
              data-code=""
              method="post"
              target="_blank"
            >
              <div class="ml-form-formContent">
                <div class="ml-form-fieldRow ml-last-item">
                  <div
                    class="ml-field-group ml-field-email ml-validate-email ml-validate-required"
                  >
                    <input
                      aria-label="email"
                      aria-required="true"
                      type="email"
                      class="form-control mb-4"
                      data-inputmask=""
                      name="fields[email]"
                      placeholder="Email"
                      autocomplete="email"
                    />
                  </div>
                </div>
              </div>
              <div class="ml-form-embedPermissions"></div>
              <div class="ml-form-checkboxRow ml-validate-required">
                <label class="checkbox flex items-center gap-4 mb-6 cursor-pointer">
                  <input type="checkbox" class="text-center" />
                  <p>Acepto la Política de Privacidad</p>
                </label>
              </div>
              <input type="hidden" name="ml-submit" value="1" />
              <div class="ml-form-embedSubmit">
                <button type="submit" class="primary">Subscribirse</button>
                <button
                  disabled="disabled"
                  style="display: none;"
                  type="button"
                  class="loading"
                >
                  <div class="ml-form-embedSubmitLoad"></div>
                  <span class="sr-only">Loading...</span>
                </button>
              </div>
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>
          <div class="ml-form-successBody row-success" style="display: none">
            <div class="ml-form-successContent">
              <h3 class="mb-4">¡Gracias!</h3>
              <p>Te has suscrito con éxito.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      function ml_webform_success_16173497() {
        var $ = ml_jQuery || jQuery;
        $(".ml-subscribe-form-16173497 .row-success").show();
        $(".ml-subscribe-form-16173497 .row-form").hide();
      }
    </script>
    <script
      src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127"
      type="text/javascript"
    ></script>
    <script>
      fetch(
        "https://assets.mailerlite.com/jsonp/780653/forms/125961743657600458/takel",
      );
    </script>
  </section>
</footer>

<style type="text/css">
  @import url("https://assets.mlcdn.com/fonts.css?version=1719836");
  /* LOADER */
  .ml-form-embedSubmitLoad {
    display: inline-block;
    width: 25px;
    height: 25px;
  }

  .g-recaptcha {
    transform: scale(1);
    -webkit-transform: scale(1);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    height: auto;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .ml-form-embedSubmitLoad:after {
    content: " ";
    display: block;
    width: 11px;
    height: 11px;
    margin: 1px;
    border-radius: 50%;
    border: 4px solid #fff;
    border-color: #ffffff #ffffff #ffffff transparent;
    animation: ml-form-embedSubmitLoad 1.2s linear infinite;
  }

  @keyframes ml-form-embedSubmitLoad {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  #mlb2-16173497.ml-form-embedContainer {
    box-sizing: border-box;
    display: table;
    margin: 0 auto;
    position: static;
    width: 100% !important;
  }

  #mlb2-16173497.ml-form-embedContainer h4,
  #mlb2-16173497.ml-form-embedContainer p,
  #mlb2-16173497.ml-form-embedContainer span,
  #mlb2-16173497.ml-form-embedContainer button {
    text-transform: none !important;
    letter-spacing: normal !important;
  }

  #mlb2-16173497.ml-form-embedContainer .ml-form-embedWrapper {
    background-color: #141414;
    border-width: 0px;
    border-color: transparent;
    border-style: solid;
    box-sizing: border-box;
    display: inline-block !important;
    margin: 0;
    padding: 20px;
    position: relative;
    max-width: 600px;
    width: 100%;
  }

  #mlb2-16173497.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,
  #mlb2-16173497.ml-form-embedContainer .ml-form-embedWrapper.embedDefault {
    width: 600px;
  }

  #mlb2-16173497.ml-form-embedContainer .ml-form-embedWrapper.embedForm {
    max-width: 600px;
    width: 100%;
  }

  #mlb2-16173497.ml-form-embedContainer .ml-form-align-left {
    text-align: left;
  }

  #mlb2-16173497.ml-form-embedContainer .ml-form-align-center {
    text-align: center;
  }

  #mlb2-16173497.ml-form-embedContainer .ml-form-align-default {
    display: table-cell !important;
    vertical-align: middle !important;
    text-align: center !important;
  }

  #mlb2-16173497.ml-form-embedContainer .ml-form-align-right {
    text-align: right;
  }

  #mlb2-16173497.ml-form-embedContainer
    .ml-form-embedWrapper
    .ml-form-embedHeader
    img {
    height: auto;
    margin: 0 auto !important;
    max-width: 100%;
  }

  #mlb2-16173497.ml-form-embedContainer
    .ml-form-embedWrapper
    .ml-form-embedBody,
  #mlb2-16173497.ml-form-embedContainer .ml-form-successBody {
    padding: 20px 20px 0 20px;
  }

  #mlb2-16173497.ml-form-embedContainer
    .ml-form-embedWrapper
    .ml-form-embedBody.ml-form-embedBodyHorizontal {
    padding-bottom: 0;
  }

  #mlb2-16173497.ml-form-embedContainer
    .ml-form-embedWrapper
    .ml-form-embedBody
    .ml-form-embedContent,
  #mlb2-16173497.ml-form-embedContainer .ml-form-successBody .ml {
    padding-bottom: 0;
  }

  .primary {
    background-color: #e2a317;
    color: white;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    transition: background-color 0.3s ease;
  }

  .primary:hover {
    background-color: #d49016;
  }

  h4 {
    font-family: "Baskerville", serif;
  }

  p,
  input,
  label,
  button {
    font-family: "Poppins", sans-serif;
  }

  p {
    color: white;
  }

  input {
    padding: 10px;
    border: none;
    color: black;
  }

  .ml-form-embedBodyDefault {
    text-align: left;
  }

  .label-description h4 {
    margin: 0;
    color: white;
  }

  .ml-field-email input {
    width: 100%;
  }

  .ml-form-embedWrapper {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .ml-form-embedSubmit {
    text-align: center;
  }
</style>
