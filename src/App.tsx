import React, { useState } from 'react';

export default function App() {
  const [workerCount, setWorkerCount] = useState(12400);
  const [activePipeline, setActivePipeline] = useState('GRAPH-REPLAY');

  const p99Latency = (3.2 + (workerCount / 20000)).toFixed(2);
  const throughput = Math.round(workerCount * 8.4);

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">Kronos Runtime</a>
          <span className="edge-coords">EDGE MESH · P99 &lt;8MS · PROTOCOL V3.4</span>
        </div>

        <nav className="edge-nav-links" aria-label="Primary Navigation">
          <a href="#telemetry" onClick={() => setActivePipeline('TASK-DAG')}>DAG Mesh</a>
          <a href="#telemetry" onClick={() => setActivePipeline('REPLAY')}>Trace Log</a>
          <a href="#telemetry" onClick={() => setActivePipeline('CONSENSUS')}>Consensus</a>
          <a href="#telemetry" onClick={() => setActivePipeline('CLUSTERS')}>Edge Nodes</a>
        </nav>

        <a href="#deploy" className="edge-action-btn">
          Deploy Cluster
        </a>
      </header>

      {/* HERO SECTION */}
      <header id="top" className="hero-fullbleed">
        <div className="hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">SUB-10MS DISTRIBUTED AGENT MESH</span>
            <h1 className="hero-title">
              Autonomous Agent Runtime
              <span className="hero-subline">Sub-Millisecond Task Mesh.</span>
            </h1>
            <p className="hero-lead">
              Deploy, route, and orchestrate thousands of long-running autonomous AI agents across low-latency edge clusters with cryptographic trace replayability.
            </p>
            <a href="#telemetry" className="editorial-cta-btn">
              Open Cluster Telemetry
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Runtime Benchmarks">
            <span>&lt;8ms P99 LATENCY</span>
            <span>·</span>
            <span>100K CONCURRENT WORKERS</span>
            <span>·</span>
            <span>CRYPTOGRAPHIC TRACE</span>
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="telemetry" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">KRONOS CLUSTER SIMULATOR // REGION: GLOBAL-MESH</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Dynamic Worker Pool &amp; Throughput
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Simulate enterprise agent workloads under continuous task DAG scheduling. Zero synthetic overhead, deterministic state snapshots.
            </p>

            <div style={{ marginBottom: '1.5rem', background: 'rgba(0,0,0,0.3)', padding: '1.5rem', border: '1px solid var(--border-soft)' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.76rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                <span>CONCURRENT AUTONOMOUS WORKERS</span>
                <span style={{ color: 'var(--accent-color)' }}>{workerCount.toLocaleString()} ACTIVE AGENTS</span>
              </label>
              <input
                type="range"
                min="100"
                max="50000"
                step="500"
                value={workerCount}
                onChange={(e) => setWorkerCount(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
              />
            </div>

            <table className="spec-table">
              <tbody>
                <tr>
                  <td className="spec-label">ACTIVE EXECUTION PIPELINE</td>
                  <td className="spec-value">{activePipeline}</td>
                </tr>
                <tr>
                  <td className="spec-label">P99 INVOCATION LATENCY</td>
                  <td className="spec-value" style={{ color: 'var(--accent-color)' }}>{p99Latency} ms</td>
                </tr>
                <tr>
                  <td className="spec-label">GLOBAL EVENT THROUGHPUT</td>
                  <td className="spec-value">{throughput.toLocaleString()} TASKS / SEC</td>
                </tr>
                <tr>
                  <td className="spec-label">CRYPTOGRAPHIC TRACE STATUS</td>
                  <td className="spec-value" style={{ color: '#fff' }}>ZERO-KNOWLEDGE VERIFIED</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ border: '1px solid var(--border-soft)', padding: '2.5rem', background: 'rgba(0, 0, 0, 0.4)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-color)', fontWeight: 700 }}>WORKER CLUSTER SPECTRUM</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>MESH: NOMINAL</span>
            </div>

            <div style={{ height: '220px', display: 'flex', alignItems: 'flex-end', gap: '8px', background: 'rgba(0,0,0,0.6)', padding: '1rem', border: '1px solid var(--border-soft)' }}>
              {[40, 65, 80, 50, 95, 85, 70, 90, 60, 75, 88, 92].map((base, idx) => {
                const height = Math.min(100, Math.round((base * workerCount) / 25000));
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      background: idx % 2 === 0 ? 'var(--accent-color)' : 'rgba(255,255,255,0.3)',
                      transition: 'height 0.2s ease'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>
              <span>EDGE CONSENSUS</span>
              <span style={{ color: 'var(--accent-color)' }}>SUB-10MS VERIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="deploy" style={{ borderTop: '1px solid var(--border-soft)', padding: '4rem 3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
          Kronos Runtime Engine
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--accent-color)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          DISTRIBUTED AUTONOMOUS MESH · CLUSTER DEPLOYMENTS ACTIVE FOR 2026
        </p>
        <div style={{ display: 'inline-flex', gap: '1.5rem' }}>
          <a href="#top" className="editorial-cta-btn" style={{ padding: '0.75rem 1.6rem', fontSize: '0.72rem' }}>
            RETURN TO SUMMIT
          </a>
        </div>
      </footer>
    </div>
  );
}
