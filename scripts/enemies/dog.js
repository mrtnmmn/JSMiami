class dog {

    constructor(x,y, mill){
        this.x = x
        this.y = y
        this.v = 6
        this.sprites = [loadImage('sprites/enemies/dogs/stage01.png'),
            loadImage('sprites/enemies/dogs/stage02.png'),
            loadImage('sprites/enemies/dogs/stage03.png'),
            loadImage('sprites/enemies/dogs/stage04.png'),
            loadImage('sprites/enemies/dogs/stage05.png')]

        this.deathArray = [loadImage('sprites/enemies/dogs/dogDeath01.png'),
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
        this.deathSprite = this.deathArray[this.calculateRandomMN((this.deathArray.length - 1), 0)]
        this.actualSprite = this.sprites[0]
    }

    dibujar(xPJ, yPJ, alivePJ) {
        if (alivePJ) {
            if (this.isAlive) {

                this.checkSprite()

                push()
                this.ownTranslation()
                this.angle = this.calculateAngle(xPJ, yPJ)
                rotate(this.angle)
                image(this.actualSprite, -this.middleX, -this.middleY)
                this.updatePosition(this.angle)
                pop()
            } else {
                push() 
                this.ownTranslation()
                rotate(this.angle)
                image(this.actualSprite, -this.middleX, -this.middleY)
                pop()
            }
        } else {
            push() 
            this.ownTranslation()
            rotate(this.angle)
            image(this.actualSprite, -this.middleX, -this.middleY)
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
        this.actualSprite = this.deathSprite
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

    checkSprite() {
        let mod = (millis() % 1000)

        if (mod < 200) {
            this.actualSprite = this.sprites[0]
        } else if (mod < 400) {
            this.actualSprite = this.sprites[1]
        } else if (mod < 600) {
            this.actualSprite = this.sprites[2]
        } else if (mod < 800) {
            this.actualSprite = this.sprites[3]
        } else {
            this.actualSprite = this.sprites[4]
        }
    }

}