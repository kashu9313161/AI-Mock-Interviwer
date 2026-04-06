import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <main className="page home">
      <section className="home__hero">
        <div className="home__hero-inner">
          <h1 className="home__heading fade-up">
            Welcome to <span className="accent">AI Mock Interview</span> System
          </h1>
          <p className="home__desc fade-up-2">
            Practice technical and behavioural interviews with an AI that gives
            real-time feedback, tracks your progress, and helps you land the role you want.
          </p>
          <div className="home__actions fade-up-3">
            <Link to="/about" className="btn-primary">Start Interview →</Link>
            <Link to="/about" className="btn-ghost">Learn More</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
