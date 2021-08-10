import Test from '@modules/tests/infra/typeorm/entities/Test';
import ICreateTestDTO from '@modules/tests/dtos/ICreateTestDTO';

export default interface ITestsRepository {
    findAllTests(user_id: string): Promise<Test[]>;
    create(data: ICreateTestDTO): Promise<Test>; 
}
