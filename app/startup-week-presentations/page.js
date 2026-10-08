import StartupWeekPresentationsClient from "./StartupWeekPresentationsClient";

export const metadata = {
  title: "Startup Week Presentations | KD Singh",
  description: "Presentations and AI prompts by KD Singh for Startup Week.",
};

// Presentation data template - easy to customize titles, images, links, and prompts
const presentations = [
  {
    id: "plug-the-revenue-leaks",
    shortTitle: "Plug the Revenue Leaks",
    fullTitle: "Plug the Revenue Leaks: Small Business AI Playbook to Automate Growth and Drive Revenue.",
    session: "Session 01",
    // To add your slide cover image:
    // 1. Add image to /public (e.g. /public/slides/plug-the-revenue-leaks.png)
    // 2. Set slideImage: "/slides/plug-the-revenue-leaks.png"
    slideImage: null,
    presentationUrl: "#", // Add presentation link (e.g. Google Slides, PDF, Gamma)
    // Multiple AI prompts (add as many as you need here)
    prompts: [
      {
        id: "acero-process-mapping",
        title: "ACERO Framework",
        description: "Map every universal business activity end-to-end into the ACERO Framework (Attract, Convert, Execute, Retain, Operate).",
        content: `You are an expert Operations Architect and Management Consultant specializing in business process mapping and revenue architecture.

Your objective is to map out every single universal business activity for a specific business, end-to-end, and organize them into the ACERO Framework.

### Business Profile to Analyze:
- **Industry / Niche**: [INSERT INDUSTRY, e.g., Boutique Marketing Agency, Residential Realtor, Plumbing & HVAC, Strategy Consultant]
- **Target Customer (ICP)**: [INSERT TARGET AUDIENCE, e.g., Mid-market B2B SaaS founders, Homeowners selling $700k+ properties, Commercial property managers]
- **Primary Offer / Deliverable**: [INSERT CORE OFFER, e.g., Paid Social Retainer, Full-Service Home Listing, Emergency Drain Clearing & Repiping, 6-Month Operations Transformation]
- **Average Ticket Size / Model**: [INSERT PRICING MODEL, e.g., $5,000/mo retainer, 3% commission, $350 service call / $12k system replace, $50,000 fixed milestone project]
- **Business Size / Operating Scale**: [INSERT SCALE, e.g., Solo operator, Small team of 5–10, Multi-crew enterprise with dispatch]
- **My Business Specific Activities**: [INSERT YOUR BUSINESS SPECIFIC ACTIVITIES HERE, e.g., Publish at least 2-3 reel on instagram for promotion, Collect Facebook leads and book calls with them, Send Quotations to prospective clients ]

---

### The ACERO Framework Definitions:
1. **Attract**: Getting the market's attention (Positioning, outbound, inbound, brand, partnerships).
2. **Convert**: Turning attention into money (Discovery, qualification, audits, proposal design, negotiation, closing, payment collection).
3. **Execute**: Delivering the service or product (Client onboarding, production, staging, fulfillment, quality control, handover).
4. **Retain**: Multiplying the dollar (Upsells, cross-sells, recurring agreements, client health, referrals, review collection).
5. **Operate**: Running the foundation & back office (Financials, talent/capacity, legal/compliance, tech stack, SOPs, metrics).

---

### Execution Instructions & Output Requirements:
1. **End-to-End Chronological Flow**: For each pillar (A, C, E, R, O), think chronologically about what the business must do first, next, and last.
2. **Granular & Tactical**: Avoid generic statements like "do marketing" or "send invoices." Specify exact deliverables, workflows, industry-standard software tools, metrics, documents, and real-world artifacts (e.g., SOWs, CMAs, permits, Good/Better/Best proposals, QBRs, truck inventory).
3. **Sub-Phase Grouping**: Under each ACERO pillar, organize the activities into 3–4 logical sub-stages with 3–5 bullet points per sub-stage.
4. **Completeness**: Do not abbreviate or summarize. Include every essential activity required to run this business without leaving operational gaps.

---

### Required Output Format:
1. A visual ASCII or Mermaid workflow diagram showing the end-to-end flow across ACERO.
2. **The Granular Activity Map**: Deep dive into all 5 categories (Attract, Convert, Execute, Retain, Operate) structured with bold sub-phases and specific bullet points.
3. **Summary Scorecard / Quick-Reference Table**: A summary table outlining the Core Goal, Primary Tools/Artifacts, and Key Metric for each of the 5 pillars.`,
      },
      {
        id: "forensic-operational-audit",
        title: "End-to-End Business Mapping & Maturity Hierarchy",
        description: "Conduct a forensic operational audit across the 5 ACERO pillars, map failure modes using the V.O.T.E. framework, and prescribe fixes governed by the Maturity Hierarchy.",
        content: `You are an elite Operations Architect, Fractional COO, and Business Systems Engineer.

Your objective is to conduct a forensic operational audit on my business across the 5 pillars of the ACERO Framework (Attract, Convert, Execute, Retain, Operate). 

For each pillar, identify the single most critical, high-friction, time-consuming, or revenue-leaking activity, map its failure mode using the V.O.T.E. Framework, calculate the revenue leak, and design a high-leverage operational fix strictly governed by the Maturity Hierarchy.

---

### BUSINESS CONTEXT & PROFILE

- **Industry / Niche**: [INSERT INDUSTRY / NICHE, e.g., Residential Real Estate, B2B SaaS, Dental Practice]
- **Target Customer / ICP**: [INSERT TARGET CUSTOMER, e.g., Homeowners selling $400k-$700k homes / Series A founders]
- **Core Offer & Pricing**: [INSERT OFFER & TICKET SIZE, e.g., Full-service home listing at 3% commission / $5,000/mo retainer]
- **Team Size & Core Roles**: [INSERT TEAM SIZE & ROLES, e.g., 3 people: Lead Rainmaker, Ops Manager/TC, Junior Agent/ISA]
- **Current Primary Tech Stack**: [INSERT TOOLS IN USE, e.g., Follow Up Boss, Meta Ads, DocuSign, SkySlope, QuickBooks]
- **Known Bottlenecks / Pain Points**: [INSERT CURRENT BOTTLENECK, e.g., Slow lead follow-up, spending 3 hours on proposals, manual paperwork, past clients forgotten]

---

### FRAMEWORKS TO APPLY

#### 1. The V.O.T.E. Framework (Granular Process Mapping)
- **V — Verb**: What action must physically be taken? (Specific operational task)
- **O — Owner**: Who is directly responsible? (Specific human role or automated agent)
- **T — Tool**: What exact software, platform, or artifact executes or records the action?
- **E — Event**: What exact trigger starts the workflow? (When does it happen?)

#### 2. The Maturity Hierarchy (The Rule of Sequence)
Fixes MUST be sequential. You cannot skip steps:
1. **Business Processes (SOPs / Checklists)**: Manual clarity, rules, scripts, and human accountability.
2. **Storage (Digital Memory)**: Systems of record (CRMs, databases, cloud vaults, structured fields).
3. **Automation (Rules & Logic)**: Deterministic triggers (Zapier, Make, native CRM webhooks).
4. **AI (Cognitive & Decisions)**: LLMs, AI agents, document parsers, automated summarizers.

*Strict Guideline*: Be realistic. Do not prescribe AI where a simple CRM field (Storage) or a deterministic webhook (Automation) solves the problem. Prescribe AI ONLY when cognitive judgment, parsing, or content generation is required.

---

### OUTPUT INSTRUCTIONS & REQUIRED STRUCTURE

Deliver a deep dive across all 5 ACERO Pillars:
- **Pillar 1: ATTRACT** (Lead Generation, Inbound Speed, Outbound)
- **Pillar 2: CONVERT** (Discovery, Proposals/Audits, Sales Presentation, Closing)
- **Pillar 3: EXECUTE** (Fulfillment, Client Delivery, Quality Control, Roadblocks)
- **Pillar 4: RETAIN** (Review Harvesting, Sphere Nurture, Referrals, Lifetime Value)
- **Pillar 5: OPERATE** (Back-Office, Compliance, Invoicing/Payouts, Financial Controls)

For each pillar, structure the response into the following 4 sections:

#### Section 1: The Critical Leaking Activity & Current V.O.T.E. Mapping
- Identify the single highest-risk activity in this pillar.
- Provide the **Current (Broken/Baseline) V.O.T.E.** breakdown:
  - **Event**: The trigger.
  - **Owner**: The current person doing it.
  - **Tool**: The current tool used.
  - **Verb**: The current manual action taken.

#### Section 2: The Audit (The Revenue Leak & Friction Cost)
- **The Operational Friction**: What breaks, stalls, or slows down?
- **The Financial & Conversion Leak**: Quantify the revenue lost using realistic benchmarks (e.g., drop in conversion rate, lost deals, wasted ad spend, or lost billable hours).

#### Section 3: The Growth Upside
- What is the tangible upside of solving this?
- Define the clear operational North Star / benchmark target (e.g., cut turnaround time from 48 hours to 20 minutes; 80% same-day signing rate).

#### Section 4: The Maturity Hierarchy Diagnostic & Upgraded V.O.T.E. Workflow
- **Maturity Audit**: Break down exactly what is needed at each level:
  - *Process / SOP*: What checklist, script, or rule is required?
  - *Storage*: What database, custom fields, or cloud folders are needed?
  - *Automation*: What conditional logic, webhook, or trigger executes?
  - *AI*: What cognitive task or LLM/AI model is deployed (or state "None needed" if pure automation suffices)?
- **The Upgraded V.O.T.E. Workflow**: Walk through the new end-to-end flow step-by-step using clear V.O.T.E. milestones showing how the human, tools, automation, and AI interact.

---

### FINAL SUMMARY DELIVERABLE
Conclude with a clean **Maturity Architecture & Resource Allocation Table**:
- Columns: \`ACERO Pillar\` | \`Critical Leaking Activity\` | \`Maturity Stage Applied\` | \`Primary Fix Mechanism\` | \`Human Attention Shift (Stop Doing X -> Start Doing Y)\``,
      },
    ],
  },
  {
    id: "the-era-of-vibe-coding-is-over",
    shortTitle: "The Era of Vibe Coding is Over",
    fullTitle: "The Era of Vibe Coding is Over. It's Time to Ship the Production Code.",
    session: "Session 02",
    // To add your slide cover image:
    // 1. Add image to /public (e.g. /public/slides/vibe-coding-over.png)
    // 2. Set slideImage: "/slides/vibe-coding-over.png"
    slideImage: null,
    presentationUrl: "#", // Add presentation link (e.g. Google Slides, PDF, Gamma)
  },
];

export default function StartupWeekPresentationsPage() {
  return <StartupWeekPresentationsClient presentations={presentations} />;
}
