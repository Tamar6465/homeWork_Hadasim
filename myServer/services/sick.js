const db = require('./db');
const config = require('../config');


async function getIdSick(data){
    const details = await  db.query(`SELECT * FROM sickEmployee WHERE EmployeeId=${data.Id} AND PositiveResultDate IS NOT NULL ;`)
    if(details.length==0){
        return("Not sick yet");
    }
    return (details);
}
async function getIdRecovery(data){
    const details = await  db.query(`SELECT * FROM sickEmployee WHERE EmployeeId=${data.Id} AND RecoveryDate IS NOT NULL  ;`)
    if(details.length==0){
        return("Not recovery yet");
    }
    return (details);
}

async function insertEmployeeSick(body){

    let check=await getIdSick(body);
    if (check==`Not sick yet`) {
        if(  isNaN( Date.parse( body.date)) ) {
            return("Invalid date");
        }
        const res = await db.query(`INSERT INTO sickEmployee (EmployeeId,PositiveResultDate) VALUES ("${body.Id}","${body.date}") ; `)
          return (res);
    }else{
return "sick yet";
}
   
}

async function insertEmployeeRecovery(body){

    let check=await getIdRecovery(body);
    if (check==`Not recovery yet`) {
        if(  isNaN (Date.parse(body.date) )) {
            return("Invalid date");
        }
    const res=await db.query(`UPDATE sickEmployee SET RecoveryDate="${body.date}" WHERE EmployeeId="${body.Id}" AND RecoveryDate IS NUll; `)
    return (res);
    }else{
return "recorvery yet";
}
   
}

module.exports = {
    getIdSick,getIdRecovery ,insertEmployeeRecovery,insertEmployeeSick }