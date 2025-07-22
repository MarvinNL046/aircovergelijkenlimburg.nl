const https = require('https');

console.log('='.repeat(50));
console.log('GoHighLevel Webhook Test - Detailed');
console.log('='.repeat(50));

const webhookUrl = 'https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f';

// Test verschillende data formaten
const testCases = [
  {
    name: 'Test 1: Standaard formaat (zoals in code)',
    data: {
      data: {
        name: "Test Persoon " + Date.now(),
        email: "test" + Date.now() + "@example.com",
        phone: "0612345678",
        city: "Maastricht",
        message: "Test bericht om " + new Date().toLocaleString('nl-NL')
      }
    }
  },
  {
    name: 'Test 2: Direct formaat (zonder data wrapper)',
    data: {
      name: "Direct Test " + Date.now(),
      email: "direct" + Date.now() + "@example.com",
      phone: "0687654321",
      city: "Venlo",
      message: "Direct test om " + new Date().toLocaleString('nl-NL')
    }
  }
];

async function testWebhook(testCase) {
  return new Promise((resolve) => {
    console.log('\n' + '-'.repeat(40));
    console.log(testCase.name);
    console.log('-'.repeat(40));
    
    const postData = JSON.stringify(testCase.data);
    console.log('Sending:', JSON.stringify(testCase.data, null, 2));
    
    const url = new URL(webhookUrl);
    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    
    const req = https.request(options, (res) => {
      console.log('\nResponse Status:', res.statusCode);
      console.log('Response Headers:', JSON.stringify(res.headers, null, 2));
      
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        console.log('Response Body:', responseData);
        
        try {
          const parsed = JSON.parse(responseData);
          console.log('Parsed Response:', JSON.stringify(parsed, null, 2));
        } catch (e) {
          console.log('Could not parse response as JSON');
        }
        
        if (res.statusCode === 200 || res.statusCode === 201) {
          console.log('✅ Test successful!');
        } else {
          console.log('❌ Test failed with status:', res.statusCode);
        }
        
        resolve();
      });
    });
    
    req.on('error', (error) => {
      console.error('❌ Request Error:', error);
      resolve();
    });
    
    req.write(postData);
    req.end();
  });
}

// Test both formats
async function runAllTests() {
  for (const testCase of testCases) {
    await testWebhook(testCase);
    // Wait 2 seconds between tests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('All tests completed!');
  console.log('Check your GHL dashboard for new leads.');
  console.log('='.repeat(50));
}

runAllTests();