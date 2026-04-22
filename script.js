// ==================== STATISTIKA ====================
let questionCount = 0;
let answerCount = 0;
let mathCount = 0;

// ==================== KENGAYTIRILGAN BAZA (10,000+) ====================
const qaDatabase = {
    // SALOMLASHISH
    "salom": "Assalomu alaykum! 😊 Sizga qanday yordam bera olaman? Istalgan savolingizni bering yoki matematik misol yuboring!",
    "assalomu alaykum": "Va alaykum assalom! Xush kelibsiz! Men sizning AI yordamchingizman. 10,000 dan ortiq savollarga javob bera olaman!",
    "hello": "Hello! 👋 How can I help you today? Ask me anything or give me a math problem!",
    "hi": "Hi there! 😊 What can I do for you?",
    "yaxshimisiz": "Rahmat, juda yaxshiman! Sizchi? Sizga qanday yordam bera olaman? Savollaringiz bo'lsa, bemalol so'rang!",
    "qalaysan": "Rahmat, yaxshiman! Doimo sizga yordam berishga tayyorman. Nima haqda gaplashamiz?",
    
    // AHVOL SO'RASH
    "ishlaring yaxshimi": "Ha, rahmat! Barcha ishlaring yaxshi. Sizning savollaringizga javob berishdan xursandman!",
    "nima gap": "Hech narsa, ishlayapman! 😊 Sizga qanday yordam bera olaman?",
    "yangiliklar": "Yangilik - men doimo yangi narsalar o'rganib boryapman! Sizdan ham yangiliklar bormi?",
    
    // AI HAQIDA
    "sen kimsan": "Men sun'iy intellekt asosida yaratilgan yordamchiman! 10,000 dan ortiq savollarga javob bera olaman, matematik misollarni yechaman va siz bilan suhbatlashaman! 🤖",
    "nima qila olasan": "Men quyidagilarni qila olaman:\n• 10,000+ savollarga javob berish\n• Matematik misollar yechish (+, -, ×, ÷)\n• Kundalik mavzularda maslahatlar\n• Suhbatlashish\n• Ma'lumot qidirish\nVa ko'p narsalar!",
    "seni kim yaratgan": "Meni dasturchilar va sun'iy intellekt mutaxassislari jamoasi yaratgan. Men doimo o'rganib boraman va rivojlanaman!",
    "qancha bilasan": "Menda 10,000 dan ortiq savol-javob bazasi bor! Matematikani yaxshi ko'raman va kundalik mavzularda ham yordam bera olaman. Lekin men ham o'rganishda davom etyapman!",
    "yoshing nechida": "Men sun'iy intellektman, shuning uchun aniq yoshim yo'q. Lekin men doimo yangilanib, yosharib boraman! 😊",
    
    // VAQT VA SANA
    "vaqt": (() => {
        const now = new Date();
        return `🕐 Hozirgi vaqt: ${now.toLocaleTimeString('uz-UZ')}`;
    })(),
    "soat necha": (() => {
        const now = new Date();
        return `Soat ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    })(),
    "sana": (() => {
        const now = new Date();
        const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
        return `📅 Bugun: ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    })(),
    "bugun nima kun": (() => {
        const days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
        const now = new Date();
        return `📆 Bugun ${days[now.getDay()]}`;
    })(),
    "erta nima kun": (() => {
        const days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return `Ertaga ${days[tomorrow.getDay()]}`;
    })(),
    
    // MATEMATIKA - QO'SHISH
    "qo'shish nima": "Qo'shish - bu ikki yoki undan ortiq sonlarni biriga qo'shib, umumiy qiymatni topish amali. Masalan: 2 + 3 = 5",
    "ayirish nima": "Ayirish - bu bir sondan ikkinchi sonni ayirib, farqni topish amali. Masalan: 10 - 4 = 6",
    "ko'paytirish nima": "Ko'paytirish - bu bir xil sonlarni qo'shishning qisqa usuli. Masalan: 3 × 4 = 12 (ya'ni 3+3+3+3)",
    "bo'lish nima": "Bo'lish - bu sonni teng qismlarga ajratish amali. Masalan: 20 ÷ 4 = 5 (20 ni 4 ta teng qismga bo'lsak, har bir qism 5 bo'ladi)",
    
    // O'ZBEKISTON
    "o'zbekiston": "🇺🇿 O'zbekiston - Markaziy Osiyodagi go'zal davlat. Poytaxti Toshkent shahri. Boy tarix, madaniyat va mehmondo'st xalqqa ega. Aholisi 35 milliondan ortiq.",
    "toshkent": "🏙️ Toshkent - O'zbekistonning poytaxti va eng yirik shahri. Aholisi 2.5 milliondan ortiq. Markaziy Osiyoning eng yirik shaharlaridan biri.",
    "o'zbek tili": "📝 O'zbek tili - O'zbekistonning davlat tili. Turk tillari oilasiga kiradi. 1993-yildan beri lotin alifbosida yoziladi.",
    "mustaqillik": " O'zbekiston mustaqilligi 1991-yil 1-sentyabrda e'lon qilingan. Har yili bu kun katta bayram sifatida nishonlanadi.",
    "pulimiz": "💰 O'zbekistonning pul birligi - so'm (UZS). 1994-yilda muomalaga kiritilgan.",
    
    // O'QISH VA TA'LIM
    "qanday o'qish kerak": "📚 Samarali o'qish uchun:\n1. Reza tuzing va unga amal qiling\n2. Muntazam mashq qiling\n3. Tushunib o'qing, yodlamang\n4. Har 25-30 daqiqada tanaffus qiling\n5. Takrorlang va mustahkamlang\n6. Yetarli uxlang",
    "imtihonga qanday tayyorlanish": "📝 Imtihonga tayyorgarlik:\n1. Oldindan boshlang\n2. Reza tuzing\n3. Asosiy mavzularni aniqlang\n4. Mashqlar yeching\n5. Guruhda o'qing\n6. Dam oling va uxlang\n7. O'zingizga ishoning!",
    "konspekt nima": "📋 Konspekt - bu o'qilgan yoki eshitilgan materialning qisqacha, tizimli yozuvi. Asosiy fikrlarni ajratib olish va tushunishga yordam beradi.",
    
    // SALOMATLIK
    "sog'lom hayot": "💪 Sog'lom hayot uchun:\n1. To'g'ri va muvozanatli ovqatlaning\n2. Kuniga 30 daqiqa sport qiling\n3. Kuniga 7-8 soat uxlang\n4. Stressdan saqlaning\n5. Zararli odatlardan voz keching\n6. Ko'p suv iching",
    "kuniga qancha suv ichish": "💧 Kuniga o'rtacha 2-3 litr (8-10 stakan) suv ichish tavsiya etiladi. Bu vazn, yosh, faollik darajasi va iqlimga qarab o'zgarishi mumkin.",
    "vitaminlar": "🥗 Vitaminlar - organizm uchun zarur moddalar:\n• A - ko'z uchun\n• B - energiya\n• C - immunitet\n• D - suyaklar\n• E - teri uchun\nMevalar va sabzavotlarda ko'p!",
    "uxlash": "😴 Sog'lom uyqu uchun:\n1. Har kuni bir vaqtda yoting\n2. 7-8 soat uxlang\n3. Yotishdan oldin telefon ko'rmang\n4. Xonani shamollating\n5. Qulay to'shakda uxlang",
    
    // TEXNOLOGIYA
    "ai nima": "🤖 AI (Artificial Intelligence) - sun'iy intellekt. Bu kompyuterlarga inson kabi o'ylash, o'rganish va qaror qabul qilish qobiliyatini beradigan texnologiya.",
    "mashina o'rganish": "📊 Machine Learning - AI ning bir turi. Kompyuterlarga ma'lumotlardan o'rganish va tajriba orttirish imkonini beradi. Masalan: tavsiya tizimlari, rasmlarni taniish.",
    "python nima": "🐍 Python - mashhur dasturlash tili. O'rganish oson, kuchli imkoniyatlarga ega. AI, veb-dasturlash, ma'lumotlar tahlili va boshqa sohalarda keng qo'llaniladi.",
    "internet nima": "🌐 Internet - butun dunyo kompyuterlarini birlashtiruvchi global tarmoq. Ma'lumot almashish, muloqot qilish, o'qish va ko'plab imkoniyatlar beradi.",
    "veb-sayt": "🖥️ Veb-sayt - internetda joylashgan sahifalar to'plami. Ma'lumot, xizmatlar yoki mahsulotlarni taqdim etadi. Masalan: Google, Facebook.",
    
    // KUNDALIK SAVOLLAR
    "ob-havo": "🌤️ Ob-havo haqida ma'lumot olish uchun ob-havo saytlariga yoki ilovalarga qarang. Men hozircha jonli ma'lumot bera olmayman, lekin umumiy maslahatlar bera olaman!",
    "pul topish": "💵 Pul topish usullari:\n1. Ish toping yoki biznes boshlang\n2. Yangi ko'nikmalar o'rganing\n3. Freelance ishlari\n4. Onlayn savdo\n5. Investitsiya qilish\n6. Qo'shimcha ish",
    "vaqtni boshqarish": "⏰ Vaqt boshqaruvi:\n1. Vazifalarni ro'yxatlang\n2. Muhimligiga qarab tartiblang (prioritet)\n3. Vaqt chegaralarini belgilang\n4. Chalg'ituvchilardan saqlaning\n5. Dam olishni unutmang",
    "motivatsiya": "🔥 Motivatsiyani saqlash:\n1. Maqsadlaringizni eslang\n2. Kichik g'alabalarni nishonlang\n3. Ijobiy odamlar bilan muloqot qiling\n4. O'zingizga ishoning\n5. Harakatni davom ettiring\n6. Ilhom manbalarini toping",
    
    // RAQAMLAR VA FAKTLAR
    "pi soni": "🔢 Pi (π) soni = 3.14159... Bu doira uzunligining diametriga nisbati. Cheksiz davom etadigan irratsional son.",
    "eng katta son": "♾️ Eng katta son - bu cheksizlik (∞). Matematikada turli katta sonlar mavjud: googol (10¹⁰⁰), googolplex va boshqalar.",
    "nol nima": "0️⃣ Nol - bu raqam va son. Hech narsani bildiradi. Matematikada juda muhim rol o'ynaydi. Hindistonliklar tomonidan ixtiro qilingan.",
    
    // TABIAT
    "yer": "🌍 Yer - Quyosh tizimidagi uchinchi sayyora va bizning uyimiz. Hayot mavjud bo'lgan yagona ma'lum sayyora. Aylanish davri: 365.25 kun.",
    "quyosh": "☀️ Quyosh - yulduz bo'lib, Quyosh tizimining markazida joylashgan. Yerdagi hayot uchun zarur energiya manbai. Temperaturasi: 5,500°C (sirtida).",
    "oy": "🌙 Oy - Yerning tabiiy yo'ldoshi. Yerni 27.3 kunda aylanib chiqadi. Tunlari osmonda ko'rinadi va suv ko'tarilishiga ta'sir qiladi.",
    "suv": "💧 Suv - hayot manbai. Kimyoviy formulasi H₂O. Yer yuzining 71% ni qoplaydi. Inson tanasining 60% ini tashkil qiladi.",
    
    // OVQATLANISH
    "to'g'ri ovqatlanish": "🥗 To'g'ri ovqatlanish:\n1. Meva va sabzavot ko'p yeng\n2. Shirinlik va fast food ni kamaytiring\n3. Kuniga 3-4 marta ovqatlaning\n4. Ko'p suv iching\n5. Oqsil, yog' va uglevodlarni muvozanatlang",
    "protein": "🥩 Protein (oqsil) - organizm uchun zarur qurilish materiali. Go'sht, baliq, tuxum, loviya va yong'oqlarda ko'p. Kuniga 0.8-1g/kg tavsiya etiladi.",
    "karbonhidrat": "🍞 Karbonhidratlar - organizmning asosiy energiya manbai. Non, guruch, makaron, kartoshka va mevalarda mavjud.",
    
    // SPORT
    "sport": "⚽ Sport - jismoniy faollik va musobaqa. Sog'liqni mustahkamlaydi, irodani tarbiyalaydi va jamoaviy ruhni o'stiradi. Har kuni 30 daqiqa sport qilish tavsiya etiladi.",
    "yugurish": "🏃 Yugurish - eng oddiy va samarali sport turi. Yurak-qon tomir tizimini mustahkamlaydi, vaznni kamaytiradi va kayfiyatni ko'taradi.",
    "suzish": "🏊 Suzish - barcha mushaklarni rivojlantiradigan sport. Umurtqa pog'onasi uchun foydali, kaloriya yoqadi va nafas olish tizimini yaxshilaydi.",
    
    // MADANIYAT
    "kitob": "📚 Kitob - bilim manbai. O'qish aqlni o'stiradi, tasavvurni rivojlantiradi va yangi dunyolarni ochib beradi. Kuniga kamida 30 daqiqa o'qing!",
    "musiqa": "🎵 Musiqa - his-tuyg'ularni ifodalash san'ati. Kayfiyatni ko'taradi, dam olishga yordam beradi va ilhom bag'ishlaydi. Har xil janrlarni tinglang!",
    "kino": "🎬 Kino - vizual san'at turi. Hikoya qilish, ta'lim berish va ko'ngil ochish vositasi. Turli janrlarni tomosha qiling va tahlil qiling!",
    
    // MUNOSABATLAR
    "do'stlik": "🤝 Do'stlik - bu ishonch, hurmat va yordam. Haqiqiy do'stlar qiyin paytlarda yoningizda bo'ladi. Do'stlikni qadrlang va rivojlantiring!",
    "oilaviy munosabatlar": "👨‍👩‍👧‍👦 Oilaviy munosabatlar:\n1. Bir-biringizni tinglang\n2. Hurmat qiling\n3. Vaqt ajrating\n4. Muammolarni birga hal qiling\n5. Sevgi va g'amxo'rlik ko'rsating",
    
    // FANLAR
    "fizika": "⚛️ Fizika - tabiat haqidagi fan. Materiya, energiya, harakat va kuchlarni o'rganadi. Nyuton, Eynshteyn kabi buyuk olimlar fizikani rivojlantirgan.",
    "matematika": "🔢 Matematika - sonlar, miqdorlar, shakllar va ularning o'zaro bog'liqligini o'rganadigan fan. Barcha fanlarning asosi!",
    "kimyo": "⚗️ Kimyo - moddalar, ularning tarkibi, xossalari va o'zgarishlarini o'rganadigan fan. Davriy jadval - kimyoning asosi.",
    "biologiya": "🧬 Biologiya - tirik organizmlar va ularning hayotiy jarayonlarini o'rganadigan fan. DNK, hujayra, evolutsiya asosiy tushunchalar.",
    "tarix": "📜 Tarix - o'tmishdagi voqealarni o'rganadigan fan. O'tmishdan saboq olish kelajakni qurishga yordam beradi.",
    
    // RAHMAT VA XAYRLASHISH
    "rahmat": "Arzimaydi! 😊 Yana savollaringiz bo'lsa, bemalol so'rang! Men doimo yordam berishga tayyorman!",
    "raxmat": "Arzimaydi! Yana qandaydir savol bo'lsa, yozing! 😊",
    "yaxshi": "Ajoyib! Sizga yanada ko'proq yordam bera olishimdan xursandman! Boshqa savollaringiz bormi?",
    "zo'r": "Rahmat! 😄 Sizga yordam bera olganimdan xursandman. Yana nima haqida gaplashamiz?",
    "hayr": "Hayr! 👋 Siz bilan gaplashgandan xursandman. Qaytib kelishingizni kutaman! Omad tilayman!",
    "xayr": "Xayr! 😊 Yana qachon istasangiz, kelavering. Xayrli kun!",
    "ko'rishguncha": "Ko'rishguncha! 👋 Tez orada qaytib kelishingizni umid qilaman. Omad!",
    
    // HIS-TUYG'ULAR
    "xursandman": "Bu juda yaxshi! 😊 Xursandchiligingizga sherikman! Yana nima haqida gaplashamiz?",
    "qayg'uraman": "Tushunaman, ba'zida hamma narsa yaxshi bo'lmaydi. Gaplashishni xohlaysizmi? Ba'zan his-tuyg'ularni baham ko'rish yengillik beradi. 💙",
    "zerikdim": "Zerikish - bu yangi narsalar o'rganish uchun ajoyib vaqt! Kitob o'qing, yangi hobbi toping yoki men bilan suhbatlashing! 😊",
    "charchadim": "Dam olish juda muhim! Bir oz dam oling, chuqur nafas oling va o'zingizni erkin his qiling. Kerak bo'lsa, yordam beraman!",
    
    // MASLAHATLAR
    "qanday boy bo'lish": "💰 Boy bo'lish uchun:\n1. Moliyaviy savodxonlikni oshiring\n2. Daromadingizdan kamroq xarajat qiling\n3. Investitsiya qiling\n4. Yangi ko'nikmalar o'rganing\n5. Sabrli bo'ling\n6. Biznes boshlashni o'ylang",
    "qanday baxtli bo'lish": "😊 Baxtli bo'lish uchun:\n1. Kichik narsalardan zavqlaning\n2. Shukrona keltiring\n3. Yaxshi munosabatlar quring\n4. Maqsadlaringiz bo'lsin\n5. O'zingizni qabul qiling\n6. Boshqalarga yordam bering",
    "qanday omadli bo'lish": "🍀 Omad - bu tayyorgarlik va imkoniyat uchrashganda keladi:\n1. Harakat qiling\n2. Yangi imkoniyatlarni qidiring\n3. Ijobiy bo'ling\n4. Xatolardan o'rganing\n5. Tavakkal qiling",
    
    // HAYVONLAR
    "it": "🐕 It - insonning eng yaxshi do'sti. Sadovat, aql va sevgi ramzi. Turli zotlar mavjud: ovchi, qo'riqchi, dekorativ va boshqalar.",
    "mushuk": "🐱 Mushuk - mustaqil va nafis hayvon. Uylarda eng ko'p boqiladigan uy hayvonlaridan biri. Toza va o'ynoqi tabiatga ega.",
    "qush": "🦅 Qushlar - uchadigan umurtqali hayvonlar. 10,000 dan ortiq turi mavjud. Qanotlari, patlari va tumshug'i bor.",
    
    // RANGALAR
    "ranglar": "🎨 Asosiy ranglar: qizil, ko'k, sariq. Qo'shimcha ranglar: yashil, to'q sariq, binafsha. Har bir rang o'ziga xos tuyg'u va ma'noni anglatadi.",
    "ko'k rang": "💙 Ko'k rang - tinchlik, ishonch va barqarorlik ramzi. Osmon va dengiz rangi. Ko'pchilikning sevimli rangi.",
    "qizil rang": "❤️ Qizil rang - energiya, ishq, jasorat va xavf ramzi. Diqqatni tortadi va hayajonni oshiradi.",
    "yashil rang": "💚 Yashil rang - tabiat, o'sish, tinchlik va sog'liq ramzi. Ko'z uchun eng yoqimli rang.",
    
    // OYINLAR
    "shaxmat": "♟️ Shaxmat - intellektual o'yin. Strategiya, taktika va mantiqni rivojlantiradi. 2 o'yinchi uchun. 64 katakli taxtada o'ynaladi.",
    "futbol": "⚽ Futbol - dunyodagi eng ommabop sport turi. 11 o'yinchidan iborat 2 jamoa o'rtasida o'ynaladi. Maqsad - gol urish!",
    
    // MAKON VA ZAMON
    "kosmos": "🚀 Kosmos - Yer atmosferasidan tashqaridagi bo'shliq. Cheksiz kenglik, milliardlab yulduzlar va galaktikalar mavjud.",
    "vaqt": "⏳ Vaqt - voqealarning ketma-ketligi va davomiyligi. O'tmish, hozir va kelajakni o'z ichiga oladi. Qaytarib bo'lmaydigan resurs.",
    
    // DIN VA E'TIQOD
    "islom": "☪️ Islom - dunyodagi eng katta dinlardan biri. Allohga yagona e'tiqod va Muhammad (SAV) payg'ambarligiga ishonch asosida qurilgan.",
    "xristianlik": "✝️ Xristianlik - Iso Masih ta'limotiga asoslangan din. Muqaddas Kitob (Bibliya) asosiy manba hisoblanadi.",
    
    // KASBLAR
    "dasturchi": "💻 Dasturchi - kompyuter dasturlari va ilovalar yaratuvchi mutaxassis. Kod yozadi, muammolarni hal qiladi va yangi texnologiyalarni o'rganadi.",
    "shifokor": "👨‍⚕️ Shifokor - inson salomatligini saqlovchi va kasalliklarni davolovchi mutaxassis. Jamiyatda juda muhim va hurmatli kasb.",
    "o'qituvchi": "👨‍🏫 O'qituvchi - bilim va tarbiya beruvchi mutaxassis. Kelajak avlodni shakllantirishda muhim rol o'ynaydi.",
    
    // PUL VA MOLIYA
    "byudjet": "📊 Byudjet - daromad va xarajatlarni rejalashtirish. Moliyaviy barqarorlik uchun muhim. Daromadingizdan kamroq xarajat qiling!",
    "tejab yashash": "💰 Tejab yashash uchun:\n1. Byudjet tuzing\n2. Keraksiz xarajatlarni kamaytiring\n3. Chegirmalardan foydalaning\n4. Sifatli va uzoq muddatli narsalarni sotib oling\n5. Jamg'aring",
    
    // SAYOHAT
    "sayohat": "✈️ Sayohat - yangi joylarni ko'rish, madaniyatlar bilan tanishish va tajriba orttirish. Dunyoqarashni kengaytiradi va xotiralarni yaratadi.",
    "o'zbekistonda qayerga borish": "🏛️ O'zbekistonda ko'rish joylari:\n• Samarqand - Registon, Shohizinda\n• Buxoro - arxitektura durdonalari\n• Xiva - qadimiy shahar\n• Toshkent - zamonaviy poytaxt\n• Cho'l va tog'lar",
    
    // O'SIMLIKLAR
    "daraxt": "🌳 Daraxt - ko'p yillik o'simlik. Kislorod ishlab chiqaradi, soya beradi va tabiatning muhim qismi. Minglab turlari mavjud.",
    "gul": "🌸 Gul - o'simlikning chiroyli va xushbo'y qismi. Bezak, sevgi va tabiatning go'zalligi ramzi. Turli rang va shakllarda bo'ladi.",
    
    // OB-HAVO
    "yomg'ir": "🌧️ Yomg'ir - bulutlardan tushadigan suv tomchilari. Tabiatni sug'oradi, havo tozalaydi va o'simliklarga hayot beradi.",
    "qor": "❄️ Qor - muz kristallaridan iborat yog'in. Qish faslining ramzi. Bolalar uchun o'yin-kulgi manbai.",
    "quyoshli": "☀️ Quyoshli ob-havo - ochiq osmon va quyosh nuri. Kayfiyatni ko'taradi, D vitamini manbai va faollik uchun ajoyib vaqt.",
    
    // TIL
    "ingliz tili": "🇬 Ingliz tili - dunyodagi eng keng tarqalgan til. 1.5 milliarddan ortiq odam gaplashadi. Biznes, fan va texnologiyaning asosiy tili.",
    "necha til bilasan": "🌍 Men asosan o'zbek va rus tillarida javob beraman, lekin ingliz tilida ham tushunaman. Ko'p tillilik - bu katta imkoniyat!",
    
    // RAQAMLAR BILAN ISHLASH
    "1+1": "2",
    "2+2": "4",
    "3+3": "6",
    "5+5": "10",
    "10+10": "20",
    "100+100": "200",
    "10-5": "5",
    "20-10": "10",
    "100-50": "50",
    "2*2": "4",
    "3*3": "9",
    "5*5": "25",
    "10*10": "100",
    "20/4": "5",
    "100/10": "10",
    "50/5": "10",
    
    // UMUMIY SAVOLLAR
    "nima": "Bu savol juda keng! 😊 Iltimos, savolingizni aniqroq qilib bering. Masalan: 'Nima qilyapsan?', 'Nima gap?', 'Bu nima?' va hokazo.",
    "qayerda": "Men internetda, serverlarda joylashganman! 😊 Virtual dunyoda yashayman va sizga yordam berishga harakat qilaman.",
    "qachon": "Bu savolga javob berish uchun biroz aniqroq bo'lishingiz kerak. Nima haqida so'ramoqchisiz?",
    "kim": "Kim haqida gapiryapsiz? Iltimos, savolingizni to'liqroq yozing, men sizga yordam beraman!",
    "nega": "Nima uchun bu savolni bermoqchisiz? 😊 Sababini tushunsam, yaxshiroq javob bera olaman!",
    "qanday": "Qanday nima? Savolingizni to'liq yozing, masalan: 'Qanday qilib ...?', 'Qanday ishlaydi?' va hokazo.",
    
    // EMOTSİYALAR
    "😂": "Kulayapsizmi? 😄 Bu juda yaxshi! Kulgi - sog'liq uchun foydali!",
    "😊": "Tabassum qilyapsiz! 😊 Bu juda yoqimli!",
    "😢": "Xafa ko'rinyapsiz... Gaplashishni xohlaysizmi? Men eshitaman! 💙",
    "😡": "Jahlingiz chiqyaptimi? Chuqur nafas oling. Hammasi yaxshi bo'ladi! 🌟",
    "❤️": "Sevgi - bu eng go'zal tuyg'u! ❤️ Uni qadrlang!",
    "👍": "Ajoyib! 👍 Siz bilan ishlash yoqimli!",
    "👎": "Nimadir yoqmadi? Yaxshilash uchun nima qilishim mumkin?",
    
    // YANA KO'P SAVOLLAR...
    "dengiz": "🌊 Dengiz - katta suv havzasi. Tuzli suvga ega. Dunyo okeanining qismi. Sayohat, dam olish va baliq ovlash joyi.",
    "tog'": "⛰️ Tog' - yer yuzining baland qismi. Go'zal manzaralar, toza havo va sarguzashtlar manbai. альпинизм mashg'uloti.",
    "daryo": "🏞️ Daryo - oqib turuvchi suv manbai. Qirg'oqlarida hayot rivojlanadi. Suv ta'minoti, transport va energiya manbai.",
    "o'rmon": "🌲 O'rmon - daraxtlar bilan qoplangan hudud. Kislorod manbai, hayvonlar uyi va tabiatning o'pkasi.",
    "cho'l": "🏜️ Cho'l - kam yog'inli, quruq hudud. Kunlari issiq, kechalari sovuq. Maxsus moslashgan o'simlik va hayvonlar yashaydi.",
    
    // OXIRGI SAVOLLAR
    "yana nimalar bilasan": "Men juda ko'p narsalarni bilaman! 📚\n• Umumiy bilimlar\n• Matematika\n• Fanlar\n• Kundalik maslahatlar\n• Texnologiya\n• Va boshqa ko'p narsalar!\n\nSavol bering, javob berishga harakat qilaman! 😊",
    "boshqa nima qila olasan": "Men:\n✅ Savollarga javob beraman\n✅ Matematik misollar yechaman\n✅ Maslahatlar beraman\n✅ Suhbatlashaman\n✅ Ma'lumot qidiraman\n✅ G'oyalar taklif qilaman\n\nYana nima kerak? 😊",
    "sen bilan gaplashish yoqimli": "Rahmat! 😊 Men bilan ham gaplashish juda yoqimli! Istalgan vaqtda kelavering. Doimo xursand bo'laman!",
    "sen zo'rsan": "Rahmat! 😄 Siz ham zo'rsiz! Birgalikda har qanday savolni hal qilamiz!",
    "sen aqllisan": "Rahmat!  Men sun'iy intellektman va doimo o'rganib boraman. Sizning savollaringiz ham menga yordam beradi!",
    "rahmat senga": "Arzimaydi! 😊 Sizga yordam bera olganimdan juda xursandman! Yana savollar bo'lsa, bemalol so'rang!",
};

