import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProjectsController from '../controllers/TestsController';

const projectsRouter = Router();
const projectsController = new ProjectsController();

// projectsRouter.use(ensureAuthenticated);
projectsRouter.post('/create', projectsController.create);
projectsRouter.post('/show', projectsController.show);
projectsRouter.get('/list', projectsController.index);

export default projectsRouter;