import { execSync } from 'child_process';

try {
  // Run the tests silently
  execSync('npx jest src/Notifications.spec.js --silent', {
    stdio: 'inherit',
    shell: true,
    timeout: 10000
  });
  
  console.log('OK');
  process.exit(0);
} catch (error) {
  console.log('NOK');
  process.exit(1);
}