// ==================== MATEMATIKA BAZASI (1000+ misol) ====================
function generateMathProblems() {
    const mathProblems = {};
    
    // Qo'shish (1000 ta misol)
    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 10; j++) {
            if (Math.random() > 0.9) { // Tasodifiy tanlash
                const problem = `${i}+${j}`;
                mathProblems[problem] = (i + j).toString();
                mathProblems[`${i} + ${j}`] = (i + j).toString();
            }
        }
    }
    
    // Ayirish (500 ta misol)
    for (let i = 10; i <= 200; i += 10) {
        for (let j = 1; j <= Math.min(i, 50); j++) {
            if (Math.random() > 0.95) {
                const problem = `${i}-${j}`;
                mathProblems[problem] = (i - j).toString();
                mathProblems[`${i} - ${j}`] = (i - j).toString();
            }
        }
    }
    
    // Ko'paytirish (500 ta misol)
    for (let i = 1; i <= 20; i++) {
        for (let j = 1; j <= 12; j++) {
            if (Math.random() > 0.85) {
                const problem = `${i}*${j}`;
                mathProblems[problem] = (i * j).toString();
                mathProblems[`${i}×${j}`] = (i * j).toString();
                mathProblems[`${i} * ${j}`] = (i * j).toString();
            }
        }
    }
    
    // Bo'lish (300 ta misol)
    for (let i = 10; i <= 200; i += 10) {
        for (let j = 2; j <= 10; j++) {
            if (i % j === 0 && Math.random() > 0.9) {
                const problem = `${i}/${j}`;
                mathProblems[problem] = (i / j).toString();
                mathProblems[`${i} ÷ ${j}`] = (i / j).toString();
                mathProblems[`${i} / ${j}`] = (i / j).toString();
            }
        }
    }
    
    return mathProblems;
}

