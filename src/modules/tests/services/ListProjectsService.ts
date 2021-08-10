import { injectable, inject } from 'tsyringe';

import ITestRepository from '../repositories/ITestRepository';

import Project from '../infra/typeorm/entities/Test';

interface Request{
    user_id: string,
}

@injectable()
class ListProjectsService {
    constructor(
        @inject('ProjectsRepository')
        private projectsRepository: ITestRepository
    ){}

    public async execute({user_id}: Request): Promise<Project[]> {  
        const projects = await this.projectsRepository.findAllTests(user_id);

        return projects;
    }

}

export default ListProjectsService;

