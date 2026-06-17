function initSite() {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".site-nav");
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const langToggle = document.querySelector("[data-lang-toggle]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeIcon = document.querySelector(".theme-icon");
  const translatables = [...document.querySelectorAll("[data-ko][data-en]")];

  const sections = navLinks
    .map((link) => {
      const href = link.getAttribute("href");
      return href?.startsWith("#") ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  // ─── LANGUAGE LOGIC ───
  function setLanguage(lang) {
    const nextLang = lang === "en" ? "en" : "ko";
    document.documentElement.lang = nextLang;
    translatables.forEach((element) => {
      element.textContent = element.dataset[nextLang];
    });
    if (langToggle) {
      langToggle.textContent = nextLang === "ko" ? "EN" : "KO";
      langToggle.setAttribute(
        "aria-label",
        nextLang === "ko" ? "Switch to English" : "한국어로 전환",
      );
    }
    localStorage.setItem("portfolio-language", nextLang);
  }

  langToggle?.addEventListener("click", () => {
    const currentLang = document.documentElement.lang === "en" ? "en" : "ko";
    setLanguage(currentLang === "ko" ? "en" : "ko");
  });

  const savedLang = localStorage.getItem("portfolio-language");
  setLanguage(savedLang === "en" ? "en" : "ko");

  // ─── THEME TOGGLE LOGIC (DARK MODE) ───
  function setTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeIcon) themeIcon.textContent = "light_mode";
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "dark_mode";
      localStorage.setItem("portfolio-theme", "light");
    }
  }

  themeToggle?.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "light" : "dark");
  });

  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(systemPrefersDark ? "dark" : "light");
  }

  // ─── UI INTERACTION LOGIC ───
  menuButton?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  if (sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`,
            );
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
  }
}

document.addEventListener("DOMContentLoaded", initSite);
