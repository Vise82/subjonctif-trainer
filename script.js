// ===== DATEN =====
const questions = {
    level1: [
        {
            question: "Il faut que je <span class='blank'>___</span> mes devoirs.",
            options: ["fasse", "fais", "faire", "fait"],
            correct: 0,
            explanation: "Nach 'il faut que' steht immer der Subjonctif. Die Form von 'faire' (je) ist 'fasse'.",
            context: "Tom muss seine Hausaufgaben machen."
        },
        {
            question: "Je veux que tu <span class='blank'>___</span> avec moi.",
            options: ["viens", "viennes", "venir", "venu"],
            correct: 1,
            explanation: "Nach 'je veux que' steht der Subjonctif. Die Form von 'venir' (tu) ist 'viennes'.",
            context: "Tom möchte, dass Elsa mitkommt."
        },
        {
            question: "Il est important que nous <span class='blank'>___</span> gentils.",
            options: ["sommes", "soyons", "être", "étions"],
            correct: 1,
            explanation: "Nach 'il est important que' steht der Subjonctif. Die Form von 'être' (nous) ist 'soyons'.",
            context: "Es ist wichtig, dass wir nett sind."
        },
        {
            question: "Je trouve bizarre qu'il ne <span class='blank'>___</span> pas.",
            options: ["répond", "réponde", "répondre", "répondu"],
            correct: 1,
            explanation: "Nach 'je trouve bizarre que' steht der Subjonctif. Die Form von 'répondre' (il) ist 'réponde'.",
            context: "Jakob antwortet nicht auf Toms Nachrichten."
        },
        {
            question: "Il faut qu'Elsa <span class='blank'>___</span> participer.",
            options: ["peut", "puisse", "pouvoir", "pu"],
            correct: 1,
            explanation: "Nach 'il faut que' steht der Subjonctif. Die Form von 'pouvoir' (elle) ist 'puisse'.",
            context: "Elsa möchte am Austausch teilnehmen."
        },
        {
            question: "Je veux que vous <span class='blank'>___</span> ensemble.",
            options: ["allez", "alliez", "aller", "allé"],
            correct: 1,
            explanation: "Nach 'je veux que' steht der Subjonctif. Die Form von 'aller' (vous) ist 'alliez'.",
            context: "Die Lehrerin möchte, dass sie zusammenarbeiten."
        },
        {
            question: "Il est nécessaire que Tom <span class='blank'>___</span> du courage.",
            options: ["a", "ait", "avoir", "eu"],
            correct: 1,
            explanation: "Nach 'il est nécessaire que' steht der Subjonctif. Die Form von 'avoir' (il) ist 'ait'.",
            context: "Tom braucht Mut zum Sprechen."
        },
        {
            question: "Je souhaite qu'ils <span class='blank'>___</span> amis.",
            options: ["deviennent", "devenir", "devient", "devenaient"],
            correct: 0,
            explanation: "Nach 'je souhaite que' steht der Subjonctif. Die Form von 'devenir' (ils) ist 'deviennent'.",
            context: "Tom und Jakob sollen Freunde werden."
        },
        {
            question: "Il faut que nous <span class='blank'>___</span> attention.",
            options: ["faisons", "fassions", "faire", "fait"],
            correct: 1,
            explanation: "Nach 'il faut que' steht der Subjonctif. Die Form von 'faire' (nous) ist 'fassions'.",
            context: "Wir müssen aufpassen."
        },
        {
            question: "Je ne pense pas qu'Hugo <span class='blank'>___</span> méchant.",
            options: ["est", "soit", "être", "sera"],
            correct: 1,
            explanation: "Nach 'je ne pense pas que' steht der Subjonctif. Die Form von 'être' (il) ist 'soit'.",
            context: "Hugo ist vielleicht nicht wirklich gemein."
        }
    ],
    level2: [
        {
            question: "Tom veut que Jakob <span class='blank'>___</span> (répondre) à ses messages.",
            answer: "réponde",
            alternatives: ["reponde"],
            explanation: "Die Subjonctif-Form von 'répondre' (il/elle) ist 'réponde'.",
            context: "Aus Kapitel 1: Tom wartet auf Antwort."
        },
        {
            question: "Il faut qu'Elsa <span class='blank'>___</span> (pouvoir) participer à l'échange.",
            answer: "puisse",
            alternatives: ["puise"],
            explanation: "Die Subjonctif-Form von 'pouvoir' (elle) ist 'puisse'.",
            context: "Aus Kapitel 1: Elsas Wunsch."
        },
        {
            question: "Je trouve important que nous <span class='blank'>___</span> (s'aider) mutuellement.",
            answer: "nous aidions",
            alternatives: ["aidions", "s'aidions"],
            explanation: "Die Subjonctif-Form von 's'aider' (nous) ist 'nous aidions'.",
            context: "Elsa über Freundschaft."
        },
        {
            question: "Il est bizarre qu'Hugo <span class='blank'>___</span> (être) si différent maintenant.",
            answer: "soit",
            alternatives: ["sois"],
            explanation: "Die Subjonctif-Form von 'être' (il) ist 'soit'.",
            context: "Jakob über Hugo."
        },
        {
            question: "Je veux que tu <span class='blank'>___</span> (venir) avec moi au Neckar.",
            answer: "viennes",
            alternatives: ["vienne"],
            explanation: "Die Subjonctif-Form von 'venir' (tu) ist 'viennes'.",
            context: "Aus Kapitel 4: Einladung zum Neckar."
        },
        {
            question: "Il faut que Tom <span class='blank'>___</span> (avoir) plus de confiance.",
            answer: "ait",
            alternatives: ["aie"],
            explanation: "Die Subjonctif-Form von 'avoir' (il) ist 'ait'.",
            context: "Elsa ermutigt Tom."
        },
        {
            question: "Je souhaite que vous <span class='blank'>___</span> (faire) connaissance.",
            answer: "fassiez",
            alternatives: ["faisiez"],
            explanation: "Die Subjonctif-Form von 'faire' (vous) ist 'fassiez'.",
            context: "Die Gastfamilie begrüßt Tom."
        },
        {
            question: "Il est important qu'ils <span class='blank'>___</span> (comprendre) la situation.",
            answer: "comprennent",
            alternatives: ["comprenent"],
            explanation: "Die Subjonctif-Form von 'comprendre' (ils) ist 'comprennent'.",
            context: "Über die Omas gegen Rechts."
        },
        {
            question: "Je ne crois pas que ce <span class='blank'>___</span> (être) une bonne idée.",
            answer: "soit",
            alternatives: ["sois"],
            explanation: "Nach 'je ne crois pas que' steht der Subjonctif. Form von 'être': 'soit'.",
            context: "Diskussion über den Austausch."
        },
        {
            question: "Il faut que nous <span class='blank'>___</span> (aller) à l'école ensemble.",
            answer: "allions",
            alternatives: ["alions"],
            explanation: "Die Subjonctif-Form von 'aller' (nous) ist 'allions'.",
            context: "Tom und Jakob gehen zur Schule."
        }
    ],
    level3: [
        {
            question: "Bilde einen Satz mit 'il faut que' und 'aller' (je).",
            answer: "il faut que j'aille",
            alternatives: ["il faut que je aille"],
            explanation: "Korrekt: 'Il faut que j'aille...' (z.B. à l'école, en France)",
            context: "Freie Satzbildung mit Subjonctif."
        },
        {
            question: "Was würde Tom sagen? Verwende 'je veux que' + 'répondre' (Jakob).",
            answer: "je veux que jakob réponde",
            alternatives: ["je veux qu'il réponde", "je veux que jakob reponde"],
            explanation: "Korrekt: 'Je veux que Jakob réponde' oder 'Je veux qu'il réponde'.",
            context: "Tom wartet auf Jakobs Antwort."
        },
        {
            question: "Bilde einen Satz: 'il est important que' + 'être' (nous) + 'gentils'.",
            answer: "il est important que nous soyons gentils",
            alternatives: ["il est important qu'on soit gentils"],
            explanation: "Korrekt: 'Il est important que nous soyons gentils'.",
            context: "Über Freundlichkeit."
        },
        {
            question: "Was würde Elsa sagen? 'je souhaite que' + 'pouvoir' (je) + 'participer'.",
            answer: "je souhaite que je puisse participer",
            alternatives: ["je souhaite pouvoir participer"],
            explanation: "Korrekt: 'Je souhaite que je puisse participer' ODER 'Je souhaite pouvoir participer'.",
            context: "Elsas Wunsch am Austausch teilzunehmen."
        },
        {
            question: "Bilde einen Satz: 'il faut que' + 'faire' (nous) + 'attention'.",
            answer: "il faut que nous fassions attention",
            alternatives: ["il faut qu'on fasse attention"],
            explanation: "Korrekt: 'Il faut que nous fassions attention' oder 'Il faut qu'on fasse attention'.",
            context: "Vorsichtig sein."
        }
    ]
};

