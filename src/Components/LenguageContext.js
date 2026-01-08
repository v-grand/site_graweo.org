import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Navigation
    nav_home: "/Home",
    nav_about: "/About",
    nav_donate: "/Donate",
    nav_reports: "/Reports",
    nav_contacts: "/Contacts",

    // Home page
    hero_title: "Supporting Ukraine",
    hero_subtitle: "Charitable Foundation GRAVEO",
    hero_description: "We provide humanitarian aid, support for IDPs and small businesses affected by the war",
    hero_cta: "Donate Now",

    about_title: "About Foundation",
    about_description: "GRAVEO is a charitable foundation dedicated to supporting Ukraine during difficult times. We focus on humanitarian aid, helping internally displaced persons, and supporting small businesses.",

    directions_title: "Directions of Help",
    direction_humanitarian: "Humanitarian Aid",
    direction_humanitarian_desc: "Food, medicine, clothing for those in need",
    direction_idps: "Support for IDPs",
    direction_idps_desc: "Housing, integration, legal assistance",
    direction_business: "Small Business Support",
    direction_business_desc: "Grants, consultations, recovery assistance",

    howwework_title: "How We Work",
    howwework_step1: "Receive Request",
    howwework_step1_desc: "We analyze needs and assess the situation",
    howwework_step2: "Collect Resources",
    howwework_step2_desc: "We attract donations and find partners",
    howwework_step3: "Deliver Help",
    howwework_step3_desc: "We provide direct assistance to those in need",
    howwework_step4: "Report Results",
    howwework_step4_desc: "Full transparency and accountability",

    latest_reports: "Latest Reports",
    view_report: "View Report",
    all_reports: "All Reports",

    // About page
    mission_title: "Our Mission",
    mission_text: "To provide comprehensive support to those affected by the war in Ukraine, restore dignity and hope, and help rebuild lives and businesses.",

    goals_title: "Our Goals",
    goal1: "Provide humanitarian aid to vulnerable populations",
    goal2: "Support internally displaced persons with housing and integration",
    goal3: "Help small businesses recover and grow",
    goal4: "Maintain full transparency in all operations",

    legal_title: "Legal Information",
    legal_name: "Name:",
    legal_name_value: "Charitable Foundation GRAVEO",
    legal_registration: "Registration:",
    legal_country: "Country:",
    legal_address: "Address:",

    requisites_title: "Bank Requisites",
    requisites_ukraine: "Ukraine",
    requisites_poland: "Poland",
    requisites_account: "Account:",
    requisites_bank: "Bank:",
    requisites_swift: "SWIFT:",
    requisites_iban: "IBAN:",

    // Donate page
    donate_title: "Support Our Mission",
    donate_subtitle: "Your contribution helps us provide essential aid to those in need",

    crypto_title: "Cryptocurrency Donations",
    crypto_subtitle: "Instant and secure",
    copy_address: "Copy Address",
    address_copied: "Address copied!",

    bank_title: "Bank Transfer",
    bank_ukraine: "Ukraine (UAH)",
    bank_poland: "Poland (PLN/EUR)",

    card_title: "Card Payment",
    card_button: "Pay with Card",
    card_coming_soon: "Card payment integration coming soon. Please use cryptocurrency or bank transfer.",

    purpose_title: "Purpose of Donation",
    purpose_humanitarian: "Humanitarian Aid",
    purpose_idps: "Support for IDPs",
    purpose_business: "Small Business Support",
    purpose_other: "Other",

    // Reports page
    reports_title: "Our Reports",
    reports_subtitle: "Transparency in every step",
    date: "Date",
    read_more: "Read More",

    // Report Detail
    back_to_reports: "Back to Reports",
    gallery_title: "Photo Gallery",

    // Contacts page
    contacts_title: "Get in Touch",
    contacts_subtitle: "We're here to answer your questions",

    contact_email: "Email",
    contact_telegram: "Telegram",
    contact_form_title: "Send Message",

    form_name: "Your Name",
    form_email: "Your Email",
    form_message: "Message",
    form_submit: "Send Message",
    form_success: "Thank you! Your message has been sent successfully.",

    // Footer
    footer_tagline: "Supporting Ukraine during difficult times",
    footer_links: "Quick Links",
    footer_contact: "Contact Information",
    footer_rights: "All rights reserved",
  },

  pl: {
    nav_home: "Strona główna",
    nav_about: "O nas",
    nav_donate: "Wspieraj",
    nav_reports: "Raporty",
    nav_contacts: "Kontakt",

    hero_title: "Wspieramy Ukrainę",
    hero_subtitle: "Fundacja Charytatywna GRAVEO",
    hero_description: "Zapewniamy pomoc humanitarną, wsparcie dla przesiedleńców i małych firm dotkniętych wojną",
    hero_cta: "Wspieraj Teraz",

    about_title: "O Fundacji",
    about_description: "GRAVEO to fundacja charytatywna poświęcona wspieraniu Ukrainy w trudnych czasach. Koncentrujemy się na pomocy humanitarnej, wsparciu osób wewnętrznie przesiedlonych i małych firm.",

    directions_title: "Kierunki Pomocy",
    direction_humanitarian: "Pomoc Humanitarna",
    direction_humanitarian_desc: "Żywność, leki, odzież dla potrzebujących",
    direction_idps: "Wsparcie Przesiedleńców",
    direction_idps_desc: "Mieszkanie, integracja, pomoc prawna",
    direction_business: "Wsparcie Małych Firm",
    direction_business_desc: "Dotacje, konsultacje, pomoc w odbudowie",

    howwework_title: "Jak Pracujemy",
    howwework_step1: "Przyjmujemy Prośby",
    howwework_step1_desc: "Analizujemy potrzeby i oceniamy sytuację",
    howwework_step2: "Zbieramy Zasoby",
    howwework_step2_desc: "Pozyskujemy darowizny i znajdujemy partnerów",
    howwework_step3: "Dostarczamy Pomoc",
    howwework_step3_desc: "Bezpośrednio wspieramy potrzebujących",
    howwework_step4: "Raportujemy Wyniki",
    howwework_step4_desc: "Pełna przejrzystość i rozliczalność",

    latest_reports: "Najnowsze Raporty",
    view_report: "Zobacz Raport",
    all_reports: "Wszystkie Raporty",

    mission_title: "Nasza Misja",
    mission_text: "Zapewnienie kompleksowego wsparcia osobom dotkniętym wojną w Ukrainie, przywrócenie godności i nadziei oraz pomoc w odbudowie życia i firm.",

    goals_title: "Nasze Cele",
    goal1: "Zapewnienie pomocy humanitarnej najbardziej potrzebującym",
    goal2: "Wsparcie przesiedleńców w zakwaterowaniu i integracji",
    goal3: "Pomoc małym firmom w odbudowie i rozwoju",
    goal4: "Utrzymanie pełnej przejrzystości wszystkich działań",

    legal_title: "Informacje Prawne",
    legal_name: "Nazwa:",
    legal_name_value: "Fundacja Charytatywna GRAVEO",
    legal_registration: "Rejestracja:",
    legal_country: "Kraj:",
    legal_address: "Adres:",

    requisites_title: "Dane Bankowe",
    requisites_ukraine: "Ukraina",
    requisites_poland: "Polska",
    requisites_account: "Konto:",
    requisites_bank: "Bank:",
    requisites_swift: "SWIFT:",
    requisites_iban: "IBAN:",

    donate_title: "Wspieraj Naszą Misję",
    donate_subtitle: "Twój wkład pomaga nam zapewnić niezbędną pomoc potrzebującym",

    crypto_title: "Darowizny Kryptowalutowe",
    crypto_subtitle: "Natychmiastowe i bezpieczne",
    copy_address: "Kopiuj Adres",
    address_copied: "Adres skopiowany!",

    bank_title: "Przelew Bankowy",
    bank_ukraine: "Ukraina (UAH)",
    bank_poland: "Polska (PLN/EUR)",

    card_title: "Płatność Kartą",
    card_button: "Zapłać Kartą",
    card_coming_soon: "Integracja płatności kartą wkrótce. Prosimy używać kryptowaluty lub przelewu bankowego.",

    purpose_title: "Cel Darowizny",
    purpose_humanitarian: "Pomoc Humanitarna",
    purpose_idps: "Wsparcie Przesiedleńców",
    purpose_business: "Wsparcie Małych Firm",
    purpose_other: "Inny",

    reports_title: "Nasze Raporty",
    reports_subtitle: "Przejrzystość na każdym kroku",
    date: "Data",
    read_more: "Czytaj Więcej",

    back_to_reports: "Powrót do Raportów",
    gallery_title: "Galeria Zdjęć",

    contacts_title: "Skontaktuj się z Nami",
    contacts_subtitle: "Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania",

    contact_email: "Email",
    contact_telegram: "Telegram",
    contact_form_title: "Wyślij Wiadomość",

    form_name: "Twoje Imię",
    form_email: "Twój Email",
    form_message: "Wiadomość",
    form_submit: "Wyślij Wiadomość",
    form_success: "Dziękujemy! Twoja wiadomość została wysłana pomyślnie.",

    footer_tagline: "Wspieramy Ukrainę w trudnych czasach",
    footer_links: "Szybkie Linki",
    footer_contact: "Informacje Kontaktowe",
    footer_rights: "Wszelkie prawa zastrzeżone",
  },

  ru: {
    nav_home: "Главная",
    nav_about: "О фонде",
    nav_donate: "Пожертвовать",
    nav_reports: "Отчёты",
    nav_contacts: "Контакты",

    hero_title: "Поддержка Украины",
    hero_subtitle: "Благотворительный Фонд ГРАВЕО",
    hero_description: "Мы предоставляем гуманитарную помощь, поддержку ВПЛ и малому бизнесу, пострадавшему от войны",
    hero_cta: "Пожертвовать",

    about_title: "О Фонде",
    about_description: "ГРАВЕО — благотворительный фонд, занимающийся поддержкой Украины в трудные времена. Мы фокусируемся на гуманитарной помощи, помощи внутренне перемещённым лицам и поддержке малого бизнеса.",

    directions_title: "Направления Помощи",
    direction_humanitarian: "Гуманитарная Помощь",
    direction_humanitarian_desc: "Продукты, лекарства, одежда нуждающимся",
    direction_idps: "Поддержка ВПЛ",
    direction_idps_desc: "Жильё, интеграция, юридическая помощь",
    direction_business: "Поддержка Малого Бизнеса",
    direction_business_desc: "Гранты, консультации, помощь в восстановлении",

    howwework_title: "Как Мы Работаем",
    howwework_step1: "Получаем Запрос",
    howwework_step1_desc: "Анализируем потребности и оцениваем ситуацию",
    howwework_step2: "Собираем Ресурсы",
    howwework_step2_desc: "Привлекаем пожертвования и находим партнёров",
    howwework_step3: "Доставляем Помощь",
    howwework_step3_desc: "Оказываем прямую помощь нуждающимся",
    howwework_step4: "Отчитываемся",
    howwework_step4_desc: "Полная прозрачность и подотчётность",

    latest_reports: "Последние Отчёты",
    view_report: "Смотреть Отчёт",
    all_reports: "Все Отчёты",

    mission_title: "Наша Миссия",
    mission_text: "Обеспечить всестороннюю поддержку пострадавшим от войны в Украине, восстановить достоинство и надежду, помочь восстановить жизнь и бизнес.",

    goals_title: "Наши Цели",
    goal1: "Предоставлять гуманитарную помощь наиболее уязвимым",
    goal2: "Поддерживать ВПЛ с жильём и интеграцией",
    goal3: "Помогать малому бизнесу восстанавливаться и расти",
    goal4: "Поддерживать полную прозрачность всех операций",

    legal_title: "Юридическая Информация",
    legal_name: "Название:",
    legal_name_value: "Благотворительный Фонд ГРАВЕО",
    legal_registration: "Регистрация:",
    legal_country: "Страна:",
    legal_address: "Адрес:",

    requisites_title: "Банковские Реквизиты",
    requisites_ukraine: "Украина",
    requisites_poland: "Польша",
    requisites_account: "Счёт:",
    requisites_bank: "Банк:",
    requisites_swift: "SWIFT:",
    requisites_iban: "IBAN:",

    donate_title: "Поддержите Нашу Миссию",
    donate_subtitle: "Ваш вклад помогает нам оказывать необходимую помощь",

    crypto_title: "Криптовалютные Пожертвования",
    crypto_subtitle: "Мгновенно и безопасно",
    copy_address: "Копировать Адрес",
    address_copied: "Адрес скопирован!",

    bank_title: "Банковский Перевод",
    bank_ukraine: "Украина (UAH)",
    bank_poland: "Польша (PLN/EUR)",

    card_title: "Оплата Картой",
    card_button: "Оплатить Картой",
    card_coming_soon: "Интеграция оплаты картой скоро появится. Пожалуйста, используйте криптовалюту или банковский перевод.",

    purpose_title: "Назначение Пожертвования",
    purpose_humanitarian: "Гуманитарная Помощь",
    purpose_idps: "Поддержка ВПЛ",
    purpose_business: "Поддержка Малого Бизнеса",
    purpose_other: "Другое",

    reports_title: "Наши Отчёты",
    reports_subtitle: "Прозрачность на каждом шаге",
    date: "Дата",
    read_more: "Читать Далее",

    back_to_reports: "Назад к Отчётам",
    gallery_title: "Фотогалерея",

    contacts_title: "Свяжитесь с Нами",
    contacts_subtitle: "Мы здесь, чтобы ответить на ваши вопросы",

    contact_email: "Email",
    contact_telegram: "Telegram",
    contact_form_title: "Отправить Сообщение",

    form_name: "Ваше Имя",
    form_email: "Ваш Email",
    form_message: "Сообщение",
    form_submit: "Отправить Сообщение",
    form_success: "Спасибо! Ваше сообщение успешно отправлено.",

    footer_tagline: "Поддержка Украины в трудные времена",
    footer_links: "Быстрые Ссылки",
    footer_contact: "Контактная Информация",
    footer_rights: "Все права защищены",
  },

  uk: {
    nav_home: "Головна",
    nav_about: "Про фонд",
    nav_donate: "Пожертвувати",
    nav_reports: "Звіти",
    nav_contacts: "Контакти",

    hero_title: "Підтримка України",
    hero_subtitle: "Благодійний Фонд ГРАВЕО",
    hero_description: "Ми надаємо гуманітарну допомогу, підтримку ВПО та малому бізнесу, що постраждав від війни",
    hero_cta: "Підтримати",

    about_title: "Про Фонд",
    about_description: "ГРАВЕО — благодійний фонд, присвячений підтримці України в складні часи. Ми зосереджуємося на гуманітарній допомозі, підтримці внутрішньо переміщених осіб та малого бізнесу.",

    directions_title: "Напрямки Допомоги",
    direction_humanitarian: "Гуманітарна Допомога",
    direction_humanitarian_desc: "Продукти, ліки, одяг для нужденних",
    direction_idps: "Підтримка ВПО",
    direction_idps_desc: "Житло, інтеграція, юридична допомога",
    direction_business: "Підтримка Малого Бізнесу",
    direction_business_desc: "Гранти, консультації, допомога у відновленні",

    howwework_title: "Як Ми Працюємо",
    howwework_step1: "Отримуємо Запит",
    howwework_step1_desc: "Аналізуємо потреби та оцінюємо ситуацію",
    howwework_step2: "Збираємо Ресурси",
    howwework_step2_desc: "Залучаємо пожертви та знаходимо партнерів",
    howwework_step3: "Доставляємо Допомогу",
    howwework_step3_desc: "Надаємо пряму допомогу нужденним",
    howwework_step4: "Звітуємо",
    howwework_step4_desc: "Повна прозорість та підзвітність",

    latest_reports: "Останні Звіти",
    view_report: "Дивитись Звіт",
    all_reports: "Всі Звіти",

    mission_title: "Наша Місія",
    mission_text: "Забезпечити всебічну підтримку постраждалим від війни в Україні, відновити гідність та надію, допомогти відновити життя та бізнес.",

    goals_title: "Наші Цілі",
    goal1: "Надавати гуманітарну допомогу найбільш вразливим",
    goal2: "Підтримувати ВПО з житлом та інтеграцією",
    goal3: "Допомагати малому бізнесу відновлюватись та рости",
    goal4: "Підтримувати повну прозорість усіх операцій",

    legal_title: "Юридична Інформація",
    legal_name: "Назва:",
    legal_name_value: "Благодійний Фонд ГРАВЕО",
    legal_registration: "Реєстрація:",
    legal_country: "Країна:",
    legal_address: "Адреса:",

    requisites_title: "Банківські Реквізити",
    requisites_ukraine: "Україна",
    requisites_poland: "Польща",
    requisites_account: "Рахунок:",
    requisites_bank: "Банк:",
    requisites_swift: "SWIFT:",
    requisites_iban: "IBAN:",

    donate_title: "Підтримайте Нашу Місію",
    donate_subtitle: "Ваш внесок допомагає нам надавати необхідну допомогу",

    crypto_title: "Криптовалютні Пожертви",
    crypto_subtitle: "Миттєво та безпечно",
    copy_address: "Копіювати Адресу",
    address_copied: "Адресу скопійовано!",

    bank_title: "Банківський Переказ",
    bank_ukraine: "Україна (UAH)",
    bank_poland: "Польща (PLN/EUR)",

    card_title: "Оплата Карткою",
    card_button: "Оплатити Карткою",
    card_coming_soon: "Інтеграція оплати карткою незабаром з'явиться. Будь ласка, використовуйте криптовалюту або банківський переказ.",

    purpose_title: "Призначення Пожертви",
    purpose_humanitarian: "Гуманітарна Допомога",
    purpose_idps: "Підтримка ВПО",
    purpose_business: "Підтримка Малого Бізнесу",
    purpose_other: "Інше",

    reports_title: "Наші Звіти",
    reports_subtitle: "Прозорість на кожному кроці",
    date: "Дата",
    read_more: "Читати Далі",

    back_to_reports: "Назад до Звітів",
    gallery_title: "Фотогалерея",

    contacts_title: "Зв'яжіться з Нами",
    contacts_subtitle: "Ми тут, щоб відповісти на ваші питання",

    contact_email: "Email",
    contact_telegram: "Telegram",
    contact_form_title: "Надіслати Повідомлення",

    form_name: "Ваше Ім'я",
    form_email: "Ваш Email",
    form_message: "Повідомлення",
    form_submit: "Надіслати Повідомлення",
    form_success: "Дякуємо! Ваше повідомлення успішно надіслано.",

    footer_tagline: "Підтримка України в складні часи",
    footer_links: "Швидкі Посилання",
    footer_contact: "Контактна Інформація",
    footer_rights: "Усі права захищено",
  },

  de: {
    nav_home: "Startseite",
    nav_about: "Über uns",
    nav_donate: "Spenden",
    nav_reports: "Berichte",
    nav_contacts: "Kontakt",

    hero_title: "Unterstützung der Ukraine",
    hero_subtitle: "Wohltätigkeitsstiftung GRAVEO",
    hero_description: "Wir leisten humanitäre Hilfe, unterstützen Binnenvertriebene und kleine Unternehmen, die vom Krieg betroffen sind",
    hero_cta: "Jetzt Spenden",

    about_title: "Über die Stiftung",
    about_description: "GRAVEO ist eine Wohltätigkeitsstiftung, die sich der Unterstützung der Ukraine in schwierigen Zeiten widmet. Wir konzentrieren uns auf humanitäre Hilfe, Unterstützung von Binnenvertriebenen und kleinen Unternehmen.",

    directions_title: "Hilfsbereiche",
    direction_humanitarian: "Humanitäre Hilfe",
    direction_humanitarian_desc: "Lebensmittel, Medikamente, Kleidung für Bedürftige",
    direction_idps: "Unterstützung für Binnenvertriebene",
    direction_idps_desc: "Unterkunft, Integration, Rechtsbeistand",
    direction_business: "Unterstützung für Kleinunternehmen",
    direction_business_desc: "Zuschüsse, Beratung, Wiederaufbauhilfe",

    howwework_title: "Wie Wir Arbeiten",
    howwework_step1: "Anfrage Erhalten",
    howwework_step1_desc: "Wir analysieren Bedürfnisse und bewerten die Situation",
    howwework_step2: "Ressourcen Sammeln",
    howwework_step2_desc: "Wir werben Spenden und finden Partner",
    howwework_step3: "Hilfe Leisten",
    howwework_step3_desc: "Wir leisten direkte Hilfe für Bedürftige",
    howwework_step4: "Ergebnisse Berichten",
    howwework_step4_desc: "Volle Transparenz und Rechenschaftspflicht",

    latest_reports: "Neueste Berichte",
    view_report: "Bericht Ansehen",
    all_reports: "Alle Berichte",

    mission_title: "Unsere Mission",
    mission_text: "Umfassende Unterstützung für die vom Krieg in der Ukraine Betroffenen, Wiederherstellung von Würde und Hoffnung sowie Hilfe beim Wiederaufbau von Leben und Unternehmen.",

    goals_title: "Unsere Ziele",
    goal1: "Humanitäre Hilfe für die am stärksten gefährdeten Bevölkerungsgruppen",
    goal2: "Unterstützung von Binnenvertriebenen mit Unterkunft und Integration",
    goal3: "Hilfe für kleine Unternehmen bei der Erholung und dem Wachstum",
    goal4: "Volle Transparenz bei allen Operationen",

    legal_title: "Rechtliche Informationen",
    legal_name: "Name:",
    legal_name_value: "Wohltätigkeitsstiftung GRAVEO",
    legal_registration: "Registrierung:",
    legal_country: "Land:",
    legal_address: "Adresse:",

    requisites_title: "Bankverbindung",
    requisites_ukraine: "Ukraine",
    requisites_poland: "Polen",
    requisites_account: "Konto:",
    requisites_bank: "Bank:",
    requisites_swift: "SWIFT:",
    requisites_iban: "IBAN:",

    donate_title: "Unterstützen Sie Unsere Mission",
    donate_subtitle: "Ihr Beitrag hilft uns, wichtige Hilfe zu leisten",

    crypto_title: "Kryptowährungsspenden",
    crypto_subtitle: "Sofort und sicher",
    copy_address: "Adresse Kopieren",
    address_copied: "Adresse kopiert!",

    bank_title: "Banküberweisung",
    bank_ukraine: "Ukraine (UAH)",
    bank_poland: "Polen (PLN/EUR)",

    card_title: "Kartenzahlung",
    card_button: "Mit Karte Bezahlen",
    card_coming_soon: "Kartenzahlung-Integration kommt bald. Bitte verwenden Sie Kryptowährung oder Banküberweisung.",

    purpose_title: "Zweck der Spende",
    purpose_humanitarian: "Humanitäre Hilfe",
    purpose_idps: "Unterstützung für Binnenvertriebene",
    purpose_business: "Unterstützung für Kleinunternehmen",
    purpose_other: "Andere",

    reports_title: "Unsere Berichte",
    reports_subtitle: "Transparenz bei jedem Schritt",
    date: "Datum",
    read_more: "Mehr Lesen",

    back_to_reports: "Zurück zu Berichten",
    gallery_title: "Fotogalerie",

    contacts_title: "Kontaktieren Sie Uns",
    contacts_subtitle: "Wir sind hier, um Ihre Fragen zu beantworten",

    contact_email: "Email",
    contact_telegram: "Telegram",
    contact_form_title: "Nachricht Senden",

    form_name: "Ihr Name",
    form_email: "Ihre Email",
    form_message: "Nachricht",
    form_submit: "Nachricht Senden",
    form_success: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",

    footer_tagline: "Unterstützung der Ukraine in schwierigen Zeiten",
    footer_links: "Schnelllinks",
    footer_contact: "Kontaktinformationen",
    footer_rights: "Alle Rechte vorbehalten",
  },
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('graveo_lang');
    return saved && translations[saved] ? saved : 'en';
  });

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('graveo_lang', lang);
    }
  };

  useEffect(() => {
    localStorage.setItem('graveo_lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};