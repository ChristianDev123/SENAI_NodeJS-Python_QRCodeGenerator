const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();
const porta = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use("/",express.static(path.resolve(__dirname,"public")));
app.use(routes);
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
    app.use(cors());
});
app.listen(porta,()=>console.log('servidor em execução'))

// const tratamentoTabela = []


// con.connect(function(err){
//     if(err) throw err;
    
//     else{
//         tabela.map((item)=>{
//             var query = `INSERT INTO veiculos(id,carros,potencia,ano) VALUES('null','${item.carros}','${item.potencia}','${item.ano}')`
//             con.query(query,function(err,results){
//                 console.log(item)
//                 if(err) throw err;
//                 console.log(results)
//             })
//         })
//         console.log(" banco conectado")
//     }
// })