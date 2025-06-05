
class Sprite {
    constructor() { }

    update() { }

    draw() { }
}
class Score extends Sprite {
    constructor() {
        super();
        this.score = 0;
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("Score: " + this.score, 10, 35);
    }

    update() { }
}
class Lives extends Sprite {
    constructor(game) {
        super();
        this.lives = 3;
        this.game = game;
        this.loseSound = new Audio("./sound/Lose.m4a");
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("Lives: " + this.lives, 1080, 35);
    }

    update() {
        if (this.lives <= 0) {
            this.loseSound.play();
            this.game.scenarioCase = 4;
        }
    }
}
class Guide extends Sprite {

    constructor(centreX, centreY, Hero, Level, game) {
        super();
        this.guideImg = new Image();
        this.guideImg.src = "guide.png";
        this.chatImg = new Image();
        this.chatImg.src = "chat1.png";
        this.centreX = centreX;
        this.centreY = centreY;
        this.width = 56;
        this.height = 80;
        this.chatWidth = 344;
        this.chatHeight = 200;
        this.Counter = 0;
        this.Hero = Hero;
        this.Level = Level;
        this.game = game;
        this.chat = false;
    }
    draw(ctx) {

        ctx.drawImage(this.guideImg, this.centreX, this.centreY, this.width, this.height);
        if (this.chat) {
            ctx.drawImage(this.chatImg, this.centreX - 70, this.centreY - this.height - 125, this.chatWidth, this.chatHeight);
        }

    }
    update() {
        if (this.Hero.centreX >= this.centreX - 20) {
            this.chat = true;
        }
        if (this.chat) {
            this.Counter++;
            if (this.Counter > 500 && this.Counter < 1000) {
                this.chatImg.src = "chat2.png";
            }
            if (this.Counter > 1000 && this.Counter < 1500) {
                this.chatImg.src = "chat3.png";
            }
            if (this.Counter > 1500 && this.Counter < 2000) {
                this.chatImg.src = "chat4.png";
            }
            if (this.Counter > 2000 && this.Counter < 2500) {
                this.chatImg.src = "chat5.png";
            }
            if (this.Counter > 2500) {
                this.chat = false;
            }

            if (this.Hero.moveBckgLeft) {
                this.centreX += this.Hero.speed;
            }
            if (this.Hero.moveBckgRight) {
                this.centreX -= this.Hero.speed;
            }
        }

    }

}

class FireGuide extends Sprite {

    constructor(centreX, centreY, Hero, Level, game) {
        super();
        this.guideImg = new Image();
        this.guideImg.src = "guide.png";
        this.chatImg = new Image();
        this.chatImg.src = "chat101.png";
        this.centreX = centreX;
        this.centreY = centreY;
        this.width = 56;
        this.height = 80;
        this.chatWidth = 344;
        this.chatHeight = 200;
        this.Counter = 0;
        this.Hero = Hero;
        this.Level = Level;
        this.game = game;
        this.chat = false;
    }
    draw(ctx) {

        ctx.drawImage(this.guideImg, this.centreX, this.centreY, this.width, this.height);
        if (this.chat) {
            ctx.drawImage(this.chatImg, this.centreX - 70, this.centreY - this.height - 125, this.chatWidth, this.chatHeight);
        }

    }
    update() {
        if (this.Hero.centreX >= this.centreX - 20) {
            this.chat = true;
        }
        if (this.chat) {
            this.Counter++;
            if (this.Counter > 500 && this.Counter < 1000) {
                this.chatImg.src = "chat102.png";
            }
            if (this.Counter > 1000) {
                this.chat = false;
            }
        }
        if (this.Hero.moveBckgLeft) {
            this.centreX += this.Hero.speed;
        }
        if (this.Hero.moveBckgRight) {
            this.centreX -= this.Hero.speed;
        }



    }

}

class Queen extends Sprite {
    constructor(centreX, centreY, hero, Level, game) {
        super();
        this.queenImg = new Image();
        this.queenImg.src = "queen.png";
        this.cageImg = new Image();
        this.cageImg.src = "cage.png";
        this.centreX = centreX;
        this.centreY = centreY;
        this.width = 45;
        this.height = 80;
        this.cageWidth = 80;
        this.cageHeight = 120;
        this.Level = Level;
        this.isCagged = true;
        this.Hero = hero;
        this.counter = 0;
        this.game = game;
    }
    draw(ctx) {

        ctx.drawImage(this.queenImg, this.centreX, this.centreY, this.width, this.height);
        if (this.isCagged) {
            ctx.drawImage(this.cageImg, this.centreX - 20, this.centreY - 40, this.cageWidth, this.cageHeight);
        }

    }
    update() {
        if (this.Hero.moveBckgLeft) {
            this.centreX += this.Hero.speed;
        }
        if (this.Hero.moveBckgRight) {
            this.centreX -= this.Hero.speed;
        }
        if (!this.isCagged) {
            this.counter++;
        }
        if (this.counter == 180) {
            this.game.scenarioCase = 5;
            this.game.changeAudio=true;
        }

    }

}

class Monster extends Sprite {

    constructor(centreX, centreY, Hero, lives, score, Level, platform, game) {
        super();
        this.monstImg = new Image();
        this.monstImg.src = "monster.png";
        this.centreX = centreX;
        this.centreY = centreY;
        this.frameIndex = 0;
        this.numFrames = 3;
        this.Counter = 0;
        this.frameWidth = 124 / this.numFrames;
        this.frameHeight = 45;
        this.currFrameWidth = this.frameIndex * this.frameWidth;
        this.Hero = Hero;
        this.Level = Level;
        this.movement = 1;
        this.plat = platform;
        this.speed = 2;
        this.move = true;
        this.score = score;
        this.dY = 0;
        this.gravity = 1;
        this.monsterDeath = new Audio("./sound/monsterDeath.m4a");
        this.game = game;
    }

    draw(ctx) {
        ctx.drawImage(
            this.monstImg,
            this.currFrameWidth,
            0,
            this.frameWidth,
            this.frameHeight,
            this.centreX - this.frameWidth / 2,
            this.centreY - this.frameHeight / 2,
            this.frameWidth,
            this.frameHeight
        );
    }

