document.addEventListener("DOMContentLoaded", function () {
    // Project data with categories and optional icon
    const projects = [
        { name: "AudioCloud", description: "A music sharing platform for music engineers and artists alike.", link: "https://s3-audio-uploader.vercel.app", category: "Project" },
        { name: "ApocalypticZ", description: "A top down zombie rpg survival.", link: "https://apocalypticz.vercel.app", category: "Project" },
        { name: "DevGuides", description: "A library for software engineers who wish to read about systems engineering.", link: "https://vscript.vercel.app", category: "Project" }
    ];

    // Get unique categories for filtering
    const categories = ["All", ...new Set(projects.map(p => p.category))];

    const projectsContainer = document.getElementById("projects-container");
    const filterContainer = document.getElementById("filter-container");

    // Render filter buttons
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.setAttribute("aria-label", `Show ${cat} links`);
        if (cat === "All") btn.classList.add("active");
        btn.addEventListener("click", () => {
            document.querySelectorAll("#filter-container button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderProjects(cat === "All" ? projects : projects.filter(p => p.category === cat));
        });
        filterContainer.appendChild(btn);
    });

    // Render project cards with fade-in animation
    function renderProjects(list) {
        projectsContainer.innerHTML = "";
        list.forEach((project, idx) => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.setAttribute("tabindex", "0");
            projectCard.setAttribute("aria-label", project.name);

            // Staggered animation delay
            projectCard.style.animationDelay = `${0.1 + idx * 0.1}s`;

            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" rel="noopener" aria-label="Visit ${project.name}">Take Me There</a>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
    renderProjects(projects);

    // Dark mode toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    function setDarkMode(on) {
        document.body.classList.toggle("dark-mode", on);
        localStorage.setItem("darkMode", on ? "1" : "0");
        darkModeToggle.textContent = on ? "☀️" : "🌙";
    }
    // Load dark mode preference
    setDarkMode(localStorage.getItem("darkMode") === "1");
    darkModeToggle.addEventListener("click", () => {
        setDarkMode(!document.body.classList.contains("dark-mode"));
    });
});
