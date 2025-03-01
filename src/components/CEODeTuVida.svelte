<script>
  import Button from "./atoms/Button.svelte";
</script>

<section id="ceo-de-tu-vida" class="text-xl p-4">
  <div class="px-4 py-12 space-y-12">
    <!-- Sección Mi Historia -->
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="flex flex-col gap-4">
        <h1 class="font-[500] text-left text-3xl">Soy Leslie Beltrán</h1>
        <p class="text-left">
          Business Life Coach y creadora de la metodología CEO de tu vida, donde enseño a ejecutivos, 
          directores y empresarios a manejar su vida como su empresa más importante, logrando más éxito, 
          dinero y felicidad sin sacrificar su bienestar.
        </p>
  
        <p class="text-left">
          En mi metodología fusiono estrategias empresariales y de liderazgo con herramientas de bienestar 
          y felicidad, para que las personas logren ser más exitosas, tener más felicidad y generar mayores ingresos, 
          sin sacrificios ni dramas.
        </p>
  
        <a href="/historia" class="mt-4">
          <Button value="Te cuento mi historia" />
        </a>
      </div>
  
      <div class="hidden lg:block">
        <img src="https://tse3.mm.bing.net/th?id=OIP.w8I0bvtuKaV1LcPL3A_bHgHaFj&pid=Api" alt="Leslie Beltrán" class="w-full rounded-lg">
      </div>
    </div>
  
    <!-- Sección Metodología SIN fondo negro -->
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="flex flex-col gap-4">
        <h1 class="font-[500] text-left text-3xl pb-4">CEO DE TU VIDA – LA METODOLOGÍA PARA EJECUTIVOS QUE QUIEREN MÁS</h1>
  
        <p class="text-left font-bold -500">ADVERTENCIA: ESTA METODOLOGÍA NO ES PARA CUALQUIERA.</p>
  
        <p class="text-left py-2">
          Si buscas un curso más de desarrollo personal, técnicas motivacionales que olvidarás en un mes o consejos genéricos sobre liderazgo, esto NO es para ti.
        </p>
  
        <p class="text-left py-2">
          Pero si eres un:
        </p>
  
        <ul class="list-disc ml-6 space-y-2">
          <li>Ejecutivo</li>
          <li>Director</li>
          <li>Empresario</li>
        </ul>
  
        <p class="text-left py-2">
          Que está harto de hacer, hacer y hacer sin ver los resultados que realmente quiere, y estás listo para transformar tu carrera, tu dinero y tu vida con una estrategia clara y de alto impacto, entonces sigue leyendo.
        </p>
      </div>
  
      <div>
        <img src="https://tse4.mm.bing.net/th?id=OIP.iiVfzjtf6-MhYcV3B4n72wHaHa&pid=Api" alt="Metodología CEO de tu Vida" class="w-full rounded-lg">
      </div>
    </div>
  
    <!-- Sección de Beneficios -->
    <div class="grid lg:grid-cols-2 gap-8">
      <div class="bg-black text-white p-6 rounded-lg">
        <h2 class="font-[500] text-left text-2xl pb-4">¿QUÉ HACE ÚNICA A LA METODOLOGÍA CEO DE TU VIDA?</h2>
  
        <ul class="list-disc ml-6 space-y-4">
          <li><strong>EXCLUSIVIDAD TOTAL:</strong> No cualquiera accede a este método. Solo los comprometidos con transformar su vida, su carrera y su futuro.</li>
          <li><strong>RESULTADOS DEMOSTRADOS:</strong> No es teoría. Es un sistema probado que ha llevado a ejecutivos a triplicar ingresos, ascender, lanzar negocios y transformar su vida.</li>
          <li><strong>MENTALIDAD Y ESTRATEGIA:</strong> No solo cambiamos creencias, también estructuramos estrategias claras y medibles para ejecutar y ver resultados.</li>
          <li><strong>CIENCIA Y ESTRATEGIA:</strong> Fusionamos neurociencia, física cuántica y psicología positiva con coaching de alto nivel.</li>
          <li><strong>TRANSFORMACIÓN TOTAL:</strong> No solo mejoras tu carrera o negocio, sino que aprendes a construir una vida altamente rentable.</li>
        </ul>
      </div>
  
      <div class="bg-black text-white p-6 rounded-lg">
        <h2 class="font-[500] text-left text-2xl pb-4">RESULTADOS REALES QUE LOGRAN NUESTROS CLIENTES</h2>
  
        <ul class="list-disc ml-6 space-y-4">
          <li>Han triplicado sus ingresos en menos de un año sin trabajar más horas.</li>
          <li>Han conseguido ascensos estratégicos y se han convertido en líderes influyentes en su industria.</li>
          <li>Han pasado de empleados bien pagados a empresarios que facturan millones en sus primeros años.</li>
          <li>Han aprendido a negociar con confianza, logrando aumentos salariales y mejores condiciones laborales.</li>
          <li>Han optimizado su tiempo y recuperado su vida personal.</li>
          <li>Han publicado libros, dado conferencias internacionales y expandido su impacto global.</li>
        </ul>
      </div>
    </div>
  
    <!-- Sección Final con CTA -->
    <div class="bg-black text-white p-6 rounded-lg text-center">
      <h2 class="font-[500] text-2xl pb-4">¿ESTÁS LISTO PARA TOMAR EL CONTROL Y MULTIPLICAR TUS RESULTADOS?</h2>
  
      <p class="text-left lg:text-center py-2">
        CEO de tu Vida NO es un curso, NO es coaching tradicional, NO es un programa motivacional. 
      </p>
  
      <p class="text-left lg:text-center py-2">
        Es una metodología diseñada para transformar la mentalidad de quienes ya tienen éxito pero saben que aún hay mucho más por lograr.
      </p>
  
      <p class="text-left lg:text-center py-2 font-bold">
        Bienvenido a CEO de tu Vida. Aquí es donde los grandes juegan en serio.
      </p>
    </div>
  
    <div class="grid justify-center mt-12">
      <a href="https://walink.co/45aabc" target="_blank" rel="noopener noreferrer" class="my-8">
        <Button value="¡Es momento de tomar acción!" />
      </a>
    </div>
  </div>
</section>
