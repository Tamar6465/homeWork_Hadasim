const db = require('./db');
const config = require('../config');

async function getAll(){
    const employees = await  db.query("SELECT * FROM Employee;")
    return (employees);
}
async function get(body){
    const employee = await  db.query(`SELECT * FROM Employee WHERE Id="${body.Id}";`)
    return (employee);
}
async function insertNew(body){
    const id = await get(body);
    if(id.length==0){
        if (body.Id.length != 9||body.Id.match(/\D/) != null) {
            return("invalid Id");
        } 
        if (body.Id.length==0||body.LastName.length==0||body.FirstName.length==0||body.Adress.length==0||body.BirthDay.length==0||body.Phone.length==0||body.MobilePhone.length==0) {
            return("One of the data is blank, please enter all the details");
        }
       if (body.Phone.match(/\D/) != null) {
        return("invalid phone number")
       }
       if (body.MobilePhone.match(/\D/) != null) {
        return("invalid phone number")
       }
       if(isNaN (Date.parse(body.BirthDay) )) {
        return("Invalid date");
    }
       
    const res= await db.query(`INSERT INTO db.Employee(Id,LastName,FirstName,Adress,BirthDay,phone,MobilePhone,img) VALUES ("${body.Id}","${body.LastName}","${body.FirstName}","${body.Adress}","${ body.BirthDay}","${body.Phone}","${body.MobilePhone}","${body.img}"); `);
       return (res);
    }else{
        return "Such a worker exists";
    }
   
}
module.exports = {
    getAll,
    get,
    insertNew
  }