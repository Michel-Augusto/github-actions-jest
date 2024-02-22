const fs = require('fs') ;

try {
    const coverageData = JSON.parse(fs.readFileSync('./coverage/coverage-summary.json', 'utf8')) ;

    const minCoverage = 75 ; 

    const globalCoverage = coverageData.total.lines.pct ;

    if (globalCoverage < minCoverage) {
        console.error(`Code coverage (${globalCoverage}%) is below minimum value (${minCoverage}%).`) ;
        process.exit(1) ;

    } else {
        console.log(`Code coverage (${globalCoverage}%) is above minimum value (${minCoverage}%).`) ;
    } ;

} catch (error) {
    console.error('Error reading coverage file:', error.message) ;
    process.exit(1) ;
} ;

