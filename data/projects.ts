export type ProjectCategory =
  | "electrical-machines"
  | "electronics"
  | "automation"
  | "iot-bms"
  | "usb-hid"
  | "power-systems";

export type ProjectStatus = "completed" | "in-progress" | "pending";

export type ProjectType = "work" | "part-time";

export interface CodeSnippet {
  label: string;       // e.g. "PI Control Loop"
  language: string;    // e.g. "c", "javascript", "python", "plaintext"
  code: string;
}

export interface ProjectFile {
  label: string;       // e.g. "Schematic PDF"
  path: string;        // path under /public — e.g. "/files/motor-schematic.pdf"
  description?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: ProjectStatus;
  projectType: ProjectType;
  summary: string;
  description: string;
  tools: string[];
  highlights: string[];
  // Drop image filenames here: "/images/project-slug/photo.jpg"
  images: string[];
  // Add code snippets — each becomes a syntax-highlighted block
  codeSnippets?: CodeSnippet[];
  // Add downloadable files — place the file in public/ first
  files?: ProjectFile[];
  learnings?: string;
}

export const categoryMeta: Record<
  ProjectCategory,
  { label: string; color: string }
> = {
  "electrical-machines": {
    label: "Electrical Machines",
    color: "text-accent-cyan border-accent-cyan",
  },
  electronics: {
    label: "Electronics & Firmware",
    color: "text-accent-amber border-accent-amber",
  },
  automation: {
    label: "Industrial Automation",
    color: "text-purple-400 border-purple-400",
  },
  "iot-bms": {
    label: "Uninterrupted Power Supply (UPS) Systems",
    color: "text-accent-green border-accent-green",
  },
  "usb-hid": {
    label: "USB HID Implementation",
    color: "text-blue-400 border-blue-400",
  },
  "power-systems": {
    label: "Power Systems & Installation",
    color: "text-orange-400 border-orange-400",
  },
};

