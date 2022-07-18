import * as controller from '../controllers/ProductsController'
import {Router} from 'express';
import {ProductCreateValidation} from "../validation/ProductsValidations"

const router = Router ();

router.get('/', controller.getAll);

router.get ('/:productCode', controller.getById);

router.post ('/', ProductCreateValidation, controller.create); 

router.put ('/:productCode', controller.updateById);

router.delete ('/:productCode', controller.deleteById);

export default router;