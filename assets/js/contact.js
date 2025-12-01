"use strict";

/**
 * Prefill email field if available
 */
document.addEventListener("DOMContentLoaded", function () {
    const emailField = document.getElementById("email");
    if (emailField && !emailField.value) {
        emailField.placeholder = "your.email@example.com";
    }
});

/**
 * Contact form handler for Formspree
 */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        const category = document.getElementById("category").value;

        // Validate category is selected
        if (!category) {
            e.preventDefault();
            alert("Please select a project category before submitting.");
            document.getElementById("category").focus();
            return false;
        }

        // Update hidden subject field with category
        const subjectField = document.getElementById("subject");
        const hiddenSubjectField = document.getElementById("_subject");
        if (hiddenSubjectField && subjectField) {
            hiddenSubjectField.value = `${subjectField.value} - ${category}`;
        }

        // Include category in the message body for Formspree
        const messageField = document.getElementById("message");
        const originalMessage = messageField.value;
        const messageWithCategory = `Project Category: ${category}\n\n${originalMessage}`;
        messageField.value = messageWithCategory;

        // Form will submit to Formspree automatically
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";
        }
    });

    // Handle form submission success/error
    contactForm.addEventListener("submit", function (e) {
        // Formspree will handle the redirect
        // We can add custom success handling if needed
    });
}

// Handle Formspree redirect (if using redirect URL)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("success") === "true") {
    // Show success message
    const successMessage = document.createElement("div");
    successMessage.className = "form-success";
    successMessage.style.cssText =
        "background-color: var(--go-green); color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; text-align: center;";
    successMessage.textContent =
        "Thank you! Your message has been sent successfully.";
    contactForm?.parentNode?.insertBefore(successMessage, contactForm);
}
