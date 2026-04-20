export const t = (obj, lang) => obj[lang] ?? obj.en

export const nav = {
  about:    { en: 'About',    ru: 'О себе'   },
  skills:   { en: 'Skills',   ru: 'Навыки'   },
  projects: { en: 'Projects', ru: 'Проекты'  },
  contact:  { en: 'Contact',  ru: 'Контакт'  },
}

export const hero = {
  badge: { en: 'Available for work', ru: 'Открыт к работе' },
  phrases: {
    en: ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Full Stack Ready'],
    ru: ['Frontend-разработчик', 'React-специалист', 'UI/UX-энтузиаст', 'Full Stack разработчик'],
  },
  desc: {
    en: 'I craft fast, beautiful, and scalable web experiences. 4 years turning ideas into pixel-perfect products.',
    ru: 'Создаю быстрые, красивые и масштабируемые веб-продукты. 4 года превращаю идеи в пиксельно-точные решения.',
  },
  cta1: { en: 'View Projects',  ru: 'Посмотреть работы' },
  cta2: { en: 'Get in Touch',   ru: 'Связаться'         },
  stats: [
    { num: '4+',  en: 'Years Experience', ru: 'Лет опыта'   },
    { num: '30+', en: 'Projects Done',    ru: 'Проектов'    },
    { num: '15+', en: 'Technologies',     ru: 'Технологий'  },
  ],
}

export const about = {
  tag:    { en: 'Who I am',          ru: 'Обо мне'          },
  titleA: { en: 'Passionate about',  ru: 'Увлечён'          },
  titleB: { en: 'building great web.', ru: 'созданием веба.' },
  p1: {
    en: "Hi, I'm Yaroslav — a Frontend Developer with 4+ years of experience building modern web applications. I specialize in the React ecosystem and love crafting smooth, accessible user interfaces.",
    ru: 'Привет, я Ярослав — Frontend-разработчик с 4+ годами опыта создания современных веб-приложений. Специализируюсь на экосистеме React и люблю создавать плавные, доступные интерфейсы.',
  },
  p2: {
    en: "Beyond the frontend, I'm confident with backend technologies: Node.js, Express, REST APIs, databases. I enjoy the full picture — from design system to deployment.",
    ru: 'Помимо фронта, уверенно работаю с backend: Node.js, Express, REST API, базы данных. Мне нравится видеть полную картину — от дизайн-системы до деплоя.',
  },
  p3: {
    en: 'I care deeply about code quality, performance, and developer experience. Every project I take on gets my full attention to detail.',
    ru: 'Мне важны качество кода, производительность и Developer Experience. В каждый проект вкладываю максимальное внимание к деталям.',
  },
  cards: [
    { icon: '⚡', en: 'Performance First', ru: 'Производительность', descEn: 'Optimized builds, lazy loading, fast load times.', descRu: 'Оптимизированные сборки, lazy loading, быстрая загрузка.' },
    { icon: '🎨', en: 'Pixel Perfect',     ru: 'Пиксель в пиксель',  descEn: 'Faithful to designs with responsive layouts.',          descRu: 'Точное воплощение дизайна с адаптивной вёрсткой.'    },
    { icon: '🔧', en: 'Clean Code',        ru: 'Чистый код',         descEn: 'Readable, maintainable, and well-structured.',          descRu: 'Читаемый, поддерживаемый и структурированный.'        },
    { icon: '🚀', en: 'Full Stack Ready',  ru: 'Full Stack',          descEn: 'Comfortable across the entire stack.',                  descRu: 'Уверенно работаю по всему стеку.'                     },
  ],
}

export const skills = {
  tag:   { en: 'What I work with', ru: 'С чем работаю' },
  categories: [
    { icon: '⚛️', en: 'Frontend Core',   ru: 'Основа Frontend',    tags: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Next.js'] },
    { icon: '🎨', en: 'Styling & UI',    ru: 'Стилизация и UI',    tags: ['Tailwind CSS', 'Sass/SCSS', 'Styled Components', 'Framer Motion', 'MUI', 'Ant Design'] },
    { icon: '🗄️', en: 'State & Data',   ru: 'Состояние и данные', tags: ['Redux Toolkit', 'Zustand', 'React Query', 'GraphQL', 'REST API', 'Axios'] },
    { icon: '🖥️', en: 'Backend',        ru: 'Backend',            tags: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Prisma'] },
    { icon: '🛠️', en: 'Tools & DevOps', ru: 'Инструменты',        tags: ['Git', 'Docker', 'Vite', 'Webpack', 'CI/CD', 'Vercel'] },
    { icon: '🧪', en: 'Testing',        ru: 'Тестирование',       tags: ['Jest', 'React Testing Library', 'Vitest', 'Cypress', 'Playwright'] },
  ],
}

export const projects = [
  {
    icon: '🛒',
    en: 'E-Commerce Platform',    ru: 'E-Commerce Платформа',
    descEn: 'Full-featured online store with cart, auth, payments integration and admin dashboard.',
    descRu: 'Полноценный интернет-магазин с корзиной, авторизацией, оплатой и админ-панелью.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    github: '#', live: '#',
  },
  {
    icon: '📊',
    en: 'Analytics Dashboard',   ru: 'Аналитический Дашборд',
    descEn: 'Real-time data visualization dashboard with charts, filters, and export functionality.',
    descRu: 'Дашборд с визуализацией данных в реальном времени, фильтрами и экспортом.',
    stack: ['Next.js', 'Recharts', 'Tailwind', 'REST API'],
    github: '#', live: '#',
  },
  {
    icon: '💬',
    en: 'Real-time Chat App',    ru: 'Чат в реальном времени',
    descEn: 'Messenger with rooms, file sharing, notifications, and end-to-end encryption.',
    descRu: 'Мессенджер с комнатами, файлами, уведомлениями и E2E-шифрованием.',
    stack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: '#', live: '#',
  },
  {
    icon: '🎯',
    en: 'Task Management SaaS',  ru: 'SaaS для задач',
    descEn: 'Kanban board with drag-and-drop, team collaboration, and time tracking.',
    descRu: 'Kanban-доска с drag-and-drop, командной работой и трекером времени.',
    stack: ['React', 'Redux', 'NestJS', 'PostgreSQL'],
    github: '#', live: '#',
  },
]

export const contact = {
  tag:        { en: 'Get in touch',             ru: 'На связи'               },
  title1:     { en: "Let's work",               ru: 'Давайте'                },
  title2:     { en: 'together',                 ru: 'вместе'                 },
  desc:       { en: 'Open to new opportunities, freelance projects, or just a friendly chat about tech.', ru: 'Открыт к новым возможностям, фриланс-проектам или просто пообщаться о технологиях.' },
  emailLabel: { en: 'Or drop me an email directly', ru: 'Или напишите напрямую' },
}
