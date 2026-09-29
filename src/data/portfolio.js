// Single source of truth. All content comes from the resume.
export const profile = {
  name: 'Aryan Vikram Singh',
  title: 'Aspiring Full Stack Developer',
  email: 'aryanvikramsingh90@gmail.com',
  phone: '+91 9026622694',
  phoneHref: '+919026622694',
  location: 'Lucknow, Uttar Pradesh',
  intro:
    'BCA graduate building full-stack web apps with React.js, Node.js, Express.js and MySQL, with hands-on experience running project operations end to end.',
  languages: ['English', 'Hindi'],
}

export const navLinks = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' }, { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' }, { id: 'contact', label: 'Contact' },
]

export const about = [
  'I am an aspiring Full Stack Developer with a solid academic foundation in BCA and technical proficiency in Java, Python, React.js, Node.js and MySQL.',
  'I bring professional experience in solar project operations, where I manage the project lifecycle from site feasibility to vendor documentation and financial processing. That work has sharpened my ability to handle complex workflows, keep data accurate and manage internal portals.',
  'Now I want to apply my technical skills and process-driven mindset in a software development role, building robust and scalable web applications.',
]

export const skills = [
  { category: 'Languages', tone: 'bg-lavender', items: ['JavaScript', 'Python', 'Java (Basic)'] },
  { category: 'Frontend', tone: 'bg-powder', items: ['React.js', 'HTML5', 'CSS3'] },
  { category: 'Backend', tone: 'bg-mint', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { category: 'Database', tone: 'bg-peach', items: ['MySQL'] },
  { category: 'Tools', tone: 'bg-blush', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  { category: 'Concepts', tone: 'bg-lavender', items: ['OOP', 'DBMS', 'CRUD', 'API Integration'] },
]

export const experience = [
  {
    role: 'Operations & Project Coordinator',
    company: 'Xenus Infosolution Pvt Ltd',
    location: 'Lucknow',
    period: 'July 2026 – Present',
    points: [
      'Managed end-to-end solar project workflows via internal portals, from site feasibility to final project closure.',
      'Validated critical documentation, vendor agreements, and handled bank loan and subsidy processing.',
      'Ensured data accuracy and operational compliance to meet monthly project installation targets.',
    ],
  },
]

export const projects = [
  {
    title: 'College ERP Management System',
    tone: 'bg-lavender/60',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    summary: 'A full-stack College ERP with separate Admin, Teacher and Student portals.',
    points: [
      'Role-based authentication across three portals',
      'Attendance, marks, subjects and assignment management',
      'REST APIs connecting the React front end to MySQL',
      'Core logic and workflows designed and built by me, with AI-assisted tools used for debugging, productivity and documentation support',
    ],
  },
  {
    title: 'Online Examination System',
    tone: 'bg-powder/60',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    summary: 'A full-stack platform for conducting MCQ exams online.',
    points: [
      'MCQ exams with a timer and auto-evaluation',
      'Instant result generation',
      'Real-time proctoring and live monitoring',
      'Admin-controlled student management',
    ],
  },
]

export const education = [
  { degree: 'Bachelor of Computer Applications (BCA)', years: '2023–2026', school: 'City College of Management', place: 'Lucknow, Uttar Pradesh' },
  { degree: '12th (Intermediate)', years: '2023', school: 'New Way School', place: 'Lucknow, Uttar Pradesh' },
  { degree: '10th (High School)', years: '2021', school: 'New Way School', place: 'Lucknow, Uttar Pradesh' },
]
