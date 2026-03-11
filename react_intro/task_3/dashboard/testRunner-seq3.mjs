// Test runner for sequence 3 - ES Module version
import { execSync } from 'child_process';

try {
  console.log('Running Notifications component tests...');
  
  // Run the tests
  execSync('npx jest src/Notifications.spec.js --verbose', {
    stdio: 'inherit',
    shell: true,
    timeout: 30000
  });
  
  console.log('OK');
  process.exit(0);
} catch (error) {
  console.log('NOK');
  process.exit(1);
}
