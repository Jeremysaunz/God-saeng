// 다국어 지원 (한국어, 영어, 스페인어, 베트남어, 일본어)
const translations = {
    ko: {
        langName: "한국어",
        title: "갓생 능력치 테스트",
        subtitle: "나의 갓생 농도는 몇 %일까?",
        description: "매일매일 성장하고 싶은 당신,<br>지금 당신의 라이프스타일 패턴을 분석해<br>숨겨진 <strong>'갓생력'</strong>을 찾아드립니다.",
        startBtn: "테스트 시작하기",
        shareBtn: "친구에게 공유하기 💌",
        restartBtn: "다시 하기",
        resultTitle: "나의 테스트 결과는?",
        linkCopied: "링크가 복사되었습니다!",
        footer: { privacy: "개인정보처리방침", terms: "이용약관", contact: "문의" },
        questions: [
            {
                question: "1. 아침 알람 소리를 들었을 때 나는?",
                options: [
                    { text: "벌떡 일어나서 바로 이불 개기", score: 10 },
                    { text: "5분만... 스누즈 버튼 연타", score: 5 },
                    { text: "알람 끄고 다시 꿈나라 여행", score: 0 }
                ]
            },
            {
                question: "2. 아침 식사는 어떻게 하나요?",
                options: [
                    { text: "영양 갖춘 식단 or 간단하게라도 챙김", score: 10 },
                    { text: "커피 한 잔으로 떼움", score: 5 },
                    { text: "아침 먹을 시간에 1분 더 잠", score: 0 }
                ]
            },
            {
                question: "3. 출근/등교 준비 시간은?",
                options: [
                    { text: "여유롭게 준비하고 뉴스/독서까지", score: 10 },
                    { text: "딱 맞춰서 준비 끝!", score: 5 },
                    { text: "매일 아침이 전쟁터 (지각 위기)", score: 0 }
                ]
            },
            {
                question: "4. 오늘 할 일(To-Do List)을 작성했나요?",
                options: [
                    { text: "우선순위별로 완벽 정리", score: 10 },
                    { text: "머릿속으로 대충 생각만 함", score: 5 },
                    { text: "닥치는 대로 처리한다", score: 0 }
                ]
            },
            {
                question: "5. 주말에 계획했던 일이 일찍 끝났다면?",
                options: [
                    { text: "다음 주 할 일을 미리 해둔다", score: 10 },
                    { text: "밀린 넷플릭스 몰아보기", score: 5 },
                    { text: "일단 눕는다 (무념무상)", score: 2 }
                ]
            },
            {
                question: "6. 집중력이 흐트러질 때는?",
                options: [
                    { text: "잠깐 산책하거나 명상", score: 10 },
                    { text: "SNS 켜서 숏폼 시청", score: 5 },
                    { text: "그냥 멍 때리다 시간 보냄", score: 0 }
                ]
            },
            {
                question: "7. 다음 주 주요 일정을 알고 있나요?",
                options: [
                    { text: "캘린더에 완벽 정리됨", score: 10 },
                    { text: "중요 약속 1~2개는 기억함", score: 5 },
                    { text: "오늘이 며칠인지도 모름", score: 0 }
                ]
            },
            {
                question: "8. 새해 다이어트/운동 목표 현황은?",
                options: [
                    { text: "주 3회 이상 꾸준히 실천 중", score: 10 },
                    { text: "등록은 했는데 기부 천사 등극", score: 5 },
                    { text: "숨쉬기 운동이 최고지", score: 0 }
                ]
            },
            {
                question: "9. 영양제 챙겨 드시나요?",
                options: [
                    { text: "종합비타민+유산균+@ (약국 수준)", score: 10 },
                    { text: "생각날 때 한 번씩 먹음", score: 5 },
                    { text: "밥이 보약, 안 먹음", score: 0 }
                ]
            },
            {
                question: "10. 자기 전 스마트폰 사용은?",
                options: [
                    { text: "수면 모드 켜고 바로 잠", score: 10 },
                    { text: "딱 30분만 보다 잠", score: 5 },
                    { text: "해 뜰 때까지 폰 보다 기절", score: 0 }
                ]
            },
            {
                question: "11. 방 청소 주기는?",
                options: [
                    { text: "먼지 한 톨 용납 못해 (매일)", score: 10 },
                    { text: "주말에 몰아서 한 번에", score: 5 },
                    { text: "발 디딜 곳만 있으면 OK", score: 0 }
                ]
            },
            {
                question: "12. 한 달 독서량은?",
                options: [
                    { text: "최소 1권 이상 완독", score: 10 },
                    { text: "책 사서 표지만 구경 중", score: 5 },
                    { text: "글자는 메뉴판 볼 때만 읽음", score: 0 }
                ]
            },
            {
                question: "13. 가계부 쓰시나요?",
                options: [
                    { text: "어플로 10원 단위까지 기록", score: 10 },
                    { text: "대략적인 지출만 파악", score: 5 },
                    { text: "잔고 부족 문자 오면 확인", score: 0 }
                ]
            },
            {
                question: "14. 자기계발(강의, 공부) 투자는?",
                options: [
                    { text: "나를 위한 투자는 아끼지 않음", score: 10 },
                    { text: "무료 강의 위주로 찾아봄", score: 5 },
                    { text: "지금 사는 걸로도 벅참", score: 0 }
                ]
            },
            {
                question: "15. 갑작스러운 약속 제안, 당신의 반응은?",
                options: [
                    { text: "오늘 루틴 깨져서 거절 (계획적)", score: 10 },
                    { text: "오 좋아! 바로 콜 (융통성)", score: 5 },
                    { text: "나가는 것 자체가 귀찮음 (집순이)", score: 0 }
                ]
            },
            {
                question: "16. 나에게 '갓생'이란?",
                options: [
                    { text: "매 순간 성장하는 치열한 삶", score: 10 },
                    { text: "적당히 일하고 적당히 즐기는 삶", score: 6 },
                    { text: "아무것도 안 해도 행복한 욜로", score: 2 }
                ]
            }
        ],
        results: [
            { minScore: 0, level: "Lv.1", title: "신생아 갓생러", img: "🍼", desc: "응애! 이제 막 눈을 떴어요.", detail: "갓생의 세계에 오신 것을 환영합니다.\n💡 미션: 아침에 눈 뜨면 기지개 켜기부터!" },
            { minScore: 8, level: "Lv.50", title: "침대 지박령", img: "🛌", desc: "이불 밖은 위험해... 편안함이 최고!", detail: "아직은 에너지를 비축하는 중입니다.\n💡 미션: 하루 한 번 이불 밖으로 탈출하기" },
            { minScore: 16, level: "Lv.100", title: "작심삼초 마스터", img: "⚡", desc: "결심은 1초 컷, 포기도 LTE급.", detail: "의욕은 넘치지만 지속력이 부족하네요.\n💡 꿀팁: 거창한 계획 대신 '물 마시기'부터!" },
            { minScore: 24, level: "Lv.150", title: "게으른 완벽주의자", img: "🤔", desc: "계획만 짜다 하루가 다 가버림.", detail: "완벽하지 않아도 괜찮아요. 일단 시작하세요!\n💡 솔루션: 생각 끄고 5초 안에 몸 움직이기" },
            { minScore: 32, level: "Lv.200", title: "느림의 미학", img: "🐢", desc: "거북이도 갓생이다! 천천히 가도 괜찮아.", detail: "나만의 속도로 꾸준히 가는 것이 중요합니다.\n💡 조언: 남들과 비교하지 말기" },
            { minScore: 40, level: "Lv.250", title: "간헐적 갓생러", img: "🎢", desc: "삘 받으면 달리고, 아니면 멈춤.", detail: "기복이 심한 편이군요. 꾸준함이 필요해요.\n💡 미션: 루틴 한 가지만 딱 정해서 3일 지키기" },
            { minScore: 48, level: "Lv.300", title: "생존형 갓생러", img: "🔥", desc: "마감 직전에 초능력을 발휘함.", detail: "벼락치기의 신! 평소에 조금씩 해두면 더 완벽할 텐데.\n💡 팁: 마감일 하루 전을 '진짜 마감'으로 설정" },
            { minScore: 56, level: "Lv.350", title: "갓생 맛보기", img: "🥄", desc: "이것저것 찍먹해보는 호기심 대장.", detail: "다양한 경험도 좋지만 깊이가 필요할 때.\n💡 챌린지: 한 가지 취미 1달 이상 유지하기" },
            { minScore: 64, level: "Lv.400", title: "새싹 갓생러", img: "🌱", desc: "광합성 중... 무럭무럭 자라는 중!", detail: "성장의 가능성이 무궁무진합니다.\n💡 부스터: 긍정적인 확언으로 하루 시작하기" },
            { minScore: 72, level: "Lv.450", title: "성장통 겪는 중", img: "🩹", desc: "아프니까 갓생이다. 시행착오 중.", detail: "실패는 성공의 어머니! 포기하지 마세요.\n💡 위로: 오늘 하루 고생한 나에게 칭찬 한마디" },
            { minScore: 80, level: "Lv.500", title: "평범한 지구인", img: "🌍", desc: "일과 삶의 조화를 아는 밸런스 장인.", detail: "가장 안정적인 상태입니다. 조금만 더 노력하면 상위권!\n💡 목표: 생산성 앱 하나 활용해보기" },
            { minScore: 88, level: "Lv.550", title: "성실한 거북이", img: "🏗️", desc: "느리지만 확실하게! 꾸준함이 무기.", detail: "당신의 끈기는 언젠가 빛을 발할 것입니다.\n💡 추천: 매일 감사일기 한 줄 쓰기" },
            { minScore: 96, level: "Lv.600", title: "계획 실천가", img: "📝", desc: "J형 인간으로 진화 중! 체크리스트 마니아.", detail: "계획한 것을 하나씩 지워가는 쾌감을 즐기시네요.\n💡 다음 단계: 주간/월간 목표 세우기" },
            { minScore: 104, level: "Lv.650", title: "모닝 루틴 마스터", img: "☀️", desc: "일찍 일어나는 새가 피곤... 아니, 성공한다!", detail: "아침 시간을 지배하는 자가 하루를 지배합니다.\n💡 미션: 미라클 모닝 챌린지 도전" },
            { minScore: 112, level: "Lv.700", title: "자기계발 덕후", img: "📚", desc: "성장이 취미이자 특기. 배움에 끝은 없다.", detail: "끊임없이 배우는 자세가 멋집니다.\n💡 확장: 배운 것을 블로그나 SNS에 공유하기" },
            { minScore: 120, level: "Lv.750", title: "시간의 마법사", img: "⏳", desc: "24시간을 48시간처럼 쓰는 효율의 신.", detail: "시간 관리 능력이 탁월하시군요!\n💡 공유: 친구들에게 나만의 시간 관리 팁 전수" },
            { minScore: 128, level: "Lv.800", title: "프로 갓생러", img: "✨", desc: "폼 미쳤다! 어디서나 빛나는 존재.", detail: "주변 사람들에게 긍정적인 영향을 주고 계시네요.\n💡 리더십: 스터디나 모임장 맡아보기" },
            { minScore: 136, level: "Lv.850", title: "걸어다니는 자기계발서", img: "📖", desc: "내 뱉는 말이 곧 명언. 인간 명언 제조기.", detail: "당신의 삶 자체가 누군가에게는 교과서입니다.\n💡 기록: 에세이나 회고록 써보기" },
            { minScore: 144, level: "Lv.900", title: "갓생계의 아이돌", img: "🌟", desc: "팔로워를 부르는 삶. 모두가 당신을 주목해.", detail: "영향력이 큰 만큼 책임감도 따르는 법.\n💡 퍼스널 브랜딩: 나만의 브랜드 만들기" },
            { minScore: 152, level: "Lv.999", title: "전설의 갓생 황제", img: "👑", desc: "숨만 쉬어도 생산성 폭발! 탈인간급 경지.", detail: "갓생 그 자체. 더 이상 오를 곳이 없...을까요?\n💡 초월: 후배 양성 및 재능 기부" }
        ],
        faq: {
            title: "💡 자주 묻는 질문 (FAQ)",
            items: [
                { q: "Q. 갓생(God-saeng)이란 무엇인가요?", a: "'신(God)'과 '인생(Life)'을 합친 신조어로, 하루하루 계획적이고 부지런하게 살며 성취감을 느끼는 삶을 의미합니다. 거창한 성공보다는 소소한 습관 들이기—예를 들어 '아침에 이불 개기', '물 2리터 마시기'—부터 시작하는 것이 핵심입니다." },
                { q: "Q. 갓생 능력치 테스트는 무엇인가요?", a: "여러분의 생활 습관과 마인드셋을 분석하여 현재의 '갓생력' 레벨을 진단해주는 심리 테스트입니다. MBTI 성격 유형 이론과 행동 심리학을 기반으로 재미있게 구성되었습니다." },
                { q: "Q. 갓생 살기 위한 모닝 루틴 추천 BEST 3", a: "<strong>1. 미라클 모닝 명상:</strong> 일어나자마자 5분간 명상을 하면 코르티솔 수치가 낮아지고 하루의 집중력이 높아집니다.<br><strong>2. 이부자리 정리:</strong> 사소해 보이지만, 하루의 첫 번째 과업을 달성했다는 성취감이 뇌를 긍정적으로 자극합니다.<br><strong>3. 투두리스트(To-Do List) 작성:</strong> 오늘 꼭 해야 할 일 3가지만 적어보세요. 우선순위가 명확해지면 실행력이 배가 됩니다." },
                { q: "Q. 생산성을 높여주는 필수 앱 추천", a: "뽀모도로 타이머, 노션(Notion), 혹은 간단한 습관 추적(Habit Tracker) 어플리케이션을 활용해보세요. 도구를 적절히 활용하면 의지력을 아낄 수 있습니다." }
            ]
        }
    },
    en: {
        langName: "English",
        title: "God-Life Level Test",
        subtitle: "How productive is your lifestyle?",
        description: "For those who want to grow every day,<br>Let's analyze your lifestyle patterns<br>and discover your hidden <strong>'productivity power'</strong>.",
        startBtn: "Start Test",
        shareBtn: "Share with Friends 💌",
        restartBtn: "Try Again",
        resultTitle: "Your Result:",
        linkCopied: "Link copied!",
        footer: { privacy: "Privacy Policy", terms: "Terms of Service", contact: "Contact" },
        questions: [
            {
                question: "1. When you hear your morning alarm?",
                options: [
                    { text: "Jump up and make the bed immediately", score: 10 },
                    { text: "Just 5 more minutes... hit snooze", score: 5 },
                    { text: "Turn off alarm and go back to dreamland", score: 0 }
                ]
            },
            {
                question: "2. How do you handle breakfast?",
                options: [
                    { text: "Eat a nutritious meal or at least something", score: 10 },
                    { text: "Just grab a cup of coffee", score: 5 },
                    { text: "Sleep 1 more minute instead of eating", score: 0 }
                ]
            },
            {
                question: "3. Your morning preparation time?",
                options: [
                    { text: "Prepare leisurely, even read news/books", score: 10 },
                    { text: "Just enough time to get ready", score: 5 },
                    { text: "Every morning is a battlefield (almost late)", score: 0 }
                ]
            },
            {
                question: "4. Did you write your To-Do List today?",
                options: [
                    { text: "Perfectly organized by priority", score: 10 },
                    { text: "Just mentally noted some things", score: 5 },
                    { text: "Handle things as they come", score: 0 }
                ]
            },
            {
                question: "5. If your weekend plans finish early?",
                options: [
                    { text: "Start next week's tasks in advance", score: 10 },
                    { text: "Binge-watch Netflix", score: 5 },
                    { text: "Just lie down (zone out)", score: 2 }
                ]
            },
            {
                question: "6. When you lose focus?",
                options: [
                    { text: "Take a short walk or meditate", score: 10 },
                    { text: "Check social media and watch short videos", score: 5 },
                    { text: "Just space out and waste time", score: 0 }
                ]
            },
            {
                question: "7. Do you know next week's schedule?",
                options: [
                    { text: "Everything is perfectly in my calendar", score: 10 },
                    { text: "Remember 1-2 important appointments", score: 5 },
                    { text: "Don't even know what day it is today", score: 0 }
                ]
            },
            {
                question: "8. Your New Year's exercise goal status?",
                options: [
                    { text: "Consistently exercising 3+ times a week", score: 10 },
                    { text: "Signed up but donating my membership", score: 5 },
                    { text: "Breathing is the best exercise", score: 0 }
                ]
            },
            {
                question: "9. Do you take supplements?",
                options: [
                    { text: "Multivitamins + probiotics + more (pharmacy level)", score: 10 },
                    { text: "Take them occasionally when I remember", score: 5 },
                    { text: "Food is medicine, don't take any", score: 0 }
                ]
            },
            {
                question: "10. Smartphone use before bed?",
                options: [
                    { text: "Sleep mode on, go straight to sleep", score: 10 },
                    { text: "Just 30 minutes then sleep", score: 5 },
                    { text: "Use phone until sunrise then pass out", score: 0 }
                ]
            },
            {
                question: "11. How often do you clean your room?",
                options: [
                    { text: "Can't tolerate a speck of dust (daily)", score: 10 },
                    { text: "All at once on weekends", score: 5 },
                    { text: "As long as there's space to walk, OK", score: 0 }
                ]
            },
            {
                question: "12. How many books do you read per month?",
                options: [
                    { text: "At least 1 book completed", score: 10 },
                    { text: "Buy books but only look at covers", score: 5 },
                    { text: "Only read menus", score: 0 }
                ]
            },
            {
                question: "13. Do you keep a budget/expense log?",
                options: [
                    { text: "Record every cent with an app", score: 10 },
                    { text: "Roughly track my spending", score: 5 },
                    { text: "Only check when I get 'low balance' alert", score: 0 }
                ]
            },
            {
                question: "14. Self-improvement investments?",
                options: [
                    { text: "Never hesitate to invest in myself", score: 10 },
                    { text: "Mostly look for free courses", score: 5 },
                    { text: "Barely managing current life", score: 0 }
                ]
            },
            {
                question: "15. When someone suggests a sudden plan?",
                options: [
                    { text: "Decline because it breaks my routine", score: 10 },
                    { text: "Oh nice! I'm in (flexible)", score: 5 },
                    { text: "Going out itself is too bothersome", score: 0 }
                ]
            },
            {
                question: "16. What does 'productive life' mean to you?",
                options: [
                    { text: "An intense life of constant growth", score: 10 },
                    { text: "Work moderately, enjoy moderately", score: 6 },
                    { text: "YOLO - happy doing nothing", score: 2 }
                ]
            }
        ],
        results: [
            { minScore: 0, level: "Lv.1", title: "Newborn God-saeng", img: "🍼", desc: "Goo-goo gaga! Just opened your eyes.", detail: "Welcome to the world of productivity.\n💡 Mission: Stretch as soon as you wake up!" },
            { minScore: 8, level: "Lv.50", title: "Bed Ghost", img: "🛌", desc: "Outside is dangerous... Comfort is key!", detail: "You are conserving energy right now.\n💡 Mission: Escape the blanket once a day" },
            { minScore: 16, level: "Lv.100", title: "Three-Day Monk", img: "⚡", desc: "Resolutions last 3 seconds. Giving up is LTE speed.", detail: "Full of motivation but lacking persistence.\n💡 Tip: Start with 'drinking water' instead of grand plans!" },
            { minScore: 24, level: "Lv.150", title: "Lazy Perfectionist", img: "🤔", desc: "Planning all day, ending up doing nothing.", detail: "Done is better than perfect. Just start!\n💡 Solution: Stop thinking and move within 5 seconds" },
            { minScore: 32, level: "Lv.200", title: "Aesthetics of Slowness", img: "🐢", desc: "Even turtles finish the race! Slow is okay.", detail: "Going at your own pace is what matters.\n💡 Advice: Don't compare yourself to others" },
            { minScore: 40, level: "Lv.250", title: "Intermittent Achiever", img: "🎢", desc: "Runs when inspired, stops when not.", detail: "A bit inconsistent. You need routine.\n💡 Mission: Stick to just one routine for 3 days" },
            { minScore: 48, level: "Lv.300", title: "Survivalist", img: "🔥", desc: "Superpowers activate right before the deadline.", detail: "God of cramming! Would be perfect if done earlier.\n💡 Tip: Set your 'real deadline' one day prior" },
            { minScore: 56, level: "Lv.350", title: "The Taster", img: "🥄", desc: "Curious about everything, committed to nothing.", detail: "Experience is good, but depth is needed.\n💡 Challenge: Keep one hobby for over a month" },
            { minScore: 64, level: "Lv.400", title: "Sprout God-saeng", img: "🌱", desc: "Photosynthesizing... Growing day by day!", detail: "Your potential for growth is limitless.\n💡 Booster: Start the day with positive affirmations" },
            { minScore: 72, level: "Lv.450", title: "Growing Pains", img: "🩹", desc: "No pain, no gain. Going through trial and error.", detail: "Failure is the mother of success! Don't give up.\n💡 Comfort: Praise yourself for today's hard work" },
            { minScore: 80, level: "Lv.500", title: "Ordinary Earthling", img: "🌍", desc: "Master of work-life balance.", detail: "Most stable state. A little more effort for the top!\n💡 Goal: Try using one productivity app" },
            { minScore: 88, level: "Lv.550", title: "Consistent Turtle", img: "🏗️", desc: "Slow but sure! Consistency is your weapon.", detail: "Your persistence will shine someday.\n💡 Recommend: Write one line of gratitude journal daily" },
            { minScore: 96, level: "Lv.600", title: "Action Planner", img: "📝", desc: "Evolving into J-type! Checklist maniac.", detail: "You enjoy the thrill of checking off tasks.\n💡 Next Step: Set weekly/monthly goals" },
            { minScore: 104, level: "Lv.650", title: "Morning Routine Master", img: "☀️", desc: "The early bird gets... tired? No, successful!", detail: "He who conquers the morning conquers the day.\n💡 Mission: Challenge the Miracle Morning" },
            { minScore: 112, level: "Lv.700", title: "Self-Improvement Geek", img: "📚", desc: "Growth is a hobby. Learning never ends.", detail: "Your attitude towards learning is cool.\n💡 Expand: Share what you learned on social media" },
            { minScore: 120, level: "Lv.750", title: "Time Wizard", img: "⏳", desc: "Using 24 hours like 48 hours. Efficiency god.", detail: "Excellent time management skills!\n💡 Share: Teach your time management tips to friends" },
            { minScore: 128, level: "Lv.800", title: "Pro God-saeng", img: "✨", desc: "Crazy form! Shining wherever you go.", detail: "You're positively influencing those around you.\n💡 Leadership: Lead a study group or meeting" },
            { minScore: 136, level: "Lv.850", title: "Walking Self-Help Book", img: "📖", desc: "Every word is a quote. Walking wisdom.", detail: "Your life itself is a textbook for someone.\n💡 Record: Write essays or a memoir" },
            { minScore: 144, level: "Lv.900", title: "God-saeng Idol", img: "🌟", desc: "A life that attracts followers. All eyes on you.", detail: "With great influence comes great responsibility.\n💡 Branding: Build your personal brand" },
            { minScore: 152, level: "Lv.999", title: "Legendary Emperor", img: "👑", desc: "Productivity explodes just by breathing!", detail: "God-saeng itself. Is there any higher place?\n💡 Transcendence: Mentor juniors and donate talents" }
        ],
        faq: {
            title: "💡 Frequently Asked Questions (FAQ)",
            items: [
                { q: "Q. What is 'God-saeng'?", a: "It's a portmanteau of 'God' and 'Saeng' (Life), referring to a lifestyle focused on diligence, productivity, and small daily achievements. It's not about grand success, but about building positive habits like making your bed or drinking enough water." },
                { q: "Q. What is the God-Life Level Test?", a: "It's a psychological test that analyzes your lifestyle patterns and mindset to diagnose your 'God-Life' (productivity) level. It's based on MBTI personality theories and behavioral psychology." },
                { q: "Q. Best 3 Morning Routines for a Productive Day", a: "<strong>1. Miracle Morning Meditation:</strong> Meditating for 5 minutes right after waking up lowers cortisol and boosts focus.<br><strong>2. Making Your Bed:</strong> A small achievement that positively stimulates your brain for the day.<br><strong>3. To-Do List:</strong> Write down just 3 things you must do today. Prioritizing doubles your execution power." },
                { q: "Q. Recommended Productivity Apps", a: "Try using Pomodoro timers, Notion, or simple Habit Trackers. Using the right tools can save your willpower." }
            ]
        }
    },
    es: {
        langName: "Español",
        title: "Test de Nivel de Vida Productiva",
        subtitle: "¿Qué tan productivo es tu estilo de vida?",
        description: "Para quienes quieren crecer cada día,<br>Analicemos tus patrones de vida<br>y descubre tu <strong>'poder de productividad'</strong> oculto.",
        startBtn: "Iniciar Test",
        shareBtn: "Compartir 💌",
        restartBtn: "Intentar de Nuevo",
        resultTitle: "Tu Resultado:",
        linkCopied: "¡Enlace copiado!",
        footer: { privacy: "Política de Privacidad", terms: "Términos de Servicio", contact: "Contacto" },
        questions: [
            {
                question: "1. ¿Cuando suena tu alarma?",
                options: [
                    { text: "Me levanto y hago la cama inmediatamente", score: 10 },
                    { text: "5 minutos más... posponer", score: 5 },
                    { text: "Apago la alarma y vuelvo a dormir", score: 0 }
                ]
            },
            {
                question: "2. ¿Cómo manejas el desayuno?",
                options: [
                    { text: "Como algo nutritivo o al menos algo", score: 10 },
                    { text: "Solo tomo un café", score: 5 },
                    { text: "Duermo 1 minuto más en vez de comer", score: 0 }
                ]
            },
            {
                question: "3. ¿Tu tiempo de preparación matutina?",
                options: [
                    { text: "Me preparo con calma, incluso leo", score: 10 },
                    { text: "Justo el tiempo necesario", score: 5 },
                    { text: "¡Cada mañana es una batalla!", score: 0 }
                ]
            },
            {
                question: "4. ¿Escribiste tu lista de tareas hoy?",
                options: [
                    { text: "Perfectamente organizada por prioridad", score: 10 },
                    { text: "Solo las anoté mentalmente", score: 5 },
                    { text: "Hago las cosas según vienen", score: 0 }
                ]
            },
            {
                question: "5. ¿Si tus planes del fin de semana terminan temprano?",
                options: [
                    { text: "Adelanto tareas de la próxima semana", score: 10 },
                    { text: "Maratón de Netflix", score: 5 },
                    { text: "Solo me acuesto", score: 2 }
                ]
            },
            {
                question: "6. ¿Cuando pierdes la concentración?",
                options: [
                    { text: "Camino un poco o medito", score: 10 },
                    { text: "Reviso redes sociales", score: 5 },
                    { text: "Me quedo mirando la nada", score: 0 }
                ]
            },
            {
                question: "7. ¿Conoces tu agenda de la próxima semana?",
                options: [
                    { text: "Todo perfectamente en mi calendario", score: 10 },
                    { text: "Recuerdo 1-2 citas importantes", score: 5 },
                    { text: "Ni sé qué día es hoy", score: 0 }
                ]
            },
            {
                question: "8. ¿Tu meta de ejercicio de año nuevo?",
                options: [
                    { text: "Ejercito 3+ veces por semana", score: 10 },
                    { text: "Me inscribí pero no voy", score: 5 },
                    { text: "Respirar es el mejor ejercicio", score: 0 }
                ]
            },
            {
                question: "9. ¿Tomas suplementos?",
                options: [
                    { text: "Multivitaminas + probióticos + más", score: 10 },
                    { text: "A veces cuando me acuerdo", score: 5 },
                    { text: "La comida es medicina", score: 0 }
                ]
            },
            {
                question: "10. ¿Uso del celular antes de dormir?",
                options: [
                    { text: "Modo sueño activado, a dormir", score: 10 },
                    { text: "Solo 30 minutos", score: 5 },
                    { text: "Uso el celular hasta el amanecer", score: 0 }
                ]
            },
            {
                question: "11. ¿Con qué frecuencia limpias tu cuarto?",
                options: [
                    { text: "No tolero ni una mota de polvo (diario)", score: 10 },
                    { text: "Todo junto los fines de semana", score: 5 },
                    { text: "Si hay espacio para caminar, OK", score: 0 }
                ]
            },
            {
                question: "12. ¿Cuántos libros lees al mes?",
                options: [
                    { text: "Al menos 1 libro completo", score: 10 },
                    { text: "Compro libros pero solo miro portadas", score: 5 },
                    { text: "Solo leo menús", score: 0 }
                ]
            },
            {
                question: "13. ¿Llevas un registro de gastos?",
                options: [
                    { text: "Registro cada centavo con una app", score: 10 },
                    { text: "Sigo mis gastos aproximadamente", score: 5 },
                    { text: "Solo reviso cuando tengo saldo bajo", score: 0 }
                ]
            },
            {
                question: "14. ¿Inversión en desarrollo personal?",
                options: [
                    { text: "Nunca dudo en invertir en mí", score: 10 },
                    { text: "Busco cursos gratuitos", score: 5 },
                    { text: "Apenas manejo mi vida actual", score: 0 }
                ]
            },
            {
                question: "15. ¿Cuando alguien sugiere un plan repentino?",
                options: [
                    { text: "Rechazo porque rompe mi rutina", score: 10 },
                    { text: "¡Genial! Me apunto", score: 5 },
                    { text: "Salir en sí es muy molesto", score: 0 }
                ]
            },
            {
                question: "16. ¿Qué significa 'vida productiva' para ti?",
                options: [
                    { text: "Una vida intensa de crecimiento constante", score: 10 },
                    { text: "Trabajar moderadamente, disfrutar moderadamente", score: 6 },
                    { text: "YOLO - feliz sin hacer nada", score: 2 }
                ]
            }
        ],
        results: [
            { minScore: 0, level: "Lv.1", title: "Recién Nacido God-saeng", img: "🍼", desc: "¡Goo-goo da-da! Acabas de abrir los ojos.", detail: "Bienvenido al mundo de la productividad.\n💡 Misión: ¡Estírate tan pronto como despiertes!" },
            { minScore: 8, level: "Lv.50", title: "Fantasma de Cama", img: "🛌", desc: "Afuera es peligroso... ¡La comodidad es clave!", detail: "Estás conservando energía en este momento.\n💡 Misión: Escápate de la manta una vez al día" },
            { minScore: 16, level: "Lv.100", title: "Monje de Tres Días", img: "⚡", desc: "Las resoluciones duran 3 segundos.", detail: "Lleno de motivación pero falta persistencia.\n💡 Consejo: ¡Empieza bebiendo agua en vez de grandes planes!" },
            { minScore: 24, level: "Lv.150", title: "Perfeccionista Perezoso", img: "🤔", desc: "Planeando todo el día, terminando sin hacer nada.", detail: "Hecho es mejor que perfecto. ¡Solo empieza!\n💡 Solución: Deja de pensar y muévete en 5 segundos" },
            { minScore: 32, level: "Lv.200", title: "Estética de la Lentitud", img: "🐢", desc: "¡Las tortugas también terminan la carrera!", detail: "Ir a tu propio ritmo es lo que importa.\n💡 Consejo: No te compares con los demás" },
            { minScore: 40, level: "Lv.250", title: "Triunfador Intermitente", img: "🎢", desc: "Corre cuando se inspira, se detiene cuando no.", detail: "Un poco inconsistente. Necesitas rutina.\n💡 Misión: Mantén una sola rutina por 3 días" },
            { minScore: 48, level: "Lv.300", title: "Superviviente", img: "🔥", desc: "Superpoderes activados justo antes del plazo.", detail: "¡Dios de estudiar a última hora! Sería perfecto antes.\n💡 Consejo: Fija tu 'plazo real' un día antes" },
            { minScore: 56, level: "Lv.350", title: "El Catador", img: "🥄", desc: "Curioso por todo, comprometido con nada.", detail: "La experiencia es buena, pero se necesita profundidad.\n💡 Desafío: Mantén un hobby por más de un mes" },
            { minScore: 64, level: "Lv.400", title: "Brote God-saeng", img: "🌱", desc: "Fotosíntesis... ¡Creciendo día a día!", detail: "Tu potencial de crecimiento es ilimitado.\n💡 Impulso: Empieza el día con afirmaciones positivas" },
            { minScore: 72, level: "Lv.450", title: "Dolores de Crecimiento", img: "🩹", desc: "Sin dolor no hay ganancia.", detail: "¡El fracaso es la madre del éxito! No te rindas.\n💡 Consuelo: Elógiate por el trabajo duro de hoy" },
            { minScore: 80, level: "Lv.500", title: "Terrícola Común", img: "🌍", desc: "Maestro del equilibrio vida-trabajo.", detail: "Estado más estable. ¡Un poco más de esfuerzo para la cima!\n💡 Meta: Intenta usar una app de productividad" },
            { minScore: 88, level: "Lv.550", title: "Tortuga Constante", img: "🏗️", desc: "¡Lento pero seguro! La constancia es tu arma.", detail: "Tu persistencia brillará algún día.\n💡 Recomendación: Escribe una línea de gratitud diaria" },
            { minScore: 96, level: "Lv.600", title: "Planificador de Acción", img: "📝", desc: "¡Evolucionando a tipo J! Maníaco de las listas.", detail: "Disfrutas la emoción de marcar tareas.\n💡 Siguiente Paso: Establece metas semanales/mensuales" },
            { minScore: 104, level: "Lv.650", title: "Maestro Matutino", img: "☀️", desc: "¿El pájaro madrugador se cansa? ¡No, triunfa!", detail: "Quien conquista la mañana conquista el día.\n💡 Misión: Desafía el Milagro de la Mañana" },
            { minScore: 112, level: "Lv.700", title: "Friki de Mejora Personal", img: "📚", desc: "El crecimiento es un hobby. El aprendizaje nunca termina.", detail: "Tu actitud hacia el aprendizaje es genial.\n💡 Expandir: Comparte lo aprendido en redes sociales" },
            { minScore: 120, level: "Lv.750", title: "Mago del Tiempo", img: "⏳", desc: "Usando 24 horas como 48. Dios de la eficiencia.", detail: "¡Excelentes habilidades de gestión del tiempo!\n💡 Compartir: Enseña tus consejos a amigos" },
            { minScore: 128, level: "Lv.800", title: "Pro God-saeng", img: "✨", desc: "¡Forma loca! Brillando donde quiera que vayas.", detail: "Influyes positivamente en quienes te rodean.\n💡 Liderazgo: Lidera un grupo de estudio" },
            { minScore: 136, level: "Lv.850", title: "Libro Andante", img: "📖", desc: "Cada palabra es una cita. Sabiduría andante.", detail: "Tu vida misma es un libro de texto para alguien.\n💡 Grabar: Escribe ensayos o una memoria" },
            { minScore: 144, level: "Lv.900", title: "Ídolo God-saeng", img: "🌟", desc: "Una vida que atrae seguidores.", detail: "Con gran influencia viene gran responsabilidad.\n💡 Marca: Construye tu marca personal" },
            { minScore: 152, level: "Lv.999", title: "Emperador Legendario", img: "👑", desc: "¡La productividad explota solo con respirar!", detail: "God-saeng mismo. ¿Hay un lugar más alto?\n💡 Trascendencia: Mentorea a juniors y dona talentos" }
        ],
        faq: {
            title: "💡 Preguntas Frecuentes (FAQ)",
            items: [
                { q: "Q. ¿Qué es 'God-saeng'?", a: "Es un acrónimo de 'God' (Dios) y 'Saeng' (Vida), que se refiere a un estilo de vida enfocado en la diligencia, productividad y pequeños logros diarios. Se trata de construir hábitos positivos como hacer la cama o beber suficiente agua." },
                { q: "Q. ¿Qué es el Test de Nivel God-Life?", a: "Es un test psicológico que analiza tus patrones de estilo de vida y mentalidad para diagnosticar tu nivel de 'God-Life' (productividad). Se basa en teorías de personalidad MBTI y psicología conductual." },
                { q: "Q. Las 3 Mejores Rutinas Matutinas", a: "<strong>1. Meditación Milagrosa:</strong> Meditar 5 minutos al despertar reduce el cortisol y aumenta la concentración.<br><strong>2. Hacer la cama:</strong> Un pequeño logro que estimula positivamente tu cerebro.<br><strong>3. Lista de Tareas:</strong> Escribe solo 3 cosas que debas hacer hoy. Priorizar duplica tu poder de ejecución." },
                { q: "Q. Apps de Productividad Recomendadas", a: "Intenta usar temporizadores Pomodoro, Notion o rastreadores de hábitos simples. Usar las herramientas adecuadas puede ahorrar tu fuerza de voluntad." }
            ]
        }
    },
    vi: {
        langName: "Tiếng Việt",
        title: "Bài Test Mức Độ Sống Hiệu Quả",
        subtitle: "Lối sống của bạn hiệu quả đến đâu?",
        description: "Dành cho những ai muốn phát triển mỗi ngày,<br>Hãy phân tích lối sống của bạn<br>và khám phá <strong>'sức mạnh năng suất'</strong> tiềm ẩn.",
        startBtn: "Bắt Đầu Test",
        shareBtn: "Chia Sẻ 💌",
        restartBtn: "Thử Lại",
        resultTitle: "Kết Quả Của Bạn:",
        linkCopied: "Đã sao chép liên kết!",
        footer: { privacy: "Chính sách Bảo mật", terms: "Điều khoản Dịch vụ", contact: "Liên hệ" },
        questions: [
            {
                question: "1. Khi bạn nghe tiếng báo thức buổi sáng?",
                options: [
                    { text: "Bật dậy và dọn giường ngay", score: 10 },
                    { text: "Thêm 5 phút nữa thôi...", score: 5 },
                    { text: "Tắt báo thức và ngủ tiếp", score: 0 }
                ]
            },
            {
                question: "2. Bạn ăn sáng như thế nào?",
                options: [
                    { text: "Ăn bữa sáng đầy đủ dinh dưỡng", score: 10 },
                    { text: "Chỉ uống một ly cà phê", score: 5 },
                    { text: "Ngủ thêm 1 phút thay vì ăn", score: 0 }
                ]
            },
            {
                question: "3. Thời gian chuẩn bị buổi sáng?",
                options: [
                    { text: "Chuẩn bị thong thả, còn đọc sách", score: 10 },
                    { text: "Vừa đủ thời gian chuẩn bị", score: 5 },
                    { text: "Mỗi sáng như chiến trường!", score: 0 }
                ]
            },
            {
                question: "4. Bạn có viết danh sách công việc hôm nay?",
                options: [
                    { text: "Sắp xếp hoàn hảo theo ưu tiên", score: 10 },
                    { text: "Chỉ ghi nhớ trong đầu", score: 5 },
                    { text: "Làm việc gì đến thì làm", score: 0 }
                ]
            },
            {
                question: "5. Nếu kế hoạch cuối tuần xong sớm?",
                options: [
                    { text: "Làm trước việc tuần sau", score: 10 },
                    { text: "Marathon Netflix", score: 5 },
                    { text: "Chỉ nằm xuống nghỉ", score: 2 }
                ]
            },
            {
                question: "6. Khi bạn mất tập trung?",
                options: [
                    { text: "Đi dạo hoặc thiền một chút", score: 10 },
                    { text: "Lướt mạng xã hội", score: 5 },
                    { text: "Ngồi đờ đẫn lãng phí thời gian", score: 0 }
                ]
            },
            {
                question: "7. Bạn biết lịch tuần sau không?",
                options: [
                    { text: "Mọi thứ đều trong lịch", score: 10 },
                    { text: "Nhớ 1-2 cuộc hẹn quan trọng", score: 5 },
                    { text: "Không biết hôm nay ngày mấy", score: 0 }
                ]
            },
            {
                question: "8. Mục tiêu tập thể dục năm mới?",
                options: [
                    { text: "Tập đều 3+ lần/tuần", score: 10 },
                    { text: "Đăng ký nhưng chưa đi lần nào", score: 5 },
                    { text: "Thở là bài tập tốt nhất", score: 0 }
                ]
            },
            {
                question: "9. Bạn có uống thực phẩm chức năng?",
                options: [
                    { text: "Vitamin tổng hợp + probiotic + nữa", score: 10 },
                    { text: "Thỉnh thoảng khi nhớ ra", score: 5 },
                    { text: "Thức ăn là thuốc, không uống", score: 0 }
                ]
            },
            {
                question: "10. Dùng điện thoại trước khi ngủ?",
                options: [
                    { text: "Bật chế độ ngủ, ngủ ngay", score: 10 },
                    { text: "Chỉ 30 phút thôi", score: 5 },
                    { text: "Dùng đến sáng rồi ngủ thiếp", score: 0 }
                ]
            },
            {
                question: "11. Bạn dọn phòng bao lâu một lần?",
                options: [
                    { text: "Không chịu được bụi bẩn (hàng ngày)", score: 10 },
                    { text: "Dọn gom cuối tuần", score: 5 },
                    { text: "Có chỗ đi là được", score: 0 }
                ]
            },
            {
                question: "12. Mỗi tháng bạn đọc bao nhiêu sách?",
                options: [
                    { text: "Ít nhất 1 cuốn hoàn thành", score: 10 },
                    { text: "Mua sách nhưng chỉ nhìn bìa", score: 5 },
                    { text: "Chỉ đọc menu thôi", score: 0 }
                ]
            },
            {
                question: "13. Bạn có ghi chép chi tiêu?",
                options: [
                    { text: "Ghi từng đồng bằng app", score: 10 },
                    { text: "Theo dõi chi tiêu đại khái", score: 5 },
                    { text: "Chỉ kiểm tra khi hết tiền", score: 0 }
                ]
            },
            {
                question: "14. Đầu tư phát triển bản thân?",
                options: [
                    { text: "Không ngần ngại đầu tư cho mình", score: 10 },
                    { text: "Tìm khóa học miễn phí", score: 5 },
                    { text: "Đang sống đã khó lắm rồi", score: 0 }
                ]
            },
            {
                question: "15. Khi ai đó đề xuất kế hoạch đột xuất?",
                options: [
                    { text: "Từ chối vì phá vỡ thói quen", score: 10 },
                    { text: "Hay quá! Tham gia ngay", score: 5 },
                    { text: "Ra ngoài quá phiền phức", score: 0 }
                ]
            },
            {
                question: "16. 'Sống hiệu quả' có nghĩa gì với bạn?",
                options: [
                    { text: "Cuộc sống tăng trưởng không ngừng", score: 10 },
                    { text: "Làm việc vừa phải, hưởng thụ vừa phải", score: 6 },
                    { text: "YOLO - hạnh phúc dù không làm gì", score: 2 }
                ]
            }
        ],
        results: [
            { minScore: 0, level: "Lv.1", title: "Sơ Sinh God-saeng", img: "🍼", desc: "Oa oa! Mới mở mắt thôi.", detail: "Chào mừng đến với thế giới năng suất.\n💡 Nhiệm vụ: Vương vai ngay khi thức dậy!" },
            { minScore: 8, level: "Lv.50", title: "Hồn Ma Giường", img: "🛌", desc: "Ngoài kia nguy hiểm lắm... Thoải mái là nhất!", detail: "Bạn đang tích trữ năng lượng lúc này.\n💡 Nhiệm vụ: Thoát khỏi chăn một lần mỗi ngày" },
            { minScore: 16, level: "Lv.100", title: "Nhà Sư Ba Ngày", img: "⚡", desc: "Quyết tâm kéo dài 3 giây. Bỏ cuộc tốc độ LTE.", detail: "Đầy động lực nhưng thiếu kiên trì.\n💡 Mẹo: Bắt đầu bằng 'uống nước' thay vì kế hoạch lớn!" },
            { minScore: 24, level: "Lv.150", title: "Người Hoàn Hảo Lười Biếng", img: "🤔", desc: "Lên kế hoạch cả ngày, cuối cùng không làm gì.", detail: "Hoàn thành tốt hơn hoàn hảo. Cứ bắt đầu đi!\n💡 Giải pháp: Ngừng suy nghĩ và hành động trong 5 giây" },
            { minScore: 32, level: "Lv.200", title: "Nghệ Thuật Chậm Rãi", img: "🐢", desc: "Rùa cũng về đích! Chậm cũng không sao.", detail: "Đi theo tốc độ của riêng bạn là điều quan trọng.\n💡 Lời khuyên: Đừng so sánh mình với người khác" },
            { minScore: 40, level: "Lv.250", title: "Thành Đạt Ngắt Quãng", img: "🎢", desc: "Chạy khi có hứng, dừng khi chán.", detail: "Hơi thất thường. Bạn cần thói quen.\n💡 Nhiệm vụ: Duy trì đúng một thói quen trong 3 ngày" },
            { minScore: 48, level: "Lv.300", title: "Người Sống Sót", img: "🔥", desc: "Siêu năng lực kích hoạt ngay trước deadline.", detail: "Thánh nước đến chân mới nhảy! Sẽ hoàn hảo nếu làm sớm hơn.\n💡 Mẹo: Đặt 'deadline thật' sớm hơn một ngày" },
            { minScore: 56, level: "Lv.350", title: "Người Nếm Thử", img: "🥄", desc: "Tò mò mọi thứ, không cam kết gì.", detail: "Trải nghiệm thì tốt, nhưng cần chiều sâu.\n💡 Thử thách: Giữ một sở thích hơn một tháng" },
            { minScore: 64, level: "Lv.400", title: "Mầm Non God-saeng", img: "🌱", desc: "Đang quang hợp... Lớn lên từng ngày!", detail: "Tiềm năng phát triển của bạn là vô hạn.\n💡 Tăng tốc: Bắt đầu ngày mới với những lời khẳng định tích cực" },
            { minScore: 72, level: "Lv.450", title: "Đau Đớn Tăng Trưởng", img: "🩹", desc: "Không đau sao lớn. Đang trải qua thử sai.", detail: "Thất bại là mẹ thành công! Đừng bỏ cuộc.\n💡 An ủi: Tự khen ngợi bản thân vì đã vất vả hôm nay" },
            { minScore: 80, level: "Lv.500", title: "Người Trái Đất Bình Thường", img: "🌍", desc: "Bậc thầy cân bằng công việc-cuộc sống.", detail: "Trạng thái ổn định nhất. Cố thêm chút nữa để lên top!\n💡 Mục tiêu: Thử dùng một ứng dụng năng suất" },
            { minScore: 88, level: "Lv.550", title: "Rùa Kiên Trì", img: "🏗️", desc: "Chậm mà chắc! Kiên trì là vũ khí.", detail: "Sự bền bỉ của bạn sẽ tỏa sáng một ngày nào đó.\n💡 Đề xuất: Viết một dòng nhật ký biết ơn mỗi ngày" },
            { minScore: 96, level: "Lv.600", title: "Người Lên Kế Hoạch", img: "📝", desc: "Tiến hóa thành người hệ J! Cuồng danh sách.", detail: "Bạn tận hưởng cảm giác gạch bỏ các đầu việc.\n💡 Bước tiếp theo: Đặt mục tiêu tuần/tháng" },
            { minScore: 104, level: "Lv.650", title: "Bậc Thầy Buổi Sáng", img: "☀️", desc: "Dậy sớm để thành công!", detail: "Ai chinh phục buổi sáng sẽ chinh phục cả ngày.\n💡 Nhiệm vụ: Thử thách Miracle Morning" },
            { minScore: 112, level: "Lv.700", title: "Mọt Sách Phát Triển", img: "📚", desc: "Phát triển là sở thích. Học tập không bao giờ dứt.", detail: "Thái độ học tập của bạn thật tuyệt.\n💡 Mở rộng: Chia sẻ những gì đã học lên mạng xã hội" },
            { minScore: 120, level: "Lv.750", title: "Phù Thủy Thời Gian", img: "⏳", desc: "Dùng 24h như 48h. Thần hiệu suất.", detail: "Kỹ năng quản lý thời gian xuất sắc!\n💡 Chia sẻ: Dạy mẹo quản lý thời gian cho bạn bè" },
            { minScore: 128, level: "Lv.800", title: "Pro God-saeng", img: "✨", desc: "Phong độ điên rồ! Tỏa sáng bất cứ đâu.", detail: "Bạn đang ảnh hưởng tích cực đến người xung quanh.\n💡 Lãnh đạo: Dẫn dắt một nhóm học tập" },
            { minScore: 136, level: "Lv.850", title: "Sách Self-Help Biết Đi", img: "📖", desc: "Mỗi lời nói là danh ngôn. Trí tuệ sống.", detail: "Cuộc đời bạn chính là sách giáo khoa cho ai đó.\n💡 Ghi lại: Viết tản văn hoặc hồi ký" },
            { minScore: 144, level: "Lv.900", title: "Idol God-saeng", img: "🌟", desc: "Cuộc sống thu hút người theo dõi.", detail: "Ảnh hưởng lớn đi kèm trách nhiệm lớn.\n💡 Thương hiệu: Xây dựng thương hiệu cá nhân" },
            { minScore: 152, level: "Lv.999", title: "Hoàng Đế Huyền Thoại", img: "👑", desc: "Thở thôi cũng năng suất bùng nổ!", detail: "Chính là God-saeng. Còn nơi nào cao hơn không?\n💡 Siêu việt: Cố vấn cho đàn em và cống hiến tài năng" }
        ],
        faq: {
            title: "💡 Câu hỏi thường gặp (FAQ)",
            items: [
                { q: "Q. 'God-saeng' là gì?", a: "Đây là từ ghép giữa 'God' (Thần) và 'Saeng' (Cuộc sống), chỉ một lối sống tập trung vào sự chăm chỉ, năng suất và những thành tựu nhỏ mỗi ngày. Nó bắt đầu từ những thói quen nhỏ như gập chăn màn hay uống đủ nước." },
                { q: "Q. Bài kiểm tra God-Life là gì?", a: "Đây là bài trắc nghiệm tâm lý phân tích thói quen sống và tư duy để chẩn đoán cấp độ 'God-Life' của bạn. Nó dựa trên lý thuyết tính cách MBTI và tâm lý học hành vi." },
                { q: "Q. Top 3 Thói quen buổi sáng", a: "<strong>1. Thiền buổi sáng:</strong> Thiền 5 phút ngay khi thức dậy giúp giảm cortisol và tăng sự tập trung.<br><strong>2. Dọn giường:</strong> Thành tựu nhỏ đầu ngày giúp kích thích não bộ tích cực.<br><strong>3. Viết To-Do List:</strong> Ghi ra 3 việc quan trọng nhất cần làm. Việc ưu tiên sẽ nhân đôi khả năng thực thi." },
                { q: "Q. Ứng dụng năng suất được đề xuất", a: "Hãy thử dùng đồng hồ Pomodoro, Notion hoặc các ứng dụng theo dõi thói quen đơn giản. Sử dụng công cụ phù hợp sẽ giúp tiết kiệm ý chí của bạn." }
            ]
        }
    },
    ja: {
        langName: "日本語",
        title: "ゴッド生レベルテスト",
        subtitle: "あなたの充実度は何%？",
        description: "毎日成長したいあなたへ、<br>ライフスタイルを分析して<br>隠れた<strong>「充実力」</strong>を発見しましょう。",
        startBtn: "テスト開始",
        shareBtn: "シェアする 💌",
        restartBtn: "もう一度",
        resultTitle: "あなたの結果：",
        linkCopied: "リンクをコピーしました！",
        footer: { privacy: "プライバシーポリシー", terms: "利用規約", contact: "お問い合わせ" },
        questions: [
            {
                question: "1. 朝のアラームが鳴ったとき？",
                options: [
                    { text: "すぐ起きて布団を畳む", score: 10 },
                    { text: "あと5分…スヌーズ連打", score: 5 },
                    { text: "アラーム消してまた夢の中", score: 0 }
                ]
            },
            {
                question: "2. 朝食はどうしていますか？",
                options: [
                    { text: "栄養のある食事を摂る", score: 10 },
                    { text: "コーヒー1杯で済ませる", score: 5 },
                    { text: "食べる時間より1分でも寝る", score: 0 }
                ]
            },
            {
                question: "3. 朝の準備時間は？",
                options: [
                    { text: "余裕を持って、読書まで", score: 10 },
                    { text: "ちょうど間に合う程度", score: 5 },
                    { text: "毎朝が戦場！（遅刻寸前）", score: 0 }
                ]
            },
            {
                question: "4. 今日のTo-Doリストを書きましたか？",
                options: [
                    { text: "優先順位で完璧に整理", score: 10 },
                    { text: "頭の中でなんとなく", score: 5 },
                    { text: "来るものを処理するだけ", score: 0 }
                ]
            },
            {
                question: "5. 週末の予定が早く終わったら？",
                options: [
                    { text: "来週のタスクを先にやる", score: 10 },
                    { text: "Netflixを一気見", score: 5 },
                    { text: "とりあえず横になる", score: 2 }
                ]
            },
            {
                question: "6. 集中力が切れたとき？",
                options: [
                    { text: "少し散歩か瞑想", score: 10 },
                    { text: "SNSでショート動画視聴", score: 5 },
                    { text: "ぼーっとして時間を過ごす", score: 0 }
                ]
            },
            {
                question: "7. 来週のスケジュールを知っていますか？",
                options: [
                    { text: "カレンダーに完璧に整理", score: 10 },
                    { text: "重要な予定1-2個は覚えている", score: 5 },
                    { text: "今日が何日かも分からない", score: 0 }
                ]
            },
            {
                question: "8. 新年の運動目標の現状は？",
                options: [
                    { text: "週3回以上継続中", score: 10 },
                    { text: "登録したけど幽霊会員", score: 5 },
                    { text: "呼吸が最高の運動", score: 0 }
                ]
            },
            {
                question: "9. サプリメントを摂っていますか？",
                options: [
                    { text: "マルチビタミン+乳酸菌+α", score: 10 },
                    { text: "思い出した時だけ飲む", score: 5 },
                    { text: "食事が薬、飲まない", score: 0 }
                ]
            },
            {
                question: "10. 寝る前のスマホ使用は？",
                options: [
                    { text: "スリープモードですぐ就寝", score: 10 },
                    { text: "30分だけ見てから寝る", score: 5 },
                    { text: "日の出までスマホ→気絶", score: 0 }
                ]
            },
            {
                question: "11. 部屋の掃除頻度は？",
                options: [
                    { text: "ホコリ一つ許せない（毎日）", score: 10 },
                    { text: "週末にまとめて一度", score: 5 },
                    { text: "歩けるスペースがあればOK", score: 0 }
                ]
            },
            {
                question: "12. 月に何冊本を読みますか？",
                options: [
                    { text: "最低1冊は読破", score: 10 },
                    { text: "買っても表紙を見るだけ", score: 5 },
                    { text: "メニューしか読まない", score: 0 }
                ]
            },
            {
                question: "13. 家計簿をつけていますか？",
                options: [
                    { text: "アプリで1円単位まで記録", score: 10 },
                    { text: "大まかな支出だけ把握", score: 5 },
                    { text: "残高不足の通知で確認", score: 0 }
                ]
            },
            {
                question: "14. 自己投資（講座、勉強）は？",
                options: [
                    { text: "自分への投資は惜しまない", score: 10 },
                    { text: "無料講座を中心に探す", score: 5 },
                    { text: "今の生活で精一杯", score: 0 }
                ]
            },
            {
                question: "15. 突然の予定提案への反応は？",
                options: [
                    { text: "ルーティンが崩れるので断る", score: 10 },
                    { text: "いいね！即参加", score: 5 },
                    { text: "外出自体が面倒", score: 0 }
                ]
            },
            {
                question: "16. あなたにとって「充実した生活」とは？",
                options: [
                    { text: "毎瞬間成長する熱い人生", score: 10 },
                    { text: "適度に働き適度に楽しむ", score: 6 },
                    { text: "何もしなくても幸せなYOLO", score: 2 }
                ]
            }
        ],
        results: [
            { minScore: 0, level: "Lv.1", title: "新生児ゴッド生", img: "🍼", desc: "オギャー！目が開いたばかり。", detail: "充実した生活の世界へようこそ。\n💡 ミッション：目が覚めたらすぐに伸びをする！" },
            { minScore: 8, level: "Lv.50", title: "ベッドの地縛霊", img: "🛌", desc: "布団の外は危険…快適さが一番！", detail: "今はエネルギーを蓄えているところです。\n💡 ミッション：1日1回布団から脱出する" },
            { minScore: 16, level: "Lv.100", title: "三日坊主マスター", img: "⚡", desc: "決心は3秒で終了。諦めもLTE級。", detail: "やる気は十分ですが持続力が足りません。\n💡 ヒント：壮大な計画の代わりに「水を飲む」ことから！" },
            { minScore: 24, level: "Lv.150", title: "怠けた完璧主義者", img: "🤔", desc: "計画だけで一日終了。何もできず。", detail: "完璧でなくても大丈夫。とにかく始めましょう！\n💡 解決策：何も考えず5秒以内に体を動かす" },
            { minScore: 32, level: "Lv.200", title: "スローの美学", img: "🐢", desc: "カメもゴッド生だ！ゆっくりでも大丈夫。", detail: "自分のペースで着実に進むことが重要です。\n💡 アドバイス：他人と比較しないこと" },
            { minScore: 40, level: "Lv.250", title: "間欠的達成者", img: "🎢", desc: "気分が乗れば走り、そうでなければ止まる。", detail: "少し気まぐれですね。ルーティンが必要です。\n💡 ミッション：1つのルーティンだけを3日間守る" },
            { minScore: 48, level: "Lv.300", title: "サバイバー", img: "🔥", desc: "締め切り直前に超能力を発揮。", detail: "一夜漬けの神！普段から少しずつやれば完璧なのに。\n💡 ヒント：「本当の締め切り」を1日前に設定する" },
            { minScore: 56, level: "Lv.350", title: "味見マスター", img: "🥄", desc: "何でも興味はあるが、深くはコミットしない。", detail: "経験は良いですが、深さが必要です。\n💡 チャレンジ：1つの趣味を1ヶ月以上続ける" },
            { minScore: 64, level: "Lv.400", title: "新芽ゴッド生", img: "🌱", desc: "光合成中…すくすく成長中！", detail: "あなたの成長の可能性は無限大です。\n💡 ブースト：ポジティブなアファメーションで一日を始める" },
            { minScore: 72, level: "Lv.450", title: "成長痛", img: "🩹", desc: "痛いから青春だ。試行錯誤中。", detail: "失敗は成功の母！諦めないでください。\n💡 慰め：今日一日頑張った自分を褒める" },
            { minScore: 80, level: "Lv.500", title: "平凡な地球人", img: "🌍", desc: "ワークライフバランスを知る達人。", detail: "最も安定した状態。あと少しの努力で上位圏へ！\n💡 目標：生産性アプリを1つ使ってみる" },
            { minScore: 88, level: "Lv.550", title: "誠実なカメ", img: "🏗️", desc: "ゆっくりだけど確実に！着実さが武器。", detail: "あなたの粘り強さはいつか輝きを放ちます。\n💡 おすすめ：毎日感謝日記を一行書く" },
            { minScore: 96, level: "Lv.600", title: "計画実践家", img: "📝", desc: "J型人間に進化中！チェックリストマニア。", detail: "計画したことを消していく快感を楽しんでいますね。\n💡 次のステップ：週間/月間目標を立てる" },
            { minScore: 104, level: "Lv.650", title: "モーニングルーティンマスター", img: "☀️", desc: "早起きは三文の徳！朝を制する者が一日を制す。", detail: "朝の時間を支配する者が一日を支配します。\n💡 ミッション：ミラクルモーニングに挑戦" },
            { minScore: 112, level: "Lv.700", title: "自己啓発オタク", img: "📚", desc: "成長が趣味であり特技。学びには終わりがない。", detail: "学ぶ姿勢が素晴らしいです。\n💡 拡張：学んだことをSNSで共有する" },
            { minScore: 120, level: "Lv.750", title: "時間の魔法使い", img: "⏳", desc: "24時間を48時間のように使う効率の神。", detail: "時間管理能力が卓越しています！\n💡 共有：友達に時間管理のコツを教える" },
            { minScore: 128, level: "Lv.800", title: "プロ・ゴッド生", img: "✨", desc: "フォーム維持！どこでも輝く存在。", detail: "周りの人に肯定的な影響を与えています。\n💡 リーダーシップ：スタディグループや集まりを主宰する" },
            { minScore: 136, level: "Lv.850", title: "歩く自己啓発書", img: "📖", desc: "発する言葉が名言。人間名言製造機。", detail: "あなたの人生そのものが誰かの教科書です。\n💡 記録：エッセイや回顧録を書いてみる" },
            { minScore: 144, level: "Lv.900", title: "ゴッド生アイドル", img: "🌟", desc: "フォロワーを呼ぶ人生。みんながあなたに注目。", detail: "影響力が大きいほど責任も伴うもの。\n💡 ブランディング：自分のブランドを作る" },
            { minScore: 152, level: "Lv.999", title: "伝説の充実皇帝", img: "👑", desc: "息をするだけで生産性爆発！人間国宝級。", detail: "ゴッド生そのもの。これ以上高い場所は…あるでしょうか？\n💡 超越：後輩育成と才能寄付" }
        ],
        faq: {
            title: "💡 よくある質問 (FAQ)",
            items: [
                { q: "Q. 갓생(God-saeng)とは？", a: "「God（神）」と「Saeng（人生）」を合わせた造語で、計画的かつ勤勉に生き、日々の小さな達成感を感じるライフスタイルを指します。ベッドメイキングや水を飲むといった小さな習慣から始めることが鍵です。" },
                { q: "Q. 갓생能力値テストとは？", a: "あなたの生活習慣やマインドセットを分析し、現在の「갓생力（生産性）」レベルを診断する心理テストです。MBTI性格理論や行動心理学に基づいています。" },
                { q: "Q. おすすめのモーニングルーティンBEST 3", a: "<strong>1. ミラクルモーニング瞑想：</strong> 起床直後の5分間の瞑想はコルチゾールを下げ、集中力を高めます。<br><strong>2. ベッドメイキング：</strong> 小さな達成感が脳を肯定的に刺激します。<br><strong>3. To-Doリスト作成：</strong> 今日やるべき3つのことだけを書き出しましょう。優先順位が明確になれば実行力が倍増します。" },
                { q: "Q. 生産性を高める必須アプリ", a: "ポモドーロタイマー、Notion、またはシンプルな習慣トラッカーアプリを活用してみてください。ツールを適切に使えば、意志力を節約できます。" }
            ]
        }
    }
};

