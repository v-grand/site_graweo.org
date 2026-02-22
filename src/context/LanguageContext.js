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
    hero_title: "Creating Hope Through Support",
    hero_subtitle: "Charitable Foundation GraWeo",
    hero_description: "We create conditions for people who have experienced difficult circumstances to rebuild their lives, work, and dignity",
    hero_cta: "Donate Now",

    about_title: "About Foundation",
    about_description: "GraWeo is a charitable foundation dedicated to helping people rebuild after hardship. We focus on providing support for recovery, reintegration, and rebuilding of livelihoods.",

    directions_title: "Directions of Help",
    direction_humanitarian: "Essential Support",
    direction_humanitarian_desc: "Resources, assistance, and necessities for recovery",
    direction_idps: "Reintegration & Housing",
    direction_idps_desc: "Stable housing, community integration, legal support",
    direction_business: "Livelihood Recovery",
    direction_business_desc: "Skills training, business support, employment assistance",

    howwework_title: "How We Work",
    howwework_step1: "Understand Needs",
    howwework_step1_desc: "We analyze situations and assess individual circumstances",
    howwework_step2: "Mobilize Resources",
    howwework_step2_desc: "We attract support and find partners",
    howwework_step3: "Provide Support",
    howwework_step3_desc: "We deliver tailored assistance to those who need it",
    howwework_step4: "Report & Learn",
    howwework_step4_desc: "Full transparency and continuous improvement",

    latest_reports: "Latest Reports",
    view_report: "View Report",
    all_reports: "All Reports",

    // About page
    mission_title: "Our Mission",
    mission_text: "Our mission is to create conditions where people who have experienced difficult circumstances can rebuild their lives, work, and sense of dignity. We operate without borders, helping where support is most needed, and strengthening hope for a sustainable future.",

    goals_title: "Our Goals",
    goal1: "Provide essential support to those in vulnerable situations",
    goal2: "Enable housing stability and successful reintegration",
    goal3: "Help rebuild livelihoods and economic independence",
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
    purpose_humanitarian: "Essential Support",
    purpose_idps: "Reintegration & Housing",
    purpose_business: "Livelihood Recovery",
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
    footer_tagline: "Supporting recovery and rebuilding",
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

    hero_title: "Tworzenie Nadziei Poprzez Wsparcie",
    hero_subtitle: "Fundacja Charytatywna GraWeo",
    hero_description: "Tworzymy warunki dla ludzi, którzy przeżyli trudne okoliczności, aby mogli odbudować swoje życie, pracę i godność",
    hero_cta: "Wspieraj Teraz",

    about_title: "O Fundacji",
    about_description: "GraWeo to fundacja charytatywna poświęcona wspieraniu ludzi w procesie odbudowy po trudnościach. Koncentrujemy się na wsparciu dla odbudowy, reintegracji i przywracania źródeł utrzymania.",

    directions_title: "Kierunki Pomocy",
    direction_humanitarian: "Wsparcie Niezbędne",
    direction_humanitarian_desc: "Zasoby, pomoc i niezbędne przedmioty dla odbudowy",
    direction_idps: "Reintegracja i Mieszkalnictwo",
    direction_idps_desc: "Stabilne mieszkanie, integracja społeczna, wsparcie prawne",
    direction_business: "Odbudowa Źródeł Utrzymania",
    direction_business_desc: "Szkolenia, wsparcie biznesu, pomoc w zatrudnieniu",

    howwework_title: "Jak Pracujemy",
    howwework_step1: "Rozumiemy Potrzeby",
    howwework_step1_desc: "Analizujemy sytuacje i oceniamy okoliczności poszczególnych osób",
    howwework_step2: "Mobilizujemy Zasoby",
    howwework_step2_desc: "Pozyskujemy wsparcie i znajdujemy partnerów",
    howwework_step3: "Zapewniamy Pomoc",
    howwework_step3_desc: "Udzielamy dostosowanego wsparcia tym, którzy ich potrzebują",
    howwework_step4: "Raportujemy i Uczymy się",
    howwework_step4_desc: "Pełna przejrzystość i ciągłe doskonalenie",

    latest_reports: "Najnowsze Raporty",
    view_report: "Zobacz Raport",
    all_reports: "Wszystkie Raporty",

    mission_title: "Nasza Misja",
    mission_text: "Naszą misją jest tworzenie warunków, w których ludzie, którzy przeżyli trudne okoliczności, mogą odbudować swoje życie, pracę i poczucie godności. Działamy bez granic, pomagając tam, gdzie wsparcie jest najbardziej potrzebne, i wzmacniając nadzieję na zrównoważoną przyszłość.",

    goals_title: "Nasze Cele",
    goal1: "Zapewnienie niezbędnego wsparcia osobom w sytuacji podatności",
    goal2: "Umożliwienie stabilności mieszkaniowej i pomyślnej reintegracji",
    goal3: "Wspomożenie odbudowy źródeł utrzymania i niezależności gospodarczej",
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
    purpose_humanitarian: "Wsparcie Niezbędne",
    purpose_idps: "Reintegracja i Mieszkalnictwo",
    purpose_business: "Odbudowa Źródeł Utrzymania",
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

    footer_tagline: "Wspieramy odbudowę i regenerację",
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

    hero_title: "Создание Надежды Через Поддержку",
    hero_subtitle: "Благотворительный Фонд GraWeo",
    hero_description: "Мы создаём условия для людей, пережившие трудные обстоятельства, чтобы они могли восстановить свою жизнь, работу и достоинство",
    hero_cta: "Пожертвовать",

    about_title: "О Фонде",
    about_description: "GraWeo — благотворительный фонд, занимающийся поддержкой людей в процессе восстановления после трудностей. Мы фокусируемся на поддержке для восстановления, реинтеграции и восстановления источников дохода.",

    directions_title: "Направления Помощи",
    direction_humanitarian: "Необходимая Поддержка",
    direction_humanitarian_desc: "Ресурсы, помощь и необходимое для восстановления",
    direction_idps: "Реинтеграция и Жилищная Поддержка",
    direction_idps_desc: "Стабильное жильё, интеграция в общество, юридическая помощь",
    direction_business: "Восстановление Источников Дохода",
    direction_business_desc: "Обучение, поддержка бизнеса, содействие в трудоустройстве",

    howwework_title: "Как Мы Работаем",
    howwework_step1: "Понимаем Потребности",
    howwework_step1_desc: "Анализируем ситуации и оцениваем обстоятельства отдельных людей",
    howwework_step2: "Мобилизуем Ресурсы",
    howwework_step2_desc: "Привлекаем поддержку и находим партнёров",
    howwework_step3: "Предоставляем Помощь",
    howwework_step3_desc: "Оказываем адресную помощь тем, кто её нуждается",
    howwework_step4: "Отчитываемся и Учимся",
    howwework_step4_desc: "Полная прозрачность и непрерывное совершенствование",

    latest_reports: "Последние Отчёты",
    view_report: "Смотреть Отчёт",
    all_reports: "Все Отчёты",

    mission_title: "Наша Миссия",
    mission_text: "Наша миссия — создавать условия, в которых люди, пережившие тяжёлые обстоятельства, могут восстановить свою жизнь, работу и чувство достоинства. Мы действуем без границ, помогая там, где поддержка особенно необходима, и укрепляя надежду на устойчивое будущее.",

    goals_title: "Наши Цели",
    goal1: "Предоставлять необходимую поддержку людям в уязвимых ситуациях",
    goal2: "Обеспечивать стабильность жилья и успешную реинтеграцию",
    goal3: "Помогать восстанавливать источники дохода и экономическую независимость",
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
    purpose_humanitarian: "Необходимая Поддержка",
    purpose_idps: "Реинтеграция и Жилищная Поддержка",
    purpose_business: "Восстановление Источников Дохода",
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

    footer_tagline: "Поддержка восстановления и возрождения",
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

    hero_title: "Створення Надії Через Підтримку",
    hero_subtitle: "Благодійний Фонд GraWeo",
    hero_description: "Ми створюємо умови для людей, які пережили складні обставини, щоб вони могли відновити своє життя, роботу та гідність",
    hero_cta: "Підтримати",

    about_title: "Про Фонд",
    about_description: "GraWeo — благодійний фонд, присвячений підтримці людей у процесі відновлення після труднощів. Ми зосереджуємося на підтримці для відновлення, реінтеграції та відновлення джерел доходу.",

    directions_title: "Напрямки Допомоги",
    direction_humanitarian: "Необхідна Підтримка",
    direction_humanitarian_desc: "Ресурси, допомога та необхідне для відновлення",
    direction_idps: "Реінтеграція та Житлова Підтримка",
    direction_idps_desc: "Стабільне житло, інтеграція в суспільство, юридична допомога",
    direction_business: "Відновлення Джерел Доходу",
    direction_business_desc: "Навчання, підтримка бізнесу, сприяння у працевлаштуванні",

    howwework_title: "Як Ми Працюємо",
    howwework_step1: "Розуміємо Потреби",
    howwework_step1_desc: "Аналізуємо ситуації та оцінюємо обставини окремих людей",
    howwework_step2: "Мобілізуємо Ресурси",
    howwework_step2_desc: "Залучаємо підтримку та знаходимо партнерів",
    howwework_step3: "Надаємо Допомогу",
    howwework_step3_desc: "Надаємо цільову допомогу тим, хто її потребує",
    howwework_step4: "Звітуємо та Навчаємось",
    howwework_step4_desc: "Повна прозорість та постійне вдосконалення",

    latest_reports: "Останні Звіти",
    view_report: "Дивитись Звіт",
    all_reports: "Всі Звіти",

    mission_title: "Наша Місія",
    mission_text: "Наша місія — створювати умови, в яких люди, які пережили складні обставини, можуть відновити своє життя, роботу та почуття гідності. Ми діємо без кордонів, допомагаючи там, де підтримка найбільш потрібна, і укріплюючи надію на стійке майбутнього.",

    goals_title: "Наші Цілі",
    goal1: "Надавати необхідну підтримку людям у вразливих ситуаціях",
    goal2: "Забезпечувати стабільність житла та успішну реінтеграцію",
    goal3: "Допомагати відновлювати джерела доходу та економічну незалежність",
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
    purpose_humanitarian: "Необхідна Підтримка",
    purpose_idps: "Реінтеграція та Житлова Підтримка",
    purpose_business: "Відновлення Джерел Доходу",
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

    footer_tagline: "Підтримка відновлення та возрождення",
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

    hero_title: "Hoffnung durch Unterstützung schaffen",
    hero_subtitle: "Wohltätigkeitsstiftung GraWeo",
    hero_description: "Wir schaffen Bedingungen, unter denen Menschen, die schwierige Umstände erlebt haben, ihr Leben, ihre Arbeit und ihre Würde wiederherstellen können",
    hero_cta: "Jetzt Spenden",

    about_title: "Über die Stiftung",
    about_description: "GraWeo ist eine Wohltätigkeitsstiftung, die sich der Unterstützung von Menschen im Wiederaufbauprozess nach Schwierigkeiten widmet. Wir konzentrieren uns auf Unterstützung zur Wiederaufbau, Reintegration und Wiederherstellung von Lebensgrundlagen.",

    directions_title: "Hilfsbereiche",
    direction_humanitarian: "Notwendige Unterstützung",
    direction_humanitarian_desc: "Ressourcen, Hilfe und Notwendiges für den Wiederaufbau",
    direction_idps: "Reintegration und Wohnungsunterstützung",
    direction_idps_desc: "Stabile Unterkunft, Gesellschaftliche Integration, Rechtsbeistand",
    direction_business: "Wiederherstellung der Lebensgrundlagen",
    direction_business_desc: "Schulung, Unternehmensunterstützung, Beschäftigungshilfe",

    howwework_title: "Wie Wir Arbeiten",
    howwework_step1: "Bedürfnisse verstehen",
    howwework_step1_desc: "Wir analysieren Situationen und bewerten individuelle Umstände",
    howwework_step2: "Ressourcen mobilisieren",
    howwework_step2_desc: "Wir werben Unterstützung an und finden Partner",
    howwework_step3: "Hilfe leisten",
    howwework_step3_desc: "Wir leisten maßgeschneiderte Hilfe für diejenigen, die sie benötigen",
    howwework_step4: "Bericht und Lernen",
    howwework_step4_desc: "Volle Transparenz und kontinuierliche Verbesserung",

    latest_reports: "Neueste Berichte",
    view_report: "Bericht Ansehen",
    all_reports: "Alle Berichte",

    mission_title: "Unsere Mission",
    mission_text: "Unsere Mission ist es, Bedingungen zu schaffen, unter denen Menschen, die schwierige Umstände erlebt haben, ihr Leben, ihre Arbeit und ihre Würde wiederherstellen können. Wir arbeiten grenzenlos und helfen dort, wo Unterstützung am dringendsten benötigt wird, und stärken die Hoffnung auf eine nachhaltige Zukunft.",

    goals_title: "Unsere Ziele",
    goal1: "Notwendige Unterstützung für Menschen in gefährdeten Situationen leisten",
    goal2: "Wohnungsstabilität und erfolgreiche Reintegration ermöglichen",
    goal3: "Wiederherstellung der Lebensgrundlagen und wirtschaftlicher Unabhängigkeit unterstützen",
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
    purpose_humanitarian: "Notwendige Unterstützung",
    purpose_idps: "Reintegration und Wohnungsunterstützung",
    purpose_business: "Wiederherstellung der Lebensgrundlagen",
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

    footer_tagline: "Unterstützung für Wiederaufbau und Erneuerung",
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