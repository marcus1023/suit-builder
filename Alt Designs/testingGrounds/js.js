function collect(){

 document.getElementById('pop-confirm-wrap').style.display = 'flex'
 document.getElementById('popup-confirm-section').style.display = 'flex'
// Front
  let frontGrippers = " Gripers Color: " + document.getElementById("gripers-title").innerHTML + " / "
  let frontCollar = " Collar Color: " + document.getElementById("collar-title").innerHTML + " / "
  let frontLeft = " Front Left Color: " + document.getElementById("front-left-title").innerHTML + " / "
  let frontRight = " Front Right Color: " + document.getElementById("front-right-title").innerHTML + " / "
  let fra = " Front Right Arm Color: " + document.getElementById("front-left-lower-arm-title").innerHTML + " / "
  let fla = " Front Left Arm Color: " + document.getElementById("front-right-lower-arm-title").innerHTML + " / "
  let flul = " Front Left Upper Leg Color: " + document.getElementById("front-right-upper-leg-title").innerHTML + " / "
  let frul = " Front Right Upper Leg Color: " + document.getElementById("front-left-upper-leg-title").innerHTML + " / "
  let frk = " Front Right Knee Color: " + document.getElementById("flk-title").innerHTML + " / "
  let flk = " Front Left Knee Color: " + document.getElementById("frk-title").innerHTML + " / "
  let flll = " Front Right Lower Leg Color: " + document.getElementById("flll-title").innerHTML + " / "
  let frll = " Front Left Lower Leg Color: " + document.getElementById("frll-title").innerHTML + " / "

  let allFrontValues = frontGrippers + frontCollar + frontRight+fra+fla+flul+frul+frk+flk+flll+frll
// Back
  let back = " Back Color: " + document.getElementById("b-title").innerHTML + " / "
  let blua = " Back Left Upper Arm Color: " + document.getElementById("blua-title").innerHTML + " / "
  let brua = " Back Right Upper Arm Color: " + document.getElementById("brua-title").innerHTML + " / "
  let blla = " Back Left Lower Arm Color: " + document.getElementById("blla-title").innerHTML + " / "
  let brla = " Back Right Lower Arm Color: " + document.getElementById("brla-title").innerHTML + " / "
  let bl = " Back Legs Color: " + document.getElementById("bl-title").innerHTML + " / "
  let bh = " Back Hips Color: " + document.getElementById("bh-title").innerHTML + " / "

  let allBackValues = back+blua+brua+blla+brla+bl+bh
//Measurements
  let NECK_CIRCUMFERENCE = " NECK_CIRCUMFERENCE: " + document.getElementById("NECK_CIRCUMFERENCE").value + " / "
  let SHOULDER_TO_SHOULDER = " SHOULDER_TO_SHOULDER: " + document.getElementById("SHOULDER_TO_SHOULDER").value + " / "
  let SHOULDER_TO_ELBOW_LENGTH = " SHOULDER_TO_ELBOW_LENGTH: " + document.getElementById("SHOULDER_TO_ELBOW_LENGTH").value + " / "
  let ELBOW_TO_WRIST_LENGTH = " ELBOW_TO_WRIST_LENGTH: " + document.getElementById("ELBOW_TO_WRIST_LENGTH").value + " / "
  let CHEST_CIRCUMFERENCE = " CHEST_CIRCUMFERENCE: " + document.getElementById("CHEST_CIRCUMFERENCE").value + " / "
  let TORSO_LENGTH = " TORSO_LENGTH: " + document.getElementById("TORSO_LENGTH").value + " / "
  let FULL_ARM_BENT_90_LENGTH = " FULL_ARM_BENT_90_LENGTH: " + document.getElementById("FULL_ARM_BENT_90_LENGTH").value + " / "
  let BICEP_CIRCUMFERENCE = " BICEP_CIRCUMFERENCE: " + document.getElementById("BICEP_CIRCUMFERENCE").value + " / "
  let FOREARM_CIRCUMFERENCE = " FOREARM_CIRCUMFERENCE: " + document.getElementById("FOREARM_CIRCUMFERENCE").value + " / "
  let WRIST_CIRCUMFERENCE = " WRIST_CIRCUMFERENCE: " + document.getElementById("WRIST_CIRCUMFERENCE").value + " / "
  let FOOT_TO_SHOULDER_LENGTH = " FOOT_TO_SHOULDER_LENGTH: " + document.getElementById("FOOT_TO_SHOULDER_LENGTH").value + " / "
  let WAIST_CIRCUMFERENCE = " WAIST_CIRCUMFERENCE: " + document.getElementById("WAIST_CIRCUMFERENCE").value + " / "
  let HIPS_CIRCUMFERENCE = " HIPS_CIRCUMFERENCE: " + document.getElementById("HIPS_CIRCUMFERENCE").value + " / "
  let IN_SEAM_LENGTH = " IN_SEAM_LENGTH: " + document.getElementById("IN_SEAM_LENGTH").value + " / "
  let THIGH_CIRCUMFERENCE = " THIGH_CIRCUMFERENCE: " + document.getElementById("THIGH_CIRCUMFERENCE").value + " / "
  let CALF_CIRCUMFERENCE = " CALF_CIRCUMFERENCE: " + document.getElementById("CALF_CIRCUMFERENCE").value + " / "
  let CROTCH_TO_KNEE_LENGTH = " CROTCH_TO_KNEE_LENGTH: " + document.getElementById("CROTCH_TO_KNEE_LENGTH").value + " / "
  let LOWER_LEG_LENGTH = " LOWER_LEG_LENGTH: " + document.getElementById("LOWER_LEG_LENGTH").value + " / "
  let ANKLE_CIRCUMFERENCE = " ANKLE_CIRCUMFERENCE: " + document.getElementById("ANKLE_CIRCUMFERENCE").value + " / "
  let FOOT_LENGTH_SIZE = " FOOT_LENGTH_SIZE: " + document.getElementById("FOOT_LENGTH_SIZE").value + " / "
  let tm = " TORSO MATERIAL: " + document.getElementById("select-tfab-title").innerHTML + " / "
  let lam = " LOWER ARMS MATERIAL: " + document.getElementById("select-lafab-title").innerHTML + " / "

  let allMeasurements = NECK_CIRCUMFERENCE + SHOULDER_TO_SHOULDER+SHOULDER_TO_ELBOW_LENGTH+ELBOW_TO_WRIST_LENGTH+CHEST_CIRCUMFERENCE+FULL_ARM_BENT_90_LENGTH+BICEP_CIRCUMFERENCE+FOREARM_CIRCUMFERENCE+WRIST_CIRCUMFERENCE+FOOT_TO_SHOULDER_LENGTH+WAIST_CIRCUMFERENCE+HIPS_CIRCUMFERENCE+IN_SEAM_LENGTH+THIGH_CIRCUMFERENCE+CALF_CIRCUMFERENCE+CROTCH_TO_KNEE_LENGTH+LOWER_LEG_LENGTH+ANKLE_CIRCUMFERENCE+FOOT_LENGTH_SIZE+tm+lam
  document.getElementById("form-group-company").getElementsByClassName("form-control")[0].value = allFrontValues
  document.getElementById("form-group-comment").getElementsByClassName("form-control")[0].value = allBackValues
  document.getElementById("form-group-organization").getElementsByClassName("form-control")[0].value = allMeasurements

// contact Info
  let nameI = " Full Name: " + document.getElementById("input-name").value + " / "
  let emailI = " Email: " + document.getElementById("input-email").value + " / "
  let input_phone = " Phone: " + document.getElementById("input_phone").value + " / "
  let input_address = " Address: " + document.getElementById("input_address").value + " / "
  let input_city = " City: " + document.getElementById("input_city").value + " / "
  let input_state = " State: " + document.getElementById("input_state").value + " / "
  let input_country = " Country: " + document.getElementById("input_country").value + " / "

  let contactInfo = nameI+emailI+input_phone+input_address+input_city+input_state+input_country
  document.getElementById("form-group-c_d9lp9").getElementsByClassName("form-control")[0].value = contactInfo

console.log(allFrontValues)
console.log(allBackValues)
console.log(allMeasurements)
  document.getElementById("form-group-name_first").getElementsByClassName("form-control")[0].value = nameI
  document.getElementById("form-group-email").getElementsByClassName("form-control")[0].value = emailI

}

