# Learning-management-system
This project is a comprehensive Learning Management System built using HTML, CSS, and JavaScript. It provides a platform for online learning, course management, and educational resource access.
<br/>
<br/>

## Table Of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
<br/>

## Introduction

The Learning Management System (LMS) is a comprehensive web application designed to facilitate and enhance the online educational experience. Built using HTML, CSS, and JavaScript, this project aims to provide a user-friendly platform where learners can browse courses, access e-books, track their progress, and manage their study questions efficiently. The LMS also features a simple user authentication system, allowing users to sign up, log in, and maintain personalized data such as tracked questions. With a responsive design and interactive features like carousels, the platform ensures a smooth learning experience across devices.
<br/>
<br />

## Demo

You can access a live demo of the Learning Management System website [here](https://dharuv26.github.io/Learning-management-system/). Feel free to explore and use the platform.
<br />
<br />

## Features
1. ***Home Page:***
   - The home page includes an introduction to the LMS, a carousel that highlights key sections (LMS overview, courses, and e-books), and a welcoming message.
   - Technologies: HTML, CSS (for layout and design), JavaScript (for carousel functionality).
2. ***Courses Section:***
   - Displays a carousel of available courses, each with a title, description, and price.
   - This section is designed to provide a wide selection of academic and professional courses.
   - Technologies: HTML (for structure), CSS (for styling), JavaScript (to enable carousel functionality).
3. ***E-books Section:***
   - A showcase of available e-books in various subjects.
   - Users can browse through a collection of e-books using a carousel.
   - Technologies: HTML, CSS, JavaScript (for interactive carousels).
4. ***Question Tracker:***
   - A tool for students to log their questions during study sessions and track their progress.
   - Features include adding questions with tags, status (Todo, Solved, Attempted), and difficulty (Easy, Medium, Hard).
   - A list of all questions is displayed in a table format where users can manage their queries.
   - Technologies: HTML (form and table structure), CSS (styling), JavaScript (to handle question tracking and list management).
   - File: `questionTracker.html`​(questionTracker)
5. ***Login/Sign Up:***
   - A user authentication system where users can either log in or create a new account.
   - This page includes two forms for logging in and signing up with validation of username and password.
   - Technologies: HTML (form structure), CSS (styling), JavaScript (for form switching and validation).
   - File: `login.html`​(login)
6. ***Responsive Design:***
   - The entire project is responsive, ensuring accessibility on various devices such as desktops, tablets, and mobile phones.
   - CSS media queries and JavaScript are used to adapt the UI for different screen sizes.
7. ***Footer:***
   - A footer section that provides navigation links to different sections of the LMS: Home, Courses, and E-books.
   - Technologies: HTML, CSS.
<br />

## Installation

1. **Clone the repository:**
     
     ```
     git clone https://github.com/dharuv26/Learning-management-system.git
     ```
2. **Navigate to the project directory:**
     
     ```
     cd Learning-management-system
     ```
3. **Open `index.html` in your web browser to view the home page.**
4. **Navigate through different sections using the navbar:**
   - Click on "Courses" to view available courses
   - Click on "Question Tracker" to access the question management tool
   - Click on "e-Books" to browse the e-book library
   - Use "Login/Sign Up" to access user authentication features
<br />

## Directory Structure

  ```
    index.html

    /HTML
      ├── login.html
      ├── questionTracker.html

    /CSS
      ├── header.css
      ├── footer.css
      ├── style.css
      ├── login.css
      └── questionTracker.css

    /JS
      ├── header.js
      ├── script.js
      ├── login.js
      └── questionTracker.js
    
    /images
      ├── home-1.jpg
      ├── home-2.png
      ├── home-3.png
      ├── course-1.png
      ├── book-1.png
      └── ...
  ```
<br />

## Contributing

  Contributions are welcome! If you'd like to contribute to this project, please follow these     guidelines:

  1. Fork the repository.
  2. Create a new branch: ```git checkout -b feature/your-feature-name```.
  3. Make your changes and commit them: ```git commit -m 'New:Add some feature'```.
  4. Push to the branch: ```git push origin feature/your-feature-name```.
  5. Open a pull request to the `main` branch of this repository.
<br/>
