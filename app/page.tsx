"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-up").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const whatsappLink = "https://wa.me/5515998765432?text=Olá Impacta, gostaria de uma proposta personalizada para meu evento!";

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo" style={{fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em', fontSize: '1.2rem'}}>IMPACTA<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#servicos">Soluções</a></li>
          <li><a href="#diferenciais">Diferenciais</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <a href={whatsappLink} target="_blank" className="btn btn-primary" style={{ padding: "0.6rem 1.5rem", fontSize: "0.75rem" }}>
          Solicitar Proposta
        </a>
      </nav>

      <header className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000')" }}>
        <div className="container">
          <div className="hero-content animate-up">
            <h1 className="animate-up active">
              <span className="hero-part1" style={{fontSize: '2rem', display: 'block', fontWeight: 700}}>A tecnologia que gera</span>
              <span className="drama-text" style={{fontSize: '6.5rem', display: 'block', lineHeight: 1, color: 'var(--accent)'}}>Impacto.</span>
            </h1>
            <p className="animate-up active" style={{ fontSize: "1.2rem", margin: "2rem 0", maxWidth: "600px", opacity: 0.9 }}>
              Transformamos eventos corporativos em experiências memoráveis com ativações gamificadas, tecnologia de ponta e engajamento real.
            </p>
            <div className="animate-up active">
              <a href={whatsappLink} target="_blank" className="btn btn-primary">
                Agendar uma conversa
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="servicos" className="section">
        <div className="container">
          <div style={{ marginBottom: "4rem" }}>
            <span className="mono-text" style={{ color: "var(--primary)" }}>01 / SOLUÇÕES DIGITAIS</span>
            <h2 style={{ fontSize: "3.5rem", marginTop: "1rem" }}>Ativações de <span className="drama-text" style={{color: 'var(--accent)', display: 'inline'}}>Alta Performance.</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            <div className="glass-card animate-up">
              <span className="mono-text" style={{ color: "var(--accent)" }}>01 / GAMIFICAÇÃO</span>
              <h3 style={{ margin: "1.5rem 0" }}>Jogos Personalizados</h3>
              <p>Desenvolvimento de games exclusivos que refletem a identidade da sua marca e educam seu público de forma divertida.</p>
            </div>
            <div className="glass-card animate-up">
              <span className="mono-text" style={{ color: "var(--accent)" }}>02 / ENGAJAMENTO</span>
              <h3 style={{ margin: "1.5rem 0" }}>Quiz Interativo</h3>
              <p>Testes de conhecimento com ranking em tempo real. Estimule a competição saudável e fixe conceitos da sua convenção.</p>
            </div>
            <div className="glass-card animate-up">
              <span className="mono-text" style={{ color: "var(--accent)" }}>03 / HARDWARE</span>
              <h3 style={{ margin: "1.5rem 0" }}>Totens & LED</h3>
              <p>Totens touch screen e painéis de LED interativos integrados para captar dados e atrair olhares no seu stand.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="section" style={{backgroundColor: 'var(--primary)', color: 'white'}}>
        <div className="container">
          <div className="animate-up" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "1.2rem", opacity: 0.6, marginBottom: "2rem" }}>A maioria das agências foca em: apenas expor a marca.</p>
            <h2 className="drama-text" style={{ fontSize: "5rem", color: "var(--accent)" }}>
              Nós focamos em: <span style={{ color: "white" }}>Dados e Resultado.</span>
            </h2>
            <p style={{marginTop: '3rem', fontSize: '1.1rem', opacity: 0.8}}>
              Personalização completa, relatórios detalhados em tempo real e integração direta com seu CRM. 
              Suporte técnico presencial para que você foque apenas no seu cliente.
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="animate-up">
              <span className="mono-text">Nossa Visão</span>
              <h2 style={{ marginBottom: "2rem", marginTop: '1rem' }}>Experiência internacional para o mercado brasileiro.</h2>
              <p style={{ marginBottom: "1.5rem" }}>
                A Impacta nasceu da necessidade de elevar a régua tecnológica dos eventos corporativos no Brasil. Unimos o que há de melhor em marketing com a robustez da tecnologia americana.
              </p>
              <div style={{ display: "flex", gap: "2rem", marginTop: '3rem' }}>
                <div>
                  <h4 className="mono-text" style={{ color: "var(--primary)" }}>Suporte</h4>
                  <p>Atenção Total</p>
                </div>
                <div>
                  <h4 className="mono-text" style={{ color: "var(--primary)" }}>Hub</h4>
                  <p>Soluções 360º</p>
                </div>
              </div>
            </div>
            <div className="animate-up">
              <div className="glass-card" style={{ padding: "0", overflow: "hidden", height: "500px" }}>
                <img src="https://images.unsplash.com/photo-1561489396-888724a1543d?auto=format&fit=crop&q=80&w=1000" alt="Sobre nós" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="glass-card animate-up" style={{ textAlign: "center", background: "white" }}>
            <h2 className="drama-text" style={{ fontSize: "4rem", marginBottom: "2rem" }}>Vamos criar algo juntos?</h2>
            <p style={{ fontSize: "1.3rem", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem" }}>
              Solicite uma proposta personalizada e descubra como a Impacta pode transformar o ROI do seu próximo evento.
            </p>
            <a href={whatsappLink} target="_blank" className="btn btn-primary" style={{ fontSize: "1.2rem", padding: "1.5rem 4rem" }}>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="section" style={{ background: "var(--dark)", color: "white", padding: "80px 0 20px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "3rem", marginBottom: "5rem" }}>
            <div>
              <h2 style={{ color: "white", marginBottom: "1rem" }}>IMPACTA.</h2>
              <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: "300px" }}>
                Ativações digitais inteligentes para o mercado corporativo de alta gama.
              </p>
            </div>
            <div>
              <h4 className="mono-text" style={{ marginBottom: "1.5rem", color: "white" }}>Contato</h4>
              <p style={{ color: "rgba(255,255,255,0.5)" }}>15 99876-5432</p>
              <p style={{ color: "rgba(255,255,255,0.5)" }}>contato@impactaeventos.com.br</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", textAlign: "center", fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}>
            <p>&copy; {new Date().getFullYear()} Impacta Eventos Interativos. Todos os direitos reservados.</p>
            <p style={{ marginTop: "1rem" }}>
              Photos by <a href="https://unsplash.com" target="_blank" style={{ color: "white" }}>Unsplash</a> | Created by <a href="https://rapisite.com.br" target="_blank" style={{ color: "white" }}>RapiSite</a>
            </p>
          </div>
        </div>
      </footer>

      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}
