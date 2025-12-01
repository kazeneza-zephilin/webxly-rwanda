"use strict";

/**
 * WhatsApp Modal Handler
 */
const whatsappModal = document.getElementById("whatsappModal");
const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappCategory = document.getElementById("whatsappCategory");
const whatsappContinueBtn = document.getElementById("whatsappContinueBtn");
const modalCloseBtns = document.querySelectorAll("[data-modal-close]");

/**
 * Open WhatsApp modal
 */
function openWhatsAppModal() {
    if (whatsappModal) {
        whatsappModal.classList.add("active");
        document.body.style.overflow = "hidden";
        // Focus on category select
        if (whatsappCategory) {
            setTimeout(() => whatsappCategory.focus(), 100);
        }
    }
}

/**
 * Close WhatsApp modal
 */
function closeWhatsAppModal() {
    if (whatsappModal) {
        whatsappModal.classList.remove("active");
        document.body.style.overflow = "";
        // Reset category selection
        if (whatsappCategory) {
            whatsappCategory.value = "";
        }
    }
}

/**
 * Open WhatsApp with selected category
 */
function openWhatsApp() {
    const category = whatsappCategory ? whatsappCategory.value : "";

    if (!category) {
        alert("Please select a project category.");
        if (whatsappCategory) {
            whatsappCategory.focus();
        }
        return;
    }

    const baseMessage = "Hi! I'm interested in your services. Can we chat?";
    const categoryMessage = `${baseMessage}\n\nProject Category: ${category}`;
    const whatsappText = encodeURIComponent(categoryMessage);
    const whatsappUrl = `https://wa.me/250790005933?text=${whatsappText}`;

    // Close modal
    closeWhatsAppModal();

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

// Event Listeners
if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function (e) {
        e.preventDefault();
        openWhatsAppModal();
    });
}

if (whatsappContinueBtn) {
    whatsappContinueBtn.addEventListener("click", function () {
        openWhatsApp();
    });
}

// Close modal when clicking overlay or close button
modalCloseBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        closeWhatsAppModal();
    });
});

// Close modal on Escape key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && whatsappModal?.classList.contains("active")) {
        closeWhatsAppModal();
    }
});

// Allow Enter key to submit when category is selected
if (whatsappCategory) {
    whatsappCategory.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && this.value) {
            e.preventDefault();
            openWhatsApp();
        }
    });
}
