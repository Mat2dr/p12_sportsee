import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../API/data';
import axios from "axios";

const BASE_URL = 'http://localhost:3000';

//Change to true if you want to use mocked data
let mockedData = false;

export async function getUserInfos(passedId) {
    passedId = parseInt(passedId);
    try {
        if (!mockedData) {
            const { data } = await axios.get(`${BASE_URL}/user/${passedId}`);
            return data;
        } else {
            let returnedData = {};
            const mockedData = USER_MAIN_DATA;
            for (var i = 0; i < mockedData.length; i++) {
                if (mockedData[i].id === passedId) {
                    let data = mockedData[i];
                    returnedData = {data};
                    break;
                }
            }
            return returnedData;
        }  
    } catch (error) {
        console.log(error);
    }
}

export async function getUserSession(passedId) {
    passedId = parseInt(passedId);
    try {
        if (!mockedData) {
            const { data } = await axios.get(`${BASE_URL}/user/${passedId}/activity`);
            return data;
        } else {
            let dataTest = {};
            const mockedData = USER_ACTIVITY;
            for (var i = 0; i < mockedData.length; i++) {
                if (mockedData[i].userId === passedId) {
                    let data = mockedData[i];
                    dataTest = {data};
                    break;
                }
            }
            return dataTest;
        }  
    } catch (error) {
        console.log(error);
    }
}

export async function getUserAverageSession(passedId) {
    passedId = parseInt(passedId);
    try {
        if (!mockedData) {
            const { data } = await axios.get(`${BASE_URL}/user/${passedId}/average-sessions`);
            return data;
        }  else {
            let dataTest = {};
            const mockedData = USER_AVERAGE_SESSIONS;
            for (var i = 0; i < mockedData.length; i++) {
                if (mockedData[i].userId === passedId) {
                    let data = mockedData[i];
                    dataTest = {data};
                    break;
                }
            }
            return dataTest;
        }   
    } catch (error) {
        console.log(error);
    }
}

export async function getUserPerf(passedId) {
    passedId = parseInt(passedId);
    try {
        if (!mockedData) {
            const { data } = await axios.get(`${BASE_URL}/user/${passedId}/performance`);
            return data;
        } else {
            let dataTest = {};
            const mockedData = USER_PERFORMANCE;
            for (var i = 0; i < mockedData.length; i++) {
                if (mockedData[i].userId === passedId) {
                    let data = mockedData[i];
                    dataTest = {data};
                    break;
                }
            }
            return dataTest;
        }   
    } catch (error) {
        console.log(error);
    }
}