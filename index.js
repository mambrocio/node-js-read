
// Little Future Update I Can Implement
// var twirlTimer = (function() { 
//     var P = ["\\", "|", "/", "-"];
//     var x = 0;
//     return setInterval(function() {
//       process.stdout.write("\r" + P[x++]);
//       x &= 3;
//     }, 1000);
//   })();

// Dependency requirement
const fs = require('fs');
const inquirer = require('inquirer');

//Read file dependency that provides syntax guide on r
fs.readFile('data.txt', 'utf8', (error, instructions) =>
  error ? console.error(error) : console.log(instructions)
  )

function formQuestion() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Title File',
      name: 'projTitle',
    },
    {
      type: 'input',
      message: 'Enter Main Header (Refer To Guide I Wrote)',
      name: 'mainHead',
    },
    {
      type: 'input',
      message: 'First Subheader (Refer To Guide I Wrote)',
      name: 'firstSub',
    },
    {
      type: 'input',
      message: 'Description of First Header ',
      name: 'firstDesc',
    },
    {
      type: 'input',
      message: 'Second Subheader',
      name: 'secondSub',
    },
    {
      type: 'input',
      message: 'Description of Second SubHeader',
      name: 'secondDesc',
    },
    {
      type: 'input',
      message: 'Third Subheader',
      name: 'thirdSub',
    },
    {
      type: 'input',
      message: 'Description Of Third Subheader',
      name: 'thirdDesc',
    },
    {
      type: 'input',
      message: 'Fourth Subheader',
      name: 'fourthSub',
    },
    {
      type: 'input',
      message: 'Description to Fourth Subheader',
      name: 'fourthDesc',
    },
    {
      type: 'input',
      message: 'Fifth Subheader',
      name: 'fifthSub',
    },
    {
      type: 'input',
      message: 'Description of Fifth Subheader',
      name: 'fifthDesc',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'License Of The Program',
      choices:  [
       `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
       `[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)`, 
       `[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)`, 
       `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`, 
       `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`, 
       `[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)`, 
       `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`, 
       `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`, 
       `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`, 
       `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`, 
       `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`,
       `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`, 
       `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`, 
       `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`]
    },
    {
      type: 'input',
      message: 'Insert Github Link',
      name: 'gitProfile',
    },
    {
      type: 'input',
      message: 'Insert email',
      name: 'mainContact',
    },
  ])

  .then(function (md){


  
   const markTitle = [md.projTitle]
   const markField = [md.mainHead, md.firstSub, md.firstDesc, md.secondSub, md.thirdSub, md.fourthSub, md.fourthDesc, md.fifthSub, md.fifthDesc, md.license, md.gitProfile, md.mainContact]
  
  let fileName = markTitle.join('')
  let markDown = markField.join('\n\n')

  fs.rename('read.md', `${fileName}.md`, () => {
    console.log("\nFile Renamed!\n");
  })


fs.writeFile("read.md", markDown, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
  }
})

})
}
setTimeout(formQuestion, 10000)