    update() {
        if (this.move) {
            if (this.Counter % 10 == 0) {
                this.frameIndex++;
                if (this.frameIndex >= this.numFrames) {
                    this.frameIndex = 0;
                }
                this.currFrameWidth = this.frameIndex * this.frameWidth;
            }

            this.centreX += this.speed * this.movement;
            this.plat.monsterKilled = false;
        }
        else {
            this.centreY += this.dY;
            this.dY += this.gravity;
            let monstersOnPlatform = this.Level.sprites.filter(
                (sprite) => sprite instanceof Monster && sprite.plat == this.plat && sprite.move
            );

            if (monstersOnPlatform.length == 0) {
                // Update monsterkilled if no more monsters on the platform
                this.plat.monsterKilled = true;
            }
            if (this.centreY - this.frameHeight / 2 >= this.game.canvas.height) {
                this.Level.sprites.splice(this.Level.sprites.indexOf(this), 1)
            }

        }
        if (this.centreX + this.frameWidth / 2 >= this.plat.x + this.plat.width ){
            this.movement = -1;
        }
        if( this.centreX - this.frameWidth / 2  <= this.plat.x) {
            this.movement = 1;}

        this.Counter++;
        if (this.Hero.moveBckgLeft) {
            this.centreX += this.Hero.speed;
        }
        if (this.Hero.moveBckgRight) {
            this.centreX -= this.Hero.speed;
        }

        if (
            this.Hero.centreX + this.Hero.frameWidth / 2 >= this.centreX - this.frameWidth / 2 &&
            this.Hero.centreX - this.Hero.frameWidth / 2 <= this.centreX + this.frameWidth / 2 &&
            this.Hero.centreY + this.Hero.frameHeight / 2 >= this.centreY - this.frameHeight / 2 &&
            this.Hero.centreY - this.Hero.frameHeight / 2 <= this.centreY - this.frameHeight / 2 - this.Hero.frameHeight / 2
            && this.Hero.isFalling && this.move
        ) {
            this.monsterDeath.pause();
            this.monsterDeath.currentTime = 0.1;
            this.monsterDeath.play();
            this.move = false;
            this.score.score += 25;
        }
        if (this.Hero.centreX + this.Hero.frameWidth / 2 >= this.centreX - this.frameWidth / 2 &&
            this.Hero.centreX - this.Hero.frameWidth / 2 <= this.centreX + this.frameWidth / 2 &&
            this.Hero.centreY + this.Hero.frameHeight / 2 >= this.centreY + this.frameHeight / 2 &&
            this.Hero.centreY - this.Hero.frameHeight / 2 >= this.centreY - this.frameHeight - 20 &&
            this.Hero.centreY - this.Hero.frameHeight / 2 <= this.centreY + this.frameHeight / 2 &&
            !this.Hero.teleport && this.move) {
            this.Hero.teleport = true;
        }
    }
}
class HeroFire extends Sprite {
    constructor(x, y, HorzDir, speed, level, src, hero, game) {
        super();
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.fbImg = new Image();
        this.fbImg.src = src;
        this.frameWidth = 25;
        this.frameHeight = 25;
        this.level = level;
        this.HorzDir = HorzDir;
        this.Counter = 0;
        this.numFrames = 4;
        this.frameIndex = 0;
        this.Hero = hero;
        this.game = game;
        this.boss = this.level.sprites.find(sprite => sprite instanceof Boss);
    }
    draw(ctx) {
        ctx.drawImage(
            this.fbImg,
            this.currFrameWidth,
            0,
            this.frameWidth,
            this.frameHeight,
            this.x - this.frameWidth / 2,
            this.y - this.frameHeight / 2,
            this.frameWidth,
            this.frameHeight
        );
    }
    update() {
        this.boss = this.level.sprites.find(sprite => sprite instanceof Boss);
       
        if (this.Counter % 7 == 0) {
            this.frameIndex++;
            if (this.frameIndex >= this.numFrames) {
                this.frameIndex = 0;
            }
            this.currFrameWidth = this.frameIndex * this.frameWidth;
        }

        this.x += this.speed * this.HorzDir;
        
        if (this.x + this.frameWidth / 2 >= this.boss.centreX - this.boss.frameWidth / 2 &&
            this.x - this.frameWidth / 2 <= this.boss.centreX + this.boss.frameWidth / 2 &&
            this.y + this.frameHeight / 2 >= this.boss.centreY - this.boss.frameHeight / 2 &&
            this.y - this.frameHeight / 2 <= this.boss.centreY + this.boss.frameHeight / 2 && this.boss.life > 0
        ) {
            this.boss.life--;
            this.boss.movement = (this.HorzDir == 1) ? -1 : 1;
            this.level.sprites.splice(this.level.sprites.indexOf(this), 1);

        }

        if (this.HorzDir == -1 && this.y <= 0) {
            this.level.sprites.splice(this.level.sprites.indexOf(this), 1);
        }

        if (this.HorzDir == 1 && this.y >= this.game.canvas.height) {
            this.level.sprites.splice(this.level.sprites.indexOf(this), 1);
        }

        if (this.Hero.moveBckgLeft) {
            this.centreX += this.Hero.speed;
        }
        if (this.Hero.moveBckgRight) {
            this.centreX -= this.Hero.speed;
        }
        this.Counter++;
    }
}
class FireBall extends Sprite {
    constructor(x, y, HorzDir, Vertdir, speed, Level, src, hero, game) {
        super();
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.fbImg = new Image();
        this.fbImg.src = src;
        this.frameWidth = 32;
        this.frameHeight = 20;
        this.Level = Level;
        this.HorzDir = HorzDir;
        this.Vertdir = Vertdir;
        this.Counter = 0;
        this.numFrames = 2;
        this.frameIndex = 0;
        this.Hero = hero;
        this.game = game;
    }
    draw(ctx) {
        ctx.drawImage(
            this.fbImg,
            this.currFrameWidth,
            0,
            this.frameWidth,
            this.frameHeight,
            this.x - this.frameWidth / 2,
            this.y - this.frameHeight / 2,
            this.frameWidth,
            this.frameHeight
        );
    }
    update() {
        if (this.Counter % 10 == 0) {
            this.frameIndex++;
            if (this.frameIndex >= this.numFrames) {
                this.frameIndex = 0;
            }
            this.currFrameWidth = this.frameIndex * this.frameWidth;
        }

        this.x += this.speed * this.HorzDir;
        this.y += this.speed * this.Vertdir;

        if (this.y + this.frameHeight / 2 <= 0 ||
            this.y - this.frameHeight / 2 >= this.game.canvas.height ||
            this.x + this.frameWidth / 2 <= 0 ||
            this.x - this.frameWidth / 2 >= this.game.canvas.width) {
            this.Level.sprites.splice(this.Level.sprites.indexOf(this), 1);
        }
        if (
            this.Hero.centreX + this.Hero.frameWidth / 2 >= this.x - this.frameWidth / 2 &&
            this.Hero.centreX - this.Hero.frameWidth / 2 <= this.x + this.frameWidth / 2 &&
            this.Hero.centreY + this.Hero.frameHeight / 2 >= this.y - this.frameHeight / 2 &&
            this.Hero.centreY - this.Hero.frameHeight / 2 <= this.y + this.frameHeight / 2
        ) {

            this.Hero.lives.lives--;
            this.Level.sprites.splice(this.Level.sprites.indexOf(this), 1);
        }
        this.Counter++;
       
        if (this.Hero.moveBckgLeft&& this.HorzDir==1) {
            // FireBall moves left when hero moves left
            this.x += (this.Hero.speed  ) * this.HorzDir;
        }
        if (this.Hero.moveBckgLeft&& this.HorzDir==-1) {
            // FireBall moves left when hero moves left
            this.x -= (this.Hero.speed - this.speed) * this.HorzDir;
        }
    
        if (this.Hero.moveBckgRight && this.HorzDir==-1) {
            // FireBall moves left when hero moves right
            this.x += (this.Hero.speed ) * this.HorzDir;
        }
        if (this.Hero.moveBckgRight && this.HorzDir==1) {
            // FireBall moves left when hero moves right
            this.x -= (this.Hero.speed - this.speed) * this.HorzDir;
        }
     
    }
}

