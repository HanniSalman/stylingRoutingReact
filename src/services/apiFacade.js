import {BASE_URL_DEV} from "../utils/globalVariables.js";

const login = async ({username, password}) => {
    console.log(username, password);
    console.log(BASE_URL_DEV);
    try {
        const response = await fetch(`${BASE_URL_DEV}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })

        const data = await response.json();
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

login({username: "hanni", password: "1234"});