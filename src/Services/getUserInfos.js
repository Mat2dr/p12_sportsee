import { BASE_URL, isMocked } from './config.js';
import { errorAPI } from './errors';
import { USER_MAIN_DATA } from '../API/data';
import axios from "axios";
import UserInfo from '../Models/UserInfo';

export async function getUserInfos(passedId) {
    passedId = parseInt(passedId);
    try {
        if (!isMocked) {
            const { data } = await axios.get(`${BASE_URL}/user/${passedId}`);
            let userInfoData = new UserInfo(data.data);
            return userInfoData;
        } else {
            let userInfoData;
            const mockedData = USER_MAIN_DATA;
            for (var i = 0; i < mockedData.length; i++) {
                if (mockedData[i].id === passedId) {
                    userInfoData = new UserInfo(mockedData[i]);
                    break;
                }
            }
            return userInfoData;
        }  
    } catch (error) {
        console.log(error); 
        errorAPI();
    }
}