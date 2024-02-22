const fs = require('fs');

try {
    const coverageData = JSON.parse(fs.readFileSync('./coverage/coverage-summary.json', 'utf8'));

    const minCoverage = 75; 

    const globalCoverage = coverageData.total.lines.pct;

} catch (error) {
  console.error('Error reading coverage file:', error.message);
  process.exit(1);
}
