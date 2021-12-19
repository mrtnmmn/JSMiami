class enemyFat{ 

    constructor(x, y, mill) {
        this.v = 4
        this.x = x 
        this.y = y 
        this.img = loadImage('sprites/enemies/enemyFat/enemyFat.png')
        this.deathArray =[loadImage('sprites/enemies/enemyFat/enemyFatDead/deathFat01.png'),
            loadImage('sprites/enemies/enemyFat/enemyFatDead/deathFat02.png'),
            loadImage('sprites/enemies/enemyFat/enemyFatDead/deathFat03.png'),
            loadImage('sprites/enemies/enemyFat/enemyFatDead/deathFat04.png')] 
        this.vX = 0
        this.vY = 0
        this.middleX = 7
        this.middleY = 7
        this.isSpawned = false
        this.spawnMillis = mill
        this.tank = true 
        this.isAlive = true
        this.angle = 0
        this.deathSprite = this.deathArray[this.calculateRandomMN((this.deathArray.length-1), 0)]
        this.actualSprite = this.img
    }

    dibujar(xPJ, yPJ, alivePJ) {
        if (alivePJ) {
            if (this.isAlive) {
                push()
                this.ownTranslation()
                this.angle = this.calculateAngle(xPJ, yPJ)
                rotate(this.angle)
                image(this.actualSprite , -this.middleX, -this.middleY)
                this.updatePosition(this.angle)
                pop()
            } else {
                push() 
                this.ownTranslation()
                rotate(this.angle - PI)
                image(this.actualSprite, -this.middleX, -this.middleY)
                pop()
            }
        } else {
            if (this.isAlive) {
                push()
                this.ownTranslation()
                this.angle = this.calculateAngle(xPJ, yPJ)
                rotate(this.angle)
                image(this.actualSprite , -this.middleX, -this.middleY)
                pop()
            } else {
                push() 
                this.ownTranslation()
                rotate(this.angle - PI)
                image(this.actualSprite, -this.middleX, -this.middleY)
                pop()
            }
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

        if (this.tank) {
            this.tank = false 
        } else {
            this.isAlive = false
            this.angle = this.calculateAngle(x, y)
            this.actualSprite = this.deathSprite
        }
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