export const projects: Project[] = [
  {
    slug: "generator-audit",
    title: "Generator Audit",
    category: "power-systems",
    categoryLabel: "Power Systems & Installation",
    status: "completed",
    projectType: "work",
    summary:
      "Comprehensive audit of standby generator sets for BofiNet and BRES covering electrical and mechanical inspection, stochastic and block loading conditions tested and analyzed through a 750kW purely resistive loadbank with powerful data aquisition hardware and software for voltage,current, apparent power,active power,frequency and power factor measurement and analysis under the ISO 8528 standard to evaluate the performance and generating set's class(class G3 or G4). Alternator load rejection and load acceptance test was also carried out to asses AVR as well as governor performance, fuel system integrity and compliance with site requirements.",
    description:
      "Conducted a full audit of standby generator installations across site. The scope covered visual inspection of the generating sets, assessment of mechanical condition (cooling system, exhaust, fuel lines) as well as electrical conditions(cable connnection checks, DSE controller protection configurations checks as well as engine protection component operation checks by simulating a fault prior to the test) , electrical testing ( voltage and frequency output response of both the AVR and govenor respectively under load and no load during load rejection steps and load acceptance steps). Findings were documented with recommendations for corrective maintenance and compliance gaps.",
    tools: ["750kW Loadbank", "Fluke 376 True RMS clamp meter", "appropriate cables and connectors", "DSE Controller Configuration Software","Load bank data acquisition Software"],
    highlights: [
      "Mechanical and visual inspection of generator set components",
      "Electrical performance testing under load conditions and no load conditions",
      "Protection relay and controller operation and settings verification",
      "Compliance assessment against site and OEM requirements",
      "Configured the DSE controller protections where necessary ",
      "Generated detailed audit reports with corrective action recommendations",
    ],
    images: [],
  },
  {
    slug: "data-centre-generator-isolation",
    title: "Data Centre Generator Isolation System Implementation",
    category: "power-systems",
    categoryLabel: "Power Systems & Installation",
    status: "completed",
    projectType: "work",
    summary:
      "Partook in the implementation of a generator isolation system for a data centre facility, ensuring safe maintenance switching and continuity of critical power supply.",
    description:
      "Implemented a generator isolation system for a data centre environment where uninterrupted power is critical so much that a redundancy of n+1 is required to be maintained during the course of the iolation system project implementation. The project involved designing the isolation switching scheme, coordinating with the facility team on maintenance window planning, producing isolation drawings, and overseeing the physical installation and commissioning of isolation points. Thereafter isolation panel boards were installed. The system allows generator sets to be safely isolated for maintenance without interrupting the data centre's UPS-backed critical load.",
    tools: ["AutoCAD Electrical", "Fluke 376 True RMS clamp meter", "crimping tool", "Pulse relays", "Gulvanized trunking", "e.t.c"],
    highlights: [
      "Isolation switching scheme design for critical load continuity",
      "AutoCAD Electrical isolation and single-line drawings",
      "Coordination with facility team for zero-downtime implementation",
      "Physical installation and commissioning of isolation points",
      "Phase rotation, reverse power, generating sets synchronization checks",
      "Multi Set Communication operation verification",
    ],
    images: [],
  },
  {
    slug: "generating-set-relocation",
    title: "Generating Set Relocation",
    category: "power-systems",
    categoryLabel: "Power Systems & Installation",
    status: "completed",
    projectType: "work",
    summary:
      "Planning and execution of generating set relocation including mechanical de-installation, transport coordination, civil preparation at the new site, and recommissioning.",
    description:
      "Managed the relocation of a generating set from its existing installation to a new site position. The project covered de-installation planning, safe disconnection of electrical and fuel supplies, mechanical lifting and transport coordination, civil and electrical preparation at the destination (generator plinth preparation, cable sleeving, cable running, digging) and full recommissioning including protection and operation verification after reinstallation.",
    tools: ["Fluke True RMS Clamp Meter", "DSE Controller Configuration Software", "Commissioning Tools"],
    highlights: [
      "De-installation planning and safe disconnection procedures",
      "Mechanical lifting and transport coordination",
      "Civil preparation at destination site plinth preparation, cable sleeving, cable running, digging",
      "Electrical reconnection and fuel system reinstatement",
      "Recommissioning and protection verification",
    ],
    images: [],
  },
  {
    slug: "generating-set-installation",
    title: "Generating Set Installation",
    category: "power-systems",
    categoryLabel: "Power Systems & Installation",
    status: "completed",
    projectType: "work",
    summary:
      "End-to-end installation of a standby generating set including civil works, mechanical installation, electrical connection, fuel system commissioning",
    description:
      "Executed a full generating set installation from initial site survey through to final handover. Scope included civil preparation (plinth design, fuel bund, exhaust run), mechanical installation and anti-vibration mounting, electrical cabling from the genset to the main distribution board, fuel system piping and tank connection, and commissioning with a staged load bank test to verify output voltage, frequency, and protection relay operation under full load.",
    tools: ["AutoCAD Electrical", "Load Bank", "Commissioning Tools", "Cable Sizing"],
    highlights: [
      "Site survey and civil preparation — plinth, exhaust routing, fuel bund",
      "Mechanical installation with anti-vibration mounting",
      "Electrical cabling and main distribution board connection",
      "configuration of DSE controller where necesssaryy to function according to new site requirements",
      
    ],
    images: [],
  },
  {
    slug: "dc-motor-design",
    title: "Brushed DC Motor — Stator & Rotor Design",
    category: "electrical-machines",
    categoryLabel: "Electrical Machines",
    status: "in-progress",
    projectType: "part-time",
    summary:
      "Full rotor and stator geometry for a brushed DC motor including commutator layout, lap winding diagram, and brush gear arrangement. Termination and brush gear routing is pending.",
    description:
      "Designed the complete rotor and stator assembly for a brushed DC motor in SolidWorks. The rotor geometry covers slot profiling, commutator segmentation, and conductor placement. The lap winding diagram was produced in AutoCAD Electrical with coil span and commutator pitch calculated for minimum torque ripple. Brush gear positioning and terminal routing are the remaining open items.",
    tools: ["SolidWorks", "AutoCAD Electrical"],
    highlights: [
      "Rotor slot geometry and commutator segmentation for lap winding",
      "Lap winding diagram with coil span and commutator pitch calculation",
      "Stator pole geometry and field winding layout",
      "Brush gear arrangement and contact angle study — in progress",
      "Terminal routing and lead-out connections — pending",
    ],
    images: [],
    learnings:
      "Commutator segmentation count directly affects torque ripple amplitude — more segments reduce ripple but increase manufacturing complexity and brush wear rate.",
  },
  {
    slug: "bldc-motor-design",
    title: "Brushless DC Motor (BLDC) — Stator & Winding Design",
    category: "electrical-machines",
    categoryLabel: "Electrical Machines",
    status: "in-progress",
    projectType: "part-time",
    summary:
      "Stator lamination, concentrated winding layout, and pole/slot selection for a BLDC motor targeting a trapezoidal back-EMF profile. Phase lead-out termination is pending.",
    description:
      "Designed the stator assembly for a brushless DC motor in SolidWorks with the winding diagram produced in AutoCAD Electrical. The pole/slot combination was selected to minimise cogging torque while maintaining a trapezoidal back-EMF waveform suitable for six-step commutation. Concentrated tooth-wound coils were chosen for high fill factor and short end-turns. Phase lead-out routing and termination to the driver stage remain open.",
    tools: ["SolidWorks", "AutoCAD Electrical"],
    highlights: [
      "Pole/slot ratio selected for cogging torque minimisation",
      "Concentrated tooth-wound winding for high fill factor and short end-turns",
      "Trapezoidal back-EMF profile verified against slot/pole geometry",
      "Lamination stack with press-fit tolerance for housing assembly",
      "Phase lead-out routing and driver termination — pending",
    ],
    images: [],
    learnings:
      "BLDC cogging torque is highly sensitive to the pole/slot combination — a small change in the ratio produces a disproportionate reduction in cogging, which is easy to miss if you only optimise slot geometry without revisiting the pole count.",
  },
  {
    slug: "three-phase-stator-design",
    title: "DC Motor Salient Rotor & Stator",
    category: "electrical-machines",
    categoryLabel: "Electrical Machines",
    status: "in-progress",
    projectType: "part-time",
    summary:
      "Full stator and rotor geometry for a 3-phase induction motor including lamination stack, slot profile, distributed winding layout, and rotor bar profiling. Termination routing is pending.",
    description:
      "Designed the complete stator and rotor assembly for a 3-phase induction motor in SolidWorks. The model includes parametric lamination geometry, slot profile optimisation for fill factor, and a detailed winding diagram produced in AutoCAD Electrical. Coil pitch and distribution factor were calculated manually and cross-referenced against the slot layout. Rotor bar geometry was profiled for low starting current draw. The termination connections — star/delta switching and lead-out routing — are the remaining open items.",
    tools: ["SolidWorks", "AutoCAD Electrical"],
    highlights: [
      "Parametric slot geometry enabling rapid fill factor iteration",
      "Full lamination stack assembly with tolerance stack-up analysis",
      "Distributed winding diagram with coil grouping, pitch factor, and distribution factor",
      "Rotor bar geometry profiled for low starting current",
      "Star/delta termination switching and lead-out routing — pending",
    ],
    images: [],
    learnings:
      "Slot opening width has a larger impact on harmonic content than initially expected — the next revision will include a slot-opening sensitivity study before committing to tooling dimensions.",
  },
  {
    slug: "axial-flux-winding",
    title: "Single Phase Alternator Winding Study",
    category: "electrical-machines",
    categoryLabel: "Electrical Machines",
    status: "in-progress",
    projectType: "part-time",
    summary:
      "Winding layout and coil geometry study for a coreless axial flux motor. Conductor sizing and termination pending.",
    description:
      "Investigated winding topologies for a coreless axial flux machine intended for a direct-drive application. SolidWorks was used to model the coil former and winding jig geometry. The winding pattern and pole/slot combination were analysed in AutoCAD Electrical. Conductor sizing and final termination design are still open.",
    tools: ["SolidWorks", "AutoCAD Electrical"],
    highlights: [
      "Compared concentrated vs distributed winding for axial topology",
      "Coil former and winding jig 3D models for manufacturing reference",
      "Pole/slot harmonic analysis to minimise cogging contribution",
    ],
    images: [],
  },
  {
    slug: "proteus-motor-controller",
    title: "Car Audio Amplifier Analysis",
    category: "electronics",
    categoryLabel: "Electronics & Firmware",
    status: "completed",
    projectType: "part-time",
    summary:
      "Reverse engineered the PWM based power supply of an existing car audio amplifier, simulated it in both proteus and pspice software and went further on to implement the hardware to gain full experience on how the PWM system works and its applications.",
    description:
      "Designed a closed-loop PWM speed controller for a DC motor. The full schematic was drawn and simulated in Proteus, verifying gate drive timing, back-EMF feedback, and overcurrent protection before any hardware was built. Firmware was written in MikroC for PIC, implementing a PI control loop with configurable setpoint via potentiometer. The hardware build matched simulated behaviour within acceptable tolerance.",
    tools: ["Proteus", "Pspice Orcad", "TL494 IC"],
    highlights: [
      "Full schematic simulation before breadboarding reduced hardware rework cycles",
      "TL494",
      
      
    ],
    images: [],
    learnings:
      "Proteus simulation of the gate driver propagation delay was optimistic by ~15 ns in practice — important to add a dead-time margin beyond what simulation suggests.",
  },
  {
    slug: "node-red-iot-bms",
    title: "SHOTO Battery Bank Design",
    category: "iot-bms",
    categoryLabel: "Uninterrupted Power Supply (UPS) Systems",
    status: "completed",
    projectType: "part-time",
    summary:
      "Battery Management System monitoring platform using Node-RED flows, MQTT broker, and a dashboard for real-time cell voltage, temperature, and SoC visualisation.",
    description:
      "Built a full IoT monitoring stack for a lithium battery pack BMS. Hardware sensors report cell voltages, pack current, and temperature via MQTT. Node-RED flows handle message parsing, state-of-charge estimation, fault detection logic, and dashboard rendering. Alert flows trigger notifications when any cell deviates beyond the balance threshold or temperature limits are exceeded. The hardware build included shunt-based current sensing and CAN interface to the BMS IC.",
    tools: ["Node-RED", "MQTT", "Hardware Build", "CAN Bus"],
    highlights: [
      "MQTT-based telemetry from BMS hardware to cloud broker",
      "Node-RED flow for real-time SoC calculation using coulomb counting",
      "Cell balancing alert logic with configurable deviation threshold",
      "Dashboard with per-cell voltage bar charts and pack-level trend",
      "CAN interface to BMS IC for raw cell data extraction",
    ],
    images: [],
    codeSnippets: [
      {
        label: "SoC Coulomb Counting — Node-RED Function Node",
        language: "javascript",
        code: `// Node-RED function node: coulomb counting SoC update
// msg.payload = { current_A: number, voltage_V: number }

const CAPACITY_AH = 100;          // battery pack capacity
const SAMPLE_INTERVAL_S = 1;      // called every 1 s via inject node

let soc = context.get('soc') ?? 100.0;

const current = msg.payload.current_A;  // positive = discharge
const delta   = (current * SAMPLE_INTERVAL_S) / (CAPACITY_AH * 3600);
soc = Math.max(0, Math.min(100, soc - delta * 100));

// OCV reset on rest (|I| < 0.5 A)
if (Math.abs(current) < 0.5) {
    const ocv_soc = ocvLookup(msg.payload.voltage_V);
    soc = soc * 0.9 + ocv_soc * 0.1;  // blend toward OCV truth
}

context.set('soc', soc);
msg.payload = { soc: soc.toFixed(1), ...msg.payload };
return msg;

function ocvLookup(v) {
    // Simplified LFP OCV table
    if (v >= 3.45) return 100;
    if (v >= 3.30) return 80;
    if (v >= 3.20) return 50;
    if (v >= 3.10) return 20;
    return 5;
}`,
      },
    ],
    learnings:
      "Coulomb counting drift over long periods made it necessary to add an OCV-based SoC reset on each rest interval — purely integration-based estimation diverges without periodic correction.",
  },
  {
    slug: "omnictrl-bms-scada",
    title: "Rectifier System Build",
    category: "iot-bms",
    categoryLabel: "Uninterrupted Power Supply (UPS) Systems",
    status: "in-progress",
    projectType: "part-time",
    summary:
      "Unified control platform combining BMS monitoring, SCADA data aggregation, and IoT edge connectivity into a single Node-RED based system.",
    description:
      "OmniCtrl is an ongoing project combining lessons from earlier BMS and SCADA work into a unified platform. Node-RED serves as the integration layer — connecting BMS telemetry, Ignition SCADA tag data, and IoT edge devices through a common MQTT backbone. The goal is a single operator view across battery state, process data, and field sensor networks. Hardware builds are progressing alongside the software flows.",
    tools: ["Node-RED", "MQTT", "Ignition SCADA", "Hardware Build"],
    highlights: [
      "Unified MQTT topic namespace across BMS, SCADA, and IoT edge sources",
      "Node-RED as middleware between Ignition historian and IoT dashboard",
      "Hardware edge nodes reporting to centralised broker",
    ],
    images: [],
  },
  {
    slug: "usb-hid-joystick-controller",
    title: "USB HID Joystick Controller — PIC18F4550",
    category: "usb-hid",
    categoryLabel: "USB HID Implementation",
    status: "completed",
    projectType: "part-time",
    summary:
      "Custom USB HID joystick built on a PIC18F4550, enumerating as a native game controller with analog axes, a point-of-view hat, and digital buttons — no third-party drivers required.",
    description:
      "Designed and built a fully custom USB Human Interface Device joystick around the PIC18F4550's native USB peripheral. The firmware implements the USB descriptor set (device, configuration, HID class, and report descriptors) and a custom HID report descriptor describing a joystick with simulation-control axes (throttle, brake, steering), generic desktop axes (Rx, Ry, Y), a point-of-view hat switch, and four buttons. Analog axes are read through the on-chip ADC from potentiometer inputs, while the POV hat supports both analog and digital input modes. Because the device enumerates using the standard HID joystick usage page, Windows recognises it natively through Game Controllers without any custom driver — verified directly in the HID Manipulator test panel.",
    tools: ["MikroC", "PIC18F4550", "USB HID Class", "AutoCAD Electrical"],
    highlights: [
      "Custom HID report descriptor — joystick collection with simulation and generic desktop usage pages",
      "Native USB enumeration on PIC18F4550 with custom Vendor/Product ID and string descriptors",
      "Analog axis acquisition (throttle, brake, steering, Rx/Ry/Y) via on-chip ADC and potentiometer inputs",
      "Dual-mode point-of-view hat — analog potentiometer or digital 4-direction button input",
      "Verified end-to-end against Windows Game Controllers / HID Manipulator with no custom drivers",
    ],
    images: [],
    codeSnippets: [
      {
        label: "HID Report Descriptor — Usage Declarations (excerpt)",
        language: "c",
        code: `// HID report descriptor — joystick usage declarations (excerpt)
const struct { char report[]; } hid_rpt_desc = {
    0x05, 0x01,   // USAGE_PAGE (Generic Desktop)
    0x09, 0x04,   // USAGE (Joystick)
    0xa1, 0x01,   // COLLECTION (Application)
    0x05, 0x02,   //   USAGE_PAGE (Simulation Controls)
    0x09, 0xbb,   //   USAGE (Throttle)
    0x09, 0xc5,   //   USAGE (Brake)
    0x09, 0xc8,   //   USAGE (Steering)
    0x05, 0x01,   //   USAGE_PAGE (Generic Desktop)
    0x09, 0x33,   //   USAGE (Rx)
    0x09, 0x34,   //   USAGE (Ry)
    0x09, 0x31,   //   USAGE (Y)
    0x09, 0x39,   //   USAGE (Hat switch)
    0x05, 0x09,   //   USAGE_PAGE (Button)
    0x19, 0x01,   //   USAGE_MINIMUM (Button 1)
    0x29, 0x04,   //   USAGE_MAXIMUM (Button 4)
    0xc0          // END_COLLECTION
};`,
      },
    ],
    learnings:
      "Getting the device to enumerate as a native HID joystick — rather than a generic HID device requiring a custom driver — came down entirely to matching the report descriptor's usage pages and collection structure to what the OS's HID class driver expects.",
  },
];
