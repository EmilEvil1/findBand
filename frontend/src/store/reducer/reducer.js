import {GET_INFO, REGIONS_LIST, SEARCH_MUSICIAN, SET_QUOTES} from "../types/types";

const initialState = {
    info: {},
    regions: [],
    quotes: [
        {
            author: 'Jimmy Page Led Zeppelin',
            text: '«Верить себя совсем не обязательно, главное верить в то, что ты делаешь. Тогда в это поверят другие»'
        },
        {
            author: 'Джон Леннон, Beatles',
            text: '«Одна часть меня постоянно переживает, что я обычный неудачник, в то время как другая мнит себя Господом Богом»'
        },
        {
            author: 'Стивен Тайлер, Aerosmith',
            text: '«Вещи, которые достались тем, кто ждал – это вещи, которые оставили за собой те, кто их добыл своими силами»'
        },
        {
            author: 'Роджер Уотерс, Pink Floyd',
            text: "«Настоящая музыка «сработает» для любого поколения!»"
        },
        {
            author: 'Брайан Мэй, Queen',
            text: "«Рок играют не по нотам, а по интуиции»"
        },
        {
            author: 'Оззи Осборн',
            text: '«Все эти разговоры про хард-рок и металл, я не подпишусь под ними, рок это просто хорошая музыка, и её нужно слушать»'
        },
        {
            author: 'Курт Кобейн, Nirvana',
            text: "«Лучше быть угрюмым мечтателем, чем безмозглым тусовщиком»"
        }
    ],
    searchData: ''

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO:
            return {...state, info: action.payload}
        case REGIONS_LIST:
            return {...state, regions: action.payload}
        case SET_QUOTES:
            return {...state, quotes: action.payload}
        case SEARCH_MUSICIAN:
            return {...state, searchData: action.payload}
        default:
            return state;
    }
}

