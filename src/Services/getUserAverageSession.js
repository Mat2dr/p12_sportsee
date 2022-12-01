import { BASE_URL, isMocked } from './config.js';
import { errorAPI } from './errors';
import { USER_AVERAGE_SESSIONS } from '../API/data';
import axios from "axios";
import UserAverageSession from '../Models/UserAverageSession';

export async function getUserAverageSession(passedId) {
    passedId = parseInt(passedId);
    try {
        if (!isMocked) {
            const { data } = await axios.get(`${BASE_URL}/user/${passedId}/average-sessions`);
            let userAverageSession = new UserAverageSession(data.data);
            return userAverageSession;
        } else {
            let userAverageSession;
            const mockedData = USER_AVERAGE_SESSIONS;
            for (var i = 0; i < mockedData.length; i++) {
                if (mockedData[i].userId === passedId) {
                    userAverageSession = new UserAverageSession(mockedData[i]);
                    break;
                }
            }
            return userAverageSession;
        }  
    } catch (error) {
        console.log(error);
        errorAPI();
    }
}