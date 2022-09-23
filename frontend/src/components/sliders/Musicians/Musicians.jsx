import React from 'react';
import {Box} from "@material-ui/core";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useStyles} from "./style";
import Quotes from "../Quotes/Quotes";

import photo1  from '../../../assets/img/mainSlider/bob-marley.jpg'
import photo2  from '../../../assets/img/mainSlider/beatles.jpg'
import photo3  from '../../../assets/img/mainSlider/bethoven.jpg'
import photo4  from '../../../assets/img/mainSlider/mike.jpg'
import photo5  from '../../../assets/img/mainSlider/sting.jpg'
import photo6  from '../../../assets/img/mainSlider/amy.webp'
import photo7  from '../../../assets/img/mainSlider/elton.jpg'
import photo8  from '../../../assets/img/mainSlider/ozi.jpg'
import photo9  from '../../../assets/img/mainSlider/mik.jpg'
import photo10  from '../../../assets/img/mainSlider/dragons.jpg'

const Musicians = () => {

    const classes = useStyles()

    const quotes = [
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
        },
        {
            author: 'Стинг',
            text: "«Идеальная музыка — это тишина, а музыканты занимаются созданием красивой рамки вокруг этого совершенства»",
            img: photo5
        },
        {
            author: 'Эми Уайнхаус',
            text: "«Самая большая ошибка, которую только могут сделать родители, это зачать ребенка под плохую музыку»",
            img: photo6
        },
        {
            author: 'Элтон Джон',
            text: "«Музыка обладает исцеляющей силой. На несколько часов она может заставить тебя покинуть твое тело, чтобы ты мог, наконец, взглянуть на себя со стороны»",
            img: photo7
        },
        {
            author: 'Оззи Осборн',
            text: "«Все эти разговоры о металле и харде… я не подпишусь ни под единым словом. Рок — это просто хорошая музыка. Его нужно слушать, а не говорить о нем»",
            img: photo8
        },
        {
            author: 'Мик Джаггер',
            text: "«Моей матери никогда не нравилось, чем я занимался. Она была бы счастливее, будь я каменщиком»",
            img: photo9
        },
        {
            author: 'Дэн Рейнолдс, Imagine Dragons',
            text: "«Я уверен, что люди, творящие музыку, делают ее не потому что хотят, а потому что должны»",
            img: photo10
        }
    ]

    const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <AliceCarousel
            activeIndex={randomIntFromInterval(0, quotes.length)}
            items={quotes.length && quotes.map((element, index) => {
                return (
                    <Box key={index} className={classes.sliderWrapper}>
                        <Box className={classes.shadowBackground} />
                        <img className={classes.slideImg} src={element.img} alt='' />,
                        <Quotes
                            text={element.text}
                            author={element.author}
                            index={index}
                        />
                    </Box>
                )
            })}
            animationType='fadeout'
            autoPlayStrategy="none"
            autoPlayInterval={7000}
            animationDuration={500}
            mouseTracking={false}
            touchTracking={false}
            touchMoveDefaultEvents={false}
            disableButtonsControls
            disableDotsControls
            disableSlideInfo
            infinite
            autoPlay
            innerWidth
        />
    );
};

export default Musicians;