"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string | Date;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isClient) {
    // Avoid hydration mismatch by rendering empty or generic state on server
    return (
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', width: '80px', textAlign: 'center' }}>
          <div className="font-mono text-blue" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>--</div>
          <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>DAYS</div>
        </div>
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', width: '80px', textAlign: 'center' }}>
          <div className="font-mono text-blue" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>--</div>
          <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>HOURS</div>
        </div>
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', width: '80px', textAlign: 'center' }}>
          <div className="font-mono text-blue" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>--</div>
          <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>MINS</div>
        </div>
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', width: '80px', textAlign: 'center' }}>
          <div className="font-mono text-blue" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>--</div>
          <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>SECS</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', width: '80px', textAlign: 'center' }}>
        <div className="font-mono text-blue" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>DAYS</div>
      </div>
      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', width: '80px', textAlign: 'center' }}>
        <div className="font-mono text-blue" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>HOURS</div>
      </div>
      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', width: '80px', textAlign: 'center' }}>
        <div className="font-mono text-blue" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>MINS</div>
      </div>
      <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', width: '80px', textAlign: 'center' }}>
        <div className="font-mono text-blue" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>SECS</div>
      </div>
    </div>
  );
}
