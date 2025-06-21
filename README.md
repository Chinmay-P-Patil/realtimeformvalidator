Real-time Form Validator
A responsive and accessible React application for real-time form validation, built with TypeScript and plain CSS. The app validates user inputs across multiple fields, provides instant feedback, and includes advanced features like multi-step navigation, dark/light mode, and animated messages.
Table of Contents

Features
Setup Instructions
Screenshots
Demo
License

Features
Core Features

Form Fields: Includes Name, Email, Password, Confirm Password, Phone Number, and Date of Birth.
Real-time Validation:
Name: Minimum 2 characters.
Email: Valid email format (e.g., user@example.com).
Password: Minimum 8 characters.
Confirm Password: Must match Password.
Phone Number: Exactly 10 digits (e.g., 1234567890).
Date of Birth: Valid date, not in the future, user must be 18+ years old.


Error Messages: User-friendly error messages displayed below invalid fields, with ARIA attributes for accessibility.
Password Strength Meter: Rates password strength (Very Weak to Very Strong) based on length, uppercase, lowercase, numbers, and special characters, with color-coded feedback.
Responsive Design: Mobile-friendly layout using flexbox and media queries.
Show/Hide Password: Toggle buttons to show/hide password and confirm password fields, with ARIA labels.
Accessible UI: Supports keyboard navigation, ARIA labels, and high-contrast colors.

Bonus Features

Success Indication:
Green checkmark (✔) next to each valid field.
Success message ("All fields are valid! Ready to submit.") when the form is fully valid.
Temporary success message on submission.


Dark/Light Mode Toggle:
Toggle button to switch themes, persisted in localStorage.
Light mode: White form, light gray background.
Dark mode: Dark gray form, dark background with adjusted colors.


Animated Error/Success Messages:
Error messages fade in when displayed.
Success messages animate in and out for enhanced user experience.


Form Reset: Reset button clears all fields, errors, and returns to Step 1.
Inline Hints: Guidance below each field (e.g., "At least 2 characters" for Name).
Multi-Step Form Navigation:
Step 1: Name and Email.
Step 2: Password, Confirm Password, Phone Number, Date of Birth.
Next/Back buttons with validation checks to ensure valid inputs before proceeding.



Setup Instructions

Prerequisites:

Node.js (v14 or higher) and npm installed.
Git (optional, for cloning).


Clone or Create Project:
npx create-react-app form-validator --template typescript
cd form-validator


Replace Files:

Replace src/App.tsx with the provided App.tsx file.
Replace src/App.css with the provided App.css file.
(Optional) Remove unused files like src/App.test.tsx or src/logo.svg for a clean project.


Install Dependencies:The project uses only react and react-dom, included with Create React App. No additional dependencies are required.
npm install


Run the App:
npm start

The app will open in your default browser at http://localhost:3000.

Build for Production (optional):
npm run build

This generates a production-ready build in the build/ directory.


Screenshots
Step 1 (Light Mode)
Description: Shows Name and Email fields in Step 1 with inline hints and the dark mode toggle button.
Step 2 (Dark Mode)
Description: Displays Password, Confirm Password, Phone Number, and Date of Birth fields in Step 2, with password strength meter, valid field checkmarks, and success message.
Success Submission
Description: Captures the animated success message after form submission.
Note: To capture screenshots, use a browser’s developer tools or a screen recording tool (e.g., Snipping Tool on Windows, Cmd+Shift+4 on macOS). Save images as screenshots/step1-light.png, screenshots/step2-dark.png, and screenshots/success.png in the project root.
Demo
Description: A GIF showcasing the app’s functionality, including real-time validation, multi-step navigation, theme toggle, animated messages, and form reset.
Note: To create a demo GIF, use a screen recording tool like OBS Studio or QuickTime Player, then convert to GIF using ezgif.com or similar. Save as demo/form-validator.gif in the project root.
License
This project is licensed under the MIT License. See the LICENSE file for details.

```
