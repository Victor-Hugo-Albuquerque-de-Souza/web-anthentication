import * as controller from '../controllers/OfficesController'
import {Router} from 'express';
import {OfficesCreateValidation} from "../validation/OfficesValidation"

const router = Router ();

router.get('/', controller.getAll);

router.get ('/:officeCode', controller.getById);

router.post ('/', OfficesCreateValidation, controller.create); 

router.put ('/:officeCode', controller.updateById);

router.delete ('/:officeCode', controller.deleteById);

export default router;