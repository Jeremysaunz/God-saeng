const questions = [
    // --- 기상 및 아침 습관 (1~3) ---
    {
        id: 1,
        question: "1. 아침 알람 소리를 들었을 때 나는?",
        options: [
            { text: "벌떡 일어나서 바로 이불 개기", score: 10 },
            { text: "5분만... 스누즈 버튼 연타", score: 5 },
            { text: "알람 끄고 다시 꿈나라 여행", score: 0 }
        ]
    },
    {
        id: 2,
        question: "2. 아침 식사는 어떻게 하나요?",
        options: [
            { text: "영양 갖춘 식단 or 간단하게라도 챙김", score: 10 },
            { text: "커피 한 잔으로 떼움", score: 5 },
            { text: "아침 먹을 시간에 1분 더 잠", score: 0 }
        ]
    },
    {
        id: 3,
        question: "3. 출근/등교 준비 시간은?",
        options: [
            { text: "여유롭게 준비하고 뉴스/독서까지", score: 10 },
            { text: "딱 맞춰서 준비 끝!", score: 5 },
            { text: "매일 아침이 전쟁터 (지각 위기)", score: 0 }
        ]
    },

    // --- 업무/학업 및 생산성 (4~7) ---
    {
        id: 4,
        question: "4. 오늘 할 일(To-Do List)을 작성했나요?",
        options: [
            { text: "우선순위별로 완벽 정리", score: 10 },
            { text: "머릿속으로 대충 생각만 함", score: 5 },
            { text: "닥치는 대로 처리한다", score: 0 }
        ]
    },
    {
        id: 5,
        question: "5. 주말에 계획했던 일이 일찍 끝났다면?",
        options: [
            { text: "다음 주 할 일을 미리 해둔다", score: 10 },
            { text: "밀린 넷플릭스 몰아보기", score: 5 },
            { text: "일단 눕는다 (무념무상)", score: 2 }
        ]
    },
    {
        id: 6,
        question: "6. 집중력이 흐트러질 때는?",
        options: [
            { text: "잠깐 산책하거나 명상", score: 10 },
            { text: "SNS 켜서 숏폼 시청", score: 5 },
            { text: "그냥 멍 때리다 시간 보냄", score: 0 }
        ]
    },
    {
        id: 7,
        question: "7. 다음 주 주요 일정을 알고 있나요?",
        options: [
            { text: "캘린더에 완벽 정리됨", score: 10 },
            { text: "중요 약속 1~2개는 기억함", score: 5 },
            { text: "오늘이 며칠인지도 모름", score: 0 }
        ]
    },

    // --- 자기관리 및 건강 (8~11) ---
    {
        id: 8,
        question: "8. 새해 다이어트/운동 목표 현황은?",
        options: [
            { text: "주 3회 이상 꾸준히 실천 중", score: 10 },
            { text: "등록은 했는데 기부 천사 등극", score: 5 },
            { text: "숨쉬기 운동이 최고지", score: 0 }
        ]
    },
    {
        id: 9,
        question: "9. 영양제 챙겨 드시나요?",
        options: [
            { text: "종합비타민+유산균+@ (약국 수준)", score: 10 },
            { text: "생각날 때 한 번씩 먹음", score: 5 },
            { text: "밥이 보약, 안 먹음", score: 0 }
        ]
    },
    {
        id: 10,
        question: "10. 자기 전 스마트폰 사용은?",
        options: [
            { text: "수면 모드 켜고 바로 잠", score: 10 },
            { text: "딱 30분만 보다 잠", score: 5 },
            { text: "해 뜰 때까지 폰 보다 기절", score: 0 }
        ]
    },
    {
        id: 11,
        question: "11. 방 청소 주기는?",
        options: [
            { text: "먼지 한 톨 용납 못해 (매일)", score: 10 },
            { text: "주말에 몰아서 한 번에", score: 5 },
            { text: "발 디딜 곳만 있으면 OK", score: 0 }
        ]
    },

    // --- 소비 및 자기계발 (12~14) ---
    {
        id: 12,
        question: "12. 한 달 독서량은?",
        options: [
            { text: "최소 1권 이상 완독", score: 10 },
            { text: "책 사서 표지만 구경 중", score: 5 },
            { text: "글자는 메뉴판 볼 때만 읽음", score: 0 }
        ]
    },
    {
        id: 13,
        question: "13. 가계부 쓰시나요?",
        options: [
            { text: "어플로 10원 단위까지 기록", score: 10 },
            { text: "대략적인 지출만 파악", score: 5 },
            { text: "잔고 부족 문자 오면 확인", score: 0 }
        ]
    },
    {
        id: 14,
        question: "14. 자기계발(강의, 공부) 투자는?",
        options: [
            { text: "나를 위한 투자는 아끼지 않음", score: 10 },
            { text: "무료 강의 위주로 찾아봄", score: 5 },
            { text: "지금 사는 걸로도 벅참", score: 0 }
        ]
    },

    // --- 마인드셋 (15~16) ---
    {
        id: 15,
        question: "15. 갑작스러운 약속 제안, 당신의 반응은?",
        options: [
            { text: "오늘 루틴 깨져서 거절 (계획적)", score: 10 },
            { text: "오 좋아! 바로 콜 (융통성)", score: 5 },
            { text: "나가는 것 자체가 귀찮음 (집순이)", score: 0 }
        ]
    },
    {
        id: 16,
        question: "16. 나에게 '갓생'이란?",
        options: [
            { text: "매 순간 성장하는 치열한 삶", score: 10 },
            { text: "적당히 일하고 적당히 즐기는 삶", score: 6 },
            { text: "아무것도 안 해도 행복한 욜로", score: 2 }
        ]
    }
];

