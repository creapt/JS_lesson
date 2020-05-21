'use strict';

//Урок 3
//Задание 1

for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(i + " - это ноль");
    } else {
        if ((i % 2) == 1) {
            console.log(i + " - нечетное число");
        }
        if ((i % 2) == 0) {
            console.log(i + " - четное число");
        }
    }
}
//Задание 2
const post = {
    author: "John", // вывести
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 // вывести
            }
        },
        {
            userId: 5, // вывести
            userName: "Jane",
            text: "lorem ipsum 2", // вывести
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]

}
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
let i = 0;
products.forEach(function (sale) {
    console.log(` Цена со скидкой -  ${sale.price * 0.85}`);

});
// Задание 4


const products4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
const productsWithPhotos = products4.filter(item => "photos" in item && item.photos.length > 0);
        console.log(productsWithPhotos);
products4.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    // a должно быть равным b
    return 0;
});
console.log(products4);
// Задание 5

for (let i=0; i<10; console.log(i++)){};

// Задание 6
for (let x = 'x'; x.length <= 20; x += 'x') {console.log(x);}
