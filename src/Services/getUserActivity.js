import { BASE_URL, isMocked } from './config.js';
import { errorAPI } from './errors';
import { USER_ACTIVITY } from '../API/data';
import axios from "axios";
import UserActivity from '../Models/UserActivity';

export async function getUserActivity(passedId) {
    passedId = parseInt(passedId);
    try {
        if (!isMocked) {
            const { data } = await axios.get(`${BASE_URL}/user/${passedId}/activity`);
            let userSession = new UserActivity(data.data);
            return userSession;
        } else {
            let userSession;
            const mockedData = USER_ACTIVITY;
            for (var i = 0; i < mockedData.length; i++) {
                if (mockedData[i].userId === passedId) {
                    userSession = new UserActivity(mockedData[i]);
                    break;
                }
            }
            return userSession;
        }  
    } catch (error) {
        console.log(error);
        errorAPI();
    }
}