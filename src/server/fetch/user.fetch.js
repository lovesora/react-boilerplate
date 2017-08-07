import Fetch from '../fetch';
import api from '../restful-api';

export function getUserData() {
    return new Fetch(). getJSON(api.user.get.url);
}