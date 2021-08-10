import { injectable, inject } from 'tsyringe';

import Project from '@modules/tests/infra/typeorm/entities/Test';
import IProjectRepository from '@modules/tests/repositories/ITestRepository';

interface Request {
    results: string[];
    deadline: Date[]; 

}

@injectable()
class CreateTestService {
    constructor(
        @inject('ProjectsRepository')
        private projectsRepository: IProjectRepository,
    ){}
    
    public async execute({ results, deadline }: Request): Promise<Project> {
        const test = await this.projectsRepository.create({
            results,
            deadline 
        });

        return test; 
    }
}

export default CreateTestService;