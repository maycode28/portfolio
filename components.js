class SiteHeader extends HTMLElement {
  connectedCallback() {
    // 상세페이지 여부 감지 (data-detail 속성으로 구분)
    const isDetail = this.hasAttribute("data-detail");
    const basePath = this.getAttribute("data-base") || "";

    this.innerHTML = `
      <header class="site-header">
        <a
          class="brand"
          href="${basePath}index.html#home"
          data-ko="김지현 포트폴리오"
          data-en="May Kim Portfolio"
        >김지현 포트폴리오</a>
        <div class="header-actions">
          <button
            class="theme-toggle"
            type="button"
            aria-label="테마 전환"
            data-theme-toggle
          >
            <span class="material-symbols-outlined theme-icon">dark_mode</span>
          </button>
          <button
            class="lang-toggle"
            type="button"
            aria-label="Switch to English"
            data-lang-toggle
          >EN</button>
          <button
            class="menu-button"
            type="button"
            aria-label="메뉴 열기"
            aria-expanded="false"
          >
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
        <nav class="site-nav" aria-label="주요 메뉴">
          <a href="${basePath}index.html#home"     data-ko="홈"      data-en="Home">홈</a>
          <a href="${basePath}index.html#about"    data-ko="소개"    data-en="About">소개</a>
          <a href="${basePath}index.html#skills"   data-ko="기술"    data-en="Skills">기술</a>
          <a href="${basePath}index.html#projects" data-ko="프로젝트" data-en="Projects">프로젝트</a>
          <a href="${basePath}index.html#education" data-ko="교육"   data-en="Education">교육</a>
          <a href="${basePath}index.html#contact"  data-ko="연락처"  data-en="Contact">연락처</a>
        </nav>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <strong data-ko="김지현 포트폴리오" data-en="May Kim Portfolio"
          >김지현 포트폴리오</strong>
        <span>© 2026 Jihyeon Kim. All rights reserved.</span>
        <div>
          <a href="https://github.com/maycode28" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://velog.io/@maycode28/posts" target="_blank" rel="noreferrer">Velog</a>
          <a href="mailto:may.code.28@gmail.com">Email</a>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
