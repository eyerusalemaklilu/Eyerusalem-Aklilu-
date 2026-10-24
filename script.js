/* ============ EDIT HERE ============ */
const CONFIG = {
  name: "Eyerusalem Aklilu",
  email: "aklilueyerusalem05@gmail.com",
  phone: "+251 910 744 261",
  location: "Addis Ababa, Ethiopia",
  showTestimonials: false,                 // set to true once you have real client testimonials
  keabUrl: "",                             // replace with the Keab Digital Solution page address
  links: {                                 // add your profile addresses; empty ones are hidden
    github: "https://github.com/eyerusalemaklilu",  // your personal GitHub profile address
    linkedin: "",   // paste your LinkedIn profile address here (until then the icon opens linkedin.com)
    telegram: ""
  },
  media: { hero: "", about: "" }     // optional here; the same photos are set in IMAGES below
};

/* ============ YOUR IMAGES (fill these in later) ============
   Every slot below is already linked to its place on the page. When an image is ready, put its file path
   (an image published together with the page, for example "images/webpage-home.jpg") or a data: address between the quotes.
   Empty slots keep their placeholder. Web links to images on other sites do not load inside this page. */
const IMAGES = {
  "hero-photo": "images/hero-photo.webp",          // hero portrait (a transparent PNG of you works best)
  "about-photo": "images/about-photo.webp",         // round photo in the green About section (uses the hero photo if empty)
  "testimonial-1": "", "testimonial-2": "", "testimonial-3": "",   // client photos in Testimonials

  "webpage-figma": "images/webpage-figma.webp",   // Etalem Figma design
  "webpage-cooking": "images/webpage-cooking.webp",
  "webpage-phone-cooking": "images/webpage-phone-cooking.webp",
  "webpage-price": "images/webpage-price.webp",
  "webpage-phone-price": "images/webpage-phone-price.webp",
  "webpage-catering": "images/webpage-catering.webp",
  "webpage-phone-catering": "images/webpage-phone-catering.webp",
  "webpage-blog": "images/webpage-blog.webp",
  "webpage-article": "images/webpage-article.webp",
  "webpage-cleaning": "images/webpage-cleaning.webp",
  "webpage-phone-cleaning": "images/webpage-phone-cleaning.webp",
  "webpage-cprice": "images/webpage-cprice.webp",
  "webpage-phone-cprice": "images/webpage-phone-cprice.webp",
  "webpage-phone-babysit": "images/webpage-phone-babysit.webp",
  "webpage-babysit": "images/webpage-babysit.webp",
  "webpage-bprice": "images/webpage-bprice.webp",
  "webpage-logo": "images/webpage-logo.webp",        // company logo for the live-webpage button on the detail page
  
  "webpage-home": "images/webpage-home.webp",
  "webpage-phone": "images/webpage-phone.webp",
  "webpage-why": "images/webpage-why.webp",
  "webpage-booking": "images/webpage-booking.webp",
  "webpage-phone-booking": "images/webpage-phone-booking.webp",
  "webpage-services": "images/webpage-services.webp",
  "webpage-phone-services": "images/webpage-phone-services.webp",
  "webpage-reviews": "images/webpage-reviews.webp",
  "webpage-phone-reviews": "images/webpage-phone-reviews.webp",
  "webapp-logo": "images/webapp-logo.svg",
  "webapp-home": "images/webapp-home.webp",
  "webapp-phone": "images/webapp-phone.webp",
  "webapp-listing": "images/webapp-listing.webp",
  "webapp-contact": "images/webapp-contact.webp",
  "webapp-phone-listing": "images/webapp-phone-listing.webp",
  "webapp-phone-contact": "images/webapp-phone-contact.webp",
  "cms-news": "images/cms-news.webp",
  "cms-phone-hero": "images/cms-phone-hero.webp",
  "cms-phone-focus": "images/cms-phone-focus.webp",
  "cms-phone-handbook": "images/cms-phone-handbook.webp",
  "cms-phone-work": "images/cms-phone-work.webp",
  "cms-phone-news": "images/cms-phone-news.webp",
  "cms-logo": "images/cms-logo.webp",
  "cms-home": "images/cms-home.webp",
  "cms-about": "images/cms-about.webp",
  "cms-work": "images/cms-work.webp",
  "cms-board": "images/cms-board.webp",
  "worktool-logo": "images/worktool-logo.webp",
  "worktool-myboard": "images/worktool-myboard.webp",
  "worktool-weekly": "images/worktool-weekly.webp",
  "worktool-meetings": "images/worktool-meetings.webp",
  "worktool-calendar": "images/worktool-calendar.webp",
  "worktool-leadership": "images/worktool-leadership.webp",
  "worktool-secretariat": "images/worktool-secretariat.webp",
  "worktool-advocacy": "images/worktool-advocacy.webp",
  "worktool-media": "images/worktool-media.webp",
  "worktool-finance": "images/worktool-finance.webp",
  "worktool-projects": "images/worktool-projects.webp",
  "worktool-training": "images/worktool-training.webp",
  "worktool-admin": "images/worktool-admin.webp",
  "worktool-board": "images/worktool-board.webp",
  "worktool-progress": "images/worktool-progress.webp",
  "worktool-phone": "images/worktool-phone.webp",
  "worktool-phone-stats": "images/worktool-phone-stats.webp",
  "worktool-phone-meet": "images/worktool-phone-meet.webp",
  "worktool-phone-tasks": "images/worktool-phone-tasks.webp",
  "worktool-phone-chart": "images/worktool-phone-chart.webp",
  "worktool-phone-goals": "images/worktool-phone-goals.webp"
};

