namespace SpriteKind {
    export const laser = SpriteKind.create()
    export const foodier_food = SpriteKind.create()
    export const effect = SpriteKind.create()
    export const heal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 100)
    info.changeScoreBy(200)
    music.baDing.play()
    pew_pew_pew += 1
})
sprites.onOverlap(SpriteKind.foodier_food, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 100)
    info.changeScoreBy(1600)
    music.baDing.play()
    pew_pew_pew += 20
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy(effects.ashes, 100)
    scene.cameraShake(2, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.heal, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (info.life() != 3) {
        info.changeLifeBy(1)
    }
    music.powerUp.play()
})
scene.onHitTile(SpriteKind.heal, 12, function (sprite) {
    sprite.destroy()
})
sprites.onCreated(SpriteKind.effect, function (sprite) {
    animation.runImageAnimation(
    sprite,
    [img`
. . . . 4 4 4 4 4 4 4 4 . . . . 
. . . 4 4 4 4 4 4 4 4 4 4 . . . 
. . 4 4 5 5 5 5 5 5 5 5 4 4 . . 
. 4 4 5 5 5 5 5 5 5 5 5 5 4 4 . 
4 4 5 5 5 4 4 4 4 4 4 5 5 5 4 4 
4 4 5 5 4 . . . . . . 4 5 5 4 4 
4 4 5 5 4 . . . . . . 4 5 5 4 4 
4 4 5 5 4 . . . . . . 4 5 5 4 4 
4 4 5 5 4 . . . . . . 4 5 5 4 4 
4 4 5 5 4 . . . . . . 4 5 5 4 4 
4 4 5 5 4 . . . . . . 4 5 5 4 4 
4 4 5 5 5 4 4 4 4 4 4 5 5 4 4 4 
. 4 4 5 5 5 5 5 5 5 5 5 4 4 4 . 
. . 4 4 5 5 5 5 5 5 5 4 4 4 . . 
. . . 4 4 4 4 4 4 4 4 4 4 . . . 
. . . . 4 4 4 4 4 4 4 4 . . . . 
`,img`
. . . . . 4 . 4 . 4 . 4 . . . . 
. . . . 4 . 4 . 4 . 4 . 4 . . . 
. . . 4 . 5 . 5 . 5 . 5 . 4 . . 
. . 4 . 5 . 5 . 5 . 5 . 5 . 4 . 
. 4 . 5 . 4 . 4 . 4 . 5 . 5 . 4 
4 . 5 . 4 . . . . . . . 5 . 4 . 
. 4 . 5 . . . . . . . 4 . 5 . 4 
4 . 5 . 4 . . . . . . . 5 . 4 . 
. 4 . 5 . . . . . . . 4 . 5 . 4 
4 . 5 . 4 . . . . . . . 5 . 4 . 
. 4 . 5 . . . . . . . 4 . 5 . 4 
4 . 5 . 5 . 4 . 4 . 4 . 5 . 4 . 
. 4 . 5 . 5 . 5 . 5 . 5 . 4 . . 
. . 4 . 5 . 5 . 5 . 5 . 4 . . . 
. . . 4 . 4 . 4 . 4 . 4 . . . . 
. . . . 4 . 4 . 4 . 4 . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. 5 . . . . . . . . . . . . 4 . 
. . 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 4 . . 5 . . . . 
. . . . 1 . 4 . 1 . . 5 1 . . . 
. . 4 1 1 . . 1 . 1 . 1 . 1 . . 
. . . . 1 . . 1 . 1 . 1 . 1 . . 
. . . . 1 . . 1 . 1 . 1 . 1 . . 
. . 5 . 1 . . 1 . 1 . 1 . 4 . . 
. 5 . 1 1 1 . . 1 . . . 1 . . . 
. . . . . . . . . . . . 5 . . . 
. . . . . . . . . . . . . 5 . . 
. . 4 . . . . . . . . . . . . . 
. . . . . . . . . . 4 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. 5 . . . . . . . . . . . . 4 . 
. . 5 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 4 . . 5 . . . . 
. . . . 1 . 4 . 1 . . 5 1 . . . 
. . 4 1 1 . . 1 . 1 . 1 . 1 . . 
. . . . 1 . . 1 . 1 . 1 . 1 . . 
. . . . 1 . . 1 . 1 . 1 . 1 . . 
. . 5 . 1 . . 1 . 1 . 1 . 4 . . 
. 5 . 1 1 1 . . 1 . . . 1 . . . 
. . . . . . . . . . . . 5 . . . 
. . . . . . . . . . . . . 5 . . 
. . 4 . . . . . . . . . . . . . 
. . . . . . . . . . 4 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 . . . 1 . . . 1 . . . 
. . . 1 1 . . 1 . 1 . 1 . 1 . . 
. . . . 1 . . 1 . 1 . 1 . 1 . . 
. . . . 1 . . 1 . 1 . 1 . 1 . . 
. . . . 1 . . 1 . 1 . 1 . 1 . . 
. . . 1 1 1 . . 1 . . . 1 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 . . . 1 . . . 1 . . . 
. . . 1 1 . . 1 . 1 . 1 . 1 . . 
. . . . 1 . . 1 . 1 . 1 . 1 . . 
. . . . 1 . . 1 . 1 . 1 . 1 . . 
. . . . 1 . . 1 . 1 . 1 . 1 . . 
. . . 1 1 1 . . 1 . . . 1 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    70,
    false
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.laser, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 100)
    otherSprite.destroy(effects.ashes, 100)
    music.pewPew.play()
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.ashes, 100)
    otherSprite.destroy(effects.ashes, 100)
    if (Math.percentChance(5)) {
        heart = sprites.create(img`
. . . . . . . . 
. c 2 . . c 2 . 
c 2 2 2 2 2 2 2 
c 2 2 2 2 4 2 2 
c 2 2 2 4 2 2 2 
. c 2 2 2 2 2 . 
. . c 2 2 2 . . 
. . . c 2 . . . 
`, SpriteKind.heal)
        heart.y = sprite.y
        heart.x = sprite.x
        heart.vy = 20
    }
    emerald_chooser = Math.randomRange(0, 40)
    if (emerald_chooser == 5) {
        diamond = sprites.createProjectileFromSprite(img`
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . 9 9 9 1 1 1 . . . . . 
. . . . . 9 9 9 1 1 1 . . . . . 
. . . . 8 9 9 9 9 1 1 1 . . . . 
. . . . 8 9 9 9 9 1 1 1 . . . . 
. . . 6 8 8 9 9 9 9 1 1 1 . . . 
. . . 6 8 8 9 9 9 9 1 1 1 . . . 
. . . . 6 8 8 9 9 9 9 1 . . . . 
. . . . 6 8 8 9 9 9 9 1 . . . . 
. . . . . 6 8 8 9 9 9 . . . . . 
. . . . . 6 8 8 9 9 9 . . . . . 
. . . . . . 6 8 8 9 . . . . . . 
. . . . . . 6 8 8 9 . . . . . . 
. . . . . . . 6 6 . . . . . . . 
`, sprite, Math.randomRange(-10, 10), 30)
        diamond.setKind(SpriteKind.foodier_food)
    } else {
        emerald = sprites.createProjectileFromSprite(img`
. . . 6 7 . . . 
. . 6 7 7 7 . . 
. . 6 7 7 7 . . 
. 6 7 7 7 7 1 . 
. 6 7 7 7 7 1 . 
. . 7 7 7 1 . . 
. . 7 7 7 1 . . 
. . . 7 1 . . . 
`, sprite, Math.randomRange(-20, 20), 50)
        emerald.setKind(SpriteKind.Food)
    }
    info.changeScoreBy(100)
    scene.cameraShake(2, 100)
    effects2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.effect)
    effects2.y = sprite.y
    effects2.x = sprite.x
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pew_pew_pew > 60) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 6 . . . . . . . . 6 . . . 
. . 6 6 6 . . . . . . 6 6 6 . . 
. . 6 6 6 . . . . . . 6 6 6 . . 
. . 6 7 6 . . . . . . 6 7 6 . . 
. . 6 7 6 . . . . . . 6 7 6 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . . 7 . . . . . . . . 7 . . . 
. . . c . . . . . . . . c . . . 
. . . c . . . . . . . . c . . . 
. . . c . . . . . . . . c . . . 
`, shooter, 0, -300)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 6 . . . . . . . . 6 . 
. . . . 6 6 6 . . . . . . 6 6 6 
. . . . 6 6 6 . . . . . . 6 6 6 
. . . . 6 7 6 . . . . . . 6 7 6 
. . . . 6 7 6 . . . . . . 6 7 6 
. . . . 7 7 7 . . . . . . 7 7 7 
. . . 7 7 7 . . . . . . 7 7 7 . 
. . . 7 7 7 . . . . . . 7 7 7 . 
. . . 7 7 7 . . . . . . 7 7 7 . 
. . . 7 7 7 . . . . . . 7 7 7 . 
. . . . 7 . . . . . . . . 7 . . 
. . . c . . . . . . . . c . . . 
. . . c . . . . . . . . c . . . 
. . . c . . . . . . . . c . . . 
`, shooter, 30, -300)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 6 . . . . . . . . 6 . . . . . 
6 6 6 . . . . . . 6 6 6 . . . . 
6 6 6 . . . . . . 6 6 6 . . . . 
6 7 6 . . . . . . 6 7 6 . . . . 
6 7 6 . . . . . . 6 7 6 . . . . 
7 7 7 . . . . . . 7 7 7 . . . . 
. 7 7 7 . . . . . . 7 7 7 . . . 
. 7 7 7 . . . . . . 7 7 7 . . . 
. 7 7 7 . . . . . . 7 7 7 . . . 
. 7 7 7 . . . . . . 7 7 7 . . . 
. . 7 . . . . . . . . 7 . . . . 
. . . c . . . . . . . . c . . . 
. . . c . . . . . . . . c . . . 
. . . c . . . . . . . . c . . . 
`, shooter, -30, -300)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 6 . . . . . . . . 6 . . . 
. . 6 6 6 . . . . . . 6 6 6 . . 
. . 6 6 6 . . . . . . 6 6 6 . . 
. . 6 7 6 . . . . . . 6 7 6 . . 
. . 6 7 6 . . . . . . 6 7 6 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . . 7 . . . . . . . . 7 . . . 
. . . c . . . . . . . . c . . . 
. . . c . . . . . . . . c . . . 
. . . c . . . . . . . . c . . . 
`, shooter, 0, -300)
    }
    music.pewPew.play()
    scene.cameraShake(1, 100)
})
scene.onHitTile(SpriteKind.Enemy, 12, function (sprite) {
    sprite.destroy()
})
let flyer: Sprite = null
let laser: Sprite = null
let follower: Sprite = null
let projectile: Sprite = null
let effects2: Sprite = null
let emerald: Sprite = null
let diamond: Sprite = null
let heart: Sprite = null
let emerald_chooser = 0
let pew_pew_pew = 0
let shooter: Sprite = null
info.setScore(0)
info.setLife(3)
// Have no idea what  it does
scene.setTileMap(img`
. . . . 5 5 . . 5 . 
. . . . 5 5 . . 5 . 
. . . . 5 5 . . . . 
. . . . 5 5 . . . . 
. 5 . . 5 5 . . . . 
. . . . 5 5 . . . . 
. . . . 5 5 . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
c c c c c c c c c c 
`)
// No idea what it does
scene.setTile(12, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, true)
effects.starField.startScreenEffect()
shooter = sprites.create(img`
. . . . . . . 9 1 . . . . . . . 
. . . . . . 6 9 9 1 . . . . . . 
. . . c . . 6 9 9 1 . . c . . . 
. . . b . . 6 9 9 8 . . b . . . 
. . . b 1 1 d 1 1 b c c b . . . 
. . 1 1 1 2 d 1 1 b 2 c c c . . 
. 1 1 1 d 2 d 1 1 b 2 b c c c . 
1 1 1 d d 2 d 1 1 b 2 b b c c c 
1 1 d d d 2 d 1 1 b 2 b b c c c 
1 1 d d d 2 d 1 1 b 2 b c c c c 
1 1 1 1 1 1 d 1 1 b c c c c c c 
. . 1 1 1 1 1 1 1 b c c c c . . 
. . . c b . c b b f . b f . . . 
. . . 5 5 . 4 4 4 4 . 5 5 . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(shooter)
shooter.setPosition(80, 260)
shooter.setFlag(SpriteFlag.StayInScreen, true)
scene.centerCameraAt(80, 230)
pew_pew_pew = 0
emerald_chooser = 0
// Second enemy comes into action only after a certain
// score
game.onUpdateInterval(2000, function () {
    if (info.score() > 8000) {
        follower = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 . . . . 5 5 . . . . 
. . . . 4 4 . 9 1 . 4 4 . . . . 
. . . . 6 6 9 9 9 1 b b . . . . 
. . . . 1 7 9 9 9 9 6 6 . . . . 
. . . 1 7 7 7 9 9 7 7 6 6 . . . 
. . . 1 7 7 7 7 7 7 7 7 6 . . . 
. . 7 1 7 7 7 7 7 7 7 6 6 7 . . 
. 7 7 7 1 7 7 7 7 7 6 6 7 7 7 . 
. 7 7 7 . . . . . . . . 7 7 7 . 
. 7 7 7 . . . . . . . . 7 7 7 . 
. 7 7 7 . . . . . . . . 7 7 7 . 
. 6 6 6 . . . . . . . . 6 6 6 . 
. 6 6 6 . . . . . . . . 6 6 6 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        follower.setPosition(Math.randomRange(10, 150), 93)
        follower.follow(shooter, info.score() / 160)
    }
})
game.onUpdate(function () {
    if (pew_pew_pew > 230) {
        laser = sprites.createProjectileFromSprite(img`
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
. . . . . . 5 2 2 5 . . . . . . 
`, shooter, 0, -10000)
        laser.setKind(SpriteKind.laser)
    }
    if (controller.B.isPressed()) {
        if (controller.down.isPressed()) {
            pew_pew_pew += 1
        }
    }
})
game.onUpdateInterval(5000, function () {
    for (let value of sprites.allOfKind(SpriteKind.effect)) {
        value.destroy()
    }
})
// First enemy
game.onUpdateInterval(1000, function () {
    flyer = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 . . . . . 5 5 . . . . 
. . . . 5 5 . . . . 5 5 . . . . 
. . . 9 4 4 6 . . 9 4 4 6 . . . 
. . . 9 8 8 6 . . 9 8 8 6 . . . 
. . . 9 8 8 6 . . 9 8 8 6 . . . 
. . . 9 8 8 6 5 5 9 8 8 6 . . . 
. . . 9 8 8 6 4 4 9 8 8 6 . . . 
. . . 9 8 8 9 8 8 6 8 1 6 . . . 
. . . 9 8 8 9 8 8 6 8 1 6 . . . 
. . . . 9 8 9 8 8 6 1 6 . . . . 
. . . . . . 9 9 9 9 . . . . . . 
. . . . . . 9 9 9 1 . . . . . . 
. . . . . . . 9 1 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    flyer.setPosition(Math.randomRange(10, 150), 93)
    flyer.vy = 70
})
