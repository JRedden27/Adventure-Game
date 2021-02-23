let game;
let model;
let emitter;
let G;
let controller;
let config;
let mediaManager;

window.onload=function() {
    let isMobile = navigator.userAgent.indexOf("Mobile");
    if (isMobile == -1) {
        isMobile = navigator.userAgent.indexOf("Tablet");
    }
    //
    //
    if (isMobile == -1) {
        config = {
            type: Phaser.AUTO,
            width: 480,
            height: 640,
            parent: 'phaser-game',
            scene: [SceneLoad, SceneTitle, SceneMain, SceneEntrance, SceneUpstairs, SceneBasement, SceneGarden, SceneGraveyard, SceneAttic, SceneBedroom, SceneBathroom, SceneRecRoom, SceneOver]
        };
    } else {
        config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            parent: 'phaser-game',
            scene: [SceneLoad, SceneTitle, SceneMain, SceneEntrance, SceneUpstairs, SceneBasement, SceneGarden, SceneGraveyard, SceneAttic, SceneBedroom, SceneBathroom, SceneRecRoom, SceneOver]
        };
    }
    G = new Constants();
    model = new Model();
    model.isMobile = isMobile;
    game = new Phaser.Game(config);
}