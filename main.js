// change navbar style on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

const I18N = {
  ar: {
    "brand.name": "تاي-إن",
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.works": "أعمالنا",
    "nav.contact": "تواصل معنا",
    "lang.switchAria": "تبديل اللغة",
    "index.title": "شركة تاي-إن للمقاولات والتوريدات",
    "about.title": "من نحن | شركة تاي-إن",
    "courses.title": "أعمالنا | شركة تاي-إن",
    "ourWork.title": "أعمالنا | شركة تاي-إن",
    "ourWork.heroText": "جميع مجالات عمل الشركة في صفحة واحدة: الاختبارات الكهربائية، الأعمال الكهربائية، والأعمال الميكانيكية.",
    "partners.title": "شركاؤنا | شركة تاي-إن",
    "sumedProject.title": "مشروع سوميد | شركة تاي-إن",
    "electrical.title": "أعمالنا | شركة تاي-إن",
    "mechanical.title": "أعمالنا | شركة تاي-إن",
    "portfolio.title": "سابقة الأعمال | شركة تاي-إن",
    "contact.title": "تواصل معنا | شركة تاي-إن",
    "hero.main": "نبني المستقبل… ونحقق رؤيتك على أرض الواقع",
    "hero.mainText": "نلتزم في شركة تاي-إن بتقديم خدمات متكاملة في المقاولات والتوريدات، معتمدين على خبراتنا الفنية وفريق عملنا المتخصص، لتنفيذ مشاريع عالية الجودة وفق أعلى معايير الدقة والسلامة، بما يضمن رضا عملائنا وتحقيق تطلعاتهم بكل احترافية.",
    "hero.mainCta": "اعرف اكتر عنا",
    "common.learnMore": "أعرف أكثر",
    "index.aboutCompany": "عن الشركة",
    "index.aboutCompanyText": "شركة تاي - إن هي شركة رائدة متخصصة في المقاولات العامة والتوريدات ومقرها الإسكندرية، تتمتع بشخصية اعتبارية متميزة بين منافسيها في السوق المصري، وذلك لما اكتسبته من خبرات ومهارات فنية عالية على مدار فترة عملها في تنفيذ مشاريع متنوعة. أثبتت الشركة جدارتها في السوق من خلال تحقيق ثقة العملاء والجهات المتعاملة معها، بفضل أدائها المتميز والتزامها بالجودة والسلامة، واعتمادها على فرق عمل مدربة وذات كفاءة.",
    "index.contactUsBtn": "تواصل معنا",
    "index.currentPartners": "الشركات الجارى التعامل معها",
    "index.viewMoreProjects": "عرض المزيد",
    "index.morePartnersTitle": "باقي الشركات",
    "index.serviceFields": "المجالات التى تعمل بها الشركة",
    "index.portfolioBtn": "سابقة الأعمال",
    "index.aboutUsBlock": "تعرف علينا",
    "index.whyChooseUsKicker": "لماذا تاي-إن",
    "index.whyChooseUsTitle": "لماذا تختارنا",
    "index.whyChooseUsText": "نقدم قيمة تشغيلية حقيقية تجمع بين الكفاءة الفنية والانضباط التنفيذي والشراكات القوية، بما يمنح عملاءنا نتائج موثوقة ومستدامة.",
    "index.whyChooseUsPoint1": "تمتلك فرق عمل فنية مدربة من ذوي الكفاءة والخبرة",
    "index.whyChooseUsPoint2": "تهتم بتطبيق أنظمة الجودة والسلامة وحماية البيئة",
    "index.whyChooseUsPoint3": "تواكب أحدث التقنيات العالمية في المجال الصناعي",
    "index.whyChooseUsPoint4": "لديها علاقات قوية مع أبرز العلامات التجارية العالمية",
    "index.faqTitle": "الأسئلة الشائعة",
    "index.strategyTitle": "استراتيجية الشركة",
    "index.aboutBlockKicker": "تقنية متقدمة وخبرة عميقة",
    "index.aboutBlockText": "شركة تاي-إن متخصصة في أعمال التوريدات والتركيبات (الكهربائية والكبلات والكشافات، شبكات المواسير وجميع لوازمها، تنفيذ جميع أنواع اللحامات والسن، العزل الحراري ساخن وبارد وألومنيوم، جميع أنواع الدهانات، والطلمبات بجميع أنواعها) بأيدٍ عاملة مدربة وذات خبرة. كما نحافظ على السلامة والصحة المهنية وحماية البيئة والجودة والتنمية المستدامة من خلال تطبيق أنظمة إدارة متوافقة مع المواصفات الدولية.",
    "index.cat.companyName": "اسم الشركة",
    "index.cat.companyNameText": "شركة تاي - إن للمقاولات والتوريدات",
    "index.cat.specialty": "التخصص",
    "index.cat.specialtyText": "أعمال المقاولات الكهروميكانيكية والميكانيكية والكهربائية",
    "index.cat.location": "الموقع",
    "index.cat.locationText": "الإسكندرية – مصر",
    "index.cat.cert1": "تعمل وفق شهادة و رخصة",
    "index.cat.cert1Text": "(الجودة) ISO 9001:2015",
    "index.cat.cert2": "تعمل وفق شهادة و رخصة",
    "index.cat.cert2Text": "(البيئة) ISO 14001:2015",
    "index.cat.cert3": "تعمل وفق شهادة و رخصة",
    "index.cat.cert3Text": "(السلامة والصحة المهنية) ISO 45001:2018",
    "index.project1.title": "الشركة العربية لأنابيب البترول سوميد",
    "index.project1.text": "15 مارس 2026 - توريد وتركيب خط حريق",
    "sumedProject.heroKicker": "تفاصيل المشروع",
    "sumedProject.heroTitle": "الشركة العربية لأنابيب البترول سوميد",
    "sumedProject.heroText": "تفاصيل موجزة عن نطاق أعمال التوريد المنفذة لهذا المشروع.",
    "sumedProject.detailsTitle": "وصف الأعمال",
    "sumedProject.detail1": "توريد بويات ولوازم",
    "sumedProject.detail2": "منظمات هواء",
    "sumedProject.logoAlt": "شعار الشركة العربية لأنابيب البترول سوميد",
    "sumedProject.backBtn": "العودة إلى الصفحة الرئيسية",
    "gharbDeltaProject.title": "مشروع غرب الدلتا | شركة تاي-إن",
    "gharbDeltaProject.heroKicker": "تفاصيل المشروع",
    "gharbDeltaProject.heroTitle": "شركة غرب الدلتا لإنتاج الكهرباء",
    "gharbDeltaProject.heroText": "تفاصيل موجزة عن نطاق أعمال التوريد المنفذة لهذا المشروع.",
    "gharbDeltaProject.detailsTitle": "وصف الأعمال",
    "gharbDeltaProject.detail1": "فلاتر هواء",
    "gharbDeltaProject.detail2": "بويات ولوازم",
    "gharbDeltaProject.detail3": "منظمات هواء",
    "gharbDeltaProject.logoAlt": "شعار شركة غرب الدلتا لإنتاج الكهرباء",
    "gharbDeltaProject.backBtn": "العودة إلى الصفحة الرئيسية",
    "petrochemProject.title": "مشروع البتروكيماويات | شركة تاي-إن",
    "petrochemProject.heroKicker": "تفاصيل المشروع",
    "petrochemProject.heroTitle": "شركة البتروكيماويات المصرية",
    "petrochemProject.heroText": "تفاصيل موجزة عن نطاق أعمال التوريد المنفذة لهذا المشروع.",
    "petrochemProject.detailsTitle": "وصف الأعمال",
    "petrochemProject.detail1": "توريد فلاتر تشغيل وفق المواصفات",
    "petrochemProject.detail2": "توريد جهاز تحليل الغازات القابلة للاشتعال",
    "petrochemProject.logoAlt": "شعار شركة البتروكيماويات المصرية",
    "petrochemProject.backBtn": "العودة إلى الصفحة الرئيسية",
    "alexWaterProject.title": "مشروع مياه الشرب | شركة تاي-إن",
    "alexWaterProject.heroKicker": "تفاصيل المشروع",
    "alexWaterProject.heroTitle": "شركة مياه الشرب بالإسكندرية",
    "alexWaterProject.heroText": "تفاصيل موجزة عن نطاق أعمال الصيانة والتوريد المنفذة لهذا المشروع.",
    "alexWaterProject.detailsTitle": "وصف الأعمال",
    "alexWaterProject.detail1": "إصلاح مواتير كهرباء 55 كيلو فولت",
    "alexWaterProject.detail2": "لف مواتير كهرباء 220 كيلو فولت",
    "alexWaterProject.logoAlt": "شعار شركة مياه الشرب بالإسكندرية",
    "alexWaterProject.backBtn": "العودة إلى صفحة الشركاء",
    "alexWestProject.title": "مشروع أليكس ويست | شركة تاي-إن",
    "alexWestProject.heroKicker": "تفاصيل المشروع",
    "alexWestProject.heroTitle": "شركة أليكس ويست",
    "alexWestProject.heroText": "تفاصيل موجزة عن نطاق أعمال التوريد والصيانة المنفذة لهذا المشروع.",
    "alexWestProject.detailsTitle": "وصف الأعمال",
    "alexWestProject.detail1": "توريد قطع غيار للمحولات",
    "alexWestProject.detail2": "صيانة دورية للمحولات",
    "alexWestProject.logoAlt": "شعار شركة أليكس ويست",
    "alexWestProject.backBtn": "العودة إلى صفحة الشركاء",
    "index.project2.title": "شركة غرب الدلتا لإنتاج الكهرباء",
    "index.project2.text": "15 أبريل 2025 - فلاتر هواء وبويات ولوازم منظمات هواء",
    "index.project3.title": "شركة البتروكيماويات المصرية",
    "index.project3.text": "15 أبريل 2025 - فلاتر",
    "index.project4.title": "شركة مياه الشرب بالاسكندرية",
    "index.project4.text": "15 أبريل 2025 - اصلاح ولف مواتير كهرباء 55 كيلو فولت",
    "index.project5.title": "شركة أليكس ويست",
    "index.project5.text": "15 أبريل 2025 - توريد قطع غيار وصيانة محولات",
    "index.service1.title": "الاختبارات الكهربائية",
    "index.service1.text": "فحوصات شاملة واختبارات دقيقة للأنظمة الكهربائية",
    "index.service2.title": "الاعمال الكهربائية",
    "index.service2.text": "تنفيذ وتركيب الأنظمة الكهربائية بأعلى المعايير",
    "index.service3.title": "الاعمال الميكانيكية",
    "index.service3.text": "خدمات ميكانيكية متخصصة وتوريدات ذات جودة عالمية",
    "index.card1.title": "من نحن",
    "index.card1.text": "شركة تاي - إن للمقاولات والتوريدات",
    "index.card2.title": "التخصص",
    "index.card2.text": "نحن متخصصون في تقديم حلول مبتكرة ومتكاملة لمشاريع المقاولات والتوريدات",
    "index.card3.title": "الموقع",
    "index.card3.text": "الإسكندرية – مصر",
    "index.card4.title": "تعمل وفق شهادة و رخصة",
    "index.card4.text": "الجودة ISO 9001:2015",
    "index.card5.title": "تعمل وفق شهادة و رخصة",
    "index.card5.text": "(البيئة) ISO 14001:2015",
    "index.card6.title": "تعمل وفق شهادة و رخصة",
    "index.card6.text": "(السلامة والصحة المهنية) ISO 45001:2018",
    "index.faq.q1": "كيف أعرف الخدمة المناسبة لي؟",
    "index.faq.q2": "كيف أعرف الخدمة المناسبة لي؟",
    "index.faq.q3": "كيف أعرف الخدمة المناسبة لي؟",
    "index.faq.q4": "كيف أعرف الخدمة المناسبة لي؟",
    "index.faq.q5": "كيف أعرف الخدمة المناسبة لي؟",
    "index.faq.q6": "كيف أعرف الخدمة المناسبة لي؟",
    "index.faq.q7": "كيف أعرف الخدمة المناسبة لي؟",
    "index.faq.q8": "كيف أعرف الخدمة المناسبة لي؟",
    "index.faq.q9": "كيف أعرف الخدمة المناسبة لي؟",
    "index.faq.q10": "كيف أعرف الخدمة المناسبة لي؟",
    "index.faq.a1": "نوفر إجابات واضحة وسريعة على الأسئلة المتكررة لمساعدتك في اتخاذ القرار المناسب.",
    "index.faq.a2": "نوفر إجابات واضحة وسريعة على الأسئلة المتكررة لمساعدتك في اتخاذ القرار المناسب.",
    "index.faq.a3": "نوفر إجابات واضحة وسريعة على الأسئلة المتكررة لمساعدتك في اتخاذ القرار المناسب.",
    "index.faq.a4": "نوفر إجابات واضحة وسريعة على الأسئلة المتكررة لمساعدتك في اتخاذ القرار المناسب.",
    "index.faq.a5": "نوفر إجابات واضحة وسريعة على الأسئلة المتكررة لمساعدتك في اتخاذ القرار المناسب.",
    "index.faq.a6": "نوفر إجابات واضحة وسريعة على الأسئلة المتكررة لمساعدتك في اتخاذ القرار المناسب.",
    "index.faq.a7": "نوفر إجابات واضحة وسريعة على الأسئلة المتكررة لمساعدتك في اتخاذ القرار المناسب.",
    "index.faq.a8": "نوفر إجابات واضحة وسريعة على الأسئلة المتكررة لمساعدتك في اتخاذ القرار المناسب.",
    "index.faq.a9": "نوفر إجابات واضحة وسريعة على الأسئلة المتكررة لمساعدتك في اتخاذ القرار المناسب.",
    "index.faq.a10": "نوفر إجابات واضحة وسريعة على الأسئلة المتكررة لمساعدتك في اتخاذ القرار المناسب.",
    "index.strategy.cultureTitle": "ثقافة الشركة",
    "index.strategy.cultureText": "تسعى شركة تاي-إن إلى التحديث المستمر ومتابعة أحدث التقنيات في مختلف المجالات، وبناء جسور تعاون فعالة بين شركائنا المحليين والمصنعين العالميين.",
    "index.strategy.visionTitle": "رؤية الشركة",
    "index.strategy.visionText": "نسعى لأن نكون من الشركات الرائدة في المقاولات الكهروميكانيكية والميكانيكية والكهربائية عبر جودة عالية وتقنيات حديثة وسمعة قائمة على الثقة والتميز.",
    "index.strategy.valuesTitle": "قيم الشركة",
    "index.strategy.valuesText": "نلتزم بالنزاهة والشفافية والجودة والعمل بروح الفريق والابتكار المستمر لتقديم أفضل الحلول لعملائنا.",
    "index.strategy.goalsTitle": "أهداف الشركة",
    "index.strategy.goalsText": "التوسع في السوق وتحقيق أعلى مستوى من رضا العملاء.",
    "index.backToWorks": "العودة إلى بقية الأعمال",
    "portfolio.heroKicker": "مشاريعنا",
    "portfolio.heroTitle": "سابقة أعمال الشركة",
    "portfolio.heroText": "معرض مختار من مشاريعنا المنفذة في المقاولات والتوريدات وفق معايير جودة وسلامة عالية.",
    "portfolio.filterAll": "الكل",
    "portfolio.filterElectrical": "أعمال كهربائية",
    "portfolio.filterTesting": "اختبارات",
    "portfolio.filterSupply": "توريدات",
    "portfolio.filterMechanical": "أعمال ميكانيكية",
    "portfolio.item1.title": "الشركة العربية لأنابيب البترول سوميد",
    "portfolio.item1.desc": "توريد وتركيب خط حريق - تنفيذ متكامل.",
    "portfolio.item2.title": "شركة غرب الدلتا لإنتاج الكهرباء",
    "portfolio.item2.desc": "توريد فلاتر هواء وبويات ولوازم منظمات الهواء.",
    "portfolio.item3.title": "شركة البتروكيماويات المصرية",
    "portfolio.item3.desc": "توريد فلاتر تشغيل وفق المواصفات.",
    "portfolio.item4.title": "اختبارات المحولات DGA",
    "portfolio.item4.desc": "تحليل الغازات الذائبة بزيت المحولات مع تقارير فنية.",
    "portfolio.item5.title": "اختبار عزل كابلات الجهد المتوسط",
    "portfolio.item5.desc": "اختبار Hipot حتى 45 ك.ف لضمان كفاءة الشبكات.",
    "portfolio.item6.title": "قياس مقاومة الأرض والتفريغ الجزئي",
    "portfolio.item6.desc": "رفع كفاءة التأريض وتقليل مخاطر التشغيل.",
    "portfolio.item7.title": "تحديد أعطال الكابلات",
    "portfolio.item7.desc": "تحديد مواقع الأعطال بدقة وسرعة.",
    "portfolio.item8.title": "قياس جهد الكسر",
    "portfolio.item8.desc": "اختبار جودة الزيوت العازلة وموثوقية العزل.",
    "portfolio.backHome": "العودة إلى الرئيسية",
    "about.heroKicker": "من نحن",
    "about.heroTitle": "نبني الثقة قبل أن نبني المشاريع",
    "about.heroText": "نعمل وفق رؤية واضحة تجمع بين الخبرة الفنية والانضباط التنفيذي لضمان نتائج عالية الجودة.",
    "about.achievements": "إنجازاتنا",
    "about.achievementsText": "حققنا نتائج متميزة من خلال تنفيذ مشاريع متنوعة بكفاءة عالية، وتعزيز الإنتاجية التشغيلية، وتوسيع نطاق خدماتنا، بما يدعم نمو الشركة واستدامتها.",
    "about.stats.projects": "مشروعات",
    "about.stats.clients": "عميل",
    "about.stats.certificates": "شهادة",
    "about.team": "فريق العمل",
    "about.team.role": "خبير متخصص",
    "courses.heroKicker": "أعمالنا فى",
    "courses.heroTitle": "الاختبارات الكهربائية",
    "courses.heroText": "تتمتع شركتنا بخبرة واسعة في تنفيذ الاختبارات الكهربائية وفق أعلى المعايير الفنية، حيث نقدم خدمات متخصصة تشمل: تحليل الغازات الذائبة بزيت المحولات (DGA) وتقديم التوصيات الفنية، قياس جهد الكسر، اختبار التفريغ الجزئي داخل خلايا الجهد المتوسط، وتحديد أعطال الكابلات بدقة عالية. كما نُجري اختبارات عزل كابلات الجهد المتوسط باستخدام جهاز Hipot حتى 45 ك.ف، بالإضافة إلى قياس مقاومة الأرض ورفع كفاءة منظومة التأريض وشبكات موانع الصواعق.",
    "courses.item1.title": "تحليل الغازات الذائبة بزيت المحولات (DGA)",
    "courses.item2.title": "قياس جهد الكسر",
    "courses.item3.title": "اختبار العزل لكابلات الجهد المتوسط (Hipot Test)",
    "courses.item4.title": "قياس مقاومة الأرض والتفريغ الجزئي",
    "courses.item5.title": "تحديد أعطال الكابلات",
    "courses.item6.title": "توريد وتنفيذ لوحات التوزيع (ABB)",
    "courses.backBtn": "العودة إلى بقية الأعمال",
    "electrical.heroKicker": "أعمالنا فى",
    "electrical.heroTitle": "الاعمال الكهربائية",
    "electrical.heroText": "تمتلك شركتنا خبرة راسخة في تنفيذ وتوريد الأعمال الكهربائية بمختلف أنواعها، حيث نوفر منتجات من علامات عالمية مثل WAROM، EATON، وPhilips، بالإضافة إلى توريد وتركيب لوحات التوزيع الكهربائية من ABB حسب متطلبات العميل. نُنفذ أنظمة الحماية من الحريق، وبرامج الصيانة الوقائية للمحطات والمحولات الكهربائية، وصيانة المحركات بمختلف قدراتها (PM وCM). كما نختص بتوريد قطع غيار الشيلرات وأنظمة التكييف المركزي مع تنفيذ برامج صيانتها، إلى جانب إنشاء أنظمة التأريض وموانع الصواعق، وتوريد السخانات الصناعية والمواتير والطلمبات مع تقديم خدمات الصيانة ولف المواتير.",
    "electrical.item1.title": "أنظمة الحماية من الحريق",
    "electrical.item2.title": "أنواع المولدات الكهربائية وقطع غيار المولدات",
    "electrical.item3.title": "برامج الصيانة الوقائية للمحطات والمحولات",
    "electrical.item4.title": "الكشافات",
    "electrical.item5.title": "الكابلات الكهربائية",
    "electrical.item6.title": "توريد وتنفيذ لوحات التوزيع (ABB)",
    "electrical.item7.title": "التأريض وموانع الصواعق",
    "electrical.item8.title": "لف وصيانة المواتير والطلمبات",
    "electrical.item9.title": "جميع أنواع السخانات الصناعية",
    "electrical.item10.title": "توريد أجهزة من شركات عالمية",
    "electrical.backBtn": "العودة إلى بقية الأعمال",
    "mechanical.heroKicker": "أعمالنا فى",
    "mechanical.heroTitle": "الاعمال الميكانيكية",
    "mechanical.heroText": "تتميز شركتنا بخبرة شاملة في تنفيذ الأعمال الميكانيكية المتكاملة، بدءًا من توريد وتنفيذ أنظمة الإطفاء ومهمات الأمن الصناعي، مرورًا بكافة التوريدات الميكانيكية من طلمبات وبلوف وأجهزة قياس، وصولًا إلى تمديدات خطوط المواسير والخزانات بمختلف أنواعها. نُقدم خدمات الصيانة الوقائية والعلاجية للغلايات، وننفذ أعمال العزل الحراري لخطوط البخار والمياه والخزانات والمبادلات الحرارية. كما نختص بأعمال الدهانات الصناعية، وتوريد وتنفيذ منتجات الفيبر جلاس (GRP) من خزانات وأعمدة ومشايات، إلى جانب تنفيذ أعمال وحدات المناولة والدكتات وأنظمة التهوية والفلترة بكفاءة عالية تلبي متطلبات المشاريع الصناعية المختلفة.",
    "mechanical.item1.title": "جميع التوريدات الميكانيكية",
    "mechanical.item1.text": "جميع اﻟﺘورﻳدات اﻟﻤﻴﻜﺎنيكية (جميع الطلمبات - بلوف - عدادات - ﻟوازم السلومنت - جميع قطع الغيار).",
    "mechanical.item2.title": "أعمال الاستيل وتمديدات المواسير والخزانات",
    "mechanical.item2.text": "جميع توريدات الحديد الاستيل والصاج ولوازم المصانع.",
    "mechanical.item3.title": "تمديدات المواسير والخزانات",
    "mechanical.item3.text": "جميع توريدات المواسير (صلب واستانلس ولوازمها) والخزانات شاملة جميع اللوازم.",
    "mechanical.item4.title": "أعمال GRP (فيبر جلاس)",
    "mechanical.item4.text": "ﺗورﻳد ﺟﻤﻴﻊ أﻋﻤﺎل الفيبر جلاس GRP (خزانات - أعمدة إنارة - مواسير - بنيلات - صناديق حريق - ألواح معرج - ألواح شكربليت - مشايات) والتركيب حسب احتياجات العميل.",
    "mechanical.item5.title": "أعمال التكييف المركزي والدكتات والفتحات والفلاتر",
    "mechanical.item5.text": "توريد جميع أعمال وحدات المناولة والدكتات وفتحات التهوية والفلاتر (والتركيب حسب احتياجات العميل).",
    "mechanical.item6.title": "أنظمة الإطفاء ومهمات الأمن الصناعي",
    "mechanical.item6.text": "ﺗﻮرﻳد أنظمة إطفاء وإنذار الحريق اﻟﻤﺨﺘﻠﻔﺔ بجميع ملحقاتها ومهمات الأمن الصناعي.",
    "mechanical.item7.title": "الدهانات",
    "mechanical.item7.text": "توريد جميع الدهانات وتنفيذ أعمال الدهانات حسب احتياجات العميل.",
    "mechanical.item8.title": "أعمال السباكة",
    "mechanical.item8.text": "توريد جميع أعمال السباكة.",
    "mechanical.item9.title": "العزل الحراري",
    "mechanical.item9.text": "توريد جميع أنواع العزل الحراري الساخن والبارد (للغلايات - المبادلات الحرارية - خطوط البخار - خطوط المياه الساخنة - الخزانات - وخطوط التبريد).",
    "mechanical.backBtn": "العودة إلى بقية الأعمال",
    "contact.heroKicker": "تواصل معنا",
    "contact.heroTitle": "جاهزون للرد على استفساراتك",
    "contact.heroText": "يمكنك التواصل مع فريقنا في أي وقت للحصول على دعم سريع ومعلومات تفصيلية عن خدماتنا.",
    "contact.asideTitle": "تواصل معنا",
    "contact.asideText": "والأفضل من ذلك، رؤيتنا شخصيا!",
    "contact.executives": "الإدارة التنفيذية",
    "contact.whatsappTitle": "تواصل معنا عبر WhatsApp",
    "contact.whatsappText": "لا تتردد في التواصل معنا مباشرة عبر الواتس آب للحصول على إجابات سريعة",
    "contact.whatsappBtn": "افتح WhatsApp",
    "contact.hoursTitle": "ساعات العمل",
    "contact.hoursText": "نحن هنا لخدمتك خلال ساعات العمل التالية",
    "contact.exec1.title": "المدير التنفيذي",
    "contact.exec1.role": "المدير التنفيذي",
    "contact.exec2.title": "المدير العام",
    "contact.exec2.role": "المدير العام",
    "contact.hours.days1": "الأحد - الخميس",
    "contact.hours.days2": "الجمعة",
    "contact.hours.days3": "السبت",
    "contact.hours.closed": "مغلق",
    "contact.firstName": "الاسم الأول",
    "contact.lastName": "اسم العائلة",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "اكتب رسالتك هنا",
    "contact.send": "إرسال الرسالة",
    "contact.sending": "جارٍ الإرسال...",
    "contact.required": "يرجى ملء جميع الحقول المطلوبة",
    "contact.invalidEmail": "يرجى إدخال بريد إلكتروني صحيح",
    "contact.success": "تم إرسال رسالتك بنجاح",
    "contact.error": "تعذر إرسال الرسالة حالياً. يرجى المحاولة مرة أخرى بعد قليل.",
    "footer.quickLinks": "روابط سريعة",
    "footer.companyText": "شركتنا تقدم خدمات متكاملة في المقاولات والتوريدات بمعايير جودة وسلامة عالية.",
    "footer.policies": "السياسات",
    "footer.contact": "تواصل معنا",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "الشروط والأحكام",
    "footer.refund": "سياسة الاسترجاع",
    "footer.copyright": "جميع الحقوق محفوظة © شركة تاي-إن"
  },
  en: {
    "brand.name": "Tie-In",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.works": "Our Work",
    "nav.contact": "Contact",
    "lang.switchAria": "Switch language",
    "index.title": "Tie-In Contracting & Supplies",
    "about.title": "About Us | Tie-In",
    "courses.title": "Our Work | Tie-In",
    "ourWork.title": "Our Work | Tie-In",
    "ourWork.heroText": "All company work fields are presented in one page: electrical testing, electrical works, and mechanical works.",
    "sumedProject.title": "SUMED Project | Tie-In",
    "partners.title": "Our Partners | Tie-In",
    "electrical.title": "Our Work | Tie-In",
    "mechanical.title": "Our Work | Tie-In",
    "portfolio.title": "Portfolio | Tie-In",
    "contact.title": "Contact Us | Tie-In",
    "hero.main": "Building the future and turning your vision into reality",
    "hero.mainText": "At Tie-In, we deliver integrated contracting and supply services through strong technical expertise and a specialized team. We execute high-quality projects with strict standards of accuracy and safety to ensure client satisfaction and professional outcomes.",
    "hero.mainCta": "Learn more about us",
    "common.learnMore": "Learn more",
    "index.aboutCompany": "About the Company",
    "index.aboutCompanyText": "Tie-In is a leading company specialized in contracting and supplies, headquartered in Alexandria. It has built a strong legal and professional presence in the Egyptian market through technical expertise, skilled teams, and consistent delivery quality.",
    "index.contactUsBtn": "Contact us",
    "index.currentPartners": "Current Partner Companies",
    "index.viewMoreProjects": "View More",
    "index.morePartnersTitle": "More Partner Companies",
    "index.serviceFields": "Company Working Fields",
    "index.portfolioBtn": "Portfolio",
    "index.aboutUsBlock": "Get to know us",
    "index.whyChooseUsKicker": "Why Tie-In",
    "index.whyChooseUsTitle": "Why Choose Us",
    "index.whyChooseUsText": "We deliver real operational value through technical strength, disciplined execution, and strong partnerships that create reliable, sustainable results for our clients.",
    "index.whyChooseUsPoint1": "We have highly trained technical teams with proven competence and experience",
    "index.whyChooseUsPoint2": "We are committed to quality systems, safety standards, and environmental protection",
    "index.whyChooseUsPoint3": "We keep pace with the latest global technologies in the industrial field",
    "index.whyChooseUsPoint4": "We maintain strong relationships with leading global brands",
    "index.faqTitle": "Frequently Asked Questions",
    "index.strategyTitle": "Company Strategy",
    "index.aboutBlockKicker": "Advanced technology and deep expertise",
    "index.aboutBlockText": "Tie-In specializes in supply and installation works including electrical systems, cables, lighting, piping networks and accessories, welding, thermal insulation, painting, and all pump types, delivered by highly trained professionals. We are committed to quality, occupational safety, environmental protection, and sustainable development under internationally aligned management systems.",
    "index.cat.companyName": "Company Name",
    "index.cat.companyNameText": "Tie-In Contracting & Supplies",
    "index.cat.specialty": "Specialty",
    "index.cat.specialtyText": "Electromechanical, mechanical, and electrical contracting works",
    "index.cat.location": "Location",
    "index.cat.locationText": "Alexandria, Egypt",
    "index.cat.cert1": "Certified & Licensed",
    "index.cat.cert1Text": "Quality - ISO 9001:2015",
    "index.cat.cert2": "Certified & Licensed",
    "index.cat.cert2Text": "Environment - ISO 14001:2015",
    "index.cat.cert3": "Certified & Licensed",
    "index.cat.cert3Text": "Occupational Health & Safety - ISO 45001:2018",
    "index.project1.title": "SUMED Arab Petroleum Pipelines Co.",
    "index.project1.text": "March 15, 2026 - Fire line supply and installation",
    "sumedProject.heroKicker": "Project Details",
    "sumedProject.heroTitle": "SUMED Arab Petroleum Pipelines Co.",
    "sumedProject.heroText": "A quick overview of the supply scope delivered for this project.",
    "sumedProject.detailsTitle": "Work Description",
    "sumedProject.detail1": "Supply of paints and accessories",
    "sumedProject.detail2": "Air regulators",
    "sumedProject.logoAlt": "SUMED company logo",
    "sumedProject.backBtn": "Back to home page",
    "gharbDeltaProject.title": "West Delta Project | Tie-In",
    "gharbDeltaProject.heroKicker": "Project Details",
    "gharbDeltaProject.heroTitle": "West Delta Electricity Production Company",
    "gharbDeltaProject.heroText": "A quick overview of the supply scope delivered for this project.",
    "gharbDeltaProject.detailsTitle": "Work Description",
    "gharbDeltaProject.detail1": "Air filters",
    "gharbDeltaProject.detail2": "Paints and accessories",
    "gharbDeltaProject.detail3": "Air regulators",
    "gharbDeltaProject.logoAlt": "West Delta Electricity Production Company logo",
    "gharbDeltaProject.backBtn": "Back to home page",
    "petrochemProject.title": "Petrochemicals Project | Tie-In",
    "petrochemProject.heroKicker": "Project Details",
    "petrochemProject.heroTitle": "Egyptian Petrochemicals Company",
    "petrochemProject.heroText": "A quick overview of the supply scope delivered for this project.",
    "petrochemProject.detailsTitle": "Work Description",
    "petrochemProject.detail1": "Supply of operational filters per specifications",
    "petrochemProject.detail2": "Supply of a flammable gas analyzer",
    "petrochemProject.logoAlt": "Egyptian Petrochemicals Company logo",
    "petrochemProject.backBtn": "Back to home page",
    "alexWaterProject.title": "Drinking Water Project | Tie-In",
    "alexWaterProject.heroKicker": "Project Details",
    "alexWaterProject.heroTitle": "Alexandria Drinking Water Company",
    "alexWaterProject.heroText": "A quick overview of the maintenance and supply scope delivered for this project.",
    "alexWaterProject.detailsTitle": "Work Description",
    "alexWaterProject.detail1": "Repair of 55 kV electric motors",
    "alexWaterProject.detail2": "Rewinding of 220 kV electric motors",
    "alexWaterProject.logoAlt": "Alexandria Drinking Water Company logo",
    "alexWaterProject.backBtn": "Back to partners page",
    "alexWestProject.title": "Alex West Project | Tie-In",
    "alexWestProject.heroKicker": "Project Details",
    "alexWestProject.heroTitle": "Alex West Company",
    "alexWestProject.heroText": "A quick overview of the supply and maintenance scope delivered for this project.",
    "alexWestProject.detailsTitle": "Work Description",
    "alexWestProject.detail1": "Supply of transformer spare parts",
    "alexWestProject.detail2": "Periodic transformer maintenance",
    "alexWestProject.logoAlt": "Alex West Company logo",
    "alexWestProject.backBtn": "Back to partners page",
    "index.project2.title": "West Delta Electricity Production Company",
    "index.project2.text": "April 15, 2025 - Air filters, paints, and regulator accessories",
    "index.project3.title": "Egyptian Petrochemicals Company",
    "index.project3.text": "April 15, 2025 - Filters",
    "index.project4.title": "Alexandria Drinking Water Company",
    "index.project4.text": "April 15, 2025 - Repair and rewinding of 55 kV electric motors",
    "index.project5.title": "Alex West Company",
    "index.project5.text": "April 15, 2025 - Spare parts supply and transformer maintenance",
    "index.service1.title": "Electrical Testing",
    "index.service1.text": "Comprehensive inspection and precise electrical system testing",
    "index.service2.title": "Electrical Works",
    "index.service2.text": "Execution and installation of electrical systems to top standards",
    "index.service3.title": "Mechanical Works",
    "index.service3.text": "Specialized mechanical services and high-quality supplies",
    "index.card1.title": "Who we are",
    "index.card1.text": "Tie-In Contracting & Supplies",
    "index.card2.title": "Specialization",
    "index.card2.text": "We provide innovative and integrated solutions for contracting and supply projects",
    "index.card3.title": "Location",
    "index.card3.text": "Alexandria, Egypt",
    "index.card4.title": "Certified & Licensed",
    "index.card4.text": "Quality ISO 9001:2015",
    "index.card5.title": "Certified & Licensed",
    "index.card5.text": "Environment ISO 14001:2015",
    "index.card6.title": "Certified & Licensed",
    "index.card6.text": "Occupational Health & Safety ISO 45001:2018",
    "index.faq.q1": "How do I choose the right service?",
    "index.faq.q2": "How do I choose the right service?",
    "index.faq.q3": "How do I choose the right service?",
    "index.faq.q4": "How do I choose the right service?",
    "index.faq.q5": "How do I choose the right service?",
    "index.faq.q6": "How do I choose the right service?",
    "index.faq.q7": "How do I choose the right service?",
    "index.faq.q8": "How do I choose the right service?",
    "index.faq.q9": "How do I choose the right service?",
    "index.faq.q10": "How do I choose the right service?",
    "index.faq.a1": "Our FAQs provide quick and clear answers to common questions to help you decide faster.",
    "index.faq.a2": "Our FAQs provide quick and clear answers to common questions to help you decide faster.",
    "index.faq.a3": "Our FAQs provide quick and clear answers to common questions to help you decide faster.",
    "index.faq.a4": "Our FAQs provide quick and clear answers to common questions to help you decide faster.",
    "index.faq.a5": "Our FAQs provide quick and clear answers to common questions to help you decide faster.",
    "index.faq.a6": "Our FAQs provide quick and clear answers to common questions to help you decide faster.",
    "index.faq.a7": "Our FAQs provide quick and clear answers to common questions to help you decide faster.",
    "index.faq.a8": "Our FAQs provide quick and clear answers to common questions to help you decide faster.",
    "index.faq.a9": "Our FAQs provide quick and clear answers to common questions to help you decide faster.",
    "index.faq.a10": "Our FAQs provide quick and clear answers to common questions to help you decide faster.",
    "index.strategy.cultureTitle": "Company Culture",
    "index.strategy.cultureText": "Tie-In continuously updates its capabilities and follows the latest industry technologies while building strong links between local partners and global manufacturers.",
    "index.strategy.visionTitle": "Company Vision",
    "index.strategy.visionText": "To become a leading company in electromechanical, mechanical, and electrical contracting through quality, innovation, and trusted execution.",
    "index.strategy.valuesTitle": "Company Values",
    "index.strategy.valuesText": "We commit to integrity, transparency, quality, teamwork, and continuous innovation to deliver the best solutions to our clients.",
    "index.strategy.goalsTitle": "Company Goals",
    "index.strategy.goalsText": "Market expansion and achieving high client satisfaction.",
    "index.backToWorks": "Back to other work",
    "portfolio.heroKicker": "Portfolio",
    "portfolio.heroTitle": "Our Portfolio",
    "portfolio.heroText": "A curated gallery of our delivered contracting and supply projects with high standards of quality and safety.",
    "portfolio.filterAll": "All",
    "portfolio.filterElectrical": "Electrical",
    "portfolio.filterTesting": "Testing",
    "portfolio.filterSupply": "Supplies",
    "portfolio.filterMechanical": "Mechanical",
    "portfolio.item1.title": "SUMED Arab Petroleum Pipelines Co.",
    "portfolio.item1.desc": "Fire line supply and installation - integrated delivery.",
    "portfolio.item2.title": "West Delta Electricity Production Company",
    "portfolio.item2.desc": "Air filters, paints, and regulator accessories supply.",
    "portfolio.item3.title": "Egyptian Petrochemicals Company",
    "portfolio.item3.desc": "Operational filters supply based on project specs.",
    "portfolio.item4.title": "Transformer DGA Testing",
    "portfolio.item4.desc": "Dissolved gas analysis in transformer oil with technical reporting.",
    "portfolio.item5.title": "Medium-Voltage Cable Insulation Test",
    "portfolio.item5.desc": "Hipot testing up to 45 kV for network reliability.",
    "portfolio.item6.title": "Earth Resistance and Partial Discharge",
    "portfolio.item6.desc": "Grounding performance enhancement and risk reduction.",
    "portfolio.item7.title": "Cable Fault Location",
    "portfolio.item7.desc": "Accurate and fast cable fault pinpointing.",
    "portfolio.item8.title": "Breakdown Voltage Measurement",
    "portfolio.item8.desc": "Insulating oil quality and reliability validation.",
    "portfolio.backHome": "Back to Home",
    "about.heroKicker": "About Us",
    "about.heroTitle": "We build trust before we build projects",
    "about.heroText": "We work with a clear vision that combines technical expertise and execution discipline to ensure high-quality results.",
    "about.achievements": "Our Achievements",
    "about.achievementsText": "We have delivered strong outcomes through diverse projects, operational efficiency improvements, and service expansion that support sustainable company growth.",
    "about.stats.projects": "Projects",
    "about.stats.clients": "Clients",
    "about.stats.certificates": "Certificates",
    "about.team": "Our Team",
    "about.team.role": "Expert Tutor",
    "courses.heroKicker": "Our Work In",
    "courses.heroTitle": "Electrical Testing",
    "courses.heroText": "Our company has broad experience in electrical testing according to the highest technical standards, including dissolved gas analysis (DGA), breakdown voltage testing, partial discharge testing in medium-voltage cells, and accurate cable fault location, in addition to medium-voltage cable insulation testing using Hipot up to 45 kV and earth resistance measurement with grounding optimization.",
    "courses.item1.title": "Dissolved Gas Analysis in Transformer Oil (DGA)",
    "courses.item2.title": "Breakdown Voltage Measurement",
    "courses.item3.title": "Medium-Voltage Cable Insulation Test (Hipot Test)",
    "courses.item4.title": "Earth Resistance & Partial Discharge Measurement",
    "courses.item5.title": "Cable Fault Location",
    "courses.item6.title": "Supply and Installation of Distribution Panels (ABB)",
    "courses.backBtn": "Back to other services",
    "electrical.heroKicker": "Our Work In",
    "electrical.heroTitle": "Electrical Works",
    "electrical.heroText": "Our company has solid expertise in executing and supplying electrical works of all types. We provide products from global brands such as WAROM, EATON, and Philips, in addition to supplying and installing ABB distribution panels based on client requirements. We execute fire protection systems, preventive maintenance programs for stations and transformers, and motor maintenance with different capacities (PM and CM). We also specialize in supplying chiller spare parts and central air-conditioning systems with maintenance programs, along with grounding and lightning protection systems, and the supply of industrial heaters, motors, and pumps with maintenance and motor rewinding services.",
    "electrical.item1.title": "Fire Protection Systems",
    "electrical.item2.title": "Generator Types and Spare Parts",
    "electrical.item3.title": "Preventive Maintenance Programs for Stations and Transformers",
    "electrical.item4.title": "Floodlights",
    "electrical.item5.title": "Electrical Cables",
    "electrical.item6.title": "Supply and Installation of Distribution Panels (ABB)",
    "electrical.item7.title": "Grounding and Lightning Protection Systems",
    "electrical.item8.title": "Motor and Pump Winding and Maintenance",
    "electrical.item9.title": "All Types of Industrial Heaters",
    "electrical.item10.title": "Supply of Equipment from International Companies",
    "electrical.backBtn": "Back to other works",
    "mechanical.heroKicker": "Our Work In",
    "mechanical.heroTitle": "Mechanical Works",
    "mechanical.heroText": "At Tie-In, we provide integrated mechanical solutions including supply, installation, and maintenance with high standards of quality and safety to ensure reliable and sustainable operation.",
    "mechanical.item1.title": "General Mechanical Supplies",
    "mechanical.item1.text": "All mechanical supplies (all pumps, valves, meters, instrument accessories, and all spare parts).",
    "mechanical.item2.title": "Steel Works and Piping Extensions",
    "mechanical.item2.text": "Supply of stainless steel, sheet metal, and factory accessories.",
    "mechanical.item3.title": "Piping and Tank Extensions",
    "mechanical.item3.text": "Supply of all piping systems (carbon steel and stainless steel) with accessories, plus complete tank supplies.",
    "mechanical.item4.title": "GRP (Fiberglass) Works",
    "mechanical.item4.text": "Supply of all GRP fiberglass works (tanks, lighting poles, pipes, panels, fire boxes, chequered plates, walkways) with installation as required.",
    "mechanical.item5.title": "Central HVAC, Ducts, Grilles, and Filters",
    "mechanical.item5.text": "Supply of all air handling units, ductwork, ventilation outlets, and filters (with installation per client requirements).",
    "mechanical.item6.title": "Firefighting and Industrial Safety Equipment",
    "mechanical.item6.text": "Supply of firefighting and fire alarm systems with all accessories and industrial safety equipment.",
    "mechanical.item7.title": "Painting",
    "mechanical.item7.text": "Supply of all paint materials and execution of painting works according to client requirements.",
    "mechanical.item8.title": "Plumbing Works",
    "mechanical.item8.text": "Supply of all plumbing works.",
    "mechanical.item9.title": "Thermal Insulation",
    "mechanical.item9.text": "Supply of all hot and cold thermal insulation types for boilers, heat exchangers, steam lines, hot water lines, tanks, and cooling lines.",
    "mechanical.backBtn": "Back to other works",
    "contact.heroKicker": "Contact Us",
    "contact.heroTitle": "Ready to answer your inquiries",
    "contact.heroText": "You can reach our team anytime for fast support and detailed information about our services.",
    "contact.asideTitle": "Contact Us",
    "contact.asideText": "Better yet, see us in person!",
    "contact.executives": "Executive Management",
    "contact.whatsappTitle": "Contact us via WhatsApp",
    "contact.whatsappText": "Feel free to contact us directly on WhatsApp for quick answers",
    "contact.whatsappBtn": "Open WhatsApp",
    "contact.hoursTitle": "Working Hours",
    "contact.hoursText": "We are here to serve you during the following hours",
    "contact.exec1.title": "Executive Director",
    "contact.exec1.role": "Executive Director",
    "contact.exec2.title": "General Manager",
    "contact.exec2.role": "General Manager",
    "contact.hours.days1": "Sunday - Thursday",
    "contact.hours.days2": "Friday",
    "contact.hours.days3": "Saturday",
    "contact.hours.closed": "Closed",
    "contact.firstName": "First name",
    "contact.lastName": "Last name",
    "contact.email": "Email address",
    "contact.message": "Type your message here",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.required": "Please fill in all required fields",
    "contact.invalidEmail": "Please enter a valid email address",
    "contact.success": "Your message was sent successfully",
    "contact.error": "Message could not be sent right now. Please try again shortly.",
    "footer.quickLinks": "Quick Links",
    "footer.companyText": "Our company provides integrated contracting and supply services with high standards of quality and safety.",
    "footer.policies": "Policies",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.refund": "Refund Policy",
    "footer.copyright": "All rights reserved © Tie-In"
  }
};