function adminColorControl(){
    let aquaVal = document.getElementById('admin-aqua').innerHTML
    if(aquaVal === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-aqua').length; i++){
                document.getElementsByClassName('acc-aqua')[i].style.display = 'none'
            }
    }
    let ngreenVal = document.getElementById('admin-ngreen').innerHTML
    if(ngreenVal === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-ngreen').length; i++){
                document.getElementsByClassName('acc-ngreen')[i].style.display = 'none'
            }
    }
    let hpinkVal = document.getElementById('admin-hpink').innerHTML
    if(hpinkVal === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-hpink').length; i++){
                document.getElementsByClassName('acc-hpink')[i].style.display = 'none'
            }
    }
    let yellow = document.getElementById('admin-yellow').innerHTML
    if(yellow === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-yellow').length; i++){
                document.getElementsByClassName('acc-yellow')[i].style.display = 'none'
            }
    }
    let maroon = document.getElementById('admin-maroon').innerHTML
    if(maroon === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-maroon').length; i++){
                document.getElementsByClassName('acc-maroon')[i].style.display = 'none'
            }
    }
    let grey = document.getElementById('admin-grey').innerHTML
    if(grey === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-grey').length; i++){
                document.getElementsByClassName('acc-grey')[i].style.display = 'none'
            }
    }
    let navy = document.getElementById('admin-navy').innerHTML
    if(navy === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-navy').length; i++){
                document.getElementsByClassName('acc-navy')[i].style.display = 'none'
            }
    }
    let purple = document.getElementById('admin-purple').innerHTML
    if(purple === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-purple').length; i++){
                document.getElementsByClassName('acc-purple')[i].style.display = 'none'
            }
    }
    let darkGreen = document.getElementById('admin-darkGreen').innerHTML
    if(darkGreen === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-darkGreen').length; i++){
                document.getElementsByClassName('acc-darkGreen')[i].style.display = 'none'
            }
    }
    let darkGrey = document.getElementById('admin-darkGrey').innerHTML
    if(darkGrey === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-darkGrey').length; i++){
                document.getElementsByClassName('acc-darkGrey')[i].style.display = 'none'
            }
    }
    let blue = document.getElementById('admin-blue').innerHTML
    if(blue === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-blue').length; i++){
                document.getElementsByClassName('acc-blue')[i].style.display = 'none'
            }
    }
    let lime = document.getElementById('admin-lime').innerHTML
    if(lime === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-lime').length; i++){
                document.getElementsByClassName('acc-lime')[i].style.display = 'none'
            }
    }
    let white = document.getElementById('admin-white').innerHTML
    if(white === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-white').length; i++){
                document.getElementsByClassName('acc-white')[i].style.display = 'none'
            }
    }
    let black = document.getElementById('admin-black').innerHTML
    if(black === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-black').length; i++){
                document.getElementsByClassName('acc-black')[i].style.display = 'none'
            }
    }
    let teal = document.getElementById('admin-teal').innerHTML
    if(teal === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-teal').length; i++){
                document.getElementsByClassName('acc-teal')[i].style.display = 'none'
            }
    }
}
adminColorControl()
// colorPickerDropdownBack middler
function colorPickerDropdownBack(drop){
  if(drop === 'blua'){
    document.getElementById('color-picker-dropdown-blua').style.display = 'flex'
  }
}
// ###############
// ###############
                  //price section Beginning
document.getElementById('price-banner-wrap').style.left = '0px '
                  //price section Ending
// ###############
// ###############

function goToVideo(){
   window.open("https://youtu.be/Yh4sN4AFs6o", "_blank");
}

document.getElementById('pay-for-suit-btn').style.background = 'grey'
document.getElementById('pay-for-suit-btn').style.border = '1px solid grey'
document.getElementById('pop-confirm-wrap').style.display = 'none'
document.getElementById('popup-confirm-section').style.display = 'none'

let videoCommand = false
function videoConfirm(){
  document.getElementById('blue-check-mark').style.opacity = '1'
  document.getElementById('pay-for-suit-btn').style.background = '#50aaed'
  document.getElementById('pay-for-suit-btn').style.border = '1px solid #50aaed'
  videoCommand = true
}
function mouseOver(){
  if(videoCommand === false){
    document.getElementById('pay-for-suit-btn').style.color = 'white'
  }
  if(videoCommand === true){
    document.getElementById('pay-for-suit-btn').style.color = '#50aaed'
    document.getElementById('pay-for-suit-btn').style.background = 'white'
  }
}
function mouseOut(){
  if(videoCommand === false){
    document.getElementById('pay-for-suit-btn').style.color = 'white'
  }
  if(videoCommand === true){
    document.getElementById('pay-for-suit-btn').style.color = 'white'
    document.getElementById('pay-for-suit-btn').style.background = '#50aaed'
  }
}
function hideConfirmPop(){
  document.getElementById('popup-confirm-section').style.display = 'none'
  document.getElementById('pop-confirm-wrap').style.display = 'none'
}
// COLOR PICKER TAB CONTROLLER
let dropdownCtrlBack = true
// toggle beteen measurements and colorPicker
let dropdownCtrl = true
let pannelStatus = true
function colorPickerPannelSet(type) {
  if(type === 'measurements'){
      document.getElementById('color-picker-colors').style.display = 'none'
      document.getElementById('color-picker-colors-back').style.display = 'none'
      document.getElementById('color-picker-measurements').style.display = 'flex'
      document.getElementById('color-nav-1').style.background = 'black'
      document.getElementById('color-nav-1').style.color = 'white'
      document.getElementById('color-nav-2').style.background = 'white'
      document.getElementById('color-nav-2').style.color = 'black'
      document.getElementById('color-nav-3').style.background = 'white'
      document.getElementById('color-nav-3').style.color = 'black'
  }
  if(type === 'colors'){
      document.getElementById('color-picker-measurements').style.display = 'none'
      document.getElementById('color-picker-colors-back').style.display = 'none'
      document.getElementById('color-picker-colors').style.display = 'flex'
      document.getElementById('color-nav-1').style.background = 'white'
      document.getElementById('color-nav-1').style.color = 'black'
      document.getElementById('color-nav-2').style.background = 'black'
      document.getElementById('color-nav-2').style.color = 'white'
      document.getElementById('color-nav-3').style.background = 'white'
      document.getElementById('color-nav-3').style.color = 'black'
  }
  if(type === 'colors-back'){
      document.getElementById('color-picker-measurements').style.display = 'none'
      document.getElementById('color-picker-colors').style.display = 'none'
      document.getElementById('color-picker-colors-back').style.display = 'flex'
      document.getElementById('color-nav-1').style.background = 'white'
      document.getElementById('color-nav-1').style.color = 'black'
      document.getElementById('color-nav-2').style.background = 'white'
      document.getElementById('color-nav-2').style.color = 'black'
      document.getElementById('color-nav-3').style.background = 'black'
      document.getElementById('color-nav-3').style.color = 'white'
  }
}

// color picker menu dropdown Front
function colorPickerDropdownFront(drop){
  if(drop === 'line'){
    document.getElementById('color-picker-dropdown-line').style.display = 'flex'
  }
  if(drop === 'pipe'){
    document.getElementById('color-picker-dropdown-pipe').style.display = 'flex'
  }
  if(drop === 'fc'){
    document.getElementById('color-picker-dropdown-fc').style.display = 'flex'
  }
  if(drop === 'frla'){
    document.getElementById('color-picker-dropdown-frla').style.display = 'flex'
  }
  if(drop === 'frs'){
    document.getElementById('color-picker-dropdown-frs').style.display = 'flex'
  }
  if(drop === 'frside'){
    document.getElementById('color-picker-dropdown-frside').style.display = 'flex'
  }
  if(drop === 'frc'){
    document.getElementById('color-picker-dropdown-frc').style.display = 'flex'
  }
  if(drop === 'flc'){
    document.getElementById('color-picker-dropdown-flc').style.display = 'flex'
  }
  if(drop === 'flside'){
    document.getElementById('color-picker-dropdown-flside').style.display = 'flex'
  }
  if(drop === 'fls'){
    document.getElementById('color-picker-dropdown-fls').style.display = 'flex'
  }
  if(drop === 'flla'){
    document.getElementById('color-picker-dropdown-flla').style.display = 'flex'
  }
  if(drop === 'fre'){
    document.getElementById('color-picker-dropdown-fre').style.display = 'flex'
  }
  if(drop === 'fle'){
    document.getElementById('color-picker-dropdown-fle').style.display = 'flex'
  }
  if(drop === 'frly'){
    document.getElementById('color-picker-dropdown-frly').style.display = 'flex'
  }
  if(drop === 'flly'){
    document.getElementById('color-picker-dropdown-flly').style.display = 'flex'
  }
  if(drop === 'frul'){
    document.getElementById('color-picker-dropdown-frul').style.display = 'flex'
  }
  if(drop === 'flul'){
    document.getElementById('color-picker-dropdown-flul').style.display = 'flex'
  }
  if(drop === 'frll'){
    document.getElementById('color-picker-dropdown-frll').style.display = 'flex'
  }
  if(drop === 'flll'){
    document.getElementById('color-picker-dropdown-flll').style.display = 'flex'
  }
}

