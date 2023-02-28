// function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let badge ='';
  if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache 2.0') {
    badge  = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU v3.0') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'Eclipse 1.0') {
    badge  = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'Mozilla 2.0') {
    badge  = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'Boost Software 1.0') {
    badge  = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === 'other') {
    badge = `Please add badge manually for your chosen license`
  };

  return `
  
  # ${data.title}

  ## Description

  ${data.description}

  ---

  ## Table of contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  <br>

  ---

  ## Installation

  ${data.installation}
  <br>

  ---

  ## Usage

  ${data.usage}
  <br>

  ---

  ## Credits

  ${data.credits}
  <br>

  ---

  ## License

  Project is covered by ${badge}
  <br>

  ---

  ## Contribution

  ${data.contribution}
  <br>

  ---

  ## Tests

  ${data.tests}
  <br>

  ---

  ## Questions
  
  In case of any questions please contact via e-mail: ${data.Qemail}.
  For other github repositories please visit: ${data.Qgithub}.
  <br>

  ---
`
};

module.exports = {generateMarkdown};
