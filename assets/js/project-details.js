"use strict";

/**
 * Project data
 */
const projects = {
    1: {
        title: "Fintech Platform (Neon, Next.js, TypeScript)",
        subtitle:
            "A modern fintech platform leveraging serverless Postgres (Neon), Next.js, TypeScript, Drizzle ORM, and Tailwind CSS for a secure, scalable, and beautiful user experience.",
        heroImage: "./assets/images/fintech-home.png",
        overview: [
            "This project involved building a next-generation fintech platform with a focus on security, scalability, and developer experience. The stack includes:",
            "- Neon serverless Postgres for cloud-native, scalable database",
            "- Next.js for full-stack React and SSR",
            "- TypeScript for type safety",
            "- Drizzle ORM for type-safe database access",
            "- Tailwind CSS for rapid, modern UI development",
            "- Cloudinary for optimized image delivery",
            "The platform features secure authentication, real-time data, and a beautiful, responsive UI. It is designed for rapid iteration and easy deployment to modern cloud infrastructure.",
        ],
        features: [
            "Serverless Postgres (Neon) integration",
            "Full-stack Next.js with SSR",
            "Type-safe backend and frontend (TypeScript)",
            "Drizzle ORM for database access",
            "Tailwind CSS for modern UI",
            "Cloudinary for image optimization",
            "Secure authentication and user management",
            "Responsive and accessible design",
            "Real-time data and analytics dashboard",
        ],
        scope: [
            "UI/UX Design",
            "Frontend Development",
            "Backend/API Development",
            "Database Design",
            "Cloud Deployment",
            "Testing & QA",
        ],
        tools: [
            "Next.js",
            "TypeScript",
            "Neon",
            "Drizzle ORM",
            "Tailwind CSS",
            "Cloudinary",
            "Zod",
            "Radix UI",
            "React Hook Form",
            "Git",
            "Vercel",
        ],
        visuals: [
            "./assets/images/fintech-home.png",
            "./assets/images/fintech-directory-service.png",
            "./assets/images/fintech-mobile.png",
            "./assets/images/fintech-event-blog.png",
        ],
    },
    2: {
        title: "Grocery Store Platform",
        subtitle:
            "A full-featured online grocery store platform with real-time inventory, secure checkout, and a user-friendly shopping experience.",
        heroImage: "./assets/images/store-1.png",
        overview: [
            "This project delivers a modern grocery store experience online, allowing users to browse products, manage their cart, and securely check out with ease.",
            "The platform features real-time inventory, product search, and seamless payment integration using MOMO API for mobile money transactions.",
            "Built for scalability and reliability, it supports both desktop and mobile users with a responsive, intuitive interface.",
        ],
        features: [
            "Real-time inventory management",
            "Product search and filtering",
            "Secure checkout with MOMO API integration",
            "User-friendly cart and order management",
            "Mobile responsive design",
            "Order history and tracking",
            "Admin dashboard for store management",
        ],
        scope: [
            "UI/UX Design",
            "Frontend Development",
            "Backend/API Development",
            "Payment Integration",
            "Testing & QA",
            "Deployment",
        ],
        tools: [
            "React",
            "Node.js",
            "MongoDB",
            "MOMO API",
            "Express.js",
            "Redux",
            "Git",
            "Figma",
        ],
        visuals: [
            "./assets/images/store-1.png",
            "./assets/images/store-2.png",
            "./assets/images/store-3.png",
            "./assets/images/store-4.png",
            "./assets/images/store-6.png",
        ],
    },
    3: {
        title: "Food Delivery App",
        subtitle:
            "A modern food delivery app concept with real-time driver tracking, in-app communication, and a minimal, orange-accented UI.",
        heroImage: "./assets/images/delivery-app-1.png",
        overview: [
            "As we are mostly stuck in our homes, the crucial role of food delivery apps became obvious in the lives of today's food consumers. That's why we decided to experiment and create our own design concept. And here is the result!",
            "This app doesn't only offer its standard functionality — choosing a restaurant, adding your favorite dishes to the cart, and making an order. It also lets you keep track of where your delivery driver is and get in touch with them if needed.",
            "The shot features three main screens. The first one is search results screen with a user's location field on the top and app navigation at the bottom. The second — a cart with selected items. Calories displayed under each dish help to make rational choices. The last screen is a map view with a delivery driver card that gives you two options to reach them.",
            "The interface is minimalistic and light with orange as the main color. Cheerful and friendly orange is used for highlighting chosen elements and CTA buttons.",
        ],
        features: [
            "Restaurant search and filtering",
            "Add to cart and order management",
            "Real-time delivery driver tracking",
            "In-app chat and call with driver",
            "Calorie display for dishes",
            "Minimal, orange-accented UI",
            "Live map and delivery status",
        ],
        scope: [
            "UI/UX Design",
            "Mobile App Design",
            "Prototyping",
            "User Testing",
            "Branding",
        ],
        tools: [
            "Figma",
            "Adobe XD",
            "React Native",
            "Google Maps API",
            "Illustrator",
        ],
        visuals: [
            "./assets/images/delivery-app-1.png",
            "./assets/images/delivery-app-2.png",
            "./assets/images/delivery-app-4.png",
            "./assets/images/delivery-app-5.png",
        ],
    },
    4: {
        title: "ASPIRE Design Lab - Architecture Studio",
        subtitle:
            "A socially-conscious architecture practice grounded in research, advocacy, and community-centered design.",
        heroImage: "./assets/images/asp-1.png",
        overview: [
            "We believe architecture is a social art form that requires active cultural engagement and community participation. At ASPIRE Design Lab, we are grounded in listening deeply to the energy of the communities we serve, allowing their voices to guide and shape every design decision.",
            "With a mission of nurturing architecture as a social and environmental art form, ASPIRE Design Lab is grounded in research, advocacy, and action. We are committed to studying and steadying architecture for both society and the planet, framing our work in a practice of deep listening that allows the voices of the communities we serve to guide and shape every design decision.",
            "ASPIRE Design Lab is a factory of architectural ideas and decisions, where design becomes a process of inquiry, collaboration, and co-creation. We seek to craft spaces that go beyond solving functional needs — spaces that celebrate identity, foster belonging, and embody cultural and environmental consciousness.",
            "Our mission extends beyond building forms; it is about shaping environments that respond to people's lived experiences, their aspirations, and their relationship with place. Through this, we aim to inspire an architecture that is grounded in empathy, driven by purpose, and dedicated to the shared well-being of both people and planet.",
        ],
        features: [
            "Community-centered design approach",
            "Deep listening and cultural engagement",
            "Sustainable and environmentally conscious practices",
            "Research-driven architectural solutions",
            "Identity-celebrating spatial design",
            "Co-creation with communities",
            "Empathy-driven design process",
            "Social and environmental advocacy",
        ],
        scope: [
            "Architectural Design",
            "Community Engagement",
            "Research & Planning",
            "Sustainable Design",
            "Cultural Consultation",
            "Project Management",
        ],
        tools: [
            "AutoCAD",
            "Revit",
            "SketchUp",
            "Rhino",
            "V-Ray",
            "Adobe Creative Suite",
            "Enscape",
            "Lumion",
        ],
        visuals: [
            "./assets/images/asp-1.png",
            "./assets/images/asp-2.png",
            "./assets/images/asp-3.png",
            "./assets/images/asp-4.png",
        ],
    },
};

