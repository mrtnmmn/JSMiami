class bullet {

    constructor(x, y, angle) {
        this.v = 15
        this.x = x
        this.y = y 
        this.a = angle
        this.vX = this.v * Math.cos(angle)
        this.vY = this.v * Math.sin(angle)
        this.sprite = loadImage('sprites/bullet.png')
        this.middleX = 3
        this.middleY = 3
        this.onAir = true
    }

    // dibujar con sprite

    /*
    dibujar() {
        push()
        translate(this.x + this.middleX, this.y + this.middleY)
        rotate(this.a)
        image(this.sprite, -this.middleX, -this.middleY)
        pop()
        this.x += this.vX
        this.y += this.vY
    }
    */

    dibujar() {
        fill(255,255,255)
        ellipse(this.x + this.middleX, this.y + this.middleY, 5, 5)
        this.x += this.vX
        this.y += this.vY
    }

    checkCollision(){
        if(this.x > 800 || this.x < 0 || this.y < 0 || this.y > 800) {
            this.onAir = false 
        }
    }

    logPosition() {
        console.log(Math.round(this.x))
        console.log(Math.round(this.y))
        console.log(this.onAir)
    } 

}