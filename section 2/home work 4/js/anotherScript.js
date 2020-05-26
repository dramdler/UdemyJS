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
        div.innerHTML = this.someText;

        document.body.append(div);
    }
}

const Rec = new Options( 200, 500, '#444', 26, 'center', 'Hello? OMFG !!! It\'s Work!!!!!' );

Rec.createDiv();