/* Skills that scroll in the yellow band. The first four are your major tasks. */
const MAJOR_SKILLS = ["Website & Web Application Development","Responsive Web Design","CMS Management & Integration","Task Tracking Tool Development"];
const OTHER_SKILLS = ["HTML","CSS","JavaScript","WordPress","Webflow","Figma","UI/UX Design","Supabase","Website Testing & QA","GitHub","GitHub Actions","CI/CD Fundamentals","Jira","Slack","Google Workspace"];

/* The four folders. For each project:
   github = the repository address, live = the company's live webpage, company = { name, logo } (logo is an image path or data: address).
   In each gallery item, put a file path or data: address in src to replace the placeholder.
   device is "desktop", "tablet", "mobile" or "figma". The first three gallery items fill the three cards on the folder. */
const PROJECTS = [
  { slug:"webpage", tag:"Website + Web App", title:"Etalem", cap:"Premium maid service and domestic help",
    svcTitle:"Design and Content Management", svcBlurb:"Clean, modern page design in Figma, plus easy-to-manage content so you can keep your site up to date without touching code.",
    blurb:"A high-conversion web application for a premium maid service in Addis Ababa, with a trust-building booking flow for cooking, cleaning and babysitting on every device.",
    desc:"Etalem is a premium maid service and domestic help brand in Addis Ababa, and its site is a full web application, not just a page. I took it from the Figma design to launch in Webflow: I designed and developed the Etalem page, the cooking, cleaning and babysitting service pages and the blog, and I maintain them. Every page is built to convert, with clear service stories, pricing and trust signals that help visitors feel confident booking through the step-by-step request flow. For the blog I also integrated a CMS and made the images in Canva so they fit each page, and I keep the tests and CI/CD (GitHub Actions) in GitHub. Built at GoodayOn, from May 2026.",
    skills:["Web application development", "Figma to launch", "High-conversion design", "Service booking flow", "Trust-building UX", "Blog design and CMS integration", "Responsive web design", "Testing and CI/CD"],
    tools:["Figma", "Webflow", "HTML", "CSS", "JavaScript", "CMS", "Canva", "GitHub", "GitHub Actions", "GitHub Pages"],
    contrib:["Designed the Etalem web application in Figma and built it in Webflow through to launch", "Built the cooking, cleaning and babysitting service pages", "Designed and developed the blog page and integrated a CMS", "Made the blog images in Canva so they fit the pages", "Made the pages high-conversion, with a trust-building booking flow", "Keep tests and CI/CD (GitHub Actions) in GitHub", "Maintain and update the site after launch"],
    detail:{ brief:"Etalem needed a web application, not just a page, that explains its service, builds trust and makes booking simple.", built:"I designed it in Figma and developed it as a responsive web app: a high-conversion Etalem page, three service pages and a CMS-driven blog, with a step-by-step request flow.", result:"A trust-building booking experience built to turn visitors into service requests, tested and shipped through CI/CD, and kept up to date as the service grows." },
    github:"https://github.com/eyerusalemaklilu", live:"https://gooday.io/etalem", liveLabel:"Live web app",
    links:[{label:"Cooking service",href:"https://gooday.io/etalem/cooking-service"},{label:"Cleaning service",href:"https://gooday.io/etalem/cleaning-service"},{label:"Babysitting service",href:"https://gooday.io/etalem/babysitting"},{label:"Blog",href:"https://gooday.io/blog"}],
    company:{ name:"Etalem", logo:"" },
    gallery:[{label:"Home page",device:"desktop",img:"webpage-home",src:"",pos:"78% top"},{label:"Phone home",device:"mobile",img:"webpage-phone",src:""},{label:"Why Etalem",device:"mobile",img:"webpage-why",src:""},{label:"Booking steps",device:"desktop",img:"webpage-booking",src:"",nocard:true},{label:"Booking on phone",device:"mobile",img:"webpage-phone-booking",src:"",nocard:true},{label:"What sets us apart",device:"desktop",img:"webpage-services",src:"",nocard:true},{label:"Services on phone",device:"mobile",img:"webpage-phone-services",src:"",nocard:true},{label:"Customer reviews",device:"desktop",img:"webpage-reviews",src:"",nocard:true},{label:"Reviews on phone",device:"mobile",img:"webpage-phone-reviews",src:"",nocard:true},{label:"Cooking service",device:"desktop",img:"webpage-cooking",src:"",nocard:true},{label:"Cooking on phone",device:"mobile",img:"webpage-phone-cooking",src:"",nocard:true},{label:"Cooking price guide",device:"desktop",img:"webpage-price",src:"",nocard:true},{label:"Cooking prices on phone",device:"mobile",img:"webpage-phone-price",src:"",nocard:true},{label:"Catering page",device:"desktop",img:"webpage-catering",src:"",nocard:true},{label:"Catering on phone",device:"mobile",img:"webpage-phone-catering",src:"",nocard:true},{label:"Cleaning service",device:"desktop",img:"webpage-cleaning",src:"",nocard:true},{label:"Cleaning on phone",device:"mobile",img:"webpage-phone-cleaning",src:"",nocard:true},{label:"Cleaning price guide",device:"desktop",img:"webpage-cprice",src:"",nocard:true},{label:"Cleaning prices on phone",device:"mobile",img:"webpage-phone-cprice",src:"",nocard:true},{label:"Babysitting service",device:"desktop",img:"webpage-babysit",src:"",nocard:true},{label:"Babysitting on phone",device:"mobile",img:"webpage-phone-babysit",src:"",nocard:true},{label:"Babysitting price guide",device:"desktop",img:"webpage-bprice",src:"",nocard:true},{label:"Blog",device:"desktop",img:"webpage-blog",src:"",nocard:true},{label:"Blog article",device:"desktop",img:"webpage-article",src:"",nocard:true},{label:"Figma design",device:"figma",img:"webpage-figma",src:"",nocard:true}] },
  { slug:"webapp", tag:"Web App + CMS", title:"Service Provider Directory", cap:"Find rated maintenance and renovation pros",
    svcTitle:"Development", svcBlurb:"Responsive, high-converting websites and web applications, built from design to launch to work smoothly on every device.",
    blurb:"A responsive web app, built in Webflow, that helps customers find and contact highly rated maintenance and renovation professionals, with provider details managed through a CMS.",
    desc:"A responsive web application for GoodayOn that helps customers find and contact highly rated maintenance and renovation professionals across devices, from plumbing and electrical to carpentry and finishing work. I took it from design to publication in Webflow: I designed the page, arranged the content, built it with HTML, CSS and JavaScript, and made the images in Canva. I integrated a CMS so each provider's photo, rating, services and customers served display dynamically and updates stay simple, and I tested the page. A step-by-step contact flow asks which service is needed before a provider is contacted, and a terms notice sets expectations up front. Built from July to September 2026.",
    skills:["Web application development", "Webflow design and development", "CMS management and integration", "Dynamic content display", "Content arrangement", "Responsive web design", "Testing", "Design to publication"],
    tools:["Webflow", "CMS", "HTML", "CSS", "JavaScript", "Canva"],
    contrib:["Designed the web page and took it through to publication", "Built it in Webflow with HTML, CSS and JavaScript", "Integrated a CMS so provider information displays dynamically", "Arranged the content: service categories, provider cards and the contact flow", "Made the images in Canva", "Tested the page", "Made content updates simple for the team"],
    detail:{ brief:"Customers needed an easy way to find and contact highly rated maintenance and renovation professionals.", built:"I designed the page and built it in Webflow, arranged the content by service category, and connected a CMS so each provider's details display dynamically.", result:"Provider listings are easy to update, and customers can find and contact professionals on any device." },
    github:"https://github.com/eyerusalemaklilu", live:"https://gooday.io/home-repairs", liveLabel:"Live web app", company:{ name:"GoodayOn", logo:"" },
    gallery:[{label:"Home page",device:"desktop",img:"webapp-home",src:""},{label:"Phone home",device:"mobile",img:"webapp-phone",src:""},{label:"Provider listing",device:"desktop",img:"webapp-listing",src:""},{label:"Contact a provider",device:"desktop",img:"webapp-contact",src:"",nocard:true},{label:"Providers on phone",device:"mobile",img:"webapp-phone-listing",src:"",nocard:true},{label:"Contact on phone",device:"mobile",img:"webapp-phone-contact",src:"",nocard:true}] },
  { slug:"cms", tag:"WordPress Website", title:"EHA Website", cap:"Ethiopian Environmental Health Association",
    svcTitle:"CMS and Data Integration", svcBlurb:"CMS-powered pages with content and data connected to the front end, so updates stay simple and information displays dynamically.",
    blurb:"Responsive WordPress pages, taken from design to development, that communicate the association's mission, services and goals, with the CMS, themes and plugins managed and QA testing and updates ongoing.",
    desc:"The Ethiopian Environmental Health Association is a non-profit membership organization, founded in 2012, that brings together environmental health practitioners, academics and researchers across Ethiopia. As its WordPress website developer, I took the site from design to development: I designed and developed responsive pages, including Home, About, Projects and E-Learning, that clearly communicate its mission, services and goals, and I managed the WordPress CMS with its themes and plugins, customising it with HTML, CSS and JavaScript. I also ran QA testing and ongoing page updates to keep the site working, accurate and responsive. September 2025 to September 2026.",
    skills:["WordPress development","WordPress CMS management","Themes and plugins","Design to development","HTML, CSS and JavaScript","Responsive web design","QA testing","Ongoing page updates"],
    tools:["WordPress","CMS management","Themes","Plugins","HTML","CSS","JavaScript"],
    contrib:["Took the site from design to development in WordPress","Designed and developed responsive pages","Managed the WordPress CMS, themes and plugins","Wrote custom HTML, CSS and JavaScript","Communicated the mission, services and goals clearly","QA testing for functionality, accuracy and responsiveness","Ongoing page updates"],
    detail:{ brief:"The association needed a website that clearly explains its mission, services and goals.", built:"I designed the pages and developed them in WordPress, managing the CMS, themes and plugins and adding HTML, CSS and JavaScript where needed, then tested and updated them.", result:"A responsive, accurate site that stays up to date." },
    github:"", live:"https://eehpa.org", company:{ name:"Ethiopian Environmental Health Association", logo:"" },
    gallery:[{label:"Home page",device:"desktop",img:"cms-home",src:"",pos:"60% top"},{label:"Phone home",device:"mobile",img:"cms-phone-hero",src:"",ar:"3/4"},{label:"Focus areas on phone",device:"mobile",img:"cms-phone-focus",src:"",ar:"3/4",nocard:true},{label:"About us",device:"desktop",img:"cms-about",src:"",pos:"73% top"},{label:"Board members",device:"desktop",img:"cms-board",src:"",nocard:true},{label:"Latest work",device:"desktop",img:"cms-work",src:"",pos:"25% top"},{label:"Latest work on phone",device:"mobile",img:"cms-phone-work",src:"",ar:"3/4",nocard:true},{label:"Handbook on phone",device:"mobile",img:"cms-phone-handbook",src:"",ar:"3/4",nocard:true},{label:"News page",device:"desktop",img:"cms-news",src:"",nocard:true},{label:"News on phone",device:"mobile",img:"cms-phone-news",src:"",ar:"3/4",nocard:true}] },
  { slug:"worktool", tag:"Work Tool", title:"ENYN Task Tracker", cap:"Ethiopian Nile Youth Network",
    svcTitle:"Task Tracking Tool Development", svcBlurb:"Custom work management tools with team boards, deadlines and progress tracking, with Supabase database integration to keep teams organized.",
    blurb:"A task-tracking web app for the Ethiopian Nile Youth Network that manages responsibilities, weekly goals, meetings and minutes, deadlines and project progress, with Supabase storage and automated reminders.",
    desc:"I designed, developed and tested a task-tracking web app for the Ethiopian Nile Youth Network (ENYN), where I serve as General Secretary. It gives the team a main board and a personal board, weekly goals, meetings and events with replies and minutes, a calendar that shows overdue tasks in red, and a work area for each team (Leadership, Secretariat, Advocacy, Media, Finance, Projects and Training), plus an admin board with team progress and CSV export, and a light and dark mode. Supabase handles data and file storage, and automated reminders and notifications keep members informed, improve collaboration and reduce repetitive tasks. It runs on GitHub Pages. Built from August to October 2026.",
    skills:["Task tracking tool development", "Dashboard and UI design", "Supabase integration", "Automated reminders and notifications", "Meetings, minutes and calendar features", "Testing", "Team coordination"],
    tools:["Supabase", "GitHub", "GitHub Pages"],
    contrib:["Designed, developed and tested the tool", "Built the main and personal boards, weekly goals, meetings with minutes, and the calendar", "Created a work area for each team, plus an admin board with progress and CSV export", "Integrated Supabase for data and file storage", "Set up automated reminders and notifications", "Use it to manage the team's responsibilities, deadlines and progress"],
    detail:{ brief:"The team needed to manage responsibilities, weekly goals and deadlines in one place.", built:"I built the tracker as a web app on Supabase, with boards, weekly goals, meetings and minutes, a calendar and a work area for each team, plus automated reminders so members are told about deadlines and updates.", result:"Members stay informed, collaborate better and spend less time on repetitive follow-ups." },
    github:"https://github.com/eyerusalemaklilu", live:"https://eyerusalemaklilu.github.io/nile-youth-task-tracker/", liveLabel:"Live web app", company:{ name:"ENYN", logo:"" },
    gallery:[{label:"Team board",device:"desktop",img:"worktool-board",src:"",ar:"1894/948"},{label:"Main board on phone",device:"mobile",img:"worktool-phone",src:"",ar:"3/4"},{label:"Meetings on phone",device:"mobile",img:"worktool-phone-meet",src:"",ar:"3/4"},{label:"My board",device:"desktop",img:"worktool-myboard",src:"",ar:"2/1",nocard:true},{label:"Weekly goals",device:"desktop",img:"worktool-weekly",src:"",ar:"2/1",nocard:true},{label:"Meetings and minutes",device:"desktop",img:"worktool-meetings",src:"",ar:"2/1",nocard:true},{label:"Calendar",device:"desktop",img:"worktool-calendar",src:"",ar:"2/1",nocard:true},{label:"Leadership",device:"desktop",img:"worktool-leadership",src:"",ar:"2/1",nocard:true},{label:"Secretariat",device:"desktop",img:"worktool-secretariat",src:"",ar:"2/1",nocard:true},{label:"Advocacy",device:"desktop",img:"worktool-advocacy",src:"",ar:"2/1",nocard:true},{label:"Media",device:"desktop",img:"worktool-media",src:"",ar:"2/1",nocard:true},{label:"Finance",device:"desktop",img:"worktool-finance",src:"",ar:"2/1",nocard:true},{label:"Projects",device:"desktop",img:"worktool-projects",src:"",ar:"2/1",nocard:true},{label:"Training",device:"desktop",img:"worktool-training",src:"",ar:"2/1",nocard:true},{label:"Admin board",device:"desktop",img:"worktool-admin",src:"",ar:"2/1",nocard:true},{label:"Progress and goals",device:"desktop",img:"worktool-progress",src:"",ar:"1894/948",nocard:true},{label:"Progress on phone",device:"mobile",img:"worktool-phone-stats",src:"",ar:"3/4",nocard:true},{label:"Team tasks on phone",device:"mobile",img:"worktool-phone-tasks",src:"",ar:"3/4",nocard:true},{label:"Task completion on phone",device:"mobile",img:"worktool-phone-chart",src:"",ar:"3/4",nocard:true},{label:"Goals on phone",device:"mobile",img:"worktool-phone-goals",src:"",ar:"3/4",nocard:true}] }
];

