/**
 * WorkflowCard.jsx
 * Displays a single workflow and its steps.
 * Communicates via CustomEvent: 'workflow:approved', 'workflow:stepUpdate'
 */

import React from "react";
import { motion } from "framer-motion";

export default function WorkflowCard({ workflow = {} }) {
  const { id, title, summary, steps = [], status = "idle" } = workflow;

  const onApprove = () => {
    window.dispatchEvent(new CustomEvent("workflow:approved", { detail: { id, actor: "User" } }));
    // Add audit event
    window.dispatchEvent(new CustomEvent("audit:add", { detail: { id: `${id}:approved`, actor: "User", action: "Approved workflow", rationale: "User manual approval" } }));
  };

  const onDetails = () => {
    window.dispatchEvent(new CustomEvent("workflow:openDetails", { detail: { id } }));
  };

  return (
    <motion.div
      className="wf-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{
        background: "rgba(5,12,14,0.55)",
        border: "1px solid rgba(15,230,255,0.18)",
        padding: "1.2rem",
        borderRadius: 12,
        width: 420,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <div>
          <div style={{ color: "#BFF7FF", fontWeight: 700 }}>{title}</div>
          <div style={{ color: "#9ccbd6", fontSize: 13 }}>{summary}</div>
        </div>
        <div style={{ color: "#0FE6FF", fontWeight: 700 }}>{status}</div>
      </div>

      <div style={{ marginTop: 8 }}>
        {steps.map((s) => (
          <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{
              width: 12, height: 12, borderRadius: 6,
              background: s.status === "success" ? "#3EE6B5" : s.status === "running" ? "#FFC857" : "#0FE6FF",
              boxShadow: "0 0 10px rgba(15,230,255,0.2)"
            }} />
            <div style={{ flex: 1 }}>
              <div style={{ color: "#d6f8ff", fontWeight: 600 }}>{s.name}</div>
              <div style={{ fontSize: 12, color: "#7fb6bf" }}>{s.connector} • {s.duration}ms</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <button className="intro-btn" onClick={onApprove} aria-label="Approve workflow">Approve</button>
        <button className="intro-btn" onClick={onDetails} aria-label="Open details" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.03)" }}>Details</button>
      </div>
    </motion.div>
  );
}