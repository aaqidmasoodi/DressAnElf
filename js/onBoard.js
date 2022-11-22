const modelName = document.getElementById("name");
const modelAge = document.getElementById("age");
const modelGender = document.getElementById("gender");
const modelWeight = document.getElementById("weight");
const modelHeight = document.getElementById("height");
const modelBirthPlace = document.getElementById("birthplace");
// ------
const modelEmotion = document.getElementById("emotional");
const modelHapiness = document.getElementById("happiness");
const modelCalmness = document.getElementById("calm");
const modelBravery = document.getElementById("braveness");
const modelOrderly = document.getElementById("orderly");



const saveButton = document.getElementById("savebtn");


saveButton.addEventListener('click', () => {

    modelInfo = {
        "modelName": modelName.value,
        "modelAge": modelAge.value,
        "modelGender": modelGender.value,
        "modelWeight": modelWeight.value,
        "modelHeight": modelHeight.value,
        "modelBirthPlace": modelBirthPlace.value,
        "modelEmotion": modelEmotion.value,
        "modelHapiness": modelHapiness.value,
        "modelCalmness": modelCalmness.value,
        "modelBravery": modelBravery.value,
        "modelOrderly": modelOrderly.value,

    }

    localStorage.setItem("modelInfo", JSON.stringify(modelInfo));

    window.location.replace("http://127.0.0.1:5500/index.html");

})