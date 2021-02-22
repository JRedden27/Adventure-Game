class SceneEntrance extends Phaser.Scene {
    constructor() {
        super('SceneEntrance');
    }
    preload() {
        //load our images or sounds
        
    }
    create() {
        //define our objects
        this.background = this.add.image(0, 0, 'entrance');
        this.background.setOrigin(0, 0);
        this.background.displayWidth = game.config.width;
        this.background.displayHeight = game.config.height;

        let sb = new SoundButtons({scene: this});

        this.uiGrid = new AlignGrid({scene: this, rows: 7, cols: 7});
        //this.uiGrid.showNumbers();
        
        this.arrow = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(28, this.arrow);
        Align.scaleToGameW(this.arrow, .0625);
        this.arrow.setInteractive();
        this.arrow.on('pointerdown', this.enterUpstairs, this);

        this.arrow2 = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(22, this.arrow2);
        Align.scaleToGameW(this.arrow2, .0625);
        this.arrow2.setInteractive();
        this.arrow2.on('pointerdown', this.enterBasement, this);

        this.arrow3 = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(24, this.arrow3);
        Align.scaleToGameW(this.arrow3, .0625);
        this.arrow3.setInteractive();
        this.arrow3.on('pointerdown', this.enterGarden, this);

        this.backArrow = this.add.image(this.centerX, this.centerY, 'backArrow');
        this.uiGrid.placeAtIndex(38, this.backArrow);
        Align.scaleToGameW(this.backArrow, .0625);
        this.backArrow.setInteractive();
        this.backArrow.on('pointerdown', this.goBack, this);
    }
    enterUpstairs() {
        this.scene.start("SceneUpstairs");
    }
    enterBasement() {
        this.scene.start("SceneBasement");
    }
    enterGarden() {
        this.scene.start("SceneGarden");
    }
    goBack() {
        this.scene.start("SceneMain");
    }
    update() {
        //constant running loop
    }
    customFunctions() {
        
    }
}