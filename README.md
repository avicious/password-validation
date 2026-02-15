# Validation Form

A robust, controlled-component form built with **React**. This project demonstrates clean state management and real-time validation logic for user authentication flows.

## ✨ Features

- **State-Driven Validation:** Logic-based checks for email format, password presence, and character length.
- **Real-time Error Clearing:** Error messages disappear as soon as the user starts correcting the field, improving UX.
- **Secure Input Handling:** Uses `type="password"` for sensitive fields to ensure masked data entry.
- **Success Feedback:** A clear "Validation Successful" state that only triggers once all criteria are met.
- **Responsive UI:** A clean, centered card layout that adapts to mobile and desktop screens.

## ⚙️ How It Works

The form operates using a **Single Source of Truth** pattern via React's `useState` hook.

1.  **Input Handling:** Every keystroke updates a central `formInput` object.
2.  **Validation Logic:** Upon clicking "Submit," the `validateFormInput` function prevents the default browser reload and runs a series of checks:
    - **Email:** Checks for non-empty values and valid syntax using Regex.
    - **Password:** Ensures the field isn't blank.
    - **Confirmation:** Compares the `password` and `confirmPassword` strings for an exact match.
3.  **Error Mapping:** If any check fails, an `errors` object is mapped to the `formError` state, which instantly renders the red error messages below the inputs.

## 🛠️ Installation and Setup

Follow these steps to get the project running locally on your machine.

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Clone the Repository

```bash
git clone [https://github.com/avicious/password-validation](https://github.com/avicious/password-validation)
cd password-validation
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```