function colorPickerSelectFront(color){
  //Front Left Lower leg
  if(color === 'flll-aqua'){
    console.log('here')
    document.getElementById('flll-label').style.background = '#129793'
    document.getElementById("flll-title").innerHTML = "Aqua";
    document.getElementById('flll').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-neon-green'){
    document.getElementById('flll-label').style.background = '#29f04f'
    document.getElementById("flll-title").innerHTML = "Neon Green";
    document.getElementById('flll').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-hot-pink'){
    document.getElementById('flll-label').style.background = '#e929f0'
    document.getElementById("flll-title").innerHTML = "Hot Pink";
    document.getElementById('flll').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-yellow'){
    document.getElementById('flll-label').style.background = 'yellow'
    document.getElementById("flll-title").innerHTML = "Yellow";
    document.getElementById('flll').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-maroon'){
    document.getElementById('flll-label').style.background = '#cb0039'
    document.getElementById("flll-title").innerHTML = "Maroon";
    document.getElementById('flll').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-grey'){
    document.getElementById('flll-label').style.background = '#969696'
    document.getElementById("flll-title").innerHTML = "Grey";
    document.getElementById('flll').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-navy'){
    document.getElementById('flll-label').style.background = '#152c91'
    document.getElementById("flll-title").innerHTML = "Navy";
    document.getElementById('flll').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-purple'){
    document.getElementById('flll-label').style.background = 'purple'
    document.getElementById("flll-title").innerHTML = "Purple";
    document.getElementById('flll').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-darkGreen'){
    document.getElementById('flll-label').style.background = 'Green'
    document.getElementById("flll-title").innerHTML = "Green";
    document.getElementById('flll').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-darkGrey'){
    document.getElementById('flll-label').style.background = '#494949'
    document.getElementById("flll-title").innerHTML = "Dark Grey";
    document.getElementById('flll').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-blue'){
    document.getElementById('flll-label').style.background = 'blue'
    document.getElementById("flll-title").innerHTML = "Blue";
    document.getElementById('flll').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-lime'){
    document.getElementById('flll-label').style.background = '#09b600'
    document.getElementById("flll-title").innerHTML = "Lime";
    document.getElementById('flll').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-white'){
    document.getElementById('flll-label').style.background = 'White'
    document.getElementById("flll-title").innerHTML = "White";
    document.getElementById('flll').style.fill = 'White'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-black'){
    document.getElementById('flll-label').style.background = 'Black'
    document.getElementById("flll-title").innerHTML = "Black";
    document.getElementById('flll').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-teal'){
    document.getElementById('flll-label').style.background = '#00b692'
    document.getElementById("flll-title").innerHTML = "Teal";
    document.getElementById('flll').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }

  //front right lower leg
  if(color === 'frll-aqua'){
    console.log('here')
    document.getElementById('frll-label').style.background = '#129793'
    document.getElementById("frll-title").innerHTML = "Aqua";
    document.getElementById('frll').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-neon-green'){
    document.getElementById('frll-label').style.background = '#29f04f'
    document.getElementById("frll-title").innerHTML = "Neon Green";
    document.getElementById('frll').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-hot-pink'){
    document.getElementById('frll-label').style.background = '#e929f0'
    document.getElementById("frll-title").innerHTML = "Hot Pink";
    document.getElementById('frll').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-yellow'){
    document.getElementById('frll-label').style.background = 'yellow'
    document.getElementById("frll-title").innerHTML = "Yellow";
    document.getElementById('frll').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-maroon'){
    document.getElementById('frll-label').style.background = '#cb0039'
    document.getElementById("frll-title").innerHTML = "Maroon";
    document.getElementById('frll').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-grey'){
    document.getElementById('frll-label').style.background = '#969696'
    document.getElementById("frll-title").innerHTML = "Grey";
    document.getElementById('frll').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-navy'){
    document.getElementById('frll-label').style.background = '#152c91'
    document.getElementById("frll-title").innerHTML = "Navy";
    document.getElementById('frll').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-purple'){
    document.getElementById('frll-label').style.background = 'purple'
    document.getElementById("frll-title").innerHTML = "Purple";
    document.getElementById('frll').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-darkGreen'){
    document.getElementById('frll-label').style.background = 'Green'
    document.getElementById("frll-title").innerHTML = "Green";
    document.getElementById('frll').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-darkGrey'){
    document.getElementById('frll-label').style.background = '#494949'
    document.getElementById("frll-title").innerHTML = "Dark Grey";
    document.getElementById('frll').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-blue'){
    document.getElementById('frll-label').style.background = 'blue'
    document.getElementById("frll-title").innerHTML = "Blue";
    document.getElementById('frll').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-lime'){
    document.getElementById('frll-label').style.background = '#09b600'
    document.getElementById("frll-title").innerHTML = "Lime";
    document.getElementById('frll').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-white'){
    document.getElementById('frll-label').style.background = 'White'
    document.getElementById("frll-title").innerHTML = "White";
    document.getElementById('frll').style.fill = 'White'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-black'){
    document.getElementById('frll-label').style.background = 'Black'
    document.getElementById("frll-title").innerHTML = "Black";
    document.getElementById('frll').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-teal'){
    document.getElementById('frll-label').style.background = '#00b692'
    document.getElementById("frll-title").innerHTML = "Teal";
    document.getElementById('frll').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }

  //front left upper leg
  if(color === 'flul-aqua'){
    console.log('here')
    document.getElementById('flul-label').style.background = '#129793'
    document.getElementById("flul-title").innerHTML = "Aqua";
    document.getElementById('flul').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-neon-green'){
    document.getElementById('flul-label').style.background = '#29f04f'
    document.getElementById("flul-title").innerHTML = "Neon Green";
    document.getElementById('flul').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-hot-pink'){
    document.getElementById('flul-label').style.background = '#e929f0'
    document.getElementById("flul-title").innerHTML = "Hot Pink";
    document.getElementById('flul').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-yellow'){
    document.getElementById('flul-label').style.background = 'yellow'
    document.getElementById("flul-title").innerHTML = "Yellow";
    document.getElementById('flul').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-maroon'){
    document.getElementById('flul-label').style.background = '#cb0039'
    document.getElementById("flul-title").innerHTML = "Maroon";
    document.getElementById('flul').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-grey'){
    document.getElementById('flul-label').style.background = '#969696'
    document.getElementById("flul-title").innerHTML = "Grey";
    document.getElementById('flul').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-navy'){
    document.getElementById('flul-label').style.background = '#152c91'
    document.getElementById("flul-title").innerHTML = "Navy";
    document.getElementById('flul').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-purple'){
    document.getElementById('flul-label').style.background = 'purple'
    document.getElementById("flul-title").innerHTML = "Purple";
    document.getElementById('flul').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-darkGreen'){
    document.getElementById('flul-label').style.background = 'Green'
    document.getElementById("flul-title").innerHTML = "Green";
    document.getElementById('flul').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-darkGrey'){
    document.getElementById('flul-label').style.background = '#494949'
    document.getElementById("flul-title").innerHTML = "Dark Grey";
    document.getElementById('flul').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-blue'){
    document.getElementById('flul-label').style.background = 'blue'
    document.getElementById("flul-title").innerHTML = "Blue";
    document.getElementById('flul').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-lime'){
    document.getElementById('flul-label').style.background = '#09b600'
    document.getElementById("flul-title").innerHTML = "Lime";
    document.getElementById('flul').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-white'){
    document.getElementById('flul-label').style.background = 'White'
    document.getElementById("flul-title").innerHTML = "White";
    document.getElementById('flul').style.fill = 'White'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-black'){
    document.getElementById('flul-label').style.background = 'Black'
    document.getElementById("flul-title").innerHTML = "Black";
    document.getElementById('flul').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-teal'){
    document.getElementById('flul-label').style.background = '#00b692'
    document.getElementById("flul-title").innerHTML = "Teal";
    document.getElementById('flul').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }

  //front right upper leg
  if(color === 'frul-aqua'){
    console.log('here')
    document.getElementById('frul-label').style.background = '#129793'
    document.getElementById("frul-title").innerHTML = "Aqua";
    document.getElementById('frul').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-neon-green'){
    document.getElementById('frul-label').style.background = '#29f04f'
    document.getElementById("frul-title").innerHTML = "Neon Green";
    document.getElementById('frul').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-hot-pink'){
    document.getElementById('frul-label').style.background = '#e929f0'
    document.getElementById("frul-title").innerHTML = "Hot Pink";
    document.getElementById('frul').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-yellow'){
    document.getElementById('frul-label').style.background = 'yellow'
    document.getElementById("frul-title").innerHTML = "Yellow";
    document.getElementById('frul').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-maroon'){
    document.getElementById('frul-label').style.background = '#cb0039'
    document.getElementById("frul-title").innerHTML = "Maroon";
    document.getElementById('frul').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-grey'){
    document.getElementById('frul-label').style.background = '#969696'
    document.getElementById("frul-title").innerHTML = "Grey";
    document.getElementById('frul').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-navy'){
    document.getElementById('frul-label').style.background = '#152c91'
    document.getElementById("frul-title").innerHTML = "Navy";
    document.getElementById('frul').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-purple'){
    document.getElementById('frul-label').style.background = 'purple'
    document.getElementById("frul-title").innerHTML = "Purple";
    document.getElementById('frul').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-darkGreen'){
    document.getElementById('frul-label').style.background = 'Green'
    document.getElementById("frul-title").innerHTML = "Green";
    document.getElementById('frul').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-darkGrey'){
    document.getElementById('frul-label').style.background = '#494949'
    document.getElementById("frul-title").innerHTML = "Dark Grey";
    document.getElementById('frul').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-blue'){
    document.getElementById('frul-label').style.background = 'blue'
    document.getElementById("frul-title").innerHTML = "Blue";
    document.getElementById('frul').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-lime'){
    document.getElementById('frul-label').style.background = '#09b600'
    document.getElementById("frul-title").innerHTML = "Lime";
    document.getElementById('frul').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-white'){
    document.getElementById('frul-label').style.background = 'White'
    document.getElementById("frul-title").innerHTML = "White";
    document.getElementById('frul').style.fill = 'White'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-black'){
    document.getElementById('frul-label').style.background = 'Black'
    document.getElementById("frul-title").innerHTML = "Black";
    document.getElementById('frul').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-teal'){
    document.getElementById('frul-label').style.background = '#00b692'
    document.getElementById("frul-title").innerHTML = "Teal";
    document.getElementById('frul').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }

  //front left lyrica
  if(color === 'flly-aqua'){
    console.log('here')
    document.getElementById('flly-label').style.background = '#129793'
    document.getElementById("flly-title").innerHTML = "Aqua";
    document.getElementById('flly').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-neon-green'){
    document.getElementById('flly-label').style.background = '#29f04f'
    document.getElementById("flly-title").innerHTML = "Neon Green";
    document.getElementById('flly').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-hot-pink'){
    document.getElementById('flly-label').style.background = '#e929f0'
    document.getElementById("flly-title").innerHTML = "Hot Pink";
    document.getElementById('flly').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-yellow'){
    document.getElementById('flly-label').style.background = 'yellow'
    document.getElementById("flly-title").innerHTML = "Yellow";
    document.getElementById('flly').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-maroon'){
    document.getElementById('flly-label').style.background = '#cb0039'
    document.getElementById("flly-title").innerHTML = "Maroon";
    document.getElementById('flly').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-grey'){
    document.getElementById('flly-label').style.background = '#969696'
    document.getElementById("flly-title").innerHTML = "Grey";
    document.getElementById('flly').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-navy'){
    document.getElementById('flly-label').style.background = '#152c91'
    document.getElementById("flly-title").innerHTML = "Navy";
    document.getElementById('flly').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-purple'){
    document.getElementById('flly-label').style.background = 'purple'
    document.getElementById("flly-title").innerHTML = "Purple";
    document.getElementById('flly').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-darkGreen'){
    document.getElementById('flly-label').style.background = 'Green'
    document.getElementById("flly-title").innerHTML = "Green";
    document.getElementById('flly').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-darkGrey'){
    document.getElementById('flly-label').style.background = '#494949'
    document.getElementById("flly-title").innerHTML = "Dark Grey";
    document.getElementById('flly').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-blue'){
    document.getElementById('flly-label').style.background = 'blue'
    document.getElementById("flly-title").innerHTML = "Blue";
    document.getElementById('flly').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-lime'){
    document.getElementById('flly-label').style.background = '#09b600'
    document.getElementById("flly-title").innerHTML = "Lime";
    document.getElementById('flly').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-white'){
    document.getElementById('flly-label').style.background = 'White'
    document.getElementById("flly-title").innerHTML = "White";
    document.getElementById('flly').style.fill = 'White'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-black'){
    document.getElementById('flly-label').style.background = 'Black'
    document.getElementById("flly-title").innerHTML = "Black";
    document.getElementById('flly').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-teal'){
    document.getElementById('flly-label').style.background = '#00b692'
    document.getElementById("flly-title").innerHTML = "Teal";
    document.getElementById('flly').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  //front right lyrica
  if(color === 'frly-aqua'){
    console.log('here')
    document.getElementById('frly-label').style.background = '#129793'
    document.getElementById("frly-title").innerHTML = "Aqua";
    document.getElementById('frly').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-neon-green'){
    document.getElementById('frly-label').style.background = '#29f04f'
    document.getElementById("frly-title").innerHTML = "Neon Green";
    document.getElementById('frly').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-hot-pink'){
    document.getElementById('frly-label').style.background = '#e929f0'
    document.getElementById("frly-title").innerHTML = "Hot Pink";
    document.getElementById('frly').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-yellow'){
    document.getElementById('frly-label').style.background = 'yellow'
    document.getElementById("frly-title").innerHTML = "Yellow";
    document.getElementById('frly').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-maroon'){
    document.getElementById('frly-label').style.background = '#cb0039'
    document.getElementById("frly-title").innerHTML = "Maroon";
    document.getElementById('frly').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-grey'){
    document.getElementById('frly-label').style.background = '#969696'
    document.getElementById("frly-title").innerHTML = "Grey";
    document.getElementById('frly').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-navy'){
    document.getElementById('frly-label').style.background = '#152c91'
    document.getElementById("frly-title").innerHTML = "Navy";
    document.getElementById('frly').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-purple'){
    document.getElementById('frly-label').style.background = 'purple'
    document.getElementById("frly-title").innerHTML = "Purple";
    document.getElementById('frly').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-darkGreen'){
    document.getElementById('frly-label').style.background = 'Green'
    document.getElementById("frly-title").innerHTML = "Green";
    document.getElementById('frly').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-darkGrey'){
    document.getElementById('frly-label').style.background = '#494949'
    document.getElementById("frly-title").innerHTML = "Dark Grey";
    document.getElementById('frly').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-blue'){
    document.getElementById('frly-label').style.background = 'blue'
    document.getElementById("frly-title").innerHTML = "Blue";
    document.getElementById('frly').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-lime'){
    document.getElementById('frly-label').style.background = '#09b600'
    document.getElementById("frly-title").innerHTML = "Lime";
    document.getElementById('frly').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-white'){
    document.getElementById('frly-label').style.background = 'White'
    document.getElementById("frly-title").innerHTML = "White";
    document.getElementById('frly').style.fill = 'White'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-black'){
    document.getElementById('frly-label').style.background = 'Black'
    document.getElementById("frly-title").innerHTML = "Black";
    document.getElementById('frly').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-teal'){
    document.getElementById('frly-label').style.background = '#00b692'
    document.getElementById("frly-title").innerHTML = "Teal";
    document.getElementById('frly').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }

  //front Left Elbow
  if(color === 'fle-aqua'){
    console.log('here')
    document.getElementById('fle-label').style.background = '#129793'
    document.getElementById("fle-title").innerHTML = "Aqua";
    document.getElementById('fle').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-neon-green'){
    document.getElementById('fle-label').style.background = '#29f04f'
    document.getElementById("fle-title").innerHTML = "Neon Green";
    document.getElementById('fle').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-hot-pink'){
    document.getElementById('fle-label').style.background = '#e929f0'
    document.getElementById("fle-title").innerHTML = "Hot Pink";
    document.getElementById('fle').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-yellow'){
    document.getElementById('fle-label').style.background = 'yellow'
    document.getElementById("fle-title").innerHTML = "Yellow";
    document.getElementById('fle').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-maroon'){
    document.getElementById('fle-label').style.background = '#cb0039'
    document.getElementById("fle-title").innerHTML = "Maroon";
    document.getElementById('fle').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-grey'){
    document.getElementById('fle-label').style.background = '#969696'
    document.getElementById("fle-title").innerHTML = "Grey";
    document.getElementById('fle').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-navy'){
    document.getElementById('fle-label').style.background = '#152c91'
    document.getElementById("fle-title").innerHTML = "Navy";
    document.getElementById('fle').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-purple'){
    document.getElementById('fle-label').style.background = 'purple'
    document.getElementById("fle-title").innerHTML = "Purple";
    document.getElementById('fle').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-darkGreen'){
    document.getElementById('fle-label').style.background = 'Green'
    document.getElementById("fle-title").innerHTML = "Green";
    document.getElementById('fle').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-darkGrey'){
    document.getElementById('fle-label').style.background = '#494949'
    document.getElementById("fle-title").innerHTML = "Dark Grey";
    document.getElementById('fle').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-blue'){
    document.getElementById('fle-label').style.background = 'blue'
    document.getElementById("fle-title").innerHTML = "Blue";
    document.getElementById('fle').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-lime'){
    document.getElementById('fle-label').style.background = '#09b600'
    document.getElementById("fle-title").innerHTML = "Lime";
    document.getElementById('fle').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-white'){
    document.getElementById('fle-label').style.background = 'White'
    document.getElementById("fle-title").innerHTML = "White";
    document.getElementById('fle').style.fill = 'White'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-black'){
    document.getElementById('fle-label').style.background = 'Black'
    document.getElementById("fle-title").innerHTML = "Black";
    document.getElementById('fle').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-teal'){
    document.getElementById('fle-label').style.background = '#00b692'
    document.getElementById("fle-title").innerHTML = "Teal";
    document.getElementById('fle').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-fle').style.display = 'none'
    dropdownCtrl = true
  }
  //front right elbow
  if(color === 'fre-aqua'){
    console.log('here')
    document.getElementById('fre-label').style.background = '#129793'
    document.getElementById("fre-title").innerHTML = "Aqua";
    document.getElementById('fre').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-neon-green'){
    document.getElementById('fre-label').style.background = '#29f04f'
    document.getElementById("fre-title").innerHTML = "Neon Green";
    document.getElementById('fre').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-hot-pink'){
    document.getElementById('fre-label').style.background = '#e929f0'
    document.getElementById("fre-title").innerHTML = "Hot Pink";
    document.getElementById('fre').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-yellow'){
    document.getElementById('fre-label').style.background = 'yellow'
    document.getElementById("fre-title").innerHTML = "Yellow";
    document.getElementById('fre').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-maroon'){
    document.getElementById('fre-label').style.background = '#cb0039'
    document.getElementById("fre-title").innerHTML = "Maroon";
    document.getElementById('fre').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-grey'){
    document.getElementById('fre-label').style.background = '#969696'
    document.getElementById("fre-title").innerHTML = "Grey";
    document.getElementById('fre').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-navy'){
    document.getElementById('fre-label').style.background = '#152c91'
    document.getElementById("fre-title").innerHTML = "Navy";
    document.getElementById('fre').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-purple'){
    document.getElementById('fre-label').style.background = 'purple'
    document.getElementById("fre-title").innerHTML = "Purple";
    document.getElementById('fre').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-darkGreen'){
    document.getElementById('fre-label').style.background = 'Green'
    document.getElementById("fre-title").innerHTML = "Green";
    document.getElementById('fre').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-darkGrey'){
    document.getElementById('fre-label').style.background = '#494949'
    document.getElementById("fre-title").innerHTML = "Dark Grey";
    document.getElementById('fre').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-blue'){
    document.getElementById('fre-label').style.background = 'blue'
    document.getElementById("fre-title").innerHTML = "Blue";
    document.getElementById('fre').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-lime'){
    document.getElementById('fre-label').style.background = '#09b600'
    document.getElementById("fre-title").innerHTML = "Lime";
    document.getElementById('fre').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-white'){
    document.getElementById('fre-label').style.background = 'White'
    document.getElementById("fre-title").innerHTML = "White";
    document.getElementById('fre').style.fill = 'White'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-black'){
    document.getElementById('fre-label').style.background = 'Black'
    document.getElementById("fre-title").innerHTML = "Black";
    document.getElementById('fre').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-teal'){
    document.getElementById('fre-label').style.background = '#00b692'
    document.getElementById("fre-title").innerHTML = "Teal";
    document.getElementById('fre').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  // front left lower arm
  if(color === 'flla-aqua'){
    console.log('here')
    document.getElementById('flla-label').style.background = '#129793'
    document.getElementById("flla-title").innerHTML = "Aqua";
    document.getElementById('flla').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-neon-green'){
    document.getElementById('flla-label').style.background = '#29f04f'
    document.getElementById("flla-title").innerHTML = "Neon Green";
    document.getElementById('flla').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-hot-pink'){
    document.getElementById('flla-label').style.background = '#e929f0'
    document.getElementById("flla-title").innerHTML = "Hot Pink";
    document.getElementById('flla').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-yellow'){
    document.getElementById('flla-label').style.background = 'yellow'
    document.getElementById("flla-title").innerHTML = "Yellow";
    document.getElementById('flla').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-maroon'){
    document.getElementById('flla-label').style.background = '#cb0039'
    document.getElementById("flla-title").innerHTML = "Maroon";
    document.getElementById('flla').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-grey'){
    document.getElementById('flla-label').style.background = '#969696'
    document.getElementById("flla-title").innerHTML = "Grey";
    document.getElementById('flla').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-navy'){
    document.getElementById('flla-label').style.background = '#152c91'
    document.getElementById("flla-title").innerHTML = "Navy";
    document.getElementById('flla').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-purple'){
    document.getElementById('flla-label').style.background = 'purple'
    document.getElementById("flla-title").innerHTML = "Purple";
    document.getElementById('flla').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-darkGreen'){
    document.getElementById('flla-label').style.background = 'Green'
    document.getElementById("flla-title").innerHTML = "Green";
    document.getElementById('flla').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-darkGrey'){
    document.getElementById('flla-label').style.background = '#494949'
    document.getElementById("flla-title").innerHTML = "Dark Grey";
    document.getElementById('flla').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-blue'){
    document.getElementById('flla-label').style.background = 'blue'
    document.getElementById("flla-title").innerHTML = "Blue";
    document.getElementById('flla').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-lime'){
    document.getElementById('flla-label').style.background = '#09b600'
    document.getElementById("flla-title").innerHTML = "Lime";
    document.getElementById('flla').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-white'){
    document.getElementById('flla-label').style.background = 'White'
    document.getElementById("flla-title").innerHTML = "White";
    document.getElementById('flla').style.fill = 'White'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-black'){
    document.getElementById('flla-label').style.background = 'Black'
    document.getElementById("flla-title").innerHTML = "Black";
    document.getElementById('flla').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flla-teal'){
    document.getElementById('flla-label').style.background = '#00b692'
    document.getElementById("flla-title").innerHTML = "Teal";
    document.getElementById('flla').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-flla').style.display = 'none'
    dropdownCtrl = true
  }

  //front left sholder
  if(color === 'fls-aqua'){
    console.log('here')
    document.getElementById('fls-label').style.background = '#129793'
    document.getElementById("fls-title").innerHTML = "Aqua";
    document.getElementById('fls').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-neon-green'){
    document.getElementById('fls-label').style.background = '#29f04f'
    document.getElementById("fls-title").innerHTML = "Neon Green";
    document.getElementById('fls').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-hot-pink'){
    document.getElementById('fls-label').style.background = '#e929f0'
    document.getElementById("fls-title").innerHTML = "Hot Pink";
    document.getElementById('fls').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-yellow'){
    document.getElementById('fls-label').style.background = 'yellow'
    document.getElementById("fls-title").innerHTML = "Yellow";
    document.getElementById('fls').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-maroon'){
    document.getElementById('fls-label').style.background = '#cb0039'
    document.getElementById("fls-title").innerHTML = "Maroon";
    document.getElementById('fls').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-grey'){
    document.getElementById('fls-label').style.background = '#969696'
    document.getElementById("fls-title").innerHTML = "Grey";
    document.getElementById('fls').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-navy'){
    document.getElementById('fls-label').style.background = '#152c91'
    document.getElementById("fls-title").innerHTML = "Navy";
    document.getElementById('fls').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-purple'){
    document.getElementById('fls-label').style.background = 'purple'
    document.getElementById("fls-title").innerHTML = "Purple";
    document.getElementById('fls').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-darkGreen'){
    document.getElementById('fls-label').style.background = 'Green'
    document.getElementById("fls-title").innerHTML = "Green";
    document.getElementById('fls').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-darkGrey'){
    document.getElementById('fls-label').style.background = '#494949'
    document.getElementById("fls-title").innerHTML = "Dark Grey";
    document.getElementById('fls').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-blue'){
    document.getElementById('fls-label').style.background = 'blue'
    document.getElementById("fls-title").innerHTML = "Blue";
    document.getElementById('fls').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-lime'){
    document.getElementById('fls-label').style.background = '#09b600'
    document.getElementById("fls-title").innerHTML = "Lime";
    document.getElementById('fls').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-white'){
    document.getElementById('fls-label').style.background = 'White'
    document.getElementById("fls-title").innerHTML = "White";
    document.getElementById('fls').style.fill = 'White'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-black'){
    document.getElementById('fls-label').style.background = 'Black'
    document.getElementById("fls-title").innerHTML = "Black";
    document.getElementById('fls').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fls-teal'){
    document.getElementById('fls-label').style.background = '#00b692'
    document.getElementById("fls-title").innerHTML = "Teal";
    document.getElementById('fls').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-fls').style.display = 'none'
    dropdownCtrl = true
  }

  //foront left side
  if(color === 'flside-aqua'){
    console.log('here')
    document.getElementById('flside-label').style.background = '#129793'
    document.getElementById("flside-title").innerHTML = "Aqua";
    document.getElementById('flside').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-neon-green'){
    document.getElementById('flside-label').style.background = '#29f04f'
    document.getElementById("flside-title").innerHTML = "Neon Green";
    document.getElementById('flside').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-hot-pink'){
    document.getElementById('flside-label').style.background = '#e929f0'
    document.getElementById("flside-title").innerHTML = "Hot Pink";
    document.getElementById('flside').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-yellow'){
    document.getElementById('flside-label').style.background = 'yellow'
    document.getElementById("flside-title").innerHTML = "Yellow";
    document.getElementById('flside').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-maroon'){
    document.getElementById('flside-label').style.background = '#cb0039'
    document.getElementById("flside-title").innerHTML = "Maroon";
    document.getElementById('flside').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-grey'){
    document.getElementById('flside-label').style.background = '#969696'
    document.getElementById("flside-title").innerHTML = "Grey";
    document.getElementById('flside').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-navy'){
    document.getElementById('flside-label').style.background = '#152c91'
    document.getElementById("flside-title").innerHTML = "Navy";
    document.getElementById('flside').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-purple'){
    document.getElementById('flside-label').style.background = 'purple'
    document.getElementById("flside-title").innerHTML = "Purple";
    document.getElementById('flside').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-darkGreen'){
    document.getElementById('flside-label').style.background = 'Green'
    document.getElementById("flside-title").innerHTML = "Green";
    document.getElementById('flside').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-darkGrey'){
    document.getElementById('flside-label').style.background = '#494949'
    document.getElementById("flside-title").innerHTML = "Dark Grey";
    document.getElementById('flside').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-blue'){
    document.getElementById('flside-label').style.background = 'blue'
    document.getElementById("flside-title").innerHTML = "Blue";
    document.getElementById('flside').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-lime'){
    document.getElementById('flside-label').style.background = '#09b600'
    document.getElementById("flside-title").innerHTML = "Lime";
    document.getElementById('flside').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-white'){
    document.getElementById('flside-label').style.background = 'White'
    document.getElementById("flside-title").innerHTML = "White";
    document.getElementById('flside').style.fill = 'White'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-black'){
    document.getElementById('flside-label').style.background = 'Black'
    document.getElementById("flside-title").innerHTML = "Black";
    document.getElementById('flside').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flside-teal'){
    document.getElementById('flside-label').style.background = '#00b692'
    document.getElementById("flside-title").innerHTML = "Teal";
    document.getElementById('flside').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-flside').style.display = 'none'
    dropdownCtrl = true
  }
  //Front Left chest
  if(color === 'flc-aqua'){
    console.log('here')
    document.getElementById('flc-label').style.background = '#129793'
    document.getElementById("flc-title").innerHTML = "Aqua";
    document.getElementById('flc').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-neon-green'){
    document.getElementById('flc-label').style.background = '#29f04f'
    document.getElementById("flc-title").innerHTML = "Neon Green";
    document.getElementById('flc').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-hot-pink'){
    document.getElementById('flc-label').style.background = '#e929f0'
    document.getElementById("flc-title").innerHTML = "Hot Pink";
    document.getElementById('flc').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-yellow'){
    document.getElementById('flc-label').style.background = 'yellow'
    document.getElementById("flc-title").innerHTML = "Yellow";
    document.getElementById('flc').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-maroon'){
    document.getElementById('flc-label').style.background = '#cb0039'
    document.getElementById("flc-title").innerHTML = "Maroon";
    document.getElementById('flc').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-grey'){
    document.getElementById('flc-label').style.background = '#969696'
    document.getElementById("flc-title").innerHTML = "Grey";
    document.getElementById('flc').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-navy'){
    document.getElementById('flc-label').style.background = '#152c91'
    document.getElementById("flc-title").innerHTML = "Navy";
    document.getElementById('flc').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-purple'){
    document.getElementById('flc-label').style.background = 'purple'
    document.getElementById("flc-title").innerHTML = "Purple";
    document.getElementById('flc').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-darkGreen'){
    document.getElementById('flc-label').style.background = 'Green'
    document.getElementById("flc-title").innerHTML = "Green";
    document.getElementById('flc').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-darkGrey'){
    document.getElementById('flc-label').style.background = '#494949'
    document.getElementById("flc-title").innerHTML = "Dark Grey";
    document.getElementById('flc').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-blue'){
    document.getElementById('flc-label').style.background = 'blue'
    document.getElementById("flc-title").innerHTML = "Blue";
    document.getElementById('flc').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-lime'){
    document.getElementById('flc-label').style.background = '#09b600'
    document.getElementById("flc-title").innerHTML = "Lime";
    document.getElementById('flc').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-white'){
    document.getElementById('flc-label').style.background = 'White'
    document.getElementById("flc-title").innerHTML = "White";
    document.getElementById('flc').style.fill = 'White'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-black'){
    document.getElementById('flc-label').style.background = 'Black'
    document.getElementById("flc-title").innerHTML = "Black";
    document.getElementById('flc').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flc-teal'){
    document.getElementById('flc-label').style.background = '#00b692'
    document.getElementById("flc-title").innerHTML = "Teal";
    document.getElementById('flc').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-flc').style.display = 'none'
    dropdownCtrl = true
  }

  //Front right chest
  if(color === 'frc-aqua'){
    console.log('here')
    document.getElementById('frc-label').style.background = '#129793'
    document.getElementById("frc-title").innerHTML = "Aqua";
    document.getElementById('frc').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-neon-green'){
    document.getElementById('frc-label').style.background = '#29f04f'
    document.getElementById("frc-title").innerHTML = "Neon Green";
    document.getElementById('frc').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-hot-pink'){
    document.getElementById('frc-label').style.background = '#e929f0'
    document.getElementById("frc-title").innerHTML = "Hot Pink";
    document.getElementById('frc').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-yellow'){
    document.getElementById('frc-label').style.background = 'yellow'
    document.getElementById("frc-title").innerHTML = "Yellow";
    document.getElementById('frc').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-maroon'){
    document.getElementById('frc-label').style.background = '#cb0039'
    document.getElementById("frc-title").innerHTML = "Maroon";
    document.getElementById('frc').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-grey'){
    document.getElementById('frc-label').style.background = '#969696'
    document.getElementById("frc-title").innerHTML = "Grey";
    document.getElementById('frc').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-navy'){
    document.getElementById('frc-label').style.background = '#152c91'
    document.getElementById("frc-title").innerHTML = "Navy";
    document.getElementById('frc').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-purple'){
    document.getElementById('frc-label').style.background = 'purple'
    document.getElementById("frc-title").innerHTML = "Purple";
    document.getElementById('frc').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-darkGreen'){
    document.getElementById('frc-label').style.background = 'Green'
    document.getElementById("frc-title").innerHTML = "Green";
    document.getElementById('frc').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-darkGrey'){
    document.getElementById('frc-label').style.background = '#494949'
    document.getElementById("frc-title").innerHTML = "Dark Grey";
    document.getElementById('frc').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-blue'){
    document.getElementById('frc-label').style.background = 'blue'
    document.getElementById("frc-title").innerHTML = "Blue";
    document.getElementById('frc').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-lime'){
    document.getElementById('frc-label').style.background = '#09b600'
    document.getElementById("frc-title").innerHTML = "Lime";
    document.getElementById('frc').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-white'){
    document.getElementById('frc-label').style.background = 'White'
    document.getElementById("frc-title").innerHTML = "White";
    document.getElementById('frc').style.fill = 'White'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-black'){
    document.getElementById('frc-label').style.background = 'Black'
    document.getElementById("frc-title").innerHTML = "Black";
    document.getElementById('frc').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frc-teal'){
    document.getElementById('frc-label').style.background = '#00b692'
    document.getElementById("frc-title").innerHTML = "Teal";
    document.getElementById('frc').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-frc').style.display = 'none'
    dropdownCtrl = true
  }
  //front right side
  if(color === 'frside-aqua'){
    console.log('here')
    document.getElementById('frside-label').style.background = '#129793'
    document.getElementById("frside-title").innerHTML = "Aqua";
    document.getElementById('frside').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-neon-green'){
    document.getElementById('frside-label').style.background = '#29f04f'
    document.getElementById("frside-title").innerHTML = "Neon Green";
    document.getElementById('frside').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-hot-pink'){
    document.getElementById('frside-label').style.background = '#e929f0'
    document.getElementById("frside-title").innerHTML = "Hot Pink";
    document.getElementById('frside').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-yellow'){
    document.getElementById('frside-label').style.background = 'yellow'
    document.getElementById("frside-title").innerHTML = "Yellow";
    document.getElementById('frside').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-maroon'){
    document.getElementById('frside-label').style.background = '#cb0039'
    document.getElementById("frside-title").innerHTML = "Maroon";
    document.getElementById('frside').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-grey'){
    document.getElementById('frside-label').style.background = '#969696'
    document.getElementById("frside-title").innerHTML = "Grey";
    document.getElementById('frside').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-navy'){
    document.getElementById('frside-label').style.background = '#152c91'
    document.getElementById("frside-title").innerHTML = "Navy";
    document.getElementById('frside').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-purple'){
    document.getElementById('frside-label').style.background = 'purple'
    document.getElementById("frside-title").innerHTML = "Purple";
    document.getElementById('frside').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-darkGreen'){
    document.getElementById('frside-label').style.background = 'Green'
    document.getElementById("frside-title").innerHTML = "Green";
    document.getElementById('frside').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-darkGrey'){
    document.getElementById('frside-label').style.background = '#494949'
    document.getElementById("frside-title").innerHTML = "Dark Grey";
    document.getElementById('frside').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-blue'){
    document.getElementById('frside-label').style.background = 'blue'
    document.getElementById("frside-title").innerHTML = "Blue";
    document.getElementById('frside').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-lime'){
    document.getElementById('frside-label').style.background = '#09b600'
    document.getElementById("frside-title").innerHTML = "Lime";
    document.getElementById('frside').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-white'){
    document.getElementById('frside-label').style.background = 'White'
    document.getElementById("frside-title").innerHTML = "White";
    document.getElementById('frside').style.fill = 'White'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-black'){
    document.getElementById('frside-label').style.background = 'Black'
    document.getElementById("frside-title").innerHTML = "Black";
    document.getElementById('frside').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frside-teal'){
    document.getElementById('frside-label').style.background = '#00b692'
    document.getElementById("frside-title").innerHTML = "Teal";
    document.getElementById('frside').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-frside').style.display = 'none'
    dropdownCtrl = true
  }
  // front right sholder
  if(color === 'frs-aqua'){
    console.log('here')
    document.getElementById('frs-label').style.background = '#129793'
    document.getElementById("frs-title").innerHTML = "Aqua";
    document.getElementById('frs').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-neon-green'){
    document.getElementById('frs-label').style.background = '#29f04f'
    document.getElementById("frs-title").innerHTML = "Neon Green";
    document.getElementById('frs').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-hot-pink'){
    document.getElementById('frs-label').style.background = '#e929f0'
    document.getElementById("frs-title").innerHTML = "Hot Pink";
    document.getElementById('frs').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-yellow'){
    document.getElementById('frs-label').style.background = 'yellow'
    document.getElementById("frs-title").innerHTML = "Yellow";
    document.getElementById('frs').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-maroon'){
    document.getElementById('frs-label').style.background = '#cb0039'
    document.getElementById("frs-title").innerHTML = "Maroon";
    document.getElementById('frs').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-grey'){
    document.getElementById('frs-label').style.background = '#969696'
    document.getElementById("frs-title").innerHTML = "Grey";
    document.getElementById('frs').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-navy'){
    document.getElementById('frs-label').style.background = '#152c91'
    document.getElementById("frs-title").innerHTML = "Navy";
    document.getElementById('frs').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-purple'){
    document.getElementById('frs-label').style.background = 'purple'
    document.getElementById("frs-title").innerHTML = "Purple";
    document.getElementById('frs').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-darkGreen'){
    document.getElementById('frs-label').style.background = 'Green'
    document.getElementById("frs-title").innerHTML = "Green";
    document.getElementById('frs').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-darkGrey'){
    document.getElementById('frs-label').style.background = '#494949'
    document.getElementById("frs-title").innerHTML = "Dark Grey";
    document.getElementById('frs').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-blue'){
    document.getElementById('frs-label').style.background = 'blue'
    document.getElementById("frs-title").innerHTML = "Blue";
    document.getElementById('frs').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-lime'){
    document.getElementById('frs-label').style.background = '#09b600'
    document.getElementById("frs-title").innerHTML = "Lime";
    document.getElementById('frs').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-white'){
    document.getElementById('frs-label').style.background = 'White'
    document.getElementById("frs-title").innerHTML = "White";
    document.getElementById('frs').style.fill = 'White'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-black'){
    document.getElementById('frs-label').style.background = 'Black'
    document.getElementById("frs-title").innerHTML = "Black";
    document.getElementById('frs').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frs-teal'){
    document.getElementById('frs-label').style.background = '#00b692'
    document.getElementById("frs-title").innerHTML = "Teal";
    document.getElementById('frs').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-frs').style.display = 'none'
    dropdownCtrl = true
  }

  //front right lower arm
  if(color === 'frla-aqua'){
    console.log('here')
    document.getElementById('frla-label').style.background = '#129793'
    document.getElementById("frla-title").innerHTML = "Aqua";
    document.getElementById('frla').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-neon-green'){
    document.getElementById('frla-label').style.background = '#29f04f'
    document.getElementById("frla-title").innerHTML = "Neon Green";
    document.getElementById('frla').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-hot-pink'){
    document.getElementById('frla-label').style.background = '#e929f0'
    document.getElementById("frla-title").innerHTML = "Hot Pink";
    document.getElementById('frla').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-yellow'){
    document.getElementById('frla-label').style.background = 'yellow'
    document.getElementById("frla-title").innerHTML = "Yellow";
    document.getElementById('frla').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-maroon'){
    document.getElementById('frla-label').style.background = '#cb0039'
    document.getElementById("frla-title").innerHTML = "Maroon";
    document.getElementById('frla').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-grey'){
    document.getElementById('frla-label').style.background = '#969696'
    document.getElementById("frla-title").innerHTML = "Grey";
    document.getElementById('frla').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-navy'){
    document.getElementById('frla-label').style.background = '#152c91'
    document.getElementById("frla-title").innerHTML = "Navy";
    document.getElementById('frla').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-purple'){
    document.getElementById('frla-label').style.background = 'purple'
    document.getElementById("frla-title").innerHTML = "Purple";
    document.getElementById('frla').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-darkGreen'){
    document.getElementById('frla-label').style.background = 'Green'
    document.getElementById("frla-title").innerHTML = "Green";
    document.getElementById('frla').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-darkGrey'){
    document.getElementById('frla-label').style.background = '#494949'
    document.getElementById("frla-title").innerHTML = "Dark Grey";
    document.getElementById('frla').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-blue'){
    document.getElementById('frla-label').style.background = 'blue'
    document.getElementById("frla-title").innerHTML = "Blue";
    document.getElementById('frla').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-lime'){
    document.getElementById('frla-label').style.background = '#09b600'
    document.getElementById("frla-title").innerHTML = "Lime";
    document.getElementById('frla').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-white'){
    document.getElementById('frla-label').style.background = 'White'
    document.getElementById("frla-title").innerHTML = "White";
    document.getElementById('frla').style.fill = 'White'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-black'){
    document.getElementById('frla-label').style.background = 'Black'
    document.getElementById("frla-title").innerHTML = "Black";
    document.getElementById('frla').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frla-teal'){
    document.getElementById('frla-label').style.background = '#00b692'
    document.getElementById("frla-title").innerHTML = "Teal";
    document.getElementById('frla').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-frla').style.display = 'none'
    dropdownCtrl = true
  }
  //Front collar
  if(color === 'fc-aqua'){
    console.log('here')
    document.getElementById('fc-label').style.background = '#129793'
    document.getElementById("fc-title").innerHTML = "Aqua";
    document.getElementById('fc').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-neon-green'){
    document.getElementById('fc-label').style.background = '#29f04f'
    document.getElementById("fc-title").innerHTML = "Neon Green";
    document.getElementById('fc').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-hot-pink'){
    document.getElementById('fc-label').style.background = '#e929f0'
    document.getElementById("fc-title").innerHTML = "Hot Pink";
    document.getElementById('fc').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-yellow'){
    document.getElementById('fc-label').style.background = 'yellow'
    document.getElementById("fc-title").innerHTML = "Yellow";
    document.getElementById('fc').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-maroon'){
    document.getElementById('fc-label').style.background = '#cb0039'
    document.getElementById("fc-title").innerHTML = "Maroon";
    document.getElementById('fc').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-grey'){
    document.getElementById('fc-label').style.background = '#969696'
    document.getElementById("fc-title").innerHTML = "Grey";
    document.getElementById('fc').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-navy'){
    document.getElementById('fc-label').style.background = '#152c91'
    document.getElementById("fc-title").innerHTML = "Navy";
    document.getElementById('fc').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-purple'){
    document.getElementById('fc-label').style.background = 'purple'
    document.getElementById("fc-title").innerHTML = "Purple";
    document.getElementById('fc').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-darkGreen'){
    document.getElementById('fc-label').style.background = 'Green'
    document.getElementById("fc-title").innerHTML = "Green";
    document.getElementById('fc').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-darkGrey'){
    document.getElementById('fc-label').style.background = '#494949'
    document.getElementById("fc-title").innerHTML = "Dark Grey";
    document.getElementById('fc').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-blue'){
    document.getElementById('fc-label').style.background = 'blue'
    document.getElementById("fc-title").innerHTML = "Blue";
    document.getElementById('fc').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-lime'){
    document.getElementById('fc-label').style.background = '#09b600'
    document.getElementById("fc-title").innerHTML = "Lime";
    document.getElementById('fc').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-white'){
    document.getElementById('fc-label').style.background = 'White'
    document.getElementById("fc-title").innerHTML = "White";
    document.getElementById('fc').style.fill = 'White'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-black'){
    document.getElementById('fc-label').style.background = 'Black'
    document.getElementById("fc-title").innerHTML = "Black";
    document.getElementById('fc').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-teal'){
    document.getElementById('fc-label').style.background = '#00b692'
    document.getElementById("fc-title").innerHTML = "Teal";
    document.getElementById('fc').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  //pipeing
  if(color === 'pipe-aqua'){
    console.log('here')
    document.getElementById('pipe-label').style.background = '#129793'
    document.getElementById("pipe-title").innerHTML = "Aqua";
    document.getElementById('front-pipeing').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-neon-green'){
    document.getElementById('pipe-label').style.background = '#29f04f'
    document.getElementById("pipe-title").innerHTML = "Neon Green";
    document.getElementById('front-pipeing').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-hot-pink'){
    document.getElementById('pipe-label').style.background = '#e929f0'
    document.getElementById("pipe-title").innerHTML = "Hot Pink";
    document.getElementById('front-pipeing').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-yellow'){
    document.getElementById('pipe-label').style.background = 'yellow'
    document.getElementById("pipe-title").innerHTML = "Yellow";
    document.getElementById('front-pipeing').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-maroon'){
    document.getElementById('pipe-label').style.background = '#cb0039'
    document.getElementById("pipe-title").innerHTML = "Maroon";
    document.getElementById('front-pipeing').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-grey'){
    document.getElementById('pipe-label').style.background = '#969696'
    document.getElementById("pipe-title").innerHTML = "Grey";
    document.getElementById('front-pipeing').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-navy'){
    document.getElementById('pipe-label').style.background = '#152c91'
    document.getElementById("pipe-title").innerHTML = "Navy";
    document.getElementById('front-pipeing').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-purple'){
    document.getElementById('pipe-label').style.background = 'purple'
    document.getElementById("pipe-title").innerHTML = "Purple";
    document.getElementById('front-pipeing').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-darkGreen'){
    document.getElementById('pipe-label').style.background = 'Green'
    document.getElementById("pipe-title").innerHTML = "Green";
    document.getElementById('front-pipeing').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-darkGrey'){
    document.getElementById('pipe-label').style.background = '#494949'
    document.getElementById("pipe-title").innerHTML = "Dark Grey";
    document.getElementById('front-pipeing').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-blue'){
    document.getElementById('pipe-label').style.background = 'blue'
    document.getElementById("pipe-title").innerHTML = "Blue";
    document.getElementById('front-pipeing').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-lime'){
    document.getElementById('pipe-label').style.background = '#09b600'
    document.getElementById("pipe-title").innerHTML = "Lime";
    document.getElementById('front-pipeing').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-white'){
    document.getElementById('pipe-label').style.background = 'White'
    document.getElementById("pipe-title").innerHTML = "White";
    document.getElementById('front-pipeing').style.fill = 'White'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-black'){
    document.getElementById('pipe-label').style.background = 'Black'
    document.getElementById("pipe-title").innerHTML = "Black";
    document.getElementById('front-pipeing').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'pipe-teal'){
    document.getElementById('pipe-label').style.background = '#00b692'
    document.getElementById("pipe-title").innerHTML = "Teal";
    document.getElementById('front-pipeing').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-pipe').style.display = 'none'
    dropdownCtrl = true
  }

  //Lineing
  if(color === 'line-aqua'){
    console.log('here')
    document.getElementById('line-label').style.background = '#129793'
    document.getElementById("line-title").innerHTML = "Aqua";
    document.getElementById('front-lineing').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-neon-green'){
    document.getElementById('line-label').style.background = '#29f04f'
    document.getElementById("line-title").innerHTML = "Neon Green";
    document.getElementById('front-lineing').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-hot-pink'){
    document.getElementById('line-label').style.background = '#e929f0'
    document.getElementById("line-title").innerHTML = "Hot Pink";
    document.getElementById('front-lineing').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-yellow'){
    document.getElementById('line-label').style.background = 'yellow'
    document.getElementById("line-title").innerHTML = "Yellow";
    document.getElementById('front-lineing').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-maroon'){
    document.getElementById('line-label').style.background = '#cb0039'
    document.getElementById("line-title").innerHTML = "Maroon";
    document.getElementById('front-lineing').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-grey'){
    document.getElementById('line-label').style.background = '#969696'
    document.getElementById("line-title").innerHTML = "Grey";
    document.getElementById('front-lineing').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-navy'){
    document.getElementById('line-label').style.background = '#152c91'
    document.getElementById("line-title").innerHTML = "Navy";
    document.getElementById('front-lineing').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-purple'){
    document.getElementById('line-label').style.background = 'purple'
    document.getElementById("line-title").innerHTML = "Purple";
    document.getElementById('front-lineing').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-darkGreen'){
    document.getElementById('line-label').style.background = 'Green'
    document.getElementById("line-title").innerHTML = "Green";
    document.getElementById('front-lineing').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-darkGrey'){
    document.getElementById('line-label').style.background = '#494949'
    document.getElementById("line-title").innerHTML = "Dark Grey";
    document.getElementById('front-lineing').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-blue'){
    document.getElementById('line-label').style.background = 'blue'
    document.getElementById("line-title").innerHTML = "Blue";
    document.getElementById('front-lineing').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-lime'){
    document.getElementById('line-label').style.background = '#09b600'
    document.getElementById("line-title").innerHTML = "Lime";
    document.getElementById('front-lineing').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-white'){
    document.getElementById('line-label').style.background = 'White'
    document.getElementById("line-title").innerHTML = "White";
    document.getElementById('front-lineing').style.fill = 'White'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-black'){
    document.getElementById('line-label').style.background = 'Black'
    document.getElementById("line-title").innerHTML = "Black";
    document.getElementById('front-lineing').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'line-teal'){
    document.getElementById('line-label').style.background = '#00b692'
    document.getElementById("line-title").innerHTML = "Teal";
    document.getElementById('front-lineing').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-line').style.display = 'none'
    dropdownCtrl = true
  }
}
function colorPickerSelectBack(color){
  if(color === 'tfab-polycot'){
    document.getElementById("select-tfab-title").innerHTML = "Polycotton";
    document.getElementById('color-picker-dropdown-tfab').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'tfab-taslan'){
    document.getElementById("select-tfab-title").innerHTML = "Taslan";
    document.getElementById('color-picker-dropdown-tfab').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lafab-polycot'){
    document.getElementById("select-lafab-title").innerHTML = "Polycotton";
    document.getElementById('color-picker-dropdown-lafab').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lafab-taslan'){
    document.getElementById("select-lafab-title").innerHTML = "Taslan";
    document.getElementById('color-picker-dropdown-lafab').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-aqua'){
    console.log('here')
    document.getElementById('b-label').style.background = '#129793'
    document.getElementById("b-title").innerHTML = "Aqua";
    document.getElementById('back-body').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-neon-green'){
    document.getElementById('b-label').style.background = '#29f04f'
    document.getElementById("b-title").innerHTML = "Neon Green";
    document.getElementById('back-body').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-hot-pink'){
    document.getElementById('b-label').style.background = '#e929f0'
    document.getElementById("b-title").innerHTML = "Hot Pink";
    document.getElementById('back-body').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-yellow'){
    document.getElementById('b-label').style.background = 'yellow'
    document.getElementById("b-title").innerHTML = "Yellow";
    document.getElementById('back-body').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-maroon'){
    document.getElementById('b-label').style.background = '#cb0039'
    document.getElementById("b-title").innerHTML = "Maroon";
    document.getElementById('back-body').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-grey'){
    document.getElementById('b-label').style.background = '#969696'
    document.getElementById("b-title").innerHTML = "Grey";
    document.getElementById('back-body').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-navy'){
    document.getElementById('b-label').style.background = '#152c91'
    document.getElementById("b-title").innerHTML = "Navy";
    document.getElementById('back-body').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-purple'){
    document.getElementById('b-label').style.background = 'purple'
    document.getElementById("b-title").innerHTML = "Purple";
    document.getElementById('back-body').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-darkGreen'){
    document.getElementById('b-label').style.background = 'Green'
    document.getElementById("b-title").innerHTML = "Green";
    document.getElementById('back-body').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-darkGrey'){
    document.getElementById('b-label').style.background = '#494949'
    document.getElementById("b-title").innerHTML = "Dark Grey";
    document.getElementById('back-body').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-blue'){
    document.getElementById('b-label').style.background = 'blue'
    document.getElementById("b-title").innerHTML = "Blue";
    document.getElementById('back-body').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-lime'){
    document.getElementById('b-label').style.background = '#09b600'
    document.getElementById("b-title").innerHTML = "Lime";
    document.getElementById('back-body').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-white'){
    document.getElementById('b-label').style.background = 'White'
    document.getElementById("b-title").innerHTML = "White";
    document.getElementById('back-body').style.fill = 'White'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-black'){
    document.getElementById('b-label').style.background = 'Black'
    document.getElementById("b-title").innerHTML = "Black";
    document.getElementById('back-body').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'b-teal'){
    document.getElementById('b-label').style.background = '#00b692'
    document.getElementById("b-title").innerHTML = "Teal";
    document.getElementById('back-body').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-b').style.display = 'none'
    dropdownCtrl = true
  }



}



// color picker menu dropdown Back
//
//
//
//
//
//
//
//STRIPE STRIPE
let suitPrice = 0
let suitType = "x"
function openStripeForm(price, type){
  suitPrice = price
  suitType = type
  document.getElementById('payment-confirm').innerHTML = "$" + suitPrice + "(AUD)"
  document.getElementById('type-confirm').innerHTML = suitType
  console.log(suitPrice, suitType)
  document.getElementById('stripe-form').style.display = 'flex'
  document.getElementById('stripe-form-shade').style.display = 'flex'
}
let stripe = Stripe('pk_test_kA3wS31hOAFKooRGLboUrLWf');
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
var style = {
  base: {
    // Add your base input styles here. For example:
    fontSize: '16px',
    lineHeight: '24px'
  }
};

// Create an instance of the card Element
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>
card.mount('#card-element');
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Create a token or display an error when the form is submitted.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      alert('Oh Dear, Seems something went wrong! Try again and double check your card info!')
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {

      console.log(result)
      // Send the token to your server
      stripeTokenHandler(result.token);
    }
  });
});
//I'm the server ;)
function apiPoster(info){
  console.log('info in poster',info)
  $.ajax('http://localhost:8080/api/apetest',{
   data : JSON.stringify(info),
   contentType : 'application/json',
   type : 'POST',
 }).then(function(res){
   console.log(res.charge.id)
   console.log(res.charge)
   let newCustomer = {
     id: res.charge.id,
     amount: res.charge.amount/100,
     paid: res.charge.paid,
   }
   hideConfirmPop()
   document.getElementById('loading-payment').style.display = 'none'
   alert('Congrats! you just got yourself a new suit! you paied $' + newCustomer.amount + ' (AUD). your customer satisfaction ID is '+ newCustomer.id )

 });
 document.getElementById('loading-payment').style.display = 'flex'
}
function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);
  console.log('submitted and done', token)
  let charger = {}
  charger.amount = suitPrice * 100
  charger.token = token.id
  apiPoster(charger)
}

function hideStripeForm(){
  document.getElementById('stripe-form').style.display = 'none'
  document.getElementById('stripe-form-shade').style.display = 'none'
  console.log('tester')
}
