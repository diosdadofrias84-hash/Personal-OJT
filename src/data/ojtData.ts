import { BlogPost, GalleryItem, SkillItem } from '../types';

export const INTERN_INFO = {
  name: 'Diosdado A. Frias',
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  institution: 'North Eastern Mindanao State University (NEMSU) - Main Campus',
  campusLocation: 'Tandag City, Surigao del Sur, Philippines',
  department: 'College of Information Technology Education (CITE)',
  email: 'diosdadofrias84@gmail.com',
  portraitImage: '/assets/aistudio/IMG_20261023_170656_4aee881f.png',
  trainingFocus: 'PC Hardware Maintenance, Web Layout & Graphic Design, and Software Systems',
  stats: [
    { label: 'OJT Hours Handled', value: '300+' },
    { label: 'PC Units Serviced', value: '18+' },
    { label: 'Design & Web Assets', value: '45+' },
    { label: 'Team Collaboration', value: '100%' },
  ],
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'pc-diagnostics-hardware-assembly',
    title: 'PC Diagnostics, System Assembly & Bench Repair',
    date: 'August 14, 2026',
    readTime: '5 min read',
    category: 'Hardware',
    summary:
      'Hands-on troubleshooting of desktop computer systems: diagnosing power supply rails, reseating memory modules, cable management inside mini-tower cases, and bench testing.',
    fullContent: [
      'During this week of my on-the-job training in August, our primary objective was restoring non-operational workstation towers and optimizing the internal airflow of the department computers.',
      'We began with systematic hardware diagnostics using a multi-step checklist: power supply unit (PSU) output verification, inspecting capacitor integrity on motherboards, and reseating DDR4 RAM sticks to resolve beep codes and boot failure loops.',
      'One specific challenge involved an intermittently rebooting workstation under high computational loads. After opening the chassis and conducting thermal analysis, we discovered hardened thermal paste on the CPU heatsink and a loose ATX 12V 4-pin CPU power lead. After repasting with high-grade thermal compound, reseating the cable harnesses, and securing internal routing with zip ties, the unit passed a 4-hour continuous stress test without throttling.',
      'This experience reinforced how crucial tactile hardware literacy is for a computer science graduate—understanding the physical silicon, power delivery, and cooling dynamics underlying the software we write.'
    ],
    keyLearnings: [
      'Systematic elimination protocol for diagnosing hardware boot failures',
      'Safe ESD (electrostatic discharge) precautions when working with delicate ICs',
      'Proper thermal compound application and heatsink tensioning',
      'Modular cable routing to maintain unobstructed chassis airflow'
    ],
    toolsUsed: ['Magnetic Precision Screwdrivers', 'Digital Multimeter', 'Thermal Paste', 'Anti-static Wristband', 'Air Blower / Compressed Air', 'MemTest86'],
    coverImage: '/assets/aistudio/received_1710197543608218_ca278208.jpeg',
    galleryImages: [
      '/assets/aistudio/received_1710197543608218_ca278208.jpeg'
    ],
    relatedGalleryIds: ['gal-hardware-1']
  },
  {
    id: 'graphic-layout-digital-branding',
    title: 'Digital Content Creation, Web Graphics & Product Layouts',
    date: 'August 24, 2026',
    readTime: '4 min read',
    category: 'Graphic Design',
    summary:
      'Designing structured visual assets, high-impact marketing banners, and e-commerce product layouts using Adobe Photoshop and Canva following strict brand guidelines.',
    fullContent: [
      'Web systems require visually engaging, balanced assets that direct user attention effectively. In this phase of the internship, I was tasked with crafting web banner collages and marketing graphic layouts for digital e-commerce displays.',
      'Using Photoshop and Canva, I composed multi-panel product visual layouts focusing on color harmony, typography contrast, visual hierarchy, and whitespace balance. I ensured all product showcase assets respected aspect ratios suited for both desktop wide banners (16:9) and mobile card grids (4:3 and 1:1).',
      'I also learned about modern web image optimization—exporting raster graphics in compressed WebP and PNG formats with appropriate color profiling (sRGB) to ensure fast load times without sacrificing crispness on high-density Retina displays.',
      'Balancing technical precision with graphic aesthetics gave me a deeper appreciation for modern UI/UX design standards.'
    ],
    keyLearnings: [
      'Composition techniques: rule of thirds, typographic hierarchy, and focal point alignment',
      'Color theory and contrast ratios for readable typography over photography',
      'Batch asset resizing and modern web compression formats (WebP/SVG)',
      'Collaboration with client requirements to translate brand identity into digital graphics'
    ],
    toolsUsed: ['Adobe Photoshop', 'Canva Pro', 'Figma', 'ImageOptim', 'Dual-Monitor Color Calibrated Display'],
    coverImage: '/assets/aistudio/received_1292837846133910_c6e6d609.jpeg',
    galleryImages: [
      '/assets/aistudio/received_1292837846133910_c6e6d609.jpeg',
      '/assets/aistudio/received_1086265614070850_c3c51488.jpeg'
    ],
    relatedGalleryIds: ['gal-design-1', 'gal-design-2']
  },
  {
    id: 'web-systems-pair-programming',
    title: 'Collaborative Web Systems, Frontend UI & Debugging',
    date: 'September 12, 2026',
    readTime: '6 min read',
    category: 'Web Development',
    summary:
      'Pair programming and code reviews in VS Code: building modular web interfaces, debugging responsive layout shifts, and implementing database connectivity.',
    fullContent: [
      'Software engineering in an active workplace is profoundly collaborative. In this module of our OJT in September, I teamed up with fellow computer science interns to build and refine dynamic web components.',
      'Working inside Visual Studio Code, we practiced pair programming where one developer drove the implementation while the other reviewed code syntax, edge cases, and accessibility attributes in real time. We resolved responsive CSS bugs where floating elements clipped behind navigation containers on tablet resolutions.',
      'We also connected frontend forms to backend processing routines using PHP and Laravel, ensuring data integrity through form validation, sanitization against SQL injection/XSS, and informative error banners for end-users.',
      'The feedback loops during peer code reviews significantly elevated my coding discipline and taught me how to write maintainable, self-documenting TypeScript and PHP code.'
    ],
    keyLearnings: [
      'Pair programming dynamics and productive code review practices',
      'Responsive design debugging using browser developer tools',
      'Client-side and server-side input validation workflows',
      'Version control branch synchronization with Git'
    ],
    toolsUsed: ['VS Code', 'PHP / Laravel', 'JavaScript / TypeScript', 'Chrome DevTools', 'Git & GitHub'],
    coverImage: '/assets/aistudio/received_1099670209074224_48b19df4.jpeg',
    galleryImages: [
      '/assets/aistudio/received_1099670209074224_48b19df4.jpeg',
      '/assets/aistudio/received_1619870186196632_5258cc10.jpeg',
      '/assets/aistudio/received_1548109412973305_8c00dc6f.jpeg'
    ],
    relatedGalleryIds: ['gal-code-1', 'gal-code-2', 'gal-code-3']
  },
  {
    id: 'teamwork-workspace-ergonomics',
    title: 'Team Collaboration, Standups & Workspace Infrastructure',
    date: 'September 24, 2026',
    readTime: '4 min read',
    category: 'Teamwork',
    summary:
      'Cultivating professional teamwork, daily standup routines, peer problem solving, and establishing clean workstation infrastructure for team productivity.',
    fullContent: [
      'Technical capability is only half the equation in professional software and IT environments—the other half is clear communication, mutual accountability, and a supportive team culture.',
      'Throughout September, our intern cohort conducted brief morning standup meetings: summarizing what we accomplished the previous day, identifying blockers in hardware repairs or web modules, and distributing tasks based on each intern’s strengths.',
      'We also reorganized the shared laboratory workspace: organizing testing benches, labeling network drops, establishing dedicated static-safe repair zones, and ensuring proper ergonomics for extended development sessions.',
      'The camaraderie and shared passion among fellow NEMSU interns made even complex debugging sessions engaging and educational.'
    ],
    keyLearnings: [
      'Agile standup communication and proactive blocker reporting',
      'Workplace safety, laboratory 5S organization, and cable hazard elimination',
      'Interpersonal empathy and mentoring peer interns through tricky technical obstacles',
      'Professional documentation habits for handover and evaluation'
    ],
    toolsUsed: ['Google Workspace', 'Trello / Task Boards', 'Shared LAN Storage', 'Ergonomic Workstations'],
    coverImage: '/assets/aistudio/received_1585961543154664_a600995c.jpeg',
    galleryImages: [
      '/assets/aistudio/received_1585961543154664_a600995c.jpeg',
      '/assets/aistudio/received_1746776719728437_c5a0821f.jpeg',
      '/assets/aistudio/received_2051475059070970_8cdd9120.jpeg',
      '/assets/aistudio/received_1590734699313929_19b2d57e.jpeg',
      '/assets/aistudio/received_2598137940695408_4cff0c99.jpeg',
      '/assets/aistudio/received_1038939032092450_5f68784f.jpeg'
    ],
    relatedGalleryIds: ['gal-team-1', 'gal-team-2', 'gal-team-3', 'gal-team-4', 'gal-team-5', 'gal-team-6']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // --- FIRST HALF: AUGUST 2026 ---
  {
    id: 'gal-hardware-1',
    title: 'PC Hardware Maintenance & Power Supply Benchwork',
    src: '/assets/aistudio/received_1710197543608218_ca278208.jpeg',
    category: 'Hardware Repair',
    date: 'August 8, 2026',
    alt: 'Diosdado A. Frias working with a screwdriver inside a desktop computer case repairing the power unit and cable harness.',
    caption: 'Component-level troubleshooting: securing chassis fasteners and routing internal ATX cables for optimized airflow.',
    details: 'Diagnosed intermittent power resets, verified PSU 12V and 5V rail tolerances, and re-routed wiring away from CPU heatsink blades.',
    relatedBlogId: 'pc-diagnostics-hardware-assembly'
  },
  {
    id: 'gal-code-1',
    title: 'Collaborative Web Development & Code Review in VS Code',
    src: '/assets/aistudio/received_1099670209074224_48b19df4.jpeg',
    category: 'Web & Coding',
    date: 'August 12, 2026',
    alt: 'Diosdado A. Frias typing code on a gaming keyboard in front of a monitor showing code editor while a teammate mentors and guides him.',
    caption: 'Pair programming session: refining frontend logic and verifying backend API endpoints with fellow CS intern.',
    details: 'Joint review of script execution order, responsive CSS media query breakpoints, and database query optimizations.',
    relatedBlogId: 'web-systems-pair-programming'
  },
  {
    id: 'gal-design-1',
    title: 'Digital Graphic Layout & E-Commerce Asset Design',
    src: '/assets/aistudio/received_1292837846133910_c6e6d609.jpeg',
    category: 'Design & Layout',
    date: 'August 17, 2026',
    alt: 'Diosdado A. Frias editing a multi-panel visual grid and design layout on a widescreen desktop monitor.',
    caption: 'Visual hierarchy & digital layout: designing balanced e-commerce product grids in design software.',
    details: 'Prepared responsive banner art, aligned typographic hierarchy, and optimized asset compression for web deployment.',
    relatedBlogId: 'graphic-layout-digital-branding'
  },
  {
    id: 'gal-design-2',
    title: 'Creative Content Editing & Graphic Composition',
    src: '/assets/aistudio/received_1086265614070850_c3c51488.jpeg',
    category: 'Design & Layout',
    date: 'August 21, 2026',
    alt: 'Diosdado sitting at computer station editing graphic assets with keyboard and mouse.',
    caption: 'Dual-monitor visual editing: refining digital graphic assets, typography margins, and contrast curves.',
    details: 'Focused on UI design elements, vector iconography, and layout balance for institutional and promotional web materials.',
    relatedBlogId: 'graphic-layout-digital-branding'
  },
  {
    id: 'gal-code-2',
    title: 'Web Interface Testing & Responsiveness Audit',
    src: '/assets/aistudio/received_1619870186196632_5258cc10.jpeg',
    category: 'Web & Coding',
    date: 'August 25, 2026',
    alt: 'Diosdado inspecting web layout on a laptop connected to an external keyboard on the work desk.',
    caption: 'Cross-browser testing: auditing viewport responsiveness, font rendering, and layout stability.',
    details: 'Tested web pages across standard resolutions, fixed text-overflow bugs, and validated interactive UI states.',
    relatedBlogId: 'web-systems-pair-programming'
  },
  {
    id: 'gal-code-3',
    title: 'Web Layout Typing & Layout Inspection',
    src: '/assets/aistudio/received_1548109412973305_8c00dc6f.jpeg',
    category: 'Web & Coding',
    date: 'August 28, 2026',
    alt: 'Diosdado working on the keyboard facing the desktop display with illuminated RGB casing nearby.',
    caption: 'Frontend development: implementing accessible forms and client-side interaction handlers.',
    details: 'Incorporated semantic HTML elements, accessible form inputs, and keyboard navigation focus states.',
    relatedBlogId: 'web-systems-pair-programming'
  },
  {
    id: 'gal-design-3',
    title: 'Digital Media Station & Interface Work',
    src: '/assets/aistudio/received_1379085876882865_6dcfde52.jpeg',
    category: 'Design & Layout',
    date: 'August 31, 2026',
    alt: 'Diosdado wearing headset working intently in front of the monitor next to an illuminated desktop tower.',
    caption: 'Multimedia editing station: preparing web assets and audio/video media components for deployment.',
    details: 'Monitored layout alignment, edited visual assets, and ensured asset consistency across project modules.',
    relatedBlogId: 'graphic-layout-digital-branding'
  },

  // --- SECOND HALF: SEPTEMBER 2026 ---
  {
    id: 'gal-team-1',
    title: 'OJT Cohort Team Workstation Collaboration',
    src: '/assets/aistudio/received_1585961543154664_a600995c.jpeg',
    category: 'Team & Workspace',
    date: 'September 4, 2026',
    alt: 'Diosdado A. Frias in purple NEMSU uniform smiling in a group selfie with two fellow interns around computer workstation.',
    caption: 'Team synergy: Diosdado and fellow NEMSU computer science interns collaborating at the central workstation.',
    details: 'Discussed project milestones, divided technical tasks, and shared insights on debugging complex web features.',
    relatedBlogId: 'teamwork-workspace-ergonomics'
  },
  {
    id: 'gal-team-2',
    title: 'Thumbs-Up at the Workstation with Colleague',
    src: '/assets/aistudio/received_1746776719728437_c5a0821f.jpeg',
    category: 'Team & Workspace',
    date: 'September 8, 2026',
    alt: 'Diosdado giving a thumbs up gesture with his teammate beside him in the office workstation.',
    caption: 'Milestone celebration: successfully completing a full PC reassembly and software deployment sprint.',
    details: 'Completed comprehensive hardware maintenance and system reinstallations ahead of schedule.',
    relatedBlogId: 'teamwork-workspace-ergonomics'
  },
  {
    id: 'gal-team-3',
    title: 'Active Intern Hub & Group Collaborative Space',
    src: '/assets/aistudio/received_2051475059070970_8cdd9120.jpeg',
    category: 'Team & Workspace',
    date: 'September 13, 2026',
    alt: 'Wide shot of the intern training room with interns working at computer benches with multiple screens.',
    caption: 'Collaborative environment: hands-on laboratory space where hardware repairs and web engineering coincide.',
    details: 'Demonstrates the dynamic, energetic atmosphere of our on-the-job training setting.',
    relatedBlogId: 'teamwork-workspace-ergonomics'
  },
  {
    id: 'gal-team-4',
    title: 'Peer Review & Pair Problem Solving',
    src: '/assets/aistudio/received_1590734699313929_19b2d57e.jpeg',
    category: 'Team & Workspace',
    date: 'September 17, 2026',
    alt: 'Diosdado and fellow intern smiling together at the desk during workstation review.',
    caption: 'Peer learning: reviewing daily project logs and preparing documentation for training supervisor.',
    details: 'Shared code insights and verified technical documentation accuracy for OJT submission.',
    relatedBlogId: 'teamwork-workspace-ergonomics'
  },
  {
    id: 'gal-team-5',
    title: 'Cohort Team Spirit & Workspace Atmosphere',
    src: '/assets/aistudio/received_2598137940695408_4cff0c99.jpeg',
    category: 'Team & Workspace',
    date: 'September 21, 2026',
    alt: 'Diosdado and colleagues smiling together in the training workspace.',
    caption: 'Team cohesion: fostering positive morale and strong communication throughout demanding technical projects.',
    details: 'Demonstrates professional camaraderie and collaborative problem-solving among student interns.',
    relatedBlogId: 'teamwork-workspace-ergonomics'
  },
  {
    id: 'gal-team-6',
    title: 'Workstation Setup & Daily Collaboration',
    src: '/assets/aistudio/received_1038939032092450_5f68784f.jpeg',
    category: 'Team & Workspace',
    date: 'September 25, 2026',
    alt: 'Diosdado sitting at desk beside teammate with keyboard and computer setup.',
    caption: 'Daily operational station: managing technical support inquiries and maintaining laboratory uptime.',
    details: 'Maintained day-to-day readiness of systems for department operations.',
    relatedBlogId: 'teamwork-workspace-ergonomics'
  },
  {
    id: 'gal-profile',
    title: 'Diosdado A. Frias - Official Intern Profile & Induction',
    src: '/assets/aistudio/IMG_20261023_170656_4aee881f.png',
    category: 'Team & Workspace',
    date: 'September 28, 2026',
    alt: 'Diosdado A. Frias official formal portrait in suit and tie for NEMSU OJT graduation and portfolio completion.',
    caption: 'Final OJT portfolio consolidation & supervisor evaluation readiness at NEMSU Main Campus.',
    details: 'Official verification portrait and credential verification for completion of required On-the-Job Training hours.',
    relatedBlogId: 'teamwork-workspace-ergonomics'
  }
];