const TESTIMONIALS = [
  { q:"Add a client’s words here. Two or three sentences about working with you and what the finished site did for them.", n:"Client name", r:"Role, Company", photo:"" },
  { q:"Add a second testimonial here. Mention the project, the result and what it was like to work together.", n:"Client name", r:"Role, Company", photo:"" },
  { q:"Add a third testimonial here. Short and specific quotes read best.", n:"Client name", r:"Role, Company", photo:"" }
];


/* ============ END EDIT ============ */

/* Link each image slot to its place on the page */
const IMG = k => IMAGES[k] || "";
CONFIG.media.hero = CONFIG.media.hero || IMG("hero-photo");
CONFIG.media.about = CONFIG.media.about || IMG("about-photo");
TESTIMONIALS.forEach((t, i) => { t.photo = t.photo || IMG("testimonial-" + (i + 1)); });
PROJECTS.forEach(p => { p.company.logo = p.company.logo || IMG(p.slug + "-logo"); p.gallery.forEach(g => { g.src = g.src || IMG(g.img); }); });

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ICON = {
  monitor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2.5"/><path d="M9 20h6M12 16v4"/></svg>',
  tablet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M11 18h2"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/></svg>',
  frame:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v18M17 3v18M3 7h18M3 17h18"/></svg>',
  branch:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
  window:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M7 6.5v.01M10 6.5v.01"/></svg>',
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>',
  tasks:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="m8 9 1.5 1.5L12 8M8 15l1.5 1.5L12 14M14.5 9.5H17M14.5 15.5H17"/></svg>',
  arrow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  left:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
  right:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  close:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
  headset:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20c0 1.5-2 2-5 2"/></svg>',
  database:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  mat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="3"/><rect x="9" y="9" width="6" height="6" rx="3"/></svg>',
  github:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10.5V16M8 7.8v.01M12 16v-5.5M12 13c0-1.7 1-2.7 2.4-2.7S16.5 11.2 16.5 13V16"/></svg>',
  gmail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7.5 8 6 8-6"/></svg>',
  telegram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4 3 11l5.5 2L10 19l3-3.5 4.5 3.3z"/><path d="m8.5 13 8.5-6"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>'
};
const gmailUrl = (su="", body="") => "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(CONFIG.email) + (su ? "&su=" + encodeURIComponent(su) : "") + (body ? "&body=" + encodeURIComponent(body) : "");

