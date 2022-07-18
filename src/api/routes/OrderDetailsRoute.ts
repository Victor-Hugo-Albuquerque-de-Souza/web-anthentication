import * as controller from '../controllers/OrderDetailsController'
import {Router} from 'express';
import {OrderDetailsCreateValidation} from "../validation/OrderDetailsValidation"

const router = Router ();

router.get('/', controller.getAll);

router.get ('/:orderNumber', controller.getById);

router.post ('/', OrderDetailsCreateValidation, controller.create); 

router.put ('/:orderNumber', controller.updateById);

router.delete ('/:orderNumber', controller.deleteById);

export default router;