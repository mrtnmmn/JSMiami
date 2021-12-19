class enemyM16 {

    constructor(x, y) {
        this.v = 3
        this.x = x
        this.y = y
        this.vX = 0
        this.vY = 0
        this.isAlive = true 
        this.angle = 0 
        this.inRange = false
        this.middleX = 9
        this.middleY = 6 
        this.lastBullet = 0

        this.sprites = [loadImage('sprites/enemies/enemyM16/attack/attackStage01.png'),
            loadImage('sprites/enemies/enemyM16/attack/attackStage02.png')]

        this.deathArray = [loadImage('sprites/enemies/normalEnemiesDeath/death01.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death02.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death03.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death04.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death05.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death06.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death07.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death08.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death09.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death10.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death11.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death12.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death13.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death14.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death15.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death16.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death17.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death18.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death19.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death20.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death21.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death22.png'),
            loadImage('sprites/enemies/normalEnemiesDeath/death23.png')]

        this.walk = [loadImage('sprites/enemies/normalEnemiesWalk/stage01.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage02.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage03.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage04.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage05.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage06.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage07.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage08.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage09.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage10.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage11.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage12.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage13.png'),
            loadImage('sprites/enemies/normalEnemiesWalk/stage14.png')]

        this.deathSprite = this.deathArray[this.calculateRandomMN((this.deathArray.length-1), 0)]

        this.img
        this.deathSprite 
        this.actualSprite = this.sprites[0]
        this.currentWalkSprite = this.walk[0]

    }

    dibujar(xPJ, yPJ, alivePJ) {
        if (alivePJ) {
            if (this.isAlive) {

                this.inRange = this.isInRangeWalk(xPJ, yPJ)
                this.checkSprite()

                if (this.inRange) {
                    push()
                    this.ownTranslation()
                    this.angle = this.calculateAngle(xPJ, yPJ)
                    rotate(this.angle)
                    image(this.actualSprite , -this.middleX, -this.middleY)
                    pop()
                } else {
                    push()
                    this.ownTranslation()
                    this.angle = this.calculateAngle(xPJ, yPJ)
                    rotate(this.angle)

                    this.checkSpriteWalk()

                    push()
                    imageMode(CENTER)
                    image(this.currentWalkSprite, +3, +2)
                    pop()

                    image(this.actualSprite , -this.middleX, -this.middleY)
                    this.updatePosition(this.angle)
                    pop()
                }
                

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

    checkSprite() {
        if (millis() - this.lastBullet < 100) {
            this.actualSprite = this.sprites[1]
        } else {
            this.actualSprite = this.sprites[0]
        }
    }

    isInRange(Pjx, Pjy) {
        let inRange = false
        
        if (this.x > 50 && this.x < 750 && this.y > 50 && this.y < 750) {
            inRange = collideCircleCircle(this.x, this.y, 30, Pjx, Pjy, 550)
        }

        return inRange
    }

    isInRangeWalk(Pjx, Pjy) {
        let inRange = false
        
        if (this.x > 50 && this.x < 750 && this.y > 50 && this.y < 750) {
            inRange = collideCircleCircle(this.x, this.y, 30, Pjx, Pjy, 500)
        }

        return inRange
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
        this.actualSprite = this.deathSprite
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