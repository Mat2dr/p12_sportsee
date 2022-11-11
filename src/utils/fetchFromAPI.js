import axios from "axios";

const BASE_URL = 'http://localhost:3000';

export async function getUserInfos(userId) {
    try {
        const { data } = await axios.get(`${BASE_URL}/user/${userId}`);
        return data;
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