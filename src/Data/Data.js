import air from '../assets/air.png';
import air2 from '../assets/air2.png';
import blazer from '../assets/blazer.png';
import blazer2 from '../assets/blazer2.png';
import crater from '../assets/crater.png';
import crater2 from '../assets/crater2.png';
import hippie from '../assets/hippie.png';
import hippie2 from '../assets/hippie2.png';
import jordan from '../assets/jordan.png';
import jordan2 from '../assets/jordan2.png';

export const main_page_data = [
    {
        id: 0,
        img: blazer,
        text: "Blazer",
        price: 109,
        color: '#663399',
        product: [
            {
                color: 'white',
                img: blazer,
            },
            {
                color: 'green',
                img: blazer2,
            },
        ],
    },
    {
        id: 1,
        img: air,
        text: "Air Force",
        price: 119,
        color: '#369e62',
        product: [
            {
                color: 'black',
                img: air,
            },
            {
                color: 'blue',
                img: air2,
            },
        ],
    },
    {
        id: 2,
        img: crater,
        text: "Crater",
        price: 99,
        color: '#008080',
        product: [
            {
                color: 'black',
                img: crater,
            },
            {
                color: 'white',
                img: crater2,
            },
        ],
    },
    {
        id: 3,
        img: hippie,
        text: "Hippie",
        price: 139,
        color: '#6495ED',
        product: [
            {
                color: 'grey',
                img: hippie,
            },
            {
                color: 'black',
                img: hippie2,
            },
        ],
    },
    {
        id: 4,
        img: jordan,
        text: "Jordan",
        price: 199,
        color: '#7c7350',
        product: [
            {
                color: 'grey',
                img: jordan,
            },
            {
                color: 'green',
                img: jordan2,
            },
        ],
    }
]