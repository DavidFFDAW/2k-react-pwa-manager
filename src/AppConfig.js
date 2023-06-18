export class AppConfig {
    static DEXIE_NAME = 'ww2kreactpwacache';
    static VERSION = '1.2.0';
    static API_BASE_URL = 'https://global-api-nu.vercel.app/2k/';
    static USER_KEY = 'react-champions-pwa-manager-user';
    static NEWS_ENDPOINT = AppConfig.API_BASE_URL + 'news/report';
    static TEAMS_ENDPOINT = AppConfig.API_BASE_URL + 'teams';
    static CREATE_TEAM_ENDPOINT = AppConfig.API_BASE_URL + 'teams/new';
    static WRESTLERS_ENDPOINT = AppConfig.API_BASE_URL + 'wrestlers/get';
    static SINGLE_TEAM_ENDPOINT = AppConfig.API_BASE_URL + 'teams?id=';
    static PUSH_VAPID__KEY = 'BMOETqEVUA2CghOVQVUzTku_oebDMEs4uYokOESS3-eIfOX931bVPFBGo6m2oj-dFZga4tjz4nMKssadJiN8mL4';
}
