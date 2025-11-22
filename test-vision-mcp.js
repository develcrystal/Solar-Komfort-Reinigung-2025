import path from 'path';
import { fileURLToPath } from 'url';

// Set environment variables
process.env.MODELSCOPE_TOKEN = 'ms-e4a70e9c-400c-4137-ba49-3e73b577a6de';
process.env.MODELSCOPE_MODEL = 'Qwen/Qwen3-VL-30B-A3B-Instruct';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting Vision-MCP-Server...');
console.log('ModelScope Token:', process.env.MODELSCOPE_TOKEN);
console.log('ModelScope Model:', process.env.MODELSCOPE_MODEL);

// Dynamically import the vision-mcp-server module
try {
  const visionMcpModule = await import('./node_modules/vision-mcp-server/dist/index.js');
  console.log('Vision-MCP-Server module loaded successfully');
  
  // Check if there's a default export or specific function to call
  if (visionMcpModule.default) {
    console.log('Found default export, attempting to start server...');
    await visionMcpModule.default();
  } else {
    console.log('Module loaded but no default export found - server may start automatically');
  }
} catch (error) {
  console.error('Error loading or starting Vision-MCP-Server:', error);
}