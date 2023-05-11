const db = require('./db');
const config = require('../config');

async function getVaccineNumOfId(data){
    const details = await  db.query(`SELECT VaccinationDate,Manufacturer FROM vaccineemployee WHERE EmployeeId=${data.id} ;`)
    if(details.length<data.num){
        return(`Haven't had vaccine number ${data.num} yet`);
    }
    return (details[data.num-1]);
}

async function getIdAll(data){
    const vaccines = await  db.query(`SELECT * FROM vaccineemployee WHERE EmployeeId=${data.Id} ;`)
    return (vaccines);
}


async function insertVaccine(body){
const res=await getIdAll(body);
    if (res.length<5) {
        if(  isNaN (Date.parse(body.date) )) {
            return("Invalid date");
        }        
         const num=await db.query(`INSERT INTO vaccineemployee (EmployeeId,VaccinationDate,Manufacturer) VALUES ("${body.Id}","${body.date}","${body.manufacturer}") ; `)
        return(num);
     }else{
    return "have had 4 vaccines";

}
}


module.exports = {
    getVaccineNumOfId,getIdAll,insertVaccine  }