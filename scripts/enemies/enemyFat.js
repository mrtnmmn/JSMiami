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
            
        this.walk = [loadImage('sprites/enemies/enemyFat/walk/stage01.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage02.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage03.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage04.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage05.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage06.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage07.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage08.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage09.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage10.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage11.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage12.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage13.png'),
            loadImage('sprites/enemies/enemyFat/walk/stage14.png')]

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
        this.currentWalkSprite

    }

    dibujar(xPJ, yPJ, alivePJ) {
        if (alivePJ) {
            if (this.isAlive) {

                this.checkSpriteWalk()

                push()
                this.ownTranslation()
                this.angle = this.calculateAngle(xPJ, yPJ)
                rotate(this.angle)

                push()
                imageMode(CENTER)
                image(this.currentWalkSprite, 0, +4)
                pop()

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

    checkSpriteWalk() {
        let mod = (millis() % 1000)

        if (mod < (71)) {
            this.currentWalkSprite = this.walk[0]
        } else if (mod < 71*2) {
            this.currentWalkSprite = this.walk[1]
        } else if (mod < 71*3) {
            this.currentWalkSprite = this.walk[2]
        } else if (mod < 71*4) {
            this.currentWalkSprite = this.walk[3]
        } else if (mod < 71*5) {
            this.currentWalkSprite = this.walk[4]
        } else if (mod < 71*6) {
            this.currentWalkSprite = this.walk[5]
        } else if (mod < 71*7) {
            this.currentWalkSprite = this.walk[6]
        } else if (mod < 71*8) {
            this.currentWalkSprite = this.walk[7]
        } else if (mod < 71*9) {
            this.currentWalkSprite = this.walk[8]
        } else if (mod < 71*10) {
            this.currentWalkSprite = this.walk[9]
        } else if (mod < 71*11) {
            this.currentWalkSprite = this.walk[10]
        } else if (mod < 71*12) {
            this.currentWalkSprite = this.walk[11]
        } else if (mod < 71*13) {
            this.currentWalkSprite = this.walk[12]
        } else {
            this.currentWalkSprite = this.walk[13]
        }
    }
}