var moveRight = false, moveLeft = false;

export default class Player {
    constructor(scene, setY) {
        this.scene = scene;
        //this.scene.physics.world.enable(this);
        //this.scene.add.existing(this);

        const anims = scene.anims;
        //角色動畫
        anims.create({
            key: 'left',
            frames: anims.generateFrameNumbers('kuso', { start: 0, end: 21 }),
            frameRate: 22,
            repeat: -1
        });
        anims.create({
            key: 'right',
            frames: anims.generateFrameNumbers('kuso', { start: 22, end: 43 }),
            frameRate: 22,
            repeat: -1
        });
        anims.create({
            key: 'stand',
            frames: anims.generateFrameNumbers('kuso', { start: 44, end: 55 }),
            frameRate: 22,
            repeat: -1
        });
        
        
        //計算初始位置
        let x = 240*gameScale*1.4375/2;
        //console.log(x);
        let y = 320*gameScale*1.4375*1.75;
        //console.log(y);

        if(setY == null)
        {
            setY = 0;
        }            
        this.sprite = scene.physics.add
            .sprite(x, y, "kuso", 0)//初始位置
            .setSize(120, 320)//碰撞器大小
            .setOffset(50, setY)//碰撞器位置
            .setScale(gameScale*1.4375); //縮放比例

        let w=319, h=212;
        x = w/2*gameScale;
        y = imageHeight/2*gameScale;
        this.scene.add.tileSprite(x, y, w, h, 'btnLeft').setScale(gameScale).setDepth(120);
        x = (imageWidth-(w/2))*gameScale;
        this.scene.add.tileSprite(x, y, w, h, 'btnRight').setScale(gameScale).setDepth(120);
        
        this.sprite.setCollideWorldBounds(true);//會碰撞遊戲世界的邊界

        this.keys =scene.input.keyboard.addKeys({ 
            'left': Phaser.Input.Keyboard.KeyCodes.LEFT,
            'right': Phaser.Input.Keyboard.KeyCodes.RIGHT,
            'A': Phaser.Input.Keyboard.KeyCodes.A,
            'D': Phaser.Input.Keyboard.KeyCodes.D
        });    
        let x1 = canvasWidth / 5;
        let x2 = x1 * 4;    
        scene.input.on('pointerdown', function (pointer) {
            if(pointer.x < x1){
                moveLeft = true;
                moveRight = false;
            }
            else if(pointer.x >= x2){
                moveLeft = false;
                moveRight = true;
            }
            else{
                moveLeft = false;
                moveRight = false;
            }
        })
        .on('pointerup', function(){
            moveLeft = false;
            moveRight = false;
        });

        this.sprite.anims.play("stand", true);
    }

    update() {
        if(gameStatus == 'init')
            return;
        const sprite = this.sprite;
        const prevVelocity = sprite.body.velocity.clone();
        sprite.body.setVelocity(0);        
        const keys = this.keys;
        if (keys.left.isDown || keys.A.isDown || moveLeft) {
            sprite.body.setVelocityX(-speed);
            sprite.anims.play("left", true);
        } else if (keys.right.isDown || keys.D.isDown  || moveRight) {
            sprite.body.setVelocityX(speed);
            sprite.anims.play("right", true);
        }
        else{
            //sprite.anims.stop();
            sprite.anims.play("stand", true);
        }
        
    }

    destroy() {
        this.sprite.destroy();
    }
}