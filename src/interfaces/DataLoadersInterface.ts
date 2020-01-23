import * as DataLoader from 'dataloader';

import { UserInstance } from '../models/UserModel';
import { PostInstance } from '../models/PostModel';
import { AccessGroupInstance } from '../models/AccessGroupModel';

import { DataLoaderParam } from './DataLoaderParamInterface';

export interface DataLoaders {

    userLoader: DataLoader<DataLoaderParam<number>, UserInstance>;
    postLoader: DataLoader<DataLoaderParam<number>, PostInstance>;
    accessgroupLoader: DataLoader<DataLoaderParam<number>, AccessGroupInstance>;

}