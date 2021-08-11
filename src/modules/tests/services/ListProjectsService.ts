import { injectable, inject } from 'tsyringe';

import ITestRepository from '../repositories/ITestRepository';

import Project from '../infra/typeorm/entities/Test';

interface Request{
    user_id: string,
}

@injectable()
class ListProjectsService {
    constructor(
        @inject('TestsRepository')
        private testRepository: ITestRepository
    ){}

    public async execute({user_id}: Request): Promise<Project[]> {  
        const projects = await this.testRepository.findAllTests(user_id);

        return projects;
    }

}

export default ListProjectsService;

