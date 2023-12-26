const langData = {
    "uz": {
      "home": "Bosh Sahifa",
      "about": "Biz haqimizda",
      "new": "Yangiliklar",
      "tour": "Category",
      "tour1": "Sayohat",

      "contact": "Kontakt",
      "intro_text1": "Barcha categorylar",
      "intro_text2": "Bosh sahifa",
      "destination_text1": "Mashhur Yo'nalishlar",
      "": "",
      "": "",
      "footer_text1": "TOURFETTO sayyohlik agentligi xalqaro bozorda taqdim etilgan 2023 yildan turizm.",
      "footer_text2": "Toshkent Shahar",
      "footer_text3": "Menyu",
      "footer_text4": "Bosh sahifa",
      "footer_text5": "Biz haqimizda",
      "footer_text6": "Yangiliklar",
      "footer_text7": "Catigory",
      "footer_text8": "Kontakt",
      "footer_text9": "Mahhur shaharlar",
      "footer_text10": "Tailand",
      "footer_text11": "Daubai",
      "footer_text12": "Turkiya",
      "footer_text13": "Shvedsiya",
      "footer_text14": "Gruziya",
      "footer_text15": "Vetnam",
      "footer_text16": "Biz ijtimoiy tarmoqlardamiz",
      "": "",
      "": "",
  
      
    },
    "ru": {
      "home": "Главная страница",
      "about": "о нас",
      "new": "Новости",
      "tour": "Категория",
      "tour1": "Тур",

      "contact": "Контакт",
      "img_slider1": "с нами",
      "img_slider2": "желаю хорошей поездки",
      "intro_text1": "Все категории",
      "intro_text2": "Главная страница",
      "destination_text1": "Популярные направления",
      "": "",
      "": "",
      "footer_text1": "Туризм с 2023 года, туристическое агентство TOURFETTO представлено на международном рынке.",
      "footer_text2": "город Ташкент",
      "footer_text3": "Меню",
      "footer_text4": "Главная страница",
      "footer_text5": "о нас",
      "footer_text6": "Новости",
      "footer_text7": "Категория",
      "footer_text8": "Контакт",
      "footer_text9": "Знаменитые города",
      "footer_text10": "Таиланд",
      "footer_text11": "Дубай",
      "footer_text12": "Турция",
      "footer_text13": "Швеция",
      "footer_text14": "Грузия",
      "footer_text15": "Vetnam",
      "footer_text16": "Мы в социальных сетях",
      "": "", 
      "": "", 
      "": "", 
      "": "", 
      "": "", 
      "": "", 
  
  
  
  
    },
    "en": {
      "home": "Main page",
      "about": "about Us",
      "new": "News",
      "tour": "Category",
      "tour1": "Tour",

      "contact": "Contact",
      "img_slider1": "with us",
      "img_slider2": "have a nice trip",
      "intro_text1": "All categories",
      "intro_text2": "Homepage",
      "destination_text1": "Popular Destinations",
      "": "",
      "": "",
      "footer_text1": "Tourism since 2023, TOURFETTO travel agency presented on the international market.",
      "footer_text2": "Tashkent city",
      "footer_text3": "Menu",
      "footer_text4": "Homepage",
      "footer_text5": "about Us",
      "footer_text6": "News",
      "footer_text7": "Category",
      "footer_text8": "Contact",
      "footer_text9": "Famous cities",
      "footer_text10": "Thailand",
      "footer_text11": "Dubai",
      "footer_text12": "Turkey",
      "footer_text13": "Sweden",
      "footer_text14": "Georgia",
      "footer_text15": "Vietnam",
      "footer_text16": "We are on social media",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",  
    }
  };
  
  const langElements = document.querySelectorAll('.lang');
  
  function changeLanguage(language) {
    selectedLanguage = language;
    langElements.forEach(el => {
      el.textContent = langData[selectedLanguage][el.getAttribute('key')];
    });
  }
  
  
  
  // Tilni qayta belgilash
  let selectedLanguage = 'ru';
  langElements.forEach(el => {
    el.textContent = langData[selectedLanguage][el.getAttribute('key')];
  });
  
  const langButtons = document.querySelectorAll('.lang-button');
  langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    changeLanguage(btn.dataset.lang);
    langButtons.forEach(btn => {
      btn.classList.remove('active_lang');
    });
    btn.classList.add('active_lang');
  });
  });