# NODE JS README FILE GENERATOR

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [About the Project](#about-the-project)
- [Criteria](#criteria)
- [My Version](#my-version)
- [Issues With Project](#issues-with-project)
- [Image Tutorial](#image-tutorial)
- [Deployment](#deployment)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## About the Project
This project requires us to use node.js to generate a readme file through a command line perspective rather than a front end input.

## Criteria 

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

```
## My Version

* What I did was to give the user a bit more freedom on how to approach the readme generator. They can name each section how they please.
* I added a little instruction for the user to reference.
* Used DocToc NPM Package instead of hard coding it. 


## Issues With Project

* Did not commit to this repo and just saved myself of rehoming a project 2-3 times because git refuses to cooperate with me. I decided to just upload the file all at once.

## Image Tutorial

1. Start the application by typing `node index`.

![Start Typing Node Index ](/assets/intro.PNG)

2. Before answering the questions, the program comes with instructions

![Guide Provided ](/assets/steps.PNG)

3. You can start answering the questions.

![Guide Provided ](/assets/readquestions.PNG)

4. After you're done you'll notice the file read.md is now changed based on the question `Title file`. So what you entered is now the new name file. 

`When Renaming The File You Have To Change It From The Old Name to the New Name`![Change The Name ](/assets/readmename.PNG)

5. If you want to include a Table of Contents in your readme, I included a DOCTOC npm which makes the table of content for your readme file. 

To Initiate DOCTOC, type
```
DOCTOC .

```
This parses all .md files to be initiated with DOCTOC


6. Go to your readme file and these two lines to where you want the table of contents to be. 

![Add the lines bart ](/assets/doctoc.PNG)

7. Go to the terminal and type this in 


![Initate DOCTOC for file ](/assets/toc.PNG)

8. After that your DOCTOC should generate the TOc for you.

![TOC Created ](/assets/toc1.PNG)

## Deployment
No deployment it is a CLI application, so download the file.

## Additional Resource 

[DOCTOC Link](https://www.npmjs.com/package/doctoc#installation)