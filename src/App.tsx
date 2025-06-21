
import React, { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import './App.css';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1); 
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); 
  const [successMessage, setSuccessMessage] = useState(''); 

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const validateName = (name: string): string => {
    if (!name.trim()) return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters';
    return '';
  };

  const validateEmail = (email: string): string => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Invalid email format';
    return '';
  };

  const validatePassword = (password: string): string => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    return '';
  };

  const validateConfirmPassword = (confirmPassword: string, password: string): string => {
    if (!confirmPassword) return 'Confirm Password is required';
    if (confirmPassword !== password) return 'Passwords do not match';
    return '';
  };

  const validatePhoneNumber = (phoneNumber: string): string => {
    if (!phoneNumber) return 'Phone Number is required';
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) return 'Invalid phone number (10 digits)';
    return '';
  };

  const validateDateOfBirth = (dateOfBirth: string): string => {
    if (!dateOfBirth) return 'Date of Birth is required';
    const date = new Date(dateOfBirth);
    if (isNaN(date.getTime())) return 'Invalid date';
    const today = new Date();
    if (date > today) return 'Date of Birth cannot be in the future';
    let age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) age--;
    if (age < 18) return 'You must be at least 18 years old';
    return '';
  };

  const getPasswordStrength = (password: string): string => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    const labels = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];
    return labels[strength - 1] || 'Very Weak';
  };

  const handleChange = (field: keyof typeof formData) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });

    let newErrors = { ...errors };
    if (field === 'name') newErrors.name = validateName(value);
    else if (field === 'email') newErrors.email = validateEmail(value);
    else if (field === 'password') {
      newErrors.password = validatePassword(value);
      newErrors.confirmPassword = validateConfirmPassword(formData.confirmPassword, value);
    } else if (field === 'confirmPassword') {
      newErrors.confirmPassword = validateConfirmPassword(value, formData.password);
    } else if (field === 'phoneNumber') {
      newErrors.phoneNumber = validatePhoneNumber(value);
    } else if (field === 'dateOfBirth') {
      newErrors.dateOfBirth = validateDateOfBirth(value);
    }
    setErrors(newErrors);

    
    if (step === 2 && Object.values(newErrors).every((error) => error === '') &&
        Object.values({ ...formData, [field]: value }).every((val) => val !== '')) {
      setSuccessMessage('All fields are valid! Ready to submit.');
    } else {
      setSuccessMessage('');
    }
  };

  const isStepValid = () => {
    if (step === 1) {
      return !validateName(formData.name) && !validateEmail(formData.email) &&
             formData.name && formData.email;
    }
    return Object.values(errors).every((error) => error === '') &&
           Object.values(formData).every((value) => value !== '');
  };

  const handleNext = () => {
    if (isStepValid()) setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = () => {
    if (isStepValid()) {
      alert('Form submitted successfully!');
      setSuccessMessage('Form submitted successfully!');
      setTimeout(() => setSuccessMessage(''), 3000); 
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        dateOfBirth: '',
      });
      setErrors({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        dateOfBirth: '',
      });
      setShowPassword(false);
      setShowConfirmPassword(false);
      setStep(1);
      setSuccessMessage('');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      dateOfBirth: '',
    });
    setErrors({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      dateOfBirth: '',
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
    setStep(1);
    setSuccessMessage('');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const strengthLabel = getPasswordStrength(formData.password);
  const isFieldValid = (field: keyof typeof formData) => !errors[field] && formData[field];

  return (
    <div className="app">
      <div className="form-container">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        <h1>Sign Up - Step {step} of 2</h1>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {step === 1 && (
          <>
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <div className="input-wrapper">
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange('name')}
                  aria-describedby="name-error name-hint"
                />
                {isFieldValid('name') && <span className="valid-icon">✔</span>}
              </div>
              <div className="hint" id="name-hint">At least 2 characters</div>
              {errors.name && <div id="name-error" className="error">{errors.name}</div>}
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  aria-describedby="email-error email-hint"
                />
                {isFieldValid('email') && <span className="valid-icon">✔</span>}
              </div>
              <div className="hint" id="email-hint">e.g., user@example.com</div>
              {errors.email && <div id="email-error" className="error">{errors.email}</div>}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange('password')}
                  aria-describedby="password-error password-hint"
                />
                <button
                  
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
                {isFieldValid('password') && <span className="valid-icon">✔</span>}
              </div>
              <div className="hint" id="password-hint">At least 8 characters</div>
              {formData.password && (
                <div className={`password-strength strength-${strengthLabel.toLowerCase().replace(' ', '-')}`}>
                  Strength: {strengthLabel}
                </div>
              )}
              {errors.password && <div id="password-error" className="error">{errors.password}</div>}
            </div>
            <div className="input-field">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="input-wrapper">
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  aria-describedby="confirm-password-error confirm-password-hint"
                />
                <button
                  
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
                {isFieldValid('confirmPassword') && <span className="valid-icon">✔</span>}
              </div>
              <div className="hint" id="confirm-password-hint">Must match password</div>
              {errors.confirmPassword && (
                <div id="confirm-password-error" className="error">{errors.confirmPassword}</div>
              )}
            </div>
            <div className="input-field">
              <label htmlFor="phone-number">Phone Number</label>
              <div className="input-wrapper">
                <input
                  id="phone-number"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange('phoneNumber')}
                  aria-describedby="phone-number-error phone-number-hint"
                />
                {isFieldValid('phoneNumber') && <span className="valid-icon">✔</span>}
              </div>
              <div className="hint" id="phone-number-hint">10 digits, e.g., 1234567890</div>
              {errors.phoneNumber && <div id="phone-number-error" className="error">{errors.phoneNumber}</div>}
            </div>
            <div className="input-field">
              <label htmlFor="date-of-birth">Date of Birth</label>
              <div className="input-wrapper">
                <input
                  id="date-of-birth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange('dateOfBirth')}
                  aria-describedby="date-of-birth-error date-of-birth-hint"
                />
                {isFieldValid('dateOfBirth') && <span className="valid-icon">✔</span>}
              </div>
              <div className="hint" id="date-of-birth-hint">Must be 18 or older</div>
              {errors.dateOfBirth && <div id="date-of-birth-error" className="error">{errors.dateOfBirth}</div>}
            </div>
          </>
        )}
        <div className="button-group">
          {step === 1 && (
            <button type="button" onClick={handleNext} disabled={!isStepValid()}>
              Next
            </button>
          )}
          {step === 2 && (
            <>
              <button type="button" onClick={handleBack}>Back</button>
              <button type="button" onClick={handleSubmit} disabled={!isStepValid()}>
                Submit
              </button>
            </>
          )}
          <button type="button" onClick={handleReset}>Reset Form</button>
        </div>
      </div>
    </div>
  );
};

export default App;

