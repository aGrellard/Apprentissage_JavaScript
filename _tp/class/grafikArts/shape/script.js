
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;
const ctx = canvas.getContext("2d");


class Rectangle {
    _width = 0;
    _height = 0;
    _x = 0;
    _y = 0;
    constructor(w, h) {
        if (w < 0 || h < 0) {
            throw new Error("Impossible d'avoir une forme géometrique avec des dimensios négatives")
        }
        this._width = w;
        this._height = h;
    }
    isValid(){
        if (this._width < 0 || this._height < 0) return false;
        return true;
    }
    get perimeter() {
        return (this._width + this._height) * 2;
    }
    get y() {
        return this._height + this._y;
    }

    isBiggerThan(o){
        if (this.perimeter > o.perimeter) return true;
        return false;
    }

    canvasDraw(x, y, id, ctx) {
        this._x = x;
        this._y = y;
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeRect(x, y, this._width, this._height);
    }
}

class Square extends Rectangle {
    constructor(c) {
        super(c, c);
    }
}
/*
try {
    const r = new Rectangle(150, 100);  
    console.log(r.perimeter) // 60
    console.log(r.isValid()) // true
    const r2 = new Rectangle(-10, 20);
    console.log(r2.isValid()) // false
    const c = new Square(100); 
    console.log(c.perimeter) // 40
    console.log(r.isBiggerThan(c)) // true
    r.canvasDraw(10, 10, canvas, ctx)
    c.canvasDraw(10, r.y + 10, canvas, ctx)
} catch(e) {
    console.error(e);
    console.log("impossible de créer la forme");
}
*/
/*
class PromptError extends Error () {

}
*/
function promptRectangle() {
    try {
        const width = parseInt(prompt('Largeur'));
        const height = parseInt(prompt('hauteur'));
        const r = new Rectangle(width, height);
        return r;        
    } catch(e) {
        throw new Error('Entrée utilisateur invalide', {cause: e})
    }
}

try {
    promptRectangle()
} catch(e) {
    /*
    if (e instanceof PromptError) {
        console.log('PromptError')
    } else {
        console.log('erreur clasique')
    }
    */
    console.log('erreur clasique\n', {cause: e})
}


