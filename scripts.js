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
        name: 'JobOpportunities',
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

// Traducciones
const translations = {
    en: {
        title: "My Portfolio",
        navAbout: "About",
        navPortfolio: "Portfolio",
        navContact: "Contact",
        aboutTitle: "I'm <span>Diego Huincho</span>",
        aboutSubtitle: "Front-End Developer",
        aboutText: "I'm a Software Engineering student at Universidad Peruana de Ciencias Aplicadas (UPC), currently in my 7th semester.",
        contactButton: "Contact Me",
        skillsTitle: "My Skills",
        projects: "My Projects",
        contactTitle: "Contact Me",
        scrollMessage: "Thanks for Scrolling",
        projectsDescriptions: {
            UniRider: "UniRider is a platform that facilitates carpooling among university students, allowing them to share rides in private vehicles. This system helps reduce transportation costs, decrease traffic, and provides a more comfortable and social travel experience by connecting students heading in the same direction.",
            GrapeFlow: "My startup helps liquor manufacturers gather essential data like pH, temperature, aging time, and ingredient details. This information will be used in an app to aid sales and provide consumers with detailed product insights for informed purchases.",
            JobOpportunities: "Job Opportunities is a platform designed to connect university graduates in Lima with companies and organizations, facilitating their access to the job market. It also offers training and certification courses to enhance their skills and increase their chances of professional success.",
            RuedaRent: "RuedaRent is a startup created by UPC students that provides a fast and flexible urban mobility alternative. Through a mobile app, it connects users who want to rent bicycles, scooters, and more with vehicle owners, simplifying the process and promoting a more active and sustainable lifestyle."
        }
    },
    es: {
        title: "Mi Portafolio",
        navAbout: "Acerca de",
        navPortfolio: "Portafolio",
        navContact: "Contacto",
        aboutTitle: "Soy <span>Diego Huincho</span>",
        aboutSubtitle: "Desarrollador Front-End",
        aboutText: "Soy estudiante de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC), actualmente en mi séptimo semestre.",
        contactButton: "Contáctame",
        skillsTitle: "Mis Habilidades",
        projects: "Mis Proyectos",
        contactTitle: "Contáctame",
        scrollMessage: "Gracias por Desplazarte",
        projectsDescriptions: {
            UniRider: "UniRider es una plataforma que facilita el viaje compartido entre estudiantes universitarios, permitiéndoles compartir viajes en vehículos privados. Este sistema ayuda a reducir los costos de transporte, disminuir el tráfico y proporciona una experiencia de viaje más cómoda y social al conectar estudiantes que se dirigen en la misma dirección.",
            GrapeFlow: "Mi startup ayuda a los fabricantes de licores a recopilar datos esenciales como el pH, la temperatura, el tiempo de envejecimiento y los detalles de los ingredientes. Esta información se utilizará en una aplicación para facilitar las ventas y proporcionar a los consumidores información detallada del producto para compras informadas.",
            JobOpportunities: "Job Opportunities es una plataforma diseñada para conectar a los graduados universitarios en Lima con empresas y organizaciones, facilitando su acceso al mercado laboral. También ofrece cursos de capacitación y certificación para mejorar sus habilidades y aumentar sus oportunidades de éxito profesional.",
            RuedaRent: "RuedaRent es una startup creada por estudiantes de la UPC que ofrece una alternativa de movilidad urbana rápida y flexible. A través de una aplicación móvil, conecta a usuarios que desean alquilar bicicletas, scooters y más con propietarios de vehículos, simplificando el proceso y promoviendo un estilo de vida más activo y sostenible."
        }
    }
};

// Función para cambiar el idioma y guardarlo en localStorage
function changeLanguage(lang) {
    localStorage.setItem('language', lang);

    document.getElementById('title').innerHTML = translations[lang].title;
    document.getElementById('nav-about').textContent = translations[lang].navAbout;
    document.getElementById('nav-portfolio').textContent = translations[lang].navPortfolio;
    document.getElementById('nav-contact').textContent = translations[lang].navContact;

    document.querySelector('#about h2').innerHTML = translations[lang].aboutTitle;
    document.querySelector('#about h3').textContent = translations[lang].aboutSubtitle;
    document.querySelector('#about p').textContent = translations[lang].aboutText;
    document.querySelector('.contact-button').textContent = translations[lang].contactButton;

    document.querySelector('#skills h2').textContent = translations[lang].skillsTitle;
    document.getElementById('portfolio-title').textContent = translations[lang].projects;
    document.querySelector('#contact h2').textContent = translations[lang].contactTitle;
    document.querySelector('.scroll-message').textContent = translations[lang].scrollMessage;

    const projectDescriptions = translations[lang].projectsDescriptions;
    document.querySelectorAll('.project').forEach((project, index) => {
        const projectName = project.querySelector('h3').textContent.trim();
        project.querySelector('p').textContent = projectDescriptions[projectName];
    });
}

// Eventos para los botones
document.getElementById('btn-en').addEventListener('click', () => changeLanguage('en'));
document.getElementById('btn-es').addEventListener('click', () => changeLanguage('es'));

// Cargar el idioma guardado al iniciar
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    changeLanguage(savedLang);
});