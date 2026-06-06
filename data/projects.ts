export type ProjectCategory =
  | "electrical-machines"
  | "electronics"
  | "automation"
  | "iot-bms";

export type ProjectStatus = "completed" | "in-progress" | "pending";

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
};

export const projects: Project[] = [
  {
    slug: "dc-motor-design",
    title: "Brushed DC Motor — Stator & Rotor Design",
    category: "electrical-machines",
    categoryLabel: "Electrical Machines",
    status: "in-progress",
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
    title: "DC Motor Speed Controller — Proteus Simulation",
    category: "electronics",
    categoryLabel: "Electronics & Firmware",
    status: "completed",
    summary:
      "PWM-based DC motor speed controller designed, simulated in Proteus, and implemented with MikroC firmware on a PIC microcontroller.",
    description:
      "Designed a closed-loop PWM speed controller for a DC motor. The full schematic was drawn and simulated in Proteus, verifying gate drive timing, back-EMF feedback, and overcurrent protection before any hardware was built. Firmware was written in MikroC for PIC, implementing a PI control loop with configurable setpoint via potentiometer. The hardware build matched simulated behaviour within acceptable tolerance.",
    tools: ["Proteus", "MikroC", "PIC Microcontroller"],
    highlights: [
      "Full schematic simulation before PCB layout — reduced hardware rework cycles",
      "PI speed control loop implemented in MikroC with 10 ms sample period",
      "Overcurrent latch with auto-reset after fault-clear condition",
      "Hardware build validated against simulation transient waveforms",
    ],
    images: [],
    codeSnippets: [
      {
        label: "PI Speed Control Loop — MikroC",
        language: "c",
        code: `// PI controller for DC motor speed — 10 ms sample period
#define KP  0.8f
#define KI  0.12f
#define PWM_MAX 255

float integral = 0.0f;

unsigned char pi_control(int setpoint, int measured) {
    float error = (float)(setpoint - measured);
    integral += error * KI;

    // Anti-windup clamp
    if (integral > PWM_MAX) integral = PWM_MAX;
    if (integral < 0.0f)    integral = 0.0f;

    float output = KP * error + integral;
    if (output > PWM_MAX) output = PWM_MAX;
    if (output < 0.0f)    output = 0.0f;

    return (unsigned char)output;
}`,
      },
      {
        label: "Overcurrent Latch — MikroC",
        language: "c",
        code: `// Overcurrent fault latch with auto-reset on fault-clear
bit fault_latched = 0;

void check_overcurrent(void) {
    if (OVERCURRENT_PIN && !fault_latched) {
        fault_latched = 1;
        PWM1_Set_Duty(0);      // kill drive immediately
        FAULT_LED = 1;
    }
    // Reset only when current has dropped and button pressed
    if (fault_latched && !OVERCURRENT_PIN && RESET_BTN) {
        fault_latched = 0;
        FAULT_LED = 0;
    }
}`,
      },
    ],
    learnings:
      "Proteus simulation of the gate driver propagation delay was optimistic by ~15 ns in practice — important to add a dead-time margin beyond what simulation suggests.",
  },
  {
    slug: "pic-temperature-monitor",
    title: "Industrial Temperature Monitor — PIC + MikroC",
    category: "electronics",
    categoryLabel: "Electronics & Firmware",
    status: "completed",
    summary:
      "Multi-channel temperature monitoring system using a PIC microcontroller, NTC thermistors, and a character LCD, with over-temperature relay output.",
    description:
      "Built a 4-channel temperature monitoring unit designed for panel-mounting in an industrial enclosure. Each channel reads an NTC thermistor through the PIC ADC, applies a Steinhart-Hart linearisation, and displays readings on a 2×16 character LCD. A configurable alarm threshold triggers a relay output for fan or shutdown control. The full circuit was first validated in Proteus before the hardware build.",
    tools: ["Proteus", "MikroC", "PIC Microcontroller", "AutoCAD Electrical"],
    highlights: [
      "Steinhart-Hart NTC linearisation implemented in fixed-point arithmetic",
      "EEPROM-stored alarm thresholds — survive power cycle",
      "Relay output with configurable hysteresis to prevent chatter",
      "Panel-mount enclosure wiring diagram produced in AutoCAD Electrical",
    ],
    images: [],
  },
  {
    slug: "ignition-scada-pump-station",
    title: "Pump Station SCADA — Ignition",
    category: "automation",
    categoryLabel: "Industrial Automation",
    status: "completed",
    summary:
      "Ignition-based SCADA system for a multi-pump station with real-time monitoring, alarm management, and historian trending.",
    description:
      "Developed an Ignition SCADA application for monitoring and controlling a pump station installation. The project covered tag design, UDT structures for pump objects, perspective views for operators, alarm pipeline configuration, and historian integration for trending flow and pressure data. OPC-UA was used for PLC connectivity. Role-based access control was implemented to separate operator and engineer permission levels.",
    tools: ["Ignition SCADA", "OPC-UA", "Perspective"],
    highlights: [
      "UDT-based tag architecture for consistent pump object reuse across stations",
      "Perspective mobile-responsive operator display",
      "Alarm pipeline with on-call escalation routing",
      "Historian trending with report generation for daily throughput review",
    ],
    images: [],
    learnings:
      "Designing the UDT structure up front saved significant rework — retrofitting alarm configuration into flat tags is painful at scale.",
  },
  {
    slug: "node-red-iot-bms",
    title: "BMS & IoT Monitoring — Node-RED + MQTT",
    category: "iot-bms",
    categoryLabel: "Uninterrupted Power Supply (UPS) Systems",
    status: "completed",
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
    title: "OmniCtrl — Integrated BMS, SCADA & IoT Platform",
    category: "iot-bms",
    categoryLabel: "Uninterrupted Power Supply (UPS) Systems",
    status: "in-progress",
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
];
