🌿 Profile & Multi-Page Internship Project
Introduction

This project is a multi-page web application built using HTML, CSS, and JavaScript.
It includes a Profile page, an About Me page, and a Contact page — all styled with a single shared stylesheet and powered by one JavaScript file.

The project showcases practical frontend development skills such as interactivity, input validation, and responsive design.

🧩 Prerequisites

Modern web browser (Chrome, Firefox, Edge, etc.)

Code editor (e.g. VS Code)

⚙️ How to Run Locally

Download or Clone the Project

git clone <repository-url>


Or manually download the ZIP file and extract it.

Open the Project Folder
Navigate to the folder in your code editor.

Open the Main HTML File
Locate index.html and open it directly in your browser.

Right-click → Open with Browser

or drag and drop the file into your browser window.

🗂️ Project Structure
project-folder/
│── index.html       # Main Profile Page
│── About.html       # About Me Page
│── Contact.html     # Contact Form Page
│── style.css        # Single stylesheet for all pages
│── profile.js       # Shared JavaScript file for all pages
│── README.md

✨ Features
🏠 Profile Page (index.html)

Displays avatar via URL

Shows user information, hobbies, dislikes, and a live timestamp

Includes navigation links to the About and Contact pages

Fully responsive layout

👩‍💻 About Me Page (About.html)

Organized into 5 sections:

Bio – Brief introduction

Goals – Learning and career ambitions

Areas of Low Confidence – Areas to improve

Note to Future Self – Motivational message

Extra Thoughts – Personal insights

💌 Contact Page (Contact.html)

Functional contact form with validation for:

Full name

Email

Subject

Message

Inline error messages for invalid inputs

Displays a success toast when submitted correctly

Toast Function Example (profile.js):

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

🧠 How It Works

The Profile page dynamically displays time using JavaScript.

The Contact page validates form inputs and triggers a success toast message on valid submission.

The About Me page presents structured personal content with accessible data-test attributes for easy testing.

🌈 Accessibility

All interactive elements (inputs, buttons, links) are keyboard accessible.

Visible focus styles for better usability.

data-testid attributes included for automated testing and accessibility support.

💅 Notes

Only one CSS and one JavaScript file are shared across all pages.

Avatar and icons are loaded via external URLs (no local image folder).

Works best on modern browsers with internet access for external resources.

👩‍💻 Author

Name: Yakub Roimot Omotara
Role: Frontend Developer
Goal: Building clean, accessible, and responsive interfaces while growing into a successful full-stack developer.




