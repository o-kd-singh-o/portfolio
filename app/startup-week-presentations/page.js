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
        id: "leak-detection-audit",
        title: "Prompt 1: Small Business Revenue Leak Audit",
        description: "Analyze operational workflows to detect hidden revenue leaks and manual bottlenecks.",
        content: `# Small Business Revenue Leak Diagnostic

## Objective
Analyze existing customer touchpoints, sales pipelines, and operations to pinpoint where revenue is dropping off and identify quick-win automation opportunities.

### Context & Persona:
You are an expert fractional COO and AI Automation Consultant specializing in small-to-medium businesses.

### Instructions:
1. **Pipeline Audit**: Review the end-to-end customer journey from discovery to repeat purchase.
2. **Leak Identification**: Identify the top 3 highest-friction bottlenecks causing lead abandonment or delayed invoicing.
3. **AI Action Plan**: For each leak, propose an automated AI workflow (e.g., automated instant lead qualification, automated multi-touch follow-up, invoice reconciliation).

\`\`\`markdown
Business Profile Input:
- Industry: [e.g. Home Services, Consulting, E-commerce]
- Current Sales Channels: [e.g. Website Form, Phone calls, Instagram DMs]
- Monthly Leads / Prospects: [e.g. 50-100]
- Biggest Operational Bottleneck: [e.g. Following up with quotes takes 3+ days]
\`\`\`

> **Expected Output:** A prioritized table of identified revenue leaks, estimated monthly revenue impact, and actionable AI implementation blueprints.`,
      },
      {
        id: "growth-automation-engine",
        title: "Prompt 2: Growth Automation & Follow-Up Playbook",
        description: "Automate high-converting lead nurturing sequences and customer re-engagement.",
        content: `# Growth Automation & Follow-Up Engine

## Objective
Generate an autonomous multi-stage follow-up system that recaptures stalled leads and drives repeat business without manual effort.

### Framework:
- **Phase 1: Speed to Lead**: Instant AI personalized acknowledgment within 60 seconds of initial inquiry.
- **Phase 2: Value Nurture (Day 2-5)**: Address common objections, share case studies, and provide industry insight.
- **Phase 3: The Low-Friction Re-Engagement (Day 10)**: 9-word re-engagement email to revive cold conversations.

\`\`\`markdown
Configuration Variables:
- Target Audience: [Insert Customer Persona]
- Core Offer & Price Point: [Insert Product/Service Details]
- Primary Objection: [e.g. "Too busy right now" or "Price is high"]
\`\`\`

### Execution Rules:
- Never sound generic or corporate; adopt a conversational, trusted-advisor tone.
- Keep each follow-up message under 120 words.
- Include a single, frictionless call-to-action (CTA).`,
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
    prompts: [
      {
        id: "vibe-to-production",
        title: "Prompt 1: Vibe-Code to Production-Ready Architecture",
        description: "Systematically review and harden prototype code into scalable, secure production software.",
        content: `# Production Code Hardening Framework

## Objective
Transform AI-assisted rapid prototypes into maintainable, tested, and secure production systems.

### Checklist:
1. **Boundary & Input Validation**: Add strict schemas (e.g. Zod, Pydantic) for all user inputs and external API responses.
2. **Error Handling & Observability**: Replace generic try/catch blocks with domain error types and structured logging.
3. **Database & Concurrency Safety**: Ensure idempotent operations and proper transaction isolation.
4. **Automated Testing Suite**: Generate unit tests for edge cases, error branches, and integration regressions.

\`\`\`bash
# Run verification
npm test
npm run lint
npm run build
\`\`\`

> **Note:** Prompt content can be easily updated or swapped with your finalized markdown notes.`,
      },
    ],
  },
];

export default function StartupWeekPresentationsPage() {
  return <StartupWeekPresentationsClient presentations={presentations} />;
}