// ===== SPIELSTATUS =====
let currentLevel = 1;
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let selectedAnswer = null;
let currentQuestions = [];
let hintsUsed = 0;
let errorLog = [];

// ===== INITIALISIERUNG =====
document.addEventListener('DOMContentLoaded', () => {
    showLevelSelection();
});

function showLevelSelection() {
    document.getElementById('levelSelection').classList.remove('hidden');
    document.getElementById('gameArea').classList.add('hidden');
    document.getElementById('resultScreen').classList.add('hidden');
}

function startLevel(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    hintsUsed = 0;
    errorLog = [];
    
    if (level === 1) {
        currentQuestions = [...questions.level1];
    } else if (level === 2) {
        currentQuestions = [...questions.level2];
    } else {
        currentQuestions = [...questions.level3];
    }
    
    shuffleArray(currentQuestions);
    
    document.getElementById('levelSelection').classList.add('hidden');
    document.getElementById('gameArea').classList.remove('hidden');
    document.getElementById('levelBadge').textContent = `Level ${level}`;
    
    showQuestion();
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    selectedAnswer = null;
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = currentQuestions.length;
    document.getElementById('score').textContent = score;
    
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    document.getElementById('questionText').innerHTML = question.question;
    document.getElementById('questionContext').textContent = question.context || '';
    
    document.getElementById('feedbackBox').classList.add('hidden');
    document.getElementById('checkBtn').classList.remove('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    
    const answerContainer = document.getElementById('answerContainer');
    answerContainer.innerHTML = '';
    
    if (currentLevel === 1) {
        document.getElementById('questionType').textContent = 'Multiple Choice';
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'answer-option';
            div.textContent = option;
            div.onclick = () => selectAnswer(index);
            answerContainer.appendChild(div);
        });
    } else {
        document.getElementById('questionType').textContent = currentLevel === 2 ? 'Lückentext' : 'Freie Antwort';
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'answer-input';
        input.id = 'answerInput';
        input.placeholder = 'Deine Antwort hier eingeben...';
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkAnswer();
        });
        answerContainer.appendChild(input);
        setTimeout(() => input.focus(), 100);
    }
}

