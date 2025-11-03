// js/validation.js
// Form validation for SwiftMove Removals website

document.addEventListener('DOMContentLoaded', function() {
    console.log('SwiftMove Validation loaded');

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Contact form submitted');
            if (validateContactForm()) {
                showNotification('Message sent successfully! We will get back to you soon.', 'success');
                contactForm.reset();
                resetCharCounter('message');
            }
        });
        
        // Add real-time validation
        addRealTimeValidation(contactForm);
    }

    // Enquiry Form Validation
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Enquiry form submitted');
            if (validateEnquiryForm()) {
                showNotification('Thank you for your enquiry! We will respond with a quote within 24 hours.', 'success');
                enquiryForm.reset();
                resetCharCounter('enquiry-message');
            }
        });
        
        // Add real-time validation
        addRealTimeValidation(enquiryForm);
    }

    // Quote Form Validation (Services page)
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Quote form submitted');
            if (validateQuoteForm()) {
                showNotification('Quote request received! We will send your estimate shortly.', 'success');
                quoteForm.reset();
            }
        });
        
        // Add real-time validation
        addRealTimeValidation(quoteForm);
    }
});

// Contact Form Validation
function validateContactForm() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const location = document.getElementById('contact-location').value;
    const messageType = document.getElementById('message-type').value;
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;

    let isValid = true;

    // Name validation
    if (name === '' || name.length < 2) {
        showFieldError('contact-name', 'Please enter your full name (min 2 characters)');
        isValid = false;
    } else {
        clearFieldError('contact-name');
    }

    // Email validation
    if (!isValidEmail(email)) {
        showFieldError('contact-email', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearFieldError('contact-email');
    }

    // Phone validation
    if (!isValidPhone(phone)) {
        showFieldError('contact-phone', 'Please enter a valid 10-digit phone number');
        isValid = false;
    } else {
        clearFieldError('contact-phone');
    }

    // Location validation
    if (location === '') {
        showFieldError('contact-location', 'Please select your location');
        isValid = false;
    } else {
        clearFieldError('contact-location');
    }

    // Message type validation
    if (messageType === '') {
        showFieldError('message-type', 'Please select a message type');
        isValid = false;
    } else {
        clearFieldError('message-type');
    }

    // Subject validation
    if (subject === '' || subject.length < 5) {
        showFieldError('subject', 'Please enter a subject (min 5 characters)');
        isValid = false;
    } else {
        clearFieldError('subject');
    }

    // Message validation
    if (message === '' || message.length < 10) {
        showFieldError('message', 'Please enter a message (min 10 characters)');
        isValid = false;
    } else {
        clearFieldError('message');
    }

    // Terms validation
    if (!terms) {
        showFieldError('terms', 'You must agree to the terms and conditions');
        isValid = false;
    } else {
        clearFieldError('terms');
    }

    return isValid;
}

