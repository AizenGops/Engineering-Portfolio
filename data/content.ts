// ============================================================
//  SITE CONTENT — edit anything here to update the website
//  Projects are managed separately in data/projects.ts
// ============================================================

export const site = {
  // Browser tab title and SEO
  name: "Gophela Seiphepi",
  role: "Electrical Engineer",
  metaDescription:
    "Portfolio of Gophela Seiphepi — Electrical machine design, industrial automation, embedded systems, IoT & BMS engineering.",
  metaKeywords: [
    "electrical engineering",
    "SolidWorks",
    "AutoCAD Electrical",
    "SCADA",
    "Ignition",
    "Node-RED",
    "BMS",
    "IoT",
    "MikroC",
    "Proteus",
  ],
};

export const nav = {
  brand: "Gophela",
  brandSuffix: "Seiphepi",
};

// ============================================================
//  HOME PAGE
// ============================================================

export const hero = {
  eyebrow: "Electrical & Electronics Engineer",
  firstName: "Gophela",
  lastName: "Seiphepi",
  headline: "I build the machines and circuits I can't stop thinking about.",
  tagline:
    "Electrical engineer who rotates between disciplines on purpose. I've designed motors and alternators in SolidWorks and AutoCAD Electrical, run analysis in Ansys Maxwell, written USB HID firmware in MikroC for PIC, and spent a good stretch on amplifier design and small-signal work in PSpice Orcad. Right now the focus is SCADA and BMS, building in Ignition, Node-RED, and MQTT, with OPC-UA next on the list.",
  ctaPrimary: "See what I've built",
  ctaSecondary: "Say hello",
};

// ============================================================
//  HOW I WORK — the principles I keep coming back to
// ============================================================

export const approach = {
  heading: "How I work",
  intro: "A handful of principles I keep coming back to, whatever the discipline.",
  principles: [
    {
      title: "Start from first principles",
      desc: "I like to know why something works before I trust it. The back-EMF behind a winding choice, the common-mode rejection behind an amplifier's input stage. That is where the good decisions come from.",
    },
    {
      title: "Hand calculations, then simulation, then hardware",
      desc: "I do the maths by hand, check it in simulation, and only then commit to hardware. By the time something gets built, it has already earned its place.",
    },
    {
      title: "Rotate disciplines to stay sharp",
      desc: "When a project starts giving me a hard time I switch to a different one and come back a few days later with a clearer head. Moving between machines, electronics and automation keeps every part of my thinking awake.",
    },
    {
      title: "Document so the work outlives the moment",
      desc: "I write the reasoning down so a project can be picked up, maintained or handed over without losing why each decision was made.",
    },
  ],
};

// Framing for the disciplines section on the home page
export const disciplinesSection = {
  heading: "The work I love",
  intro: "Four disciplines I keep circling back to. Each one is here because I genuinely enjoy the problem, not just because it sits well on a CV.",
};

// Framing for the featured projects section on the home page
export const featuredSection = {
  heading: "Things I've been building",
  intro: "A few projects I'm proud of. Some are finished, some are still on the bench.",
  viewAll: "See all projects",
};

export const stats = [
  { value: "7+", label: "Projects" },
  { value: "4",  label: "Disciplines" },
  { value: "10+", label: "Tools" },
  { value: "3+", label: "Years" },
];

export const disciplines = [
  {
    title: "Electrical Analysis & Design",
    desc: "Stator & rotor design of mainly 3 phase induction motors and alternators(both salient and cylindrical type) as well as synchronous reluctance motors, winding layouts, excitation type, electrical theories such as Blondel's two-armature reaction theory which I believe is a powerful electrical framework and approach for analyzing salient-pole synchronous machines, lamination geometry made in SolidWorks & AutoCAD Electrical and analysis carried out in Ansys Maxwell.",
    accent: "border-accent-cyan/20 hover:border-accent-cyan/50",
    label: "text-accent-cyan",
  },
  {
    title: "Electronic Amplifier Design",
    desc: "Electronic circuit design and analysis of the differential amplifier which is the heart of any amplifier system, mainly implemented at the input stage due to its appealing common mode rejection ratio, voltage stage as well as output stage implementation an analysis both calculations made by hand as well as simulation in Pspice Orcad software, a very powerful tool!. My focus is mostly on class AB amplifiers since they are mostly implemented in car audio amplifiers, also, they are of moderate complexity and have good efficiency and linearity, I have also done some work on class D amplifiers which are switching amplifiers and are very efficient but have a more complex design process.",
    accent: "border-accent-amber/20 hover:border-accent-amber/50",
    label: "text-accent-amber",
  },
  {
    title: "Industrial Automation(SCADA & BMS)",
    desc: "Ignition SCADA applications — tag architecture, Perspective HMI, alarm pipelines, historian trending as well as MQTT implementation carried out in Node Red, I have recently started working on these SCADA and BMS projects.",
    accent: "border-purple-400/20 hover:border-purple-400/50",
    label: "text-purple-400",
  },
  {
    title: "USB HID",
    desc: "USB HID implementation has been the most complex field I have worked on!, from configuring USB descriptors for a mouse, gaming wheel as well as joystick to reading USB HID usages, USB protocols and device communication as well as device enumeration and a ton of trial and error! until i found Emil Enchev's USB joystick implementation in mikroc forum which was a great resource and guide for me to understand the complex USB HID protocol. USB device simulation was carried out in proteus and the firmware works really well, cant wait to start the hardware build",
    accent: "border-accent-green/20 hover:border-accent-green/50",
    label: "text-accent-green",
  },
];

