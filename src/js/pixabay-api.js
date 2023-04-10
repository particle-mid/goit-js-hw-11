import axios from 'axios';

export class PixabayAPI {
    #API_KEY = '35233441-de03d6b8c7fb3d0d22f4d4bad';
    #BASE_URL = 'https://pixabay.com/api/';

    constructor() {
        this.query = null;
        this.page = 1;
        this.count = 20;
    }

    fetchPhotos() {
        return axios.get(`${this.#BASE_URL}`, {
            params: {
                q: this.query,
                page: this.page,
                per_page: this.count,
                key: this.#API_KEY,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            },
        });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
}   