class Pj{

    constructor(){
        this.v = 6
        this.img = loadImage('sprites/pjM16.png')
        this.velX = 0
        this.velY = 0
        this.x = 400
        this.y = 400
        this.width = 32
        this.height = 20
        this.middleX = 16 
        this.middleY = 10
    }

    right(){
        this.x += this.v
    }
    
    left(){
        this.x -= this.v
    }

    up() {
        this.y -= this.v
    }

    down() {
        this.y += this.v
    }

    dibujar(){
        image(this.img,-8, -10)
    } 

    getX() {
        return (this.x + this.width)
    }

    getY() {
        return (this.y + this.height)
    }
} 