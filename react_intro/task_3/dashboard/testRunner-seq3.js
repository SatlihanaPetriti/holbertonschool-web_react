import { execSync } from 'child_process';

try {
  // Run tests completely silently, only checking exit code
  execSync('npx jest src/Notifications.spec.js --silent --ci --testTimeout=10000 --passWithNoTests', {
    stdio: 'ignore',
    shell: true
  });
  
  // Only output "OK" if tests pass
  process.stdout.write('OK');
  process.exit(0);
} catch (error) {
  // Only output "NOK" if tests fail
  process.stdout.write('NOK');
  process.exit(1);
}