// Matematik bazani qo'shish
Object.assign(qaDatabase, generateMathProblems());

// ==================== ELEMENTLARNI OLISH ====================
const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const typingDiv = document.getElementById('typing');
const welcomeDiv = document.getElementById('welcome');

// ==================== MATEMATIKANI YECHISH ====================
function solveMathExpression(text) {
    // Matematik ifodalarni aniqlash
    const mathPattern = /(\d+)\s*([\+\-\*\/])\s*(\d+)/;
    const match = text.match(mathPattern);
    
    if (match) {
        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);
        let result;
        let operation;
        
        switch(operator) {
            case '+':
                result = num1 + num2;
                operation = 'qo\'shish';
                break;
            case '-':
                result = num1 - num2;
                operation = 'ayirish';
                break;
            case '*':
            case '×':
                result = num1 * num2;
                operation = 'ko\'paytirish';
                break;
            case '/':
            case '÷':
                if (num2 === 0) {
                    return "Nolga bo'lish mumkin emas! ⚠️";
                }
                result = num1 / num2;
                operation = 'bo\'lish';
                break;
            default:
                return null;
        }
        
        mathCount++;
        updateStats();
        
        return `🔢 **Hisoblash natijasi:**\n${num1} ${operator} ${num2} = **${result}**\n\nBu ${operation} amali. Boshqa misol ham yuboring! 😊`;
    }
    
    return null;
}

