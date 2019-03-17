const API_URL = 'https://us-central1-hack-the-burgh-2019.cloudfunctions.net/text-to-signs';
// const API_URL = 'http://localhost:5000';

export default class TextToSignsService {

    static async handleErrors(response) {
        if (!response.ok) {
            throw Error(response.status);
        }
        else {
            return response;
        }
    }

    static async postTextToSigns(text) {
        const payload = JSON.stringify({word: text});
        console.log(payload);
        return fetch(API_URL, { method: 'POST',
                                mode: "cors", // no-cors, cors, *same-origin
                                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                                credentials: "same-origin", // include, *same-origin, omit
                                headers: {
                                    "Content-Type": "application/json",
                                    // "Content-Type": "application/x-www-form-urlencoded",
                                },
                                redirect: "follow", // manual, *follow, error
                                referrer: "no-referrer", // no-referrer, *client
                                body: payload })
            .then(this.handleErrors)
            .then(response => {
                return response.json();
            })
            .catch(error => {
                throw Error(error.message);
            });
    }
}