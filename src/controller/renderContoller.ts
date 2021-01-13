import express,{Response,Request} from 'express'
const app = express();

export const renderMain = async(req:Request,res:Response) => {
    res.render('index',{title:"Hello World!"})
}
