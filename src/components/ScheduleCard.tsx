"use client";

import { useState } from "react";

interface ScheduleCardProps {
  badge: string;
  title: string;
  description: string;
  details: string;
}

export default function ScheduleCard({ badge, title, description, details }: ScheduleCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card schedule-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <span className="schedule-badge">{badge}</span>
        <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>{description}</p>
      </div>
      
      {expanded && (
        <div className="fade-in" style={{ marginTop: '0.5rem', marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <p className="font-mono text-muted" style={{ fontSize: '0.8rem', lineHeight: '1.8' }}>
            {details}
          </p>
        </div>
      )}
      
      <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
        <button 
          onClick={(e) => { e.preventDefault(); setExpanded(!expanded); }}
          className="font-mono text-blue" 
          style={{ fontSize: '0.75rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {expanded ? "SHOW LESS ▲" : "SHOW MORE ▼"}
        </button>
      </div>
    </div>
  );
}