/**
 * Get project ID from URL parameters
 */
function getProjectId() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");
    return projectId ? parseInt(projectId) : 1;
}

/**
 * Load project data
 */
function loadProject() {
    const projectId = getProjectId();
    const project = projects[projectId] || projects[1];

    // Update title
    document.getElementById("project-title").textContent = project.title;
    document.title = `${project.title} - Project Details - Hoolix`;

    // Update subtitle
    document.getElementById("project-subtitle").textContent = project.subtitle;

    // Update hero image
    const heroImg = document.getElementById("project-hero-img");
    heroImg.src = project.heroImage;
    heroImg.alt = project.title;

    // Update overview
    const overviewEl = document.getElementById("project-overview");
    overviewEl.innerHTML = project.overview.map((p) => `<p>${p}</p>`).join("");

    // Update features
    const featuresEl = document.getElementById("project-features");
    featuresEl.innerHTML = project.features
        .map(
            (feature) => `
        <li>
            <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
            <span>${feature}</span>
        </li>
    `
        )
        .join("");

    // Update scope of work
    const scopeList = document.getElementById("project-scope");
    scopeList.innerHTML = project.scope
        .map((item) => `<li>${item}</li>`)
        .join("");

    // Update toolset
    const toolsetList = document.getElementById("project-toolset");
    toolsetList.innerHTML = project.tools
        .map(
            (tool) => `
        <li>
            <span class="tool-name">${tool}</span>
        </li>
    `
        )
        .join("");

    // Update visuals
    const visualsEl = document.getElementById("project-visuals");
    visualsEl.innerHTML = project.visuals
        .map(
            (visual, index) => `
        <figure class="visual-item img-holder" style="--width: 600; --height: 400">
            <img
                src="${visual}"
                width="600"
                height="400"
                loading="lazy"
                alt="${project.title} Visual ${index + 1}"
                class="img-cover"
            />
        </figure>
    `
        )
        .join("");
}

// Load project when page loads
document.addEventListener("DOMContentLoaded", loadProject);
