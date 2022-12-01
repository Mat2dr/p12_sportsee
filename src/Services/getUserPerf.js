import { BASE_URL, isMocked } from './config.js';
import { errorAPI } from './errors';
import { USER_PERFORMANCE } from '../API/data';
import axios from "axios";
import UserPerf from '../Models/UserPerf';

export async function getUserPerf(passedId) {
    passedId = parseInt(passedId);
    try {
        if (!isMocked) {
            const { data } = await axios.get(`${BASE_URL}/user/${passedId}/performance`);
            let userSession = new UserPerf(data.data);
            return userSession;
        } else {
            let userSession;
            const mockedData = USER_PERFORMANCE;
            for (var i = 0; i < mockedData.length; i++) {
                if (mockedData[i].userId === passedId) {
                    userSession = new UserPerf(mockedData[i]);
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