class Lava extends Sprite {
    constructor(centreX, centreY, Hero, Level, game, jumpHeight) {
        super();
        this.BossImg = new Image();
        this.BossImg.src = "Lava.png";
        this.centreX = centreX;
        this.centreY = centreY;
        this.originalY = centreY;
        this.frameIndex = 0;
        this.Counter = 0;
        this.frameWidth = 50;
        this.frameHeight = 50;
        this.currFrameWidth = this.frameIndex * this.frameWidth;
        this.Hero = Hero;
        this.Level = Level;
        this.monsterDeath = new Audio("./sound/monsterDeath.m4a");
        this.counter = 0;
        this.startCounter = true;
        this.dY = 0;
        this.gravity = 1;
        this.stopFalling = true;
        this.game = game;
        this.jumpHeight = jumpHeight;
    }
    draw(ctx) {
        ctx.drawImage(
            this.BossImg,
            this.currFrameWidth,
            0,
            this.frameWidth,
            this.frameHeight,
            this.centreX - this.frameWidth / 2,
            this.centreY - this.frameHeight / 2,
            this.frameWidth,
            this.frameHeight
        );
    }
    update() {

        if (this.counter === 150) {
            this.dY = -this.jumpHeight;
            this.stopFalling = false;
        }

        this.centreY += this.dY;


        if (this.centreY > this.originalY) {
            this.centreY = this.originalY;
            this.dY = 0;
            this.stopFalling = true;
            this.counter = 0;
        }

        if (this.dY < 0 || !this.stopFalling) {
            this.dY += this.gravity;
        }

        if (this.dY > 0) {
            this.frameIndex = 1;
            this.currFrameWidth = this.frameIndex * this.frameWidth;
        } else {
            this.frameIndex = 0;
            this.currFrameWidth = this.frameIndex * this.frameWidth;
        }
        if (this.Hero.moveBckgLeft) {
            this.centreX += this.Hero.speed;
        }
        if (this.Hero.moveBckgRight) {
            this.centreX -= this.Hero.speed;
        }
        if (
            this.Hero.centreX + this.Hero.frameWidth / 2 >= this.centreX - this.frameWidth / 2 &&
            this.Hero.centreX - this.Hero.frameWidth / 2 <= this.centreX + this.frameWidth / 2 &&
            this.Hero.centreY + this.Hero.frameHeight / 2 >= this.centreY - this.frameHeight / 2 &&
            this.Hero.centreY - this.Hero.frameHeight / 2 <= this.centreY + this.frameHeight / 2
        ) {
            this.Hero.teleport = true;
            this.isFalling = false;
            this.isJumping=false;
        }

        this.counter++;

    }
}
class Boss extends Sprite {
    constructor(centreX, centreY, Hero, Level, platform, game, queen) {
        super();
        this.BossImg = new Image();
        this.BossImg.src = "BossRight.png";
        this.centreX = centreX;
        this.centreY = centreY;
        this.frameIndex = 0;
        this.numFrames = 6;
        this.Counter = 0;
        this.frameWidth = 858 / 6;
        this.frameHeight = 120;
        this.currFrameWidth = this.frameIndex * this.frameWidth;
        this.Hero = Hero;
        this.Level = Level;
        this.movement = 1;
        this.plat = platform;
        this.speed = 0.5;
        this.move = true;
        this.animate = true;
        this.monsterDeath = new Audio("./sound/monsterDeath.m4a");
        this.addCounter = 1;
        this.raged = false;
        this.life = 10;
        this.fireballSpeed = 2;
        this.direction = "right";
        this.shoot = true;
        this.heroOff = true;
        this.game = game;
        this.queen = queen;
    }
    draw(ctx) {
        ctx.drawImage(
            this.BossImg,
            this.currFrameWidth,
            0,
            this.frameWidth,
            this.frameHeight,
            this.centreX - this.frameWidth / 2,
            this.centreY - this.frameHeight / 2,
            this.frameWidth,
            this.frameHeight
        );
    }
    update() {

        if (this.animate) {

            if (this.Counter % 30 == 0) {

                this.frameIndex++;
                if (this.frameIndex >= this.numFrames) {
                    this.frameIndex = 0;
                }
                this.currFrameWidth = this.frameIndex * this.frameWidth;
            }
            if (this.move) {
                this.centreX += this.speed * this.movement;
            }
            if (this.centreX > 0 && this.centreX < this.game.canvas.width) {
                if (this.frameIndex == 5 && this.shoot) {

                    if (this.direction == "left") {
                        let fireball1 = new FireBall(this.centreX - this.frameWidth / 2, this.centreY - 20, -1, -0.25, this.fireballSpeed, this.Level, "fireBallLeft.png", this.Hero, this.game);
                        this.Level.sprites.push(fireball1);
                        let fireball2 = new FireBall(this.centreX - this.frameWidth / 2, this.centreY, -1, 0, this.fireballSpeed, this.Level, "fireBallLeft.png", this.Hero, this.game);
                        this.Level.sprites.push(fireball2);
                        let fireball3 = new FireBall(this.centreX - this.frameWidth / 2, this.centreY + 20, -1, 0.25, this.fireballSpeed, this.Level, "fireBallLeft.png", this.Hero, this.game);
                        this.Level.sprites.push(fireball3);
                        this.shoot = false;
                        this.move = false;
                    }
                    else {
                        if (this.direction == "right") {
                            let fireball1 = new FireBall(this.centreX + this.frameWidth / 2, this.centreY - 20, 1, -0.25, this.fireballSpeed, this.Level, "fireBallRight.png", this.Hero, this.game);
                            this.Level.sprites.push(fireball1);
                            let fireball2 = new FireBall(this.centreX + this.frameWidth / 2, this.centreY, 1, 0, this.fireballSpeed, this.Level, "fireBallRight.png", this.Hero, this.game);
                            this.Level.sprites.push(fireball2);
                            let fireball3 = new FireBall(this.centreX + this.frameWidth / 2, this.centreY + 20, 1, 0.25, this.fireballSpeed, this.Level, "fireBallRight.png", this.Hero, this.game);
                            this.Level.sprites.push(fireball3);
                            this.shoot = false;
                            this.move = false;
                        }
                    }
                }
                if (this.frameIndex != 5) {
                    this.shoot = true;
                    this.move = true;
                }


            }
        }
        if (this.centreX + this.frameWidth / 2 >= this.plat.x + this.plat.width){
            this.movement = -1;


        }
        if(this.centreX - this.frameWidth / 2 <= this.plat.x){
            this.movement = 1;
        }
        if (this.movement == -1) {
            this.direction = "left";
            if (!this.raged) {
                this.BossImg.src = "BossLeft.png";
            } else {
                if (this.raged) {
                    this.BossImg.src = "BossRagedLeft.png";
                }
            }
        }
        if (this.movement == 1) {
            this.direction = "right";
            if (!this.raged) {
                this.BossImg.src = "BossRight.png";
            }
            else {
                if (this.raged) {
                    this.BossImg.src = "BossRagedRight.png";
                }
            }
        }

        if (
            this.Hero.centreX + this.Hero.frameWidth / 2 >= this.centreX - this.frameWidth / 2 &&
            this.Hero.centreX - this.Hero.frameWidth / 2 <= this.centreX + this.frameWidth / 2 &&
            this.Hero.centreY + this.Hero.frameHeight / 2 <= this.centreY + this.frameHeight / 2 &&
            this.Hero.centreY - this.Hero.frameHeight / 2 >= this.centreY - this.frameHeight / 2
            && this.animate && this.heroOff) {
            this.Hero.bounce = true;
            this.Hero.lives.lives--;
            this.heroOff = false;
        }
        if (!this.heroOff) {
            if (
                this.Hero.centreX + this.Hero.frameWidth / 2 < this.centreX - this.frameWidth / 2 ||
                this.Hero.centreX - this.Hero.frameWidth / 2 > this.centreX + this.frameWidth / 2 ||
                this.Hero.centreY + this.Hero.frameHeight / 2 > this.centreY + this.frameHeight / 2 ||
                this.Hero.centreY - this.Hero.frameHeight / 2 < this.centreY - this.frameHeight / 2
                && this.animate) {
                this.heroOff = true;
            }
        }
        if (this.life == 9 && !this.raged) {
            this.speed *= 2;
            this.fireballSpeed *= 2;
            this.addCounter = 2;
            this.raged = true;
            this.Counter = 0;

        }
        if (this.life <= 0 ) {
            //create crown

            this.BossImg.src = "BossDead.png";
            this.move = false
            this.animate = false;
            this.frameIndex = 0;
            this.currFrameWidth = this.frameIndex * this.frameWidth;
            this.queen.isCagged = false;

        }
        if (this.Hero.moveBckgLeft) {
            this.centreX += this.Hero.speed;
        }
        if (this.Hero.moveBckgRight) {
            this.centreX -= this.Hero.speed;
        }

        this.Counter += this.addCounter;
    }

}
class Gate extends Sprite {
    constructor(centreX, centreY, Hero, Score, Level, game) {
        super();
        this.gateImg = new Image();
        this.gateImg.src = "Gate.png";
        this.instruction = new Image();
        this.instruction.src = "gatechat.png";
        this.centreX = centreX;
        this.centreY = centreY;
        this.width = 100;
        this.height = 100;
        this.Hero = Hero;
        this.Score = Score;
        this.Level = Level;
        this.entrySound = new Audio("./sound/win.m4a");
        this.chat = false;
        this.game = game;
    }
    draw(ctx) {
        ctx.drawImage(this.gateImg, this.centreX, this.centreY, this.width, this.height);

        if (this.chat) {
            ctx.drawImage(this.instruction, this.centreX - 70, this.centreY - this.height - 125, 344, 200);
        }
    }
    update() {
        if (
            this.Hero.centreX + this.Hero.frameWidth / 2 > this.centreX - this.width / 2 &&
            this.Hero.centreX - this.Hero.frameWidth / 2 < this.centreX + this.width / 2 &&
            this.Hero.centreY + this.Hero.frameHeight / 2 > this.centreY - this.height / 2 &&
            this.Hero.centreY - this.Hero.frameHeight / 2 < this.centreY + this.height / 2

        ) {
            this.chat = true;
            if ((this.game.keyPressed.includes("f") || this.game.keyPressed.includes("F")) && this.Score.score >= 1000) {
                this.game.scenarioCase++;
                this.game.changeAudio = true;
            }
        }
        if (this.Hero.moveBckgLeft) {
            this.centreX += this.Hero.speed;
        }
        if (this.Hero.moveBckgRight) {
            this.centreX -= this.Hero.speed;
        }



    }
}
class Coin extends Sprite {
    constructor(centreX, centreY, Hero, Score, Level, game) {
        super();
        this.coinImg = new Image();
        this.coinImg.src = "coin2.png";
        this.centreX = centreX;
        this.centreY = centreY;
        this.frameIndex = 0;
        this.numFrames = 6;
        this.Counter = 0;
        this.frameWidth = 270 / this.numFrames;
        this.frameHeight = 38;
        this.currFrameWidth = this.frameIndex * this.frameWidth;
        this.Hero = Hero;
        this.Score = Score;
        this.Level = Level;
        this.coinSound = new Audio("./sound/coinSound.mp3");
        this.game = game;
    }

