import '../styles/About.css';

const capabilities = [
  { icon: '🎯', title: 'AI-Based Interview Practice',  text: 'Role-specific questions across technical, behavioural, and situational categories.' },
  { icon: '⚡', title: 'Real-Time Feedback Engine',    text: 'Every answer is analysed for completeness, clarity, and keyword alignment instantly.' },
  { icon: '🗣️', title: 'Communication Skills',        text: 'Detects filler words and vague language. Coaches you toward confident, structured answers.' },
  { icon: '💪', title: 'Confidence Building',          text: 'Repeated practice in a zero-pressure environment builds consistency over time.' },
  { icon: '🔍', title: 'Skill Gaps Analysis',          text: 'Post-session reports highlight weak areas with targeted resources and exercises.' },
  { icon: '🏆', title: 'Interview Readiness Score',    text: 'A composite score tells you exactly how ready you are and what to focus on next.' },
];

const codeLines = [
  [{ t: 'const ', c: 'kw' }, { t: 'session = ' }, { t: 'await ', c: 'fn' }, { t: 'ai.' }, { t: 'createSession', c: 'fn' }, { t: '({' }],
  [{ t: '  role: ' }, { t: '"Software Engineer"', c: 'str' }, { t: ',' }],
  [{ t: '  level: ' }, { t: '"Senior"', c: 'str' }, { t: ',' }],
  [{ t: '  feedback: ' }, { t: 'true', c: 'kw' }],
  [{ t: '});' }],

];

function About() {
  return (
    <main className="page about">
      <div className="container">
        <header className="about__header fade-up">
          <h1 className="page-heading">Built to make you interview-ready</h1>
          <p className="page-sub">
            We combine large language models with structured interview methodology
            to give every candidate the edge of professional coaching.
          </p>
        </header>

        <section className="about__mission fade-up-2">
          <div className="about__mission-text">
            <h3>Our Mission</h3>
            <p>
              Too many qualified candidates fail interviews not because they lack skills —
              but because they lack practice. We're here to fix that.
            </p>
            <p>
              The AI Mock Interview System gives you unlimited, on-demand practice with
              an intelligent system that adapts to your role and gives honest feedback.
            </p>
            <p>
              Whether you're preparing for your first job or a senior leadership role,
              we have the questions and data to get you there.
            </p>
          </div>
          <div className="about__mission-visual" aria-hidden="true">
            {codeLines.map((line, i) => (
              <div key={i}>
                <span className="line-num">{String(i + 1).padStart(2, '0')}</span>
                {line.map((p, j) => (
                  <span key={j} className={p.c || ''}>{p.t}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="about__features fade-up-3">
          <p className="about__features-title">Capabilities</p>
          <div className="about__grid">
            {capabilities.map((c, i) => (
              <div className="about-card" key={c.title}>
                <p className="about-card__num">0{i + 1}</p>
                <span className="about-card__icon">{c.icon}</span>
                <h3 className="about-card__title">{c.title}</h3>
                <p className="about-card__text">{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
