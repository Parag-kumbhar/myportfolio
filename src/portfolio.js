const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://linkedin.com/in/parag-kumbhar',
  title: 'PRK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Parag Kumbhar',
  role: 'Full Stack Engineer',
  description:
    'Outgoing and personable professional as well as an explorer. Teamwork-oriented, growth-focused, and performance-driven. B.Tech in Computer Science Engineering with a passion for scalable web applications.',
  resume: 'https://drive.google.com/file/d/1DWlZIAt1ovtFg_FDBRuX1kMX4xo9IlBB/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/parag-kumbhar',
    github: 'https://github.com/Parag-kumbhar',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Portfolio Website',
    description:
      'Developed a responsive personal portfolio using React.js to showcase skills, projects, and contact details. Focused on reusable components, clean UI, and smooth user experience. Deployed on GitHub Pages.',
    stack: ['HTML', 'CSS', 'ReactJS', 'JavaScript'],
    sourceCode: 'https://github.com/Parag-kumbhar/myportfolio.git',
    livePreview: 'https://parag-kumbhar.github.io/myportfolio/',
  },
  {
    name: 'Voters Directory Project',
    description:
      'Built using React.js, NestJS,and PostgreSQL. Features include data fetching, updating, file uploads with Multer, and secure password hashing with bcrypt.',
    stack: ['React.js', 'NestJS', 'PostgreSQL'],
    sourceCode: 'https://github.com/Parag-kumbhar/Voters-Directory.git', // Update with your project repo
    livePreview: 'https://github.com/Parag-kumbhar/Voters-Directory.git',
  },
  {
    name: 'Next.js Todo App',
    description:
      'A modern and responsive Todo application built using Next.js, TypeScript, and Tailwind CSS.This app allows users to add, track, filter, and manage tasks efficiently with a beautiful UI and dark/light theme support.',
    stack: ['NextJS', 'TypeScript', 'Tailwind CSS'],
    sourceCode: 'https://github.com/Parag-kumbhar/next-todo-app.git',
    livePreview: 'https://next-todo-app-seven-sable.vercel.app/',
  },



  {
    name: 'Ishwarya-BI',
    description:
      'It is a project which was worked upon during the internship for the Ishwarya-BI company website. It was developed using React.js , CSS, HTML, and JavaScript.',
    stack: ['React.js', 'CSS', 'HTML', 'JavaScript'],
    sourceCode: 'https://github.com/Parag-kumbhar/Ishwarya-BI.git',
    livePreview: 'https://parag-kumbhar.github.io/Ishwarya-BI/',
  },

]

const skills = [
  'JavaScript ',
  'HTML5',
  'CSS3',
  'Next.js',
  // 'Express.js',
  // 'TypeScript',

  // 'Python',
  'Java',
  'TypeScript',
  'React.js',
  'Node.js',
  'Bootstrap',
  'Tailwind CSS',
  'RESTful APIs',
  'Postman',
  // 'MongoDB',
  'PostgreSQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'paragkumbhar02@gmail.com',
}

export { header, about, projects, skills, contact }
