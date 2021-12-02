class dog {

    constructor(x,y){
        this.x = x
        this.y = y
        this.v = 8
        this.sprite = loadImage('sprites/dog.png')
        this.vX = 0
        this.vY = 0
        this.middleX = 13
        this.middleY = 5
        this.alive = true
    }

    dibujar(xPJ, yPJ) {
        push()
        translate(this.x + this.middleX, this.y + this.middleY)
        let angle = atan2(yPJ - (this.y + this.middleY), xPJ - (this.x + this.middleX))
        rotate(angle)
        image(this.sprite, -this.middleX, -this.middleY)
        this.updatePosition(angle)
        pop()
    }

    caculateVX(angle) {
        this.vX = this.v * Math.cos(angle)
    }

    calculateVY(angle) {
        this.vY = this.v * Math.sin(angle)
    } 

    updatePosition(angle) {
        this.caculateVX(angle)
        this.calculateVY(angle)
        this.x += this.vX
        this.y += this.vY
    }
}