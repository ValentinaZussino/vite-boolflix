import { reactive } from "vue";

export const store = reactive ({
    apiURL: 'https://api.themoviedb.org/3',
    options: {
        params: {
            api_key: 'c5cd87a2343951ca05c9732fe7bc730d',
            query: '',
        }
    },
    atClick: true
})