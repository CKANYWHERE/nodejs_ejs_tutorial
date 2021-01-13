import {Router} from 'express'
import * as renderController from "../controller/renderContoller";
const router = Router();

router.get('/index',renderController.renderMain);
export default router