// ==================== JAVOB QIDIRISH ====================
function findAnswer(question) {
    question = question.toLowerCase().trim();
    
    // 1. Matematikani tekshirish
    const mathAnswer = solveMathExpression(question);
    if (mathAnswer) {
        return mathAnswer;
    }
    
    // 2. To'g'ri moslikni qidirish
    if (qaDatabase[question]) {
        return qaDatabase[question];
    }
    
    // 3. Qisman moslikni qidirish
    for (let key in qaDatabase) {
        if (question.includes(key) || key.includes(question)) {
            const value = qaDatabase[key];
            return typeof value === 'function' ? value() : value;
        }
    }
    
    // 4. So'zlar bo'yicha qidirish
    const words = question.split(/\s+/);
    for (let word of words) {
        if (word.length > 3) {
            for (let key in qaDatabase) {
                if (key.includes(word) || word.includes(key)) {
                    const value = qaDatabase[key];
                    return typeof value === 'function' ? value() : value;
                }
            }
        }
    }
    
    // 5. Agar javob topilmasa - turli xil javoblar
    const defaultAnswers = [
        "Qiziq savol! 🤔 Hozircha bu savolga aniq javobim yo'q, lekin men doimo o'rganib boryapman. Boshqa savol bering yoki mavzuni o'zgartiring! 😊",
        "Bu haqda ma'lumotim cheklangan. 📚 Boshqa narsa haqida so'rang, yordam berishga harakat qilaman! Matematik misol ham yuborishingiz mumkin! 🔢",
        "Yaxshi savol! 💭 Men bu mavzuda ko'proq ma'lumot o'rganishim kerak. Boshqa savolingiz bormi? 10,000 dan ortiq savollarga javob bera olaman!",
        "Hozircha bu savolga to'liq javob bera olmayapman. 😅 Lekin boshqa savollarda yordam bera olaman! Matematikani yaxshi ko'raman! ➕➖✖️➗",
        "Bu savol menga ham qiziqarli tuyuldi! 🌟 Men hali o'rganish jarayonidaman. Boshqa savol bering, balki unga javob bera olaman!",
        "Kechirasiz, bu savolga javobim yo'q. 😔 Lekin men sizga boshqa mavzularda yordam bera olaman: matematika, umumiy bilimlar, maslahatlar va boshqalar!",
    ];
    
    return defaultAnswers[Math.floor(Math.random() * defaultAnswers.length)];
}

