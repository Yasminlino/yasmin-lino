import React, { useState } from "react";
import "./heroSection.css";

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="hero-section">
            <nav className="navbar">
                <img className="logo" src="/yasmin-lino/assets/img/logo-icon.png" alt="Logo" />

                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li><a href="#about">Sobre Mim</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                    <li><a href="#contact">Contatos</a></li>
                    <li><a href="#form">Formulário</a></li>
                </ul>
            </nav>

            <div className="hero-content container">
                <div className="hero-text">
                    <h1>
                        Olá, eu sou <span className="destaque">Yasmin Lino.</span>
                    </h1>

                    {/* Imagem só para mobile */}
                    <div className="mobile-img">
                        <img src="/yasmin-lino/assets/img/perfil.jpg" alt="Yasmin Lino" />
                    </div>

                    <h2>Desenvolvedora de sites e páginas de vendas personalizadas.</h2>
                    <p>
                        Transformo ideias em <span className="destaque">interfaces elegantes</span> e funcionais.
                        <br />
                        Sou especialista em desenvolver experiências <span className="destaque">web modernas, responsivas e intuitivas.</span>
                    </p>
                </div>

                {/* Imagem padrão (desktop) */}
                <div className="hero-image">
                    <img src="/yasmin-lino/assets/img/perfil.jpg" alt="Yasmin Lino" />
                </div>

            </div>
        </section>
    );
}