const root = document.documentElement;

/* ---------- Static content ---------- */
const bandItems = MAJOR_SKILLS.map(t => ({t, major:true})).concat(OTHER_SKILLS.map(t => ({t, major:false})));
const bandHtml = bandItems.map(s => `<span class="${s.major ? "major" : ""}">${esc(s.t)}</span>`).join("");
$("#track").innerHTML = bandHtml + bandHtml;
$("#bandSr").textContent = "Skills: " + bandItems.map(s => s.t).join(", ");

/* ---------- Services and About ---------- */
const SVC_ICON = ["layers","window","database","tasks"];
$("#svc").innerHTML = PROJECTS.map((p, i) => `<a class="svc-card" href="#project-${i+1}"><span class="svc-ic">${ICON[SVC_ICON[i]]}</span><h3>${esc(p.svcTitle||p.title)}</h3><p>${esc(p.svcBlurb||p.blurb)}</p><span class="more">Learn more</span></a>`).join("");
$("#abStats").innerHTML = [[PROJECTS.length,"Live projects"],["1+","Year of experience"],["BSc","Electrical & Computer Eng."]].map(([n,l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("");
if (CONFIG.media.about || CONFIG.media.hero) $("#abCircle").innerHTML = `<img loading="lazy" decoding="async" src="${esc(CONFIG.media.about || CONFIG.media.hero)}" alt="Portrait of Eyerusalem Aklilu">`;

const SOC = [["GitHub","github",CONFIG.links.github],["LinkedIn","linkedin",CONFIG.links.linkedin || "https://www.linkedin.com/"],["Gmail","gmail",gmailUrl("Website project")],["Phone","phone","tel:" + CONFIG.phone.replace(/\s/g,"")],["Telegram","telegram",CONFIG.links.telegram]].filter(x => x[2]);
$("#socials").innerHTML = SOC.map(([n,i,h]) => `<a class="soc" href="${esc(h)}"${/^https?:/.test(h) ? ' target="_blank" rel="noopener"' : ""} title="${n}" aria-label="${n}">${ICON[i]}<span>${n}</span></a>`).join("");
$$("[data-email]").forEach(el => el.textContent = CONFIG.email);
$$("[data-phone]").forEach(el => { el.href = "tel:" + CONFIG.phone.replace(/\s/g,""); el.textContent = CONFIG.phone; });
$$("[data-gmail]").forEach(el => el.href = gmailUrl("Website project"));
const keab = $("#keabLink");
if (CONFIG.keabUrl) keab.href = CONFIG.keabUrl; else keab.replaceWith(document.createTextNode(keab.textContent));

if (CONFIG.media.hero) $("#heroPhoto").innerHTML = `<img fetchpriority="high" decoding="async" src="${esc(CONFIG.media.hero)}" alt="Portrait of Eyerusalem Aklilu">`;

async function copyText(text, btn){
  const old = btn.textContent;
  try { await navigator.clipboard.writeText(text); btn.textContent = "Copied"; }
  catch(e){ btn.textContent = "Select and copy"; }
  setTimeout(() => btn.textContent = old, 1600);
}
$$("[data-copy-email]").forEach(b => b.addEventListener("click", () => copyText(CONFIG.email, b)));

/* ---------- Folders ---------- */
const DEV_NAME = { desktop:"Desktop", tablet:"Tablet", mobile:"Phone", figma:"Figma design" };
function fc(p, g){
  return `<span class="fc"><span class="fc-img ${g.src ? "" : "sk"}"${g.src ? ` style="background-image:url('${esc(g.src)}');background-position:${esc(g.pos || "top center")}"` : ""}><span class="fc-pill">${esc(g.label)}</span></span></span>`;
}
$("#folders").innerHTML = PROJECTS.map((p, i) => `
  <a class="fold" href="#project-${i+1}" style="--i:${i}" aria-label="Open project: ${esc(p.title)}">
    <span class="f-back"></span>${p.gallery.filter(g => !g.nocard).map(g => fc(p, g)).join("")}
    <span class="f-front"><span class="f-info"><b>${esc(p.title)}</b><small>${esc(p.cap)}</small></span><span class="f-go">${ICON.arrow}</span></span>
  </a>`).join("");

/* Cards inside each folder glide through the project's outputs: left, centre, right, then the next one */
(function(){
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  $$(".fold").forEach((el, i) => {
    const cards = $$(".fc", el), n = cards.length;
    let cur = 0, hover = false;
    const place = () => cards.forEach((c, k) => { const d = (k - cur + n) % n; c.dataset.p = d === 0 ? "0" : d === 1 ? "1" : d === n - 1 ? "-1" : "h"; });
    place();
    if (reduce || n < 3) return;
    ["mouseenter","focusin"].forEach(ev => el.addEventListener(ev, () => { hover = true; }));
    ["mouseleave","focusout"].forEach(ev => el.addEventListener(ev, () => { hover = false; }));
    setTimeout(() => setInterval(() => { if (!hover && !document.hidden && !root.classList.contains("lock")) { cur = (cur + 1) % n; place(); } }, 3400), i * 800);
  });
})();

/* Horizontal rail: arrows, progress bar and a gentle auto-advance that pauses on touch or hover */
(function(){
  const rail = $("#folders"), prog = $("#rProg"), ctl = $(".rail-ctl");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior = reduce ? "auto" : "smooth";
  const maxLeft = () => rail.scrollWidth - rail.clientWidth;
  const step = () => { const f = rail.firstElementChild; return f ? f.getBoundingClientRect().width + (parseFloat(getComputedStyle(rail).columnGap) || 0) : 300; };
  function paint(){
    const w = Math.min(1, rail.clientWidth / rail.scrollWidth), m = maxLeft();
    ctl.hidden = m <= 2;
    prog.style.width = (w * 100) + "%";
    prog.style.left = ((m > 0 ? rail.scrollLeft / m : 0) * (1 - w) * 100) + "%";
  }
  function next(){ const m = maxLeft(); if (m <= 2) return; if (rail.scrollLeft >= m - 2) rail.scrollTo({ left:0, behavior }); else rail.scrollBy({ left:step(), behavior }); }
  function prev(){ const m = maxLeft(); if (m <= 2) return; if (rail.scrollLeft <= 2) rail.scrollTo({ left:m, behavior }); else rail.scrollBy({ left:-step(), behavior }); }
  let hold = false, visible = true, resume = 0;
  const pause = () => { hold = true; clearTimeout(resume); };
  const later = () => { clearTimeout(resume); resume = setTimeout(() => hold = false, 3000); };
  ["mouseenter","focusin","touchstart","pointerdown"].forEach(ev => rail.addEventListener(ev, pause, { passive:true }));
  ["mouseleave","focusout","touchend","pointerup"].forEach(ev => rail.addEventListener(ev, later, { passive:true }));
  $("#rNext").addEventListener("click", () => { pause(); next(); later(); });
  $("#rPrev").addEventListener("click", () => { pause(); prev(); later(); });
  let ticking = false;
  rail.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { paint(); ticking = false; }); } }, { passive:true });
  window.addEventListener("resize", paint);
  if ("IntersectionObserver" in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(rail);
  if (!reduce) setInterval(() => { if (!hold && visible && !document.hidden && !root.classList.contains("lock")) next(); }, 6500);
  paint();
})();