    draw(ctx) {
        ctx.drawImage(
            this.coinImg,
            this.currFrameWidth,
            0,
            this.frameWidth,
            this.frameHeight,
            this.centreX - this.frameWidth / 2,
            this.centreY - this.frameHeight / 2,
            this.frameWidth,
            this.frameHeight
        );
    }

    update() {
        if (this.Counter % 8 == 0) {
            this.frameIndex++;
            if (this.frameIndex >= this.numFrames) {
                this.frameIndex = 0;
            }
            this.currFrameWidth = this.frameIndex * this.frameWidth;
        }
        this.Counter++;
        if (this.Hero.moveBckgLeft) {
            this.centreX += this.Hero.speed;
        }
        if (this.Hero.moveBckgRight) {
            this.centreX -= this.Hero.speed;
        }
        if (
            this.Hero.centreX + this.Hero.frameWidth / 2 >= this.centreX - this.frameWidth / 2 &&
            this.Hero.centreX - this.Hero.frameWidth / 2 <= this.centreX + this.frameWidth / 2 &&
            this.Hero.centreY + this.Hero.frameHeight / 2 >= this.centreY - this.frameHeight / 2 &&
            this.Hero.centreY - this.Hero.frameHeight / 2 <= this.centreY + this.frameHeight / 2
        ) {
            this.coinSound.pause();
            this.coinSound.currentTime = 0;
            this.coinSound.play();
            this.Level.sprites.splice(this.Level.sprites.indexOf(this), 1)
            this.Score.score += 100;
        }
    }
}

