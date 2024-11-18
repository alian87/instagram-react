import React from 'react';

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="usuario">
                <img src="assets/catanacomics.svg" alt="imagem de perfil" />
                <div className="texto">
                    <span>
                        <strong>catanacomics</strong>
                        <ion-icon name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {/* As sugestões serão renderizadas dinamicamente */}
            </div>
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais
                relevantes • Hashtags • Idioma
            </div>
            <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
        </div>
    );
}
