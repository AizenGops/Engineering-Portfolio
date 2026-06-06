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
  eyebrow: "Engineering Portfolio",
  firstName: "Gophela",
  lastName: "Seiphepi",
  tagline:
    "Electrical engineer working across machine design, embedded electronics, industrial automation, and IoT systems — from winding diagrams to SCADA dashboards to hardware builds.",
  ctaPrimary: "View Projects",
  ctaSecondary: "Get in Touch",
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
    desc: "Stator & rotor design, winding layouts, lamination geometry — SolidWorks & AutoCAD Electrical.",
    accent: "border-accent-cyan/20 hover:border-accent-cyan/50",
    label: "text-accent-cyan",
  },
  {
    title: "Amplifier Design",
    desc: "Circuit design, Proteus simulation, PIC firmware in MikroC — from schematic to working hardware.",
    accent: "border-accent-amber/20 hover:border-accent-amber/50",
    label: "text-accent-amber",
  },
  {
    title: "Industrial Automation(SCADA & BMS)",
    desc: "Ignition SCADA applications — tag architecture, Perspective HMI, alarm pipelines, historian trending.",
    accent: "border-purple-400/20 hover:border-purple-400/50",
    label: "text-purple-400",
  },
  {
    title: "USB HID",
    desc: "Battery management monitoring, Node-RED MQTT flows, hardware edge builds, real-time dashboards.",
    accent: "border-accent-green/20 hover:border-accent-green/50",
    label: "text-accent-green",
  },
];

export const featuredCount = 3; // how many projects to show on the home page

// ============================================================
//  ABOUT PAGE
// ============================================================

export const about = {
  heading: "About",

  // Each string is one paragraph
  bio: [
    "I'm Gophela Seiphepi, an electrical engineer with hands-on experience across the full spectrum from machine design through to industrial automation and IoT systems.",
    "My work spans designing stator and rotor geometry in SolidWorks, producing winding and circuit diagrams in AutoCAD Electrical, building and simulating electronic circuits with Proteus and MikroC, and deploying SCADA systems using Ignition. More recently I've been working extensively with Node-RED, MQTT, and hardware builds for IoT and BMS applications.",
    "I approach engineering problems practically — I prefer validating designs in simulation before committing to hardware, and I document technical decisions clearly so that work can be continued, maintained, or handed over cleanly.",
  ],

  tools: [
    {
      category: "CAD & Electrical Design",
      items: ["SolidWorks", "AutoCAD Electrical"],
    },
    {
      category: "Electronics & Firmware",
      items: ["Proteus", "MikroC", "PIC Microcontrollers"],
    },
    {
      category: "Industrial Automation",
      items: ["Ignition SCADA", "Perspective", "OPC-UA", "Alarm Pipelines"],
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
        "Building a unified control and monitoring platform combining BMS telemetry, SCADA tag data, and IoT edge nodes through a common MQTT backbone.",
    },
    {
      period: "Recent",
      title: "Ignition SCADA — Pump Station",
      detail:
        "Full SCADA application covering tag architecture, UDT design, Perspective HMI, alarm pipeline, and historian integration.",
    },
    {
      period: "Recent",
      title: "BMS IoT Monitoring — Node-RED",
      detail:
        "MQTT-based telemetry platform for lithium battery pack monitoring with SoC estimation, cell balancing alerts, and real-time dashboard.",
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
        "PIC-based embedded projects including PWM motor controllers and multi-channel temperature monitoring systems.",
    },
  ],
};

// ============================================================
//  CONTACT PAGE
// ============================================================

export const contact = {
  heading: "Contact",
  intro:
    "Open to project collaborations, consulting work, and full-time engineering roles. Reach out through any of the channels below.",

  methods: [
    {
      label: "Email",
      value: "gophelaseiphepi@gmail.com",
      href: "mailto:gophelaseiphepi@gmail.com",
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

  availabilityStatus: "Currently available for new projects",
};

// ============================================================
//  FOOTER
// ============================================================

export const footer = {
  tagline: "Electrical Machines · Electronics · SCADA · IoT · BMS",
};
