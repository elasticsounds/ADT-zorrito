# ADT-zorrito-template
A public template of the UNICEF Uruguay's ADT Zorrito. This can be modified to create your own ADT.

# Description
This project is a web application designed to provide an accessible and interactive children's book experience. It includes HTML, CSS, and JavaScript to create a user-friendly interface compatible with screen readers. The book is structured into 6 chapters, featuring read-aloud and highlighting functionalities using SMIL files, and embedded sign language videos for accessibility.

# Features
* Screen Reader Compatibility: HTML structured to be compatible with screen readers, ensuring accessibility for visually impaired users.
* SMIL Files Integration: Synchronized Multimedia Integration Language (SMIL) files are used for read-aloud functionality and text highlighting, enhancing the reading experience.
* JavaScript Interactivities: Engaging activities are built into each chapter, created with JavaScript to ensure interactive learning.
* Embedded Sign Language Videos: Sign language videos are integrated for each chapter, making the book accessible to hearing-impaired children.
* Chapter Structuring: The book is divided into six well-organized chapters, each with its own theme and activities.

# Prerequisites
* Web browser (e.g., Chrome, Firefox)
* Text editor (e.g., VS Code, Sublime Text)
* Basic knowledge of HTML, CSS, and JavaScript

# Installing
Clone the repository: git clone https://github.com/elasticsounds/ADT-zorrito-template/
Open index.html in your web browser to view the project

# Project Structure
* index.html: Main entry point of the application
* css/: Directory containing CSS files for styling
  * layout.css: Main CSS file
  * actividades.css: CSS for activity pages
* js/: Directory containing JavaScript files
  * funciones.js: General JavaScript functions
  * smilFunctions.js: Functions related to SMIL integration
  * Additional JS files for specific functionalities
* chapters/: Directory containing HTML files for each chapter
* assets/: Directory containing multimedia files (images, videos, audio)
* lib/: Directory containing any third-party libraries used

# How To Modify the Project with Custom Assets
## Step 1: Clone the Repository
First, you need to have a copy of the project on your local machine.

* install github on your machine
* open the terminal
* git clone https://github.com/elasticsounds/ADT-zorrito-template/

## Step 2: Understand the File Structure
Familiarize yourself with the project's directory structure. This includes:

* HTML files for each chapter or activity.
* CSS files for styling (layout.css, actividades.css).
* JavaScript files for interactive features (smilFunctions.js, funciones_violin.js, video.js).

## Step 3: Replace Text Content
* Open HTML files in a text editor.
* Modify the text content as needed, ensuring it remains accessible and structured for screen readers. You will require a lot of editing but you can use the project as a guide.
 
## Step 4: Update Style with CSS
* Open CSS files.
* Change styles such as colors, fonts, or layouts to suit your new content.
 
## Step 5: Modify JavaScript for Interactivities
* In JavaScript files, update or add new functions to align with the new content or activities.
* Test these scripts to ensure they work as expected with the HTML elements.

## Step 6: Add or Replace Media Assets
* For images, videos, or audio files, replace the existing files in the respective directories with your new files.
* Ensure the file names match those referenced in your HTML and JavaScript files.

## Step 7: Update SMIL Files
* If using SMIL for synchronization of audio assets and text, update these files to match the new text and media timing.
* To generate SMIL files, you can use pubcoder or another tool.
* Remember to replace all audio files, update the time code in the jsons, and the id references in the html.

## Step 8: Testing
* Open your project in various browsers to ensure compatibility and responsiveness.
* Test with screen readers and other accessibility tools.

## Step 9: Commit Changes
After making your changes:

```
Copy code
git add .
git commit -m "Updated project with new assets"
git push
```

## Step 10: Documentation
Update the README file to reflect any major changes in the project's structure or functionality.
Remember to replace [repository URL] with the actual URL of your GitHub repository. These steps provide a general guideline. Specifics may vary based on your project's unique setup and requirements. ​


