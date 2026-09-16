export type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  checklist?: string[];
  conclusion: string;
};

type Locale = "en" | "zh" | "ru";
type BlogArticleTranslation = Partial<Pick<BlogArticle, "category" | "title" | "description" | "readTime" | "intro" | "sections" | "checklist" | "conclusion">>;

const blogCategoryLabels: Record<Locale, Record<string, string>> = {
  en: {
    全部资源: "All Resources",
    照明指南: "Lighting Guide",
    产品知识: "Product Knowledge",
    项目洞察: "Project Insights",
    安装指南: "Installation Guide",
    照明知识: "Lighting Knowledge",
  },
  zh: {},
  ru: {
    全部资源: "Все материалы",
    照明指南: "Руководство по свету",
    产品知识: "Знания о продукции",
    项目洞察: "Проектные материалы",
    安装指南: "Руководство по монтажу",
    照明知识: "Знания об освещении",
  },
};

const blogTranslations: Record<string, Partial<Record<Locale, BlogArticleTranslation>>> = {
  "choose-wall-washer-linear-lighting": {
    en: {
      category: "Lighting Guide",
      title: "How to Choose Wall Washers and Linear Lights for Facade Projects",
      description: "A practical selection guide covering beam angle, setback distance, optical control and engineering use.",
      readTime: "6 min read",
      intro:
        "Facade lighting is not simply placing luminaires beside a wall. It is about expressing the building outline, material texture, window rhythm and night-time identity with control. Wall washers and linear lights are both common in facade projects, but they play different roles: wall washers create continuous surface illumination, while linear lights define edges, outlines and architectural rhythm.",
      sections: [
        {
          heading: "1. Start with the visual intent",
          body: [
            "If the target is to brighten a wall evenly and reveal stone, aluminum, glass or structural texture, wall washers are usually the first option. The key issues are beam continuity, throw height, wall uniformity and glare control.",
            "If the target is to emphasize rooflines, vertical lines, window frames or the building silhouette, linear lights are more suitable. Their value is clean linear installation and a clear visual order that makes the building recognizable from a distance.",
          ],
        },
        {
          heading: "2. For wall washers, evaluate beam angle and setback",
          body: [
            "Beam angle should not be judged by the datasheet alone. Narrow beams suit higher throw distances and vertical emphasis; wider beams suit closer installation and softer coverage. Setback distance, wall height and surface reflectance all affect the final result.",
            "If the luminaire is too close to the wall, visible hot spots or over-bright bands may appear. If it is too far away, the wall may lose brightness and edge definition. Confirm the installation position first, then select wattage, angle and length.",
          ],
        },
        {
          heading: "3. For linear lights, focus on light output and continuity",
          body: [
            "Linear lights are widely used on outlines, coves, window sills, eaves and corners. Selection should consider body section, diffuser material, jointing method and end treatment. A good linear light is not only bright; it should look continuous, clean and free from obvious breaks.",
            "For close-viewing areas, LED pixel visibility, diffuser uniformity and shielding matter. For distant outlines, stable brightness, CCT consistency and waterproof reliability are more important.",
          ],
        },
        {
          heading: "4. CCT and control must match the building positioning",
          body: [
            "Commercial complexes, hotels and office buildings usually work better with warm white or neutral white light, which supports a premium and comfortable image. Landmarks or festival scenes may use RGB, RGBW or dynamic control, but movement should serve the architecture instead of overwhelming it.",
            "Within one project, wall washers and linear lights should share a planned color temperature, brightness hierarchy and control logic. Otherwise the facade can quickly become visually noisy.",
          ],
        },
      ],
      checklist: [
        "Define the facade goal: wall washing, outline drawing or accent lighting.",
        "Confirm setback, wall height, surface material and maintenance access.",
        "Evaluate beam angle, uniformity, anti-glare design and waterproof structure for wall washers.",
        "Evaluate continuity, joint quality, CCT consistency and installation method for linear lights.",
        "Run a mock-up or simulation before final procurement whenever possible.",
      ],
      conclusion:
        "Wall washers and linear lights are not substitutes for each other. They build different layers of facade lighting. A strong solution often uses wall washers for surfaces, linear lights for lines, and point or projector lights for accents. The earlier product selection is tied to installation conditions and final effect, the fewer reworks and visual deviations will occur later.",
    },
    ru: {
      category: "Руководство по свету",
      title: "Как выбирать wall washer и линейные светильники для фасадных проектов",
      description: "Практический разбор угла света, расстояния установки, оптического контроля и инженерного подбора.",
      readTime: "6 мин чтения",
      intro:
        "Фасадное освещение не сводится к установке светильников у стены. Оно должно точно раскрывать контур здания, фактуру материала, ритм окон и ночную идентичность. Wall washer и линейные светильники часто используются вместе, но решают разные задачи: первые формируют равномерную световую плоскость, вторые подчеркивают контуры, границы и линейный ритм.",
      sections: [
        {
          heading: "1. Сначала определите визуальную задачу",
          body: [
            "Если нужно равномерно подсветить стену и показать фактуру камня, алюминия, стекла или конструктивной поверхности, обычно выбирают wall washer. Важны непрерывность светового пятна, высота заливки, равномерность и контроль ослепления.",
            "Если нужно подчеркнуть границы здания, карнизы, вертикали, оконные рамы или силуэт, лучше работают линейные светильники. Они дают чистую линию и визуальный порядок, заметный с дальних дистанций.",
          ],
        },
        {
          heading: "2. Для wall washer важны угол и расстояние от стены",
          body: [
            "Угол света нельзя оценивать только по таблице. Узкий угол подходит для большей высоты и вертикального акцента, широкий — для близкой установки и мягкой заливки. На результат влияют расстояние, высота стены и отражающая способность материала.",
            "При слишком близкой установке появляются пятна и локальная пересветка; при слишком большой дистанции теряется яркость и четкость границ. Сначала фиксируют монтажную позицию, затем подбирают мощность, угол и длину.",
          ],
        },
        {
          heading: "3. Для линейных светильников важны способ выхода света и непрерывность",
          body: [
            "Линейные светильники применяются на контурах, нишах, подоконниках, карнизах и углах. При выборе оценивают сечение корпуса, материал рассеивателя, стыковку и обработку торцов.",
            "В зонах близкого просмотра важны видимость светодиодов, равномерность рассеивателя и антибликовая защита. Для дальних контуров важнее стабильная яркость, единая цветовая температура и надежная влагозащита.",
          ],
        },
        {
          heading: "4. Цветовая температура и управление должны соответствовать архитектуре",
          body: [
            "Торговые комплексы, отели и офисные здания часто лучше выглядят в теплом или нейтральном белом свете. Городские ориентиры и праздничные сценарии могут использовать RGB/RGBW, но динамика должна поддерживать архитектуру.",
            "В одном проекте цветовая температура, уровни яркости и логика управления для wall washer и линейного света должны планироваться вместе, иначе фасад выглядит разрозненно.",
          ],
        },
      ],
      checklist: [
        "Определите цель фасада: равномерная заливка, контур или акцент.",
        "Проверьте расстояние установки, высоту стены, материал и доступ для обслуживания.",
        "Для wall washer оцените угол, равномерность, антибликовую и влагозащитную конструкцию.",
        "Для линейного света оцените непрерывность, стыки, CCT и монтаж.",
        "Перед закупкой по возможности выполните образец или светотехническую симуляцию.",
      ],
      conclusion:
        "Wall washer и линейные светильники не заменяют друг друга, а формируют разные уровни фасадной подсветки. Хорошее решение обычно строит плоскость wall washer, подчеркивает линии линейным светом и добавляет акценты точечными или проекторными светильниками.",
    },
  },
  "difference-flood-projector-street-light": {
    en: {
      category: "Product Knowledge",
      title: "Flood Light, Projector Light and Street Light: What Is the Difference?",
      description: "Clarify product positioning before selecting fixtures for roads, plazas and architectural scenes.",
      readTime: "5 min read",
      intro:
        "Flood lights, projector lights and street lights are often mixed in outdoor projects, but their design purpose, optical distribution and application logic are different. Understanding these differences makes selection more accurate and reduces problems such as insufficient brightness, excessive glare or unsuitable coverage.",
      sections: [
        { heading: "1. Flood lights: area lighting", body: ["Flood lights are used for plazas, parking lots, industrial yards, sports perimeters, docks and open areas. They are designed to provide broad coverage and base illumination rather than precisely emphasize one detail.", "Key selection factors include wattage, efficacy, heat dissipation, IP rating, mounting height and coverage. For projects with glare requirements, shielding, aiming angle and photometric distribution should also be reviewed."] },
        { heading: "2. Projector lights: directional accents", body: ["Projector lights provide stronger directionality and control. They are suitable for facade accents, sculptures, signage, trees, bridges and specific landscape nodes.", "For visual focus, projector lights usually create better layering than flood lights. A beam that is too wide loses emphasis; a beam that is too narrow can create local over-brightness."] },
        { heading: "3. Street lights: functional road lighting", body: ["Street lights are designed for visibility, safety and continuity on roads. Their optics respond to lane width, pole height, spacing, road class and glare limits, so they should not be replaced by ordinary flood lights.", "A good road scheme evaluates average illuminance, uniformity, glare control and maintenance cycle, not just single-luminaire brightness."] },
        { heading: "4. Do not select by wattage alone", body: ["The same 100W rating can produce very different site results. Efficacy, lenses, reflectors, beam angle, mounting height and environmental reflectance all shape the final effect.", "Engineering selection should start from the scene: define the target, choose the luminaire type, then match wattage, beam angle, CCT and installation method."] },
      ],
      checklist: ["Large open areas: start with flood lights.", "Facade, landscape or signage accents: start with projector lights.", "Roads and pedestrian routes: start with street lights.", "Judge brightness with optics and mounting height, not wattage alone.", "Confirm aiming and anti-glare accessories early when glare is a concern."],
      conclusion: "Flood lights solve broad area illumination, projector lights solve focused directional expression, and street lights solve road safety and continuity. In a complete outdoor project, these products often work together.",
    },
    ru: {
      category: "Знания о продукции",
      title: "Прожектор, проекторный светильник и уличный светильник: в чем разница?",
      description: "Разбор назначения разных наружных светильников для дорог, площадей и архитектурных сцен.",
      readTime: "5 мин чтения",
      intro: "В наружных проектах прожекторы, проекторные светильники и уличные светильники часто смешивают, хотя их назначение, КСС и логика применения отличаются. Понимание различий снижает риск недостаточной яркости, ослепления и неверного покрытия.",
      sections: [
        { heading: "1. Прожекторы: базовое освещение площади", body: ["Прожекторы применяются на площадях, парковках, промышленных территориях, у спортивных объектов, на причалах и открытых пространствах. Их задача — широкое покрытие и базовая освещенность.", "При выборе важны мощность, эффективность, охлаждение, IP-рейтинг, высота установки и зона покрытия. При высоких требованиях к комфорту проверяют экраны, угол наведения и КСС."] },
        { heading: "2. Проекторные светильники: акцент и направление", body: ["Проекторный светильник лучше подходит для локальных зон фасада, скульптур, вывесок, деревьев, мостов и ландшафтных акцентов.", "Слишком широкий угол размывает акцент, слишком узкий может дать локальную пересветку."] },
        { heading: "3. Уличные светильники: функциональное дорожное освещение", body: ["Уличный светильник отвечает за видимость, безопасность и непрерывность дороги. Его оптика связана с шириной полос, высотой и шагом опор, классом дороги и ограничением ослепления.", "В дорожной схеме оценивают среднюю освещенность, равномерность, glare control и обслуживание, а не только яркость одного светильника."] },
        { heading: "4. Не выбирайте только по мощности", body: ["Одинаковые 100W могут дать совершенно разный результат. Эффективность, линза, отражатель, угол, высота монтажа и отражение среды сильно влияют на эффект.", "Сначала определяют сцену и цель, затем тип светильника, а после этого мощность, угол, CCT и монтаж."] },
      ],
      checklist: ["Большие открытые зоны: прожекторы.", "Фасадные и ландшафтные акценты: проекторные светильники.", "Дороги и пешеходные маршруты: уличные светильники.", "Оценивайте оптику и высоту монтажа, а не только мощность.", "Заранее проверяйте угол и антибликовую конструкцию."],
      conclusion: "Прожектор решает задачу площади, проекторный светильник — акцента и направления, уличный светильник — безопасности и непрерывности дороги. В полноценном наружном проекте они часто используются совместно.",
    },
  },
  "professional-outdoor-lighting-project-details": {
    en: {
      category: "Project Insights",
      title: "Key Details That Make Outdoor Lighting Projects More Professional",
      description: "How buyers and contractors should evaluate light control, glare, CCT consistency, installation and documentation.",
      readTime: "7 min read",
      intro: "Professional outdoor lighting is not defined by brightness alone. The quality of a project depends on light distribution, hierarchy, glare control, installation details, CCT consistency and maintainability.",
      sections: [
        { heading: "1. Light needs hierarchy", body: ["Excessive brightness can flatten architecture, create glare and waste energy. A professional scheme defines what should stand out, what should recede and what only needs safe base illumination.", "Facade projects often combine wall washing, linear outline lighting and focused accents. Layering usually looks more natural than a single high-brightness approach."] },
        { heading: "2. Glare control shapes perceived quality", body: ["Improper aiming or insufficient shielding can create discomfort for pedestrians, vehicles and building users.", "Glare control starts with beam angle, installation angle and shielding details. It is especially important around walkways, entrances and plazas."] },
        { heading: "3. CCT consistency keeps the image clean", body: ["If fixtures within the same facade or landscape area differ visibly in color temperature, the result looks fragmented.", "Batch consistency and a clear master CCT should be confirmed during project selection."] },
        { heading: "4. Installation structure affects long-term stability", body: ["Outdoor fixtures face rain, temperature changes, wind load, dust and maintenance challenges.", "Brackets, waterproofing, cable exits, heat dissipation and service access should be reviewed together, not after purchase."] },
        { heading: "5. Complete documentation improves project efficiency", body: ["Mature product documents include images, dimensions, installation drawings, specifications, IES files, application scenes and certificates.", "Clear documentation shortens communication among design, procurement, construction and ownership teams."] },
      ],
      checklist: ["Does the project have primary, secondary and ambient light layers?", "Will fixture angles cause obvious glare?", "Is CCT consistent across the same area?", "Are brackets, waterproofing, thermal design and wiring suitable for long-term outdoor use?", "Are product documents complete enough for design and procurement?"],
      conclusion: "The difference in professional outdoor lighting is often hidden in details. Brightness is only the baseline; light control, CCT, installation, glare management, maintenance and documentation decide whether the project looks refined and remains reliable.",
    },
    ru: {
      category: "Проектные материалы",
      title: "Ключевые детали профессионального проекта наружного освещения",
      description: "Как оценивать контроль света, ослепление, CCT, монтаж и документацию.",
      readTime: "7 мин чтения",
      intro: "Профессиональность наружного освещения определяется не только яркостью. Важны распределение света, иерархия, антиблик, монтаж, единая CCT и удобство обслуживания.",
      sections: [
        { heading: "1. Свету нужна иерархия", body: ["Избыточная яркость убирает глубину архитектуры, создает ослепление и расходует энергию.", "Фасад часто строится из заливки стены, линейного контура и локальных акцентов."] },
        { heading: "2. Антиблик влияет на качество восприятия", body: ["Неверный угол или отсутствие экрана создают дискомфорт для людей и транспорта.", "Контроль ослепления начинается с угла, положения светильника и защитной конструкции."] },
        { heading: "3. Единая CCT делает картину чистой", body: ["Разная цветовая температура на одном фасаде или участке визуально разрушает сцену.", "Согласуйте основную CCT и стабильность партии на этапе подбора."] },
        { heading: "4. Монтажная конструкция влияет на надежность", body: ["Наружные приборы работают под дождем, ветром, пылью и перепадами температуры.", "Кронштейны, влагозащита, ввод кабеля, теплоотвод и доступ обслуживания надо оценивать вместе."] },
        { heading: "5. Документация ускоряет проект", body: ["Качественные материалы включают изображения, размеры, монтажные схемы, спецификации, IES, сцены применения и сертификаты.", "Понятная документация сокращает коммуникацию между дизайном, закупкой, монтажом и заказчиком."] },
      ],
      checklist: ["Есть ли уровни основного, вспомогательного и фонового света?", "Не создают ли углы светильников ослепления?", "Едина ли CCT в одной зоне?", "Подходят ли кронштейны, влагозащита, теплоотвод и подключение для улицы?", "Достаточно ли документов для проекта?"],
      conclusion: "Профессиональное наружное освещение отличается деталями: контролем света, CCT, монтажом, антибликом, обслуживанием и качеством документации.",
    },
  },
  "linear-projector-wall-washer-product-knowledge": {
    en: {
      category: "Product Knowledge",
      title: "Linear Lights, Projector Lights and Wall Washers: Product Knowledge and Selection Points",
      description: "Understand the differences by structure, light output, application scene and engineering selection logic.",
      readTime: "8 min read",
      intro: "Linear lights, projector lights and wall washers are the most common outdoor products for facades, landscapes and commercial projects. Linear lights define rhythm, projector lights create focused accents, and wall washers produce continuous surface illumination.",
      sections: [
        { heading: "1. Linear lights: outline and order", body: ["Linear lights suit eaves, windows, outlines, bridges, coves and landscape structures.", "Selection should review section size, mounting, diffuser uniformity, jointing and CCT consistency."] },
        { heading: "2. Projector lights: focus and direction", body: ["Projector lights are used for facade accents, entrances, columns, sculptures, trees, signage and landscape nodes.", "Beam angle, throw distance, edge control and aiming angle are more important than wattage alone."] },
        { heading: "3. Wall washers: continuous wall light", body: ["Wall washers are used on facades, bridges, hotels, complexes, curtain walls and cultural buildings.", "Setback distance determines uniformity and brightness. Confirm mounting position before selecting power, length and beam angle."] },
        { heading: "4. How to combine them in a project", body: ["A complete facade solution usually combines all three types.", "Wall washers build the surface, linear lights define boundaries, and projector lights emphasize entrances or visual nodes."] },
        { heading: "5. Details often missed in selection", body: ["Real results depend on photometry, mounting distance, glare control, structural reliability and CCT consistency.", "Outdoor projects also need IP rating, thermal design, bracket adjustability, cable exit and maintenance access."] },
      ],
      checklist: ["For edges and outlines, consider linear lights.", "For uniform wall surfaces, consider wall washers.", "For entrances, signage and objects, consider projector lights.", "Do not select by wattage alone.", "Keep CCT, brightness hierarchy and control logic consistent."],
      conclusion: "Linear lights create lines, wall washers create surfaces, and projector lights create accents. Clear lighting goals lead to more stable, professional and buildable projects.",
    },
    ru: {
      category: "Знания о продукции",
      title: "Линейные светильники, проекторные светильники и wall washer: подбор и различия",
      description: "Разбор конструкции, выхода света, сценариев применения и инженерного подбора.",
      readTime: "8 мин чтения",
      intro: "Линейные светильники, проекторные светильники и wall washer часто применяются на фасадах и в ландшафте. Линейный свет формирует ритм, проекторный — акцент, wall washer — равномерную поверхность.",
      sections: [
        { heading: "1. Линейные светильники: контур и порядок", body: ["Подходят для карнизов, окон, контуров, мостов, ниш и ландшафтных конструкций.", "Оценивайте сечение, монтаж, равномерность рассеивателя, стыки и стабильность CCT."] },
        { heading: "2. Проекторные светильники: акцент и направление", body: ["Используются для входов, колонн, скульптур, деревьев, вывесок и локальных зон.", "Важны угол, дистанция, граница пятна и направление, а не только мощность."] },
        { heading: "3. Wall washer: непрерывный свет по стене", body: ["Применяется на фасадах, мостах, отелях, комплексах и культурных зданиях.", "Расстояние от стены определяет равномерность и яркость."] },
        { heading: "4. Комбинация в проекте", body: ["Полное фасадное решение часто использует все три типа.", "Wall washer дает поверхность, линейный свет — границы, проекторный — акценты."] },
        { heading: "5. Часто упускаемые детали", body: ["Результат зависит от КСС, расстояния, антиблика, конструкции и CCT.", "Также важны IP, теплоотвод, регулировка кронштейна, ввод кабеля и обслуживание."] },
      ],
      checklist: ["Контуры: линейные светильники.", "Равномерная стена: wall washer.", "Акценты: проекторные светильники.", "Не выбирайте только по мощности.", "Согласуйте CCT, уровни яркости и управление."],
      conclusion: "Линейный свет отвечает за линию, wall washer — за поверхность, проекторный светильник — за акцент. Четкая цель делает проект стабильнее и профессиональнее.",
    },
  },
  "outdoor-lighting-installation-guide": {
    en: {
      category: "Installation Guide",
      title: "What Should Be Checked Before and After Outdoor Lighting Installation?",
      description: "Key steps from mounting position, waterproof wiring and bracket fixing to aiming, testing and maintenance records.",
      readTime: "7 min read",
      intro: "The final result of an outdoor lighting project depends not only on the fixture, but also on installation quality. Mounting position, power supply, waterproof wiring, bracket strength, aiming angle and maintenance access must be confirmed in advance.",
      sections: [
        { heading: "1. Confirm drawings and site conditions", body: ["Check model, quantity, wattage, CCT, beam angle, voltage and control method before installation.", "Review walls, ground, railings, steel structures, cable routes and any possible obstruction."] },
        { heading: "2. Fix brackets securely and keep angles adjustable", body: ["Outdoor fixtures face wind, rain, temperature changes and vibration, so fixing must be reliable.", "Projector lights, flood lights and wall washers usually need on-site aiming and final locking."] },
        { heading: "3. Waterproof wiring is critical", body: ["Many failures come from poor waterproofing at cable entries, connectors or power boxes.", "Use rated waterproof connectors, outdoor cable and drip loops to prevent water ingress."] },
        { heading: "4. Different fixtures need different installation logic", body: ["Wall washers focus on setback, spacing and throw height; linear lights focus on continuity and hidden wiring.", "Projector and flood lights focus on aiming and glare; street lights focus on pole height, spacing and road optics."] },
        { heading: "5. Testing and night commissioning are essential", body: ["After installation, test power, flicker, wiring, control signals and CCT consistency.", "Final aiming and brightness adjustment should be done at night under real viewing conditions."] },
        { heading: "6. Keep maintenance records", body: ["Record model, location, circuit zones, power supplies, control method, spare quantity and maintenance notes.", "These records reduce future troubleshooting cost and improve delivery quality."] },
      ],
      checklist: ["Confirm model, wattage, CCT, beam angle, voltage and control method.", "Check mounting surface, cable routing and obstructions.", "Lock brackets after aiming.", "Waterproof all connectors, boxes and cable entries.", "Complete power testing and final night commissioning.", "Keep circuit, location and maintenance records."],
      conclusion: "Outdoor lighting installation is detail-driven. Correct products are only the first step; mounting, waterproof wiring, aiming and maintenance documentation determine long-term stability.",
    },
    ru: {
      category: "Руководство по монтажу",
      title: "Что проверить до и после монтажа наружных светильников?",
      description: "Ключевые шаги: место установки, влагозащитное подключение, кронштейны, настройка угла, тестирование и обслуживание.",
      readTime: "7 мин чтения",
      intro: "Итоговый эффект наружного освещения зависит не только от светильника, но и от монтажа. Нужно заранее подтвердить место, питание, влагозащиту, кронштейны, угол света и доступ для обслуживания.",
      sections: [
        { heading: "1. Проверьте чертежи и условия площадки", body: ["До монтажа сверяют модели, количество, мощность, CCT, угол, напряжение и управление.", "Проверьте стены, грунт, ограждения, металлоконструкции, трассы кабеля и возможные препятствия."] },
        { heading: "2. Кронштейны должны быть надежными и регулируемыми", body: ["Наружные приборы испытывают ветер, дождь, перепады температуры и вибрацию.", "После настройки угла крепеж должен быть надежно зафиксирован."] },
        { heading: "3. Влагозащитное подключение критично", body: ["Частые сбои возникают из-за воды в кабельных вводах, коннекторах или блоках питания.", "Используйте подходящие коннекторы, outdoor-кабель и капельные петли."] },
        { heading: "4. Разные светильники требуют разной логики монтажа", body: ["Wall washer требует контроля расстояния, шага и высоты; линейный свет — непрерывности и скрытой проводки.", "Проекторные и прожекторные светильники требуют контроля угла и ослепления; уличные — высоты опор, шага и дорожной КСС."] },
        { heading: "5. Нужны тестирование и ночная пусконаладка", body: ["После монтажа проверяют питание, мерцание, проводку, сигнал управления и CCT.", "Финальная настройка угла и яркости выполняется ночью в реальных условиях."] },
        { heading: "6. Сохраняйте записи обслуживания", body: ["Фиксируйте модели, места, зоны цепей, блоки питания, управление, запас и заметки.", "Это снижает будущие затраты на поиск неисправностей."] },
      ],
      checklist: ["Проверьте модель, мощность, CCT, угол, напряжение и управление.", "Оцените место монтажа, трассу кабеля и препятствия.", "Зафиксируйте кронштейны после настройки.", "Защитите от воды все соединения и вводы.", "Проведите тест и ночную настройку.", "Сохраните схемы цепей и записи обслуживания."],
      conclusion: "Монтаж наружного освещения строится на деталях. Правильный светильник — только начало; долговечность задают монтаж, влагозащита, настройка и документация.",
    },
  },
};

