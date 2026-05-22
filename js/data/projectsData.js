// js/data/projectsData.js
/**
 * PROJECTS_DATA - Данные проектов (единый источник истины)
 * ООО "Волга-Днепр Инжиниринг"
 */

const PROJECTS_DATA = {
  1: {
    title: 'Реализация функции ADS-B Out v.2 (CNS/ATM)',
    category: 'Модернизация',
    shortDescription: 'Внедрение современной системы наблюдения и связи для повышения безопасности полётов.',
    details: [
      'Оформлена конструкторская, эксплуатационная и сертификационная документация, программы и методики испытаний.',
      'Установлены самолетный ответчик, спутниковая навигационная система GPS/SBAS',
      'Проведены наземные и летные испытания',
      'Получен ДСТ ФАВТ, выпущен отдельный бюллетень для модернизации флота авиакомпании'
    ],
    images: [
      'assets/images/Projects/ADS-B_Out/track.png',
      'assets/images/Projects/ADS-B_Out/view.png',
      'assets/images/Projects/ADS-B_Out/block.png',
      'assets/images/Projects/ADS-B_Out/Display.png'
    ]
  },
  2: {
    title: 'Уточнение схемы окраски самолёта Ан-124-100',
    category: 'Модификация',
    shortDescription: 'Замена импортных ЛКМ на российские аналоги с полным инженерным сопровождением.',
    details: [
      'В КД и ТД введены новые импортозамещённые российские лакокрасочные материалы (ЛКМ)',
      'Проведены инженерные анализы',
      'Выпущены дополнения в ЭД',
      'Получено одобрение второстепенного изменения'
    ],
    images: [
      'assets/images/Projects/An-124-100_paint/An-124-100_paint.jpg',
      'assets/images/Projects/An-124-100_paint/dwg1.jpg',
      'assets/images/Projects/An-124-100_paint/dwg2.jpg'
    ]
  },
  3: {
    title: 'Модификации самолетов иностранного производства',
    category: 'Модификация',
    shortDescription: 'Комплекс второстепенных изменений для Boeing 737, RRJ-95, A330, Embraer и ATR 72, обеспечивающих дальнейшую эксплуатация.',
    details: [
      'Самолёт Boeing 737-400 с альтернативным датчиком обнаружения перегрева, устанавливаемым в зоне размещения Left Aft Air Condition Pack самолета – 1 второстепенное изменение',
      'Самолёт RRJ-95 с альтернативными кислородными масками для использования с переносными кислородными баллонами – 1 второстепенное изменение',
      'Самолёт А330 с альтернативными чехлами и мягкостями на креслах бизнес и экономического класса – 2 второстепенных изменения',
      'Самолёт Embraer ERJ 170-100 LR с альтернативными чистящими средствами от известковых отложений для кранов системы водоснабжения – 1 второстепенное изменение',
      'Самолёт Embraer ERJ 170-100 LR с альтернативным чистящим средством DOT 111/113 для кранов системы водоснабжения - 1 второстепенное изменение',
      'Самолёт RRJ-95 с альтернативными депрессорами уплотнений створок реверса двигателя SAM-146 – 1 второстепенное изменение',
      'Самолет ATR 72-212А с альтернативной защитой линзы нижнего проблескового маяка предотвращения столкновений – 1 второстепенное изменение'
    ],
    images: [
      'assets/images/Projects/mods/seats.jpg',
      'assets/images/Projects/mods/dwg.png',
      'assets/images/Projects/mods/oxygen.jpg',
      'assets/images/Projects/mods/wheel.png'
    ]
  },
  4: {
    title: 'Ремонты самолётов иностранного производства',
    category: 'Ремонт',
    shortDescription: 'Выполнение широкого спектра ремонтов различных узлов и агрегатов самолётов Airbus, Boeing, RRJ и Embraer.',
    details: [
      'Ремонт вмятин капота воздухозаборника А319',
      'Ремонт носовой части воздухозаборника A321',
      'Ремонт стойки жесткости ветрового стекла A319',
      'Ремонт композитной панели (Belly Fairing Access) A320',
      'Ремонт внутреннего кожуха и обтекателя разделителя двигателя CFM56-5B5/P, установленного на  самолет A319',
      'Ремонт правого предкрылка А319',
      'Ремонт роликовых балок (Roller Tracks) A319',
      'Ремонт обшивки внутренней панели правой нижней створки реверса двигателя',
      'Ремонт левой створки капота вентиляторного контура двигателя',
      'Ремонт царапины и вмятин обшивки хвостовой части фюзеляжа',
      'Ремонт предкрылка (SLAT #5) B737',
      'Ремонт обтекателя элерона B737',
      'Ремонт сопла SAM-146 RRJ-95',
      'Ремонт верхнего пояса усиливающего кольца выреза под шасси B737',
      'Ремонт внутренней обшивки створки реверса B737',
      'Ремонт коррозии на стенках балок центральной секции крыла B737',
      'Ремонт трещины балки пола по шп. STA 695 B737'
    ],
    images: [
      'assets/images/Projects/repairs/engine_pod.jpg',
      'assets/images/Projects/repairs/defect.png',
      'assets/images/Projects/repairs/roller.png'
    ]
  },
  5: {
    title: 'Замена низа шпангоута по причине трещин от гидроподъёмника',
    category: 'Ремонт',
    shortDescription: 'Замена низа 84 шпангоута самолёта Ан-124-100 по причине трещин от гидроподъёмника',
    details: [
      'Разработана ремонтная КД и КД на оснастку',
      'Разработана технология ремонта',
      'Проведены инженерные анализы',
      'Получено одобрение нетипового ремонта'
    ],
    images: [
      'assets/images/Projects/frame/frame1.jpg',
      'assets/images/Projects/frame/frame2.jpg',
      'assets/images/Projects/frame/frame3.jpg',
      'assets/images/Projects/frame/frame4.png'
    ]
  },
  6: {
    title: 'Ремонт носовой откидной части (НОЧ) фюзеляжа',
    category: 'Ремонт',
    shortDescription: 'Ремонт носовой откидной части (НОЧ) фюзеляжа самолёта Ан-124-100 после повреждения в результате приседания ПОШ',
    details: [
      'Выполнено исследование повреждения',
      'Разработана ремонтная КД',
      'Проведены инженерные анализы',
      'Получено одобрение нетипового ремонта'
    ],
    images: [
      'assets/images/Projects/nose_landing_gear_fairing/nose1.jpg',
      'assets/images/Projects/nose_landing_gear_fairing/nose2.jpg',
      'assets/images/Projects/nose_landing_gear_fairing/nose3.jpg'
    ]
  },
  7: {
    title: 'Перенос РК ООШ в обогреваемую зону',
    category: 'Модификация',
    shortDescription: 'Исключение проблемы нештатной работы основной опоры шасси (ООШ) при низких температурах. Выполнен перенос релейной коробки управления уборкой / выпуском ООШ в обогреваемую и герметичную зону фюзеляжа (подполье).',
    details: [
      'Выполнен анализ и поиск причин нештатной работы РК, пути их устранения',
      'Разработаны электрические схемы',
      'Выпущена КД (электрические схемы, монтажные схемы, на доработку планера)',
      'Проведены инженерные анализы',
      'Выпущены дополнения в ЭД',
      'Выполнен комплекс испытаний',
      'Получено одобрение второстепенного изменения',
      'Выпущен сервисный бюллетень',
    ],
    images: [
      'assets/images/Projects/main_landing_gear/main_landing_gear1.jpg',
      'assets/images/Projects/main_landing_gear/main_landing_gear2.jpg'
    ]
  },
  8: {
    title: 'Система дистанционного управления бортовыми кранами самолёта Ан-124-100',
    category: 'Модификация',
    shortDescription: 'Замена проводных пультов управления БПК на систему дистанционного управления',
    details: [
      'Выполнен поиск и подбор оборудования, разработано и согласовано ЧТЗ для поставщика и техническое предложение',
      'Разработаны электрические схемы',
      'Выпущена установочная КД и КД на жгуты',
      'Произведена закупка оборудования, изготовлен опытный образец системы, выполнен монтаж на борту ВС',
      'Проведены инженерные анализы',
      'Выпущены дополнения в ЭД',
      'Выполнен комплекс наземных испытаний на борту ВС, в т.ч. на ЭМС',
      'Получено одобрение второстепенного изменения',
      'Выпущены сервисные бюллетени БУ и БЭ',
      'В настоящее время проходит опытная эксплуатация на ВС'
    ],
    images: [
      'assets/images/Projects/onboard_valve_control/onboard_valve_control1.png',
      'assets/images/Projects/onboard_valve_control/onboard_valve_control2.png',
      'assets/images/Projects/onboard_valve_control/onboard_valve_control3.png',
      'assets/images/Projects/onboard_valve_control/onboard_valve_control3.png'
    ]
  },
  9: {
    title: '',
    category: '',
    shortDescription: '',
    details: [
      '',
      '',
      '',
      ''
    ],
    images: [
      'assets/images/Projects/',
      'assets/images/Projects/',
      'assets/images/Projects/'
    ]
  },
  10: {
    title: '',
    category: '',
    shortDescription: '',
    details: [
      '',
      '',
      '',
      ''
    ],
    images: [
      'assets/images/Projects/',
      'assets/images/Projects/',
      'assets/images/Projects/'
    ]
  },
  11: {
    title: '',
    category: '',
    shortDescription: '',
    details: [
      '',
      '',
      '',
      ''
    ],
    images: [
      'assets/images/Projects/',
      'assets/images/Projects/',
      'assets/images/Projects/'
    ]
  },
  12: {
    title: '',
    category: '',
    shortDescription: '',
    details: [
      '',
      '',
      '',
      ''
    ],
    images: [
      'assets/images/Projects/',
      'assets/images/Projects/',
      'assets/images/Projects/'
    ]
  },
  13: {
    title: '',
    category: '',
    shortDescription: '',
    details: [
      '',
      '',
      '',
      ''
    ],
    images: [
      'assets/images/Projects/',
      'assets/images/Projects/',
      'assets/images/Projects/'
    ]
  },
  14: {
    title: '',
    category: '',
    shortDescription: '',
    details: [
      '',
      '',
      '',
      ''
    ],
    images: [
      'assets/images/Projects/',
      'assets/images/Projects/',
      'assets/images/Projects/'
    ]
  },
  15: {
    title: '',
    category: '',
    shortDescription: '',
    details: [
      '',
      '',
      '',
      ''
    ],
    images: [
      'assets/images/Projects/',
      'assets/images/Projects/',
      'assets/images/Projects/'
    ]
  }
};

if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROJECTS_DATA;
}