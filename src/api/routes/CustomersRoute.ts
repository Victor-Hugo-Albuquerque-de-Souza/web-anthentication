import * as controller from '../controllers/CustomersController'
import {Router} from 'express';
import {CustomersCreateValidation} from "../validation/CustomersValidation"

const router = Router ();

router.get('/', controller.getAll);

router.get ('/:customerNumber', controller.getById);

router.post ('/', CustomersCreateValidation, controller.create); 

router.put ('/:customerNumber', controller.updateById);

router.delete ('/:customerNumber', controller.deleteById);

export default router;