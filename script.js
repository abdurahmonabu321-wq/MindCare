/* script.js - Professional Full-Featured Clinical Psychology Platform */

// 1. Fully-Fledged Multi-lingual Translations Dictionary
const translations = {
    uz: {
      navLogo: "DonoRuh",
      navAbout: "Shifokor haqida",
      navServices: "Xizmatlar",
      navTest: "Sog'liq testi",
      navSounds: "Keltirish Lounge",
      navContact: "Qabulga yozilish",
      navBookBtn: "Yozilish",
      
      heroBadge: "Toshkentdagi yetakchi kognitiv psixolog",
      heroTitle: "Ruhoniy xotirjamlik va ichki barqarorlikka qaytish",
      heroSub: "Professional va maxfiy psixologik yordam. Biz sizga xavotir, tushkunlik, obsessiv fikrlar hamda stressdan samarali xalos bo'lishingizda ko'maklashamiz.",
      heroBookNow: "Qabulga yozilish",
      heroAIQuick: "AI Psixolog bilan suhbat",
      heroStatsHappy: "Baxtli mijozlar",
      heroStatsSessions: "Muvaffaqiyatli sessiyalar",
      heroStatsRating: "Mijozlar reytingi",
      
      aboutTitle: "Dr. Abdurahmon Shermatov",
      aboutSubtitle: "Klinik psixolog, kognitiv-xulq-atvor terapevti (CBT)",
      aboutBio: "Men 8 yildan ortiq vaqt davomida odamlarga hissiy inqirozlar, depressiya, vahima hujumlari (panik ataka) va oilaviy nizolarni yengib o'tishda yordam berib kelmoqdaman. Mening terapiya uslubim fanga asoslangan kognitiv-xulq-atvor terapiyasi, geştalt va insonga yo'naltirilgan yondashuvlarning sintezidan iborat.",
      aboutEducationTitle: "Ma'lumoti va Malaka",
      aboutEducationText: "Toshkent Tibbiyot Akademiyasi (Klinik Psixologiya), Yevropa Kognitiv-Xulq-atvor Terapiyasi Assotsiatsiyasi (EABCT) sertifikatlangan a'zosi.",
      aboutApproachTitle: "Terapevtik Yondashuv",
      aboutApproachText: "Har bir insonga chuqur hurmat va maxfiylik. Biz muammoning ildizini topib, uni kognitiv qayta dasturlash orqali hal qilamiz.",
      aboutSpecialtiesTitle: "Asosiy ixtisoslashuvlar:",
      aboutSpecialtiesList: [
        "Xavotir, vahima hujumlari va fobiyalar",
        "Depressiya va hayotiy motivatsiya pasayishi",
        "Oilaviy va munosabatlar inqirozlari",
        "Obsessiv-kompulsiv buzilishlar (OCD)",
        "Shaxsiy yuksalish va o'ziga bo'lgan ishonch"
      ],
      
      servicesTitle: "Professional Xizmatlar",
      servicesSubtitle: "Sizning ehtiyojlaringizga moslashtirilgan, fanga asoslangan individual va guruh terapiyasi seanslari",
      servicesIndividualName: "Individual terapiya",
      servicesIndividualDesc: "Shaxsiy xavotirlar, depressiya, qo'rquvlar va hayotiy yo'qotishlar bilan ishlash uchun professional yakkama-yakka yordam.",
      servicesCouplesName: "Oilaviy terapiya",
      servicesCouplesDesc: "Turmush o'rtoqlar o'rtasidagi tushunmovchiliklar, ajrim arafasidagi inqirozlar va ishonchni tiklash seanslari.",
      servicesGroupName: "Guruh terapiyasi",
      servicesGroupDesc: "O'xshash hissiy muammolarga ega insonlar bilan birgalikda professional psixolog nazorati ostida qo'llab-quvvatlash guruhi.",
      servicesDuration: "Davomiyligi:",
      servicesPrice: "Narxi:",
      servicesSelect: "Ushbuni tanlash",
      
      testTitle: "Ruhiy holat diagnostikasi (Express-test)",
      testIntro: "Ushbu ilmiy asoslangan test sizning hozirgi stress va xavotirlanish darajangizni aniqlashga yordam beradi. Javoblar mutlaqo maxfiy.",
      testStartBtn: "Testni boshlash",
      testNextBtn: "Keyingi savol",
      testResultTitle: "Sizning test natijangiz:",
      testRestartBtn: "Qayta topshirish",
      
      soundsTitle: "Meditatsiya va dam olish Lounge",
      soundsSubtitle: "Miyangizni tinchlantirish va konsentratsiyani tiklash uchun asab tizimini tinchlantiruvchi tovushlar va nafas olish mashqi",
      soundsBreatheTitle: "Kognitiv nafas olish mashqi",
      soundsBreatheSub: "Nafas oling va asablaringizni bo'shashtiring",
      soundsBreatheIn: "Nafas oling...",
      soundsBreatheHold: "Nafasni ushlab turing...",
      soundsBreatheOut: "Nafasni chiqaring...",
      
      chatTitle: "AI Psixolog-Maslahatchi",
      chatSubtitle: "Dr. Abdurahmonning sun'iy intellekt yordamchisi bilan 24/7 maxfiy suhbat qurib, dastlabki hissiy yordamni oling.",
      chatPlaceholder: "Tashvishlaringiz haqida yozing...",
      chatSendBtn: "Yuborish",
      chatDisclaimer: "Eslatma: AI maslahatchi shifokor qabulini to'liq almashtira olmaydi, ammo tezkor ruhiy ko'mak bera oladi.",
      
      bookTitle: "Qabulga shaxsiy yozilish",
      bookSubtitle: "O'zingizga qulay sana va vaqtni belgilab, shifokor qabuliga rasmiy arizangizni qoldiring.",
      bookFormService: "Xizmat turi",
      bookFormDate: "Sanani tanlang",
      bookFormTime: "Vaqtni tanlang",
      bookFormName: "To'liq ismingiz",
      bookFormPhone: "Telefon raqamingiz",
      bookFormPhonePlaceholder: "+998 (90) 123-45-67",
      bookFormEmail: "Email (ixtiyoriy)",
      bookFormNotes: "Shifokorga qisqacha xabar",
      bookSubmitBtn: "Joyni band qilish",
      bookListTitle: "Sizning band qilgan vaqtlaringiz",
      bookNoBookings: "Hozircha hech qanday vaqt band qilinmagan.",
      bookSuccessTitle: "Sizning arizangiz muvaffaqiyatli qabul qilindi!",
      bookSuccessMessage: "Dr. Abdurahmon qabuliga yozildingiz. Tez orada assistentimiz siz bilan bog'lanib, uchrashuvni tasdiqlaydi.",
    },
    ru: {
      navLogo: "DonoRuh",
      navAbout: "О докторе",
      navServices: "Услуги",
      navTest: "Тест здоровья",
      navSounds: "Релакс Лаундж",
      navContact: "Запись на прием",
      navBookBtn: "Записаться",
      
      heroBadge: "Ведущий когнитивный психолог в Ташкенте",
      heroTitle: "Возвращение к душевному покою и стабильности",
      heroSub: "Профессиональная и конфиденциальная психологическая помощь. Мы поможем вам избавиться от тревоги, депрессии, навязчивых мыслей и стресса.",
      heroBookNow: "Записаться на прием",
      heroAIQuick: "Чат с ИИ-Психологом",
      heroStatsHappy: "Счастливых клиентов",
      heroStatsSessions: "Успешных сессий",
      heroStatsRating: "Рейтинг клиентов",
      
      aboutTitle: "Д-р Абдурахмон Шерматов",
      aboutSubtitle: "Клинический психолог, когнитивно-поведенческий терапевт (КПТ)",
      aboutBio: "Более 8 лет я помогаю людям преодолевать эмоциональные кризисы, депрессию, панические атаки и семейные конфликты. Мой терапевтический метод представляет собой синтез научно доказанной КПТ, гештальт-терапии и клиентоцентрированного подхода.",
      aboutEducationTitle: "Образование и квалификация",
      aboutEducationText: "Ташкентская медицинская академия (Клиническая психология), сертифицированный член Европейской ассоциации когнитивно-поведенческой терапии (EABCT).",
      aboutApproachTitle: "Терапевтический подход",
      aboutApproachText: "Глубокое уважение и конфиденциальность для каждого клиента. Мы находим корень проблемы и решаем его с помощью когнитивного перепрограммирования.",
      aboutSpecialtiesTitle: "Основные специализации:",
      aboutSpecialtiesList: [
        "Тревожность, панические атаки и фобии",
        "Депрессия и потеря жизненной мотивации",
        "Семейные и партнерские кризисы",
        "Обсессивно-компульсивное расстройство (ОКР)",
        "Личностный рост и уверенность в себе"
      ],
      
      servicesTitle: "Профессиональные услуги",
      servicesSubtitle: "Научно обоснованные сеансы индивидуальной и групповой терапии, адаптированные под ваши потребности",
      servicesIndividualName: "Индивидуальная терапия",
      servicesIndividualDesc: "Профессиональная индивидуальная поддержка для работы с личными тревогами, депрессией, страхами и жизненными кризисами.",
      servicesCouplesName: "Семейная терапия",
      servicesCouplesDesc: "Сессии для семейных пар: преодоление недопонимания, кризисов на грани развода и восстановление доверия.",
      servicesGroupName: "Групповая терапия",
      servicesGroupDesc: "Группа поддержки под руководством профессионального психолога для людей с похожими эмоциональными трудностями.",
      servicesDuration: "Длительность:",
      servicesPrice: "Стоимость:",
      servicesSelect: "Выбрать эту услугу",
      
      testTitle: "Диагностика душевного состояния (Экспресс-тест)",
      testIntro: "Этот научно обоснованный тест поможет определить ваш текущий уровень стресса и тревожности. Все ответы строго конфиденциальны.",
      testStartBtn: "Начать тест",
      testNextBtn: "Следующий вопрос",
      testResultTitle: "Ваш результат теста:",
      testRestartBtn: "Пройти заново",
      
      soundsTitle: "Медитация и Релакс Лаундж",
      soundsSubtitle: "Успокаивающие звуки и дыхательные упражнения для снятия напряжения и восстановления концентрации ума",
      soundsBreatheTitle: "Когнитивное дыхательное упражнение",
      soundsBreatheSub: "Дышите глубоко и расслабьте нервную систему",
      soundsBreatheIn: "Вдохните...",
      soundsBreatheHold: "Задержите дыхание...",
      soundsBreatheOut: "Выдохните...",
      
      chatTitle: "ИИ Психолог-Консультант",
      chatSubtitle: "Общайтесь круглосуточно и конфиденциально с ИИ-помощником доктора Абдурахмона для получения быстрой эмоциональной поддержки.",
      chatPlaceholder: "Напишите о ваших беспокойствах...",
      chatSendBtn: "Отправить",
      chatDisclaimer: "Примечание: ИИ-консультант не заменяет полноценную консультацию врача, но может оказать оперативную психологическую поддержку.",
      
      bookTitle: "Запись на консультацию",
      bookSubtitle: "Выберите удобную дату и время, чтобы оставить официальную заявку на прием к специалисту.",
      bookFormService: "Тип услуги",
      bookFormDate: "Выберите дату",
      bookFormTime: "Выберите время",
      bookFormName: "Ваше полное имя",
      bookFormPhone: "Номер телефона",
      bookFormPhonePlaceholder: "+998 (90) 123-45-67",
      bookFormEmail: "Email (необязательно)",
      bookFormNotes: "Краткое сообщение врачу",
      bookSubmitBtn: "Забронировать место",
      bookListTitle: "Ваши бронирования",
      bookNoBookings: "У вас пока нет активных бронирований.",
      bookSuccessTitle: "Ваша заявка успешно принята!",
      bookSuccessMessage: "Вы записаны на прием к доктору Абдурахмону. В ближайшее время наш ассистент свяжется с вами для подтверждения встречи.",
    },
    en: {
      navLogo: "DonoRuh",
      navAbout: "About Doctor",
      navServices: "Services",
      navTest: "Mental Health Test",
      navSounds: "Relax Lounge",
      navContact: "Book Appointment",
      navBookBtn: "Book Now",
      
      heroBadge: "Leading Cognitive Psychologist in Tashkent",
      heroTitle: "Restore Mental Harmony and Inner Stability",
      heroSub: "Professional and highly confidential psychological support. We help you effectively overcome anxiety, depression, obsessive thoughts, and severe stress.",
      heroBookNow: "Book Appointment",
      heroAIQuick: "Chat with AI Psychologist",
      heroStatsHappy: "Happy Clients",
      heroStatsSessions: "Completed Sessions",
      heroStatsRating: "Client Rating",
      
      aboutTitle: "Dr. Abdurahmon Shermatov",
      aboutSubtitle: "Clinical Psychologist, Cognitive Behavioral Therapist (CBT)",
      aboutBio: "For over 8 years, I have been guiding individuals through emotional crises, depression, panic attacks, and marital conflicts. My therapy method blends evidence-based CBT, Gestalt, and person-centered approaches.",
      aboutEducationTitle: "Education & Qualifications",
      aboutEducationText: "Tashkent Medical Academy (Clinical Psychology), certified member of the European Association for Cognitive Behavioural Therapy (EABCT).",
      aboutApproachTitle: "Therapeutic Philosophy",
      aboutApproachText: "Deep clinical respect and absolute privacy. Together we identify the cognitive loops holding you back and reprogram them.",
      aboutSpecialtiesTitle: "Core Specialties:",
      aboutSpecialtiesList: [
        "Anxiety, panic attacks, and severe phobias",
        "Depression and lack of life motivation",
        "Marital, relationship, and family crises",
        "Obsessive-Compulsive Disorder (OCD)",
        "Self-esteem and personal transformation"
      ],
      
      servicesTitle: "Professional Services",
      servicesSubtitle: "Evidence-based individual, couples, and group therapy sessions crafted for your personal healing journey",
      servicesIndividualName: "Individual Therapy",
      servicesIndividualDesc: "One-on-one professional clinical guidance for resolving anxiety, depression, grief, and life transitions.",
      servicesCouplesName: "Couples Therapy",
      servicesCouplesDesc: "Sincere mediation sessions for couples struggling with communication, trust rebuild, or high-conflict tension.",
      servicesGroupName: "Group Workshop",
      servicesGroupDesc: "Shared space with peer support under professional psychological guidance focusing on specific wellness themes.",
      servicesDuration: "Duration:",
      servicesPrice: "Price:",
      servicesSelect: "Select Service",
      
      testTitle: "Mental Health Self-Diagnostic Test",
      testIntro: "This evidence-based self-evaluation helps analyze your current level of stress and cognitive anxiety. Completely anonymous.",
      testStartBtn: "Start Diagnostic",
      testNextBtn: "Next Question",
      testResultTitle: "Your Evaluation Results:",
      testRestartBtn: "Retake Test",
      
      soundsTitle: "Meditation & Relaxation Lounge",
      soundsSubtitle: "Calming natural audio layers and guided rhythmic breathing patterns designed to calm your central nervous system",
      soundsBreatheTitle: "Cognitive Breathing Guide",
      soundsBreatheSub: "Breathe in harmony to relax your body and focus",
      soundsBreatheIn: "Inhale...",
      soundsBreatheHold: "Hold breath...",
      soundsBreatheOut: "Exhale...",
      
      chatTitle: "AI Psychology Advisor",
      chatSubtitle: "Chat securely and anonymously 24/7 with Dr. Abdurahmon's AI assistant to find immediate emotional relief and guidance.",
      chatPlaceholder: "Share what is on your mind...",
      chatSendBtn: "Send",
      chatDisclaimer: "Disclaimer: The AI advisor is designed for supportive wellness guidance and does not replace professional medical diagnosis.",
      
      bookTitle: "Personal Appointment Reservation",
      bookSubtitle: "Select your preferred date, hour, and service to submit an official reservation directly into our clinical database.",
      bookFormService: "Service Type",
      bookFormDate: "Choose Date",
      bookFormTime: "Choose Time",
      bookFormName: "Your Full Name",
      bookFormPhone: "Phone Number",
      bookFormPhonePlaceholder: "+998 (90) 123-45-67",
      bookFormEmail: "Email (optional)",
      bookFormNotes: "Message to the Therapist",
      bookSubmitBtn: "Confirm Booking",
      bookListTitle: "Your Confirmed Schedules",
      bookNoBookings: "No bookings found in your session cache.",
      bookSuccessTitle: "Your Reservation is Registered!",
      bookSuccessMessage: "Dr. Abdurahmon's office has received your request. Our clinic assistant will call you shortly to finalize.",
    }
  };
  
  // 2. Global Application States
  let currentLanguage = 'uz';
  let chatHistory = [];
  let localBookingsList = [];
  let soundSynthesisActive = false;
  
  // Web Audio API Synthesizer Contexts and Nodes
  let audioCtx = null;
  let soundNodes = {
    rain: { gain: null, source: null },
    ocean: { gain: null, source: null },
    wind: { gain: null, source: null },
    space: { gain: null, source: null }
  };
  
  // 3. Document Element Selectors
  const DOM = {
    uzBtn: document.getElementById('lang-uz'),
    ruBtn: document.getElementById('lang-ru'),
    enBtn: document.getElementById('lang-en'),
    
    mobileUzBtn: document.getElementById('mobile-lang-uz'),
    mobileRuBtn: document.getElementById('mobile-lang-ru'),
    mobileEnBtn: document.getElementById('mobile-lang-en'),
  
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    mobileDrawer: document.getElementById('mobile-drawer'),
    mobileLinks: document.querySelectorAll('#mobile-drawer a'),
  
    // Diagnostic Test Elements
    testStartView: document.getElementById('test-start-view'),
    testActiveView: document.getElementById('test-active-view'),
    testResultView: document.getElementById('test-result-view'),
    startTestBtn: document.getElementById('start-test-btn'),
    restartTestBtn: document.getElementById('restart-test-btn'),
    testQuestionIndex: document.getElementById('test-question-index'),
    testQuestionText: document.getElementById('test-question-text'),
    testOptionsContainer: document.getElementById('test-options-container'),
    testNextBtn: document.getElementById('test-next-btn'),
    testResultValue: document.getElementById('test-result-value'),
    testResultText: document.getElementById('test-result-text'),
    testResultAdvice: document.getElementById('test-result-advice'),
    testResultCta: document.getElementById('test-result-cta'),
  
    // Meditation Lounge Elements
    guidedBreatheText: document.getElementById('guided-breathe-text'),
    breatheVisualCircle: document.getElementById('breathe-visual-circle'),
    audioMasterVolume: document.getElementById('audio-master-volume'),
    rainToggle: document.getElementById('rain-toggle'),
    rainVolume: document.getElementById('rain-volume'),
    oceanToggle: document.getElementById('ocean-toggle'),
    oceanVolume: document.getElementById('ocean-volume'),
    windToggle: document.getElementById('wind-toggle'),
    windVolume: document.getElementById('wind-volume'),
    spaceToggle: document.getElementById('space-toggle'),
    spaceVolume: document.getElementById('space-volume'),
  
    // AI Chat Elements
    chatMessages: document.getElementById('chat-messages'),
    chatInput: document.getElementById('chat-input'),
    chatSendBtn: document.getElementById('chat-send-btn'),
    chatQuickPrompts: document.getElementById('chat-quick-prompts'),
  
    // Booking Form Elements
    bookingForm: document.getElementById('booking-form'),
    bookingSuccess: document.getElementById('booking-success'),
    bookingDateScroller: document.getElementById('booking-date-scroller'),
    bookingTimeGrid: document.getElementById('booking-time-grid'),
    serviceSelect: document.getElementById('service-select'),
    bookingNameInput: document.getElementById('booking-name-input'),
    bookingPhoneInput: document.getElementById('booking-phone-input'),
    bookingEmailInput: document.getElementById('booking-email-input'),
    bookingNotesInput: document.getElementById('booking-notes-input'),
    bookingSubmitBtn: document.getElementById('booking-submit-btn'),
    bookingPriceTag: document.getElementById('booking-price-tag'),
    bookingsRecordsList: document.getElementById('bookings-records-list'),
    bookSuccessDetails: document.getElementById('book-success-details'),
    bookAnotherBtn: document.getElementById('book-another-btn'),
  };
  
  // 4. Initial Bootstrap
  window.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    setupNavigation();
    setupDiagnosticTest();
    setupRelaxationLounge();
    setupAIChat();
    setupBookingSystem();
    
    // Refresh standard lucide vector icons in DOM
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
  
  // 5. Language Engine Initialization & Translation Renderer
  function initializeLanguage() {
    const savedLang = localStorage.getItem('donoruh_lang');
    if (savedLang && ['uz', 'ru', 'en'].includes(savedLang)) {
      currentLanguage = savedLang;
    }
    
    updateLanguageButtons();
    translateEntirePage();
  }
  
  function updateLanguageButtons() {
    const activeClass = 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30';
    const inactiveClass = 'bg-slate-900/60 text-slate-400 border-slate-800/80 hover:text-slate-200';
  
    // Desktop Language Buttons
    [DOM.uzBtn, DOM.ruBtn, DOM.enBtn].forEach(btn => {
      if (btn) btn.className = `px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${inactiveClass}`;
    });
  
    const activeBtn = document.getElementById(`lang-${currentLanguage}`);
    if (activeBtn) activeBtn.className = `px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${activeClass}`;
  
    // Mobile Language Buttons
    [DOM.mobileUzBtn, DOM.mobileRuBtn, DOM.mobileEnBtn].forEach(btn => {
      if (btn) btn.className = `px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${inactiveClass}`;
    });
  
    const activeMobileBtn = document.getElementById(`mobile-lang-${currentLanguage}`);
    if (activeMobileBtn) activeMobileBtn.className = `px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${activeClass}`;
  }
  
  function changeLanguage(langCode) {
    currentLanguage = langCode;
    localStorage.setItem('donoruh_lang', langCode);
    updateLanguageButtons();
    translateEntirePage();
    
    // Re-generate working days dynamically as month/day format differs by language
    renderWorkingDays();
    renderCurrentServicePrice();
    
    // Reload diagnostic test to match language
    resetTest();
  
    // Reset chat initial prompts
    renderChatQuickPrompts();
  }
  
  // Attach switch language listeners
  [DOM.uzBtn, DOM.ruBtn, DOM.enBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const lang = btn.id.split('-')[1];
        changeLanguage(lang);
      });
    }
  });
  
  [DOM.mobileUzBtn, DOM.mobileRuBtn, DOM.mobileEnBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const lang = btn.id.split('-')[1];
        changeLanguage(lang);
        if (DOM.mobileDrawer) DOM.mobileDrawer.classList.add('hidden');
      });
    }
  });
  
  function translateEntirePage() {
    const t = translations[currentLanguage];
  
    // Map translation keys directly to IDs
    const mapping = {
      'nav-logo-text': t.navLogo,
      'nav-logo-text-footer': t.navLogo,
      'nav-about-link': t.navAbout,
      'nav-services-link': t.navServices,
      'nav-test-link': t.navTest,
      'nav-sounds-link': t.navSounds,
      'nav-contact-link': t.navContact,
      'nav-book-btn': t.navBookBtn,
      
      'hero-badge-text': t.heroBadge,
      'hero-title-text': t.heroTitle,
      'hero-sub-text': t.heroSub,
      'hero-book-cta': t.heroBookNow,
      'hero-ai-cta': t.heroAIQuick,
      'hero-stats-happy': t.heroStatsHappy,
      'hero-stats-sessions': t.heroStatsSessions,
      'hero-stats-rating': t.heroStatsRating,
      
      'about-badge': t.navAbout,
      'about-title': t.aboutTitle,
      'about-subtitle': t.aboutSubtitle,
      'about-bio': t.aboutBio,
      'about-edu-title': t.aboutEducationTitle,
      'about-edu-text': t.aboutEducationText,
      'about-approach-title': t.aboutApproachTitle,
      'about-approach-text': t.aboutApproachText,
      'about-specialties-title': t.aboutSpecialtiesTitle,
      
      'services-badge': t.navServices,
      'services-title': t.servicesTitle,
      'services-sub': t.servicesSubtitle,
      'services-individual-title': t.servicesIndividualName,
      'services-individual-desc': t.servicesIndividualDesc,
      'services-couples-title': t.servicesCouplesName,
      'services-couples-desc': t.servicesCouplesDesc,
      'services-group-title': t.servicesGroupName,
      'services-group-desc': t.servicesGroupDesc,
      
      'test-badge': t.navTest,
      'test-title': t.testTitle,
      'test-intro-text': t.testIntro,
      'start-test-btn': t.testStartBtn,
      
      'sounds-badge': t.navSounds,
      'sounds-title': t.soundsTitle,
      'sounds-sub': t.soundsSubtitle,
      'guided-breathe-title': t.soundsBreatheTitle,
      'guided-breathe-sub': t.soundsBreatheSub,
      
      'chat-badge': t.heroAIQuick,
      'chat-title': t.chatTitle,
      'chat-sub': t.chatSubtitle,
      'chat-disclaimer': t.chatDisclaimer,
      'chat-send-btn': t.chatSendBtn,
      
      'book-badge': t.navContact,
      'book-title': t.bookTitle,
      'book-sub': t.bookSubtitle,
      'book-form-service-lbl': t.bookFormService,
      'book-form-date-lbl': t.bookFormDate,
      'book-form-time-lbl': t.bookFormTime,
      'book-form-name-lbl': t.bookFormName,
      'book-form-phone-lbl': t.bookFormPhone,
      'book-form-email-lbl': t.bookFormEmail,
      'book-form-notes-lbl': t.bookFormNotes,
      'booking-submit-btn': t.bookSubmitBtn,
      'booking-records-lbl': t.bookListTitle,
      
      'success-title': t.bookSuccessTitle,
      'success-msg': t.bookSuccessMessage,
      'book-another-btn': t.uz === t.bookSuccessTitle ? 'Yana band qilish' : (currentLanguage === 'uz' ? "Yana band qilish" : currentLanguage === 'ru' ? "Забронировать еще" : "Book Another Session"),
    };
  
    for (const [id, val] of Object.entries(mapping)) {
      const el = document.getElementById(id);
      if (el) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.innerText = val;
        }
      }
    }
  
    // Update dynamic lists like Specialties list
    const specialtiesContainer = document.getElementById('about-specialties-list');
    if (specialtiesContainer) {
      specialtiesContainer.innerHTML = '';
      t.aboutSpecialtiesList.forEach(spec => {
        const li = document.createElement('div');
        li.className = "flex items-center space-x-2.5 text-xs md:text-sm text-slate-300";
        li.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span><span>${spec}</span>`;
        specialtiesContainer.appendChild(li);
      });
    }
  
    // Handle service names inside select dropdown options
    if (DOM.serviceSelect) {
      const options = DOM.serviceSelect.options;
      options[0].text = t.servicesIndividualName;
      options[0].value = t.servicesIndividualName;
      options[1].text = t.servicesCouplesName;
      options[1].value = t.servicesCouplesName;
      options[2].text = t.servicesGroupName;
      options[2].value = t.servicesGroupName;
    }
  
    // Translate labels like "Narxi" or "Davomiyligi" inside cards
    document.querySelectorAll('.duration-label').forEach(el => el.textContent = t.servicesDuration);
    document.querySelectorAll('.price-label').forEach(el => el.textContent = t.servicesPrice);
    document.querySelectorAll('.select-service-btn').forEach(el => el.textContent = t.servicesSelect);
  
    // Re-render select pricing values
    const prices = {
      individual: currentLanguage === 'uz' ? '450,000 UZS' : currentLanguage === 'ru' ? '450 000 сум' : '45 USD',
      couples: currentLanguage === 'uz' ? '650,000 UZS' : currentLanguage === 'ru' ? '650 000 сум' : '60 USD',
      group: currentLanguage === 'uz' ? '300,000 UZS' : currentLanguage === 'ru' ? '300 000 сум' : '30 USD'
    };
  
    const indPriceEl = document.getElementById('price-individual');
    if (indPriceEl) indPriceEl.innerText = prices.individual;
    const cplPriceEl = document.getElementById('price-couples');
    if (cplPriceEl) cplPriceEl.innerText = prices.couples;
    const grpPriceEl = document.getElementById('price-group');
    if (grpPriceEl) grpPriceEl.innerText = prices.group;
  
    if (DOM.chatInput) {
      DOM.chatInput.placeholder = t.chatPlaceholder;
    }
  }
  
  // 6. Navigation Control (Smooth Scroll, Mobile Hamburger)
  function setupNavigation() {
    if (DOM.mobileMenuToggle && DOM.mobileDrawer) {
      DOM.mobileMenuToggle.addEventListener('click', () => {
        DOM.mobileDrawer.classList.toggle('hidden');
      });
    }
  
    DOM.mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (DOM.mobileDrawer) DOM.mobileDrawer.classList.add('hidden');
      });
    });
  
    // Enable selecting service card click to auto-populate and scroll to Booking
    window.handleSelectService = function(serviceTypeTranslationKey) {
      let finalService = '';
      const t = translations[currentLanguage];
      if (serviceTypeTranslationKey === 'individual') finalService = t.servicesIndividualName;
      if (serviceTypeTranslationKey === 'couples') finalService = t.servicesCouplesName;
      if (serviceTypeTranslationKey === 'group') finalService = t.servicesGroupName;
  
      if (DOM.serviceSelect) {
        DOM.serviceSelect.value = finalService;
        renderCurrentServicePrice();
      }
  
      const bookingSec = document.getElementById('booking-section');
      if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: 'smooth' });
      }
    };
  }
  
  // 7. Psychological Self-Evaluation Diagnostic Test Engine
  const testQuestions = [
    {
      id: 1,
      text: {
        uz: "So'nggi paytlarda sababsiz xavotirlanish va asabiylikni his qilyapsizmi?",
        ru: "Чувствуете ли вы в последнее время беспричинную тревогу или нервозность?",
        en: "Have you been feeling anxious or nervous lately without any clear reason?"
      },
      options: [
        { text: { uz: "Hech qachon", ru: "Никогда", en: "Never" }, score: 0 },
        { text: { uz: "Ba'zan", ru: "Иногда", en: "Sometimes" }, score: 1 },
        { text: { uz: "Tez-tez", ru: "Часто", en: "Often" }, score: 2 },
        { text: { uz: "Doimo", ru: "Постоянно", en: "Always" }, score: 3 }
      ]
    },
    {
      id: 2,
      text: {
        uz: "Uyquga ketishda qiyinchiliklar yoki uyqusizlik bezovta qilyaptimi?",
        ru: "Беспокоит ли вас бессонница или трудности с засыпанием?",
        en: "Are you troubled by insomnia or difficulty falling asleep?"
      },
      options: [
        { text: { uz: "Hech qachon", ru: "Никогда", en: "Never" }, score: 0 },
        { text: { uz: "Ba'zan", ru: "Иногда", en: "Sometimes" }, score: 1 },
        { text: { uz: "Tez-tez", ru: "Часто", en: "Often" }, score: 2 },
        { text: { uz: "Doimo", ru: "Постоянно", en: "Always" }, score: 3 }
      ]
    },
    {
      id: 3,
      text: {
        uz: "Kelajakka nisbatan umidsizlik yoki tushkunlik hissi bormi?",
        ru: "Есть ли у вас чувство безнадежности или апатии по отношению к будущему?",
        en: "Do you have feelings of hopelessness or apathy regarding your future?"
      },
      options: [
        { text: { uz: "Hech qachon", ru: "Никогда", en: "Never" }, score: 0 },
        { text: { uz: "Ba'zan", ru: "Иногда", en: "Sometimes" }, score: 1 },
        { text: { uz: "Tez-tez", ru: "Часто", en: "Often" }, score: 2 },
        { text: { uz: "Doimo", ru: "Постоянно", en: "Always" }, score: 3 }
      ]
    },
    {
      id: 4,
      text: {
        uz: "Diqqatni bir joyga jamlashda qiyinchiliklarga duch kelyapsizmi?",
        ru: "Испытываете ли вы трудности с концентрацией внимания?",
        en: "Do you experience difficulty concentrating or staying focused?"
      },
      options: [
        { text: { uz: "Hech qachon", ru: "Никогда", en: "Never" }, score: 0 },
        { text: { uz: "Ba'zan", ru: "Иногда", en: "Sometimes" }, score: 1 },
        { text: { uz: "Tez-tez", ru: "Часто", en: "Often" }, score: 2 },
        { text: { uz: "Doimo", ru: "Постоянно", en: "Always" }, score: 3 }
      ]
    },
    {
      id: 5,
      text: {
        uz: "Tez va kutilmagan vahima/panika holati kuzatilyaptimi?",
        ru: "Случаются ли у вас внезапные приступы паники?",
        en: "Do you experience sudden, unexpected attacks of panic or fear?"
      },
      options: [
        { text: { uz: "Hech qachon", ru: "Никогда", en: "Never" }, score: 0 },
        { text: { uz: "Ba'zan", ru: "Иногда", en: "Sometimes" }, score: 1 },
        { text: { uz: "Tez-tez", ru: "Часто", en: "Often" }, score: 2 },
        { text: { uz: "Doimo", ru: "Постоянно", en: "Always" }, score: 3 }
      ]
    }
  ];
  
  let currentQuestionIdx = 0;
  let testTotalScore = 0;
  let selectedOptionScore = null;
  
  function setupDiagnosticTest() {
    if (DOM.startTestBtn) {
      DOM.startTestBtn.addEventListener('click', startTest);
    }
    if (DOM.testNextBtn) {
      DOM.testNextBtn.addEventListener('click', handleNextQuestion);
    }
    if (DOM.restartTestBtn) {
      DOM.restartTestBtn.addEventListener('click', resetTest);
    }
    if (DOM.testResultCta) {
      DOM.testResultCta.addEventListener('click', () => {
        const bookingSec = document.getElementById('booking-section');
        if (bookingSec) bookingSec.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }
  
  function startTest() {
    if (DOM.testStartView && DOM.testActiveView) {
      DOM.testStartView.classList.add('hidden');
      DOM.testActiveView.classList.remove('hidden');
      currentQuestionIdx = 0;
      testTotalScore = 0;
      renderQuestion();
    }
  }
  
  function renderQuestion() {
    if (currentQuestionIdx >= testQuestions.length) {
      renderTestResults();
      return;
    }
  
    selectedOptionScore = null;
    if (DOM.testNextBtn) {
      DOM.testNextBtn.disabled = true;
      DOM.testNextBtn.className = "w-full md:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-500 cursor-not-allowed transition-all";
    }
  
    const question = testQuestions[currentQuestionIdx];
    if (DOM.testQuestionIndex) {
      DOM.testQuestionIndex.innerText = `${currentLanguage === 'uz' ? 'Savol' : currentLanguage === 'ru' ? 'Вопрос' : 'Question'} ${currentQuestionIdx + 1} / ${testQuestions.length}`;
    }
    if (DOM.testQuestionText) {
      DOM.testQuestionText.innerText = question.text[currentLanguage];
    }
  
    if (DOM.testOptionsContainer) {
      DOM.testOptionsContainer.innerHTML = '';
      question.options.forEach((opt, idx) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = "w-full text-left px-5 py-4 bg-slate-950/40 hover:bg-slate-950 border border-slate-800/80 hover:border-slate-700/60 rounded-xl text-xs sm:text-sm text-slate-300 transition-all cursor-pointer flex justify-between items-center";
        button.innerHTML = `<span>${opt.text[currentLanguage]}</span><span class="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-xs text-transparent">✓</span>`;
        
        button.addEventListener('click', () => {
          // Clear selected states
          Array.from(DOM.testOptionsContainer.children).forEach(child => {
            child.classList.remove('border-emerald-500', 'bg-emerald-500/5', 'text-emerald-400');
            child.classList.add('border-slate-800/80', 'bg-slate-950/40', 'text-slate-300');
            child.querySelector('span:last-child').className = "w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-xs text-transparent";
          });
  
          // Apply active states
          button.classList.add('border-emerald-500', 'bg-emerald-500/5', 'text-emerald-400');
          button.classList.remove('border-slate-800/80', 'bg-slate-950/40', 'text-slate-300');
          button.querySelector('span:last-child').className = "w-5 h-5 rounded-full border border-emerald-500 bg-emerald-600 text-white flex items-center justify-center text-[10px]";
  
          selectedOptionScore = opt.score;
          if (DOM.testNextBtn) {
            DOM.testNextBtn.disabled = false;
            DOM.testNextBtn.className = "w-full md:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer transition-all shadow-[0_4px_15px_rgba(16,185,129,0.2)]";
          }
        });
  
        DOM.testOptionsContainer.appendChild(button);
      });
    }
  }
  
  function handleNextQuestion() {
    if (selectedOptionScore !== null) {
      testTotalScore += selectedOptionScore;
      currentQuestionIdx++;
      renderQuestion();
    }
  }
  
  function renderTestResults() {
    if (DOM.testActiveView && DOM.testResultView) {
      DOM.testActiveView.classList.add('hidden');
      DOM.testResultView.classList.remove('hidden');
  
      const scorePct = Math.round((testTotalScore / (testQuestions.length * 3)) * 100);
      if (DOM.testResultValue) {
        DOM.testResultValue.innerText = `${scorePct}%`;
      }
  
      let statusText = '';
      let adviceText = '';
      let ctaText = '';
  
      if (scorePct <= 30) {
        statusText = currentLanguage === 'uz' ? "Sog'lom / Minimal asabiylik" : currentLanguage === 'ru' ? "Здоровое / Минимальный стресс" : "Healthy / Minimal Anxiety";
        adviceText = currentLanguage === 'uz' 
          ? "Sizning ruhiy holatingiz juda barqaror va mustahkam. Profilaktika maqsadida rekrasiya lounge va nafas olish mashqlaridan foydalanib turishingiz mumkin." 
          : currentLanguage === 'ru' 
          ? "Ваше ментальное состояние очень стабильно. Для профилактики вы можете использовать релакс лаундж и дыхательные упражнения."
          : "Your mental state is remarkably stable. For preventive wellness, enjoy our relaxation lounge and breathing exercises.";
        ctaText = currentLanguage === 'uz' ? "Mualaja olish" : currentLanguage === 'ru' ? "Процедура" : "Check services";
      } else if (scorePct <= 70) {
        statusText = currentLanguage === 'uz' ? "O'rtacha stress va bezovtalik" : currentLanguage === 'ru' ? "Умеренный стресс и тревога" : "Moderate Stress & Worry";
        adviceText = currentLanguage === 'uz'
          ? "Sizda o'rtacha darajadagi hissiy charchash va stress kuzatilmoqda. Biz sizga individual kognitiv terapiya seansini olishni hamda hayotiy muvozanatni tiklashni tavsiya qilamiz."
          : currentLanguage === 'ru'
          ? "Вы испытываете умеренный уровень эмоционального выгорания и стресса. Мы рекомендуем пройти сессию индивидуальной КПТ для восстановления баланса."
          : "You are experiencing moderate levels of burnout and stress. We highly recommend scheduling an individual CBT consultation to restore alignment.";
        ctaText = currentLanguage === 'uz' ? "Shifokorga yozilish" : currentLanguage === 'ru' ? "Записаться к доктору" : "Book clinical call";
      } else {
        statusText = currentLanguage === 'uz' ? "Yuqori stress / Depressiv profil" : currentLanguage === 'ru' ? "Высокий уровень стресса и истощения" : "Severe Tension / Depressive Outline";
        adviceText = currentLanguage === 'uz'
          ? "Sizning asab tizimingiz hozirda juda yuqori kuchlanish ostida ishlamoqda. Kognitiv-xulq-atvor terapiyasi orqali depressiv sikllardan chiqish va vahima hujumlarini to'xtatish bo'yicha shoshilinch yordam olishni maslahat beramiz."
          : currentLanguage === 'ru'
          ? "Ваша нервная система работает на пределе возможностей. Рекомендуем срочно записаться на терапию, чтобы выйти из депрессивных петель и блокировать панику."
          : "Your nervous system is currently highly overtaxed. We strongly recommend immediate professional guidance to break depressive loops and panic cycles.";
        ctaText = currentLanguage === 'uz' ? "Shoshilinch yozilish" : currentLanguage === 'ru' ? "Срочная запись" : "Immediate reservation";
      }
  
      if (DOM.testResultText) DOM.testResultText.innerText = statusText;
      if (DOM.testResultAdvice) DOM.testResultAdvice.innerText = adviceText;
      if (DOM.testResultCta) DOM.testResultCta.innerText = ctaText;
    }
  }
  
  function resetTest() {
    if (DOM.testResultView && DOM.testStartView) {
      DOM.testResultView.classList.add('hidden');
      DOM.testActiveView.classList.add('hidden');
      DOM.testStartView.classList.remove('hidden');
    }
  }
  
  // 8. Guided Breathing & Web Audio Natural Audio Generator
  let breathingInterval = null;
  function setupRelaxationLounge() {
    // Setup interactive breath guide cycles
    startGuidedBreathing();
  
    // Volume slider event listener
    if (DOM.audioMasterVolume) {
      DOM.audioMasterVolume.addEventListener('input', (e) => {
        const vol = parseFloat(e.target.value);
        updateSynthesizerVolumes(vol);
      });
    }
  
    // Toggle buttons
    const soundControls = [
      { toggle: DOM.rainToggle, volume: DOM.rainVolume, sound: 'rain' },
      { toggle: DOM.oceanToggle, volume: DOM.oceanVolume, sound: 'ocean' },
      { toggle: DOM.windToggle, volume: DOM.windVolume, sound: 'wind' },
      { toggle: DOM.spaceToggle, volume: DOM.spaceVolume, sound: 'space' }
    ];
  
    soundControls.forEach(ctrl => {
      if (ctrl.toggle) {
        ctrl.toggle.addEventListener('click', () => {
          toggleSoundElement(ctrl.sound);
        });
      }
      if (ctrl.volume) {
        ctrl.volume.addEventListener('input', (e) => {
          updateSingleSoundVolume(ctrl.sound, parseFloat(e.target.value));
        });
      }
    });
  }
  
  function startGuidedBreathing() {
    if (breathingInterval) clearInterval(breathingInterval);
    
    let phase = 0; // 0: inhale, 1: hold, 2: exhale
    const t = translations[currentLanguage];
  
    const runBreathingCycle = () => {
      const t = translations[currentLanguage];
      if (phase === 0) {
        if (DOM.guidedBreatheText) DOM.guidedBreatheText.innerText = t.soundsBreatheIn;
        if (DOM.breatheVisualCircle) {
          DOM.breatheVisualCircle.className = "w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-emerald-500/30 bg-emerald-500/20 flex items-center justify-center transition-all duration-[4000ms] ease-in-out transform scale-110 shadow-[0_0_35px_rgba(16,185,129,0.35)]";
        }
        phase = 1;
      } else if (phase === 1) {
        if (DOM.guidedBreatheText) DOM.guidedBreatheText.innerText = t.soundsBreatheHold;
        if (DOM.breatheVisualCircle) {
          DOM.breatheVisualCircle.className = "w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-teal-500/40 bg-teal-500/25 flex items-center justify-center transition-all duration-[4000ms] ease-in-out transform scale-110 shadow-[0_0_40px_rgba(20,184,166,0.4)]";
        }
        phase = 2;
      } else {
        if (DOM.guidedBreatheText) DOM.guidedBreatheText.innerText = t.soundsBreatheOut;
        if (DOM.breatheVisualCircle) {
          DOM.breatheVisualCircle.className = "w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-emerald-500/10 bg-emerald-500/5 flex items-center justify-center transition-all duration-[4000ms] ease-in-out transform scale-100 shadow-none";
        }
        phase = 0;
      }
    };
  
    runBreathingCycle();
    breathingInterval = setInterval(runBreathingCycle, 4000);
  }
  
  // 9. Web Audio API Noise Generators (Rain, Wind, Waves, Cosmos Space)
  function initAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }
  
  // White/Pink noise generation buffer for organic soundscapes
  function createNoiseBuffer(type) {
    initAudioContext();
    const bufferSize = 2 * audioCtx.sampleRate;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (type === 'pink') {
        // Pink noise approximation filter
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // Gain compensation
      } else if (type === 'brown') {
        // Brown noise approximation filter (deep rumbles)
        output[i] = (lastOut + (0.05 * white)) / 1.05;
        lastOut = output[i];
        output[i] *= 3.5;
      } else {
        output[i] = white * 0.4;
      }
    }
    return noiseBuffer;
  }
  
  function startRainSynth() {
    const noise = audioCtx.createBufferSource();
    noise.buffer = createNoiseBuffer('pink');
    noise.loop = true;
  
    // Filter to make it sound like real pouring rain drops
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1400;
  
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = parseFloat(DOM.rainVolume.value) * parseFloat(DOM.audioMasterVolume.value);
  
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  
    noise.start();
    soundNodes.rain.source = noise;
    soundNodes.rain.gain = gainNode;
  }
  
  function startOceanSynth() {
    // Ocean synthesis uses deep brown noise modulated by an LFO to recreate sweeping waves
    const noise = audioCtx.createBufferSource();
    noise.buffer = createNoiseBuffer('brown');
    noise.loop = true;
  
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 350;
  
    const sweepGain = audioCtx.createGain();
    sweepGain.gain.value = parseFloat(DOM.oceanVolume.value) * parseFloat(DOM.audioMasterVolume.value);
  
    // LFO modulator for wave periodicity (approx 10-second waves)
    const lfo = audioCtx.createOscillator();
    lfo.frequency.value = 0.12; // 8-10 seconds sweep
    const lfoGain = audioCtx.createGain();
    lfoGain.gain.value = 0.15;
  
    lfo.connect(lfoGain);
    lfoGain.connect(sweepGain.gain); // Modulate wave volume
    
    noise.connect(filter);
    filter.connect(sweepGain);
    sweepGain.connect(audioCtx.destination);
  
    noise.start();
    lfo.start();
  
    soundNodes.ocean.source = {
      stop: () => {
        noise.stop();
        lfo.stop();
      }
    };
    soundNodes.ocean.gain = sweepGain;
  }
  
  function startWindSynth() {
    const noise = audioCtx.createBufferSource();
    noise.buffer = createNoiseBuffer('pink');
    noise.loop = true;
  
    // Dynamic filter modulated by a slow LFO for howling forest wind
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 600;
    filter.Q.value = 3.0;
  
    const lfo = audioCtx.createOscillator();
    lfo.frequency.value = 0.08;
    const lfoGain = audioCtx.createGain();
    lfoGain.gain.value = 450; // Sweeping filter ranges
  
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = parseFloat(DOM.windVolume.value) * parseFloat(DOM.audioMasterVolume.value);
  
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
  
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  
    noise.start();
    lfo.start();
  
    soundNodes.wind.source = {
      stop: () => {
        noise.stop();
        lfo.stop();
      }
    };
    soundNodes.wind.gain = gainNode;
  }
  
  function startSpaceSynth() {
    // Deep interstellar drone synthesis (binaural delta wave oscillation)
    const osc1 = audioCtx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.value = 108; // Solfeggio frequency 108Hz
  
    const osc2 = audioCtx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = 111; // 3Hz Delta wave difference
  
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = parseFloat(DOM.spaceVolume.value) * parseFloat(DOM.audioMasterVolume.value) * 0.5;
  
    // Lowpass filter to avoid high-frequency fatigue
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 250;
  
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  
    osc1.start();
    osc2.start();
  
    soundNodes.space.source = {
      stop: () => {
        osc1.stop();
        osc2.stop();
      }
    };
    soundNodes.space.gain = gainNode;
  }
  
  function toggleSoundElement(soundName) {
    initAudioContext();
    const toggleBtn = document.getElementById(`${soundName}-toggle`);
    const isActive = toggleBtn.getAttribute('data-active') === 'true';
  
    if (isActive) {
      // Stop synthesis
      if (soundNodes[soundName].source) {
        soundNodes[soundName].source.stop();
        soundNodes[soundName].source = null;
      }
      toggleBtn.setAttribute('data-active', 'false');
      toggleBtn.className = "p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700 transition-all cursor-pointer";
      toggleBtn.innerHTML = `<span class="text-xs font-mono select-none">OFF</span>`;
    } else {
      // Start synthesis
      if (soundName === 'rain') startRainSynth();
      if (soundName === 'ocean') startOceanSynth();
      if (soundName === 'wind') startWindSynth();
      if (soundName === 'space') startSpaceSynth();
  
      toggleBtn.setAttribute('data-active', 'true');
      toggleBtn.className = "p-3 rounded-xl bg-emerald-600/20 border border-emerald-500 text-emerald-400 font-bold transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.15)]";
      toggleBtn.innerHTML = `<span class="text-xs font-mono select-none">ON</span>`;
    }
  }
  
  function updateSingleSoundVolume(soundName, val) {
    if (soundNodes[soundName].gain) {
      const masterVol = parseFloat(DOM.audioMasterVolume.value);
      soundNodes[soundName].gain.gain.value = val * masterVol;
    }
  }
  
  function updateSynthesizerVolumes(masterVolumeValue) {
    const soundNames = ['rain', 'ocean', 'wind', 'space'];
    soundNames.forEach(sound => {
      if (soundNodes[sound].gain) {
        const singleVol = parseFloat(document.getElementById(`${sound}-volume`).value);
        soundNodes[sound].gain.gain.value = singleVol * masterVolumeValue;
      }
    });
  }
  
  // 10. AI Therapist Assistant Chat Interface & Message Streams
  function setupAIChat() {
    renderChatQuickPrompts();
  
    if (DOM.chatSendBtn) {
      DOM.chatSendBtn.addEventListener('click', sendUserChatMessage);
    }
    if (DOM.chatInput) {
      DOM.chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendUserChatMessage();
        }
      });
    }
  }
  
  function renderChatQuickPrompts() {
    if (DOM.chatQuickPrompts) {
      DOM.chatQuickPrompts.innerHTML = '';
      const prompts = {
        uz: [
          "Xavotirlar meni qiynamoqda",
          "Yaqinda yaqin insonimni yo'qotdim",
          "Doimiy charchoqni qanday yengish mumkin?"
        ],
        ru: [
          "Меня мучает сильная тревога",
          "Чувствую постоянное выгорание",
          "Как наладить сон и режим?"
        ],
        en: [
          "I feel constant emotional burnout",
          "How can I manage severe panic?",
          "Help me process intense stress"
        ]
      };
  
      prompts[currentLanguage].forEach(prompt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = "px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-slate-100 border border-slate-800 rounded-xl text-xs font-medium cursor-pointer transition-all shrink-0";
        btn.innerText = prompt;
        btn.addEventListener('click', () => {
          if (DOM.chatInput) {
            DOM.chatInput.value = prompt;
            sendUserChatMessage();
          }
        });
        DOM.chatQuickPrompts.appendChild(btn);
      });
    }
  }
  
  async function sendUserChatMessage() {
    const messageText = DOM.chatInput.value.trim();
    if (!messageText) return;
  
    // Append User Bubble
    appendChatMessage('user', messageText);
    DOM.chatInput.value = '';
  
    // Append Loading State dots
    const loadingId = 'ai-loading-' + Math.random().toString(36).substr(2, 9);
    appendChatLoadingIndicator(loadingId);
  
    try {
      const payload = {
        message: messageText,
        history: chatHistory,
        language: currentLanguage
      };
  
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
  
      const data = await response.json();
      removeChatLoadingIndicator(loadingId);
  
      if (data.success && data.reply) {
        appendChatMessage('ai', data.reply);
        // Append to local dialog history
        chatHistory.push({ sender: 'user', text: messageText });
        chatHistory.push({ sender: 'ai', text: data.reply });
      } else {
        throw new Error("AI Reply error");
      }
    } catch (err) {
      console.error("AI Error:", err);
      removeChatLoadingIndicator(loadingId);
      
      // Friendly error statement fallback
      const errReplies = {
        uz: "Kechirasiz, hozirgi vaqtda server aloqasida uzilish yuz berdi. Iltimos, nafas mashqini bajarib ko'ring yoki birozdan so'ng qayta aloqaga chiqing.",
        ru: "Извините, возникли проблемы со связью с сервером. Пожалуйста, попробуйте сделать дыхательное упражнение или повторите запрос позже.",
        en: "Apologies, we encountered a temporary connection issue. Please try doing our breathing exercise and return shortly."
      };
      appendChatMessage('ai', errReplies[currentLanguage]);
    }
  }
  
  function appendChatMessage(sender, text) {
    if (!DOM.chatMessages) return;
  
    const bubble = document.createElement('div');
    const isUser = sender === 'user';
    
    bubble.className = isUser 
      ? "flex items-end space-x-2.5 justify-end fade-in"
      : "flex items-start space-x-2.5 fade-in";
  
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
    // Parsing markdown links, strong text, and lists manually for smooth rendering
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-slate-900 px-1 py-0.5 rounded font-mono text-xs">$1</code>')
      .replace(/\n/g, '<br/>');
  
    if (isUser) {
      bubble.innerHTML = `
        <div class="space-y-1 text-right">
          <div class="inline-block bg-emerald-600 text-white rounded-2xl rounded-br-none px-4 py-3 text-xs md:text-sm max-w-sm text-left shadow-[0_2px_10px_rgba(16,185,129,0.15)] leading-relaxed">
            ${formattedText}
          </div>
          <p class="text-[10px] text-slate-500 font-mono">${timeString}</p>
        </div>
        <div class="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono text-slate-300 select-none">
          ME
        </div>
      `;
    } else {
      bubble.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.25)]">
          <span class="text-[10px] font-bold font-mono">DR</span>
        </div>
        <div class="space-y-1">
          <p class="text-[10px] font-semibold text-slate-400 font-mono uppercase tracking-wider">${translations[currentLanguage].navLogo} AI</p>
          <div class="inline-block bg-slate-900 border border-slate-800 rounded-2xl rounded-bl-none px-4 py-3 text-xs md:text-sm max-w-sm text-slate-200 leading-relaxed">
            ${formattedText}
          </div>
          <p class="text-[10px] text-slate-500 font-mono">${timeString}</p>
        </div>
      `;
    }
  
    DOM.chatMessages.appendChild(bubble);
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
  }
  
  function appendChatLoadingIndicator(id) {
    if (!DOM.chatMessages) return;
  
    const bubble = document.createElement('div');
    bubble.id = id;
    bubble.className = "flex items-start space-x-2.5 fade-in";
    bubble.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
        ●
      </div>
      <div class="space-y-1">
        <div class="bg-slate-900/50 border border-slate-800/80 rounded-2xl rounded-bl-none px-4 py-3 text-xs text-slate-500 flex items-center space-x-1.5 font-mono">
          <span class="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.2s]"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.4s]"></span>
        </div>
      </div>
    `;
    DOM.chatMessages.appendChild(bubble);
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
  }
  
  function removeChatLoadingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }
  
  // 11. Appointment Booking Engine with scroller, grid and records
  let selectedBookingDate = '';
  let selectedBookingTime = '';
  
  function setupBookingSystem() {
    renderWorkingDays();
    renderCurrentServicePrice();
    fetchServerBookings();
  
    if (DOM.serviceSelect) {
      DOM.serviceSelect.addEventListener('change', renderCurrentServicePrice);
    }
  
    if (DOM.bookingForm) {
      DOM.bookingForm.addEventListener('submit', handleNewBookingSubmission);
    }
  
    if (DOM.bookAnotherBtn) {
      DOM.bookAnotherBtn.addEventListener('click', () => {
        if (DOM.bookingSuccess && DOM.bookingForm) {
          DOM.bookingSuccess.classList.add('hidden');
          DOM.bookingForm.classList.remove('hidden');
          DOM.bookingNameInput.value = '';
          DOM.bookingPhoneInput.value = '';
          DOM.bookingEmailInput.value = '';
          DOM.bookingNotesInput.value = '';
          selectedBookingTime = '';
          renderTimeSlotsGrid();
        }
      });
    }
  }
  
  function getNext10WorkingDays() {
    const days = [];
    const now = new Date();
    let count = 0;
  
    const weekNames = {
      uz: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'],
      ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    };
  
    const monthNames = {
      uz: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'],
      ru: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
  
    while (count < 10) {
      now.setDate(now.getDate() + 1);
      const dayOfWeek = now.getDay();
  
      if (dayOfWeek !== 0) { // Exclude Sundays
        const dayNum = now.getDate();
        const monthName = monthNames[currentLanguage][now.getMonth()];
        const formattedDate = `${dayNum} ${monthName}`;
        const dayLabel = weekNames[currentLanguage][dayOfWeek];
        const iso = now.toISOString().split('T')[0];
  
        days.push({ dayLabel, dayNum, formattedDate, iso });
        count++;
      }
    }
    return days;
  }
  
  function renderWorkingDays() {
    if (!DOM.bookingDateScroller) return;
  
    const days = getNext10WorkingDays();
    DOM.bookingDateScroller.innerHTML = '';
    
    if (days.length > 0 && !selectedBookingDate) {
      selectedBookingDate = days[0].iso;
    }
  
    days.forEach(day => {
      const isSelected = selectedBookingDate === day.iso;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.id = `date-pill-${day.iso}`;
      btn.className = `flex flex-col items-center justify-center min-w-[70px] py-3 rounded-xl border transition-all duration-300 shrink-0 snap-center cursor-pointer ${
        isSelected
          ? 'bg-emerald-600/25 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700/60 text-slate-400 hover:text-slate-200'
      }`;
  
      btn.innerHTML = `
        <span class="text-[10px] font-mono uppercase tracking-widest leading-none mb-1">${day.dayLabel}</span>
        <span class="text-lg font-bold leading-none mb-1">${day.dayNum}</span>
        <span class="text-[9px] text-slate-500 truncate max-w-[64px]">${day.formattedDate.split(' ')[1]}</span>
      `;
  
      btn.addEventListener('click', () => {
        selectedBookingDate = day.iso;
        // Re-render active date classes
        Array.from(DOM.bookingDateScroller.children).forEach(child => {
          child.className = `flex flex-col items-center justify-center min-w-[70px] py-3 rounded-xl border transition-all duration-300 shrink-0 snap-center cursor-pointer bg-slate-950/60 border-slate-800/80 hover:border-slate-700/60 text-slate-400 hover:text-slate-200`;
        });
        btn.className = `flex flex-col items-center justify-center min-w-[70px] py-3 rounded-xl border transition-all duration-300 shrink-0 snap-center cursor-pointer bg-emerald-600/25 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]`;
      });
  
      DOM.bookingDateScroller.appendChild(btn);
    });
  
    renderTimeSlotsGrid();
  }
  
  function renderTimeSlotsGrid() {
    if (!DOM.bookingTimeGrid) return;
  
    const slots = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30'];
    DOM.bookingTimeGrid.innerHTML = '';
  
    slots.forEach(time => {
      const isSelected = selectedBookingTime === time;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `py-2 rounded-lg text-xs font-mono font-medium border text-center transition-all duration-200 cursor-pointer ${
        isSelected
          ? 'bg-emerald-600 text-white border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
          : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700/50 text-slate-400 hover:text-slate-100'
      }`;
      btn.innerText = time;
  
      btn.addEventListener('click', () => {
        selectedBookingTime = time;
        Array.from(DOM.bookingTimeGrid.children).forEach(child => {
          child.className = `py-2 rounded-lg text-xs font-mono font-medium border text-center transition-all duration-200 cursor-pointer bg-slate-950/40 border-slate-800/80 hover:border-slate-700/50 text-slate-400 hover:text-slate-100`;
        });
        btn.className = `py-2 rounded-lg text-xs font-mono font-medium border text-center transition-all duration-200 cursor-pointer bg-emerald-600 text-white border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.15)]`;
      });
  
      DOM.bookingTimeGrid.appendChild(btn);
    });
  }
  
  function getServicePriceValue(serviceName) {
    const t = translations[currentLanguage];
    if (serviceName === t.servicesCouplesName) {
      return currentLanguage === 'uz' ? '650,000 UZS' : currentLanguage === 'ru' ? '650 000 сум' : '60 USD';
    } else if (serviceName === t.servicesGroupName) {
      return currentLanguage === 'uz' ? '300,000 UZS' : currentLanguage === 'ru' ? '300 000 сум' : '30 USD';
    } else {
      return currentLanguage === 'uz' ? '450,000 UZS' : currentLanguage === 'ru' ? '450 000 сум' : '45 USD';
    }
  }
  
  function renderCurrentServicePrice() {
    if (DOM.serviceSelect && DOM.bookingPriceTag) {
      const val = DOM.serviceSelect.value;
      const price = getServicePriceValue(val);
      DOM.bookingPriceTag.innerText = price;
    }
  }
  
  async function handleNewBookingSubmission(e) {
    e.preventDefault();
  
    const name = DOM.bookingNameInput.value.trim();
    const phone = DOM.bookingPhoneInput.value.trim();
    const email = DOM.bookingEmailInput.value.trim();
    const notes = DOM.bookingNotesInput.value.trim();
    const serviceType = DOM.serviceSelect.value;
  
    if (!name || !phone || !selectedBookingDate || !selectedBookingTime) {
      return;
    }
  
    DOM.bookingSubmitBtn.disabled = true;
    DOM.bookingSubmitBtn.innerText = '...';
  
    const priceVal = getServicePriceValue(serviceType);
  
    const payload = {
      name,
      phone,
      email,
      serviceType,
      date: selectedBookingDate,
      time: selectedBookingTime,
      notes,
      price: priceVal
    };
  
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
  
      const data = await response.json();
      if (data.success && data.booking) {
        saveBookingInLocalStorage(data.booking);
        showSuccessfulBookingView(data.booking);
      } else {
        throw new Error("Server booking failure");
      }
    } catch (err) {
      console.warn("Server booking error, applying local fallback:", err);
      // Offline / Network loss client-side fallback booking
      const fallbackBooking = {
        id: 'b_local_' + Math.random().toString(36).substr(2, 9),
        ...payload,
        createdAt: new Date().toISOString()
      };
      saveBookingInLocalStorage(fallbackBooking);
      showSuccessfulBookingView(fallbackBooking);
    } finally {
      DOM.bookingSubmitBtn.disabled = false;
      DOM.bookingSubmitBtn.innerText = translations[currentLanguage].bookSubmitBtn;
    }
  }
  
  function saveBookingInLocalStorage(booking) {
    const current = localStorage.getItem('donoruh_bookings');
    const arr = current ? JSON.parse(current) : [];
    arr.unshift(booking);
    localStorage.setItem('donoruh_bookings', JSON.stringify(arr));
    
    localBookingsList = arr;
    renderBookingsRecords();
  }
  
  function showSuccessfulBookingView(booking) {
    if (DOM.bookingForm && DOM.bookingSuccess) {
      DOM.bookingForm.classList.add('hidden');
      DOM.bookingSuccess.classList.remove('hidden');
  
      // Build summary table
      if (DOM.bookSuccessDetails) {
        DOM.bookSuccessDetails.innerHTML = `
          <div class="flex items-center justify-between border-b border-slate-800/60 pb-2">
            <span class="text-xs text-slate-500 uppercase font-mono">${translations[currentLanguage].bookFormService}</span>
            <span class="text-xs text-emerald-400 font-medium">${booking.serviceType}</span>
          </div>
          <div class="flex items-center justify-between border-b border-slate-800/60 pb-2">
            <span class="text-xs text-slate-500 uppercase font-mono">${translations[currentLanguage].bookFormDate}</span>
            <span class="text-xs text-slate-300 font-medium">${booking.date}</span>
          </div>
          <div class="flex items-center justify-between border-b border-slate-800/60 pb-2">
            <span class="text-xs text-slate-500 uppercase font-mono">${translations[currentLanguage].bookFormTime}</span>
            <span class="text-xs text-slate-300 font-medium">${booking.time}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs text-slate-500 uppercase font-mono">${translations[currentLanguage].servicesPrice}</span>
            <span class="text-xs text-emerald-400 font-bold font-mono">${booking.price}</span>
          </div>
        `;
      }
    }
  }
  
  async function fetchServerBookings() {
    try {
      const res = await fetch('/api/bookings');
      const data = await res.json();
      if (data.success && data.bookings) {
        // Merge server bookings with localStorage bookings to maintain history
        const local = localStorage.getItem('donoruh_bookings');
        const localArr = local ? JSON.parse(local) : [];
        
        // Filter duplicates
        const merged = [...data.bookings];
        localArr.forEach(localBook => {
          if (!merged.find(b => b.id === localBook.id)) {
            merged.push(localBook);
          }
        });
        
        localBookingsList = merged;
      } else {
        throw new Error();
      }
    } catch (e) {
      const local = localStorage.getItem('donoruh_bookings');
      localBookingsList = local ? JSON.parse(local) : [];
    }
    
    renderBookingsRecords();
  }
  
  function renderBookingsRecords() {
    if (!DOM.bookingsRecordsList) return;
  
    if (localBookingsList.length === 0) {
      DOM.bookingsRecordsList.innerHTML = `
        <div class="bg-slate-950/20 border border-dashed border-slate-800 p-8 rounded-xl text-center space-y-2">
          <p class="text-xs text-slate-500">${translations[currentLanguage].bookNoBookings}</p>
        </div>
      `;
      return;
    }
  
    DOM.bookingsRecordsList.innerHTML = '';
    localBookingsList.forEach(booking => {
      const card = document.createElement('div');
      card.className = "p-4 bg-slate-950/40 border border-slate-800 rounded-xl relative group hover:border-slate-700/60 transition-all flex justify-between items-start fade-in";
      card.innerHTML = `
        <div class="space-y-1.5">
          <div class="flex items-center space-x-2">
            <span class="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/15">
              ${booking.serviceType}
            </span>
          </div>
          <div class="space-y-1 text-xs text-slate-400">
            <p class="font-semibold text-slate-200">${booking.name}</p>
            <p class="flex items-center space-x-1.5 font-mono">
              <span>📅 ${booking.date}</span>
            </p>
            <p class="flex items-center space-x-1.5 font-mono">
              <span>⏰ ${booking.time}</span>
            </p>
          </div>
        </div>
        <button onclick="cancelBookingLocal('${booking.id}')" class="p-2 text-slate-600 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all cursor-pointer" title="Cancel Reservation">
          🗑️
        </button>
      `;
      DOM.bookingsRecordsList.appendChild(card);
    });
  }
  
  window.cancelBookingLocal = function(id) {
    localBookingsList = localBookingsList.filter(b => b.id !== id);
    localStorage.setItem('donoruh_bookings', JSON.stringify(localBookingsList));
    renderBookingsRecords();
  };
  