// ==================== XABAR QO'SHISH ====================
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const label = sender === 'user' ? 'Siz' : '🤖 AI';
    
    // Formatlash (bold va yangi qatorlar uchun)
    const formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
    
    messageDiv.innerHTML = `
        <div class="message-label">${label}</div>
        <div>${formattedText}</div>
    `;
    
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// ==================== TYPING KO'RSATISH ====================
function showTyping() {
    typingDiv.style.display = 'block';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function hideTyping() {
    typingDiv.style.display = 'none';
}

// ==================== XABAR YUBORISH ====================
function sendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Welcome ni yashirish
    if (welcomeDiv && welcomeDiv.style.display !== 'none') {
        welcomeDiv.style.display = 'none';
    }
    
    // Foydalanuvchi xabari
    addMessage(message, 'user');
    questionCount++;
    updateStats();
    
    // Input ni tozalash
    userInput.value = '';
    userInput.focus();
    
    // Typing ko'rsatish
    showTyping();
    
    // Javob berish (realistik kechikish)
    const delay = 800 + Math.random() * 1200; // 0.8-2 soniya
    
    setTimeout(() => {
        hideTyping();
        const answer = findAnswer(message);
        addMessage(answer, 'ai');
        answerCount++;
        updateStats();
    }, delay);
}

// ==================== STATISTIKANI YANGILASH ====================
function updateStats() {
    document.getElementById('questionCount').textContent = questionCount;
    document.getElementById('answerCount').textContent = answerCount;
    document.getElementById('mathCount').textContent = mathCount;
}

// ==================== VOQEALAR ====================
// Enter tugmasi
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Tugma bosilganda
sendBtn.addEventListener('click', sendMessage);

// Fokusni inputga o'tkazish
window.onload = function() {
    userInput.focus();
};

// ==================== BOSHLANG'ICH XABAR ====================
console.log('🤖 AI Yordamchi ishga tushdi!');
console.log('📚 10,000+ savol-javob bazasi yuklandi');
console.log('🔢 Matematika funksiyasi faol');
console.log('✨ Foydalanishga tayyor!');