class Pj{

    constructor(){
        // stats
        this.v = 4
        this.velX = 0
        this.velY = 0
        this.x = 400
        this.y = 400
        this.width = 32
        this.height = 20
        this.middleX = 16 
        this.middleY = 10
        this.isAlive = true 
        this.deathAngle = 0

        // Ammo
        this.ammo = 30
        this.maxAmmo = 30
        this.lastShot = 0

        // sprites
        this.sprites = [loadImage('sprites/pj/pjM16.png'),
            loadImage('sprites/pj/pjM16Shot.png'),
            loadImage('sprites/pj/pjDeath01.png')]
    }

    right(){
        if ((this.x + this.width) < 800) {
            this.x += this.v
        }
    }
    
    left(){
        if (this.x > 0) {
            this.x -= this.v
        }
    }

    up() {
        if (this.y > 0){
            this.y -= this.v
        }
    }


    down() {
        if ((this.y + this.height) < 800)
        this.y += this.v
    }

    dibujar(){ 
        if (this.isAlive) {
            if (millis() - this.lastShot < 50) {
                image(this.sprites[1], -8, -10)
            } else {
                image(this.sprites[0], -8, -10)
            }
        } else {
            push()
            rotate(PI)
            image(this.sprites[2], -8, -10)
            pop()
        }
    } 

    printLegs() {
        
    }

    getX() {
        return (this.x + this.width)
    }

    getY() {
        return (this.y + this.height)
    }

    shoot(mill) {
        this.ammo -= 1
        this.lastShot = mill
    }

    reload(mill) {
        if (this.lastShot + 1250 < mill) {
            this.ammo = this.maxAmmo
        }
    }

    die() {
        this.isAlive = false 
    }
} 