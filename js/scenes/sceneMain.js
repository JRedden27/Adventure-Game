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

        this.background = this.add.image(0, 0, 'house');
        this.background.setOrigin(0, 0);
        this.background.displayWidth = game.config.width;
        this.background.displayHeight = game.config.height;

        let sb = new SoundButtons({scene: this});

        this.uiGrid = new AlignGrid({scene: this, rows: 7, cols: 7});
        //this.uiGrid.showNumbers();

        this.arrow = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(31, this.arrow);
        Align.scaleToGameW(this.arrow, .0625);
        this.arrow.setInteractive();
        this.arrow.on('pointerdown', this.enterMainRoom, this);
    }
    enterMainRoom() {
        this.scene.start("SceneEntrance");
    }
    update() {
        //constant running loop
    }
}