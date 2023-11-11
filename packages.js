const packages = [
    {   
        id: 1,
        packageName: "Docker",
        description: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers."
    },
    {
        id: 2,
        packageName: "Apache Maven",
        description: "Maven is a build automation tool used primarily for Java projects. Maven can also be used to build and manage projects written in C#, Ruby, Scala, and other languages."
    },
    {
        id: 3,
        packageName: "NuGet",
        description: "NuGet is a package manager, primarily used for packaging and distributing software written using the.NET framework."
    },
    {
        id: 4,
        packageName: "RubyGems",
        description: "RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries, a tool designed to easily manage the installation of gems, and a server for distributing them."
    },
    {
        id: 5,
        packageName: "npm",
        description: "npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js."
    },
    {
        id: 6,
        packageName: "Containers",
        description: "A single place for your team to manage Docker images and decide who can see and access your images."
    }
];

/*
========================== Render Packages to DOM ==========================
*/
const renderPackagesToDOM = (divID, array) => {
    let domString = "";

    // Looping through array
    array.forEach(package => {
        // Store HTML to domString
        domString += `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${package.packageName}</h5>
                <p class="card-text">${package.description}</p>
                <button type="button">Learn more</button>
            </div>
        </div>
        `;
    });

    // Target divID
    const package = document.querySelector(divID);
    // Render to DOM
    package.innerHTML = domString;
};

// Render to DOM
renderPackagesToDOM("#packages", packages);
