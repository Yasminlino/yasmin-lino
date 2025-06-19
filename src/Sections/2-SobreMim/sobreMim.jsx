import React from "react";
import './sobreMim.css';

export default function SobreMim() {
    return (
        <section className="sobre-mim" id="about">
            <div className="container sobre-layout">
                {/* <div className="sobre-img">
                    <img src="/yasmin-lino/assets/img/sobreMim.jpg" alt="Yasmin Lino" />
                </div> */}

                <div className="sobre-texto">
                    <h2 className="titulo">Sobre Mim</h2>
                    <p>Prazer, sou <strong>Yasmin Lino</strong> — desenvolvedora especializada em criar experiências digitais <span className="destaque">bonitas, funcionais e estratégicas</span>.</p>
                    <p>Transformo ideias em interfaces <span className="destaque">intuitivas e encantadoras</span>, com atenção aos detalhes e ao que realmente importa: o seu usuário.</p>
                    <div className="sobre-cards">
                        <div className="card">
                            <h3>💡 Criatividade</h3>
                            <p>Design limpo e moderno aliado a propósito.</p>
                        </div>
                        <div className="card">
                            <h3>⚙️ Técnica</h3>
                            <p>Código bem estruturado, leve e responsivo.</p>
                        </div>
                        <div className="card">
                            <h3>💬 Comunicação</h3>
                            <p>Alinhamento claro do início ao fim do projeto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
