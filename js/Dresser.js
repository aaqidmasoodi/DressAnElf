let clothingItemBtns = document.querySelectorAll(".clothing-item");
clothingItemBtns.forEach((clothingBtn) => {
    clothingBtn.addEventListener('mousedown', () => {
        clothingBtn.classList.toggle("clothing-item-mdown");
    })

    clothingBtn.addEventListener('mouseup', () => {
        clothingBtn.classList.toggle("clothing-item-mdown");
    })
})



let changeOutfitBtn = document.getElementById('otfts-btn')
let outfitOverlay = document.getElementById("outfit-overlay")
let outfitIndex = 1
changeOutfitBtn.addEventListener('click', () => {

    if (outfitIndex > 3) {
        outfitIndex = 1
    }

    outfitOverlay.src = `/assets/Outfits/${outfitIndex}.png`
    outfitIndex += 1

})



let changeHairBtn = document.getElementById('hair-btn')
let hairOverlay = document.getElementById("hair-overlay")
let hairIndex = 1
changeHairBtn.addEventListener('click', () => {

    if (hairIndex > 1) {
        hairIndex = 1
        console.log("Here")
    }

    hairOverlay.src = `/assets/Hair/${hairIndex}.png`
    hairIndex += 1

})




let changeShoesBtn = document.getElementById('shoes-btn')
let shoesOverlay = document.getElementById("shoes-overlay")
let shoesIndex = 1
changeShoesBtn.addEventListener('click', () => {

    if (shoesIndex > 1) {
        shoesIndex = 1
        console.log("Here")
    }

    shoesOverlay.src = `/assets/Shoes/${shoesIndex}.png`
    shoesIndex += 1

})





let changeEyesBtn = document.getElementById('eyes-btn')
let eyesOverlay = document.getElementById("eyes-overlay")
let eyesIndex = 1
changeEyesBtn.addEventListener('click', () => {

    if (eyesIndex > 2) {
        eyesIndex = 1
        console.log("Here")
    }

    eyesOverlay.src = `/assets/Eyes/${eyesIndex}.png`
    eyesIndex += 1

})