// 현재 언어 (기본값: 한국어)
let currentLang = 'ko';

// 언어 변경 함수
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('godSaengLang', lang);
    updateUI();
    updateLangButtons();
}

// 언어 버튼 활성화 상태 업데이트
function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

// UI 텍스트 업데이트
function updateUI() {
    const t = translations[currentLang];

    // 홈 화면
    document.querySelector('.logo').textContent = t.title;
    document.querySelector('.subtitle').textContent = t.subtitle;
    document.querySelector('#home p[style]').innerHTML = t.description;
    document.querySelector('#home .btn').textContent = t.startBtn;

    // 결과 화면
    document.querySelector('#result .subtitle').textContent = t.resultTitle;
    const buttons = document.querySelectorAll('#result .btn');
    if (buttons[0]) buttons[0].textContent = t.shareBtn;
    if (buttons[1]) buttons[1].textContent = t.restartBtn;

    // 아티클 섹션 업데이트
    // FAQ 섹션 업데이트
    if (t.faq) {
        const faqTitle = document.querySelector('.faq-section h2');
        if (faqTitle) faqTitle.textContent = t.faq.title;

        const faqItems = document.querySelectorAll('.faq-item');
        if (t.faq.items) {
            t.faq.items.forEach((item, index) => {
                if (faqItems[index]) {
                    const qEl = faqItems[index].querySelector('.faq-question');
                    const aEl = faqItems[index].querySelector('.faq-answer');
                    if (qEl) qEl.textContent = item.q;
                    if (aEl) aEl.innerHTML = item.a;
                }
            });
        }
    }

    // 푸터 업데이트
    const footerPrivacy = document.getElementById('footer-privacy');
    const footerTerms = document.getElementById('footer-terms');
    const footerContact = document.getElementById('footer-contact');
    if (footerPrivacy) footerPrivacy.textContent = t.footer?.privacy || '개인정보처리방침';
    if (footerTerms) footerTerms.textContent = t.footer?.terms || '이용약관';
    if (footerContact) footerContact.textContent = t.footer?.contact || '문의';
}

// 현재 언어의 질문 가져오기
function getQuestions() {
    return translations[currentLang].questions;
}

// 현재 언어의 결과 가져오기
function getResults() {
    return translations[currentLang].results;
}

// 현재 언어의 번역 가져오기
function getTranslation() {
    return translations[currentLang];
}

// 페이지 로드 시 저장된 언어 불러오기
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('godSaengLang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    updateUI();
    updateLangButtons();
});
