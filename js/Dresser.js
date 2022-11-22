let clothingItemBtns = document.querySelectorAll(".clothing-item");
clothingItemBtns.forEach((clothingBtn) => {
    clothingBtn.addEventListener('mousedown', () => {
        clothingBtn.classList.toggle("clothing-item-mdown");
    })

    clothingBtn.addEventListener('mouseup', () => {
        clothingBtn.classList.toggle("clothing-item-mdown");
    })
})



let resetButton = document.getElementById("resetBtn")

resetButton.addEventListener('click', () => {
    window.location.replace("http://127.0.0.1:5500/LandingPage.html");
    localStorage.clear()
})



// ---------------------------------------------------
const modelInfo = JSON.parse(localStorage.getItem("modelInfo"));
// ------ get name tags
const modelNameTag = document.getElementById("model-name-tag");
const modelAgeTag = document.getElementById("model-age-tag");
const modelGenderTag = document.getElementById("model-gender-tag");
const modelWeightTag = document.getElementById("model-weight-tag");
const modelHeightTag = document.getElementById("model-height-tag");
const modelBirthPlaceTag = document.getElementById("model-birthplace-tag");
const modelEmotionTag = document.getElementById("model-emotions-tag");
const modelHapinessTag = document.getElementById("model-happiness-tag");
const modelCalmnessTag = document.getElementById("model-calmness-tag");
const modelBraveryTag = document.getElementById("model-bravery-tag");
const modelOrderlyTag = document.getElementById("model-oderly-tag");
// ------ end get name tags

modelNameTag.innerText = modelInfo.modelName;
modelAgeTag.innerText = modelInfo.modelAge;
modelGenderTag.innerText = modelInfo.modelGender;
modelWeightTag.innerText = modelInfo.modelWeight;
modelHeightTag.innerText = modelInfo.modelHeight;
modelBirthPlaceTag.innerText = modelInfo.modelBirthPlace;
modelEmotionTag.innerText = modelInfo.modelEmotion;
modelHapinessTag.innerText = modelInfo.modelHapiness;
modelCalmnessTag.innerText = modelInfo.modelCalmness;
modelBraveryTag.innerText = modelInfo.modelBravery;
modelOrderlyTag.innerText = modelInfo.modelOrderly;




// ---------------------------------------------------

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