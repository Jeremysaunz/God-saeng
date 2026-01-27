// 정책 페이지용 다국어 지원
const policyTranslations = {
    ko: {
        backText: "홈으로",
        footerPrivacy: "개인정보처리방침",
        footerTerms: "이용약관",
        footerContact: "문의",
        privacy: {
            pageTitle: "개인정보처리방침",
            lastUpdated: "최종 수정일: 2026년 1월 27일",
            section1Title: "1. 수집하는 개인정보",
            section1Content: "본 '갓생 능력치 테스트' 사이트는 별도의 회원가입 없이 이용 가능하며, 서버에 개인정보(이름, 연락처 등)를 수집하거나 저장하지 않습니다. 단, 서비스 개선을 위해 익명화된 방문 통계를 수집할 수 있습니다.",
            section2Title: "2. 쿠키 및 광고",
            section2Content: "본 사이트는 Google AdSense를 통해 광고를 게재합니다. Google과 제3자 광고 업체는 쿠키를 사용하여 사용자의 관심사에 기반한 광고를 표시할 수 있습니다. 사용자는 <a href='https://www.aboutads.info/choices/' target='_blank'>aboutads.info</a>에서 맞춤 광고를 해제할 수 있습니다.",
            section3Title: "3. 로컬 저장소",
            section3Content: "본 사이트는 사용자 편의를 위해 브라우저의 로컬 저장소(localStorage)에 언어 설정을 저장합니다. 이 정보는 서버로 전송되지 않으며, 브라우저 설정에서 삭제할 수 있습니다.",
            section4Title: "4. 정보 보호",
            section4Content: "우리는 수집된 정보를 보호하기 위해 합리적인 보안 조치를 취합니다. 그러나 인터넷을 통한 데이터 전송의 완전한 보안을 보장할 수 없습니다.",
            section5Title: "5. 문의",
            section5Content: "개인정보처리방침에 대해 질문이 있으시면 <a href='contact.html'>문의 페이지</a>를 통해 연락해 주세요."
        },
        terms: {
            pageTitle: "이용약관",
            lastUpdated: "최종 수정일: 2026년 1월 27일",
            section1Title: "1. 서비스 이용",
            section1Content: "본 '갓생 능력치 테스트' 서비스는 무료로 제공되며, 누구나 별도의 회원가입 없이 이용할 수 있습니다. 테스트 결과는 오락 목적으로만 제공되며, 과학적 또는 의학적 진단을 대체하지 않습니다.",
            section2Title: "2. 지적 재산권",
            section2Content: "본 사이트의 모든 콘텐츠(텍스트, 이미지, 디자인 등)는 저작권법에 의해 보호됩니다. 무단 복제, 배포, 수정은 금지되며, 개인적인 비상업적 용도로만 이용할 수 있습니다.",
            section3Title: "3. 면책 조항",
            section3Content: "본 서비스는 '있는 그대로' 제공됩니다. 테스트 결과의 정확성, 완전성에 대해 보증하지 않으며, 서비스 이용으로 인한 직접적 또는 간접적 손해에 대해 책임지지 않습니다.",
            section4Title: "4. 광고",
            section4Content: "본 사이트는 Google AdSense를 통해 광고를 게재합니다. 광고 내용은 제3자에 의해 제공되며, 사이트 운영자는 광고 내용에 대해 책임지지 않습니다.",
            section5Title: "5. 약관 변경",
            section5Content: "본 이용약관은 사전 고지 없이 변경될 수 있습니다. 변경된 약관은 사이트에 게시된 시점부터 효력이 발생합니다.",
            section6Title: "6. 문의",
            section6Content: "이용약관에 대해 질문이 있으시면 <a href='contact.html'>문의 페이지</a>를 통해 연락해 주세요."
        },
        contact: {
            pageTitle: "문의하기",
            contactIntro: "갓생 능력치 테스트에 대한 질문, 피드백, 또는 제휴 문의가 있으시면 아래 방법으로 연락해 주세요.",
            emailTitle: "이메일",
            responseTitle: "응답 시간",
            responseContent: "영업일 기준 1-3일 내 답변드리겠습니다.",
            topicsTitle: "문의 분야",
            topicsList: "<li>🛠️ 서비스 이용 관련 문의</li><li>🐛 버그 제보 및 개선 제안</li><li>🤝 제휴 및 협업 문의</li><li>📢 광고 관련 문의</li><li>🔒 개인정보 관련 문의</li>",
            faqTitle: "자주 묻는 질문",
            faq1Q: "Q: 테스트 결과가 저장되나요?",
            faq1A: "A: 아니요, 테스트 결과는 서버에 저장되지 않습니다. 결과를 저장하려면 스크린샷을 찍거나 공유 기능을 이용해 주세요.",
            faq2Q: "Q: 테스트는 과학적인가요?",
            faq2A: "A: 본 테스트는 재미와 자기 성찰을 위한 오락 콘텐츠입니다. 과학적 또는 의학적 진단을 대체하지 않습니다."
        }
    },
    en: {
        backText: "Home",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerContact: "Contact",
        privacy: {
            pageTitle: "Privacy Policy",
            lastUpdated: "Last updated: January 27, 2026",
            section1Title: "1. Information We Collect",
            section1Content: "The 'God-saeng Level Test' website can be used without registration. We do not collect or store personal information (name, contact, etc.) on our servers. However, we may collect anonymized visit statistics to improve our service.",
            section2Title: "2. Cookies and Advertising",
            section2Content: "This site displays ads through Google AdSense. Google and third-party advertisers may use cookies to display ads based on user interests. Users can opt out of personalized ads at <a href='https://www.aboutads.info/choices/' target='_blank'>aboutads.info</a>.",
            section3Title: "3. Local Storage",
            section3Content: "This site stores language preferences in your browser's local storage for convenience. This information is not transmitted to any server and can be deleted through browser settings.",
            section4Title: "4. Information Protection",
            section4Content: "We take reasonable security measures to protect collected information. However, we cannot guarantee complete security of data transmission over the internet.",
            section5Title: "5. Contact",
            section5Content: "If you have questions about this Privacy Policy, please contact us through our <a href='contact.html'>Contact page</a>."
        },
        terms: {
            pageTitle: "Terms of Service",
            lastUpdated: "Last updated: January 27, 2026",
            section1Title: "1. Service Use",
            section1Content: "The 'God-saeng Level Test' service is provided free of charge and can be used by anyone without registration. Test results are provided for entertainment purposes only and do not replace scientific or medical diagnosis.",
            section2Title: "2. Intellectual Property",
            section2Content: "All content on this site (text, images, design, etc.) is protected by copyright law. Unauthorized reproduction, distribution, or modification is prohibited. Content may only be used for personal, non-commercial purposes.",
            section3Title: "3. Disclaimer",
            section3Content: "This service is provided 'as is'. We do not guarantee the accuracy or completeness of test results and are not responsible for any direct or indirect damages arising from use of the service.",
            section4Title: "4. Advertising",
            section4Content: "This site displays ads through Google AdSense. Ad content is provided by third parties, and the site operator is not responsible for ad content.",
            section5Title: "5. Changes to Terms",
            section5Content: "These Terms of Service may be changed without prior notice. Changed terms take effect from the time they are posted on the site.",
            section6Title: "6. Contact",
            section6Content: "If you have questions about these Terms of Service, please contact us through our <a href='contact.html'>Contact page</a>."
        },
        contact: {
            pageTitle: "Contact Us",
            contactIntro: "If you have questions, feedback, or partnership inquiries about the God-saeng Level Test, please contact us using the methods below.",
            emailTitle: "Email",
            responseTitle: "Response Time",
            responseContent: "We will respond within 1-3 business days.",
            topicsTitle: "Contact Topics",
            topicsList: "<li>🛠️ Service usage inquiries</li><li>🐛 Bug reports and improvement suggestions</li><li>🤝 Partnership and collaboration inquiries</li><li>📢 Advertising inquiries</li><li>🔒 Privacy-related inquiries</li>",
            faqTitle: "Frequently Asked Questions",
            faq1Q: "Q: Are test results saved?",
            faq1A: "A: No, test results are not saved on the server. To save results, please take a screenshot or use the share feature.",
            faq2Q: "Q: Is the test scientific?",
            faq2A: "A: This test is entertainment content for fun and self-reflection. It does not replace scientific or medical diagnosis."
        }
    },
    es: {
        backText: "Inicio",
        footerPrivacy: "Política de Privacidad",
        footerTerms: "Términos de Servicio",
        footerContact: "Contacto",
        privacy: {
            pageTitle: "Política de Privacidad",
            lastUpdated: "Última actualización: 27 de enero de 2026",
            section1Title: "1. Información que Recopilamos",
            section1Content: "El sitio web 'Test de Nivel God-saeng' se puede usar sin registro. No recopilamos ni almacenamos información personal (nombre, contacto, etc.) en nuestros servidores. Sin embargo, podemos recopilar estadísticas de visitas anónimas para mejorar nuestro servicio.",
            section2Title: "2. Cookies y Publicidad",
            section2Content: "Este sitio muestra anuncios a través de Google AdSense. Google y los anunciantes de terceros pueden usar cookies para mostrar anuncios basados en los intereses del usuario. Los usuarios pueden optar por no recibir anuncios personalizados en <a href='https://www.aboutads.info/choices/' target='_blank'>aboutads.info</a>.",
            section3Title: "3. Almacenamiento Local",
            section3Content: "Este sitio almacena las preferencias de idioma en el almacenamiento local de su navegador para mayor comodidad. Esta información no se transmite a ningún servidor y se puede eliminar a través de la configuración del navegador.",
            section4Title: "4. Protección de la Información",
            section4Content: "Tomamos medidas de seguridad razonables para proteger la información recopilada. Sin embargo, no podemos garantizar la seguridad completa de la transmisión de datos a través de Internet.",
            section5Title: "5. Contacto",
            section5Content: "Si tiene preguntas sobre esta Política de Privacidad, contáctenos a través de nuestra <a href='contact.html'>página de Contacto</a>."
        },
        terms: {
            pageTitle: "Términos de Servicio",
            lastUpdated: "Última actualización: 27 de enero de 2026",
            section1Title: "1. Uso del Servicio",
            section1Content: "El servicio 'Test de Nivel God-saeng' se proporciona de forma gratuita y cualquier persona puede usarlo sin registro. Los resultados del test se proporcionan solo con fines de entretenimiento y no reemplazan el diagnóstico científico o médico.",
            section2Title: "2. Propiedad Intelectual",
            section2Content: "Todo el contenido de este sitio (texto, imágenes, diseño, etc.) está protegido por la ley de derechos de autor. La reproducción, distribución o modificación no autorizada está prohibida. El contenido solo puede usarse para fines personales y no comerciales.",
            section3Title: "3. Descargo de Responsabilidad",
            section3Content: "Este servicio se proporciona 'tal cual'. No garantizamos la precisión o integridad de los resultados del test y no somos responsables de ningún daño directo o indirecto derivado del uso del servicio.",
            section4Title: "4. Publicidad",
            section4Content: "Este sitio muestra anuncios a través de Google AdSense. El contenido publicitario es proporcionado por terceros, y el operador del sitio no es responsable del contenido publicitario.",
            section5Title: "5. Cambios en los Términos",
            section5Content: "Estos Términos de Servicio pueden cambiar sin previo aviso. Los términos modificados entran en vigencia desde el momento en que se publican en el sitio.",
            section6Title: "6. Contacto",
            section6Content: "Si tiene preguntas sobre estos Términos de Servicio, contáctenos a través de nuestra <a href='contact.html'>página de Contacto</a>."
        },
        contact: {
            pageTitle: "Contáctenos",
            contactIntro: "Si tiene preguntas, comentarios o consultas de asociación sobre el Test de Nivel God-saeng, contáctenos utilizando los métodos a continuación.",
            emailTitle: "Correo Electrónico",
            responseTitle: "Tiempo de Respuesta",
            responseContent: "Responderemos dentro de 1-3 días hábiles.",
            topicsTitle: "Temas de Contacto",
            topicsList: "<li>🛠️ Consultas sobre el uso del servicio</li><li>🐛 Informes de errores y sugerencias de mejora</li><li>🤝 Consultas de asociación y colaboración</li><li>📢 Consultas de publicidad</li><li>🔒 Consultas relacionadas con privacidad</li>",
            faqTitle: "Preguntas Frecuentes",
            faq1Q: "P: ¿Se guardan los resultados del test?",
            faq1A: "R: No, los resultados del test no se guardan en el servidor. Para guardar los resultados, tome una captura de pantalla o use la función de compartir.",
            faq2Q: "P: ¿Es científico el test?",
            faq2A: "R: Este test es contenido de entretenimiento para diversión y autorreflexión. No reemplaza el diagnóstico científico o médico."
        }
    },
    vi: {
        backText: "Trang chủ",
        footerPrivacy: "Chính sách Bảo mật",
        footerTerms: "Điều khoản Dịch vụ",
        footerContact: "Liên hệ",
        privacy: {
            pageTitle: "Chính sách Bảo mật",
            lastUpdated: "Cập nhật lần cuối: 27 tháng 1, 2026",
            section1Title: "1. Thông tin Chúng tôi Thu thập",
            section1Content: "Trang web 'Bài Test Mức Độ God-saeng' có thể được sử dụng mà không cần đăng ký. Chúng tôi không thu thập hoặc lưu trữ thông tin cá nhân (tên, liên hệ, v.v.) trên máy chủ của chúng tôi. Tuy nhiên, chúng tôi có thể thu thập thống kê lượt truy cập ẩn danh để cải thiện dịch vụ.",
            section2Title: "2. Cookie và Quảng cáo",
            section2Content: "Trang web này hiển thị quảng cáo thông qua Google AdSense. Google và các nhà quảng cáo bên thứ ba có thể sử dụng cookie để hiển thị quảng cáo dựa trên sở thích của người dùng. Người dùng có thể từ chối quảng cáo cá nhân hóa tại <a href='https://www.aboutads.info/choices/' target='_blank'>aboutads.info</a>.",
            section3Title: "3. Lưu trữ Cục bộ",
            section3Content: "Trang web này lưu trữ tùy chọn ngôn ngữ trong bộ nhớ cục bộ của trình duyệt để thuận tiện. Thông tin này không được truyền đến bất kỳ máy chủ nào và có thể bị xóa thông qua cài đặt trình duyệt.",
            section4Title: "4. Bảo vệ Thông tin",
            section4Content: "Chúng tôi thực hiện các biện pháp bảo mật hợp lý để bảo vệ thông tin thu thập được. Tuy nhiên, chúng tôi không thể đảm bảo an toàn hoàn toàn cho việc truyền dữ liệu qua Internet.",
            section5Title: "5. Liên hệ",
            section5Content: "Nếu bạn có câu hỏi về Chính sách Bảo mật này, vui lòng liên hệ với chúng tôi qua <a href='contact.html'>trang Liên hệ</a>."
        },
        terms: {
            pageTitle: "Điều khoản Dịch vụ",
            lastUpdated: "Cập nhật lần cuối: 27 tháng 1, 2026",
            section1Title: "1. Sử dụng Dịch vụ",
            section1Content: "Dịch vụ 'Bài Test Mức Độ God-saeng' được cung cấp miễn phí và bất kỳ ai cũng có thể sử dụng mà không cần đăng ký. Kết quả kiểm tra chỉ được cung cấp cho mục đích giải trí và không thay thế chẩn đoán khoa học hoặc y tế.",
            section2Title: "2. Quyền Sở hữu Trí tuệ",
            section2Content: "Tất cả nội dung trên trang web này (văn bản, hình ảnh, thiết kế, v.v.) được bảo vệ bởi luật bản quyền. Việc sao chép, phân phối hoặc sửa đổi trái phép bị cấm. Nội dung chỉ có thể được sử dụng cho mục đích cá nhân, phi thương mại.",
            section3Title: "3. Từ chối Trách nhiệm",
            section3Content: "Dịch vụ này được cung cấp 'nguyên trạng'. Chúng tôi không đảm bảo tính chính xác hoặc đầy đủ của kết quả kiểm tra và không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp hoặc gián tiếp nào phát sinh từ việc sử dụng dịch vụ.",
            section4Title: "4. Quảng cáo",
            section4Content: "Trang web này hiển thị quảng cáo thông qua Google AdSense. Nội dung quảng cáo được cung cấp bởi bên thứ ba, và người vận hành trang web không chịu trách nhiệm về nội dung quảng cáo.",
            section5Title: "5. Thay đổi Điều khoản",
            section5Content: "Các Điều khoản Dịch vụ này có thể thay đổi mà không cần thông báo trước. Các điều khoản đã thay đổi có hiệu lực từ thời điểm được đăng trên trang web.",
            section6Title: "6. Liên hệ",
            section6Content: "Nếu bạn có câu hỏi về các Điều khoản Dịch vụ này, vui lòng liên hệ với chúng tôi qua <a href='contact.html'>trang Liên hệ</a>."
        },
        contact: {
            pageTitle: "Liên hệ",
            contactIntro: "Nếu bạn có câu hỏi, phản hồi hoặc yêu cầu hợp tác về Bài Test Mức Độ God-saeng, vui lòng liên hệ với chúng tôi bằng các phương pháp dưới đây.",
            emailTitle: "Email",
            responseTitle: "Thời gian Phản hồi",
            responseContent: "Chúng tôi sẽ phản hồi trong vòng 1-3 ngày làm việc.",
            topicsTitle: "Chủ đề Liên hệ",
            topicsList: "<li>🛠️ Câu hỏi về sử dụng dịch vụ</li><li>🐛 Báo lỗi và đề xuất cải tiến</li><li>🤝 Yêu cầu hợp tác và cộng tác</li><li>📢 Câu hỏi về quảng cáo</li><li>🔒 Câu hỏi liên quan đến bảo mật</li>",
            faqTitle: "Câu hỏi Thường gặp",
            faq1Q: "H: Kết quả kiểm tra có được lưu không?",
            faq1A: "Đ: Không, kết quả kiểm tra không được lưu trên máy chủ. Để lưu kết quả, vui lòng chụp màn hình hoặc sử dụng tính năng chia sẻ.",
            faq2Q: "H: Bài kiểm tra có khoa học không?",
            faq2A: "Đ: Bài kiểm tra này là nội dung giải trí để vui vẻ và tự suy ngẫm. Nó không thay thế chẩn đoán khoa học hoặc y tế."
        }
    },
    ja: {
        backText: "ホーム",
        footerPrivacy: "プライバシーポリシー",
        footerTerms: "利用規約",
        footerContact: "お問い合わせ",
        privacy: {
            pageTitle: "プライバシーポリシー",
            lastUpdated: "最終更新日: 2026年1月27日",
            section1Title: "1. 収集する情報",
            section1Content: "「ゴッド生レベルテスト」ウェブサイトは登録なしでご利用いただけます。サーバーに個人情報（名前、連絡先など）を収集・保存することはありません。ただし、サービス改善のため匿名化されたアクセス統計を収集する場合があります。",
            section2Title: "2. クッキーと広告",
            section2Content: "本サイトはGoogle AdSenseを通じて広告を表示します。Googleおよびサードパーティの広告主は、ユーザーの興味に基づいて広告を表示するためにクッキーを使用する場合があります。ユーザーは<a href='https://www.aboutads.info/choices/' target='_blank'>aboutads.info</a>でパーソナライズ広告をオプトアウトできます。",
            section3Title: "3. ローカルストレージ",
            section3Content: "本サイトは利便性のため、ブラウザのローカルストレージに言語設定を保存します。この情報はサーバーに送信されず、ブラウザの設定で削除できます。",
            section4Title: "4. 情報保護",
            section4Content: "収集した情報を保護するために合理的なセキュリティ対策を講じています。ただし、インターネットを介したデータ転送の完全なセキュリティを保証することはできません。",
            section5Title: "5. お問い合わせ",
            section5Content: "このプライバシーポリシーについてご質問がある場合は、<a href='contact.html'>お問い合わせページ</a>からご連絡ください。"
        },
        terms: {
            pageTitle: "利用規約",
            lastUpdated: "最終更新日: 2026年1月27日",
            section1Title: "1. サービスの利用",
            section1Content: "「ゴッド生レベルテスト」サービスは無料で提供され、登録なしで誰でもご利用いただけます。テスト結果はエンターテインメント目的でのみ提供され、科学的または医学的診断に代わるものではありません。",
            section2Title: "2. 知的財産権",
            section2Content: "本サイトのすべてのコンテンツ（テキスト、画像、デザインなど）は著作権法によって保護されています。無断複製、配布、改変は禁止されています。コンテンツは個人的、非商業的な目的でのみご利用いただけます。",
            section3Title: "3. 免責事項",
            section3Content: "本サービスは「現状のまま」提供されます。テスト結果の正確性や完全性を保証するものではなく、サービスの利用により生じた直接的または間接的な損害について責任を負いません。",
            section4Title: "4. 広告",
            section4Content: "本サイトはGoogle AdSenseを通じて広告を表示します。広告内容は第三者によって提供され、サイト運営者は広告内容について責任を負いません。",
            section5Title: "5. 規約の変更",
            section5Content: "本利用規約は予告なく変更される場合があります。変更された規約はサイトに掲載された時点から効力を発生します。",
            section6Title: "6. お問い合わせ",
            section6Content: "この利用規約についてご質問がある場合は、<a href='contact.html'>お問い合わせページ</a>からご連絡ください。"
        },
        contact: {
            pageTitle: "お問い合わせ",
            contactIntro: "ゴッド生レベルテストに関するご質問、フィードバック、またはパートナーシップのお問い合わせは、以下の方法でご連絡ください。",
            emailTitle: "メール",
            responseTitle: "応答時間",
            responseContent: "1〜3営業日以内にご返答いたします。",
            topicsTitle: "お問い合わせ内容",
            topicsList: "<li>🛠️ サービス利用に関するお問い合わせ</li><li>🐛 バグ報告と改善提案</li><li>🤝 パートナーシップとコラボレーションのお問い合わせ</li><li>📢 広告に関するお問い合わせ</li><li>🔒 プライバシーに関するお問い合わせ</li>",
            faqTitle: "よくある質問",
            faq1Q: "Q: テスト結果は保存されますか？",
            faq1A: "A: いいえ、テスト結果はサーバーに保存されません。結果を保存するには、スクリーンショットを撮るか、共有機能をご利用ください。",
            faq2Q: "Q: テストは科学的ですか？",
            faq2A: "A: このテストは楽しみと自己省察のためのエンターテインメントコンテンツです。科学的または医学的診断に代わるものではありません。"
        }
    }
};

