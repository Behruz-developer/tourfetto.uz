const langData = {
    "uz": {
      "home": "Bosh Sahifa",
      "about": "Biz haqimizda",
      "new": "Yangiliklar",
      "tour": "Category",
      "contact": "Kontakt",
      "img_slider1": "Biz bilan",
      "img_slider2": "maroqli sayohat",
      "about_text1": "TOURFETTO",
      "about_text2": "Haqida",
      "about_text3": "Siz munosib ta'tilga chiqyapsizmi va undan unumli foydalanmoqchimisiz? Toshkentdagi sayyohlik agentligimiz har qanday turdagi dam olishni tashkil etishda yordam beradi: voqealarga boy va sportga boy dam olish kunlaridan tortib to plyajdagi uzoq dam olishgacha. Biz sizning byudjetingiz va shaxsiy ehtiyojlaringizni hisobga olgan holda sayohatingizni rejalashtiramiz.",
      "about_text4": "Toshkentdagi sayyohlik agentligimiz xodimlari katta tajribaga ega, shuning uchun ular mijozlarga tez va sifatli xizmat ko'rsatadilar va tur tanlashda malakali yordam ko'rsatadilar. Biz dunyoning turli mamlakatlaridagi eng yaxshi mehmonxonalar va sayyohlik tashkilotlari bilan hamkorlik qilamiz. Biz bilan sayohat qilish oson, yoqimli va arzon!",
      "destination_text1": "Mashhur Yo'nalishlar",
      "destination_text2": "Gruziya",
      "destination_text3": "Gruziya",
      "destination_text4": "Gruziya",
      "destination_text5": "Sharm el Sheyx",
      "destination_text6": "Vetnam",
      "destination_text7": "Vetnam",
      "seasonal_text1": "Mavsumiy sayohatlar",
      "seasonal_text2": "Turkiya",
      "seasonal_text3": "Gruziya",
      "seasonal_text4": "Issiq-ko'l",
      "seasonal_text5": "Batafsil ->",
      "aboutme_text1": "Ular biz haqimizda nima deyishadi?",
      "order_text1": "Biz bilan bog'lanish uchun ushbu maydonni to'ldiring.",
      "order_text2": "Buyurtma",
      "order_text3": "xabar yubormoq",
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
      "home": "Bosh Sahifa",
      "about": "Biz haqimizda",
      "new": "Yangiliklar",
      "tour": "Category",
      "contact": "Kontakt",
      "": "", 
      "": "", 
      "": "", 
      "": "", 
      "": "", 
      "": "", 
  
  
  
  
    },
    "en": {

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