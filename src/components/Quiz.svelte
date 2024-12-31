<script>
  import { onMount } from 'svelte';

  let questions = [
  {
    question: "<b>1. Decisiones que definen tu camino</b>\nImagina que tienes una decisión importante que tomar en tu carrera, como cambiar de puesto o proponer una idea innovadora. ¿Qué haces?",
    answers: [
      "a) Actúo con seguridad y confianza, tomando decisiones alineadas con mi visión y metas.",
      "b) Evito tomar decisiones por miedo a equivocarme o a que otros me critiquen.",
      "c) Decido solo después de mucho tiempo de dudas y análisis, pero aún así me cuesta confiar en mi elección."
    ]
  },
  {
    question: "<b>2. ¿Quién dirige tu tiempo?</b>\nSi alguien analizara tu rutina diaria, ¿diría que tienes el control de tu tiempo y tus prioridades?",
    answers: [
      "a) Sí, manejo mi tiempo con claridad y me enfoco en lo que realmente importa.",
      "b) No, siento que mi día se va resolviendo cosas urgentes y no lo que realmente me acerca a mis metas.",
      "c) A veces tengo control, pero muchas veces las urgencias o las opiniones de otros toman el mando."
    ]
  },
  {
    question: "<b>3. Claridad en tus metas</b>\n¿Cuándo fue la última vez que escribiste tus metas y trabajaste activamente en ellas?",
    answers: [
      "a) Siempre tengo mis metas claras y trabajo consistentemente en ellas.",
      "b) No recuerdo la última vez que escribí mis metas, y usualmente solo voy reaccionando a las situaciones.",
      "c) Tengo algunas metas en mente, pero aún me falta claridad y acción para lograrlas."
    ]
  },
  {
    question: "<b>4. Tu confianza en la mesa de reunión</b>\nEn reuniones importantes, ¿te sientes seguro compartiendo tus ideas?",
    answers: [
      "a) Sí, mis opiniones son valoradas y confío plenamente en mi capacidad de liderar.",
      "b) Me siento nervioso y dudo de mis ideas, prefiriendo quedarme en silencio para no arriesgarme.",
      "c) Comparto mis ideas, pero no siempre siento que tienen el impacto que me gustaría."
    ]
  },
  {
    question: "<b>5. El precio de tu balance personal</b>\nImagina que llegas a casa después de un día laboral. ¿Cómo te sientes?",
    answers: [
      "a) Energizado, con tiempo y ganas de disfrutar a mi familia y a mis hobbies.",
      "b) Agotado, con ganas de desconectarme por completo y evitar cualquier interacción.",
      "c) Cansado, pero hago un esfuerzo por dedicar tiempo a mi familia, aunque no siempre es suficiente."
    ]
  },
  {
    question: "<b>6. Estrategia para el éxito profesional</b>\n¿Tienes un plan claro para llevar tu carrera al siguiente nivel?",
    answers: [
      "a) Sí, tengo una estrategia definida y estoy avanzando en ella.",
      "b) No, no tengo un plan claro y a menudo me siento estancado.",
      "c) Tengo ideas de cómo avanzar, pero no estoy seguro de los pasos concretos a seguir."
    ]
  },
  {
    question: "<b>7. Manejo de tus emociones</b>\nCuando enfrentas críticas o momentos tensos, ¿cómo reaccionas?",
    answers: [
      "a) Mantengo la calma y respondo de forma constructiva, sin dejar que las emociones me dominen.",
      "b) Me afecta profundamente, y a menudo me paralizo o reacciono impulsivamente.",
      "c) Intento mantenerme tranquilo, pero a veces las emociones me superan."
    ]
  },
  {
    question: "<b>8. Comparación y reconocimiento</b>\n¿Cómo te sientes cuando ves que otros avanzan en sus carreras?",
    answers: [
      "a) Inspirado, sabiendo que yo también puedo lograrlo.",
      "b) Amenazado, sintiendo que nunca estaré al nivel de ellos.",
      "c) Un poco frustrado, pero trato de enfocarme en mis propios objetivos."
    ]
  },
  {
    question: "<b>9. Tu relación con la energía</b>\nPiensa en tu última semana laboral. ¿Cómo describirías tus niveles de energía?",
    answers: [
      "a) Constantes y suficientes para lograr todo lo que me propongo.",
      "b) Bajos, siento que estoy en un ciclo constante de cansancio y agotamiento.",
      "c) Variables, algunos días me siento bien, pero otros estoy completamente drenado."
    ]
  },
  {
    question: "<b>10. Propósito que te mueve</b>\nSi alguien te preguntara qué es lo que más te motiva en la vida, ¿podrías responder con claridad?",
    answers: [
      "a) Sí, tengo un propósito definido que me impulsa todos los días.",
      "b) No, siento que he perdido el rumbo y no sé qué es lo que realmente quiero.",
      "c) Tengo una idea general, pero no estoy completamente claro."
    ]
  },
  {
    question: "<b>11. Tiempo con tus seres queridos</b>\nCuando piensas en el tiempo que dedicas a tu familia, ¿qué sientes?",
    answers: [
      "a) Orgullo, porque logro equilibrar mi tiempo entre trabajo y familia.",
      "b) Culpa, porque sé que no les dedico el tiempo y atención que merecen.",
      "c) Frustración, porque intento estar presente, pero el trabajo siempre termina interfiriendo."
    ]
  },
  {
    question: "<b>12. Lo que refleja tu espejo</b>\n¿Cómo te sientes al verte al espejo después de una larga semana laboral?",
    answers: [
      "a) Energizado y orgulloso de lo que estoy logrando.",
      "b) Cansado, insatisfecho y con ganas de un cambio urgente.",
      "c) A veces me siento bien, pero hay días en los que veo una versión de mí que no reconozco."
    ]
  },
  {
    question: "<b>13. Seguridad ante la autoridad</b>\nEn reuniones con personas de mayor jerarquía, ¿cómo te sientes?",
    answers: [
      "a) Me siento cómodo/a y expongo mis ideas con confianza.",
      "b) Me siento nervioso/a, incómodo/a, dudo de mis capacidades y evito hablar para no equivocarme.",
      "c) Hablo cuando es necesario, pero no siempre me siento seguro de mi posición."
    ]
  },
  {
    question: "<b>14. Red de apoyo y perspectiva</b>\nCuando enfrentas decisiones importantes en tu vida profesional o personal, ¿tienes a quién recurrir para obtener claridad y apoyo?",
    answers: [
      "a) Sí, cuento con una red sólida de mentores, colegas o personas clave que me ayudan a ver mis puntos ciegos y tomar decisiones estratégicas.",
      "b) No, generalmente enfrento las decisiones solo y me siento inseguro, porque no tengo a nadie que me guíe o me dé una perspectiva diferente.",
      "c) A veces recurro a amigos o familiares, pero no siempre tienen la experiencia o visión que necesito para ayudarme a tomar las mejores decisiones."
    ]
  },
  {
    question: "<b>15. Futuro y retiro: ¿preparado o preocupado?</b>\n¿Cómo te sientes al pensar en tu retiro o en los próximos 10 años de tu vida profesional?",
    answers: [
      "a) Tranquilo y confiado, porque tengo un plan claro para esa etapa.",
      "b) Ansioso y preocupado, porque no sé cómo asegurarme un futuro estable y satisfactorio.",
      "c) Indeciso, porque aunque pienso en el retiro, no sé por dónde empezar a prepararme."
    ]
  },
  {
    question: "<b>16. Camino profesional: ¿Quién lidera tu desarrollo?</b>\n¿Qué tan claro tienes el camino para tu crecimiento y éxito profesional?",
    answers: [
      "a) Tengo una estrategia definida y estoy tomando pasos claros para lograrlo.",
      "b) No tengo claridad sobre cómo crecer y a menudo me siento atrapado en mi situación actual.",
      "c) Sé qué quiero lograr, pero me cuesta definir los siguientes pasos para avanzar."
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
  let countA = userAnswers.filter(answer => answer === 0).length;
  let countB = userAnswers.filter(answer => answer === 1).length;
  
  if (countA >= 15) {
    result = "<b>CEO de tu Vida:</b> ¡Felicitaciones! Tienes claridad, propósito y control en tu vida. Sabes hacia dónde vas y tomas decisiones alineadas con tus metas. Sin embargo, incluso los mejores líderes pueden beneficiarse de una estrategia renovada para maximizar su impacto y disfrutar aún más de sus logros.";
  } else if (countA <= 14 && countB <= 3) {
    result = "<b>En transición:</b> Estás en el camino, pero aún hay áreas clave que necesitan atención. Reconoces ciertos bloqueos, pero no terminas de actuar para resolverlos. Con un poco de guía y enfoque estratégico, podrías dar un gran salto hacia la vida que realmente deseas.";
  } else {
    result = "<b>Office Boy:</b> Estás atrapado en un ciclo de inseguridad, dudas y falta de dirección. Tu potencial está ahí, pero lo estás desperdiciando al reaccionar a las circunstancias en lugar de controlarlas. Este es el momento perfecto para romper con tus miedos y convertirte en el <b>CEO de tu vida.</b>";
  }
  quizCompleted = true;
}

  function restartQuiz() {
    currentQuestion = 0;
    userAnswers = Array(questions.length).fill(null);
    quizCompleted = false;
    result = "";
  }

  onMount(() => {
    console.log("Quiz component mounted");
  });
</script>

<div class="quiz-container">
  <h2>Quiz: ¿Eres el CEO o el Office Boy de tu vida?</h2>
  <p class="instructions">Instrucciones: Lee cada situación y selecciona la opción que más se parezca a tu realidad.</p>
  
  {#if !quizCompleted}
    <div class="question">
      <h3>{@html questions[currentQuestion].question.replace('\n', '<br>')}</h3>
      <div class="answers">
        {#each questions[currentQuestion].answers as answer, index}
          <button on:click={() => selectAnswer(index)} class="py-2 px-4 bg-leslie_gold text-leslie_black text-xl font-medium hover:opacity-80">{answer}</button>
        {/each}
      </div>
    </div>
    <div class="progress">
      Pregunta {currentQuestion + 1} de {questions.length}
    </div>
  {:else}
    <div class="result">
      <h3>Resultado:</h3>
      <p >{@html result}</p>
      <button on:click={restartQuiz}>Reiniciar Quiz</button>
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
    border-radius: 16px;
  }

  h2 {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  .instructions {
    font-size: 16px;
    color: #666;
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
    font-size: 18px;
    color: #444;
    margin-bottom: 15px;
  }

  .answers {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .progress {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-top: 10px;
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

  @media (max-width: 600px) {
    .quiz-container {
      padding: 10px;
    }

    h2 {
      font-size: 20px;
    }

    .instructions {
      font-size: 14px;
    }

    h3 {
      font-size: 16px;
    }

    button {
      font-size: 14px;
    }
  }
</style>