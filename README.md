# Real-time Form Validator

A responsive and accessible React application for real-time form validation, built with **TypeScript** and **plain CSS**. The app validates user inputs across multiple fields, provides instant feedback, and includes advanced features like multi-step navigation, dark/light mode, and animated messages.

---

## 📑 Table of Contents
- [Features](#features)
  - [Core Features](#core-features)
  - [Bonus Features](#bonus-features)
- [Setup Instructions](#setup-instructions)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [License](#license)

---

## 🚀 Features

### ✅ Core Features

- **Form Fields:**  
  - Name  
  - Email  
  - Password  
  - Confirm Password  
  - Phone Number  
  - Date of Birth

- **Real-time Validation:**  
  - **Name:** Minimum 2 characters.  
  - **Email:** Must be a valid format (e.g., `user@example.com`).  
  - **Password:** Minimum 8 characters.  
  - **Confirm Password:** Must match Password.  
  - **Phone Number:** Exactly 10 digits (e.g., `1234567890`).  
  - **Date of Birth:** Must be valid, not in the future, and age must be 18+.

- **Error Messages:**  
  - User-friendly and accessible with ARIA attributes.

- **Password Strength Meter:**  
  - Rates from *Very Weak* to *Very Strong* using length and character types.
  - Color-coded for clarity.

- **Responsive Design:**  
  - Mobile-friendly using Flexbox and media queries.

- **Show/Hide Password:**  
  - Toggle visibility with ARIA labels for accessibility.

- **Accessible UI:**  
  - Supports keyboard navigation, ARIA tags, and high-contrast visuals.

---

### ✨ Bonus Features

- **Success Indication:**  
  - Green checkmark (✔) next to valid fields.  
  - Full-form success message: _"All fields are valid! Ready to submit."_  
  - Temporary animated success message after submission.

- **Dark/Light Mode Toggle:**  
  - Button to toggle themes.  
  - Theme preference saved in `localStorage`.  
  - **Light Mode:** White form, light gray background.  
  - **Dark Mode:** Dark gray form, dark background, optimized colors.

- **Animated Error/Success Messages:**  
  - Fade-in error messages.  
  - Animated in/out transitions for success messages.

- **Form Reset:**  
  - Button to clear all fields, error messages, and return to Step 1.

- **Inline Hints:**  
  - Helper texts under each field (e.g., _"At least 2 characters"_ for Name).

- **Multi-Step Form Navigation:**  
  - **Step 1:** Name & Email.  
  - **Step 2:** Password, Confirm Password, Phone Number, DOB.  
  - Next/Back buttons with validation checks per step.

---

## 🛠️ Setup Instructions

### Prerequisites:
- Node.js (v14 or higher)
- npm
- Git *(optional)*

### 1. Create the Project:

```bash
npx create-react-app form-validator --template typescript
cd form-validator
```

### 2. Replace Files:

- Replace `src/App.tsx` with the provided `App.tsx` file.
- Replace `src/App.css` with the provided `App.css` file.
- *(Optional)* Remove unused files:
  ```bash
  rm src/App.test.tsx src/logo.svg src/reportWebVitals.ts
  ```

### 3. Install Dependencies:

```bash
npm install
```

### 4. Run the App:

```bash
npm start
```

> Open the browser at `http://localhost:3000`

### 5. Build for Production (Optional):

```bash
npm run dev
```

> Output will be in the `build/` directory.

---

## 🖼️ Screenshots

| Step | Mode | Description |
|------|------|-------------|
| **Step 1** | Light Mode | Shows Name and Email fields, dark mode toggle button |
| **Step 2** | Dark Mode | Shows password section, password strength meter, success message |
| **Success** | Any | Animated message post submission |

> 📸 Save screenshots as:  
> - 1.png  
> - `screenshots/step2-dark.png`  
> - `screenshots/success.png`

---

## 🎞️ Demo

- A GIF showing:  
  - Real-time validation  
  - Multi-step navigation  
  - Theme toggle  
  - Animated messages  
  - Form reset

> 💡 Record using tools like **OBS Studio** or **QuickTime Player**, convert to GIF via [ezgif.com](https://ezgif.com/), and save as:  
> - `demo/form-validator.gif`

---



