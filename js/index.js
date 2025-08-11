// - Funcionalidad del Simulador

// - Arreglo de Verbos
const verbs = [
    {infinitive: "cry", past: "cried", pastParticiple: "cried", spanish: "llorar"},
    {infinitive: "watch", past: "watched", pastParticiple: "watched", spanish: "observar"},
    {infinitive: "pull", past: "pulled", pastParticiple: "pulled", spanish: "jalar"},
    {infinitive: "drive", past: "drove", pastParticiple: "driven", spanish: "conducir"},
    {infinitive: "stay", past: "stayed", pastParticiple: "stayed", spanish: "permanecer"},
    {infinitive: "comb", past: "combed", pastParticiple: "combed", spanish: "peinar"},
    {infinitive: "look at", past: "looked at", pastParticiple: "looked at", spanish: "mirar"},
    {infinitive: "sell", past: "sold", pastParticiple: "sold", spanish: "vender"},
    {infinitive: "speak", past: "spoke", pastParticiple: "spoken", spanish: "hablar"},
    {infinitive: "cut", past: "cut", pastParticiple: "cut", spanish: "cortar"},
    {infinitive: "be", past: "was/were", pastParticiple: "been", spanish: "ser/estar"},
    {infinitive: "show", past: "showed", pastParticiple: "shown", spanish: "mostrar"},
    {infinitive: "say", past: "said", pastParticiple: "said", spanish: "decir"},
    {infinitive: "tell", past: "told", pastParticiple: "told", spanish: "narrar"},
    {infinitive: "sleep", past: "slept", pastParticiple: "slept", spanish: "dormir"},
    {infinitive: "sit", past: "sat", pastParticiple: "sat", spanish: "sentarse"},
    {infinitive: "use", past: "used", pastParticiple: "used", spanish: "usar"},
    {infinitive: "arrive", past: "arrived", pastParticiple: "arrived", spanish: "llegar"},
    {infinitive: "smoke", past: "smoked", pastParticiple: "smoked", spanish: "fumar"},
    {infinitive: "cook", past: "cooked", pastParticiple: "cooked", spanish: "cocinar"},
    {infinitive: "finish", past: "finished", pastParticiple: "finished", spanish: "terminar"},
    {infinitive: "change", past: "changed", pastParticiple: "changed", spanish: "cambiar"},
    {infinitive: "invent", past: "invented", pastParticiple: "invented", spanish: "inventar"},
    {infinitive: "accept", past: "accepted", pastParticiple: "accepted", spanish: "aceptar"},
    {infinitive: "fly", past: "flew", pastParticiple: "flown", spanish: "volar"},
    {infinitive: "go", past: "went", pastParticiple: "gone", spanish: "ir"},
    {infinitive: "read", past: "read", pastParticiple: "read", spanish: "leer"},
    {infinitive: "rest", past: "rested", pastParticiple: "rested", spanish: "descansar"},
    {infinitive: "live", past: "lived", pastParticiple: "lived", spanish: "vivir"},
    {infinitive: "die", past: "died", pastParticiple: "died", spanish: "morir"},
    {infinitive: "think", past: "thought", pastParticiple: "thought", spanish: "pensar"},
    {infinitive: "study", past: "studied", pastParticiple: "studied", spanish: "estudiar"},
    {infinitive: "pass", past: "passed", pastParticiple: "passed", spanish: "pasar"},
    {infinitive: "eat", past: "ate", pastParticiple: "eaten", spanish: "comer"},
    {infinitive: "wake up", past: "woke up", pastParticiple: "woken up", spanish: "despertarse"},
    {infinitive: "get up", past: "got up", pastParticiple: "gotten up", spanish: "levantarse"},
    {infinitive: "talk", past: "talked", pastParticiple: "talked", spanish: "hablar (platicar)"},
    {infinitive: "ask", past: "asked", pastParticiple: "asked", spanish: "preguntar"},
    {infinitive: "answer", past: "answered", pastParticiple: "answered", spanish: "responder"},
    {infinitive: "see", past: "saw", pastParticiple: "seen", spanish: "ver"},
    {infinitive: "come", past: "came", pastParticiple: "come", spanish: "venir"},
    {infinitive: "play", past: "played", pastParticiple: "played", spanish: "jugar"},
    {infinitive: "take", past: "took", pastParticiple: "taken", spanish: "tomar"},
    {infinitive: "run", past: "ran", pastParticiple: "run", spanish: "correr"},
    {infinitive: "fail", past: "failed", pastParticiple: "failed", spanish: "fallar, fracasar, reprobar"},
    {infinitive: "wash", past: "washed", pastParticiple: "washed", spanish: "lavar"},
    {infinitive: "clean", past: "cleaned", pastParticiple: "cleaned", spanish: "limpiar"},
    {infinitive: "walk", past: "walked", pastParticiple: "walked", spanish: "caminar"},
    {infinitive: "jump", past: "jumped", pastParticiple: "jumped", spanish: "saltar"},
    {infinitive: "swim", past: "swam", pastParticiple: "swum", spanish: "nadar"},
    {infinitive: "listen", past: "listened", pastParticiple: "listened", spanish: "escuchar"},
    {infinitive: "write", past: "wrote", pastParticiple: "written", spanish: "escribir"},
    {infinitive: "make", past: "made", pastParticiple: "made", spanish: "hacer"},
    {infinitive: "drink", past: "drank", pastParticiple: "drunk", spanish: "beber"},
    {infinitive: "smell", past: "smelt/smelled", pastParticiple: "smelt/smelled", spanish: "oler"},
    {infinitive: "have", past: "had", pastParticiple: "had", spanish: "tener"},
    {infinitive: "help", past: "helped", pastParticiple: "helped", spanish: "ayudar"},
    {infinitive: "push", past: "pushed", pastParticiple: "pushed", spanish: "empujar"},
    {infinitive: "open", past: "opened", pastParticiple: "opened", spanish: "abrir"},
    {infinitive: "sing", past: "sang", pastParticiple: "sung", spanish: "cantar"},
    {infinitive: "save", past: "saved", pastParticiple: "saved", spanish: "salvar"},
    {infinitive: "teach", past: "taught", pastParticiple: "taught", spanish: "enseñar" },
    {infinitive: "bring", past: "brought", pastParticiple: "brought", spanish: "traer" },
    {infinitive: "carry", past: "carried", pastParticiple: "carried", spanish: "cargar" },
    {infinitive: "find", past: "found", pastParticiple: "found", spanish: "encontrar" },
    {infinitive: "give", past: "gave", pastParticiple: "given", spanish: "dar" },
    {infinitive: "ride", past: "rode", pastParticiple: "ridden", spanish: "montar" },
    {infinitive: "hear", past: "heard", pastParticiple: "heard", spanish: "oir" },
    {infinitive: "rain", past: "rained", pastParticiple: "rained", spanish: "llover" },
    {infinitive: "spend", past: "spent", pastParticiple: "spent", spanish: "gastar" },
    {infinitive: "erase", past: "erased", pastParticiple: "erased", spanish: "borrar" },
    {infinitive: "learn", past: "learned", pastParticiple: "learned", spanish: "aprender" },
    {infinitive: "know", past: "knew", pastParticiple: "known", spanish: "saber" },
    {infinitive: "paint", past: "painted", pastParticiple: "painted", spanish: "pintar" },
    {infinitive: "buy", past: "bought", pastParticiple: "bought", spanish: "comprar" },
    {infinitive: "dance", past: "danced", pastParticiple: "danced", spanish: "bailar" },
    {infinitive: "try", past: "tried", pastParticiple: "tried", spanish: "tratar" },
    {infinitive: "wear", past: "wore", pastParticiple: "worn", spanish: "vestir" },
    {infinitive: "return", past: "returned", pastParticiple: "returned", spanish: "regresar" },
    {infinitive: "forget", past: "forgot", pastParticiple: "forgotten", spanish: "olvidar" },
    {infinitive: "forgive", past: "forgave", pastParticiple: "forgiven", spanish: "perdonar" },
    {infinitive: "close", past: "closed", pastParticiple: "closed", spanish: "cerrar" },
    {infinitive: "build", past: "built", pastParticiple: "built", spanish: "construir" },
    {infinitive: "arrange", past: "arranged", pastParticiple: "arranged", spanish: "arreglar" },
    {infinitive: "do", past: "did", pastParticiple: "done", spanish: "hacer (realizar)" },
    {infinitive: "create", past: "created", pastParticiple: "created", spanish: "crear" },
    {infinitive: "organize", past: "organized", pastParticiple: "organized", spanish: "organizar" },
    {infinitive: "love", past: "loved", pastParticiple: "loved", spanish: "amar" },
    {infinitive: "taste", past: "tasted", pastParticiple: "tasted", spanish: "saber (sabor) / probar" },
    {infinitive: "like", past: "liked", pastParticiple: "liked", spanish: "gustar" },
    
];

