import Sequelize from "sequelize";
const spawn = require('child_process').spawn;
// import from '../../Models/';

class QRCodeController{
    static async index(req, res){
        
    }
    
    static async create(req, res){
        this.#allCodes();
    }

    static async update(req, res){

    }
    
    static async delete(req, res){

    }

    static async #allCodes(){
        const process = spawn('python',['../ExcelController/index.py']);
        const data = process.stdout.on('data',(data)=>data);
        return data.toString();
    }
}
module.exports = QRCodeController;