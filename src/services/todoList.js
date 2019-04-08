const BASE_URL = "http://localhost:8081";

export const getData = async () => fetch(`${BASE_URL}/getData`).then(data => {
  return data.clone().json();
});

export const addData = async (element) => fetch(`${BASE_URL}/addData`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(element)
});
