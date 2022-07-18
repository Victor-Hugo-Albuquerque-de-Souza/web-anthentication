import * as controller from '../controllers/EmployeesController'
import {Router} from 'express';
import {EmployeesCreateValidation} from "../validation/EmployeesValidation"

const router = Router ();

router.get('/', controller.getAll);

router.get ('/:employeeNumber', controller.getById);

router.post ('/', EmployeesCreateValidation, controller.create); 

router.put ('/:employeeNumber', controller.updateById);

router.delete ('/:employeeNumber', controller.deleteById);

export default router;