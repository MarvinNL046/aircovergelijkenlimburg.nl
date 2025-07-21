import emailjs from '@emailjs/browser';

// Debug mode for troubleshooting
const DEBUG_MODE = false;

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_1rruujp';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_rkcpzhg';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'JOVuOJTC7ReYFRkQ_';

// GoHighLevel webhook configuration
const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || 'https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f';

// Email data interface
export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city?: string;
  message: string;
}

// Send data via EmailJS
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending via EmailJS:', data);
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      to_email: 'info@staycoolairco.nl',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (DEBUG_MODE) {
      console.log('EmailJS response:', response);
    }

    return response.status === 200;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS error:', error);
    }
    return false;
  }
};

// Send data to GoHighLevel webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending to webhook:', data);
    }

    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city || 'Not specified',
        message: data.message
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response status:', response.status);
      const responseText = await response.text();
      console.log('Webhook response body:', responseText);
    }

    if (!response.ok) {
      if (DEBUG_MODE) {
        console.error('Webhook error: Status', response.status);
      }
      return false;
    }
    
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Webhook error:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('Starting dual submission with data:', data);
  }

  // Send to both services in parallel for better performance
  const [emailJSSuccess, webhookSuccess] = await Promise.all([
    sendViaEmailJS(data),
    sendToWebhook(data)
  ]);

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSSuccess);
    console.log('Webhook success:', webhookSuccess);
  }
  
  // Only throw error if BOTH methods fail
  if (!emailJSSuccess && !webhookSuccess) {
    throw new Error('Failed to send contact form data');
  }

  // Log warnings in debug mode if one service failed
  if (DEBUG_MODE) {
    if (!emailJSSuccess && webhookSuccess) {
      console.warn('EmailJS failed but webhook succeeded');
    } else if (emailJSSuccess && !webhookSuccess) {
      console.warn('Webhook failed but EmailJS succeeded');
    }
  }
};

// Webhook-only send function for testing
export const sendToWebhookOnly = async (data: EmailData): Promise<boolean> => {
  return sendToWebhook(data);
};