import  * as fb from "firebase/database";
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{
    const consulta = fb.query(fb.ref(db, `produtos/`), fb.orderByKey('id_prod'))
    fb.onValue(consulta, dados => {
        console.log(dados.val());
    })
}).catch(err=>console.log(err))