function getSavedLanguage() {
  const saved = localStorage.getItem("siteLanguage");
  if (saved === "ar" || saved === "en") return saved;
  return "ar";
}

function applyLanguage(lang) {
  const safeLang = lang === "en" ? "en" : "ar";
  const dict = I18N[safeLang];

  document.documentElement.lang = safeLang;
  document.documentElement.dir = safeLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.textContent = safeLang === "ar" ? "EN" : "AR";
    toggle.setAttribute("aria-label", dict["lang.switchAria"]);
  }

  const pageKey = document.body.getAttribute("data-page-title");
  if (pageKey && dict[pageKey]) {
    document.title = dict[pageKey];
  }

  localStorage.setItem("siteLanguage", safeLang);
  window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: safeLang } }));
}

function initLanguageToggle() {
  const toggle = document.getElementById("lang-toggle");
  const initial = getSavedLanguage();
  applyLanguage(initial);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = document.documentElement.lang === "ar" ? "en" : "ar";
      applyLanguage(next);
    });
  }
}

window.getCurrentLanguage = function () {
  return document.documentElement.lang === "en" ? "en" : "ar";
};

window.getI18nText = function (key) {
  const lang = window.getCurrentLanguage();
  return (I18N[lang] && I18N[lang][key]) || key;
};

