// Overlap event: When squeegee hits the dirt
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
    totalDirt += 0 - 1
    // Win condition
    if (totalDirt <= 0) {
        game.over(true, effects.confetti)
    }
})
let dirt: Sprite = null
let totalDirt = 0
// Setup the player (Squeegee)
let squeegee = sprites.create(img`
    . . . f f f f f f f f . . . 
    . . . f 1 1 1 1 1 1 f . . . 
    . . . f f f f f f f f . . . 
    . . . . . . f f . . . . . . 
    . . . . . . f f . . . . . . 
    . . . . . . f f . . . . . . 
    . . . . . . f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(squeegee, 100, 100)
squeegee.setStayInScreen(true)
scene.setBackgroundImage(assets.image`Door`)
let windowTile = img`
    9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 
    `
// Draw a 4x4 window grid in the center of the screen
let startX = 48
let startY = 32
let rows = 4
let cols = 8
totalDirt = rows * cols
// Create the "dirt" layers over the window
for (let i = 0; i <= cols - 1; i++) {
    for (let j = 0; j <= rows - 1; j++) {
        // Using Food kind for dirt targets
        dirt = sprites.create(img`
            4 4 2 4 4 4 2 4 
            4 2 4 4 2 4 4 4 
            4 4 4 2 4 4 4 2 
            2 4 4 4 4 2 4 4 
            4 4 2 4 4 4 2 4 
            4 2 4 4 2 4 4 4 
            4 4 4 2 4 4 4 2 
            2 4 4 4 4 2 4 4 
            `, SpriteKind.Food)
        dirt.setPosition(startX + i * 8, startY + j * 8)
    }
}
// Instruction text
game.splash("Clean the reactor window!")
