document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { name: "myDevGuides", description: "My personal information library on Software Engineering technologies.", link: "https://vscript.vercel.app" },
        { name: "AudioCloud", description: "A music sharing platform for music engineers and artists alike.", link: "https://s3-audio-uploader.vercel.app" },
        { name: "myLinkedIn", description: "Connect with me professionally.", link: "https://www.linkedin.com/in/camilogomezvalencia" },
        { name: "myGitHub", description: "Explore my projects and contributions.", link: "https://www.github.com/fullstacknyc" }
    ];

    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Take Me There</a>
        `;

        projectsContainer.appendChild(projectCard);
    });
});
