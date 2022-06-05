import {
    ERROR_CODE,
    GET_INFO,
    GET_INSTRUMENT_LIST,
    GET_PROFILE_DATA,
    REGIONS_LIST,
    SEARCH_MUSICIAN,
    SET_QUOTES
} from "../types/types";
import photo1  from './../../assets/img/mainSlider/bob-marley.jpg'
import photo2  from './../../assets/img/mainSlider/beatles.jpg'
import photo3  from './../../assets/img/mainSlider/bethoven.jpg'
import photo4  from './../../assets/img/mainSlider/mike.jpg'

const initialState = {
    info: {},
    regions: [],
    instruments: [],
    quotes: [
        {
            author: 'Людвиг ван Бетховен',
            text: '«Музыка — это откровение более высокое, чем мудрость и философия»',
            img: photo3
        },
        {
            author: 'Пол Маккартни, Beatles',
            text: '«Я всегда играл только ту музыку, в которую верил. Ведь, знаете ли, фанаты очень чётко чувствуют обман»',
            img: photo2
        },
        {
            author: 'Боб Марли',
            text: '«В музыке есть прекрасная вещь — когда она попадает в тебя, ты не чувствуешь боли.»',
            img: photo1
        },
        {
            author: 'Майкл Джексон',
            text: "«Мне нравится создавать музыку, которая понятна всем, от фермера в Ирландии до уборщицы туалетов в Гарлеме»",
            img: photo4
        }
    ],
    searchData: null,
    profileData: null,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO:
            return {...state, info: action.payload}
        case REGIONS_LIST:
            return {...state, regions: action.payload}
        case GET_INSTRUMENT_LIST:
            return {...state, instruments: action.payload}
        case SET_QUOTES:
            return {...state, quotes: action.payload}
        case SEARCH_MUSICIAN:
            return {...state, searchData: action.payload}
        case GET_PROFILE_DATA:
            return {...state, profileData: action.payload}
        case ERROR_CODE:
            return {...state, error: action.payload}
        default:
            return state;
    }
}

