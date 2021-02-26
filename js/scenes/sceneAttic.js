class SceneAttic extends Phaser.Scene {
    constructor() {
        super('SceneAttic');
    }
    preload() {
        //load our images or sounds
        
    }
    create() {
        //define our objects
        this.background = this.add.image(0, 0, 'attic');
        this.background.setOrigin(0, 0);
        this.background.displayWidth = game.config.width;
        this.background.displayHeight = game.config.height;

        let sb = new SoundButtons({scene: this});

        this.uiGrid = new AlignGrid({scene: this, rows: 7, cols: 7});
        //this.uiGrid.showNumbers();

        this.backArrow = this.add.image(this.centerX, this.centerY, 'backArrow');
        this.uiGrid.placeAtIndex(38, this.backArrow);
        Align.scaleToGameW(this.backArrow, .0625);
        this.backArrow.setInteractive();
        this.backArrow.on('pointerdown', this.goBack, this);
    }
    goBack() {
        emitter.emit(G.PLAY_SOUND, "climbLadder");
        this.scene.start("SceneUpstairs");
    }
    update() {
        //constant running loop
    }
    customFunctions() {
        
    }
}