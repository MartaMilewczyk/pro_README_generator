// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ---

  ## Table of contents
  ${data.contents}

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  ---

  ## Installation
  ${data.installtion}
  ---

  ## Usage
  ${data.usage}
  ---

  ## Credits
  ${data.credits}
  ---

  ## License
  ${data.license}
  ---

  ## Contribution
  ${data.contribution}
  ---

  ## Tests
  
  ---

  ## Questions
  ${data.Qgithub}
  ${data.Qmail}
  ---
`;
}

module.exports = {generateMarkdown};
