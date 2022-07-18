import {Router} from 'express';
import * as controller from "../controllers/AuthController"
import {AuthSignValidation} from '../validation/AuthValidation'

const router = Router();

router.post("/signup", AuthSignValidation, controller.signUp);
router.post("/signin", AuthSignValidation, controller.signIn);

export default router;