export const featuredCount = 3; // how many projects to show on the home page

// ============================================================
//  ABOUT PAGE
// ============================================================

export const about = {
  heading: "About me",
  lead: "A bit about who I am, how I got here, and the tools I reach for.",

  // Each string is one paragraph
  bio: [
    "I'm Gophela Seiphepi, an electrical and electronics engineer with an unquenchable thirst for knowledge advancement and hands on experience across the full spectrum from machine design, Electronics design and analysis, USB HID implementation through to industrial automation and IoT systems.",
    "My work spans designing stator and rotor geometry in SolidWorks, producing winding and circuit diagrams in AutoCAD Electrical, building and simulating electronic circuits with Proteus and MikroC and deploying SCADA systems using Ignition. More recently I've been working extensively with Node-RED, MQTT, and hardware builds for IoT and BMS applications.",
    "I approach engineering problems practically, I strongly believe in analysis both in hand calculation as well as validating designs in simulation before committing to hardware, I document technical decisions clearly so that work can be continued, maintained, or handed over cleanly. I also rotate between different disciplines to keep my skills sharp across the board and to bring a holistic perspective to each project and also to give myself a bit of some time off one project giving me a hard time so I can come back a few days with a fresh mind and perspective",
  ],

  tools: [
    {
      category: "CAD & Electrical Design",
      items: ["SolidWorks", "AutoCAD Electrical"],
    },
    {
      category: "Electronics & Firmware",
      items: ["Proteus", "MikroC","VScode" ,"Pspice Orcad","PIC Microcontrollers"],
    },
    {
      category: "Industrial Automation & IoT Systems",
      items: ["Ignition SCADA", "Perspective", "OPC-UA", "MQTT Explorer","Node-RED", "MQTT", "ESP 12-E 8266 board"],
    },
    {
      category: "IoT & Systems",
      items: ["Node-RED", "MQTT", "CAN Bus", "Hardware Builds"],
    },
  ],

  timeline: [
    {
      period: "Ongoing",
      title: "OmniCtrl — Integrated BMS, SCADA & IoT",
      detail:
        "Building a unified control and monitoring platform combining SCADA tag data and IoT edge nodes through a common MQTT backbone.",
    },
    {
      period: "Recent",
      title: "SCADA Pump Station",
      detail:
        "Full SCADA application covering tag architecture, UDT design, Perspective HMI, alarm pipeline, and historian integration.",
    },
    
    {
      period: "Earlier",
      title: "Electrical Machine Design",
      detail:
        "Stator and rotor design work in SolidWorks and AutoCAD Electrical — including 3-phase induction motor geometry and axial flux winding studies.",
    },
    {
      period: "Earlier",
      title: "Embedded Systems — Proteus & MikroC",
      detail:
        "PIC-based embedded projects including PWM based power supplies and class AB amplifiers and differential amplifiers",
    },
  ],
};

// ============================================================
//  CONTACT PAGE
// ============================================================

export const contact = {
  heading: "Let's talk",
  intro:
    "I'm always happy to talk engineering, whether it's a project, a collaboration, or a full-time role. Pick whichever channel suits you and I'll get back to you.",

  methods: [
    {
      label: "Email",
      value: "gophelaseiphepi@gmail.com",
      href: "mailto:gophelaseiphepi@gmail.com",
      description: "Best for project enquiries and collaboration.",
    },
    {
      label: "Phone Number",
      value: "+26774124330",
      href: "tel:+26774124330",
      description: "Best for project enquiries and collaboration.",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/gophela-seiphepi",
      href: "https://www.linkedin.com/in/gophela-seiphepi",
      description: "Professional profile and work history.",
    },
  ],

  availability: [
    "Freelance electrical design projects",
    "SCADA / Ignition development",
    "IoT and BMS system integration",
    "Consulting on electrical machine design",
    "Contract embedded systems work",
  ],

  availabilityStatus: "Available for new projects. Reach me on LinkedIn, by email, or a quick call.",
};

// ============================================================
//  FOOTER
// ============================================================

export const footer = {
  tagline: "Electrical Machines · Electronics · SCADA · IoT · BMS",
  note: "Designed and built by hand, the same way I like to do everything else.",
};
