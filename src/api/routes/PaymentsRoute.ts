import * as controller from '../controllers/PaymentsController'
import {Router} from 'express';
import {PaymentCreateValidation} from "../validation/PaymentValidation"

const router = Router ();

router.get('/', controller.getAll);

router.get ('/:customerNumber', controller.getById);

router.post ('/', PaymentCreateValidation, controller.create); 

router.put ('/:customerNumber', controller.updateById);

router.delete ('/:customerNumber', controller.deleteById);

export default router;