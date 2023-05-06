class Menu extends HTMLElement {
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
                <img onclick="window.location.href=''" id="imgPadronizacao" src="./img/padronizacao.png" alt="">
                <p>Padronização</p>
                </div>
                <div class="container_icon_menu">
                  <img onclick="window.location.href=''" id="imgInsights" src="./img/historico.png" alt="">
                  <p>Insights</p>
                </div>
                <div class="container_icon_menu">
                  <img onclick="window.location.href='./configuracoes.html'" id="imgConfiguracoes" src="./img/configuracoes.png" alt="">
                  <p>Configurações</p>
                </div>
              </div>
              <img onclick="window.location.href='./index.html'" id="imgLogout" src="./img/logout.png" alt="">
            </div>
        `
  }
}

customElements.define('main-menu', Menu);


class IconITSM extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="icon-ITSM">
          <img class="img-icon-itsm" onclick="window.location.href='https://beaver.auvo.com.br/'" src="./img/auvo-icon.png" alt="" width="50px">
      </div>
      `
  }
}

customElements.define('main-iconitsm', IconITSM);


class MenuEditorVideo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container_menu">
      <img class="imgLogoMenu" src="./img/logoMenu.png" alt="">
      <div class="container_icons">
        <div class="container_icon_menu">
          <img onclick="window.location.href=''" id="imgHome" src="./img/home.png" alt="">
          <p>Home</p>
        </div>
        <div class="container_icon_menu">
          <img onclick="window.location.href=''" id="imgEnviarReporte" src="./img/enviarReporte.png" alt="">
          <p>Enviar Reporte</p>
        </div>
        <div class="container_icon_menu">
          <img onclick="window.location.href=''" id="imgHistorico" src="./img/historico.png" alt="">
          <p>Histórico</p>
        </div>
      </div>
      <img onclick="window.location.href='./index.html'" id="imgLogout" src="./img/logout.png" alt="">
      </div>
      `
  }
}

customElements.define('main-menu-editor', MenuEditorVideo);