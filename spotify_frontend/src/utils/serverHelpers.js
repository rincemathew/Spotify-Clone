// const backendUrl = 'http://localhost:8000';
// let backendUrl

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
    // const backendUrl = 'http://localhost:8000';
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    console.log(backendUrl+route)
    const response = await fetch(backendUrl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
};