class enemyKnife{ 

    constructor(x, y, mill) {
        this.v = 5
        this.x = x 
        this.y = y 
        this.img = loadImage('sprites/enemies/enemyKnife/enemyKnife.png')
        this.vX = 0
        this.vY = 0
        this.middleX = 7
        this.middleY = 11
        this.isSpawned = false
        this.spawnMillis = mill
        this.isAlive = true
        this.angle = 0
        this.deathSprite = loadImage('sprites/enemies/enemyKnife/enemyKnifeDead.png')
    }

    dibujar(xPJ, yPJ, alivePJ) {
        if (alivePJ) {
            if (this.isAlive) {
                push()
                this.ownTranslation()
                this.angle = this.calculateAngle(xPJ, yPJ)
                rotate(this.angle)
                image(this.img , -this.middleX, -this.middleY)
                this.updatePosition(this.angle)
                pop()
            } else {
                push() 
                this.ownTranslation()
                rotate(this.angle - PI)
                image(this.deathSprite, -this.middleX, -this.middleY)
                pop()
            }
        } else {
            push() 
            this.ownTranslation()
            rotate(this.angle - PI)
            image(this.img , -this.middleX, -this.middleY)
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