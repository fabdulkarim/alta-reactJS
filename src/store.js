import createStore from "unistore"
import { stat } from "fs";


//moving main axios-reload to here
import axios from "axios"
const apiKey = "485a6bc08eca4546a902aa3f87808b0c";
const baseUrl = "https://newsapi.org/v2";
const urlCombined = baseUrl + "/top-headlines?country=id&apiKey=" + apiKey;

const initState = {
    full_name: "",
    url_to_image: "",
    is_login: false,
    username: "",
    password: "",
    main_list: [],
    main_loading: true,
    now_time: new Date(),
    search: "",
    is_query: false
};

export const store = createStore(initState);

export const actions = store => ({
    handleChange: (state, event) => {
        // console.log()
        return { [event.target.name] : event.target.value };
    },

    handleInput: (state, dict) => {
        console.warn(dict)
        return { [dict.key] : dict.value };
    },

    reload: async (state, ...restArgument) => {
        const category = restArgument[0]
        console.log(category)
        let newUrl, local;
        (restArgument.length == 1) ? newUrl = urlCombined + "&category=" + category : newUrl = urlCombined + "&q=" + restArgument[1]
        await axios.get(newUrl + "&pageSize=10")
            .then(function (response) {
                local = response.data;
            })
            .catch();
        return { main_list: local.articles, main_loading: false, now_time: new Date() };
    }
});