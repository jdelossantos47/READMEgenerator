// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title.toUpperCase()}
 ## Description:
 
 ${data.description}

  ## Table of contents:
  The generated README includes the following sections:
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  
   ## Installation:
   ${data.installation}
  
   ## Usage:
   ${data.usage}
  
   ## License:
   ${data.license} 
  
   ## Contributing:
   ${data.contributing}
 
   ## Tests: 
   ${data.tests}
  
   ## Questions: 
   If you have questions, please contact ${data.username} or email ${data.email}
   
   ![badmath](https://img.shields.io/github/languages/top/jdelossantos47/good-readme-generator)
`;

}

module.exports = generateMarkdown;
