class dog {

    constructor(x,y, mill){
        this.x = x
        this.y = y
        this.v = 7
        this.sprites = [loadImage('sprites/enemies/dogs/dog.png'),
            loadImage('sprites/enemies/dogs/dogDeath01.png'),
            loadImage('sprites/enemies/dogs/dogDeath02.png'),
            loadImage('sprites/enemies/dogs/dogDeath03.png')]
        this.vX = 0
        this.vY = 0
        this.middleX = 13
        this.middleY = 5
        this.isSpawned = false
        this.spawnMillis = mill
        this.isAlive = true
        this.angle = 0
        this.deathSprite = this.sprites[this.calculateRandomMN(1,3)]
    }

    dibujar(xPJ, yPJ) {
        if (this.isAlive) {
            push()
            this.ownTranslation()
            this.angle = this.calculateAngle(xPJ, yPJ)
            rotate(this.angle)
            image(this.sprites[0], -this.middleX, -this.middleY)
            this.updatePosition(this.angle)
            pop()
        } else {
            push() 
            this.ownTranslation()
            rotate(this.angle)
            image(this.deathSprite, -this.middleX, -this.middleY)
            pop()
        }
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

    die(x, y) {
        this.isAlive = false
        this.angle = this.calculateAngle(x, y)
    }

    ownTranslation() {
        translate(this.x + this.middleX, this.y + this.middleY)
    }

    calculateAngle(x, y) {
        return atan2(y - (this.y + this.middleY), x - (this.x + this.middleX))
    }

    calculateRandomMN(m, n) {
        return Math.round(Math.random()*(m-n)+n)
    }

}