import * as controller from '../controllers/OrdersController'
import {Router} from 'express';
import {OrdersCreateValidation} from "../validation/OrdersValidation"

const router = Router ();

router.get('/', controller.getAll);

router.get ('/:orderNumber', controller.getById);

router.post ('/', OrdersCreateValidation, controller.create); 

router.put ('/:orderNumber', controller.updateById);

router.delete ('/:orderNumber', controller.deleteById);

export default router;