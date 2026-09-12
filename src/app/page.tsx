import Image from "next/image";
import Countdown from "../components/Countdown";
import ScheduleCard from "../components/ScheduleCard";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/QNigeria_logo_white.png" alt="QNigeria Logo" width={80} height={80} style={{ objectFit: 'contain' }} />
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
          <a href="#team">Team</a>
          <a href="#register">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

          <h1 style={{ fontSize: '2.5rem', marginBottom: '-1rem', fontFamily: 'var(--font-space-mono)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>QBronze199 Quantum Workshop</h1>

          {/* Hero Banner Image */}
          <div className="hide-on-mobile" style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto', height: '250px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <Image
              src="/top_QBronze3.png"
              alt="QBronze Workshop Banner"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <span className="schedule-badge" style={{ marginBottom: '0' }}>SEP 25 - OCT 2, 2026</span>
            <span className="schedule-badge" style={{ marginBottom: '0', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>VIRTUAL EVENT</span>
          </div>

          {/* Functional Countdown */}
          <Countdown targetDate="2026-09-25T15:00:00+01:00" />

          <div style={{ marginTop: '1rem' }}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfv0uenfVZMsWyPnP7XHJTLYyPeSfC0qDdNhwXbfIJ7T7pv7A/viewform?usp=dialog" target="_blank" rel="noreferrer" className="btn-primary">Reserve Your Seat</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">01 // About The Event</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <span className="font-mono text-blue" style={{ fontSize: '0.875rem' }}>High School / University</span>
                <span className="font-mono text-muted" style={{ fontSize: '0.875rem' }}>Researcher / Professional</span>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>
                Welcome to the quantum realm. We are pleased to announce our next QBronze workshop!
                If you are used to the classical computing world of absolute zeros and ones, prepare for your intuition to decohere just a bit upon entry.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                During the workshop, we will use the introductory tutorial <a href="https://gitlab.com/qworld/bronze-qiskit/" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)', textDecoration: 'underline' }}><strong>Bronze-Qiskit</strong></a> by QWorld.
                Whether you are a seasoned student or someone whose probability of asking "What is a qubit?" currently approaches 1, this event is built for you.
              </p>
              <p>
                Participants are expected to work individually at least 16 hours to complete the sections of Bronze.
                We will share five homework assignments via QWorld Canvas. Participants who complete them successfully will earn their diplomas!
              </p>
            </div>

            {/* Image Card */}
            <div className="card hide-on-mobile" style={{ padding: '0', overflow: 'hidden' }}>
              <a href="https://gitlab.com/qworld/bronze-qiskit/" target="_blank" rel="noreferrer" style={{ display: 'block', transition: 'opacity 0.2s', backgroundColor: '#000' }} className="hover-opacity">
                <div style={{ width: '100%', height: '300px', position: 'relative' }}>
                  <Image
                    src="/chandelier.jpg"
                    alt="Quantum Chandelier"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </a>
              <div style={{ padding: '1rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)' }}>
                QBronze199 - Introductory Quantum Workshop
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section" style={{ backgroundColor: '#111' }}>
        <div className="container">
          <div className="section-header">02 // Event Schedule</div>

          <p className="text-muted font-mono" style={{ marginBottom: '2rem', fontSize: '0.875rem' }}>
            * Note: All QBronze sessions begin at 17:30 WAT (GMT+1) and last for 1.5 hours. All QPrep sessions begin at 18:30 WAT (GMT+1).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            <ScheduleCard
              badge="SEP 25 | QPREP DAY 1"
              title="Python Programming"
              description="Preparatory session on the basics of Python programming to get you ready for writing quantum code."
              details="Variable | Loops | Conditionals | Lists"
            />

            <ScheduleCard
              badge="SEP 28 | QPREP DAY 2"
              title="Linear Algebra"
              description="Preparatory session covering the foundational math needed to understand quantum states and operations."
              details="Vectors | Dot Product | Matrices | Tensor Product"
            />

            <ScheduleCard
              badge="SEP 29 | DAY 1"
              title="Basics of classical systems"
              description="Welcome session. The first day introduces the basic concepts of bits, and IBM’s tool Qiskit to simulate quantum circuits/programs."
              details="One Bit | Coin Flipping | Coin Flipping Game | Probabilistic States | Probabilistic Operators | Two Probabilistic Bits | Quantum Coin Flipping | Qiskit."
            />

            <ScheduleCard
              badge="SEP 30 | DAY 2"
              title="Basics of quantum systems and Quantum operators on a (real-valued) qubit"
              description="Deals with quantum bits, visualization, superposition, measurement, and examples of quantum operations on qubits."
              details="First Quantum Programs with Qiskit | Hadamard Operator | One Qubit | Quantum State | Superposition and Measurement | Visualization of a (Real-Valued) Qubit | Operations on the Unit Circle | Rotations | Reflections | Quantum Tomography"
            />

            <ScheduleCard
              badge="OCT 1 | DAY 3"
              title="Entanglement and protocols"
              description="Deals with entanglement and its use in the transmission of quantum information via superdense coding and quantum teleportation."
              details="Two Qubits | Entanglement and Superdense Coding | Quantum Teleportation | Phase Kickback | Multiple Control Constructions."
            />

            <ScheduleCard
              badge="OCT 2 | DAY 4"
              title="Grover’s search algorithm"
              description="Introduces basic concepts for the implementation of Grover's Search Algorithm, an algorithm that outperforms classical search."
              details="Inversion About the Mean | Grover’s Search: One Qubit Representation | Grover’s Search: Implementation."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-header">03 // Workshop Team</div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>

            <div className="team-card">
              <h4 style={{ marginBottom: '0.25rem' }}>Ini E. Ukut</h4>
              <p className="font-mono text-blue" style={{ fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Organizer</p>
            </div>

            <div className="team-card">
              <h4 style={{ marginBottom: '0.25rem' }}>Kenneth Isamade</h4>
              <p className="font-mono text-blue" style={{ fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Organizer & Instructor</p>
            </div>

            <div className="team-card">
              <h4 style={{ marginBottom: '0.25rem' }}>Victor Adeyemi</h4>
              <p className="font-mono text-blue" style={{ fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Instructor</p>
            </div>

            <div className="team-card">
              <h4 style={{ marginBottom: '0.25rem' }}>Aniekan Afangideh</h4>
              <p className="font-mono text-blue" style={{ fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Instructor</p>
            </div>

            <div className="team-card">
              <h4 style={{ marginBottom: '0.25rem' }}>Ibukunoluwa Adisa</h4>
              <p className="font-mono text-blue" style={{ fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Mentor</p>
            </div>

            <div className="team-card">
              <h4 style={{ marginBottom: '0.25rem' }}>Paula Onouha</h4>
              <p className="font-mono text-blue" style={{ fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Mentor</p>
            </div>

            <div className="team-card">
              <h4 style={{ marginBottom: '0.25rem' }}>Afees Tiamiyu</h4>
              <p className="font-mono text-blue" style={{ fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Mentor</p>
            </div>

          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header">04 // Registration</div>

          <div className="card" style={{ padding: '5rem 2rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <h2>Secure Your Admission</h2>
            <p className="text-muted">Space for the virtual workshops is highly limited.</p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfv0uenfVZMsWyPnP7XHJTLYyPeSfC0qDdNhwXbfIJ7T7pv7A/viewform?usp=dialog" target="_blank" rel="noreferrer" className="btn-outline" style={{ maxWidth: '500px' }}>
              SUBMIT APPLICATION
            </a>
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Code of Conduct</h2>
          <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
            Our event is dedicated to providing a harassment-free workshop experience for everyone.
            We do not tolerate harassment of event participants in any form.
          </p>
          <a href="https://qworld.net/code-of-ethics-and-conduct/" target="_blank" rel="noreferrer" className="font-mono text-blue" style={{ fontSize: '0.875rem' }}>
            READ QWORLD'S CODE OF ETHICS AND CONDUCT &rarr;
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '1rem' }}>
            <Image src="/QWorld-logo_top-1.jpg" alt="QWorld Logo" width={120} height={25} style={{ objectFit: 'contain' }} />
            <Image src="/QNigeria_logo_white.png" alt="QNigeria Logo" width={80} height={80} style={{ objectFit: 'contain' }} />
          </div>
          <p>
            © {new Date().getFullYear()} QBronze199 Quantum Workshop.<br />
            Organized by QNigeria for the upcoming Qiskit Fall Fest in Nigeria.<br />
            Built in adherence with official IBM Qiskit Brand Guidelines.
          </p>
        </div>
      </footer>
    </main>
  );
}
