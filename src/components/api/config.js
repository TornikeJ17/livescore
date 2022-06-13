import axios from "axios";

const URL = 'https://api-football-standings.azharimm.site';
const Year = new Date().getFullYear() - 1;

export const fetch = async (country, year) => {
    console.log(year)
    try {
        const { data } = await axios.get(`${URL}/leagues/${country}/standings?season=${year}&sort=asc`);
        return data
    } catch (error) {
        return error
    }
};

export const fetchTitle = async (country) => {
    try {
        const { data } = await axios.get(`${URL}/leagues/${country}`);
        return data
    } catch (error) {
        return error
    }
};
