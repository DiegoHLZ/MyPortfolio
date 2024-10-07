const portfolioContainer = document.getElementById('portfolioContainer');

const projects = [
    {
        name: 'UniRider',
        image: 'assets/images/LogoUniRider.png',
        description: 'UniRider is a platform that facilitates carpooling among university students, allowing them to share rides in private vehicles. This system helps reduce transportation costs, decrease traffic, and provides a more comfortable and social travel experience by connecting students heading in the same direction.',
        frontendLink: 'https://feature--unirider.netlify.app',
        landingPageLink: 'https://devunirider.github.io/LandinPAge-URider/',
        mockup: 'https://www.figma.com/design/qJEigIskgVceMG5MaWfpe5/Mockups?node-id=0-1&t=r0h8pT7cQbqkVY62-1'
    },
    {
        name: 'GrapeFlow',
        image: 'assets/images/LogoGrapeFlow.png',
        description: 'My startup helps liquor manufacturers gather essential data like pH, temperature, aging time, and ingredient details. This information will be used in an app to aid sales and provide consumers with detailed product insights for informed purchases.',
        frontendLink: 'https://grapeflowweb.netlify.app/login',
        landingPageLink: 'https://villasystem.github.io/GrapeFlow-LandingPage/',
        mockup: 'https://www.figma.com/design/TxwjjSinjQyuqURJOZ4zbt/GrapeFlow?node-id=0-1&t=Ya0QJd2tuz30Vr9U-1'
    },
    {
        name: 'Job Opportunities',
        image: 'assets/images/LogoJobOpportunities.png',
        description: 'Job Opportunities is a platform designed to connect university graduates in Lima with companies and organizations, facilitating their access to the job market. It also offers training and certification courses to enhance their skills and increase their chances of professional success.',
        frontendLink: '', // No hay frontend
        landingPageLink: 'https://si385-2201-sx41-grupo-3.github.io/landing-page/indexES.html#contact',
        mockup: 'https://www.figma.com/proto/KevKCSrZG99r5ZRPSnNr0M/JobOpportunities'
    },
    {
        name: 'RuedaRent',
        image: 'assets/images/LogoRuedaRent.png',
        description: 'RuedaRent is a startup created by UPC students that provides a fast and flexible urban mobility alternative. Through a mobile app, it connects users who want to rent bicycles, scooters, and more with vehicle owners, simplifying the process and promoting a more active and sustainable lifestyle.',
        frontendLink: '', // No hay frontend
        landingPageLink: 'https://ruedarent-aplicacionesmoviles.github.io/LandingpageRuedarent/',
        mockup: 'https://www.figma.com/design/xVFf2ZEy9LYkrBsgVIKjNA/Ruedarent'
    }
];

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectImage = document.createElement('img');
    projectImage.src = project.image;
    projectImage.alt = project.name;
    projectImage.classList.add('project-image');

    const projectName = document.createElement('h3');
    projectName.textContent = project.name;

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Solo muestra el botón de Frontend si hay enlace
    if (project.frontendLink) {
        const frontendLink = document.createElement('a');
        frontendLink.href = project.frontendLink;
        frontendLink.target = '_blank';
        frontendLink.classList.add('project-link');
        frontendLink.textContent = 'Frontend';
        buttonContainer.appendChild(frontendLink);
    }

    const landingPageLink = document.createElement('a');
    landingPageLink.href = project.landingPageLink;
    landingPageLink.target = '_blank';
    landingPageLink.classList.add('project-link');
    landingPageLink.textContent = 'Landing Page';

    const mockupLink = document.createElement('a');
    mockupLink.href = project.mockup;
    mockupLink.target = '_blank';
    mockupLink.classList.add('project-link', 'secondary');
    mockupLink.textContent = 'Mockup';

    buttonContainer.appendChild(landingPageLink);
    buttonContainer.appendChild(mockupLink);

    projectDiv.appendChild(projectImage);
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(projectDescription);
    projectDiv.appendChild(buttonContainer);

    portfolioContainer.appendChild(projectDiv);
});
