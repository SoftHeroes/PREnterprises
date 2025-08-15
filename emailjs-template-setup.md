# EmailJS Template Setup for Brochure Modal

## Required EmailJS Template Configuration

To complete the brochure modal functionality, you need to create a new EmailJS template with the following specifications:

### Template ID: `brochure_pdf`

### Template Variables:
- `{{to_email}}` - Recipient's email address
- `{{to_name}}` - Recipient's name (defaults to "Valued Customer" if not provided)
- `{{company}}` - Recipient's company (optional)
- `{{brochure_url}}` - URL to the PDF brochure file

### Recommended Email Template:

**Subject:** Your PR Enterprises Brochure - Industrial Equipment Solutions

**Body:**
```
Dear {{to_name}},

Thank you for your interest in PR Enterprises! 

We're delighted to share our comprehensive brochure showcasing our industrial equipment solutions, including:

🔧 Dana Off-Highway Transmission Systems (TE17000, TE27000, TE30000, TE32000)
🔧 HydraForce & Dantal Hydraulics Components
🔧 Genuine Spare Parts & Aftermarket Services
🔧 72-Hour Dispatch Assurance

Please find our detailed brochure attached: {{brochure_url}}

{{#if company}}
We'd love to discuss how PR Enterprises can support {{company}}'s equipment needs.
{{/if}}

For immediate assistance or customized solutions, feel free to contact us:
📞 Phone: +91-124-4346810
📧 Email: info@prenterprises.co.in
🌐 Website: www.prenterprises.co.in

Best regards,
The PR Enterprises Team

---
PR Enterprises - Your Trusted Partner for Industrial Equipment Solutions
Established 2018 | Gurugram, Haryana | Bhopal, Madhya Pradesh
```

### Setup Instructions:

1. Log into your EmailJS dashboard (emailjs.com)
2. Go to Email Templates section
3. Create a new template with ID: `brochure_pdf`
4. Use the template content above
5. Configure the template to send the PDF as an attachment or include the download link
6. Test the template with sample data

### Alternative Implementation (If PDF attachment isn't supported):

The current implementation sends the PDF URL in the email. Users can click the link to download the brochure directly from your website.

### Security Note:

Ensure the brochure PDF is publicly accessible at the URL: `{{brochure_url}}`
Current expected location: `/PR Enterprises Brochure.pdf` in your website root.