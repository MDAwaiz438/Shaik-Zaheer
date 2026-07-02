const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walkDir(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir('./app').concat(walkDir('./components'));
let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/ZED Mobiles Computers/g, 'ZED Computers')
        .replace(/ZED MOBILES/g, 'ZED COMPUTERS')
        .replace(/ZED Mobiles/g, 'ZED Computers')
        .replace(/zedmobiles\.in/g, 'zedcomputers.in')
        .replace(/mobiles, computers/g, 'computers, laptops')
        .replace(/mobile, laptop, and computer/g, 'computer, laptop, and PC')
        .replace(/Mobiles, laptops, tablets/g, 'Computers, laptops, tablets');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated', file);
        modifiedCount++;
    }
});

console.log('Modified files:', modifiedCount);
