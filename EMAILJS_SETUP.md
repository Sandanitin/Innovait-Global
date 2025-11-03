# EmailJS Setup Instructions

## Prerequisites

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template

## Setup Steps

### 1. Get Your EmailJS Credentials

After setting up your EmailJS account and creating a service/template, you'll need three IDs:
- **Service ID**: Found in EmailJS Dashboard > Email Services
- **Template ID**: Found in EmailJS Dashboard > Email Templates
- **User ID**: Found in EmailJS Dashboard > Account > API Keys

### 2. Update the Contact Form

In `src/pages/Contact.jsx`, replace the placeholder values with your actual EmailJS credentials:

```javascript
// EmailJS configuration
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
const userID = 'YOUR_USER_ID'; // Replace with your EmailJS User ID
```

### 3. Configure Your Email Template

Create an email template in EmailJS with the following variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{from_company}}` - Sender's company
- `{{from_phone}}` - Sender's phone
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_name}}` - Recipient name (set to "InnovaIT Team" in the code)

Example template:
```
Name: {{from_name}}
Email: {{from_email}}
Company: {{from_company}}
Phone: {{from_phone}}

Subject: {{subject}}

Message:
{{message}}
```

### 4. Environment Variables (Recommended for Production)

For production, create a `.env` file in your project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

Then update the Contact.jsx file to use environment variables:

```javascript
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userID = import.meta.env.VITE_EMAILJS_USER_ID;
```

### 5. Test the Implementation

1. Run the development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check the browser console for success/failure messages
5. Check your email for the received message

## Troubleshooting

1. **Email not sending**: Verify your Service ID, Template ID, and User ID are correct
2. **CORS errors**: Ensure your domain is whitelisted in EmailJS settings
3. **Template errors**: Make sure all template variables match the ones in your code