function selectAnswer(index) {
    selectedAnswer = index;
    document.querySelectorAll('.answer-option').forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) opt.classList.add('selected');
    });
}

function checkAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    let isCorrect = false;
    
    if (currentLevel === 1) {
        if (selectedAnswer === null) {
            alert('Bitte wähle eine Antwort!');
            return;
        }
        isCorrect = selectedAnswer === question.correct;
        
        document.querySelectorAll('.answer-option').forEach((opt, i) => {
            if (i === question.correct) {
                opt.classList.add('correct');
            } else if (i === selectedAnswer) {
                opt.classList.add('incorrect');
            }
            opt.onclick = null;
        });
    } else {
        const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
        if (!userAnswer) {
            alert('Bitte gib eine Antwort ein!');
            return;
        }
        
        const correctAnswer = question.answer.toLowerCase();
        const alternatives = question.alternatives ? question.alternatives.map(a => a.toLowerCase()) : [];
        
        isCorrect = userAnswer === correctAnswer || alternatives.includes(userAnswer);
        
        document.getElementById('answerInput').disabled = true;
        document.getElementById('answerInput').style.borderColor = isCorrect ? '#4caf50' : '#f44336';
    }
    
    if (isCorrect) {
        correctAnswers++;
        score += 10;
        showFeedback(true, question.explanation);
    } else {
        wrongAnswers++;
        errorLog.push({
            question: question.question.replace(/<[^>]*>/g, ''),
            correct: question.answer || question.options[question.correct],
            context: question.context
        });
        showFeedback(false, question.explanation);
    }
    
    document.getElementById('score').textContent = score;
    document.getElementById('checkBtn').classList.add('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
}

