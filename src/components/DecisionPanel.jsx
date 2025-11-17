/**
 * DecisionPanel.jsx
 * Shows rationale, risk meter, and approve/reject actions.
 * Receives a workflow id via CustomEvent 'workflow:openDetails'
 */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mockData from "../utils/mockData";

function RiskArc({ value = 25, size = 120 }) {
  const start = 0;
  const end = (value / 100) * 270; // map to degrees (approx)
  const r = size / 2 - 8;
  // For safety we render a simple SVG gauge.
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0FE6FF" />
          <stop offset="100%" stopColor="#6B5FFF" />
        </linearGradient>
      </defs>
      <g transform={`translate(${size / 2}, ${size / 2})`}>
        <path d={describeArc(0, 0, r, -135, -135 + end)} stroke="url(#g1)" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="0" cy="0" r="4" fill="#0FE6FF" />
      </g>
    </svg>
  );
}

// helper to draw arc - standard polar to cartesian and arc path function
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

export default function DecisionPanel() {
  const [workflow, setWorkflow] = useState(null);
  const [riskValue, setRiskValue] = useState(25);

  useEffect(() => {
    const handleOpenDetails = (e) => {
      const workflowId = e.detail.id;
      // In a real app, we would fetch the workflow details by ID
      // For now, we'll use the mock workflow
      setWorkflow(mockData.demoWorkflow);
      // Simulate risk calculation
      setRiskValue(Math.floor(Math.random() * 40) + 10);
    };

    window.addEventListener("workflow:openDetails", handleOpenDetails);
    return () => window.removeEventListener("workflow:openDetails", handleOpenDetails);
  }, []);

  const onApprove = () => {
    if (!workflow) return;
    window.dispatchEvent(new CustomEvent("workflow:approved", { detail: { id: workflow.id, actor: "User" } }));
    window.dispatchEvent(new CustomEvent("audit:add", { detail: { id: `${workflow.id}:approved`, actor: "User", action: "Approved workflow", rationale: "User manual approval" } }));
    setWorkflow(null);
  };

  const onReject = () => {
    if (!workflow) return;
    window.dispatchEvent(new CustomEvent("workflow:rejected", { detail: { id: workflow.id, actor: "User" } }));
    window.dispatchEvent(new CustomEvent("audit:add", { detail: { id: `${workflow.id}:rejected`, actor: "User", action: "Rejected workflow", rationale: "User manual rejection" } }));
    setWorkflow(null);
  };

  if (!workflow) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background: "rgba(5,12,14,0.55)",
          border: "1px solid rgba(15,230,255,0.18)",
          borderRadius: 12,
          padding: "1.5rem",
          width: 420,
          minHeight: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#7fb6bf"
        }}
      >
        Select a workflow to view details
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{
        background: "rgba(5,12,14,0.55)",
        border: "1px solid rgba(15,230,255,0.18)",
        borderRadius: 12,
        padding: "1.5rem",
        width: 420,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <div style={{ color: "#BFF7FF", fontWeight: 700, fontSize: "1.2rem" }}>{workflow.title}</div>
          <div style={{ color: "#9ccbd6", fontSize: 14, marginTop: 4 }}>{workflow.summary}</div>
        </div>
        <div style={{ color: "#0FE6FF", fontWeight: 700 }}>{workflow.status}</div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <div style={{ textAlign: "center" }}>
          <RiskArc value={riskValue} />
          <div style={{ color: "#BFF7FF", marginTop: 10 }}>Risk: {riskValue}%</div>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <div style={{ color: "#BFF7FF", fontWeight: 600, marginBottom: 10 }}>Rationale</div>
        <div style={{ color: "#d6f8ff", fontSize: 14, lineHeight: 1.5 }}>
          Based on analysis of the ACME deal, this workflow is recommended to maximize revenue recovery while maintaining compliance. The system has identified 4 critical actions that need to be executed in sequence.
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 25 }}>
        <button className="intro-btn" onClick={onApprove} aria-label="Approve workflow" style={{ flex: 1 }}>Approve</button>
        <button className="intro-btn" onClick={onReject} aria-label="Reject workflow" style={{ flex: 1, background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.3)" }}>Reject</button>
      </div>
    </motion.div>
  );
}