let shuffledVerbs = [];

// Función para mezclar array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Funcion para crear las tablas recorriendo los verbos con un foreach (que flojera manual jaja)
function createTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    shuffledVerbs.forEach((verb, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="text" id="inf_${index}" placeholder="Escribe el infinitivo"></td>
            <td><input type="text" id="past_${index}" placeholder="Escribe el pasado"></td>
            <td><input type="text" id="pp_${index}" placeholder="Escribe el participio"></td>
            <td><input type="text" id="esp_${index}" value="${verb.spanish}" readonly></td>
        `;
        tableBody.appendChild(row);
    });
}

function shuffleVerbs() {
    // Limpiar respuestas antes de mezclar
    clearAll();

    // Mezclar los verbos
    shuffledVerbs = shuffleArray(verbs);

    // Recrear la tabla con el nuevo orden
    createTable();

    // Actualizar puntuación
    updateScore(0, verbs.length * 3);
}

function normalizeAnswer(answer) {
    return answer.toLowerCase().trim().replace(/\s+/g, ' ');
}

function checkAnswer(userAnswer, correctAnswer) {
    const normalized = normalizeAnswer(userAnswer);
    const correct = normalizeAnswer(correctAnswer);

    // Para "be" permitir variaciones
    if (correct === "was/were") {
        return normalized === "was/were" || normalized === "was" || normalized === "were";
    }

    // Para "smell" permitir variaciones
    if (correct === "smelt/smelled") {
        return normalized === "smelt/smelled" || normalized === "smelt" || normalized === "smelled";
    }

    // Para "get up" (gotten up puede ser got up en algunos contextos)
    if (correct === "gotten up") {
        return normalized === "gotten up" || normalized === "got up";
    }

    // Para "learn" permitir variaciones
    if (correct === "learnt/learned") {
        return normalized === "learnt/learned" || normalized === "learnt" || normalized === "learned";
    }

    return normalized === correct;
}

// Funcion para remover el mensaje de error
function removeErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
}

// Funcion para mirar errores
function showError(inputElement, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    inputElement.parentNode.style.position = 'relative';
    inputElement.parentNode.appendChild(errorDiv);

    setTimeout(() => {
        errorDiv.style.opacity = '0';
        setTimeout(() => errorDiv.remove(), 300);
    }, 3000);
}

function checkAnswers() {
    removeErrorMessages();
    let correct = 0;
    let total = shuffledVerbs.length * 3; // 3 campos por verbo (infinitive, past, past participle)

    shuffledVerbs.forEach((verb, index) => {
        const infInput = document.getElementById(`inf_${index}`);
        const pastInput = document.getElementById(`past_${index}`);
        const ppInput = document.getElementById(`pp_${index}`);

        // Evaluacion de Infinitive
        if (checkAnswer(infInput.value, verb.infinitive)) {
            infInput.className = 'correct';
            correct++;
        } else if (infInput.value.trim() !== '') {
            infInput.className = 'incorrect';
            showError(infInput, `Correcto: ${verb.infinitive}`);
        } else {
            infInput.className = '';
        }

        // Evaluacion de Past
        if (checkAnswer(pastInput.value, verb.past)) {
            pastInput.className = 'correct';
            correct++;
        } else if (pastInput.value.trim() !== '') {
            pastInput.className = 'incorrect';
            showError(pastInput, `Correcto: ${verb.past}`);
        } else {
            pastInput.className = '';
        }

        // Evaluacion de Past Participie
        if (checkAnswer(ppInput.value, verb.pastParticiple)) {
            ppInput.className = 'correct';
            correct++;
        } else if (ppInput.value.trim() !== '') {
            ppInput.className = 'incorrect';
            showError(ppInput, `Correcto: ${verb.pastParticiple}`);
        } else {
            ppInput.className = '';
        }
    });

    updateScore(correct, total);

    if (correct === total) {
        document.getElementById('completionMessage').style.display = 'block';
    }
}

// Boton para regresar al inicio
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Funcion para actualizar la puntuacion
function updateScore(correct, total) {
    const percentage = Math.round((correct / total) * 100);
    document.getElementById('scoreText').textContent = `Puntuación: ${correct}/${total} | Progreso: ${percentage}%`;
    document.getElementById('progressBar').style.width = percentage + '%';
}

// Funcion para eliminar todo
function clearAll() {
    const inputs = document.querySelectorAll('input:not([readonly])');
    inputs.forEach(input => {
        input.value = '';
        input.className = '';
    });
    removeErrorMessages();
    updateScore(0, shuffledVerbs.length * 3);
    document.getElementById('completionMessage').style.display = 'none';
}

// Funcion para mirar las respuestas
function showAnswers() {
    shuffledVerbs.forEach((verb, index) => {
        document.getElementById(`inf_${index}`).value = verb.infinitive;
        document.getElementById(`past_${index}`).value = verb.past;
        document.getElementById(`pp_${index}`).value = verb.pastParticiple;
    });
    checkAnswers();
}

// Inicializar la aplicación con verbos mezclados
function initializeApp() {
    shuffledVerbs = shuffleArray(verbs);
    createTable();
    updateScore(0, verbs.length * 3);
}

// Inicializar la tabla al cargar la página con orden aleatorio
initializeApp();
