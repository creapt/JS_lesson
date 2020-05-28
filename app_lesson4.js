'use strict';
//Задание 1
const newObjext = {
    units: null,
    tens: null,
    hundreds: null,
}

function swapNumToObj(a) {
    if (Math.floor(a) < a || a > 999 || a < 0 || a == NaN) {
        console.log = ('Ошибка');
        return newObjext;
    } else {
        newObjext.units = Math.floor(a / 100);
        newObjext.tens = Math.floor((a % 100) / 10);
        newObjext.hundreds = Math.floor((a % 100) % 10);
    }
    return newObjext;
}
console.log(swapNumToObj(537));

//Задание 1.1
//es5
function Product(name, price) {

    this.name = name;
    this.price = price;
    this.make25PercentDiscount = function() {
        this.price *= 0.75;
    }
}
const product1 = new Product('Vasya', 100);
console.log(product1);
product1.make25PercentDiscount();
//es6
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price *= 0.75;
    }
}
const product2 = new ProductES6('Kolya', 200);
console.log(product2);
product2.make25PercentDiscount();
//Задание 1.2
//ES5
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostES5.prototype.edit = function(text) {
    this.text = text;
}

const post1 = new PostES5('Petya', 'What is love', new Date());
console.log(post1);
post1.edit('baby dont hurt me');
console.log(post1);


function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

AttachedPostES5.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

const attached1 = new AttachedPostES5('Moder', 'my life be like', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('good bye');
console.log(attached1);
//ES6
class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post2 = new PostES6('Tanya', 'its my life', new Date());
console.log(post2);
post2.edit('of course');
console.log(post2);


class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached2 = new AttachedPostES6('admin', 'all ban', new Date());
console.log(attached2);
attached2.makeTextHighlighted();
attached2.edit('remove the ban');
console.log(attached2);