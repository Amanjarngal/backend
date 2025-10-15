import app from "./app.js";
import { db } from "./utils/db.js";
//db connection 
db();

//localhost running 
app.listen(process.env.PORT , ()=> {
    console.log(`localhost running at ${process.env.PORT} `);
})