// Enquiry Form Validation
function validateEnquiryForm() {
    const name = document.getElementById('enquiry-name').value.trim();
    const email = document.getElementById('enquiry-email').value.trim();
    const phone = document.getElementById('enquiry-phone').value.trim();
    const location = document.getElementById('enquiry-location').value;
    const service = document.getElementById('enquiry-service').value;
    const subject = document.getElementById('enquiry-subject').value.trim();
    const message = document.getElementById('enquiry-message').value.trim();
    const consent = document.getElementById('quote-consent').checked;
    const terms = document.getElementById('terms').checked;

    let isValid = true;

    // Name validation
    if (name === '' || name.length < 2) {
        showFieldError('enquiry-name', 'Please enter your full name (min 2 characters)');
        isValid = false;
    } else {
        clearFieldError('enquiry-name');
    }

    // Email validation
    if (!isValidEmail(email)) {
        showFieldError('enquiry-email', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearFieldError('enquiry-email');
    }

    // Phone validation
    if (!isValidPhone(phone)) {
        showFieldError('enquiry-phone', 'Please enter a valid 10-digit phone number');
        isValid = false;
    } else {
        clearFieldError('enquiry-phone');
    }

    // Location validation
    if (location === '') {
        showFieldError('enquiry-location', 'Please select your location');
        isValid = false;
    } else {
        clearFieldError('enquiry-location');
    }

    // Service validation
    if (service === '') {
        showFieldError('enquiry-service', 'Please select a service');
        isValid = false;
    } else {
        clearFieldError('enquiry-service');
    }

    // Subject validation
    if (subject === '' || subject.length < 5) {
        showFieldError('enquiry-subject', 'Please enter a subject (min 5 characters)');
        isValid = false;
    } else {
        clearFieldError('enquiry-subject');
    }

    // Message validation
    if (message === '' || message.length < 20) {
        showFieldError('enquiry-message', 'Please provide more details about your moving needs (min 20 characters)');
        isValid = false;
    } else {
        clearFieldError('enquiry-message');
    }

    // Consent validation
    if (!consent) {
        showFieldError('quote-consent', 'You must consent to receive a quote');
        isValid = false;
    } else {
        clearFieldError('quote-consent');
    }

    // Terms validation
    if (!terms) {
        showFieldError('terms', 'You must agree to the terms and conditions');
        isValid = false;
    } else {
        clearFieldError('terms');
    }

    return isValid;
}

// Quote Form Validation (Services page)
function validateQuoteForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const moveDate = document.getElementById('move-date').value;
    const fromAddress = document.getElementById('from-address').value.trim();
    const toAddress = document.getElementById('to-address').value.trim();
    const rooms = document.getElementById('rooms').value;
    const services = document.getElementById('services').value;

    let isValid = true;

    // Name validation
    if (name === '' || name.length < 2) {
        showFieldError('name', 'Please enter your full name');
        isValid = false;
    } else {
        clearFieldError('name');
    }

    // Email validation
    if (!isValidEmail(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearFieldError('email');
    }

    // Phone validation
    if (!isValidPhone(phone)) {
        showFieldError('phone', 'Please enter a valid 10-digit phone number');
        isValid = false;
    } else {
        clearFieldError('phone');
    }

    // Move date validation
    if (moveDate === '') {
        showFieldError('move-date', 'Please select a move date');
        isValid = false;
    } else {
        clearFieldError('move-date');
    }

    // Address validation
    if (fromAddress === '' || fromAddress.length < 5) {
        showFieldError('from-address', 'Please enter a valid from address');
        isValid = false;
    } else {
        clearFieldError('from-address');
    }

    if (toAddress === '' || toAddress.length < 5) {
        showFieldError('to-address', 'Please enter a valid destination address');
        isValid = false;
    } else {
        clearFieldError('to-address');
    }

    // Rooms validation
    if (rooms === '' || parseInt(rooms) < 1) {
        showFieldError('rooms', 'Please enter number of rooms (min 1)');
        isValid = false;
    } else {
        clearFieldError('rooms');
    }

    // Services validation
    if (services === '') {
        showFieldError('services', 'Please select a service');
        isValid = false;
    } else {
        clearFieldError('services');
    }

    return isValid;
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + '-error');
    
    if (field) {
        field.style.borderColor = '#ff4444';
        field.style.backgroundColor = '#fff8f8';
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + '-error');
    
    if (field) {
        field.style.borderColor = '';
        field.style.backgroundColor = '';
    }
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function showNotification(message, type) {
    // Remove any existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 400px;
        font-size: 14px;
    `;
    
    notification.style.background = type === 'success' ? '#4CAF50' : '#f44336';
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function addRealTimeValidation(form) {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Validate on blur (when user leaves field)
        input.addEventListener('blur', function() {
            const formId = form.id;
            
            if (formId === 'contactForm') {
                validateContactField(this.id);
            } else if (formId === 'enquiryForm') {
                validateEnquiryField(this.id);
            } else if (formId === 'quoteForm') {
                validateQuoteField(this.id);
            }
        });
        
        // Clear errors when user starts typing
        input.addEventListener('input', function() {
            clearFieldError(this.id);
        });
    });
}

function validateContactField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    const value = field.value.trim();
    
    switch(fieldId) {
        case 'contact-name':
            if (value === '' || value.length < 2) {
                showFieldError(fieldId, 'Please enter your full name (min 2 characters)');
            }
            break;
        case 'contact-email':
            if (!isValidEmail(value)) {
                showFieldError(fieldId, 'Please enter a valid email address');
            }
            break;
        case 'contact-phone':
            if (!isValidPhone(value)) {
                showFieldError(fieldId, 'Please enter a valid 10-digit phone number');
            }
            break;
    }
}

function validateEnquiryField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    const value = field.value.trim();
    
    switch(fieldId) {
        case 'enquiry-name':
            if (value === '' || value.length < 2) {
                showFieldError(fieldId, 'Please enter your full name (min 2 characters)');
            }
            break;
        case 'enquiry-email':
            if (!isValidEmail(value)) {
                showFieldError(fieldId, 'Please enter a valid email address');
            }
            break;
        case 'enquiry-phone':
            if (!isValidPhone(value)) {
                showFieldError(fieldId, 'Please enter a valid 10-digit phone number');
            }
            break;
        case 'enquiry-message':
            if (value === '' || value.length < 20) {
                showFieldError(fieldId, 'Please provide more details (min 20 characters)');
            }
            break;
    }
}

function validateQuoteField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    const value = field.value.trim();
    
    switch(fieldId) {
        case 'name':
            if (value === '' || value.length < 2) {
                showFieldError(fieldId, 'Please enter your full name');
            }
            break;
        case 'email':
            if (!isValidEmail(value)) {
                showFieldError(fieldId, 'Please enter a valid email address');
            }
            break;
        case 'phone':
            if (!isValidPhone(value)) {
                showFieldError(fieldId, 'Please enter a valid 10-digit phone number');
            }
            break;
    }
}

function resetCharCounter(textareaId) {
    const charCounter = document.getElementById('char-counter');
    if (charCounter) {
        charCounter.textContent = '0';
        charCounter.style.color = '#666';
    }
}

// Export functions for global access (if needed)
window.validateContactForm = validateContactForm;
window.validateEnquiryForm = validateEnquiryForm;
window.validateQuoteForm = validateQuoteForm;
window.showNotification = showNotification;