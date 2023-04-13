// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (badge == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }
  if (badge == "GNU") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]"
  }
  if (badge == "OpenBSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
  }
  if (license == "None")
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // What do we return from this funtion?
  if (license == "MIT") {
    return "(https://opensource.org/licenses/MIT)"
  }
  if (license == "GNU") {
    return "(https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license == "OpenBSD") {
    return "(https://opensource.org/licenses/BSD-3-Clause)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ""
  }
  return "# License";
  return "# Email";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# ${data.username}

## Description
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#Test)
- [Questions](#questions)
## Installation
## Usage
## Contributing
## Test
## Questions
If you have any questions, Email me at: ${data.email} 

Find me on GitHub: [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