class Background extends Sprite {
    constructor(src, canvas, Hero, game, loc) {
        super();
        this.backgroundImage = new Image();
        this.backgroundImage.src = src;
        this.Hero = Hero;
        this.backgroundSpeed = this.Hero.speed;
        this.backgroundX = 0;
        this.canvas = canvas;
        this.game = game;
        this.audioUpdated = false;


    }

    draw(ctx) {
        ctx.drawImage(this.backgroundImage, this.backgroundX, 0, this.game.canvas.width, this.game.canvas.height);
        ctx.drawImage(this.backgroundImage, this.backgroundX - this.game.canvas.width + 1, 0, this.game.canvas.width, this.game.canvas.height);
        ctx.drawImage(this.backgroundImage, this.backgroundX + this.game.canvas.width - 1, 0, this.game.canvas.width, this.game.canvas.height);
    }

    update() {
        if (this.Hero.moveBckgLeft) {
            this.backgroundX += this.backgroundSpeed / 2;
        }
        else {
            if (this.Hero.moveBckgRight) {
                this.backgroundX -= this.backgroundSpeed / 2;
            }
        }
        if (this.backgroundX >= this.game.canvas.width || this.backgroundX <= (-this.game.canvas.width)) {
            this.backgroundX = 0;
        }

    }

}

class Platform extends Sprite {
    constructor(x, y, Hero, src, width, height, game) {
        super();
        this.platformImage = new Image();
        this.platformImage.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.Hero = Hero;
        this.monsterKilled = true;
        this.game = game;
    }

    draw(ctx) {
        ctx.drawImage(this.platformImage, this.x, this.y, this.width, this.height);
    }

    update() {
        if (
            this.Hero.centreY + this.Hero.frameHeight / 2 <= this.y &&
            this.Hero.centreY + this.Hero.frameHeight / 2 + this.Hero.dY >= this.y &&
            this.Hero.centreX - this.Hero.frameWidth / 2 <= this.x + this.width &&
            this.Hero.centreX + this.Hero.frameWidth / 2 >= this.x
        ) {
            if (this.monsterKilled) {
                this.Hero.currentPlat = this;
            }
        }

        if (this.Hero.moveBckgLeft) {
            this.x += this.Hero.speed;
        }
        if (this.Hero.moveBckgRight) {
            this.x -= this.Hero.speed;
        }

    }
}

class Hero extends Sprite {
    constructor(centreX, centreY, lives, game, level, fire) {
        super();
        this.centreX = centreX;
        this.centreY = centreY;
        this.heroImg = new Image();
        this.heroImg.src = "heroWalkRight.png";
        this.frameIndex = 1;
        this.numFramesX = 4;
        this.Counter = 0;
        this.frameWidth = 55;
        this.frameHeight = 80;
        this.currFrameWidth = this.frameIndex * this.frameWidth;
        this.Level = Level;
        this.isJumping = false;
        this.isFalling = true;
        this.speed = 5;
        this.gravity = 0.75;
        this.dY = 0;
        this.jumpCount = 0;
        this.maxJumpCount = 2;
        this.jumpPressed = false;
        this.moveBckgLeft = false;
        this.moveBckgRight = false;
        this.tracker = 0;
        this.currentPlat;
        this.teleport = false;
        this.lives = lives;
        this.direction = "right";
        this.onPlatform = false;
        this.animate = false;
        this.jumpSound = new Audio("./sound/jump.mp3");
        this.shotFired = false;
        this.bounce = false;
        this.bounceMovement = false;
        this.dX = 0;
        this.friction = 0.2;
        this.cooldown = 0;
        this.fireClaimed = fire;
        this.shootSound = new Audio("./sound/shoot.m4a")
        this.game = game;
        this.level = level;
        
    }
    draw(ctx) {
        ctx.drawImage(
            this.heroImg,
            this.currFrameWidth,
            0,
            this.frameWidth,
            this.frameHeight,
            this.centreX - this.frameWidth / 2,
            this.centreY - this.frameHeight / 2,
            this.frameWidth,
            this.frameHeight
        );
    }

