const fs = require('fs');
const path = require('path');

// Script to clean up old/unused large image files
function cleanUpUnusedImages() {
    console.log('Starting cleanup of unused large image files...');
    
    // Directories to check for cleanup
    const directories = [
        path.join(__dirname, 'public', 'img', 'models'),
        path.join(__dirname, 'public', 'img', 'new')
    ];
    
    for (const dir of directories) {
        if (fs.existsSync(dir)) {
            console.log(`\nChecking directory: ${dir}`);
            const files = fs.readdirSync(dir);
            
            for (const file of files) {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);
                
                if (stat.isFile()) {
                    const ext = path.extname(file).toLowerCase();
                    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                        const size = stat.size;
                        const sizeMB = Math.round((size / 1024 / 1024) * 100) / 100;
                        console.log(`  Removing: ${file} (${sizeMB} MB)`);
                        fs.unlinkSync(filePath);
                    }
                }
            }
            
            // Remove directory if empty
            const remainingFiles = fs.readdirSync(dir);
            if (remainingFiles.length === 0) {
                console.log(`  Removing empty directory: ${dir}`);
                fs.rmdirSync(dir);
            }
        }
    }
    
    console.log('\nCleanup completed!');
    
    // Also clean up any large untracked files in flux directory
    const fluxDir = path.join(__dirname, 'public', 'img', 'flux');
    const fluxFiles = fs.readdirSync(fluxDir);
    
    console.log('\nChecking flux directory for large unconverted images...');
    for (const file of fluxFiles) {
        const filePath = path.join(fluxDir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isFile()) {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const size = stat.size;
                if (size > 200 * 1024) { // >200KB
                    const sizeMB = Math.round((size / 1024 / 1024) * 100) / 100;
                    console.log(`  Large unconverted image: ${file} (${sizeMB} MB) - should be optimized`);
                }
            }
        }
    }
}

cleanUpUnusedImages();