const https = require('https');

const testData = JSON.stringify({
  // Test verschillende veld structuren
  firstName: 'Direct FirstName',
  lastName: 'Direct LastName',
  email: 'direct@test.nl',
  phone: '0611111111',
  
  // Wrapped in data object
  data: {
    firstName: 'Data FirstName',
    lastName: 'Data LastName',
    name: 'Data FirstName Data LastName',
    email: 'data@test.nl',
    phone: '0622222222',
    city: 'Maastricht',
    message: 'Test bericht om te kijken welke velden worden gebruikt',
    
    // Mogelijk vereiste velden voor status
    source: 'aircovergelijkenlimburg.nl',
    contactSource: 'aircovergelijkenlimburg.nl',
    leadSource: 'Website',
    status: 'new',
    pipeline_status: 'new',
    tags: 'website-lead',
    
    // Datum velden
    dateAdded: new Date().toISOString(),
    date_added: new Date().toISOString(),
    created_at: new Date().toISOString(),
    
    // Custom fields mogelijk
    custom_fields: {
      interesse: 'ja',
      website_bron: 'aircovergelijkenlimburg.nl'
    },
    customFields: {
      interesse: 'ja',
      website_bron: 'aircovergelijkenlimburg.nl'
    }
  },
  
  // Direct contact object
  contact: {
    firstName: 'Contact FirstName',
    lastName: 'Contact LastName',
    email: 'contact@test.nl',
    phone: '0633333333'
  }
});

const options = {
  hostname: 'services.leadconnectorhq.com',
  port: 443,
  path: '/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Content-Length': Buffer.byteLength(testData)
  }
};

console.log('Testing GHL field mapping...\n');
console.log('Sending comprehensive test data to identify which fields GHL uses');

const req = https.request(options, (res) => {
  console.log('\nStatus Code:', res.statusCode);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response:', data);
    console.log('\n✅ Test sent! Check GHL to see:');
    console.log('1. Which name appears (Direct/Data/Contact)');
    console.log('2. What the pipeline status is');
    console.log('3. If any custom fields were mapped');
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(testData);
req.end();