import  * as fb from "firebase/database";
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{
    const consulta = fb.query(fb.ref(db, `produtos/`), fb.orderByKey('id_prod'))
    fb.onValue(consulta, dados => {
        let arrayDados = Object.entries(dados.val())
        let invert = Object.fromEntries(arrayDados.reverse())
        console.log(invert);
        process.exit(0)
    })
}).catch(err=>console.log(err))