// 총점 만점: 160점
const results = [
    {
        minScore: 0,
        level: "Lv.1",
        title: "침대와 한몸 눕방 마스터",
        desc: "갓생보다는 '편안함'과 '여유'를 1순위로 두는 타입입니다. 침대는 과학이지만, 가끔은 광합성도 필요해요!",
        detail: "당신의 '갓생력'은 현재 충전이 필요한 상태입니다.\n아마도 최근 번아웃이 왔거나, 원래 여유로운 삶을 지향하는 성향일 수 있겠네요.\n남들의 갓생 기준에 맞추려 스트레스 받기보다는, 나만의 속도를 찾는 것이 중요합니다.\n\n💡 **Lv.1 일 때 추천하는 갓생 챌린지**\n- 아침에 눈 뜨자마자 이불 개기 (소요시간 10초)\n- 하루 물 1L 마시기\n- 잠들기 전 스마트폰 멀리 두기\n\n이것만 해도 상위 50% 진입 가능! 아주 작은 성공 경험부터 만들어보세요.",
        img: "😴"
    },
    {
        minScore: 50,
        level: "Lv.30",
        title: "의욕 충만 작심삼일 탈출가",
        desc: "마음만은 이미 갓생러! 하지만 실천이 조금 아쉬운 타입이네요.",
        detail: "시작이 반이라는 말이 딱 어울리는 당신.\n다이어리 첫 장은 항상 열심히 쓰지만, 뒤로 갈수록 공백이 많아지진 않나요?\n완벽하게 하려는 욕심 때문에 오히려 시작을 미루고 있을지도 모릅니다.\n\n💡 **Lv.30 탈출을 위한 솔루션**\n- 거창한 계획 대신 '하루 3가지'만 정하기\n- '완벽'보다는 '완료'를 목표로 하기\n- 습관 형성 앱(Habit Tracker) 사용해보기\n\n꾸준함 1스푼만 더하면 Lv.70으로 금방 승급할 수 있습니다!",
        img: "🐣"
    },
    {
        minScore: 100,
        title: "Lv.70 효율 추구 스마트 갓생러",
        desc: "일과 삶의 밸런스를 아는 능력자! 남들보다 24시간을 알차게 쓰고 계시군요.",
        detail: "선택과 집중을 잘하며, 효율적으로 하루를 보내는 당신.\n이미 주변에서는 '너 진짜 열심히 산다'는 소리를 듣고 계시겠네요.\n당신에게 필요한 건 더 많은 노력이 아니라, 방향성 점검입니다.\n\n💡 **Lv.999로 가기 위한 부스터**\n- 단순 반복 업무는 자동화하거나 위임하기\n- 인풋(독서/강의)을 넘어 아웃풋(기록/공유) 만들기\n- 사이드 프로젝트 시작해보기\n\n이미 충분히 훌륭합니다. 이제 당신만의 브랜드를 만들어보세요!",
        img: "✨"
    },
    {
        minScore: 135,
        title: "Lv.999 전설의 갓생 황제",
        desc: "혹시 AI 아니세요? 숨만 쉬어도 생산성이 폭발하는 인간 문화재급 갓생러입니다.",
        detail: "자기관리, 시간관리, 멘탈관리까지 완벽한 육각형 인간!\n당신의 하루는 타의 모범이 되고 있습니다. 이제는 혼자만 알기 아까운 수준이네요.\n\n💡 **당신이 해야 할 일**\n- 노하우 전자책 출판 또는 유튜브 시작\n- 갓생 커뮤니티 리더 되기\n- 번아웃이 오지 않도록 '멍 때리는 시간' 강제 배정하기\n\n당신의 갓생 비법을 세상에 널리 알려주세요!",
        img: "👑"
    }
];

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

    if (currentStep < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    // 결과 산출 로직
    const finalResult = results.slice().reverse().find(r => totalScore >= r.minScore);

    // UI 업데이트
    // 최고 레벨 표기를 포함하여 텍스트 구성
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
    if (navigator.share) {
        navigator.share({
            title: '갓생 능력치 테스트',
            text: `나의 갓생 레벨은? ${resultTitleEl.textContent}\n\n${resultDescEl.textContent}`,
            url: window.location.href,
        }).catch(err => {
            console.log('공유 실패', err);
        });
    } else {
        const dummy = document.createElement('textarea');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert("링크가 복사되었습니다!");
    }
}