/* ---------- Testimonials ---------- */
let ti = 0;
const SIL = '<svg viewBox="0 0 200 200" fill="currentColor" aria-hidden="true"><circle cx="100" cy="72" r="36"/><path d="M20 200c0-50 36-78 80-78s80 28 80 78z"/></svg>';
$("#tStage").innerHTML = TESTIMONIALS.map(t => `<article class="t-item" aria-hidden="true">
  <div class="t-photo"><span class="c1"></span><span class="c2"></span>
    <div class="ph">${t.photo ? `<img loading="lazy" decoding="async" src="${esc(t.photo)}" alt="${esc(t.n)}">` : SIL}</div>
    <div class="t-who"><b>${esc(t.n)}</b><span>${esc(t.r)}</span></div></div>
  <blockquote class="t-text">${esc(t.q)}</blockquote></article>`).join("");
$("#tDots").innerHTML = TESTIMONIALS.map((_, k) => `<button type="button" aria-label="Show testimonial ${k+1}"></button>`).join("");
function paintT(){
  $$("#tStage .t-item").forEach((el, k) => { el.classList.toggle("on", k === ti); el.setAttribute("aria-hidden", String(k !== ti)); });
  $$("#tDots button").forEach((b, k) => b.setAttribute("aria-current", k === ti ? "true" : "false"));
  $("#tCount").textContent = (ti + 1) + " / " + TESTIMONIALS.length;
}
const tStep = d => { ti = (ti + d + TESTIMONIALS.length) % TESTIMONIALS.length; paintT(); };
$$("#tDots button").forEach((b, k) => b.addEventListener("click", () => { ti = k; paintT(); }));
$("#tPrev").addEventListener("click", () => tStep(-1));
$("#tNext").addEventListener("click", () => tStep(1));
let sx = null;
$("#tStage").addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, {passive:true});
$("#tStage").addEventListener("touchend", e => { if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 45) tStep(dx < 0 ? 1 : -1); });
paintT();

