# EmailJS Direct Configuration Setup

## Step-by-Step Instructions

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up" or "Login" if you already have an account
3. Verify your email address

### 2. Set Up Your Email Service
1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your provider
5. Note your **Service ID** (found under the service name)

### 3. Create Your Email Template
1. In your EmailJS dashboard, click "Email Templates"
2. Click "Create New Template"
3. Customize your template using these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{from_company}}` - Sender's company
   - `{{from_phone}}` - Sender's phone
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_name}}` - Recipient name
4. Note your **Template ID** (found under the template name)

### 4. Get Your User ID
1. In your EmailJS dashboard, click "Account" in the bottom left
2. Click "API Keys"
3. Copy your **User ID** (Public Key)

### 5. Update Your Contact Form Configuration
Edit the `src/pages/Contact.jsx` file and update these lines with your actual credentials:

```javascript
// EmailJS configuration - Direct configuration (without env variables)
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your actual EmailJS Service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your actual EmailJS Template ID
const userID = 'YOUR_USER_ID'; // Replace with your actual EmailJS User ID
```

Example with real values:
```javascript
// EmailJS configuration - Direct configuration (without env variables)
const serviceID = 'service_abc123';
const templateID = 'template_def456';
const userID = 'user_ghi789';
```

### 6. Add Your Domain to Allowed Origins (for production)
1. In your EmailJS dashboard, click "Account"
2. Click "Security"
3. Add your domain to "Allowed Origins" (e.g., yourwebsite.com)
4. For local development, localhost is automatically allowed

## Testing Your Setup

1. Save all changes
2. Restart your development server: `npm run dev`
3. Navigate to the Contact page (http://localhost:3001/contact)
4. Fill out the form with test data
5. Submit the form
6. Check your browser console for detailed error messages
7. Check your email for the received message

## Common Issues and Solutions

### "Please configure your EmailJS credentials" Error
- Make sure you've replaced all placeholder values ('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID') with your actual credentials

### "Authentication failed" (401)
- Double-check your User ID (Public Key)
- Ensure your User ID is correctly copied from the API Keys section

### "Bad request" (400)
- Verify your Service ID and Template ID are correct
- Check that all required template variables are included in your template

### "Forbidden" (403)
- Add your domain to the "Allowed Origins" in EmailJS Security settings
- For localhost development, this should work by default

### "CORS Error"
- Ensure your domain is added to the "Allowed Origins" list
- Check that you're using HTTPS in production

### No Email Received
- Check your spam/junk folder
- Verify your email template is correctly configured
- Ensure your email service is properly authenticated

## Need More Help?

If you're still experiencing issues:
1. Check the browser console for detailed error messages
2. Verify all your EmailJS credentials are correct
3. Ensure your email template contains all required variables
4. Contact EmailJS support if problems persist