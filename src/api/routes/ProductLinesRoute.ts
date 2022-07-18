import * as controller from '../controllers/ProductLinesController'
import {Router} from 'express';
import {ProductLinesCreateValidation} from "../validation/ProductLinesValidation"

const router = Router ();

router.get('/', controller.getAll);

router.get ('/:productLine', controller.getById);

router.post ('/', ProductLinesCreateValidation, controller.create); 

router.put ('/:productLine', controller.updateById);

router.delete ('/:productLine', controller.deleteById);

export default router;