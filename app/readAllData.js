import  * as fb from "firebase/database";
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{
    fb.get(fb.child(fb.ref(db), `produtos/`))
    .then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("Dados não encontrados!");
        }
        process.exit();
    })
}).catch(err=>console.log(err))