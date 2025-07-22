import emailjs from '@emailjs/browser';

// Debug mode for troubleshooting
const DEBUG_MODE = true;

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

// Analytics tracking helpers
export const trackFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      form_type: formType,
      success: success,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackPixelFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: formType,
      status: success ? 'completed' : 'failed'
    });
  }
};

// Send data via EmailJS
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending via EmailJS:', data);
    }

    const templateParams = {
      to_name: 'StayCool Airco Team',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      city: data.city || 'Niet opgegeven',
      service: '', // Optional service field
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

// Track webhook performance
const trackWebhookPerformance = (success: boolean, responseTime: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'webhook_performance', {
      success: success,
      response_time: responseTime,
      timestamp: Date.now()
    });
  }
};

// Send data to GoHighLevel webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  const startTime = Date.now();
  
  try {
    if (DEBUG_MODE) {
      console.log('Sending to webhook:', data);
    }

    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city || '',
        message: data.message,
        source: 'Website - Airco Vergelijken Limburg',
        pipeline_status: 'new',
        tags: ['website-lead', 'airco-interesse'],
        // Extra velden voor GHL
        contact_source: 'Staycoolairco.nl',
        vermogen_kw: '2,5 - 4 kW (middelgrote ruimtes)',
        type_ruimte: 'Woonkamer',
        telefonisch_bereiken: 'Geen voorkeur',
        woonplaats_gebied: 'Ja',
        status_pijplijn_voor_afspraak: 'Nieuwe Lead',
        aantal_keer_opgebeld: 0,
        datum_lead_binnen: new Date().toISOString()
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(webhookData)
    });

    const responseTime = Date.now() - startTime;

    if (DEBUG_MODE) {
      console.log('Webhook response status:', response.status);
      console.log('Response time:', responseTime, 'ms');
      const responseText = await response.text();
      console.log('Webhook response body:', responseText);
    }

    if (!response.ok) {
      if (DEBUG_MODE) {
        console.error('Webhook error: Status', response.status);
      }
      trackWebhookPerformance(false, responseTime);
      return false;
    }
    
    trackWebhookPerformance(true, responseTime);
    return true;
  } catch (error) {
    const responseTime = Date.now() - startTime;
    trackWebhookPerformance(false, responseTime);
    
    if (DEBUG_MODE) {
      console.error('Webhook error:', error);
    }
    return false;
  }
};

// Main send function that tries both methods
export const sendEmail = async (data: EmailData, formType: string = 'contact_form'): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('📧 Starting dual submission:', data);
  }

  // Execute both submissions in parallel
  const [emailJSSuccess, webhookSuccess] = await Promise.all([
    sendViaEmailJS(data),
    sendToWebhook(data)
  ]);

  if (DEBUG_MODE) {
    console.log('Results - EmailJS:', emailJSSuccess, 'Webhook:', webhookSuccess);
  }

  // Success if either method succeeds
  if (webhookSuccess || emailJSSuccess) {
    const methods = [];
    if (webhookSuccess) methods.push('GHL Webhook');
    if (emailJSSuccess) methods.push('EmailJS');
    
    if (DEBUG_MODE) {
      console.log(`✅ Form submitted successfully via: ${methods.join(' + ')}`);
    }
    
    // Track success
    trackFormSubmission(formType, true);
    trackPixelFormSubmission(formType, true);
    
    return;
  }

  // Both methods failed
  trackFormSubmission(formType, false);
  trackPixelFormSubmission(formType, false);
  throw new Error('Failed to send contact form data through any available method');
};

// Webhook-only send function for testing
export const sendToWebhookOnly = async (data: EmailData): Promise<boolean> => {
  return sendToWebhook(data);
};