let currentLang = 'ko';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('godSaengLang', lang);
    updatePolicyUI();
    updateLangButtons();
}

function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

function updatePolicyUI() {
    const t = policyTranslations[currentLang];
    const page = window.location.pathname.split('/').pop().replace('.html', '');

    // 공통 요소
    document.getElementById('back-text').textContent = t.backText;
    document.getElementById('footer-privacy').textContent = t.footerPrivacy;
    document.getElementById('footer-terms').textContent = t.footerTerms;
    document.getElementById('footer-contact').textContent = t.footerContact;

    // 페이지별 콘텐츠
    if (page === 'privacy' && t.privacy) {
        const p = t.privacy;
        document.getElementById('page-title').textContent = p.pageTitle;
        document.getElementById('last-updated').textContent = p.lastUpdated;
        document.getElementById('section1-title').textContent = p.section1Title;
        document.getElementById('section1-content').innerHTML = p.section1Content;
        document.getElementById('section2-title').textContent = p.section2Title;
        document.getElementById('section2-content').innerHTML = p.section2Content;
        document.getElementById('section3-title').textContent = p.section3Title;
        document.getElementById('section3-content').innerHTML = p.section3Content;
        document.getElementById('section4-title').textContent = p.section4Title;
        document.getElementById('section4-content').innerHTML = p.section4Content;
        document.getElementById('section5-title').textContent = p.section5Title;
        document.getElementById('section5-content').innerHTML = p.section5Content;
    } else if (page === 'terms' && t.terms) {
        const te = t.terms;
        document.getElementById('page-title').textContent = te.pageTitle;
        document.getElementById('last-updated').textContent = te.lastUpdated;
        document.getElementById('section1-title').textContent = te.section1Title;
        document.getElementById('section1-content').innerHTML = te.section1Content;
        document.getElementById('section2-title').textContent = te.section2Title;
        document.getElementById('section2-content').innerHTML = te.section2Content;
        document.getElementById('section3-title').textContent = te.section3Title;
        document.getElementById('section3-content').innerHTML = te.section3Content;
        document.getElementById('section4-title').textContent = te.section4Title;
        document.getElementById('section4-content').innerHTML = te.section4Content;
        document.getElementById('section5-title').textContent = te.section5Title;
        document.getElementById('section5-content').innerHTML = te.section5Content;
        document.getElementById('section6-title').textContent = te.section6Title;
        document.getElementById('section6-content').innerHTML = te.section6Content;
    } else if (page === 'contact' && t.contact) {
        const c = t.contact;
        document.getElementById('page-title').textContent = c.pageTitle;
        document.getElementById('contact-intro').textContent = c.contactIntro;
        document.getElementById('email-title').textContent = c.emailTitle;
        document.getElementById('response-title').textContent = c.responseTitle;
        document.getElementById('response-content').textContent = c.responseContent;
        document.getElementById('topics-title').textContent = c.topicsTitle;
        document.getElementById('topics-list').innerHTML = c.topicsList;
        document.getElementById('faq-title').textContent = c.faqTitle;
        document.getElementById('faq1-q').textContent = c.faq1Q;
        document.getElementById('faq1-a').textContent = c.faq1A;
        document.getElementById('faq2-q').textContent = c.faq2Q;
        document.getElementById('faq2-a').textContent = c.faq2A;
    }
}

// 페이지 로드 시 저장된 언어 불러오기
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('godSaengLang');
    if (savedLang && policyTranslations[savedLang]) {
        currentLang = savedLang;
    }
    updatePolicyUI();
    updateLangButtons();
});
