import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passowrdRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passowrdRouter.post('/forgot', forgotPasswordController.create);
passowrdRouter.post('/reset', resetPasswordController.create);

export default passowrdRouter;
