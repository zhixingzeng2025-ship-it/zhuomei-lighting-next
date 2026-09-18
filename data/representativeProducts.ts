import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;

export type RepresentativeProductProfile = {
  positioning: LocalizedText;
  selectionBasis: LocalizedText[];
  applications: LocalizedText[];
  faq: Array<{ question: LocalizedText; answer: LocalizedText }>;
};

const text = (en: string, zh: string, ru: string): LocalizedText => ({ en, zh, ru });

export const representativeProducts: Record<string, RepresentativeProductProfile> = {
  "zm-lin-xt1.1": {
    positioning: text(
      "A compact 24 V linear luminaire for continuous facade outlines, concealed coves and architectural color scenes.",
      "一款用于建筑轮廓、隐藏式灯槽和建筑彩色场景的紧凑型 24V 线条灯。",
      "Компактный линейный светильник 24 В для контуров фасада, скрытых ниш и цветовых архитектурных сцен.",
    ),
    selectionBasis: [
      text("Choose 12 W for white/RGB or 15 W for RGBW per 1 m fixture.", "1 米灯具白光/RGB 选择 12W，RGBW 选择 15W。", "Для светильника длиной 1 м: 12 Вт для белого/RGB или 15 Вт для RGBW."),
      text("The 120° distribution suits continuous luminous lines rather than long-distance projection.", "120° 配光适合形成连续发光线，不用于远距离重点投射。", "Угол 120° подходит для непрерывных световых линий, а не для дальнего акцентного света."),
      text("Confirm driver location, voltage drop and control protocol before final quantity approval.", "确认数量前应同步确认电源位置、压降和控制协议。", "До утверждения количества проверьте размещение БП, падение напряжения и протокол управления."),
    ],
    applications: [text("Facade outlines", "建筑轮廓", "Контуры фасада"), text("Cove lighting", "灯槽照明", "Освещение ниш"), text("Commercial architecture", "商业建筑", "Коммерческая архитектура")],
    faq: [
      { question: text("Is XT1.1 suitable for wall washing?", "XT1.1 适合洗墙吗？", "Подходит ли XT1.1 для заливки стены?"), answer: text("Its 120° output is intended for lines and soft surface light. Use a narrow-beam wall washer when throw distance and vertical uniformity are the priority.", "它的 120° 出光更适合线性表达和柔和表面光；若强调投射距离和立面均匀度，应选择窄角洗墙灯。", "Свет 120° рассчитан на линии и мягкую подсветку. Для дальности и вертикальной равномерности лучше выбрать узкоугольный wall washer.") },
    ],
  },
  "zm-sl-fs2.0": {
    positioning: text("A compact architectural projector with narrow-to-wide optics for columns, facade details and landscape accents.", "一款覆盖窄角到宽角配光的紧凑型建筑投光灯，适合立柱、立面细节和景观重点照明。", "Компактный архитектурный прожектор с узкой и широкой оптикой для колонн, деталей фасада и ландшафтных акцентов."),
    selectionBasis: [
      text("8 W white/RGB and 12 W RGBW versions balance compact size with local accent output.", "8W 白光/RGB 与 12W RGBW 版本兼顾小体积和局部重点照明。", "Версии 8 Вт белый/RGB и 12 Вт RGBW сочетают компактность и акцентный свет."),
      text("Select 5°-15° for narrow accents and 25°-60° for broader surfaces.", "5°–15°适合窄角重点光，25°–60°适合较宽表面。", "5°–15° для узких акцентов, 25°–60° для более широких поверхностей."),
      text("DC24 V and AC220 V options should be confirmed against cable distance and control design.", "DC24V 与 AC220V 版本需结合布线距离和控制方案确认。", "DC24 В или AC220 В выбираются с учетом длины кабеля и схемы управления."),
    ],
    applications: [text("Columns and details", "立柱与细节", "Колонны и детали"), text("Landscape accents", "景观重点", "Ландшафтные акценты"), text("Facade rhythm", "立面节奏", "Ритм фасада")],
    faq: [{ question: text("How should the beam angle be selected?", "光束角怎样选择？", "Как выбрать угол луча?"), answer: text("Use mounting distance, target width and acceptable spill light as the three inputs; confirm the final optic with a night test when possible.", "以安装距离、目标宽度和允许溢出光为三个输入条件，有条件时通过夜间试灯确认最终角度。", "Учитывайте расстояние, ширину цели и допустимую засветку; по возможности подтвердите оптику ночным тестом.") }],
  },
  "zm-pls-yd80": {
    positioning: text("An 80 mm, 5 W pixel-style point source for media facades, decorative grids and low-resolution dynamic effects.", "一款直径 80mm、5W 的像素型点光源，适合媒体立面、装饰网格和低分辨率动态效果。", "Пиксельный точечный источник 80 мм, 5 Вт для медиафасадов, декоративных сеток и динамических эффектов низкого разрешения."),
    selectionBasis: [
      text("Plan pixel pitch from viewing distance before fixing fixture quantity.", "应先根据观看距离确定像素间距，再确定灯具数量。", "Сначала определите шаг пикселя по дистанции просмотра, затем количество светильников."),
      text("The 120° output supports broad visibility rather than focused illumination.", "120° 出光强调广角可视性，而不是聚焦照明。", "Угол 120° обеспечивает широкую видимость, а не сфокусированное освещение."),
      text("Power, addressing and signal topology should be designed as one system.", "供电、地址分配和信号拓扑需要作为一个完整系统设计。", "Питание, адресация и топология сигнала проектируются как единая система."),
    ],
    applications: [text("Media facade", "媒体立面", "Медиафасад"), text("Decorative grid", "装饰网格", "Декоративная сетка"), text("Interactive installation", "互动装置", "Интерактивная инсталляция")],
    faq: [{ question: text("What determines the point spacing?", "点间距由什么决定？", "От чего зависит шаг точек?"), answer: text("Viewing distance, facade scale, content resolution and budget jointly determine the pitch. A layout test should precede mass production.", "观看距离、立面尺度、内容分辨率和预算共同决定点间距，量产前应先做排布测试。", "Шаг определяют дистанция просмотра, масштаб фасада, разрешение контента и бюджет; до серии нужен тест раскладки.") }],
  },
  "zm-wl-yb2.1-yb2.2": {
    positioning: text("A compact single- or dual-direction wall luminaire for controlled facade light patterns and entrance accents.", "一款单向或双向出光的紧凑型壁灯，用于受控的立面光斑和入口重点照明。", "Компактный настенный светильник с одно- или двусторонним светом для рисунка на фасаде и акцентов входной зоны."),
    selectionBasis: [
      text("YB2.1 is single-direction 6 W; YB2.2 uses two 6 W light engines.", "YB2.1 为单向 6W，YB2.2 为双向 6W×2。", "YB2.1: односторонний 6 Вт; YB2.2: два световых модуля по 6 Вт."),
      text("Narrow optics create sharper patterns; wider optics soften the transition.", "窄角配光形成更清晰光斑，宽角配光让过渡更柔和。", "Узкая оптика дает четкий рисунок, широкая — более мягкий переход."),
      text("Check wall finish, mounting height and glare direction with a sample test.", "建议通过样灯确认墙面材质、安装高度和眩光方向。", "Образцом проверьте материал стены, высоту монтажа и направление бликов."),
    ],
    applications: [text("Hotel facade", "酒店立面", "Фасад отеля"), text("Entrance wall", "入口墙面", "Стена входной зоны"), text("Architectural detail", "建筑细节", "Архитектурная деталь")],
    faq: [{ question: text("What is the difference between YB2.1 and YB2.2?", "YB2.1 和 YB2.2 有什么区别？", "Чем отличаются YB2.1 и YB2.2?"), answer: text("YB2.1 emits in one direction; YB2.2 emits upward and downward. Their different body lengths reflect the second light engine in YB2.2.", "YB2.1 单向出光，YB2.2 上下双向出光；YB2.2 因增加一组光源而具有更长灯体。", "YB2.1 светит в одну сторону, YB2.2 — вверх и вниз; второй модуль увеличивает длину корпуса YB2.2.") }],
  },
  "ZOMEI-FL23-300W": {
    positioning: text("A 300 W IP66 floodlight for broad-area industrial, sports and public-space illumination.", "一款用于工业、运动和公共空间大面积照明的 300W IP66 泛光灯。", "Прожектор 300 Вт IP66 для широкого освещения промышленных, спортивных и общественных пространств."),
    selectionBasis: [
      text("Use lighting calculations to confirm quantity, mounting height and uniformity.", "通过照明计算确认数量、安装高度和均匀度。", "Количество, высоту и равномерность подтверждайте светотехническим расчетом."),
      text("The listed 120° beam serves broad coverage; verify spill-light limits at site boundaries.", "120° 配光用于大范围覆盖，同时应校核场地边界的溢出光限制。", "Угол 120° дает широкий охват; проверьте ограничения засветки на границах участка."),
      text("Confirm input voltage, surge protection and control requirement before order.", "下单前确认输入电压、防浪涌等级和控制需求。", "До заказа подтвердите напряжение, защиту от импульсов и требования управления."),
    ],
    applications: [text("Industrial yard", "工业场地", "Промышленная площадка"), text("Sports area", "运动场地", "Спортивная зона"), text("Public space", "公共空间", "Общественное пространство")],
    faq: [{ question: text("Can fixture quantity be selected by wattage alone?", "只看功率可以确定灯具数量吗？", "Можно ли определить количество только по мощности?"), answer: text("No. Target illuminance, mounting height, spacing, surface reflectance and uniformity must be included in a lighting calculation.", "不可以。目标照度、安装高度、间距、表面反射率和均匀度都需要纳入照明计算。", "Нет. В расчет входят целевая освещенность, высота, шаг, отражение поверхности и равномерность.") }],
  },
  "zm-tl-syc1.0": {
    positioning: text("A modular tree-mount luminaire for controlled uplight without placing a conventional spike light in the planting bed.", "一款模块化抱树灯，可在不设置传统插地灯的情况下提供受控向上照明。", "Модульный светильник для крепления на дереве, обеспечивающий направленный свет вверх без обычного грунтового прожектора."),
    selectionBasis: [
      text("Configure module count around trunk diameter and target canopy coverage.", "根据树干直径和目标树冠覆盖范围确定模块数量。", "Количество модулей выбирается по диаметру ствола и требуемому охвату кроны."),
      text("Choose narrow beams for tall trunks and wider beams for nearby canopy fill.", "高树干选择窄角，近距离树冠补光选择较宽角度。", "Узкий луч подходит для высоких стволов, широкий — для ближнего заполнения кроны."),
      text("Allow for tree growth, cable protection and maintenance access in the mounting detail.", "安装节点需预留树木生长空间，并考虑线缆保护和维护通道。", "В узле крепления учитывайте рост дерева, защиту кабеля и доступ для обслуживания."),
    ],
    applications: [text("Mature trees", "大型乔木", "Крупные деревья"), text("Park landscape", "公园景观", "Парковый ландшафт"), text("Hotel garden", "酒店庭院", "Сад отеля")],
    faq: [{ question: text("Will the mounting system affect tree growth?", "安装结构会影响树木生长吗？", "Повлияет ли крепление на рост дерева?"), answer: text("The mounting detail must avoid rigid long-term constriction and should be inspected periodically. Final fixing should follow the landscape consultant's requirements.", "安装节点应避免长期刚性束缚，并定期检查；最终固定方式应遵循景观顾问要求。", "Крепление не должно жестко стягивать ствол; его нужно регулярно проверять и согласовать с ландшафтным специалистом.") }],
  },
};

export function getRepresentativeProductProfile(id: string) {
  return representativeProducts[id];
}
