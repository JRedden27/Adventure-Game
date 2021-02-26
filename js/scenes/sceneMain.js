class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        //load our images or sounds
        
    }
    create() {
        //define our objects
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        mediaManager = new MediaManager({scene: this}); 

        mediaManager.setBackgroundMusic('backgroundMusic');

        this.background = this.add.image(0, 0, 'house');
        this.background.setOrigin(0, 0);
        this.background.displayWidth = game.config.width;
        this.background.displayHeight = game.config.height;

        let sb = new SoundButtons({scene: this});

        this.uiGrid = new AlignGrid({scene: this, rows: 7, cols: 7});
        //this.uiGrid.showNumbers();

        this.frontDoor = this.add.image(this.centerX, this.centerY, 'frontDoor');
        this.frontDoor.setOrigin(0.67, 0.425);
        this.uiGrid.placeAtIndex(31, this.frontDoor);
        Align.scaleWH(this.frontDoor, .258);
        this.frontDoor.setInteractive();
        this.frontDoor.on('pointerdown', this.enterMainRoom, this);

        this.key = this.add.image(this.centerX, this.centerY, 'key');
        this.uiGrid.placeAtIndex(40, this.key);
        Align.scaleToGameW(this.key, .075);
        this.key.setInteractive();
        if (!this.text) {
            this.key.on('pointerdown', this.examine, this);
        }
    }
    enterMainRoom() {
        emitter.emit(G.PLAY_SOUND, "doorOpen");
        this.scene.start("SceneEntrance");
    }
    examine() {
        this.text = this.add.text(this.centerX, this.centerY, "Looks like a key...", {fontSize: game.config.width/25, align: 'center', backgroundColor: 'darkgray', color: 'black'});
        this.text.setOrigin(-0.5, -2);
        this.text.setInteractive();
        this.text.on('pointerdown', this.vanish, this);
    }
    vanish() {
        this.text.destroy();
    }
    update() {
        //constant running loop
    }
}