function optimizeImageLoading() {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    if (!img.hasAttribute("decoding")) {
      img.setAttribute("decoding", "async");
    }

    if (!img.hasAttribute("loading")) {
      const isCritical = Boolean(img.closest("nav")) || img.classList.contains("header-svg");
      img.setAttribute("loading", isCritical ? "eager" : "lazy");
    }
  });
}

optimizeImageLoading();

initLanguageToggle();

// show hide faq answer

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "ri-add-large-line") {
      icon.className = "ri-close-large-line";
    } else {
      icon.className = "ri-add-large-line";
    }
  });
});

// show / hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

if (menu && menuBtn && closeBtn) {
  menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  });

  const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  };

  closeBtn.addEventListener("click", closeNav);
}

const whyChooseUsSection = document.querySelector(".why-choose-us-section");

if (whyChooseUsSection) {
  if ("IntersectionObserver" in window) {
    const whyChooseUsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    whyChooseUsObserver.observe(whyChooseUsSection);
  } else {
    whyChooseUsSection.classList.add("is-visible");
  }
}

function initScrollReveal() {
  const revealTargets = Array.from(document.querySelectorAll("main, section, footer"))
    .filter((el) => !el.classList.contains("why-choose-us-section"));

  if (!revealTargets.length) return;

  revealTargets.forEach((el) => {
    el.classList.add("reveal-on-scroll");

    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.9) {
      el.classList.add("is-visible");
    }
  });

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((el) => {
    if (!el.classList.contains("is-visible")) {
      revealObserver.observe(el);
    }
  });
}

initScrollReveal();