export const TECH_SKILLS: SkillItem[] = [
  // Programming
  { name: 'Python', category: 'Programming', proficiency: 'Advanced', description: 'Scripting, algorithm development, data handling, and automation.' },
  { name: 'React & TypeScript', category: 'Programming', proficiency: 'Proficient', description: 'Component-driven frontend architectures, hooks, state management, and accessible UI.' },
  { name: 'PHP & Laravel', category: 'Programming', proficiency: 'Intermediate', description: 'Server-side routing, MVC architecture, Eloquent ORM, and database operations.' },
  { name: 'HTML5 & CSS3 / Tailwind', category: 'Programming', proficiency: 'Advanced', description: 'Semantic, responsive layout engineering with WCAG 2.1 AA accessibility standards.' },
  
  // Design
  { name: 'Adobe Photoshop', category: 'Design', proficiency: 'Proficient', description: 'Layer composition, photo manipulation, web banners, and digital asset preparation.' },
  { name: 'Canva Pro', category: 'Design', proficiency: 'Advanced', description: 'Rapid visual mockups, promotional social graphics, and presentation decks.' },
  { name: 'Figma', category: 'Design', proficiency: 'Intermediate', description: 'UI wireframing, component libraries, and interactive prototype testing.' },

  // Hardware
  { name: 'PC Assembly & Disassembly', category: 'Hardware', proficiency: 'Advanced', description: 'Complete system builds, CPU mounting, heatsink paste application, and cable routing.' },
  { name: 'Component Troubleshooting', category: 'Hardware', proficiency: 'Advanced', description: 'Diagnosing RAM faults, GPU artifacts, power supply rail drops, and drive health.' },
  { name: 'OS Deployment & BIOS Config', category: 'Hardware', proficiency: 'Advanced', description: 'Boot configuration, UEFI settings, clean operating system installation, and driver packages.' },
  { name: 'Network Station Setup', category: 'Hardware', proficiency: 'Intermediate', description: 'LAN cable crimping, RJ-45 termination, switch patch connections, and IP addressing.' },

  // Tools
  { name: 'VS Code', category: 'Tools', proficiency: 'Advanced', description: 'Primary IDE for web development, integrated debugging, and extensions.' },
  { name: 'Git & GitHub', category: 'Tools', proficiency: 'Intermediate', description: 'Version control, repository management, commit tracking, and team branching.' },
  { name: 'Hardware Toolsets', category: 'Tools', proficiency: 'Advanced', description: 'Precision magnetic screwdrivers, digital multimeters, thermal sensors, and air blowers.' },
  { name: 'Google Workspace', category: 'Tools', proficiency: 'Advanced', description: 'Collaborative docs, spreadsheets, forms administration, and documentation.' }
];
