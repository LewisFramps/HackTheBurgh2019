const API_URL = 'https://us-central1-hack-the-burgh-2019.cloudfunctions.net/text-to-signs';

export default class TextToSignsService {

    static async handleErrors(response) {
        if (!response.ok) {
            throw Error(response.status);
        }
        else {
            return response;
        }
    }

    static async postWordToSigns(word) {
        return fetch(API_URL, { method: 'POST', body: JSON.stringify({word: word}) })
            .then(this.handleErrors)
            .then(response => {
                return response.json();
            })
            .catch(error => {
                throw Error(error.message);
            });
    }

    static async postTextToSigns(text) {
        let images = [];
        const words = text.split(' ');
        for (var word in words) {
            const imageJson = await TextToSignsService.postWordToSigns(word);
            images.push(imageJson.data);
        }
        return images;
    }
}