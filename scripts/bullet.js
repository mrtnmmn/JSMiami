class bullet {

    constructor(x, y, angle) {
        this.v = 20 
        this.x = x
        this.y = y 
        this.a = angle
        this.vX = this.v * Math.cos(angle)
        this.vY = this.v * Math.sin(angle)
    }

    dibujar() {
        fill(255,0,0)
        ellipse(this.x, this.y,5,5)
        this.x += this.vX
        this.y += this.vY
    }
}  