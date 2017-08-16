import Fetch from '../fetch';
import api from '../../../config/server.config';

export async function getData () {
    try {
        let data = await Fetch.fetch(api.apiUser);
        return data;
    } catch (e) {
        throw e;
    }
}