/* ---------- Header menu + Gmail popover ---------- */
const nav = $("#nav"), burger = $("#burger");
burger.addEventListener("click", () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
nav.addEventListener("click", e => { if (e.target.closest("a")) { nav.classList.remove("open"); burger.setAttribute("aria-expanded","false"); } });

/* ---------- Overlays and routing ---------- */
/* Links that start with # are handled here instead of by the browser, so project pages also open inside
   sandboxed previews where normal hash links can send the frame away from the page. */
const ovProject = $("#ovProject");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let depth = 0;   // history entries added by this page
function lockScroll(){ root.classList.toggle("lock", !ovProject.hidden); }
function scrollToId(id){
  if (id === "top") { window.scrollTo({ top:0, behavior: reduceMotion ? "auto" : "smooth" }); return; }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block:"start" });
}
function hideAll(){ ovProject.hidden = true; lockScroll(); }
function show(el){ el.hidden = false; lockScroll(); window.scrollTo(0,0); el.focus({preventScroll:true}); }
function route(h){
  if (h === undefined) h = location.hash.slice(1);
  if (h.startsWith("project-")) {
    const i = parseInt(h.slice(8), 10) - 1;
    if (PROJECTS[i]) { openProject(i); return; }
  }
  hideAll();
}
function openHash(h){
  try { history.pushState({ project:h }, "", "#" + h); depth++; } catch(e){}
  route(h);
}
function replaceHash(h){
  try { history.replaceState({ project:h }, "", "#" + h); } catch(e){}
  route(h);
}
function goBack(fallback){
  hideAll();
  if (depth > 0) { depth--; try { history.back(); } catch(e){} }
  else scrollToId(fallback);
}
document.addEventListener("click", e => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const h = a.getAttribute("href").slice(1);
  if (!h) return;
  e.preventDefault();
  if (h.startsWith("project-")) openHash(h);
  else if (!ovProject.hidden) { hideAll(); try { history.replaceState(null, "", "#" + h); } catch(err){} setTimeout(() => scrollToId(h), 30); }
  else scrollToId(h);
});
window.addEventListener("hashchange", () => route());
window.addEventListener("popstate", () => route());
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (!ovProject.hidden) goBack("projects");
});

