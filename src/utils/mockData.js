// utils/mockData.js
// Mock workflows, KPI, connectors used by demo control and components.

export const demoWorkflow = {
  id: "wf_revenue_rescue",
  title: "Revenue Rescue — ACME Deal",
  summary: "Create invoice draft, update CRM, schedule demo, alert legal.",
  status: "idle",
  steps: [
    { id: "s1", name: "Fetch CRM record", connector: "CRM", status: "pending", duration: 1200, rationale: "Need existing account details." },
    { id: "s2", name: "Create invoice draft", connector: "Accounting", status: "pending", duration: 1400, rationale: "Invoice required before scheduling billing." },
    { id: "s3", name: "Schedule demo", connector: "Calendar", status: "pending", duration: 800, rationale: "Align stakeholders' calendars." },
    { id: "s4", name: "Notify legal", connector: "Slack", status: "pending", duration: 600, rationale: "Legal to fast-track contract." }
  ]
};

export const initialKpis = {
  dealsProgressed: 12,
  hoursSaved: 34,
  errorsAverted: 3,
  projectedWeeklyROI: 1200
};

export const connectors = [
  { id: "crm", name: "Salesforce", status: "healthy", last: "2m ago" },
  { id: "slack", name: "Slack", status: "healthy", last: "1m ago" },
  { id: "calendar", name: "Google Calendar", status: "healthy", last: "12s ago" },
  { id: "acct", name: "QuickBooks", status: "degraded", last: "8m ago" }
];

export const demoTimeline = [
  { index: 0, title: "Intake", description: "Incoming Slack request" },
  { index: 1, title: "Analyze", description: "ECoS summarizes deal" },
  { index: 2, title: "Propose Actions", description: "Draft invoice + schedule" },
  { index: 3, title: "Human Approval", description: "Manager approves" },
  { index: 4, title: "Execute", description: "Execute orchestration" },
  { index: 5, title: "Audit", description: "Logs & KPI update" }
];