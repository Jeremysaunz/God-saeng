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
            {
                minScore: 0, level: "Lv.1", title: "침대와 한몸 눕방 마스터", img: "😴",
                desc: "갓생보다는 '편안함'과 '여유'를 1순위로 두는 타입입니다.",
                detail: "당신의 '갓생력'은 현재 충전이 필요한 상태입니다.\n💡 추천 챌린지: 아침에 이불 개기, 물 1L 마시기"
            },
            {
                minScore: 50, level: "Lv.30", title: "의욕 충만 작심삼일 탈출가", img: "🐣",
                desc: "마음만은 이미 갓생러! 실천이 조금 아쉬운 타입이네요.",
                detail: "시작이 반이라는 말이 딱 어울리는 당신.\n💡 솔루션: 하루 3가지만 정하기, 완벽보다 완료!"
            },
            {
                minScore: 100, level: "Lv.70", title: "효율 추구 스마트 갓생러", img: "✨",
                desc: "일과 삶의 밸런스를 아는 능력자!",
                detail: "효율적으로 하루를 보내는 당신.\n💡 부스터: 아웃풋(기록/공유) 만들기, 사이드 프로젝트 시작"
            },
            {
                minScore: 135, level: "Lv.999", title: "전설의 갓생 황제", img: "👑",
                desc: "숨만 쉬어도 생산성 폭발! 인간 문화재급 갓생러.",
                detail: "자기관리, 시간관리 완벽!\n💡 미션: 노하우 공유, 갓생 리더 되기"
            }
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
            {
                minScore: 0, level: "Lv.1", title: "Couch Potato Master", img: "😴",
                desc: "You prioritize 'comfort' and 'relaxation' over productivity.",
                detail: "Your 'productivity power' needs recharging.\n💡 Try: Make bed in morning, drink 1L water"
            },
            {
                minScore: 50, level: "Lv.30", title: "Motivated but Inconsistent", img: "🐣",
                desc: "Your heart is ready! Execution needs a bit more work.",
                detail: "'Starting is half the battle' - that's you.\n💡 Solution: Set only 3 daily goals, done > perfect"
            },
            {
                minScore: 100, level: "Lv.70", title: "Smart Productivity Pro", img: "✨",
                desc: "You know work-life balance!",
                detail: "You spend your days efficiently.\n💡 Boost: Create outputs (writing/sharing), start side projects"
            },
            {
                minScore: 135, level: "Lv.999", title: "Legendary Productivity Emperor", img: "👑",
                desc: "You're productive just by breathing! A human productivity treasure.",
                detail: "Perfect self & time management!\n💡 Mission: Share your know-how, become a leader"
            }
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
            {
                minScore: 0, level: "Nv.1", title: "Maestro del Sofá", img: "😴",
                desc: "Priorizas la 'comodidad' y 'relajación'.",
                detail: "Tu 'poder productivo' necesita recargarse.\n💡 Intenta: Hacer la cama, beber 1L de agua"
            },
            {
                minScore: 50, level: "Nv.30", title: "Motivado pero Inconsistente", img: "🐣",
                desc: "¡Tu corazón está listo! La ejecución necesita trabajo.",
                detail: "'Empezar es la mitad de la batalla' - eres tú.\n💡 Solución: Solo 3 metas diarias"
            },
            {
                minScore: 100, level: "Nv.70", title: "Pro de Productividad Inteligente", img: "✨",
                desc: "¡Conoces el equilibrio vida-trabajo!",
                detail: "Pasas tus días eficientemente.\n💡 Impulso: Crea outputs, inicia proyectos paralelos"
            },
            {
                minScore: 135, level: "Nv.999", title: "Emperador Legendario de Productividad", img: "👑",
                desc: "¡Eres productivo solo respirando!",
                detail: "¡Gestión perfecta!\n💡 Misión: Comparte tu conocimiento"
            }
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
            {
                minScore: 0, level: "Cấp 1", title: "Bậc Thầy Nằm Sofa", img: "😴",
                desc: "Bạn ưu tiên 'thoải mái' và 'thư giãn'.",
                detail: "'Năng lượng năng suất' cần nạp lại.\n💡 Thử: Dọn giường, uống 1L nước"
            },
            {
                minScore: 50, level: "Cấp 30", title: "Có Động Lực Nhưng Chưa Đều", img: "🐣",
                desc: "Trái tim đã sẵn sàng! Thực hiện cần cải thiện.",
                detail: "'Bắt đầu là nửa thành công'.\n💡 Giải pháp: Chỉ 3 mục tiêu/ngày"
            },
            {
                minScore: 100, level: "Cấp 70", title: "Chuyên Gia Năng Suất Thông Minh", img: "✨",
                desc: "Bạn hiểu cân bằng cuộc sống-công việc!",
                detail: "Bạn sử dụng ngày hiệu quả.\n💡 Tăng tốc: Tạo output, bắt đầu dự án phụ"
            },
            {
                minScore: 135, level: "Cấp 999", title: "Hoàng Đế Năng Suất Huyền Thoại", img: "👑",
                desc: "Chỉ cần thở cũng năng suất!",
                detail: "Quản lý hoàn hảo!\n💡 Nhiệm vụ: Chia sẻ bí quyết"
            }
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
            {
                minScore: 0, level: "Lv.1", title: "ベッドと一体化マスター", img: "😴",
                desc: "「快適さ」と「リラックス」を最優先するタイプです。",
                detail: "「充実力」は充電が必要な状態。\n💡 おすすめ：布団を畳む、水1L飲む"
            },
            {
                minScore: 50, level: "Lv.30", title: "やる気満々三日坊主脱出者", img: "🐣",
                desc: "心はすでに充実生活者！実践がもう少し。",
                detail: "「始まりが半分」があなたにぴったり。\n💡 解決策：1日3つだけ決める"
            },
            {
                minScore: 100, level: "Lv.70", title: "効率追求スマート充実者", img: "✨",
                desc: "ワークライフバランスを知る達人！",
                detail: "効率的に一日を過ごすあなた。\n💡 ブースト：アウトプットを作る、副業開始"
            },
            {
                minScore: 135, level: "Lv.999", title: "伝説の充実皇帝", img: "👑",
                desc: "息をするだけで生産性爆発！人間国宝級。",
                detail: "自己管理、時間管理完璧！\n💡 ミッション：ノウハウを共有"
            }
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
