const key = '6cecc128a0a0450b828152153220512';

export const fetchData = async (city:string) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

