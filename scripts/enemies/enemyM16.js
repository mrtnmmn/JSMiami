class enemyM16 {

    constructor(x, y) {
        this.v = 4 
        this.x = x
        this.y = y
        this.vX = 0
        this.vY = 0
        this.isAlive = true 
        this.angle = 0 
        this.inRange = false
        this.middleX = 15
        this.middleY = 15 

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
        this.deathSprite = this.deathArray[this.calculateRandomMN((this.deathArray.length-1), 0)]

        this.img
        this.deathSprite 
        this.actualSprite = loadImage('sprites/enemies/enemyM16/sprAssassinUzi.png')
    }

    dibujar(xPJ, yPJ, alivePJ) {
        if (alivePJ) {
            if (this.isAlive) {

                this.inRange = this.isInRange(xPJ, yPJ)

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

    isInRange(Pjx, Pjy) {
        let inRange = false
        
        if (this.x > 50 && this.x < 750 && this.y > 50 && this.y < 750) {
            inRange = collideCircleCircle(this.x, this.y, 30, Pjx, Pjy, 550)
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

    disparar() {

    }

}