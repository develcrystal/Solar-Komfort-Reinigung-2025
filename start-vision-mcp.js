const { spawn } = require('child_process');
const path = require('path');

// Set environment variables
const env = { ...process.env };
env.MODELSCOPE_TOKEN = 'ms-e4a70e9c-400c-4137-ba49-3e73b577a6de';
env.MODELSCOPE_MODEL = 'Qwen/Qwen3-VL-30B-A3B-Instruct';

// Start the vision-mcp-server
const serverProcess = spawn('node', [
  path.join(__dirname, 'node_modules', 'vision-mcp-server', 'dist', 'index.js')
], {
  env: env,
  stdio: 'inherit',
  cwd: __dirname
});

serverProcess.on('error', (err) => {
  console.error('Failed to start vision-mcp-server:', err);
});

serverProcess.on('close', (code) => {
  console.log(`Vision-MCP-Server process exited with code ${code}`);
});

console.log('Vision-MCP-Server started. PID:', serverProcess.pid);