    update() {
       


        this.centreY = Math.ceil(this.centreY)
        this.onPlatform = false;

        for (let sprite of this.level.sprites) {
            if (sprite instanceof Platform) {
                let platform = sprite;

                if (
                    Math.ceil(this.centreY) + this.frameHeight / 2 <= platform.y &&
                    Math.ceil(this.centreY) + this.frameHeight / 2 + this.dY >= platform.y &&
                    this.centreX - this.frameWidth / 2 <= platform.x + platform.width &&
                    this.centreX + this.frameWidth / 2 >= platform.x
                ) {
                    // Set to true if the hero is on a platform
                    this.onPlatform = true;
                    this.centreY = platform.y - 40

                    break;
                }
            }
        }

        if (this.onPlatform) {
            this.dY = 0;
            this.isFalling = false;
            this.isJumping = false;
            this.jumpCount = 0;

        } else {
            this.isFalling = true;
        }
        if (this.bounce) {
            if (!this.onPlatform) {
                this.dY = -10;
            }
            this.bounceMovement = true;
            if (this.direction == "left") {
                this.dX = 10;
            }
            if (this.direction == "right") {
                this.dX = -10;
            }
            this.bounce = false;
        }
        if (this.bounceMovement) {
            if (this.direction == "left") {
                this.centreX += this.dX;
                if (!this.onPlatform) {
                    this.dX -= this.friction;
                } else {
                    this.dX -= this.friction * 1.5;
                }
                if (this.dX < 0) {
                    this.bounceMovement = false;
                }
            }
            if (this.direction == "right") {
                this.centreX += this.dX;
                if (!this.onPlatform) {
                    this.dX += this.friction;
                } else {
                    this.dX += this.friction * 1.5;
                }
                if (this.dX > 0) {
                    this.bounceMovement = false;
                }
            }

        }
        //gravity
        if (this.isFalling || this.isJumping) {
            this.centreY += this.dY;
        }


        //switch the boolean depending on the phase of the jump
        if (this.dY > 0 && this.isJumping) {
            this.isJumping = false,
                this.isFalling = true;
        }
        else {
            if (this.dY < 0 && this.isFalling) {
                this.isJumping = true;
                this.isFalling = false;
            }
        }
        //fall logic
        if (this.centreY + this.frameHeight / 2 + this.dY <= this.game.canvas.height && (this.isFalling || this.isJumping)) {
            if (this.isFalling && this.game.keyPressed.includes('ArrowUp')) {
                // If falling and holding jump button, apply slower fall effect
                this.dY += this.gravity / 4;
                if (this.direction == "left" && !this.shotFired) {
                    this.heroImg.src = "heroFallLeft.png";
                }
                if (this.direction == "right") {
                    this.heroImg.src = "heroFallRight.png";
                }
            }
            else {
                if (this.bounceMovement) {

                    this.dY += this.gravity / 2;
                }
                else {
                    this.dY += this.gravity;
                }
                //animate jump depending on direction
                if (this.isJumping && !this.shotFired) {
                    if (this.direction == "left") {
                        this.heroImg.src = "heroJumpLeft.png";
                    }
                    if (this.direction == "right") {
                        this.heroImg.src = "heroJumpRight.png";
                    }
                }

            }
        } else {//stop at canvas bottom
            this.dY = 0;

        }

        //teleport back to checkpoint
        if (this.centreY + this.frameHeight / 2 >= this.game.canvas.height || this.teleport) {
            this.centreX = this.currentPlat.x + this.currentPlat.width /2;
            this.centreY = this.currentPlat.y - 40;
            this.teleport = false;
            this.isJumping = false;
            this.dY = 0;
            this.lives.lives--;
        }

        //Handle keyDowns and keyUps

        if (this.game.keyPressed.includes('ArrowLeft')) {
            this.direction = "left";
            //animate
            if (!this.isFalling && !this.isJumping) {
                this.animate = true;
            }

            //move    
            if (this.centreX < 200 && this.tracker > 0) {
                this.moveBckgLeft = true;
                this.tracker -= this.speed;
            }
            else {
                if (this.centreX - this.frameWidth / 2 > 0 && !this.bounceMovement && !this.shotFired) {
                    this.centreX -= this.speed;
                    this.moveBckgLeft = false;
                    this.moveBckgRight = false;
                }

            }

        } else {


            if (this.game.keyPressed.includes('ArrowRight')) {
                this.direction = "right";
                //animate
                if (!this.isFalling && !this.isJumping) {
                    this.animate = true;
                }

                //move
                if (this.centreX > 800 && this.tracker < 10000) {
                    this.moveBckgRight = true;
                    this.tracker += this.speed;

                }
                else {
                    if (this.centreX + this.frameWidth / 2 < this.game.canvas.width && !this.bounceMovement && !this.shotFired) {
                        this.centreX += this.speed;
                        this.moveBckgRight = false;
                        this.moveBckgLeft = false;
                    }
                }
            }
            else {
                this.animate = false;
            }
        }

        if (this.game.keyPressed.includes('ArrowDown') && this.fireClaimed) {

            if (!this.shotFired && this.cooldown > 30 && this.tracker > 1900) {
                if (this.direction == "left") {
                    this.heroImg.src = "HeroFiringLeft.png"
                    let fireball1 = new HeroFire(this.centreX - this.frameWidth / 2, this.centreY, -1, 5, this.level, "heroFireLeft.png", this, this.game);
                    this.level.sprites.push(fireball1);
                    this.shotFired = true;
                    this.Counter = 0;
                    this.shootSound.pause();
                    this.shootSound.currentTime = 0;
                    this.shootSound.play();

                }

                if (this.direction == "right") {
                    this.heroImg.src = "HeroFiringRight.png"
                    let fireball1 = new HeroFire(this.centreX + this.frameWidth / 2, this.centreY, 1, 5, this.level, "heroFireRight.png", this, this.game);
                    this.level.sprites.push(fireball1);
                    this.shotFired = true;
                    this.Counter = 0;
                    this.shootSound.pause();
                    this.shootSound.currentTime = 0;
                    this.shootSound.play();

                }
            } else {
                if (this.Counter % 30 == 0) {
                    this.shotFired = false;
                    this.cooldown = 0;
                }
            }
        }

        if (!this.isFalling && !this.isJumping && this.direction == "left" && !this.shotFired) {
            this.heroImg.src = "heroWalkLeft.png"
        }
        if (!this.isFalling && !this.isJumping && this.direction == "right" && !this.shotFired) {
            this.heroImg.src = "heroWalkRight.png"
        }



        if (this.game.keyPressed.includes('ArrowUp') && !this.jumpPressed) {
            this.jumpPressed = true;
            if (this.jumpCount < this.maxJumpCount) {
                this.jumpSound.pause();
                this.jumpSound.currentTime = 0.5
                this.jumpSound.play();
                this.dY = -13;
                this.jumpCount++;
            }

        }


        if (!this.game.keyPressed.includes('ArrowUp')) {
            this.jumpPressed = false;
        }
        if (!this.game.keyPressed.includes('ArrowDown')) {
            if (this.Counter % 15 == 0) {
                this.shotFired = false;
            }

        }
        if (!this.game.keyPressed.includes('ArrowRight')) {
            this.moveBckgRight = false;
        }
        if (!this.game.keyPressed.includes('ArrowLeft')) {
            this.moveBckgLeft = false;
        }

        if (this.animate) {
            if (this.Counter % 8 == 0) {
                this.frameIndex++;
                if (this.frameIndex >= 4 || this.shotFired) {
                    this.frameIndex = 0;
                }
                this.currFrameWidth = this.frameIndex * this.frameWidth;
            }
        }

        if (!this.animate) {
            this.frameIndex = 0;
            this.currFrameWidth = this.frameIndex * this.frameWidth;
        }

        if (this.Counter > 60) { this.Counter = 0; }
        this.Counter++;
        this.cooldown++;

    }



}

class Level {
    constructor(game) {
        this.sprites = [];
        this.game = game;
    }
    draw() {
        this.sprites.forEach((sprite) => sprite.draw(this.game.ctx));
    }
    update() {
        this.sprites.forEach((sprite) => sprite.update());
    }
    addSprite(sprite) {
        this.sprites.push(sprite);
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('prototype');
        this.ctx = this.canvas.getContext('2d');
        this.levels = [];
        this.keyPressed = [];
        this.scenarioCase = 1;
        this.LoseImg = new Image;
        this.LoseImg.src = "LoseScreen.jpg";
        this.winImg = new Image;
        this.winImg.src = "win.png";
        this.StartImg = new Image;
        this.StartImg.src = "startBckg.png"
        this.pause = false;
        this.changemusic = false;
        this.bckgAudio = new Audio("./sound/intro.m4a");
        document.addEventListener('keydown', (event) => {
            if (!this.keyPressed.includes(event.key)) {
                this.keyPressed.push(event.key);
            }
        });

        document.addEventListener('keyup', (event) => {
            this.keyPressed.splice(this.keyPressed.indexOf(event.key), 1);
        });
    }

