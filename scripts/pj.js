class Pj{

    constructor(){
        this.v = 4
        this.sprite = loadImage('sprites/pjM16.png')
        this.spriteShot = loadImage('sprites/pjM16Shot.png')
        this.velX = 0
        this.velY = 0
        this.x = 400
        this.y = 400
        this.width = 32
        this.height = 20
        this.middleX = 16 
        this.middleY = 10
        this.isAlive = true 

        // Ammo
        this.ammo = 30
        this.maxAmmo = 30
        this.lastShot = 0
    }

    right(){
        if ((this.x + this.width) < 750) {
            this.x += this.v
        }
    }
    
    left(){
        if (this.x > 50) {
            this.x -= this.v
        }
    }

    up() {
        if (this.y > 50){
            this.y -= this.v
        }
    }

    down() {
        if ((this.y + this.height) < 750)
        this.y += this.v
    }

    dibujar(){
        if (millis() - this.lastShot < 50) {
            image(this.spriteShot,-8, -10)
        } else {
            image(this.sprite,-8, -10)
        }
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
        console.log(this.ammo)
    }

    reload(mill) {
        if (this.lastShot + 1500 < mill) {
            this.ammo = this.maxAmmo
        }
    }
} 