function showFeedback(isCorrect, explanation) {
    const feedbackBox = document.getElementById('feedbackBox');
    feedbackBox.classList.remove('hidden', 'correct', 'incorrect');
    feedbackBox.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    document.getElementById('feedbackIcon').textContent = isCorrect ? '✓' : '✗';
    document.getElementById('feedbackText').textContent = isCorrect ? 'Richtig!' : 'Leider falsch!';
    document.getElementById('feedbackExplanation').textContent = explanation;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('gameArea').classList.add('hidden');
    document.getElementById('resultScreen').classList.remove('hidden');
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;
    
    const percentage = (correctAnswers / currentQuestions.length) * 100;
    
    if (percentage >= 90) {
        document.getElementById('resultIcon').textContent = '🏆';
        document.getElementById('resultTitle').textContent = 'Excellent!';
        document.getElementById('resultMessage').textContent = 'Du beherrschst den Subjonctif perfekt!';
    } else if (percentage >= 70) {
        document.getElementById('resultIcon').textContent = '🎉';
        document.getElementById('resultTitle').textContent = 'Très bien!';
        document.getElementById('resultMessage').textContent = 'Du hast den Subjonctif gut verstanden!';
    } else if (percentage >= 50) {
        document.getElementById('resultIcon').textContent = '👍';
        document.getElementById('resultTitle').textContent = 'Pas mal!';
        document.getElementById('resultMessage').textContent = 'Du bist auf dem richtigen Weg!';
    } else {
        document.getElementById('resultIcon').textContent = '📚';
        document.getElementById('resultTitle').textContent = 'Encore un effort!';
        document.getElementById('resultMessage').textContent = 'Übe weiter, du schaffst das!';
    }
    
    const errorAnalysis = document.getElementById('errorAnalysis');
    if (errorLog.length > 0) {
        let html = '<h3>Fehleranalyse:</h3><ul>';
        errorLog.forEach(error => {
            html += `<li><strong>${error.question}</strong><br>Richtig: ${error.correct}<br><em>${error.context}</em></li>`;
        });
        html += '</ul>';
        errorAnalysis.innerHTML = html;
    } else {
        errorAnalysis.innerHTML = '';
    }
}

function restartLevel() {
    startLevel(currentLevel);
}

function backToLevels() {
    showLevelSelection();
}

function giveHint() {
    const question = currentQuestions[currentQuestionIndex];
    let hintText = '';
    
    if (currentLevel === 1) {
        hintText = `Die richtige Antwort beginnt mit "${question.options[question.correct].charAt(0)}"`;
    } else {
        hintText = `Die Antwort hat ${question.answer.length} Buchstaben und beginnt mit "${question.answer.charAt(0)}"`;
    }
    
    alert('💡 Hinweis: ' + hintText);
    hintsUsed++;
    score = Math.max(0, score - 2);
    document.getElementById('score').textContent = score;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !document.getElementById('checkBtn').classList.contains('hidden')) {
        checkAnswer();
    } else if (e.key === 'Enter' && !document.getElementById('nextBtn').classList.contains('hidden')) {
        nextQuestion();
    }
});
