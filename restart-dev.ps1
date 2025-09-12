# Stop any running Node processes
taskkill /F /IM node.exe

# Remove Next.js cache
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue

# Install dependencies
npm install

# Start the development server on port 3002
$env:PORT=3002
npm run dev
