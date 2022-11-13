import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../API/data';
import axios from "axios";

const BASE_URL = 'http://localhost:3000';

let mockedData = true;

export async function getUserInfos(userId) {
    try {
        if (!mockedData) {
            const { data } = await axios.get(`${BASE_URL}/user/${userId}`);
            return data;
        } else {
            const mockedData = USER_MAIN_DATA;
            console.log(mockedData);
            return mockedData;
        }  
    } catch (error) {
        console.log(error);
    }
}

export async function getUserSession(userId) {
    try {
        const { data } = await axios.get(`${BASE_URL}/user/${userId}/activity`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getUserAverageSession(userId) {
    try {
        const { data } = await axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getUserPerf(userId) {
    try {
        const { data } = await axios.get(`${BASE_URL}/user/${userId}/performance`);
        return data;
    } catch (error) {
        console.log(error);
    }
}