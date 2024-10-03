const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname,'Logs');

function removeLogs(){
    if(fs.existsSync(logsDirectory)){
        const logs = fs.readdirSync(logsDirectory);
        logs.forEach((log) =>{
            const filePath = path.join(logsDirectory,log);
            fs.unlinkSync(filePath);
            console.log(`${log} has been removed`);
        });

        fs.rmdirSync(logsDirectory);
    }else{
        console.log('Logs directory does not exist');
    }
    
}

removeLogs();