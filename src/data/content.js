export const t = (obj, lang) => obj[lang] ?? obj.en

export const nav = {
  about:    { en: 'About',    ru: 'О себе'   },
  skills:   { en: 'Skills',   ru: 'Навыки'   },
  projects: { en: 'Projects', ru: 'Проекты'  },
  contact:  { en: 'Contact',  ru: 'Контакт'  },
}

export const hero = {
  badge: { en: 'Open to opportunities', ru: 'Открыт к предложениям' },
  phrases: {
    en: ['Frontend Developer', 'React Engineer', 'Full Stack Developer', 'UI Architect'],
    ru: ['Frontend-разработчик', 'React-инженер', 'Full Stack разработчик', 'UI-архитектор'],
  },
  desc: {
    en: 'I engineer high-performance web products that users love. 4 years of shipping scalable frontends — from concept to production.',
    ru: 'Создаю высоконагруженные веб-продукты, которыми приятно пользоваться. 4 года коммерческого опыта — от концепции до продакшена.',
  },
  cta1: { en: 'View My Work',  ru: 'Смотреть проекты' },
  cta2: { en: 'Let\'s Talk',   ru: 'Связаться'        },
  stats: [
    { num: '4+',  en: 'Years in Production', ru: 'Года в продакшене' },
    { num: '30+', en: 'Projects Shipped',    ru: 'Проектов сдано'   },
    { num: '15+', en: 'Technologies',        ru: 'Технологий'       },
  ],
}

export const about = {
  tag:    { en: 'About me',             ru: 'Обо мне'              },
  titleA: { en: 'Engineering',          ru: 'Создаю'               },
  titleB: { en: 'exceptional products.', ru: 'исключительные продукты.' },
  p1: {
    en: "I'm Yaroslav — a Frontend Engineer with 4+ years of commercial experience building scalable web applications. My core stack is React and TypeScript, and I obsess over clean architecture and smooth user experience.",
    ru: 'Я Ярослав — Frontend-инженер с 4+ годами коммерческого опыта разработки масштабируемых веб-приложений. Основной стек — React и TypeScript. Фокусируюсь на чистой архитектуре и безупречном пользовательском опыте.',
  },
  p2: {
    en: 'I move comfortably across the full stack: Node.js, REST APIs, databases, deployment. I can own a feature end-to-end — and I enjoy doing it.',
    ru: 'Свободно работаю по всему стеку: Node.js, REST API, базы данных, деплой. Готов вести фичу от технического задания до релиза — и мне это нравится.',
  },
  p3: {
    en: 'Code quality and performance are non-negotiable for me. I treat every codebase I touch as if it will be maintained for years — because it will.',
    ru: 'Качество кода и производительность — не опции, а стандарт. Я отношусь к каждому проекту так, как будто его будут сопровождать годами — потому что так и есть.',
  },
  cards: [
    { icon: '⚡', en: 'Performance-Driven',  ru: 'Производительность',   descEn: 'Core Web Vitals, lazy loading, optimized bundles.',      descRu: 'Core Web Vitals, lazy loading, оптимизированные сборки.' },
    { icon: '🎨', en: 'Pixel Precision',     ru: 'Точность до пикселя',  descEn: 'Design-to-code accuracy with fully responsive layouts.',  descRu: 'Точное воспроизведение макетов с адаптивной вёрсткой.'   },
    { icon: '🔧', en: 'Scalable Code',       ru: 'Масштабируемый код',   descEn: 'SOLID principles, clean architecture, easy to extend.',   descRu: 'SOLID, чистая архитектура, код который легко развивать.' },
    { icon: '🚀', en: 'Full Stack Capable',  ru: 'Full Stack',           descEn: 'End-to-end ownership from UI to infrastructure.',         descRu: 'Полный цикл разработки — от UI до инфраструктуры.'       },
  ],
}

export const skills = {
  tag:   { en: 'Tech Stack', ru: 'Технологии' },
  categories: [
    { icon: '⚛️', en: 'Frontend Core',   ru: 'Frontend Core',      tags: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Next.js'] },
    { icon: '🎨', en: 'Styling & UI',    ru: 'Стилизация и UI',    tags: ['Tailwind CSS', 'Sass/SCSS', 'Styled Components', 'Framer Motion', 'MUI', 'Ant Design'] },
    { icon: '🗄️', en: 'State & Data',   ru: 'Состояние и данные', tags: ['Redux Toolkit', 'Zustand', 'React Query', 'GraphQL', 'REST API', 'Axios'] },
    { icon: '🖥️', en: 'Backend',        ru: 'Backend',            tags: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Prisma'] },
    { icon: '🛠️', en: 'Tools & DevOps', ru: 'Инструменты',        tags: ['Git', 'Docker', 'Vite', 'Webpack', 'CI/CD', 'Vercel'] },
    { icon: '🧪', en: 'Testing',        ru: 'Тестирование',       tags: ['Jest', 'React Testing Library', 'Vitest', 'Cypress', 'Playwright'] },
  ],
}

export const projects = [
  {
    icon: '🛍️',
    en: 'LORE — Clothing Store',       ru: 'LORE — Магазин одежды',
    descEn: 'E-commerce platform for a timeless clothing brand. Product catalogue, cart, and seamless checkout experience.',
    descRu: 'E-commerce платформа для бренда одежды. Каталог товаров, корзина и удобный процесс оформления заказа.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/defenseops', live: 'https://lore-shop-eta.vercel.app/',
  },
  {
    icon: '📊',
    en: 'HR Data System',             ru: 'HR Data System',
    descEn: 'Enterprise BI platform that automates KPI and bonus calculations, cutting manual HR work across large organizations.',
    descRu: 'BI-платформа для автоматизации расчёта KPI и бонусов в крупных компаниях. Интеграция с Oracle, SAP, 1C.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Power BI'],
    github: 'https://github.com/defenseops', live: 'https://hr-data-system.vercel.app/',
  },
  {
    icon: '💬',
    en: 'Real-time Messenger',        ru: 'Мессенджер',
    descEn: 'WebSocket-based chat with rooms, file sharing, push notifications and end-to-end encryption.',
    descRu: 'Чат на WebSocket с комнатами, файлами, push-уведомлениями и E2E-шифрованием.',
    stack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com/defenseops', live: '#',
  },
  {
    icon: '🎯',
    en: 'Project Management SaaS',    ru: 'SaaS для управления задачами',
    descEn: 'Kanban board with drag-and-drop, team collaboration, role-based access, and time tracking.',
    descRu: 'Kanban с drag-and-drop, командным доступом, разграничением ролей и трекером времени.',
    stack: ['React', 'Redux', 'NestJS', 'PostgreSQL'],
    github: 'https://github.com/defenseops', live: '#',
  },
]

export const contact = {
  tag:        { en: 'Contact',                        ru: 'Контакт'                      },
  title1:     { en: "Let's build",                    ru: 'Создадим'                     },
  title2:     { en: 'something great.',               ru: 'что-то крутое.'               },
  desc:       { en: 'Available for full-time roles, freelance contracts, and interesting projects. If you have an idea — let\'s talk.', ru: 'Рассматриваю full-time позиции, фриланс-контракты и интересные проекты. Есть идея — давайте обсудим.' },
  emailLabel: { en: 'Reach me directly', ru: 'Написать напрямую' },
}
