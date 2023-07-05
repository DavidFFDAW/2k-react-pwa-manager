import { database } from '~/database';
import { ApiModel } from './api.model';

export const Wrestler = stateUpdater => {
    const updateWrestlerStatus = (id, status) => {
        database.wrestlers.update(id, { status });

        ApiModel.put('wrestlers/status/change', { id, status }).then(_ => {
            stateUpdater(previous => {
                return {
                    ...previous,
                    list: previous.list.filter(wrestler => wrestler.id !== id),
                };
            });
        });
    };

    return {
        hire: id => {
            updateWrestlerStatus(id, 'active');
        },

        release: id => {
            updateWrestlerStatus(id, 'released');
        },

        getActiveWrestlers: _ => {
            const cache = database.wrestlers
                .orderBy('name')
                .filter(wr => wr.status === 'active')
                .toArray();
            const api = ApiModel.get('wrestlers/all');
            cache.then(cached => {
                stateUpdater(pr => ({ ...pr, list: cached }));
            });

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
