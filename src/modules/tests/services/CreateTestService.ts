import { injectable, inject } from 'tsyringe';

import Test from '@modules/tests/infra/typeorm/entities/Test';
import ITestRepository from '@modules/tests/repositories/ITestRepository';
import ICreateTestDTO from '../dtos/ICreateTestDTO';

@injectable()
class CreateTestService {
    constructor(
        @inject('TestsRepository')
        private testRepository: ITestRepository,
    ){}
    
    public async execute({ 
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
        tooslow
     }: ICreateTestDTO): Promise<Test> {
        const test = await this.testRepository.create({
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
            tooslow
        });

        return test; 
    }
}

export default CreateTestService;