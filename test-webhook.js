const fetch = require('node-fetch');

// Test data
const testData = {
  data: {
    name: "Test User",
    email: "test@example.com",
    phone: "0612345678",
    city: "Maastricht",
    message: "Dit is een test bericht voor de webhook integratie."
  }
};

// Webhook URL
const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f';

async function testWebhook() {
  console.log('Testing GoHighLevel Webhook...\n');
  console.log('Sending data:', JSON.stringify(testData, null, 2));
  
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(testData)
    });
    
    console.log('\n✅ Response Status:', response.status);
    console.log('Response Status Text:', response.statusText);
    
    const responseText = await response.text();
    console.log('Response Body:', responseText);
    
    if (response.ok) {
      console.log('\n✅ Webhook test successful!');
    } else {
      console.log('\n❌ Webhook test failed!');
    }
  } catch (error) {
    console.error('\n❌ Error:', error.message);
  }
}

testWebhook();