import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getRepository, getCustomRepository } from 'typeorm';

import CreateTestService from '@modules/tests/services/CreateTestService';
import TestRepository from '../../typeorm/repositories/TestRepository';
import TestsRepository from '../../typeorm/repositories/TestsRepository';

export default class TestController { 
    public async create(request: Request, response: Response): Promise<Response> {
        const {
            deadline,
            subnum,
            type,
            block,
            congruency,
            trial,
            stim,
            resp,
            corr,
            rt,
            tooslow
        } = request.body;

        const user_id = request.body;

        const createProject = container.resolve(CreateTestService);

        const test = await createProject.execute({
            user_id,
            deadline,
            subnum,
            type,
            block,
            congruency,
            trial,
            stim,
            resp,
            corr,
            rt,
            tooslow,
        });

        return response.json(test); 
    } 

    public async show(request: Request, response: Response): Promise <Response> { 
        const projectRepository = getCustomRepository(TestRepository);

        const user_id = request.body;
            
        const projects = await projectRepository.findAndCount(user_id);

        return response.json(projects);
    }

    public async index(request: Request, response: Response): Promise <Response> { 
        const projectRepository = getCustomRepository(TestRepository);
            
            const projects = await projectRepository.find();

            return response.json(projects);
    }

}