/* Project detail: skills, tools, details and device showcase */
function openProject(i){
  const p = PROJECTS[i], n = PROJECTS.length;
  const next = (i + 1) % n, prev = (i + n - 1) % n;
  let g = 0, all = true;
  const devices = ["desktop","tablet","mobile","figma"].filter(d => p.gallery.some(x => x.device === d));
  const co = p.company || {};
  const ini = (co.name || "Company").split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  const outRow = (href, icon, cls, title, label) => href
    ? `<a class="out-row" href="${esc(href)}" target="_blank" rel="noopener"><span class="${cls}">${icon}</span><span class="out-t"><b>${title}</b><small>${label}</small></span><span class="out-go">${ICON.arrow}</span></a>`
    : `<div class="out-row off"><span class="${cls}">${icon}</span><span class="out-t"><b>${title}</b><small>${label} · link coming soon</small></span></div>`;
  ovProject.innerHTML = `
    <div class="ov-bar"><div class="wrap ov-bar-in">
      <button type="button" class="back" data-close>${ICON.left} All projects</button>
      <span class="ov-count">Project ${i+1} of ${n}</span>
      <button type="button" class="arrow" id="pvPrev" aria-label="Previous project">${ICON.left}</button>
      <button type="button" class="arrow" id="pvNext" aria-label="Next project">${ICON.right}</button>
    </div></div>
    <div class="wrap ov-body">
      <div class="d-head"><span class="eyebrow">${esc(p.tag)}</span><h1>${esc(p.title)}</h1><p>${esc(p.blurb)}</p></div>
      <div class="seg" id="seg" role="group" aria-label="Device preview"><button type="button" data-dev="all">All devices</button>${devices.map(d => `<button type="button" data-dev="${d}">${DEV_NAME[d]}</button>`).join("")}</div>
      <div class="stage" id="stage"></div>
      <div class="thumbs" id="thumbs">${p.gallery.map((x, k) => `<button type="button" class="thumb" data-g="${k}" aria-label="Show ${esc(x.label)}"><i class="${x.src ? "" : "sk"}"${x.src ? ` style="background-image:url('${esc(x.src)}')"` : ""}></i><span>${esc(x.label)}<small>${DEV_NAME[x.device]}</small></span></button>`).join("")}</div>
      <div class="d-grid">
        <div class="d-main">
          <div><h2>Skills applied</h2><div class="chips gold">${p.skills.map(s => `<span>${esc(s)}</span>`).join("")}</div></div>
          <div><h2>My contribution</h2><ul class="check">${p.contrib.map(c => `<li>${esc(c)}</li>`).join("")}</ul></div>
        </div>
        <aside class="d-aside">
          <div class="card dark"><span class="eyebrow">Output</span>
            <div class="out">${outRow(p.live, co.logo ? `<img loading="lazy" decoding="async" src="${esc(co.logo)}" alt="">` : esc(ini), "out-ic", esc(co.name || "Company name"), esc(p.liveLabel || "Live webpage"))}</div>
          </div>
          ${p.links && p.links.length ? `<div class="card"><span class="eyebrow">Live pages</span><div class="chips links">${p.links.map(l => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div></div>` : ""}
          <div class="card"><span class="eyebrow">Tools used</span><div class="chips">${p.tools.map(t => `<span>${esc(t)}</span>`).join("")}</div></div>
          <div class="card"><span class="eyebrow">Showcased on</span><div class="chips">${devices.map(d => `<span>${DEV_NAME[d]}</span>`).join("")}</div></div>
        </aside>
      </div>
      <a class="next" href="#project-${next+1}" data-replace="project-${next+1}"><div><small>Next project</small><b>${esc(PROJECTS[next].title)}</b></div><span style="display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:var(--gold);color:var(--on-gold);flex:none">${ICON.right}</span></a>
    </div>`;
  const stage = $("#stage", ovProject);
  const screenHtml = x => `<div class="scr ${x && x.src ? "" : "sk"}"${x && x.ar ? ` style="aspect-ratio:${esc(x.ar)}"` : ""}>${x && x.src ? `<img loading="lazy" decoding="async" src="${esc(x.src)}" alt="${esc(p.title)}: ${esc(x.label)}">` : ""}</div>`;
  const devHtml = (x, dev) => dev === "figma"
    ? `<div class="dev figma"><div class="fbar">${ICON.frame}<span>${esc(p.title)}.fig</span><span class="sp"></span><span class="zoom">100%</span></div><div class="fcanvas"><div class="flabel">${esc(x ? x.label : "Frame")}</div><div class="artboard"><i></i><i></i><i></i><i></i>${screenHtml(x)}</div></div></div>`
    : `<div class="dev ${dev}">${dev === "desktop" ? `<div class="bar"><i></i><i></i><i></i><span></span></div>` : ""}${screenHtml(x)}</div>`;
  const reduceM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let swapT = 0;
  function swapStage(html){
    clearTimeout(swapT);
    const cur = stage.firstElementChild;
    if (!cur || reduceM) { stage.innerHTML = html; return; }
    cur.style.transition = "opacity .2s ease, transform .2s ease"; cur.style.opacity = "0"; cur.style.transform = "scale(.985)";
    swapT = setTimeout(() => { stage.innerHTML = html; }, 200);
  }
  function paintG(){
    const x = p.gallery[g], dev = x.device || "desktop";
    let html;
    if (all) {
      const pick = d => p.gallery.find(y => y.device === d);
      const cls = { desktop:"l-desk", tablet:"l-tab", mobile:"l-mob" };
      html = `<div class="lineup">${["desktop","tablet","mobile"].filter(d => devices.includes(d)).map(d => `<div class="${cls[d]}">${devHtml(pick(d), d)}</div>`).join("")}</div><span class="v-cap">All devices</span>`;
    } else {
      html = `${devHtml(x, dev)}<span class="v-cap">${DEV_NAME[dev]} · ${esc(x.label)}</span><div class="v-nav"><button type="button" class="arrow" data-gp aria-label="Previous image">${ICON.left}</button><button type="button" class="arrow" data-gn aria-label="Next image">${ICON.right}</button></div>`;
    }
    swapStage(html);
    $$(".thumb", ovProject).forEach((t, k) => t.setAttribute("aria-current", !all && k === g ? "true" : "false"));
    $$("#seg button", ovProject).forEach(b => b.setAttribute("aria-current", (all ? b.dataset.dev === "all" : b.dataset.dev === dev) ? "true" : "false"));
  }
  paintG();
  ovProject.onclick = e => {
    if (e.target.closest("[data-close]")) { goBack("projects"); return; }
    const t = e.target.closest(".thumb"); if (t) { g = +t.dataset.g; all = false; paintG(); return; }
    const sg = e.target.closest("#seg button"); if (sg) { if (sg.dataset.dev === "all") { all = true; paintG(); } else { const k = p.gallery.findIndex(x => x.device === sg.dataset.dev); if (k >= 0) { g = k; all = false; paintG(); } } return; }
    if (e.target.closest("[data-gp]")) { g = (g + p.gallery.length - 1) % p.gallery.length; paintG(); return; }
    if (e.target.closest("[data-gn]")) { g = (g + 1) % p.gallery.length; paintG(); return; }
    if (e.target.closest("#pvPrev")) { replaceHash("project-" + (prev + 1)); return; }
    if (e.target.closest("#pvNext")) { replaceHash("project-" + (next + 1)); return; }
    const nx = e.target.closest("[data-replace]"); if (nx) { e.preventDefault(); replaceHash(nx.dataset.replace); }
  };
  show(ovProject);
}


$("#testimonials").hidden = !CONFIG.showTestimonials;
route();
