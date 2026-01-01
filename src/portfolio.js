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
  'Outgoing and personable professional as well as an explorer. Teamwork-oriented, growth-focused, and performance-driven. Pursuing B.Tech in Computer Science Engineering with a passion for scalable web applications.',
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
    name: 'Ishwarya-BI',
    description:
      'It is a project which was worked upon during the internship for the Ishwarya-BI company website. It was developed using React.js , CSS, HTML, and JavaScript.',
    stack: ['React.js' , 'CSS', 'HTML',  'JavaScript'],
    sourceCode: 'https://github.com/Parag-kumbhar/Ishwarya-BI',
    livePreview: 'https://parag-kumbhar.github.io/Ishwarya-BI/',
  },
  {
    name: 'Voters Directory Project',
    description:
    'Built using React.js, NestJS,and PostgreSQL. Features include data fetching, updating, file uploads with Multer, and secure password hashing with bcrypt.',
    stack: ['React.js', 'NestJS','PostgreSQL'],
    sourceCode: 'https://github.com/Parag-kumbhar/Voters-Directory.git', // Update with your project repo
    livePreview: 'https://github.com',
  },
  {
    name: 'GYM Management System',
    description:
    'Developed a user-friendly web interface using HTML, CSS, PHP, and CodeIgniter 4 framework, by applying MVC pattern for enhanced performance.',
    stack: ['HTML', 'CSS', 'PHP', 'CodeIgniter 4'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  
]

const skills = [
  'JavaScript ',
  'HTML5',
  'CSS3',
  'Next.js',
  'Express.js',
  'PHP',
  
  'CodeIgniter',
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
