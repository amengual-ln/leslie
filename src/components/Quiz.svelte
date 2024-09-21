<script>
  let questions = [
    {
      question: "1. Toma de Decisiones\n¿Tomas las decisiones importantes en tu vida o dejas que otros lo hagan por ti?",
      answers: [
        "A) Siempre soy yo quien toma las decisiones importantes.",
        "B) A veces dejo que otros influyan en mis decisiones.",
        "C) A menudo dejo que otros tomen decisiones por mí."
      ]
    },
    {
      question: "2. Autonomía y Control\n¿Qué tanto sientes que tienes el control de tu vida?",
      answers: [
        "A) Siento que tengo un alto nivel de control sobre mi vida.",
        "B) En ocasiones siento que pierdo el control de algunas áreas.",
        "C) Siento que mi vida está bajo el control de otras personas o circunstancias."
      ]
    },
    {
      question: "3. Metas y Visión\n¿Tienes claros tus objetivos y metas a largo plazo?",
      answers: [
        "A) Tengo una visión clara de lo que quiero lograr y metas escritas.",
        "B) A veces defino metas, pero no siempre son claras o consistentes.",
        "C) No tengo metas claras y tiendo a seguir la corriente."
      ]
    },
    {
      question: "4. Adaptabilidad\n¿Te adaptas fácilmente a los cambios inesperados?",
      answers: [
        "A) Me adapto fácilmente a los cambios y mantengo una actitud optimista.",
        "B) A veces me cuesta adaptarme, pero trato de mantenerme positivo/a.",
        "C) Me siento agobiado/a cuando las cosas no salen como esperaba."
      ]
    },
    {
      question: "5. Inteligencia Emocional\n¿Gestionas tus emociones de forma efectiva y equilibrada?",
      answers: [
        "A) Manejo mis emociones y las de los demás sin perder mi paz mental.",
        "B) A veces me cuesta manejar mis emociones, pero lo intento.",
        "C) Tengo dificultades para gestionar mis emociones y las de los demás."
      ]
    },
    {
      question: "6. Empoderamiento\n¿Sientes que tienes el poder de transformar tu presente y futuro?",
      answers: [
        "A) Siento que tengo el poder para cambiar mi vida.",
        "B) Algunas veces me siento empoderado/a, pero no siempre lo mantengo.",
        "C) Me siento a merced de las circunstancias y decisiones de otros."
      ]
    },
    {
      question: "7. Síndrome del Impostor\n¿Reconoces tus logros o sueles dudar de tus capacidades?",
      answers: [
        "A) Reconozco mis logros y no me siento como un impostor.",
        "B) A veces dudo de mis logros, pero trato de enfocarme en lo positivo.",
        "C) A menudo siento que no soy lo suficientemente bueno/a."
      ]
    },
    {
      question: "8. Utilización de la Mente\n¿Sabes utilizar tu mente para alcanzar tus metas?",
      answers: [
        "A) Utilizo mi mente de manera estratégica y efectiva para alcanzar mis objetivos.",
        "B) A veces logro enfocarme, pero no siempre soy consistente.",
        "C) Me veo atrapado/a en patrones de pensamiento negativos."
      ]
    },
    {
      question: "9. Responsabilidad Personal\n¿Asumes la responsabilidad total de tus acciones y resultados?",
      answers: [
        "A) Asumo la responsabilidad de mis acciones y resultados.",
        "B) A veces me cuesta asumir la responsabilidad completa, pero lo intento.",
        "C) Generalmente busco a otros responsables por mis resultados."
      ]
    },
    {
      question: "10. Aprendizaje y Crecimiento\n¿Qué tan comprometido/a estás con tu crecimiento personal?",
      answers: [
        "A) Busco constantemente oportunidades para aprender y mejorar.",
        "B) A veces busco crecer, pero no siempre me mantengo enfocado/a.",
        "C) Evito lo nuevo porque los desafíos me ponen nervioso/a."
      ]
    },
    {
      question: "11. Liderazgo Personal\n¿Sientes que lideras tu vida con claridad y propósito?",
      answers: [
        "A) Lidero mi vida con enfoque y propósito.",
        "B) A veces siento control, pero me falta claridad en algunas áreas.",
        "C) Me siento perdido/a y sin liderazgo en mi vida."
      ]
    },
    {
      question: "12. Felicidad y Satisfacción\n¿Te consideras una persona feliz y satisfecha con tu vida en general?",
      answers: [
        "A) Me siento feliz y satisfecho/a con mi vida.",
        "B) Algunas áreas me hacen feliz, pero hay cosas que me preocupan.",
        "C) Siento insatisfacción y rara vez experimento verdadera felicidad."
      ]
    },
    {
      question: "13. Pasión y Propósito\n¿Vives con pasión y propósito o sientes que te falta algo?",
      answers: [
        "A) Vivo con pasión y propósito claro en lo que hago.",
        "B) A veces encuentro propósito, pero no siempre es consistente.",
        "C) Me falta pasión y propósito en mi vida."
      ]
    },
    {
      question: "14. Relaciones y Comunicación\n¿Cómo son tus relaciones personales y profesionales?",
      answers: [
        "A) Mantengo relaciones positivas y efectivas tanto en lo personal como en lo profesional.",
        "B) Mis relaciones suelen ser buenas, pero tengo dificultades en ciertas áreas.",
        "C) Mis relaciones son tensas y difíciles de manejar."
      ]
    },
    {
      question: "15. Estrategia Personal y Desarrollo Profesional\n¿Tienes una estrategia clara para tu desarrollo profesional?",
      answers: [
        "A) Tengo una estrategia clara para mi desarrollo profesional.",
        "B) A veces me enfoco en mi desarrollo, pero sin una estrategia clara.",
        "C) No tengo una estrategia clara y me siento perdido/a."
      ]
    },
    {
      question: "16. Espiritualidad y Conexión Interior\n¿Qué tan conectado/a estás con tu espiritualidad y paz interior?",
      answers: [
        "A) Trabajo de forma consciente en cultivar mi espiritualidad y paz interior.",
        "B) A veces reflexiono sobre ello, pero no es una prioridad constante.",
        "C) No presto atención a la espiritualidad ni busco una conexión interior."
      ]
    },
    {
      question: "17. Empoderamiento y Autonomía\n¿Te sientes capaz de enfrentar grandes retos o te limitan las circunstancias?",
      answers: [
        "A) Me considero valiente y capaz de enfrentar grandes retos.",
        "B) A veces enfrento desafíos, pero con cierto temor.",
        "C) Me siento limitado/a por las circunstancias y decisiones de los demás."
      ]
    },
    {
      question: "18. Logro de Metas y Visión a Largo Plazo\n¿Sientes que vives pleno/a y alcanzas tus objetivos?",
      answers: [
        "A) Normalmente logro mis objetivos y tengo una visión clara a largo plazo.",
        "B) A veces logro mis metas, pero me cuesta mantener una visión sólida.",
        "C) Me cuesta lograr mis metas y carezco de motivación o disciplina."
      ]
    },
    {
      question: "19. Adaptabilidad en el Trabajo\n¿Te adaptas a los desafíos y cambios en el trabajo?",
      answers: [
        "A) Me adapto rápidamente a los cambios y desafíos en mi trabajo.",
        "B) A veces me cuesta, pero trato de mantener una actitud positiva.",
        "C) Los cambios en el trabajo me frustran y agobian."
      ]
    },
    {
      question: "20. Liderazgo en Relaciones\n¿Qué tan bien lideras tus relaciones con amigos, familia y colegas?",
      answers: [
        "A) Lidero mis relaciones de manera positiva y efectiva.",
        "B) A veces tengo dificultades para mantener relaciones saludables.",
        "C) Suelo tener problemas para liderar y gestionar mis relaciones."
      ]
    }
  ];

  let currentQuestion = 0;
  let userAnswers = Array(questions.length).fill(null);
  let quizCompleted = false;
  let result = "";

  function selectAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    let counts = [0, 0, 0];
    userAnswers.forEach(answer => counts[answer]++);
    
    if (counts[0] >= 18) {
      result = "CEO de tu vida: Felicidades, eres CEO de tu vida, ahora veamos como esto se puede poner mejor (o que sería lo que sigue para ti).";
    } else if (counts[1] >= 16) {
      result = "Encaminado/a: Estás tomando buenas decisiones, pero aún hay áreas de mejora para llegar al control total sobre tu vida.";
    } else if (counts[2] >= 5) {
      result = "Office Boy: Necesitas asumir mayor responsabilidad y tomar el control de tu vida, ya que actualmente dejas que las circunstancias o los demás decidan por ti.";
    } else {
      result = "Encaminado/a: Estás tomando buenas decisiones, pero aún hay áreas de mejora para llegar al control total sobre tu vida.";
    }
    quizCompleted = true;
  }

  function restartQuiz() {
    currentQuestion = 0;
    userAnswers = Array(questions.length).fill(null);
    quizCompleted = false;
    result = "";
  }
</script>

<div class="quiz-container rounded-xl">
  <h1 class="font-[600] text-left pb-4">Quiz: ¿Eres el CEO de tu Vida?</h1>
  
  {#if !quizCompleted}
    <div class="question">
      <h2 class="text center">{questions[currentQuestion].question}</h2>
      <div class="answers">
        {#each questions[currentQuestion].answers as answer, index}
          <button on:click={() => selectAnswer(index)} class="py-2 px-4 bg-leslie_gold text-leslie_black text-xl font-medium hover:opacity-80">{answer}</button>
        {/each}
      </div>
    </div>
  {:else}
    <div class="result">
      <h3 class="text-2xl">Resultado:</h3>
      <p>{result}</p>
      <button on:click={restartQuiz} class="py-2 px-4 bg-leslie_gold text-leslie_black text-xl font-medium hover:opacity-80">Reiniciar Quiz</button>
    </div>
  {/if}
</div>

<style>
  .quiz-container {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 15px;
  }

  h2 {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  .question {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  h3 {
    color: #444;
    margin-bottom: 15px;
  }

  .answers {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .result {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }

  .result p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }
</style>
