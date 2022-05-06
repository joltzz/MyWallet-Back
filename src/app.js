import express,{json} from "express";
import cors from "cors";
import chalk from "chalk";

// import

const app=express();

app.use(json());
app.use(cors());



app.listen(process.env.PORT, ()=>{
    console.log(chalk.bold.green(`Server running on port: ${process.env.PORT}`));
})


