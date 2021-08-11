import { EntityRepository, Repository } from 'typeorm';
import Project from '../entities/Test';

@EntityRepository(Project)
class TestsRepository extends Repository <Project> {
    
}

export default TestsRepository;