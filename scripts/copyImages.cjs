const fs = require('fs');
const path = require('path');

const sourceDir = "C:\\Users\\Afreen Siddiqua\\.gemini\\antigravity-ide\\brain\\3eefe9e1-bb43-41cd-9911-7b25dbf71601";
const destDir = "c:\\Users\\Afreen Siddiqua\\.gemini\\antigravity\\scratch\\portfolio-3d\\public\\images\\services";

// Get all files in the source directory
const files = fs.readdirSync(sourceDir);

const mapping = {
    'service_screen_repair': 'service_screen_final.png',
    'service_battery': 'service_battery_final.png',
    'service_data': 'service_data_final.png',
    'service_software': 'service_software_final.png',
    'service_laptop': 'service_laptop_final.png',
    'service_accessories': 'service_accessories_final.png',
    'service_router': 'service_router_final.png',
    'service_cctv': 'service_cctv_final.png',
    'service_printer': 'service_printer_final.png'
};

for (const [prefix, newName] of Object.entries(mapping)) {
    // Find the latest file matching the prefix (since they have timestamps)
    const matches = files.filter(f => f.startsWith(prefix) && f.endsWith('.png'));
    if (matches.length > 0) {
        // Sort to get the most recent if multiple (alphabetical sort works for timestamp)
        matches.sort();
        const latestMatch = matches[matches.length - 1];
        const srcPath = path.join(sourceDir, latestMatch);
        const destPath = path.join(destDir, newName);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${latestMatch} to ${newName}`);
    } else {
        console.error(`No match found for ${prefix}`);
    }
}
