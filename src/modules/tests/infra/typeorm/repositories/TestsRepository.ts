import { getRepository, Repository } from 'typeorm';

import ITestsRepository from '@modules/tests/repositories/ITestRepository';
import ICreateTestDTO from '@modules/tests/dtos/ICreateTestDTO';

import Test from '@modules/tests/infra/typeorm/entities/Test';

class TestsRepository implements ITestsRepository{
    private ormRepository: Repository<Test>;
    
    constructor() { 
        this.ormRepository = getRepository(Test);
    }

    public async create({ deadline, results }: ICreateTestDTO): Promise<Test>{
        const project = this.ormRepository.create({    
        });

        await this.ormRepository.save(project);

        return project;
    }

    public async findAllTests(user_id: string): Promise<Test[]> {
        let projects: Test[];
    
        projects = await this.ormRepository.find({
            where: {
                id: user_id,
             }
        });
        
        return projects;
    }
}

export default TestsRepository;