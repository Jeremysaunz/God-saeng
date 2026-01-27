// God-saeng Test - 메인 스크립트
// i18n.js가 먼저 로드되어야 함

let currentStep = 0;
let totalScore = 0;

const homeSection = document.getElementById('home');
const quizSection = document.getElementById('quiz');
const resultSection = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const qNumberEl = document.getElementById('q-number');

// 결과 요소
const resultLevelEl = document.getElementById('result-level');
const resultTitleEl = document.getElementById('result-title');
const resultDescEl = document.getElementById('result-desc');
const resultDetailEl = document.getElementById('result-detail');
const resultImgEl = document.getElementById('result-img');

function startTest() {
    homeSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    currentStep = 0;
    totalScore = 0;
    showQuestion();
}

function showQuestion() {
    const questions = getQuestions();
    const q = questions[currentStep];

    // 질문 번호 업데이트
    qNumberEl.textContent = `Q. ${currentStep + 1} / ${questions.length}`;

    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';

    // 진행바 업데이트
    const progress = ((currentStep) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.classList.add('btn', 'btn-option');
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(opt.score);
        optionsEl.appendChild(btn);
    });
}

function selectOption(score) {
    totalScore += score;
    currentStep++;

    const questions = getQuestions();
    if (currentStep < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    const results = getResults();
    // 결과 산출 로직
    const finalResult = results.slice().reverse().find(r => totalScore >= r.minScore);

    // UI 업데이트
    resultLevelEl.textContent = finalResult.level ? `${finalResult.level} (Max Lv.999)` : "";
    resultTitleEl.textContent = finalResult.title;
    resultDescEl.textContent = finalResult.desc;

    // 상세 내용 줄바꿈 처리
    resultDetailEl.innerHTML = finalResult.detail.replace(/\n/g, '<br>');

    resultImgEl.textContent = finalResult.img;

    // 최종바 100%
    progressBar.style.width = '100%';
}

function restartTest() {
    resultSection.classList.add('hidden');
    homeSection.classList.remove('hidden');
}

function shareResult() {
    const t = getTranslation();
    if (navigator.share) {
        navigator.share({
            title: t.title,
            text: `${resultTitleEl.textContent}\n\n${resultDescEl.textContent}`,
            url: window.location.href,
        }).catch(err => {
            console.log('Share failed', err);
        });
    } else {
        const dummy = document.createElement('textarea');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert(t.linkCopied);
    }
}
