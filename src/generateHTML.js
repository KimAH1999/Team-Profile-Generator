// team html for each team member
const generateTeam = team => {
  // html for manager
  const generateManager = manager => {
      return `
      <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${manager.getName()}</h3>
              <h4>${manager.getRole()}</h4><i class="material-icons">Manager_clipboard</i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${manager.getId()}</p>
              <p class="email">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></p>
              <p class="office">Office Number: ${manager.getOfficeNumber()}</p>
          </div>
      </div>
  </div>
      `;
  };

  // html for engineer
  const generateEngineer = engineer => {
      return `
      <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${engineer.getName()}</h3>
              <h4>${engineer.getRole()}</h4><i class="material-icons">Enginner_laptop</i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${engineer.getId()}</p>
              <p class="email">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
          </div>
      </div>
  </div>
      `;
  };

  // html for intern
  const generateIntern = intern => {
      return `
      <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${intern.getName()}</h3>
              <h4>${intern.getRole()}</h4><i class="material-icons">Intern_icon</i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.getId()}</p>
              <p class="email">Email:<a href="${intern.getEmail()}"> ${intern.getEmail()}</a></p>
              <p class="school">School: ${intern.getSchool()}</p>
          </div>
      </div>
  </div>
</body>
      `;
  };

  const html = [];

  html.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
  );
  html.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))
      .join("")
  );
  html.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
      .join("")
  );
  return html.join("");
}

// export function to generate entire page
module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
      <title>Team Profile</title>
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
              ${generateTeam(team)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
};
