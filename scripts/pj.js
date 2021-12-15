class Pj{

    constructor(){
        // stats
        this.v = 4
        this.vD = this.v * Math.cos(PI / 4)
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
        this.reloadTime = 1250
        this.currentGun = 0

        // Ammo
        this.ammo = 30
        this.maxAmmo = 30
        this.lastShot = 0

        // sprites
        this.sprites = [loadImage('sprites/pj/pjM16.png'),
            loadImage('sprites/pj/pjM16Shot.png'),
            loadImage('sprites/pj/pistol/pjPistol.png'),
            loadImage('sprites/pj/pistol/pjPistolShot.png'),
            loadImage('sprites/pj/shotgun/pjShotgun.png'),
            loadImage('sprites/pj/shotgun/pjShotgunShot.png'),
            loadImage('sprites/pj/pjDeath01.png')]

        this.maskSprites = [loadImage('sprites/masks/richard.png'),
            loadImage('sprites/masks/peter.png'),
            loadImage('sprites/masks/rick.png'),
            loadImage('sprites/masks/brandon.png')]

        this.currentMask = this.maskSprites[0]
        this.currentSprite
        this.currentSpriteShot
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

    upRight() {
        if (this.y > 0 && this.x < 800){
            this.y -= this.vD
            this.x += this.vD
        } else if (this.y < 0 && this.x < 800) {
            this.x += this.vD
        } else if (this.y > 0 && this.x > 800) {
            this.y -= this.vD
        }
    }

    upLeft() {
        if (this.y > 0 && this.x > 0){
            this.y -= this.vD
            this.x -= this.vD
        } else if (this.y < 0 && this.x > 0) {
            this.x -= this.vD
        } else if (this.y > 0 && this.x < 0) {
            this.y -= this.vD
        }  
    }


    down() {
        if ((this.y + this.height) < 800)
        this.y += this.v
    }

    downRight() {
        if (this.y < 800 && this.x < 800){
            this.y += this.vD
            this.x += this.vD
        } else if (this.y > 800 && this.x < 800) {
            this.x += this.vD
        } else if (this.y < 800 && this.x > 800) {
            this.y += this.vD
        }
    }

    downLeft() {
        if (this.y < 800 && this.x > 0){
            this.y += this.vD
            this.x -= this.vD
        } else if (this.y > 800 && this.x > 0) {
            this.x -= this.vD
        } else if (this.y < 800 && this.x < 0) {
            this.y += this.vD
        }  
    }

    dibujar(){ 

        console.log(this.ammo)

        if (this.isAlive) {
            if (millis() - this.lastShot < 50 && this.ammo != 0) {
                image(this.currentSpriteShot, -8, -10)
                image(this.currentMask, -7, -11)
            } else {
                image(this.currentSprite, -8, -10)
                image(this.currentMask, -8, -11)
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

        if(this.lastShot + this.reloadTime < mill) {
            this.ammo = this.maxAmmo
        }
    }

    die() {
        this.isAlive = false 
    }
} 