import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getRepository, getCustomRepository } from 'typeorm';

import CreateProjectService from '@modules/tests/services/CreateTestService';
import ProjectRepository from '../../typeorm/repositories/ProjectRepository';

export default class TestController { 
    public async create(request: Request, response: Response): Promise<Response> {
        const { results, deadline } = request.body;

        const createProject = container.resolve(CreateProjectService);

        const test = await createProject.execute({
            results,
            deadline,
        });

        return response.json(test); 
    } 

    public async show(request: Request, response: Response): Promise <Response> { 
        const projectRepository = getCustomRepository(ProjectRepository);

        const user_id = request.body;
            
        const projects = await projectRepository.findAndCount(user_id);

        return response.json(projects);
    }

    public async index(request: Request, response: Response): Promise <Response> { 
        const projectRepository = getCustomRepository(ProjectRepository);
            
            const projects = await projectRepository.find();

            return response.json(projects);
    }

    public async start(request: Request, response: Response): Promise<Response> {
        const { results, deadline } = request.body;
        const user_id = request.user.id; 

        const createProject = container.resolve(CreateProjectService);

        const test = await createProject.execute({
            results,
            deadline,
        });

        return response.json(test); 
    } 

}
