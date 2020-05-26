'use strict'

class Options {
    constructor(height, width, bg, fontSize, textAlign, someText = 'hello') {
        this.height = height + 'px';
        this.width = width + 'px';
        this.background = bg;
        this.fontSize = fontSize + 'px';
        this.textAlign = textAlign;
        this.someText = someText;
    }
    log(){
        console.log(this)
    }
    createDiv() {
        let div = document.createElement('div');
        div.style.cssText = `
        width: ${this.width};
        height: ${this.height};
        background: ${this.background};
        font-size: ${this.fontSize};
        text-align: ${this.textAlign};
        ` 
        // div.style.width = this.width;
        // div.style.height = this.height;
        // div.style.background = this.background;
        // div.style.fontSize = this.fontSize;
        // div.style.textAlign = this.textAlign;
        div.innerHTML = this.someText;
        console.log(this);

        document.body.append(div);
    }
}

const Rec = new Options( 200, 500, '#444', 26, 'center', 'Hello? OMFG !!! It\'s Work!!!!!' );

console.log(Rec);
Rec.createDiv();

// 2) Используя синтаксис ES6 в отдельном документе:

// ·        Создать класс options

// ·        Он должен содержать свойства: height, width, bg, fontSize, textAlign

// ·        Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров

// ·        Создать новый объект через класс

// ·        Вызвать его метод и получить элемент на страниц