import { database } from '~/database';
import { ApiModel } from './api.model';

export const Wrestler = stateUpdater => {
    return {
        hire: _ => {},
        fire: _ => {},
        getWrestlers: _ => {
            return {
                api: ApiModel.get('wrestlers/all'),
                cache: database.wrestlers.toArray(),
            };
        },
    };
};
