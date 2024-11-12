import  * as fb from "firebase/database";
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{
    fb.onChildChanged(fb.ref(db, `produtos/`), (snapshot) => {
        console.log(snapshot.val());
        if(snapshot.key == '-MwSzyJMlNDToTGtPuhc') {
            fb.off(fb.ref(db, `produtos/`), 'child_changed')
            console.log('callback removido!');
        }
    })
}).catch(err=>console.log(err))