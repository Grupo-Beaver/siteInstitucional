class Menu extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="container_menu">
              <img class="imgLogoMenu" src="./img/logoMenu.png" alt="">
              <div class="container_icons">
                <div class="container_icon_menu">
                  <img onclick="window.location.href='./home.html'" id="imgHome" src="./img/home.png" alt="">
                  <p>Home</p>
                </div>
                <div class="container_icon_menu">
                  <img onclick="window.location.href='./explorar.html'" id="imgExplorar" src="./img/lupa.png" alt="">
                  <p>Explorar</p>
                </div>
                <div class="container_icon_menu">
                  <img onclick="window.location.href=''" id="imgHistorico" src="./img/historico.png" alt="">
                  <p>Histórico</p>
                </div>
                <div class="container_icon_menu">
                  <img onclick="window.location.href=''" id="imgConfiguracoes" src="./img/configuracoes.png" alt="">
                  <p>Configurações</p>
                </div>
              </div>
              <img onclick="window.location.href='./index.html'" id="imgLogout" src="./img/logout.png" alt="">
            </div>
        ` 
    }
}

customElements.define('main-menu', Menu);