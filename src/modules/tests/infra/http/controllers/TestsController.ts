import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getCustomRepository } from 'typeorm';

import CreateTestsService from '@modules/tests/services/CreateTestsService';
import BstsRepository from '../../typeorm/repositories/BstRepository';

export default class BstController { 
    public async create_bst(request: Request, response: Response): Promise<Response> {
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

        const createTest = container.resolve(CreateTestsService);

        const test = await createTest.execute_bst({
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

    public async create_sternberg(request: Request, response: Response): Promise<Response> {
        const {
            user_id,
            deadline,
            subnum,
            length,
            trial,
            set,
            stim,
            targetfoil,
            resp,
            corr,
            rt
        } = request.body;

        const createTest = container.resolve(CreateTestsService);

        const test = await createTest.execute_sternberg({
            user_id,
            deadline,
            subnum,
            length,
            trial,
            set,
            stim,
            targetfoil,
            resp,
            corr,
            rt
        });

        return response.json(test); 
    }

    public async create_tol(request: Request, response: Response): Promise<Response> {
        const {
            user_id,
            deadline,
            sub,
            trial,
            size,
            current,
            end,
            step,
            reset,
            tries,
            score,
            abstime,
            trialtime,
            clicktime,
            done
        } = request.body;

        const createTest = container.resolve(CreateTestsService);

        const test = await createTest.execute_tol({
            user_id,
            deadline,
            sub,
            trial,
            size,
            current,
            end,
            step,
            reset,
            tries,
            score,
            abstime,
            trialtime,
            clicktime,
            done
        });

        return response.json(test); 
    }

    public async create_stroop(request: Request, response: Response): Promise<Response> {
        const {
            user_id,
            deadline,
            subnum,
            round,
            block,
            trial,
            word,
            color,
            part,
            xpos,
            ypos,
            resp,
            rname,
            correct,
            intrusion,
            numresponses,
            time0,
            timea,
            timeend,
            trialtime,
            responsetime
        } = request.body;

        const createTest = container.resolve(CreateTestsService);

        const test = await createTest.execute_stroop({
            user_id,
            deadline,
            subnum,
            round,
            block,
            trial,
            word,
            color,
            part,
            xpos,
            ypos,
            resp,
            rname,
            correct,
            intrusion,
            numresponses,
            time0,
            timea,
            timeend,
            trialtime,
            responsetime
        });

        return response.json(test); 
    }

    public async show(request: Request, response: Response): Promise <Response> { 
        const testRepository = getCustomRepository(BstsRepository);

        const user_id = request.body;
            
        const test = await testRepository.findAndCount(user_id);

        return response.json(test);
    }

    public async index(request: Request, response: Response): Promise <Response> { 
        const testRepository = getCustomRepository(BstsRepository);
            
            const test = await testRepository.find();

            return response.json(test);
    }

}
