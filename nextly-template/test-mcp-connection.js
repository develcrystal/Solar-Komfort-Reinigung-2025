import { spawn } from 'child_process';
import path from 'path';

// Set environment variables
process.env.MODELSCOPE_TOKEN = 'ms-e4a70e9c-400c-4137-ba49-3e73b577a6de';
process.env.MODELSCOPE_MODEL = 'Qwen/Qwen3-VL-30B-A3B-Instruct';

console.log('Starting Vision-MCP-Server process...');

// Start the vision-mcp-server as a child process
const serverProcess = spawn('node', [
  path.join(process.cwd(), 'node_modules', 'vision-mcp-server', 'dist', 'index.js')
], {
  stdio: ['pipe', 'pipe', 'pipe'], // stdin, stdout, stderr
  env: process.env
});

// Handle errors
serverProcess.on('error', (err) => {
  console.error('Failed to start vision-mcp-server:', err);
});

serverProcess.on('close', (code) => {
  console.log(`Vision-MCP-Server process exited with code ${code}`);
});

// Send a simple handshake message to test the server
setTimeout(() => {
  if (serverProcess.stdin) {
    console.log('Sending test message to server...');
    
    // This is a basic MCP handshake message
    const testMessage = JSON.stringify({
      method: "capabilities/list",
      params: {}
    }) + '\n';
    
    serverProcess.stdin.write(testMessage);
    console.log('Test message sent.');
  }
}, 2000);

// Listen for responses from the server
serverProcess.stdout.on('data', (data) => {
  console.log(`Server stdout: ${data}`);
});

serverProcess.stderr.on('data', (data) => {
  console.error(`Server stderr: ${data}`);
});

console.log('Vision-MCP-Server is running. PID:', serverProcess.pid);