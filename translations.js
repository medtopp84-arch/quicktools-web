// ============================
// ملف الترجمة - Translation File
// ============================

const translations = {
    // ===== اللغة الإنجليزية =====
    en: {
        // الهيدر
        site_title: "⚡ Quick Web Tools",
        site_subtitle: "Free tools to solve your daily problems: Stopwatch, AI Text Detection, Video Downloader",

        // شريط التنقل
        nav_home: "🏠 Home",
        nav_stopwatch: "⏱️ Stopwatch",
        nav_detector: "🔍 AI Detector",
        nav_downloader: "📥 Downloader",
        nav_blog: "📝 Blog",

        // الصفحة الرئيسية - البطاقات
        card_stopwatch_title: "Stopwatch & Timer",
        card_stopwatch_desc: "Set timers or measure time accurately. Perfect for studying, cooking, or exercise.",
        card_stopwatch_btn: "Use Tool →",

        card_detector_title: "AI Text Detector",
        card_detector_desc: "Reviews and comparisons of the best AI text detection tools like ZeroGPT and Copyleaks.",
        card_detector_btn: "Read Review →",

        card_downloader_title: "Video Downloader",
        card_downloader_desc: "A complete guide to the best video download tools from Instagram and YouTube like FastDl.",
        card_downloader_btn: "Read Guide →",

        // محتوى إضافي
        section_title: "📌 Why Micro Web Tools?",
        section_text: "Micro web tools are simple applications that solve one problem quickly and without complexity. In a world full of heavy apps, people look for fast solutions that work directly in the browser.",
        section_features: "⏱️ Stopwatch – Track time precisely.<br>🔍 AI Detector Reviews – Find the right tool for your needs.<br>📥 Downloader Guide – Save your favorite videos in high quality.",

        // إعلانات
        ad_placeholder: "📢 [AdSense Ad will appear here]",

        // فوتر
        footer_text: "All rights reserved © 2026 · Quick Web Tools",
        footer_sub: "QuickTools – Free tools for everyone",
        
        // زر تغيير اللغة
        lang_switch: "🌐 العربية"
    },

    // ===== اللغة العربية =====
    ar: {
        // الهيدر
        site_title: "⚡ أدوات ويب سريعة",
        site_subtitle: "أدوات مجانية لحل مشاكلك اليومية: ساعة إيقاف، كشف النصوص، تحميل الفيديوهات",

        // شريط التنقل
        nav_home: "🏠 الرئيسية",
        nav_stopwatch: "⏱️ ساعة الإيقاف",
        nav_detector: "🔍 كشف النصوص",
        nav_downloader: "📥 تحميل فيديوهات",
        nav_blog: "📝 المدونة",

        // الصفحة الرئيسية - البطاقات
        card_stopwatch_title: "ساعة الإيقاف والمؤقت",
        card_stopwatch_desc: "ضبط مؤقتات أو قياس الوقت بدقة. مثالية للمذاكرة، الطهي، أو التمارين الرياضية.",
        card_stopwatch_btn: "استخدم الأداة →",

        card_detector_title: "كشف النصوص (AI Detector)",
        card_detector_desc: "مراجعة ومقارنة لأفضل أدوات كشف النصوص المكتوبة بالذكاء الاصطناعي مثل ZeroGPT و Copyleaks.",
        card_detector_btn: "اقرأ المراجعة →",

        card_downloader_title: "تحميل فيديوهات",
        card_downloader_desc: "دليل شامل لأفضل أدوات تحميل الفيديوهات من إنستغرام ويوتيوب مثل FastDl و SaveFrom.",
        card_downloader_btn: "اقرأ الدليل →",

        // محتوى إضافي
        section_title: "📌 لماذا أدوات الويب المصغرة؟",
        section_text: "أدوات الويب المصغرة هي تطبيقات بسيطة تحل مشكلة واحدة بسرعة وبدون تعقيد. في عالم مليء بالتطبيقات الثقيلة، يبحث الناس عن حلول سريعة تعمل مباشرة في المتصفح.",
        section_features: "⏱️ ساعة الإيقاف – لضبط الوقت بدقة.<br>🔍 مراجعة أدوات كشف النصوص – لمعرفة أي أداة تناسب احتياجاتك.<br>📥 دليل تحميل الفيديوهات – لتحميل مقاطعك المفضلة بجودة عالية.",

        // إعلانات
        ad_placeholder: "📢 [سيظهر إعلان AdSense هنا]",

        // فوتر
        footer_text: "جميع الحقوق محفوظة © 2026 · أدوات ويب سريعة",
        footer_sub: "أدوات مجانية للجميع",

        // زر تغيير اللغة
        lang_switch: "🌐 English"
    }
};

// ============================
// دالة تغيير اللغة
// ============================
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updatePageTexts();
}

function updatePageTexts() {
    const t = translations[currentLang];
    if (!t) return;

    // تحديث كل عنصر له خاصية data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // تحديث زر تغيير اللغة
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) {
        langBtn.textContent = t.lang_switch || '🌐 Switch Language';
    }

    // تغيير اتجاه الصفحة (RTL/LTR)
    const html = document.documentElement;
    if (currentLang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    }
}

// تشغيل الترجمة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updatePageTexts();
});
