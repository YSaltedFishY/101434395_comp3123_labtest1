const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname,'Logs');

function createLogs(){
    if(!fs.existsSync(logsDirectory)){
        fs.mkdirSync(logsDirectory);
        console.log('Logs folder created');
    }

    process.chdir(logsDirectory);

    for(let i = 1; i <= 10; i++){
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `random words #${i}`);
    }
}

createLogs();