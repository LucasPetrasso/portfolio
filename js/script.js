"use strict";

// ==================== MENU MOBILE ====================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});


// ==================== NAVEGAÇÃO SUAVE ====================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


// ==================== ANIMAÇÕES AO ENTRAR NA TELA ====================

const animatedElements = document.querySelectorAll(
    ".section-heading, .about-text, .technology-card, .project-card, .contact-content"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

animatedElements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});


// ==================== FORMULÁRIO ====================

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
        alert("Preencha todos os campos antes de enviar.");
        return;
    }

    const button = contactForm.querySelector("button[type='submit']");

    button.textContent = "Mensagem enviada!";
    button.disabled = true;

    contactForm.reset();

    setTimeout(() => {
        button.textContent = "Enviar mensagem";
        button.disabled = false;
    }, 3000);
});