    draw() {
        switch (this.scenarioCase) {
            case 1:
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.drawImage(this.StartImg, 0, 0, this.canvas.width, this.canvas.height);
                break;
            case 2:
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.levels[0].draw(this.ctx);
                break;
            case 3:
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.levels[1].draw(this.ctx);
                break;
            case 4:
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.drawImage(this.LoseImg, 0, 0, this.canvas.width, this.canvas.height);
                break;

            case 5:
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.drawImage(this.winImg, 0, 0, this.canvas.width, this.canvas.height);
                break;
        }
    }


    update() {

        if (this.keyPressed.includes('p') || this.keyPressed.includes('P')) {
            this.pause = true;
        }
        if (this.keyPressed.includes('c') || this.keyPressed.includes('C')) {

            this.pause = false;
        }
        if (this.keyPressed.includes('r') || this.keyPressed.includes('R')) {
            this.scenarioCase = 1;
            this.bckgAudio.pause();
            this.changeAudio = true;
            this.levels.forEach(level => {
                level.sprites = []; // Clear all sprites arrays
            });
            createLevels() //recreate levels
        }
        if (this.keyPressed.includes('Enter') && this.scenarioCase < 2) {
            this.scenarioCase++;
            this.changeAudio = true;
        }

        switch (this.scenarioCase) {
            case 1:
                //cant play audio due to browser policies
                break;

            case 2:
                if (this.changeAudio) {
                    this.bckgAudio = new Audio("./sound/overworldMusic.m4a");
                    this.bckgAudio.play();
                    this.changeAudio = false;
                }
                if (!this.pause) {
                    this.levels[0].update();
                }
                if (this.pause) {
                    this.bckgAudio.pause();

                }
                else {
                    this.bckgAudio.play();
                }

                break;

            case 3:
                if (this.changeAudio) {
                    this.bckgAudio.pause();
                    this.bckgAudio = new Audio("./sound/undergroundmusic.mp3");
                    this.bckgAudio.play();
                    this.changeAudio = false;
                }
                if (!this.pause) {

                    this.levels[1].update();
                }
                if (this.pause) {
                    this.bckgAudio.pause();

                }
                else {
                    this.bckgAudio.play();
                }

                break;

            case 4:
                this.bckgAudio.pause();
                //losing case after lost of 3 lives
                break;
            case 5:
                if (this.changeAudio) {
                    this.bckgAudio.pause();
                    this.bckgAudio = new Audio("./sound/gameDone.m4a");
                    this.bckgAudio.play();
                    this.changeAudio = false;
                }
        }


    }

    addLevel(Level) {
        this.levels.push(Level);
    }
    gameloop() {
        this.draw();
        this.update();
        requestAnimationFrame(() => this.gameloop());
    }
}
var myGame = new Game();
var Level1 = new Level(myGame);
var Level2 = new Level(myGame);
//level 1

