import Dexie from 'dexie';
import { AppConfig } from './AppConfig';

export const database = new Dexie(AppConfig.DEXIE_NAME);
database.version(1).stores({
    tweets: '++id',
    wrestlers:
        '++id, name, alias, sex, brand, status, is_tag, is_champ, twitter_account, twitter_name, finisher, image, kayfabe, twitter_image, overall, category, created_at, updated_at',
    blog_posts: '++id',
    reigns: '++id',
    championships: '++id',
    teams: '++id',
});
