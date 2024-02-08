let Starship = document.getElementById("Starship")
let Bullets = document.getElementById("Bullets")
let furbies = document.getElementById("furbies")
let left_pos = 500
let cool_down = false
let collison_remove = []
function start(){
    Starship.style.position = "absolute"
    update_pos()
    Starship.style.bottom = "0"
    spawn_furby()
}
function update_pos(){
    Starship.style.left = left_pos.toString()
}
function This_way(){
    left_pos = left_pos - 100
    update_pos()
}
function That_way(){
    left_pos = left_pos + 100
    update_pos()
}
function shoot_bullet(){
    if (cool_down == false){
        let newBullet = document.createElement("img");
        newBullet.src = "https://w7.pngwing.com/pngs/502/693/png-transparent-chile-font-bullets-silhouette-art-bullets.png"
        newBullet.style.position = "absolute"
        newBullet.style.left = left_pos.toString()
        newBullet.style.bottom = "0"
        newBullet.height = 100
        newBullet.width = 100
        Bullets.appendChild(newBullet)
        setTimeout(move_bullet, 16, newBullet, 0)
        cool_down = true
        setTimeout(non_mashine, 500)
    }
}
function move_bullet(newBullet = new HTMLImageElement(), y = 0){
    newBullet.style.bottom = y.toString()
    y = y + 10
    setTimeout(move_bullet, 16, newBullet, y)
}
function non_mashine(){
    cool_down = false
}
function spawn_furby(){
    let furby = document.createElement("img")
    furby.src = "https://lh4.googleusercontent.com/YxbtUeT3xEEf_jM_HT9jljkZVZpCs5s73u_0nxXI8tE3NebkfJEfdJcifIW0_CvbTZsq9-Gd_iufkwLfwCn_aX4g5SYMiVqFa8TsMvfF9vMOeRqbxVzpA8H-VkjHoUyaumKCVOagaHmSE0AnmFD-uNuSQA=s2048"
    furby.style.position = "absolute"
    furby.style.left = "500"
    furbies.appendChild(furby)
    collison_remove = collison_remove.concat(furby)
}
start()