function createLevels() {

    var livestxt = new Lives(myGame);
    var myHero = new Hero(150, 200, livestxt, myGame, Level1, false);
    var plat1 = new Platform(0, 600, myHero, "leftplat.png", 250, 615, myGame);
    var plat2 = new Platform(plat1.x + plat1.width, plat1.y, myHero, "midplat.png", 250, 615, myGame);
    var plat3 = new Platform(plat2.x + plat2.width, plat2.y, myHero, "rightplat.png", 250, 615, myGame);
    var plat4 = new Platform(plat3.x + plat3.width + 150, plat3.y - 100, myHero, "soloplat.png", 250, 615, myGame);
    var plat5 = new Platform(plat4.x + plat4.width + 100, plat1.y, myHero, "leftplat.png", 250, 615, myGame);
    var plat6 = new Platform(plat5.x + plat5.width, plat1.y, myHero, "midplat.png", 250, 615, myGame);
    var plat7 = new Platform(plat5.x + plat5.width + 20, plat1.y - 100, myHero, "leftplat.png", 250, 615, myGame);
    var plat8 = new Platform(plat5.x + plat5.width + 150, plat7.y - 100, myHero, "soloplat.png", 250, 615, myGame);
    var plat10 = new Platform(plat8.x + plat8.width + 350, plat1.y, myHero, "leftplat.png", 250, 615, myGame);
    var plat11 = new Platform(plat10.x + plat10.width, plat1.y, myHero, "midplat.png", 250, 615, myGame);
    var plat12 = new Platform(plat11.x + plat11.width, plat1.y, myHero, "midplat.png", 250, 615, myGame);
    var plat13 = new Platform(plat10.x + plat10.width, plat1.y - 150, myHero, "soloplat.png", 250, 615, myGame);
    var plat14 = new Platform(plat11.x + plat11.width + 30, plat1.y - 300, myHero, "soloplat.png", 250, 615, myGame);

    var scoretxt = new Score();

    var monster1 = new Monster(plat4.x + plat4.width / 2, plat4.y - (45 / 2), myHero, livestxt, scoretxt, Level1, plat4, myGame)
    var monster2 = new Monster(plat5.x + plat5.width / 2, plat5.y - (45 / 2), myHero, livestxt, scoretxt, Level1, plat5, myGame)
    var monster3 = new Monster(plat7.x + 80, plat7.y - (45 / 2), myHero, livestxt, scoretxt, Level1, plat7, myGame)
    var monster4 = new Monster(plat10.x + plat10.width - 50, plat10.y - (45 / 2), myHero, livestxt, scoretxt, Level1, plat10, myGame);
    var monster5 = new Monster(plat13.x + plat13.width / 2, plat13.y - (45 / 2), myHero, livestxt, scoretxt, Level1, plat13, myGame);
    var monster6 = new Monster(plat12.x + 80, plat12.y - (45 / 2), myHero, livestxt, scoretxt, Level1, plat12, myGame);

    var bckg = new Background("bckg21.png", Level1.canvas, myHero, myGame);

    var guide = new Guide(plat3.x, plat3.y - 80, myHero, Level1, myGame)

    var coin1 = new Coin(guide.centreX + 120, plat3.y - 20, myHero, scoretxt, Level1, myGame);
    var coin2 = new Coin(plat8.x + 50, plat8.y - 20, myHero, scoretxt, Level1, myGame);
    var coin3 = new Coin(plat8.x + 150, plat8.y - 20, myHero, scoretxt, Level1, myGame);
    var coin4 = new Coin(plat8.x + 100, plat8.y - 20, myHero, scoretxt, Level1, myGame);
    var coin5 = new Coin(plat12.x + 100, plat12.y - 20, myHero, scoretxt, Level1, myGame);
    var coin6 = new Coin(plat12.x + 200, plat12.y - 20, myHero, scoretxt, Level1, myGame);
    var coin7 = new Coin(plat13.x + 50, plat13.y - 20, myHero, scoretxt, Level1, myGame);
    var coin8 = new Coin(plat13.x + 100, plat13.y - 20, myHero, scoretxt, Level1, myGame);
    var coin9 = new Coin(plat13.x + 150, plat13.y - 20, myHero, scoretxt, Level1, myGame);
    var coin10 = new Coin(plat13.x + 200, plat13.y - 20, myHero, scoretxt, Level1, myGame);

    var gate1 = new Gate(2850, 200, myHero, scoretxt, Level1, myGame)
    

    // Create Level 2
    var livestxt2 = new Lives(myGame);

    var scoretxt2 = new Score();

    var myHero2 = new Hero(150, 200, livestxt2, myGame, Level2, true);

    var bckg2 = new Background("bckg2.png", Level2.canvas, myHero2, myGame);

    var plat101 = new Platform(0, 600, myHero2, "uplat.png", 250, 615, myGame);
    var plat102 = new Platform(300, 500, myHero2, "uplat.png", 250, 615, myGame);
    var plat103 = new Platform(600, 400, myHero2, "uplat.png", 250, 615, myGame);
    var plat104 = new Platform(900, 300, myHero2, "uplat.png", 250, 615, myGame);
    var plat105 = new Platform(1200, 200, myHero2, "uplat.png", 250, 615, myGame);
    var plat106 = new Platform(1500, 300, myHero2, "uplat.png", 250, 615, myGame);
    var plat107 = new Platform(1800, 400, myHero2, "uplat.png", 250, 615, myGame);
    var plat108 = new Platform(2100, 500, myHero2, "uplat.png", 250, 615, myGame);
    var plat109 = new Platform(2400, 600, myHero2, "uplat.png", 250, 615, myGame);
    var plat110 = new Platform(2700, 500, myHero2, "uplat.png", 250, 615, myGame);
    var plat111 = new Platform(2950, 600, myHero2, "uplat.png", 250, 615, myGame);
    var plat112 = new Platform(3100, 400, myHero2, "uplat.png", 250, 615, myGame);
    var plat113 = new Platform(3600, 400, myHero2, "uplat.png", 250, 615, myGame);
   
    var lava1 = new Lava(plat101.x+275, 830, myHero2, Level2,myGame,30)
    var lava2 = new Lava(plat102.x+275, 830, myHero2, Level2,myGame,33)
    var lava3 = new Lava(plat103.x+275, 830, myHero2, Level2,myGame,36)
    var lava4 = new Lava(plat104.x+275, 830, myHero2, Level2,myGame,39)
    var lava5 = new Lava(plat105.x+275, 830, myHero2, Level2,myGame,39)
    var lava6 = new Lava(plat106.x+275, 830, myHero2, Level2,myGame,36)
    var lava7 = new Lava(plat107.x+275, 830, myHero2, Level2,myGame,33)
    var lava8 = new Lava(plat108.x+275, 830, myHero2, Level2,myGame,30)

    var bigPlatform = new Platform(3200, 600, myHero2, "bigUPlat.png", 500, 615, myGame);
    var platend = new Platform(bigPlatform.x+bigPlatform.width, bigPlatform.y,myHero2,"uplat.png", 250, 615, myGame);

    var fireGuide1 = new FireGuide(plat110.x + 100, plat110.y - 80, myHero2, Level2, myGame)

    var monster101 = new Monster(plat102.x + plat102.width / 2, plat102.y - 45 / 2, myHero2, livestxt2, scoretxt2, Level2, plat102, myGame);
    var monster102 = new Monster(plat104.x + plat104.width / 2, plat104.y - 45 / 2, myHero2, livestxt2, scoretxt2, Level2, plat104, myGame);
    var monster103 = new Monster(plat107.x + plat107.width / 2, plat107.y - 45 / 2, myHero2, livestxt2, scoretxt2, Level2, plat107, myGame);

    var queen2 = new Queen(platend.x + 180, platend.y - 80, myHero2, Level2, myGame);

    var boss2 = new Boss(bigPlatform.x + bigPlatform.width / 2, bigPlatform.y - 60, myHero2, Level2, bigPlatform, myGame, queen2);

   //add sprites to level 1
    Level1.addSprite(bckg);
    Level1.addSprite(scoretxt);
    Level1.addSprite(livestxt);
    Level1.addSprite(plat14);
    Level1.addSprite(plat13);
    Level1.addSprite(plat12);
    Level1.addSprite(plat11);
    Level1.addSprite(plat10);
    Level1.addSprite(plat8);
    Level1.addSprite(plat7);
    Level1.addSprite(plat6);
    Level1.addSprite(plat5);
    Level1.addSprite(plat4);
    Level1.addSprite(plat3);
    Level1.addSprite(plat2);
    Level1.addSprite(plat1);
    Level1.addSprite(coin1);
    Level1.addSprite(coin2);
    Level1.addSprite(coin3);
    Level1.addSprite(coin4);
    Level1.addSprite(coin5);
    Level1.addSprite(coin6);
    Level1.addSprite(coin7);
    Level1.addSprite(coin8);
    Level1.addSprite(coin9);
    Level1.addSprite(coin10);
    Level1.addSprite(guide);
    Level1.addSprite(monster1);
    Level1.addSprite(monster2);
    Level1.addSprite(monster3);
    Level1.addSprite(monster4);
    Level1.addSprite(monster5);
    Level1.addSprite(monster6);
    Level1.addSprite(gate1);
    Level1.addSprite(myHero);

    //add sprites for level 2
    Level2.addSprite(bckg2);
    Level2.addSprite(livestxt2);
    Level2.addSprite(scoretxt2);
    Level2.addSprite(plat112);
    Level2.addSprite(plat113);
    Level2.addSprite(plat101);
    Level2.addSprite(plat102);
    Level2.addSprite(plat103);
    Level2.addSprite(plat104);
    Level2.addSprite(plat105);
    Level2.addSprite(plat106);
    Level2.addSprite(plat107);
    Level2.addSprite(plat108);
    Level2.addSprite(plat109);
    Level2.addSprite(plat110);
    Level2.addSprite(plat111);
    Level2.addSprite(platend);
    Level2.addSprite(lava1);
    Level2.addSprite(lava2);
    Level2.addSprite(lava3);
    Level2.addSprite(lava4);
    Level2.addSprite(lava5);
    Level2.addSprite(lava6);
    Level2.addSprite(lava7);
    Level2.addSprite(lava8);
    Level2.addSprite(bigPlatform);
    Level2.addSprite(monster101);
    Level2.addSprite(monster102);
    Level2.addSprite(monster103);
    Level2.addSprite(boss2);
    Level2.addSprite(queen2);
    Level2.addSprite(fireGuide1);
    Level2.addSprite(myHero2);

    // Add Level 2 to the game
}
createLevels();
myGame.addLevel(Level1);
myGame.addLevel(Level2);

myGame.gameloop();