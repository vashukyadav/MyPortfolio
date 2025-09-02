# EmailJS Setup Guide for vashuuyadav08@gmail.com

## Quick Setup Steps:

### 1. Go to https://www.emailjs.com/
- Sign up with your Gmail: vashuuyadav08@gmail.com

### 2. Add Gmail Service
- Go to "Email Services" → "Add New Service"
- Select "Gmail"
- Connect your Gmail account
- Service ID should be: `service_vashuk`

### 3. Create Email Template
- Go to "Email Templates" → "Create New Template"
- Template ID: `template_contact`
- Set "To Email": vashuuyadav08@gmail.com
- Template content:
```
Subject: New Contact Form Message - {{subject}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from Portfolio Contact Form
```

### 4. Get Public Key
- Go to "Account" → "API Keys"
- Copy your Public Key
- Update `.env.local` file:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_copied_public_key
```

### 5. Test
```bash
npm run dev
```

अब जब भी कोई contact form भरेगा, सारा data आपकी email vashuuyadav08@gmail.com पर आएगा!