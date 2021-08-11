import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TestsController from '../controllers/TestsController';

const testsRouter = Router();
const testsController = new TestsController();

testsRouter.use(ensureAuthenticated);
testsRouter.post('/create', testsController.create);
testsRouter.post('/show', testsController.show);
testsRouter.get('/list', testsController.index);

export default testsRouter;