export function getBlogCategoryLabel(category: string, locale: Locale) {
  return blogCategoryLabels[locale]?.[category] || category;
}

export function localizeBlogArticle(article: BlogArticle, locale: Locale): BlogArticle {
  const translation = blogTranslations[article.slug]?.[locale];
  if (locale === "zh" || !translation) return article;
  return {
    ...article,
    ...translation,
    category: translation.category || getBlogCategoryLabel(article.category, locale),
    sections: translation.sections || article.sections,
    checklist: translation.checklist || article.checklist,
  };
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "choose-wall-washer-linear-lighting",
    category: "照明指南",
    title: "建筑立面项目如何选择洗墙灯和线条灯",
    description: "从光束角、安装距离、光学控制和工程选型角度，梳理立面照明产品选择方法。",
    image: "https://img.zomeiled.com/images/generated/solutions/solution-facade.jpg",
    date: "2026-07-24",
    readTime: "约 6 分钟阅读",
    intro:
      "建筑立面照明不是简单地把灯装到墙边，而是要让建筑的轮廓、材质、开窗节奏和夜间识别度被准确表达。洗墙灯和线条灯都是立面项目中非常常见的产品，但两者的作用并不相同：洗墙灯更适合形成连续的面光效果，线条灯更适合勾勒轮廓、强调边界和塑造线性节奏。",
    sections: [
      {
        heading: "一、先判断项目想表达什么效果",
        body: [
          "如果项目目标是让墙面均匀变亮，突出石材、铝板、玻璃幕墙或结构表面的质感，通常优先考虑洗墙灯。洗墙灯的重点在于光斑连续性、照射高度、墙面均匀度和眩光控制。",
          "如果项目目标是强调建筑边界、屋檐、竖向线条、窗框或楼体轮廓，线条灯会更合适。线条灯的优势是安装线性清晰，能够形成视觉秩序，让建筑在远距离观看时更有识别度。",
        ],
      },
      {
        heading: "二、洗墙灯重点看光束角和安装距离",
        body: [
          "洗墙灯选型时，光束角不能只看参数表。窄角更适合较高照射距离和强调竖向拉伸，宽角更适合近距离安装和柔和铺光。实际项目中，安装距离、墙面高度、墙面材质反射率都会影响最终效果。",
          "如果灯具距离墙面太近，容易出现明显光斑或局部过亮；距离过远，则可能亮度不足、边界发散。建议在方案阶段就确定大致安装位置，再反推功率、角度和长度。",
        ],
      },
      {
        heading: "三、线条灯重点看出光方式和连续性",
        body: [
          "线条灯常用于轮廓、暗槽、窗台、檐口和建筑转角。选型时应关注灯体截面尺寸、出光面材质、拼接方式和端部处理。优秀的线条灯不只是亮，而是要让线条连续、干净、没有明显断点。",
          "如果用于近距离观看区域，应特别注意灯珠颗粒感、罩体均匀度和安装遮挡。如果用于远距离轮廓，重点则是亮度稳定、色温一致和防水可靠性。",
        ],
      },
      {
        heading: "四、色温和控制方式要与建筑定位一致",
        body: [
          "商业综合体、酒店、办公建筑通常更适合暖白或中性白，能够体现高级感和舒适度。城市地标或节庆项目可能会使用 RGB、RGBW 或动态控制，但动态效果应服务建筑气质，避免过度炫目。",
          "同一项目中，洗墙灯和线条灯的色温、亮度层级和控制逻辑应统一规划，否则容易出现立面光色混乱、主次不清的问题。",
        ],
      },
    ],
    checklist: [
      "明确立面目标：均匀洗墙、轮廓勾勒，还是局部重点照明。",
      "确认安装距离、墙面高度、墙面材质和可维护空间。",
      "洗墙灯重点评估光束角、均匀度、防眩与防水结构。",
      "线条灯重点评估连续性、拼接效果、色温一致性和安装方式。",
      "在正式采购前尽量进行样段测试或效果模拟。",
    ],
    conclusion:
      "洗墙灯和线条灯并不是互相替代的关系，而是共同构成立面照明层次的两类产品。好的方案通常会用洗墙灯建立面，用线条灯强调线，再通过点光源或投光灯补充重点。选型越早结合安装条件和最终效果，后期返工和视觉偏差就越少。",
  },
  {
    slug: "difference-flood-projector-street-light",
    category: "产品知识",
    title: "泛光灯、投光灯和路灯有什么区别？",
    description: "在道路、广场和建筑场景选型前，先理清不同户外灯具系列的定位与应用。",
    image: "https://img.zomeiled.com/images/generated/products-overview.jpg",
    date: "2026-07-24",
    readTime: "约 5 分钟阅读",
    intro:
      "户外照明项目中，泛光灯、投光灯和路灯经常被混用，但它们的设计目的、配光方式和应用场景并不一样。正确理解这三类产品，可以让项目选型更准确，也能减少亮度不足、眩光过强或照射范围不合理的问题。",
    sections: [
      {
        heading: "一、泛光灯：适合大面积基础照明",
        body: [
          "泛光灯通常用于广场、停车场、厂区、球场外围、码头和大型开放空间。它的特点是覆盖范围较大，重点是提供基础亮度和均匀照明，而不是精细地控制某一个建筑细节。",
          "选择泛光灯时，应重点关注功率、光效、散热、防护等级、安装高度和照射范围。如果项目对眩光控制要求较高，还需要考虑遮光罩、安装角度和配光曲线。",
        ],
      },
      {
        heading: "二、投光灯：适合重点投射和方向性表达",
        body: [
          "投光灯更强调方向性和控制感，常用于建筑局部、雕塑、标识、树木、桥梁结构或特定景观节点。与泛光灯相比，投光灯通常更关注光束角、投射距离和边界效果。",
          "如果需要突出某个立面区域、装饰构件或景观重点，投光灯会比泛光灯更容易做出层次。选型时要注意角度过宽会失去重点，角度过窄则可能造成局部过亮。",
        ],
      },
      {
        heading: "三、路灯：适合道路功能照明",
        body: [
          "路灯的核心任务是保障道路可视性、安全性和连续性。它的配光通常围绕车道宽度、灯杆高度、杆距、道路等级和眩光限制展开，不应简单用普通泛光灯替代。",
          "好的路灯方案不仅要看单灯亮度，还要看道路平均照度、均匀度、眩光控制和维护周期。对于市政道路、园区道路、社区道路等场景，路灯的光学设计比单纯功率更重要。",
        ],
      },
      {
        heading: "四、选型时不要只看功率",
        body: [
          "同样是 100W，不同灯具的实际效果可能完全不同。光效、透镜、反射器、出光角度、安装高度和环境反射都会影响最终照明结果。",
          "工程选型应该从场景出发：先确定照明对象和目标，再确定灯具类型，最后匹配功率、角度、色温和安装方式。",
        ],
      },
    ],
    checklist: [
      "大面积开放空间：优先考虑泛光灯。",
      "建筑、景观或标识重点投射：优先考虑投光灯。",
      "道路、园区车行道和人行道：优先考虑路灯。",
      "不要只用功率判断亮度，应结合配光和安装高度。",
      "有眩光要求的项目，应提前确认灯具角度和防眩结构。",
    ],
    conclusion:
      "泛光灯解决“面”的基础照明，投光灯解决“点”和“方向”的重点表达，路灯解决“道路安全与连续性”。在一个完整户外项目中，三类灯具往往需要组合使用。只有先明确场景功能，再进入产品参数，才能做出可靠的工程照明方案。",
  },
  {
    slug: "professional-outdoor-lighting-project-details",
    category: "项目洞察",
    title: "让户外照明项目更专业的关键细节",
    description: "从可控配光到眩光管理，说明采购方和工程方应重点评估的照明细节。",
    image: "https://img.zomeiled.com/images/generated/hero-facade-lighting.jpg",
    date: "2026-07-24",
    readTime: "约 7 分钟阅读",
    intro:
      "一个户外照明项目是否专业，往往不只取决于灯具是否足够亮。真正影响项目质感的是光的分布、明暗层次、眩光控制、安装细节、色温一致性以及后期维护便利性。对于采购方、设计方和施工方来说，提前关注这些细节，能够显著提升项目最终呈现。",
    sections: [
      {
        heading: "一、光要有主次，不是越亮越好",
        body: [
          "很多项目初期容易把亮度作为唯一目标，但过亮会让建筑失去层次，也容易造成眩光和能耗浪费。专业照明更关注明暗关系：哪里需要突出，哪里需要退让，哪里只需要安全基础照明。",
          "例如建筑立面可以通过洗墙灯建立整体亮度，通过线条灯勾勒结构，再用投光灯强调入口或关键构件。不同光层配合，效果会比单一高亮度更自然。",
        ],
      },
      {
        heading: "二、眩光控制直接影响项目高级感",
        body: [
          "户外灯具如果安装角度不合理，或缺少防眩设计，容易让行人、车辆或建筑使用者产生不适。眩光不仅影响视觉体验，也会降低项目安全性。",
          "控制眩光可以从三个方面入手：选择合适光束角，控制灯具安装角度，使用遮光结构或深藏式光学设计。对于近人尺度场景，如步道、入口、广场边缘，防眩尤其重要。",
        ],
      },
      {
        heading: "三、色温一致性决定画面是否干净",
        body: [
          "同一建筑或同一景观区域内，如果灯具色温差异明显，画面会显得杂乱。即便灯具亮度足够，整体质感也会下降。",
          "项目采购时应关注同批次产品的色温一致性，并在方案阶段确定主色温。暖白适合酒店、商业和景观氛围，中性白适合现代建筑和公共空间，彩色光则应有明确控制逻辑。",
        ],
      },
      {
        heading: "四、安装结构决定后期是否稳定",
        body: [
          "户外项目长期面对雨水、温差、风压、灰尘和维护挑战。灯具结构、防水方式、支架强度、线缆出线方式和安装可调节性，都会影响后期稳定性。",
          "对于洗墙灯、线条灯、投光灯、泛光灯等户外产品，不能只看正面效果图，还要查看支架、接口、防水结构、散热结构和维护空间。",
        ],
      },
      {
        heading: "五、资料完整度会影响项目推进效率",
        body: [
          "成熟的产品资料应包括产品大图、尺寸图、安装示意、规格参数、配光文件、应用场景和必要认证。资料越清晰，设计、采购、施工和业主沟通就越顺畅。",
          "对于经销商和工程采购方来说，一套完整的产品资料不仅能提升专业形象，也能缩短报价和方案确认周期。",
        ],
      },
    ],
    checklist: [
      "项目是否建立了主光、辅助光和环境光层次？",
      "灯具角度和安装位置是否会产生明显眩光？",
      "同一区域色温是否统一，是否符合建筑定位？",
      "灯具支架、防水、散热和接线方式是否适合户外长期使用？",
      "产品资料是否足够完整，便于设计、采购和施工沟通？",
    ],
    conclusion:
      "专业的户外照明项目，真正的差异往往藏在细节里。亮度只是基础，控光、色温、安装、防眩、维护和资料完整度，才决定项目能否长期稳定并呈现高级感。对于希望提升项目成交率和品牌可信度的照明企业来说，这些细节同样是网站内容和产品展示中最值得强调的部分。",
  },
  {
    slug: "linear-projector-wall-washer-product-knowledge",
    category: "产品知识",
    title: "线条灯、投光灯、洗墙灯的产品知识与选型要点",
    description: "从结构特点、出光方式、应用场景和工程选型角度，快速理解线条灯、投光灯和洗墙灯的区别。",
    image: "https://img.zomeiled.com/images/generated/products-overview.jpg",
    date: "2026-07-30",
    readTime: "约 8 分钟阅读",
    intro:
      "线条灯、投光灯和洗墙灯是建筑立面、景观空间和商业项目中最常被使用的三类户外照明产品。它们看起来都可以用于建筑外墙，但实际承担的功能不同：线条灯强调轮廓和线性节奏，投光灯强调重点投射和方向控制，洗墙灯强调墙面均匀铺光。理解这三类产品的边界，能让方案更准确，也能让采购和施工沟通更高效。",
    sections: [
      {
        heading: "一、线条灯：用来勾勒轮廓和建立秩序",
        body: [
          "线条灯通常呈长条形结构，适合安装在建筑檐口、窗边、轮廓线、桥梁边缘、暗槽或景观构筑物上。它的核心价值不是单点亮度，而是让建筑边界形成连续、清晰、有节奏的线性表达。",
          "选线条灯时，要重点看灯体截面、安装方式、出光面均匀度、拼接缝处理和色温一致性。如果线条灯用于近距离观看区域，还要注意灯珠颗粒感和眩光；如果用于远距离轮廓，则要关注亮度稳定性和整体连续效果。",
        ],
      },
      {
        heading: "二、投光灯：用来突出重点和控制方向",
        body: [
          "投光灯更适合做方向性照明，比如照射建筑局部、门头、立柱、雕塑、树木、标识或景观节点。它的重点在于光束角、投射距离、照射边界和安装角度，适合把视觉焦点集中到某个对象上。",
          "投光灯不能只按功率选。窄角适合远距离或重点强调，宽角适合近距离或较大范围补光。若角度过窄，容易局部过亮；若角度过宽，则重点不突出，还可能产生眩光和溢光。",
        ],
      },
      {
        heading: "三、洗墙灯：用来形成连续的墙面光",
        body: [
          "洗墙灯通常用于建筑立面、桥梁、酒店外墙、商业综合体、幕墙和文化建筑。它的目标是让墙面获得均匀、连续的光，而不是简单照亮某一个点。好的洗墙效果应当光斑自然、亮度过渡柔和、墙面材质表达清楚。",
          "洗墙灯选型时，安装距离非常关键。灯具离墙太近容易出现光斑和明暗不均，离墙太远又会造成亮度损失。方案阶段应先确定安装位置和目标照射高度，再选择功率、长度、光束角和出光方向。",
        ],
      },
      {
        heading: "四、三类产品在项目中如何组合",
        body: [
          "在完整的建筑照明方案里，线条灯、投光灯和洗墙灯通常不是二选一，而是组合使用。洗墙灯负责建立墙面亮度，线条灯负责勾勒轮廓和边界，投光灯负责突出入口、立柱、景观节点或标识。",
          "例如酒店立面可以用洗墙灯表现外墙材质，用线条灯强调檐口和窗框节奏，再用投光灯突出入口雨棚和景观树。这样形成面、线、点三个层次，画面会比单一灯具更专业。",
        ],
      },
      {
        heading: "五、工程选型时最容易忽略的细节",
        body: [
          "很多项目会先看功率和价格，但真正影响效果的是配光、安装距离、防眩、结构可靠性和色温一致性。同样功率的灯具，如果透镜、角度和安装方式不同，实际效果可能差别很大。",
          "户外项目还要关注防水等级、散热结构、支架调节角度、线缆出线方式和后期维护空间。对于长期运行的商业项目和市政项目，这些细节会直接影响稳定性和维护成本。",
        ],
      },
    ],
    checklist: [
      "需要勾勒建筑边界、檐口或窗框：优先考虑线条灯。",
      "需要照亮墙面并形成均匀面光：优先考虑洗墙灯。",
      "需要突出入口、标识、雕塑或景观节点：优先考虑投光灯。",
      "不要只按功率选灯，应结合安装距离、光束角和照射目标。",
      "同一项目中应统一色温、亮度层级和控制逻辑。",
      "正式采购前建议确认样段效果或提供安装示意，减少现场返工。",
    ],
    conclusion:
      "线条灯负责“线”，洗墙灯负责“面”，投光灯负责“重点”。三类产品各有边界，也可以互相配合。对于建筑立面和景观项目来说，先明确照明目标，再选择产品类型、光束角、功率和安装方式，才能让最终效果更稳定、更专业，也更符合工程采购和项目落地的需求。",
  },
  {
    slug: "outdoor-lighting-installation-guide",
    category: "安装指南",
    title: "户外照明灯具安装前后需要注意什么？",
    description: "从安装位置、防水接线、支架固定、角度调试到验收维护，整理户外照明项目安装的关键步骤。",
    image: "https://img.zomeiled.com/images/generated/solutions/solution-facade.jpg",
    date: "2026-07-30",
    readTime: "约 7 分钟阅读",
    intro:
      "户外照明项目的最终效果，不只取决于灯具本身，也取决于安装是否规范。洗墙灯、线条灯、投光灯、泛光灯、路灯等产品在安装时，都需要提前确认安装位置、供电方式、防水接线、支架强度、出光角度和后期维护空间。安装细节处理得越清楚，项目后期出现漏水、偏光、眩光、线路故障和维护困难的概率就越低。",
    sections: [
      {
        heading: "一、安装前先确认图纸和现场条件",
        body: [
          "正式安装前，应先核对灯具数量、型号、功率、色温、光束角、电压和控制方式，确认是否与项目图纸、报价清单和现场需求一致。很多现场问题并不是灯具质量导致，而是前期型号、角度或安装位置没有确认清楚。",
          "同时要检查现场墙面、地面、栏杆、支架基础和走线空间。对于建筑立面项目，还要确认灯具是否会被檐口、窗框、幕墙龙骨、景观绿化或广告结构遮挡，避免安装后光线被挡住或效果偏离设计。",
        ],
      },
      {
        heading: "二、支架固定要稳定，角度要可调",
        body: [
          "户外灯具长期承受风、雨、温差和振动，支架固定必须可靠。安装时应根据墙体、钢结构、地面或灯杆材质选择合适的螺丝、膨胀件和固定方式，不能只追求安装速度。",
          "投光灯、泛光灯和洗墙灯通常需要现场调角。支架应预留可调空间，安装完成后再根据实际照射效果进行微调。调好角度后，要锁紧螺丝，避免长期使用中角度松动。",
        ],
      },
      {
        heading: "三、防水接线是户外安装的核心",
        body: [
          "户外灯具安装最常见的问题之一是接线防水不到位。即使灯具本体达到较高防护等级，如果接线端口、连接器或电源盒进水，仍然会导致短路、闪烁、局部不亮或寿命下降。",
          "建议使用合适等级的防水接头、防水盒和户外线缆，接线位置尽量避免长期积水和雨水直冲。所有线缆出入口应做好密封处理，线缆走向应预留滴水弯，避免雨水顺着线缆流入接线位置。",
        ],
      },
      {
        heading: "四、不同灯具的安装重点不同",
        body: [
          "洗墙灯安装时，要特别关注离墙距离、灯具间距和照射高度。距离太近容易出现光斑，距离太远会降低亮度和均匀度。线条灯安装时，要注意拼接连续性、端头处理和走线隐藏，避免形成明显断点。",
          "投光灯和泛光灯安装时，要重点控制照射方向和眩光。路灯安装时，要关注灯杆高度、杆距、臂长和道路配光。不同产品不能用同一种安装逻辑处理，必须围绕实际场景和照明目标调整。",
        ],
      },
      {
        heading: "五、通电测试和夜间调试不能省",
        body: [
          "安装完成后，应先进行分区通电测试，检查是否有不亮、闪烁、接线错误、控制信号异常或色温不一致的问题。对于 RGB、RGBW 或可控系统，还要测试控制地址、分组和场景切换。",
          "户外照明效果最好在夜间进行最终调试。白天只能检查安装位置和线路，真正的光斑、眩光、均匀度、明暗层次和建筑效果，需要在夜间观察后再微调角度和亮度。",
        ],
      },
      {
        heading: "六、安装后要留下维护记录",
        body: [
          "项目交付前，应整理灯具型号、安装位置、线路分区、电源位置、控制方式、备品数量和维护注意事项。对后续维护来说，这些信息比单纯的产品图片更有价值。",
          "如果是商业建筑、市政道路或长期运营项目，建议建立简单的维护档案，记录更换时间、故障位置和维修方式。这样能降低后期排查成本，也能提升项目交付的专业度。",
        ],
      },
    ],
    checklist: [
      "安装前确认型号、功率、色温、角度、电压和控制方式。",
      "检查现场安装面、支架基础、走线空间和遮挡情况。",
      "支架固定要牢靠，角度调试后必须锁紧。",
      "所有接线端口、防水盒、连接器和线缆出入口都要做好防水。",
      "洗墙灯关注安装距离，线条灯关注连续性，投光灯关注角度和眩光。",
      "完成后进行通电测试，并在夜间做最终效果调试。",
      "交付时保留线路分区、安装位置和维护记录。",
    ],
    conclusion:
      "户外照明安装是一项细节工作。灯具选得对只是第一步，安装位置、固定方式、防水接线、角度调试和维护记录，都会影响项目最终效果和长期稳定性。对于工程项目来说，提前把安装流程标准化，不仅能减少返工，也能让照明效果更接近设计预期。",
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
