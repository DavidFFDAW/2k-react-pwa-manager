import { database } from '~/database';
import { ApiModel } from './api.model';

export const Wrestler = stateUpdater => {
    return {
        hire: id => {
            database.wrestlers.update(id, { status: 'active' });
        },

        release: id => {
            database.wrestlers.update(id, { status: 'released' });
        },

        getActiveWrestlers: _ => {
            const cache = database.wrestlers
                .orderBy('name')
                .filter(wr => wr.status === 'active')
                .toArray();
            const api = ApiModel.get('wrestlers/all');
            cache.then(stateUpdater);

            return {
                cache,
                api: api.then(i => ({
                    original: i,
                    active: i.filter(o => o.status === 'active'),
                })),
            };
        },

        saveWrestlersCache: wrestlers => {
            database.wrestlers.bulkPut(wrestlers);
        },
    };
};
