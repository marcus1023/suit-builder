function collect(){
  function checkCollect(){
    if(document.getElementById("select-tfab-title").innerHTML && document.getElementById("select-lafab-title").innerHTML && document.getElementById("HIPS_CIRCUMFERENCE").value && document.getElementById("IN_SEAM_LENGTH").value && document.getElementById("THIGH_CIRCUMFERENCE").value && document.getElementById("CALF_CIRCUMFERENCE").value && document.getElementById("CROTCH_TO_KNEE_LENGTH").value && document.getElementById("LOWER_LEG_LENGTH").value && document.getElementById("ANKLE_CIRCUMFERENCE").value && document.getElementById("FULL_ARM_BENT_90_LENGTH").value && document.getElementById("BICEP_CIRCUMFERENCE").value && document.getElementById("FOREARM_CIRCUMFERENCE").value && document.getElementById("WRIST_CIRCUMFERENCE").value && document.getElementById("FOOT_TO_SHOULDER_LENGTH").value && document.getElementById("WAIST_CIRCUMFERENCE").value && document.getElementById("NECK_CIRCUMFERENCE").value && document.getElementById("SHOULDER_TO_SHOULDER").value && document.getElementById("SHOULDER_TO_ELBOW_LENGTH").value && document.getElementById("ELBOW_TO_WRIST_LENGTH").value && document.getElementById("CHEST_CIRCUMFERENCE").value && document.getElementById("input-name").value && document.getElementById("input-email").value && document.getElementById("input_phone").value && document.getElementById("input_address").value && document.getElementById("input_city").value && document.getElementById("input_state").value && document.getElementById("input_country").value && document.getElementById("input_zip").value){
      document.getElementById('pop-confirm-wrap').style.display = 'flex'
      document.getElementById('popup-confirm-section').style.display = 'flex'
    }else{
      alert('Please Fill out all Measurements and Contact Info before continuing to checkout')
    }
  }
  checkCollect();
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
  document.getElementById("form-group-c_33n7r").getElementsByClassName("form-control")[0].value = allFrontValues
  document.getElementById("form-group-comment").getElementsByClassName("form-control")[0].value = allBackValues
  document.getElementById("form-group-c_z8zee").getElementsByClassName("form-control")[0].value = allMeasurements

// contact Info
  let nameI = " Full Name: " + document.getElementById("input-name").value + " / "
  let emailI = " Email: " + document.getElementById("input-email").value + " / "
  let input_phone = " Phone: " + document.getElementById("input_phone").value + " / "
  let input_address = " Address: " + document.getElementById("input_address").value + " / "
  let input_city = " City: " + document.getElementById("input_city").value + " / "
  let input_state = " State: " + document.getElementById("input_state").value + " / "
  let input_country = " Country: " + document.getElementById("input_country").value + " / "
  let input_zip = " Zip: " + document.getElementById("input_zip").value + " / "
  let input_dcode = " Distributor Code: " + document.getElementById("input_dcode").value + " / "
  let randNum = Math.random()*100000000000000;

  let contactInfo = nameI+emailI+input_phone+input_address+input_city+input_state+input_country+input_zip+input_dcode
  document.getElementById("form-group-c_d9lp9").getElementsByClassName("form-control")[0].value = contactInfo

console.log(allFrontValues)
console.log(allBackValues)
console.log(allMeasurements)
  document.getElementById("form-group-name_first").getElementsByClassName("form-control")[0].value = nameI
  document.getElementById("form-group-email").getElementsByClassName("form-control")[0].value = "Ignore@email"+randNum+".com"
  document.getElementById("form-group-c_9cadg").getElementsByClassName("form-control")[0].value = emailI
}
// colorPickerDropdownBack middler
function colorPickerDropdownBack(drop){
  if(drop === 'blua'){
    document.getElementById('color-picker-dropdown-blua').style.display = 'flex'
  }
  if(drop === 'b'){
    document.getElementById('color-picker-dropdown-b').style.display = 'flex'
  }
  if(drop === 'brua'){
    document.getElementById('color-picker-dropdown-brua').style.display = 'flex'
  }
  if(drop === 'blla'){
    document.getElementById('color-picker-dropdown-blla').style.display = 'flex'
  }
  if(drop === 'brla'){
    document.getElementById('color-picker-dropdown-brla').style.display = 'flex'
  }
  if(drop === 'bl'){
    document.getElementById('color-picker-dropdown-bl').style.display = 'flex'
  }
  if(drop === 'bh'){
    document.getElementById('color-picker-dropdown-bh').style.display = 'flex'
  }
  if(drop === 'tfab'){
    document.getElementById('color-picker-dropdown-tfab').style.display = 'flex'
  }
  if(drop === 'lafab'){
    document.getElementById('color-picker-dropdown-lafab').style.display = 'flex'
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
  if(drop === 'collar'){
    document.getElementById('color-picker-dropdown-collar').style.display = 'flex'
  }
  if(drop === 'grips'){
    document.getElementById('color-picker-dropdown-grippers').style.display = 'flex'
  }
  if(drop === 'front-right'){
    document.getElementById('color-picker-dropdown-front-right').style.display = 'flex'
  }
  if(drop === 'front-left'){
    document.getElementById('color-picker-dropdown-front-left').style.display = 'flex'
  }
  if(drop === 'flla'){
    document.getElementById('color-picker-dropdown-flla').style.display = 'flex'
  }
  if(drop === 'frla'){
    document.getElementById('color-picker-dropdown-frla').style.display = 'flex'
  }
  if(drop === 'flul'){
    document.getElementById('color-picker-dropdown-flul').style.display = 'flex'
  }
  if(drop === 'frul'){
    document.getElementById('color-picker-dropdown-frul').style.display = 'flex'
  }
  if(drop === 'flk'){
    document.getElementById('color-picker-dropdown-flk').style.display = 'flex'
  }
  if(drop === 'frk'){
    document.getElementById('color-picker-dropdown-frk').style.display = 'flex'
  }
  if(drop === 'flll'){
    document.getElementById('color-picker-dropdown-flll').style.display = 'flex'
  }
  if(drop === 'frll'){
    document.getElementById('color-picker-dropdown-frll').style.display = 'flex'
  }
}

function colorPickerSelectFront(color){
  //collar
  console.log(color)
  if(color === 'c-aqua'){
    console.log('here')
    document.getElementById('collar-label').style.background = '#129793'
    document.getElementById("collar-title").innerHTML = "Aqua";
    document.getElementById('front-collar').style.fill = '#129793'
    document.getElementById('back-collar').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-red'){
    console.log('here')
    document.getElementById('collar-label').style.background = 'red'
    document.getElementById("collar-title").innerHTML = "Red";
    document.getElementById('front-collar').style.fill = 'red'
    document.getElementById('back-collar').style.fill = 'red'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-neon-green'){
    document.getElementById('collar-label').style.background = '#29f04f'
    document.getElementById("collar-title").innerHTML = "Neon Green";
    document.getElementById('front-collar').style.fill = '#29f04f'
    document.getElementById('back-collar').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-hot-pink'){
    document.getElementById('collar-label').style.background = '#e929f0'
    document.getElementById("collar-title").innerHTML = "Hot Pink";
    document.getElementById('front-collar').style.fill = '#e929f0'
    document.getElementById('back-collar').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-yellow'){
    document.getElementById('collar-label').style.background = 'yellow'
    document.getElementById("collar-title").innerHTML = "Yellow";
    document.getElementById('front-collar').style.fill = 'yellow'
    document.getElementById('back-collar').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-maroon'){
    document.getElementById('collar-label').style.background = '#cb0039'
    document.getElementById("collar-title").innerHTML = "Maroon";
    document.getElementById('front-collar').style.fill = '#cb0039'
    document.getElementById('back-collar').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-grey'){
    document.getElementById('collar-label').style.background = '#969696'
    document.getElementById("collar-title").innerHTML = "Grey";
    document.getElementById('front-collar').style.fill = '#969696'
    document.getElementById('back-collar').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-navy'){
    document.getElementById('collar-label').style.background = '#152c91'
    document.getElementById("collar-title").innerHTML = "Navy";
    document.getElementById('front-collar').style.fill = '#152c91'
    document.getElementById('back-collar').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-purple'){
    document.getElementById('collar-label').style.background = 'purple'
    document.getElementById("collar-title").innerHTML = "Purple";
    document.getElementById('front-collar').style.fill = 'purple'
    document.getElementById('back-collar').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-darkGreen'){
    document.getElementById('collar-label').style.background = 'Green'
    document.getElementById("collar-title").innerHTML = "Green";
    document.getElementById('front-collar').style.fill = 'Green'
    document.getElementById('back-collar').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-darkGrey'){
    document.getElementById('collar-label').style.background = '#494949'
    document.getElementById("collar-title").innerHTML = "Dark Grey";
    document.getElementById('front-collar').style.fill = '#494949'
    document.getElementById('back-collar').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-blue'){
    document.getElementById('collar-label').style.background = 'blue'
    document.getElementById("collar-title").innerHTML = "Blue";
    document.getElementById('front-collar').style.fill = 'blue'
    document.getElementById('back-collar').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-lime'){
    document.getElementById('collar-label').style.background = '#09b600'
    document.getElementById("collar-title").innerHTML = "Lime";
    document.getElementById('front-collar').style.fill = '#09b600'
    document.getElementById('back-collar').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-white'){
    document.getElementById('collar-label').style.background = 'White'
    document.getElementById("collar-title").innerHTML = "White";
    document.getElementById('front-collar').style.fill = 'White'
    document.getElementById('back-collar').style.fill = 'White'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-black'){
    document.getElementById('collar-label').style.background = 'Black'
    document.getElementById("collar-title").innerHTML = "Black";
    document.getElementById('front-collar').style.fill = 'Black'
    document.getElementById('back-collar').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-teal'){
    document.getElementById('collar-label').style.background = '#00b692'
    document.getElementById("collar-title").innerHTML = "Teal";
    document.getElementById('front-collar').style.fill = '#00b692'
    document.getElementById('back-collar').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  //Grippers
  if(color === 'grip-aqua'){
    console.log('here')
    document.getElementById('gripers-label').style.background = '#129793'
    document.getElementById("gripers-title").innerHTML = "Aqua";
    document.getElementById('front-left-arm-gripper').style.fill = '#129793'
    document.getElementById('front-right-arm-gripper').style.fill = '#129793'
    document.getElementById('front-left-leg-gripper').style.fill = '#129793'
    document.getElementById('front-right-leg-gripper').style.fill = '#129793'
    document.getElementById('back-left-arm-griper').style.fill = '#129793'
    document.getElementById('back-right-arm-griper').style.fill = '#129793'
    document.getElementById('back-leg-grippers').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-red'){
    console.log('here')
    document.getElementById('gripers-label').style.background = 'red'
    document.getElementById("gripers-title").innerHTML = 'Red';
    document.getElementById('front-left-arm-gripper').style.fill = 'red'
    document.getElementById('front-right-arm-gripper').style.fill = 'red'
    document.getElementById('front-left-leg-gripper').style.fill = 'red'
    document.getElementById('front-right-leg-gripper').style.fill = 'red'
    document.getElementById('back-left-arm-griper').style.fill = 'red'
    document.getElementById('back-right-arm-griper').style.fill = 'red'
    document.getElementById('back-leg-grippers').style.fill = 'red'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-neon-green'){
    document.getElementById('gripers-label').style.background = '#29f04f'
    document.getElementById("gripers-title").innerHTML = "Neon Green";
    document.getElementById('front-left-arm-gripper').style.fill = '#29f04f'
    document.getElementById('front-right-arm-gripper').style.fill = '#29f04f'
    document.getElementById('front-left-leg-gripper').style.fill = '#29f04f'
    document.getElementById('front-right-leg-gripper').style.fill = '#29f04f'
    document.getElementById('back-left-arm-griper').style.fill = '#29f04f'
    document.getElementById('back-right-arm-griper').style.fill = '#29f04f'
    document.getElementById('back-leg-grippers').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-red'){
    document.getElementById('gripers-label').style.background = 'red'
    document.getElementById("gripers-title").innerHTML = "Red";
    document.getElementById('front-left-arm-gripper').style.fill = 'red'
    document.getElementById('front-right-arm-gripper').style.fill = 'red'
    document.getElementById('front-left-leg-gripper').style.fill = 'red'
    document.getElementById('front-right-leg-gripper').style.fill = 'red'
    document.getElementById('back-left-arm-griper').style.fill = 'red'
    document.getElementById('back-right-arm-griper').style.fill = 'red'
    document.getElementById('back-leg-grippers').style.fill = 'red'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-hot-pink'){
    document.getElementById('gripers-label').style.background = '#e929f0'
    document.getElementById("gripers-title").innerHTML = "Hot Pink";
    document.getElementById('front-left-arm-gripper').style.fill = '#e929f0'
    document.getElementById('front-right-arm-gripper').style.fill = '#e929f0'
    document.getElementById('front-left-leg-gripper').style.fill = '#e929f0'
    document.getElementById('front-right-leg-gripper').style.fill = '#e929f0'
    document.getElementById('back-left-arm-griper').style.fill = '#e929f0'
    document.getElementById('back-right-arm-griper').style.fill = '#e929f0'
    document.getElementById('back-leg-grippers').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-yellow'){
    document.getElementById('gripers-label').style.background = 'yellow'
    document.getElementById("gripers-title").innerHTML = "Yellow";
    document.getElementById('front-left-arm-gripper').style.fill = 'yellow'
    document.getElementById('front-right-arm-gripper').style.fill = 'yellow'
    document.getElementById('front-left-leg-gripper').style.fill = 'yellow'
    document.getElementById('front-right-leg-gripper').style.fill = 'yellow'
    document.getElementById('back-left-arm-griper').style.fill = 'yellow'
    document.getElementById('back-right-arm-griper').style.fill = 'yellow'
    document.getElementById('back-leg-grippers').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-maroon'){
    document.getElementById('gripers-label').style.background = '#cb0039'
    document.getElementById("gripers-title").innerHTML = "Maroon";
    document.getElementById('front-left-arm-gripper').style.fill = '#cb0039'
    document.getElementById('front-right-arm-gripper').style.fill = '#cb0039'
    document.getElementById('front-left-leg-gripper').style.fill = '#cb0039'
    document.getElementById('front-right-leg-gripper').style.fill = '#cb0039'
    document.getElementById('back-left-arm-griper').style.fill = '#cb0039'
    document.getElementById('back-right-arm-griper').style.fill = '#cb0039'
    document.getElementById('back-leg-grippers').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-grey'){
    document.getElementById('gripers-label').style.background = '#969696'
    document.getElementById("gripers-title").innerHTML = "Grey";
    document.getElementById('front-left-arm-gripper').style.fill = '#969696'
    document.getElementById('front-right-arm-gripper').style.fill = '#969696'
    document.getElementById('front-left-leg-gripper').style.fill = '#969696'
    document.getElementById('front-right-leg-gripper').style.fill = '#969696'
    document.getElementById('back-left-arm-griper').style.fill = '#969696'
    document.getElementById('back-right-arm-griper').style.fill = '#969696'
    document.getElementById('back-leg-grippers').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-navy'){
    document.getElementById('gripers-label').style.background = '#152c91'
    document.getElementById("gripers-title").innerHTML = "Navy";
    document.getElementById('front-left-arm-gripper').style.fill = '#152c91'
    document.getElementById('front-right-arm-gripper').style.fill = '#152c91'
    document.getElementById('front-left-leg-gripper').style.fill = '#152c91'
    document.getElementById('front-right-leg-gripper').style.fill = '#152c91'
    document.getElementById('back-left-arm-griper').style.fill = '#152c91'
    document.getElementById('back-right-arm-griper').style.fill = '#152c91'
    document.getElementById('back-leg-grippers').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-purple'){
    document.getElementById('gripers-label').style.background = 'purple'
    document.getElementById("gripers-title").innerHTML = "Purple";
    document.getElementById('front-left-arm-gripper').style.fill = 'purple'
    document.getElementById('front-right-arm-gripper').style.fill = '#purple'
    document.getElementById('front-left-leg-gripper').style.fill = '#purple'
    document.getElementById('front-right-leg-gripper').style.fill = '#purple'
    document.getElementById('back-left-arm-griper').style.fill = '#purple'
    document.getElementById('back-right-arm-griper').style.fill = '#purple'
    document.getElementById('back-leg-grippers').style.fill = '#purple'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-darkGreen'){
    document.getElementById('gripers-label').style.background = 'Green'
    document.getElementById("gripers-title").innerHTML = "Green";
    document.getElementById('front-left-arm-gripper').style.fill = 'Green'
    document.getElementById('front-right-arm-gripper').style.fill = 'Green'
    document.getElementById('front-left-leg-gripper').style.fill = 'Green'
    document.getElementById('front-right-leg-gripper').style.fill = 'Green'
    document.getElementById('back-left-arm-griper').style.fill = 'Green'
    document.getElementById('back-right-arm-griper').style.fill = 'Green'
    document.getElementById('back-leg-grippers').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-darkGrey'){
    document.getElementById('gripers-label').style.background = '#494949'
    document.getElementById("gripers-title").innerHTML = "Dark Grey";
    document.getElementById('front-left-arm-gripper').style.fill = '#494949'
    document.getElementById('front-right-arm-gripper').style.fill = '#494949'
    document.getElementById('front-left-leg-gripper').style.fill = '#494949'
    document.getElementById('front-right-leg-gripper').style.fill = '#494949'
    document.getElementById('back-left-arm-griper').style.fill = '#494949'
    document.getElementById('back-right-arm-griper').style.fill = '#494949'
    document.getElementById('back-leg-grippers').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-blue'){
    document.getElementById('gripers-label').style.background = 'blue'
    document.getElementById("gripers-title").innerHTML = "Blue";
    document.getElementById('front-left-arm-gripper').style.fill = 'blue'
    document.getElementById('front-right-arm-gripper').style.fill = 'blue'
    document.getElementById('front-left-leg-gripper').style.fill = 'blue'
    document.getElementById('front-right-leg-gripper').style.fill = 'blue'
    document.getElementById('back-left-arm-griper').style.fill = 'blue'
    document.getElementById('back-right-arm-griper').style.fill = 'blue'
    document.getElementById('back-leg-grippers').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-lime'){
    document.getElementById('gripers-label').style.background = '#09b600'
    document.getElementById("gripers-title").innerHTML = "Lime";
    document.getElementById('front-left-arm-gripper').style.fill = '#09b600'
    document.getElementById('front-right-arm-gripper').style.fill = '#09b600'
    document.getElementById('front-left-leg-gripper').style.fill = '#09b600'
    document.getElementById('front-right-leg-gripper').style.fill = '#09b600'
    document.getElementById('back-left-arm-griper').style.fill = '#09b600'
    document.getElementById('back-right-arm-griper').style.fill = '#09b600'
    document.getElementById('back-leg-grippers').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-white'){
    document.getElementById('gripers-label').style.background = 'White'
    document.getElementById("gripers-title").innerHTML = "White";
    document.getElementById('front-left-arm-gripper').style.fill = 'White'
    document.getElementById('front-right-arm-gripper').style.fill = '#29f04f'
    document.getElementById('front-left-leg-gripper').style.fill = 'white'
    document.getElementById('front-right-leg-gripper').style.fill = 'white'
    document.getElementById('back-left-arm-griper').style.fill = 'white'
    document.getElementById('back-right-arm-griper').style.fill = 'white'
    document.getElementById('back-leg-grippers').style.fill = 'white'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-black'){
    document.getElementById('gripers-label').style.background = 'Black'
    document.getElementById("gripers-title").innerHTML = "Black";
    document.getElementById('front-left-arm-gripper').style.fill = 'Black'
    document.getElementById('front-right-arm-gripper').style.fill = 'black'
    document.getElementById('front-left-leg-gripper').style.fill = 'black'
    document.getElementById('front-right-leg-gripper').style.fill = 'black'
    document.getElementById('back-left-arm-griper').style.fill = 'black'
    document.getElementById('back-right-arm-griper').style.fill = 'black'
    document.getElementById('back-leg-grippers').style.fill = 'black'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'grip-teal'){
    document.getElementById('gripers-label').style.background = '#00b692'
    document.getElementById("gripers-title").innerHTML = "Teal";
    document.getElementById('front-left-arm-gripper').style.fill = '#00b692';
    document.getElementById('front-right-arm-gripper').style.fill = '#00b692'
    document.getElementById('front-left-leg-gripper').style.fill = '#00b692'
    document.getElementById('front-right-leg-gripper').style.fill = '#00b692'
    document.getElementById('back-left-arm-griper').style.fill = '#00b692'
    document.getElementById('back-right-arm-griper').style.fill = '#00b692'
    document.getElementById('back-leg-grippers').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-grippers').style.display = 'none'
    dropdownCtrl = true
  }
// front right
if(color === 'front-left-aqua'){
  console.log('here')
  document.getElementById('front-left-label').style.background = '#129793'
  document.getElementById("front-left-title").innerHTML = "Aqua";
  document.getElementById('front-left-chest').style.fill = '#129793'
  document.getElementById('chute-out-text').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-red'){
  console.log('here')
  document.getElementById('front-left-label').style.background = 'red'
  document.getElementById("front-left-title").innerHTML = "Red";
  document.getElementById('front-left-chest').style.fill = 'red'
  document.getElementById('chute-out-text').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-neon-green'){
  document.getElementById('front-left-label').style.background = '#29f04f'
  document.getElementById("front-left-title").innerHTML = "Neon Green";
  document.getElementById('front-left-chest').style.fill = '#29f04f'
  document.getElementById('chute-out-text').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-hot-pink'){
  document.getElementById('front-left-label').style.background = '#e929f0'
  document.getElementById("front-left-title").innerHTML = "Hot Pink";
  document.getElementById('front-left-chest').style.fill = '#e929f0'
  document.getElementById('chute-out-text').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-yellow'){
  document.getElementById('front-left-label').style.background = 'yellow'
  document.getElementById("front-left-title").innerHTML = "Yellow";
  document.getElementById('front-left-chest').style.fill = 'yellow'
  document.getElementById('chute-out-text').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-maroon'){
  document.getElementById('front-left-label').style.background = '#cb0039'
  document.getElementById("front-left-title").innerHTML = "Maroon";
  document.getElementById('front-left-chest').style.fill = '#cb0039'
  document.getElementById('chute-out-text').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-grey'){
  document.getElementById('front-left-label').style.background = '#969696'
  document.getElementById("front-left-title").innerHTML = "Grey";
  document.getElementById('front-left-chest').style.fill = '#969696'
  document.getElementById('chute-out-text').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-navy'){
  document.getElementById('front-left-label').style.background = '#152c91'
  document.getElementById("front-left-title").innerHTML = "Navy";
  document.getElementById('front-left-chest').style.fill = '#152c91'
  document.getElementById('chute-out-text').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-purple'){
  document.getElementById('front-left-label').style.background = 'purple'
  document.getElementById("front-left-title").innerHTML = "Purple";
  document.getElementById('front-left-chest').style.fill = 'purple'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-darkGreen'){
  document.getElementById('front-left-label').style.background = 'Green'
  document.getElementById("front-left-title").innerHTML = "Green";
  document.getElementById('front-left-chest').style.fill = 'Green'
  document.getElementById('chute-out-text').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-darkGrey'){
  document.getElementById('front-left-label').style.background = '#494949'
  document.getElementById("front-left-title").innerHTML = "Dark Grey";
  document.getElementById('front-left-chest').style.fill = '#494949'
  document.getElementById('chute-out-text').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-blue'){
  document.getElementById('front-left-label').style.background = 'blue'
  document.getElementById("front-left-title").innerHTML = "Blue";
  document.getElementById('front-left-chest').style.fill = 'blue'
  document.getElementById('chute-out-text').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-lime'){
  document.getElementById('front-left-label').style.background = '#09b600'
  document.getElementById("front-left-title").innerHTML = "Lime";
  document.getElementById('front-left-chest').style.fill = '#09b600'
  document.getElementById('chute-out-text').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-white'){
  document.getElementById('front-left-label').style.background = 'White'
  document.getElementById("front-left-title").innerHTML = "White";
  document.getElementById('front-left-chest').style.fill = 'White'
  document.getElementById('chute-out-text').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-black'){
  document.getElementById('front-left-label').style.background = 'Black'
  document.getElementById("front-left-title").innerHTML = "Black";
  document.getElementById('front-left-chest').style.fill = 'Black'
  document.getElementById('chute-out-text').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-teal'){
  document.getElementById('front-left-label').style.background = '#00b692'
  document.getElementById("front-left-title").innerHTML = "Teal";
  document.getElementById('front-left-chest').style.fill = '#00b692'
  document.getElementById('chute-out-text').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
//Front left
if(color === 'front-right-aqua'){
  console.log('here')
  document.getElementById('front-right-label').style.background = '#129793'
  document.getElementById("front-right-title").innerHTML = "Aqua";
  document.getElementById('front-right-chest').style.fill = '#129793'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-red'){
  console.log('here')
  document.getElementById('front-right-label').style.background = 'red'
  document.getElementById("front-right-title").innerHTML = "Red";
  document.getElementById('front-right-chest').style.fill = 'red'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-neon-green'){
  document.getElementById('front-right-label').style.background = '#29f04f'
  document.getElementById("front-right-title").innerHTML = "Neon Green";
  document.getElementById('front-right-chest').style.fill = '#29f04f'
  document.getElementById('caos-leg-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-hot-pink'){
  document.getElementById('front-right-label').style.background = '#e929f0'
  document.getElementById("front-right-title").innerHTML = "Hot Pink";
  document.getElementById('front-right-chest').style.fill = '#e929f0'
  document.getElementById('caos-leg-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-yellow'){
  document.getElementById('front-right-label').style.background = 'yellow'
  document.getElementById("front-right-title").innerHTML = "Yellow";
  document.getElementById('front-right-chest').style.fill = 'yellow'
  document.getElementById('caos-leg-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-maroon'){
  document.getElementById('front-right-label').style.background = '#cb0039'
  document.getElementById("front-right-title").innerHTML = "Maroon";
  document.getElementById('front-right-chest').style.fill = '#cb0039'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-grey'){
  document.getElementById('front-right-label').style.background = '#969696'
  document.getElementById("front-right-title").innerHTML = "Grey";
  document.getElementById('front-right-chest').style.fill = '#969696'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-navy'){
  document.getElementById('front-right-label').style.background = '#152c91'
  document.getElementById("front-right-title").innerHTML = "Navy";
  document.getElementById('front-right-chest').style.fill = '#152c91'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-purple'){
  document.getElementById('front-right-label').style.background = 'purple'
  document.getElementById("front-right-title").innerHTML = "Purple";
  document.getElementById('front-right-chest').style.fill = 'purple'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-darkGreen'){
  document.getElementById('front-right-label').style.background = 'Green'
  document.getElementById("front-right-title").innerHTML = "Green";
  document.getElementById('front-right-chest').style.fill = 'Green'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-darkGrey'){
  document.getElementById('front-right-label').style.background = '#494949'
  document.getElementById("front-right-title").innerHTML = "Dark Grey";
  document.getElementById('front-right-chest').style.fill = '#494949'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-blue'){
  document.getElementById('front-right-label').style.background = 'blue'
  document.getElementById("front-right-title").innerHTML = "Blue";
  document.getElementById('front-right-chest').style.fill = 'blue'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-lime'){
  document.getElementById('front-right-label').style.background = '#09b600'
  document.getElementById("front-right-title").innerHTML = "Lime";
  document.getElementById('front-right-chest').style.fill = '#09b600'
  document.getElementById('caos-leg-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-white'){
  document.getElementById('front-right-label').style.background = 'White'
  document.getElementById("front-right-title").innerHTML = "White";
  document.getElementById('front-right-chest').style.fill = 'White'
  document.getElementById('caos-leg-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-black'){
  document.getElementById('front-right-label').style.background = 'Black'
  document.getElementById("front-right-title").innerHTML = "Black";
  document.getElementById('front-right-chest').style.fill = 'Black'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-teal'){
  document.getElementById('front-right-label').style.background = '#00b692'
  document.getElementById("front-right-title").innerHTML = "Teal";
  document.getElementById('front-right-chest').style.fill = '#00b692'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
//front left lower arm
if(color === 'flla-aqua'){
  console.log('here')
  document.getElementById('front-left-lower-arm-label').style.background = '#129793'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Aqua";
  document.getElementById('front-left-lower-arm').style.fill = '#129793'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-red'){
  console.log('here')
  document.getElementById('front-left-lower-arm-label').style.background = 'red'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Red";
  document.getElementById('front-left-lower-arm').style.fill = 'red'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-neon-green'){
  document.getElementById('front-left-lower-arm-label').style.background = '#29f04f'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Neon Green";
  document.getElementById('front-left-lower-arm').style.fill = '#29f04f'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-hot-pink'){
  document.getElementById('front-left-lower-arm-label').style.background = '#e929f0'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Hot Pink";
  document.getElementById('front-left-lower-arm').style.fill = '#e929f0'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-yellow'){
  document.getElementById('front-left-lower-arm-label').style.background = 'yellow'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Yellow";
  document.getElementById('front-left-lower-arm').style.fill = 'yellow'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-maroon'){
  document.getElementById('front-left-lower-arm-label').style.background = '#cb0039'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Maroon";
  document.getElementById('front-left-lower-arm').style.fill = '#cb0039'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-grey'){
  document.getElementById('front-left-lower-arm-label').style.background = '#969696'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Grey";
  document.getElementById('front-left-lower-arm').style.fill = '#969696'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-navy'){
  document.getElementById('front-left-lower-arm-label').style.background = '#152c91'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Navy";
  document.getElementById('front-left-lower-arm').style.fill = '#152c91'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-purple'){
  document.getElementById('front-left-lower-arm-label').style.background = 'purple'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Purple";
  document.getElementById('front-left-lower-arm').style.fill = 'purple'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-darkGreen'){
  document.getElementById('front-left-lower-arm-label').style.background = 'Green'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Green";
  document.getElementById('front-left-lower-arm').style.fill = 'Green'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-darkGrey'){
  document.getElementById('front-left-lower-arm-label').style.background = '#494949'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Dark Grey";
  document.getElementById('front-left-lower-arm').style.fill = '#494949'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-blue'){
  document.getElementById('front-left-lower-arm-label').style.background = 'blue'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Blue";
  document.getElementById('front-left-lower-arm').style.fill = 'blue'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-lime'){
  document.getElementById('front-left-lower-arm-label').style.background = '#09b600'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Lime";
  document.getElementById('front-left-lower-arm').style.fill = '#09b600'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-white'){
  document.getElementById('front-left-lower-arm-label').style.background = 'White'
  document.getElementById("front-left-lower-arm-title").innerHTML = "White";
  document.getElementById('front-left-lower-arm').style.fill = 'White'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-black'){
  document.getElementById('front-left-lower-arm-label').style.background = 'Black'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Black";
  document.getElementById('front-left-lower-arm').style.fill = 'Black'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flla-teal'){
  document.getElementById('front-left-lower-arm-label').style.background = '#00b692'
  document.getElementById("front-left-lower-arm-title").innerHTML = "Teal";
  document.getElementById('front-left-lower-arm').style.fill = '#00b692'
  document.getElementById('color-picker-dropdown-flla').style.display = 'none'
  dropdownCtrl = true
}
//front right lower arm
if(color === 'frla-aqua'){
  console.log('here')
  document.getElementById('front-right-lower-arm-label').style.background = '#129793'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Aqua";
  document.getElementById('front-right-lower-arm').style.fill = '#129793'
  document.getElementById('caos-leg-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-red'){
  console.log('here')
  document.getElementById('front-right-lower-arm-label').style.background = 'red'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Red";
  document.getElementById('front-right-lower-arm').style.fill = 'red'
  document.getElementById('caos-arm-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-neon-green'){
  document.getElementById('front-right-lower-arm-label').style.background = '#29f04f'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Neon Green";
  document.getElementById('front-right-lower-arm').style.fill = '#29f04f'
  document.getElementById('caos-arm-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-hot-pink'){
  document.getElementById('front-right-lower-arm-label').style.background = '#e929f0'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Hot Pink";
  document.getElementById('front-right-lower-arm').style.fill = '#e929f0'
  document.getElementById('caos-arm-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-yellow'){
  document.getElementById('front-right-lower-arm-label').style.background = 'yellow'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Yellow";
  document.getElementById('front-right-lower-arm').style.fill = 'yellow'
  document.getElementById('caos-arm-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-maroon'){
  document.getElementById('front-right-lower-arm-label').style.background = '#cb0039'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Maroon";
  document.getElementById('front-right-lower-arm').style.fill = '#cb0039'
  document.getElementById('caos-arm-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-grey'){
  document.getElementById('front-right-lower-arm-label').style.background = '#969696'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Grey";
  document.getElementById('front-right-lower-arm').style.fill = '#969696'
  document.getElementById('caos-arm-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-navy'){
  document.getElementById('front-right-lower-arm-label').style.background = '#152c91'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Navy";
  document.getElementById('front-right-lower-arm').style.fill = '#152c91'
  document.getElementById('caos-arm-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-purple'){
  document.getElementById('front-right-lower-arm-label').style.background = 'purple'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Purple";
  document.getElementById('front-right-lower-arm').style.fill = 'purple'
  document.getElementById('caos-arm-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-darkGreen'){
  document.getElementById('front-right-lower-arm-label').style.background = 'Green'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Green";
  document.getElementById('front-right-lower-arm').style.fill = 'Green'
  document.getElementById('caos-arm-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-darkGrey'){
  document.getElementById('front-right-lower-arm-label').style.background = '#494949'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Dark Grey";
  document.getElementById('front-right-lower-arm').style.fill = '#494949'
  document.getElementById('caos-arm-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-blue'){
  document.getElementById('front-right-lower-arm-label').style.background = 'blue'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Blue";
  document.getElementById('front-right-lower-arm').style.fill = 'blue'
  document.getElementById('caos-arm-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-lime'){
  document.getElementById('front-right-lower-arm-label').style.background = '#09b600'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Lime";
  document.getElementById('front-right-lower-arm').style.fill = '#09b600'
  document.getElementById('caos-arm-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-white'){
  document.getElementById('front-right-lower-arm-label').style.background = 'White'
  document.getElementById("front-right-lower-arm-title").innerHTML = "White";
  document.getElementById('front-right-lower-arm').style.fill = 'White'
  document.getElementById('caos-arm-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-black'){
  document.getElementById('front-right-lower-arm-label').style.background = 'Black'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Black";
  document.getElementById('front-right-lower-arm').style.fill = 'Black'
  document.getElementById('caos-arm-logo').style.color = 'white'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-teal'){
  document.getElementById('front-right-lower-arm-label').style.background = '#00b692'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Teal";
  document.getElementById('front-right-lower-arm').style.fill = '#00b692'
  document.getElementById('caos-arm-logo').style.color = 'black'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
//front left upper leg
if(color === 'flul-aqua'){
  console.log('here')
  document.getElementById('front-left-upper-leg-label').style.background = '#129793'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Aqua";
  document.getElementById('front-left-upper-leg').style.fill = '#129793'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-red'){
  console.log('here')
  document.getElementById('front-left-upper-leg-label').style.background = 'red'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Red";
  document.getElementById('front-left-upper-leg').style.fill = 'red'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-neon-green'){
  document.getElementById('front-left-upper-leg-label').style.background = '#29f04f'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Neon Green";
  document.getElementById('front-left-upper-leg').style.fill = '#29f04f'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-hot-pink'){
  document.getElementById('front-left-upper-leg-label').style.background = '#e929f0'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Hot Pink";
  document.getElementById('front-left-upper-leg').style.fill = '#e929f0'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-yellow'){
  document.getElementById('front-left-upper-leg-label').style.background = 'yellow'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Yellow";
  document.getElementById('front-left-upper-leg').style.fill = 'yellow'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-maroon'){
  document.getElementById('front-left-upper-leg-label').style.background = '#cb0039'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Maroon";
  document.getElementById('front-left-upper-leg').style.fill = '#cb0039'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-grey'){
  document.getElementById('front-left-upper-leg-label').style.background = '#969696'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Grey";
  document.getElementById('front-left-upper-leg').style.fill = '#969696'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-navy'){
  document.getElementById('front-left-upper-leg-label').style.background = '#152c91'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Navy";
  document.getElementById('front-left-upper-leg').style.fill = '#152c91'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-purple'){
  document.getElementById('front-left-upper-leg-label').style.background = 'purple'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Purple";
  document.getElementById('front-left-upper-leg').style.fill = 'purple'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-darkGreen'){
  document.getElementById('front-left-upper-leg-label').style.background = 'Green'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Green";
  document.getElementById('front-left-upper-leg').style.fill = 'Green'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-darkGrey'){
  document.getElementById('front-left-upper-leg-label').style.background = '#494949'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Dark Grey";
  document.getElementById('front-left-upper-leg').style.fill = '#494949'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-blue'){
  document.getElementById('front-left-upper-leg-label').style.background = 'blue'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Blue";
  document.getElementById('front-left-upper-leg').style.fill = 'blue'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-lime'){
  document.getElementById('front-left-upper-leg-label').style.background = '#09b600'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Lime";
  document.getElementById('front-left-upper-leg').style.fill = '#09b600'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-white'){
  document.getElementById('front-left-upper-leg-label').style.background = 'White'
  document.getElementById("front-left-upper-leg-title").innerHTML = "White";
  document.getElementById('front-left-upper-leg').style.fill = 'White'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-black'){
  document.getElementById('front-left-upper-leg-label').style.background = 'Black'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Black";
  document.getElementById('front-left-upper-leg').style.fill = 'Black'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flul-teal'){
  document.getElementById('front-left-upper-leg-label').style.background = '#00b692'
  document.getElementById("front-left-upper-leg-title").innerHTML = "Teal";
  document.getElementById('front-left-upper-leg').style.fill = '#00b692'
  document.getElementById('color-picker-dropdown-flul').style.display = 'none'
  dropdownCtrl = true
}
//front right upper letter-spacing
if(color === 'frul-aqua'){
  console.log('here')
  document.getElementById('front-right-upper-leg-label').style.background = '#129793'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Aqua";
  document.getElementById('front-right-upper-leg').style.fill = '#129793'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-red'){
  console.log('here')
  document.getElementById('front-right-upper-leg-label').style.background = 'red'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Red";
  document.getElementById('front-right-upper-leg').style.fill = 'red'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-neon-green'){
  document.getElementById('front-right-upper-leg-label').style.background = '#29f04f'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Neon Green";
  document.getElementById('front-right-upper-leg').style.fill = '#29f04f'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-hot-pink'){
  document.getElementById('front-right-upper-leg-label').style.background = '#e929f0'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Hot Pink";
  document.getElementById('front-right-upper-leg').style.fill = '#e929f0'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-yellow'){
  document.getElementById('front-right-upper-leg-label').style.background = 'yellow'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Yellow";
  document.getElementById('front-right-upper-leg').style.fill = 'yellow'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-maroon'){
  document.getElementById('front-right-upper-leg-label').style.background = '#cb0039'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Maroon";
  document.getElementById('front-right-upper-leg').style.fill = '#cb0039'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-grey'){
  document.getElementById('front-right-upper-leg-label').style.background = '#969696'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Grey";
  document.getElementById('front-right-upper-leg').style.fill = '#969696'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-navy'){
  document.getElementById('front-right-upper-leg-label').style.background = '#152c91'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Navy";
  document.getElementById('front-right-upper-leg').style.fill = '#152c91'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-purple'){
  document.getElementById('front-right-upper-leg-label').style.background = 'purple'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Purple";
  document.getElementById('front-right-upper-leg').style.fill = 'purple'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-darkGreen'){
  document.getElementById('front-right-upper-leg-label').style.background = 'Green'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Green";
  document.getElementById('front-right-upper-leg').style.fill = 'Green'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-darkGrey'){
  document.getElementById('front-right-upper-leg-label').style.background = '#494949'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Dark Grey";
  document.getElementById('front-right-upper-leg').style.fill = '#494949'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-blue'){
  document.getElementById('front-right-upper-leg-label').style.background = 'blue'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Blue";
  document.getElementById('front-right-upper-leg').style.fill = 'blue'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-lime'){
  document.getElementById('front-right-upper-leg-label').style.background = '#09b600'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Lime";
  document.getElementById('front-right-upper-leg').style.fill = '#09b600'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-white'){
  document.getElementById('front-right-upper-leg-label').style.background = 'White'
  document.getElementById("front-right-upper-leg-title").innerHTML = "White";
  document.getElementById('front-right-upper-leg').style.fill = 'White'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-black'){
  document.getElementById('front-right-upper-leg-label').style.background = 'Black'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Black";
  document.getElementById('front-right-upper-leg').style.fill = 'Black'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frul-teal'){
  document.getElementById('front-right-upper-leg-label').style.background = '#00b692'
  document.getElementById("front-right-upper-leg-title").innerHTML = "Teal";
  document.getElementById('front-right-upper-leg').style.fill = '#00b692'
  document.getElementById('color-picker-dropdown-frul').style.display = 'none'
  dropdownCtrl = true
}
//front left knee
if(color === 'flk-aqua'){
  console.log('here')
  document.getElementById('flk-label').style.background = '#129793'
  document.getElementById("flk-title").innerHTML = "Aqua";
  document.getElementById('front-left-knee').style.fill = '#129793'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-red'){
  console.log('here')
  document.getElementById('flk-label').style.background = 'red'
  document.getElementById("flk-title").innerHTML = "Red";
  document.getElementById('front-left-knee').style.fill = 'red'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-neon-green'){
  document.getElementById('flk-label').style.background = '#29f04f'
  document.getElementById("flk-title").innerHTML = "Neon Green";
  document.getElementById('front-left-knee').style.fill = '#29f04f'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-hot-pink'){
  document.getElementById('flk-label').style.background = '#e929f0'
  document.getElementById("flk-title").innerHTML = "Hot Pink";
  document.getElementById('front-left-knee').style.fill = '#e929f0'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-yellow'){
  document.getElementById('flk-label').style.background = 'yellow'
  document.getElementById("flk-title").innerHTML = "Yellow";
  document.getElementById('front-left-knee').style.fill = 'yellow'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-maroon'){
  document.getElementById('flk-label').style.background = '#cb0039'
  document.getElementById("flk-title").innerHTML = "Maroon";
  document.getElementById('front-left-knee').style.fill = '#cb0039'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-grey'){
  document.getElementById('flk-label').style.background = '#969696'
  document.getElementById("flk-title").innerHTML = "Grey";
  document.getElementById('front-left-knee').style.fill = '#969696'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-navy'){
  document.getElementById('flk-label').style.background = '#152c91'
  document.getElementById("flk-title").innerHTML = "Navy";
  document.getElementById('front-left-knee').style.fill = '#152c91'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-purple'){
  document.getElementById('flk-label').style.background = 'purple'
  document.getElementById("flk-title").innerHTML = "Purple";
  document.getElementById('front-left-knee').style.fill = 'purple'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-darkGreen'){
  document.getElementById('flk-label').style.background = 'Green'
  document.getElementById("flk-title").innerHTML = "Green";
  document.getElementById('front-left-knee').style.fill = 'Green'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-darkGrey'){
  document.getElementById('flk-label').style.background = '#494949'
  document.getElementById("flk-title").innerHTML = "Dark Grey";
  document.getElementById('front-left-knee').style.fill = '#494949'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-blue'){
  document.getElementById('flk-label').style.background = 'blue'
  document.getElementById("flk-title").innerHTML = "Blue";
  document.getElementById('front-left-knee').style.fill = 'blue'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-lime'){
  document.getElementById('flk-label').style.background = '#09b600'
  document.getElementById("flk-title").innerHTML = "Lime";
  document.getElementById('front-left-knee').style.fill = '#09b600'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-white'){
  document.getElementById('flk-label').style.background = 'White'
  document.getElementById("flk-title").innerHTML = "White";
  document.getElementById('front-left-knee').style.fill = 'White'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-black'){
  document.getElementById('flk-label').style.background = 'Black'
  document.getElementById("flk-title").innerHTML = "Black";
  document.getElementById('front-left-knee').style.fill = 'Black'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flk-teal'){
  document.getElementById('flk-label').style.background = '#00b692'
  document.getElementById("flk-title").innerHTML = "Teal";
  document.getElementById('front-left-knee').style.fill = '#00b692'
  document.getElementById('color-picker-dropdown-flk').style.display = 'none'
  dropdownCtrl = true
}
// front right knee
if(color === 'frk-aqua'){
  console.log('here')
  document.getElementById('frk-label').style.background = '#129793'
  document.getElementById("frk-title").innerHTML = "Aqua";
  document.getElementById('front-right-knee').style.fill = '#129793'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-red'){
  console.log('here')
  document.getElementById('frk-label').style.background = 'red'
  document.getElementById("frk-title").innerHTML = "Red";
  document.getElementById('front-right-knee').style.fill = 'red'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-neon-green'){
  document.getElementById('frk-label').style.background = '#29f04f'
  document.getElementById("frk-title").innerHTML = "Neon Green";
  document.getElementById('front-right-knee').style.fill = '#29f04f'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-hot-pink'){
  document.getElementById('frk-label').style.background = '#e929f0'
  document.getElementById("frk-title").innerHTML = "Hot Pink";
  document.getElementById('front-right-knee').style.fill = '#e929f0'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-yellow'){
  document.getElementById('frk-label').style.background = 'yellow'
  document.getElementById("frk-title").innerHTML = "Yellow";
  document.getElementById('front-right-knee').style.fill = 'yellow'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-maroon'){
  document.getElementById('frk-label').style.background = '#cb0039'
  document.getElementById("frk-title").innerHTML = "Maroon";
  document.getElementById('front-right-knee').style.fill = '#cb0039'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-grey'){
  document.getElementById('frk-label').style.background = '#969696'
  document.getElementById("frk-title").innerHTML = "Grey";
  document.getElementById('front-right-knee').style.fill = '#969696'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-navy'){
  document.getElementById('frk-label').style.background = '#152c91'
  document.getElementById("frk-title").innerHTML = "Navy";
  document.getElementById('front-right-knee').style.fill = '#152c91'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-purple'){
  document.getElementById('frk-label').style.background = 'purple'
  document.getElementById("frk-title").innerHTML = "Purple";
  document.getElementById('front-right-knee').style.fill = 'purple'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-darkGreen'){
  document.getElementById('frk-label').style.background = 'Green'
  document.getElementById("frk-title").innerHTML = "Green";
  document.getElementById('front-right-knee').style.fill = 'Green'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-darkGrey'){
  document.getElementById('frk-label').style.background = '#494949'
  document.getElementById("frk-title").innerHTML = "Dark Grey";
  document.getElementById('front-right-knee').style.fill = '#494949'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-blue'){
  document.getElementById('frk-label').style.background = 'blue'
  document.getElementById("frk-title").innerHTML = "Blue";
  document.getElementById('front-right-knee').style.fill = 'blue'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-lime'){
  document.getElementById('frk-label').style.background = '#09b600'
  document.getElementById("frk-title").innerHTML = "Lime";
  document.getElementById('front-right-knee').style.fill = '#09b600'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-white'){
  document.getElementById('frk-label').style.background = 'White'
  document.getElementById("frk-title").innerHTML = "White";
  document.getElementById('front-right-knee').style.fill = 'White'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-black'){
  document.getElementById('frk-label').style.background = 'Black'
  document.getElementById("frk-title").innerHTML = "Black";
  document.getElementById('front-right-knee').style.fill = 'Black'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frk-teal'){
  document.getElementById('frk-label').style.background = '#00b692'
  document.getElementById("frk-title").innerHTML = "Teal";
  document.getElementById('front-right-knee').style.fill = '#00b692'
  document.getElementById('color-picker-dropdown-frk').style.display = 'none'
  dropdownCtrl = true
}
//front left lower letter-spacing
if(color === 'flll-aqua'){
  console.log('here')
  document.getElementById('flll-label').style.background = '#129793'
  document.getElementById("flll-title").innerHTML = "Aqua";
  document.getElementById('front-left-lower-leg').style.fill = '#129793'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-red'){
  console.log('here')
  document.getElementById('flll-label').style.background = 'red'
  document.getElementById("flll-title").innerHTML = "Red";
  document.getElementById('front-left-lower-leg').style.fill = 'red'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-neon-green'){
  document.getElementById('flll-label').style.background = '#29f04f'
  document.getElementById("flll-title").innerHTML = "Neon Green";
  document.getElementById('front-left-lower-leg').style.fill = '#29f04f'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-hot-pink'){
  document.getElementById('flll-label').style.background = '#e929f0'
  document.getElementById("flll-title").innerHTML = "Hot Pink";
  document.getElementById('front-left-lower-leg').style.fill = '#e929f0'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-yellow'){
  document.getElementById('flll-label').style.background = 'yellow'
  document.getElementById("flll-title").innerHTML = "Yellow";
  document.getElementById('front-left-lower-leg').style.fill = 'yellow'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-maroon'){
  document.getElementById('flll-label').style.background = '#cb0039'
  document.getElementById("flll-title").innerHTML = "Maroon";
  document.getElementById('front-left-lower-leg').style.fill = '#cb0039'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-grey'){
  document.getElementById('flll-label').style.background = '#969696'
  document.getElementById("flll-title").innerHTML = "Grey";
  document.getElementById('front-left-lower-leg').style.fill = '#969696'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-navy'){
  document.getElementById('flll-label').style.background = '#152c91'
  document.getElementById("flll-title").innerHTML = "Navy";
  document.getElementById('front-left-lower-leg').style.fill = '#152c91'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-purple'){
  document.getElementById('flll-label').style.background = 'purple'
  document.getElementById("flll-title").innerHTML = "Purple";
  document.getElementById('front-left-lower-leg').style.fill = 'purple'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-darkGreen'){
  document.getElementById('flll-label').style.background = 'Green'
  document.getElementById("flll-title").innerHTML = "Green";
  document.getElementById('front-left-lower-leg').style.fill = 'Green'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-darkGrey'){
  document.getElementById('flll-label').style.background = '#494949'
  document.getElementById("flll-title").innerHTML = "Dark Grey";
  document.getElementById('front-left-lower-leg').style.fill = '#494949'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-blue'){
  document.getElementById('flll-label').style.background = 'blue'
  document.getElementById("flll-title").innerHTML = "Blue";
  document.getElementById('front-left-lower-leg').style.fill = 'blue'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-lime'){
  document.getElementById('flll-label').style.background = '#09b600'
  document.getElementById("flll-title").innerHTML = "Lime";
  document.getElementById('front-left-lower-leg').style.fill = '#09b600'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-white'){
  document.getElementById('flll-label').style.background = 'White'
  document.getElementById("flll-title").innerHTML = "White";
  document.getElementById('front-left-lower-leg').style.fill = 'White'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-black'){
  document.getElementById('flll-label').style.background = 'Black'
  document.getElementById("flll-title").innerHTML = "Black";
  document.getElementById('front-left-lower-leg').style.fill = 'Black'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'flll-teal'){
  document.getElementById('flll-label').style.background = '#00b692'
  document.getElementById("flll-title").innerHTML = "Teal";
  document.getElementById('front-left-lower-leg').style.fill = '#00b692'
  document.getElementById('color-picker-dropdown-flll').style.display = 'none'
  dropdownCtrl = true
}
// front right lower leg
if(color === 'frll-aqua'){
  console.log('here')
  document.getElementById('frll-label').style.background = '#129793'
  document.getElementById("frll-title").innerHTML = "Aqua";
  document.getElementById('front-right-lower-leg').style.fill = '#129793'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-red'){
  console.log('here')
  document.getElementById('frll-label').style.background = 'red'
  document.getElementById("frll-title").innerHTML = "Red";
  document.getElementById('front-right-lower-leg').style.fill = 'red'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-neon-green'){
  document.getElementById('frll-label').style.background = '#29f04f'
  document.getElementById("frll-title").innerHTML = "Neon Green";
  document.getElementById('front-right-lower-leg').style.fill = '#29f04f'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-hot-pink'){
  document.getElementById('frll-label').style.background = '#e929f0'
  document.getElementById("frll-title").innerHTML = "Hot Pink";
  document.getElementById('front-right-lower-leg').style.fill = '#e929f0'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-yellow'){
  document.getElementById('frll-label').style.background = 'yellow'
  document.getElementById("frll-title").innerHTML = "Yellow";
  document.getElementById('front-right-lower-leg').style.fill = 'yellow'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-maroon'){
  document.getElementById('frll-label').style.background = '#cb0039'
  document.getElementById("frll-title").innerHTML = "Maroon";
  document.getElementById('front-right-lower-leg').style.fill = '#cb0039'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-grey'){
  document.getElementById('frll-label').style.background = '#969696'
  document.getElementById("frll-title").innerHTML = "Grey";
  document.getElementById('front-right-lower-leg').style.fill = '#969696'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-navy'){
  document.getElementById('frll-label').style.background = '#152c91'
  document.getElementById("frll-title").innerHTML = "Navy";
  document.getElementById('front-right-lower-leg').style.fill = '#152c91'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-purple'){
  document.getElementById('frll-label').style.background = 'purple'
  document.getElementById("frll-title").innerHTML = "Purple";
  document.getElementById('front-right-lower-leg').style.fill = 'purple'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-darkGreen'){
  document.getElementById('frll-label').style.background = 'Green'
  document.getElementById("frll-title").innerHTML = "Green";
  document.getElementById('front-right-lower-leg').style.fill = 'Green'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-darkGrey'){
  document.getElementById('frll-label').style.background = '#494949'
  document.getElementById("frll-title").innerHTML = "Dark Grey";
  document.getElementById('front-right-lower-leg').style.fill = '#494949'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-blue'){
  document.getElementById('frll-label').style.background = 'blue'
  document.getElementById("frll-title").innerHTML = "Blue";
  document.getElementById('front-right-lower-leg').style.fill = 'blue'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-lime'){
  document.getElementById('frll-label').style.background = '#09b600'
  document.getElementById("frll-title").innerHTML = "Lime";
  document.getElementById('front-right-lower-leg').style.fill = '#09b600'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-white'){
  document.getElementById('frll-label').style.background = 'White'
  document.getElementById("frll-title").innerHTML = "White";
  document.getElementById('front-right-lower-leg').style.fill = 'White'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-black'){
  document.getElementById('frll-label').style.background = 'Black'
  document.getElementById("frll-title").innerHTML = "Black";
  document.getElementById('front-right-lower-leg').style.fill = 'Black'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frll-teal'){
  document.getElementById('frll-label').style.background = '#00b692'
  document.getElementById("frll-title").innerHTML = "Teal";
  document.getElementById('front-right-lower-leg').style.fill = '#00b692'
  document.getElementById('color-picker-dropdown-frll').style.display = 'none'
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
  if(color === 'b-red'){
    console.log('here')
    document.getElementById('b-label').style.background = 'red'
    document.getElementById("b-title").innerHTML = "Red";
    document.getElementById('back-body').style.fill = 'red'
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
  //back left upper arm
  if(color === 'blua-aqua'){
    console.log('here')
    document.getElementById('blua-label').style.background = '#129793'
    document.getElementById("blua-title").innerHTML = "Aqua";
    document.getElementById('back-left-upper-arm').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-red'){
    console.log('here')
    document.getElementById('blua-label').style.background = 'red'
    document.getElementById("blua-title").innerHTML = "Red";
    document.getElementById('back-left-upper-arm').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-neon-green'){
    document.getElementById('blua-label').style.background = '#29f04f'
    document.getElementById("blua-title").innerHTML = "Neon Green";
    document.getElementById('back-left-upper-arm').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-hot-pink'){
    document.getElementById('blua-label').style.background = '#e929f0'
    document.getElementById("blua-title").innerHTML = "Hot Pink";
    document.getElementById('back-left-upper-arm').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-yellow'){
    document.getElementById('blua-label').style.background = 'yellow'
    document.getElementById("blua-title").innerHTML = "Yellow";
    document.getElementById('back-left-upper-arm').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-maroon'){
    document.getElementById('blua-label').style.background = '#cb0039'
    document.getElementById("blua-title").innerHTML = "Maroon";
    document.getElementById('back-left-upper-arm').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-grey'){
    document.getElementById('blua-label').style.background = '#969696'
    document.getElementById("blua-title").innerHTML = "Grey";
    document.getElementById('back-left-upper-arm').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-navy'){
    document.getElementById('blua-label').style.background = '#152c91'
    document.getElementById("blua-title").innerHTML = "Navy";
    document.getElementById('back-left-upper-arm').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-purple'){
    document.getElementById('blua-label').style.background = 'purple'
    document.getElementById("blua-title").innerHTML = "Purple";
    document.getElementById('back-left-upper-arm').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-darkGreen'){
    document.getElementById('blua-label').style.background = 'Green'
    document.getElementById("blua-title").innerHTML = "Green";
    document.getElementById('back-left-upper-arm').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-darkGrey'){
    document.getElementById('blua-label').style.background = '#494949'
    document.getElementById("blua-title").innerHTML = "Dark Grey";
    document.getElementById('back-left-upper-arm').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bluablualue'){
    document.getElementById('blua-label').style.background = 'blue'
    document.getElementById("blua-title").innerHTML = "Blue";
    document.getElementById('back-left-upper-arm').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-lime'){
    document.getElementById('blua-label').style.background = '#09b600'
    document.getElementById("blua-title").innerHTML = "Lime";
    document.getElementById('back-left-upper-arm').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-white'){
    document.getElementById('blua-label').style.background = 'White'
    document.getElementById("blua-title").innerHTML = "White";
    document.getElementById('back-left-upper-arm').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-black'){
    document.getElementById('blua-label').style.background = 'Black'
    document.getElementById("blua-title").innerHTML = "Black";
    document.getElementById('back-left-upper-arm').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-teal'){
    document.getElementById('blua-label').style.background = '#00b692'
    document.getElementById("blua-title").innerHTML = "Teal";
    document.getElementById('back-left-upper-arm').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-aqua'){
    console.log('here')
    document.getElementById('brua-label').style.background = '#129793'
    document.getElementById("brua-title").innerHTML = "Aqua";
    document.getElementById('back-right-upper-arm').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-red'){
    console.log('here')
    document.getElementById('brua-label').style.background = 'red'
    document.getElementById("brua-title").innerHTML = "Red";
    document.getElementById('back-right-upper-arm').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-neon-green'){
    document.getElementById('brua-label').style.background = '#29f04f'
    document.getElementById("brua-title").innerHTML = "Neon Green";
    document.getElementById('back-right-upper-arm').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-hot-pink'){
    document.getElementById('brua-label').style.background = '#e929f0'
    document.getElementById("brua-title").innerHTML = "Hot Pink";
    document.getElementById('back-right-upper-arm').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-yellow'){
    document.getElementById('brua-label').style.background = 'yellow'
    document.getElementById("brua-title").innerHTML = "Yellow";
    document.getElementById('back-right-upper-arm').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-maroon'){
    document.getElementById('brua-label').style.background = '#cb0039'
    document.getElementById("brua-title").innerHTML = "Maroon";
    document.getElementById('back-right-upper-arm').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-grey'){
    document.getElementById('brua-label').style.background = '#969696'
    document.getElementById("brua-title").innerHTML = "Grey";
    document.getElementById('back-right-upper-arm').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-navy'){
    document.getElementById('brua-label').style.background = '#152c91'
    document.getElementById("brua-title").innerHTML = "Navy";
    document.getElementById('back-right-upper-arm').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-purple'){
    document.getElementById('brua-label').style.background = 'purple'
    document.getElementById("brua-title").innerHTML = "Purple";
    document.getElementById('back-right-upper-arm').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-darkGreen'){
    document.getElementById('brua-label').style.background = 'Green'
    document.getElementById("brua-title").innerHTML = "Green";
    document.getElementById('back-right-upper-arm').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-darkGrey'){
    document.getElementById('brua-label').style.background = '#494949'
    document.getElementById("brua-title").innerHTML = "Dark Grey";
    document.getElementById('back-right-upper-arm').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-blue'){
    document.getElementById('brua-label').style.background = 'blue'
    document.getElementById("brua-title").innerHTML = "Blue";
    document.getElementById('back-right-upper-arm').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-lime'){
    document.getElementById('brua-label').style.background = '#09b600'
    document.getElementById("brua-title").innerHTML = "Lime";
    document.getElementById('back-right-upper-arm').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-white'){
    document.getElementById('brua-label').style.background = 'White'
    document.getElementById("brua-title").innerHTML = "White";
    document.getElementById('back-right-upper-arm').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-black'){
    document.getElementById('brua-label').style.background = 'Black'
    document.getElementById("brua-title").innerHTML = "Black";
    document.getElementById('back-right-upper-arm').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-teal'){
    document.getElementById('brua-label').style.background = '#00b692'
    document.getElementById("brua-title").innerHTML = "Teal";
    document.getElementById('back-right-upper-arm').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-aqua'){
    console.log('here')
    document.getElementById('blla-label').style.background = '#129793'
    document.getElementById("blla-title").innerHTML = "Aqua";
    document.getElementById('back-left-lower-arm').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-red'){
    console.log('here')
    document.getElementById('blla-label').style.background = 'red'
    document.getElementById("blla-title").innerHTML = "Red";
    document.getElementById('back-left-lower-arm').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-neon-green'){
    document.getElementById('blla-label').style.background = '#29f04f'
    document.getElementById("blla-title").innerHTML = "Neon Green";
    document.getElementById('back-left-lower-arm').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-hot-pink'){
    document.getElementById('blla-label').style.background = '#e929f0'
    document.getElementById("blla-title").innerHTML = "Hot Pink";
    document.getElementById('back-left-lower-arm').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-yellow'){
    document.getElementById('blla-label').style.background = 'yellow'
    document.getElementById("blla-title").innerHTML = "Yellow";
    document.getElementById('back-left-lower-arm').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-maroon'){
    document.getElementById('blla-label').style.background = '#cb0039'
    document.getElementById("blla-title").innerHTML = "Maroon";
    document.getElementById('back-left-lower-arm').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-grey'){
    document.getElementById('blla-label').style.background = '#969696'
    document.getElementById("blla-title").innerHTML = "Grey";
    document.getElementById('back-left-lower-arm').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-navy'){
    document.getElementById('blla-label').style.background = '#152c91'
    document.getElementById("blla-title").innerHTML = "Navy";
    document.getElementById('back-left-lower-arm').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-purple'){
    document.getElementById('blla-label').style.background = 'purple'
    document.getElementById("blla-title").innerHTML = "Purple";
    document.getElementById('back-left-lower-arm').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-darkGreen'){
    document.getElementById('blla-label').style.background = 'Green'
    document.getElementById("blla-title").innerHTML = "Green";
    document.getElementById('back-left-lower-arm').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-darkGrey'){
    document.getElementById('blla-label').style.background = '#494949'
    document.getElementById("blla-title").innerHTML = "Dark Grey";
    document.getElementById('back-left-lower-arm').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-blue'){
    document.getElementById('blla-label').style.background = 'blue'
    document.getElementById("blla-title").innerHTML = "Blue";
    document.getElementById('back-left-lower-arm').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-lime'){
    document.getElementById('blla-label').style.background = '#09b600'
    document.getElementById("blla-title").innerHTML = "Lime";
    document.getElementById('back-left-lower-arm').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-white'){
    document.getElementById('blla-label').style.background = 'White'
    document.getElementById("blla-title").innerHTML = "White";
    document.getElementById('back-left-lower-arm').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-black'){
    document.getElementById('blla-label').style.background = 'Black'
    document.getElementById("blla-title").innerHTML = "Black";
    document.getElementById('back-left-lower-arm').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-teal'){
    document.getElementById('blla-label').style.background = '#00b692'
    document.getElementById("blla-title").innerHTML = "Teal";
    document.getElementById('back-left-lower-arm').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-aqua'){
    console.log('here')
    document.getElementById('brla-label').style.background = '#129793'
    document.getElementById("brla-title").innerHTML = "Aqua";
    document.getElementById('back-right-lower-arm').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-red'){
    console.log('here')
    document.getElementById('brla-label').style.background = 'red'
    document.getElementById("brla-title").innerHTML = "Red";
    document.getElementById('back-right-lower-arm').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-neon-green'){
    document.getElementById('brla-label').style.background = '#29f04f'
    document.getElementById("brla-title").innerHTML = "Neon Green";
    document.getElementById('back-right-lower-arm').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-hot-pink'){
    document.getElementById('brla-label').style.background = '#e929f0'
    document.getElementById("brla-title").innerHTML = "Hot Pink";
    document.getElementById('back-right-lower-arm').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-yellow'){
    document.getElementById('brla-label').style.background = 'yellow'
    document.getElementById("brla-title").innerHTML = "Yellow";
    document.getElementById('back-right-lower-arm').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-maroon'){
    document.getElementById('brla-label').style.background = '#cb0039'
    document.getElementById("brla-title").innerHTML = "Maroon";
    document.getElementById('back-right-lower-arm').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-grey'){
    document.getElementById('brla-label').style.background = '#969696'
    document.getElementById("brla-title").innerHTML = "Grey";
    document.getElementById('back-right-lower-arm').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-navy'){
    document.getElementById('brla-label').style.background = '#152c91'
    document.getElementById("brla-title").innerHTML = "Navy";
    document.getElementById('back-right-lower-arm').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-purple'){
    document.getElementById('brla-label').style.background = 'purple'
    document.getElementById("brla-title").innerHTML = "Purple";
    document.getElementById('back-right-lower-arm').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-darkGreen'){
    document.getElementById('brla-label').style.background = 'Green'
    document.getElementById("brla-title").innerHTML = "Green";
    document.getElementById('back-right-lower-arm').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-darkGrey'){
    document.getElementById('brla-label').style.background = '#494949'
    document.getElementById("brla-title").innerHTML = "Dark Grey";
    document.getElementById('back-right-lower-arm').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-blue'){
    document.getElementById('brla-label').style.background = 'blue'
    document.getElementById("brla-title").innerHTML = "Blue";
    document.getElementById('back-right-lower-arm').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-lime'){
    document.getElementById('brla-label').style.background = '#09b600'
    document.getElementById("brla-title").innerHTML = "Lime";
    document.getElementById('back-right-lower-arm').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-white'){
    document.getElementById('brla-label').style.background = 'White'
    document.getElementById("brla-title").innerHTML = "White";
    document.getElementById('back-right-lower-arm').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-black'){
    document.getElementById('brla-label').style.background = 'Black'
    document.getElementById("brla-title").innerHTML = "Black";
    document.getElementById('back-right-lower-arm').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-teal'){
    document.getElementById('brla-label').style.background = '#00b692'
    document.getElementById("brla-title").innerHTML = "Teal";
    document.getElementById('back-right-lower-arm').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-aqua'){
    console.log('here')
    document.getElementById('bl-label').style.background = '#129793'
    document.getElementById("bl-title").innerHTML = "Aqua";
    document.getElementById('back-legs').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-red'){
    console.log('here')
    document.getElementById('bl-label').style.background = 'red'
    document.getElementById("bl-title").innerHTML = "Red";
    document.getElementById('back-legs').style.fill = 'red'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-neon-green'){
    document.getElementById('bl-label').style.background = '#29f04f'
    document.getElementById("bl-title").innerHTML = "Neon Green";
    document.getElementById('back-legs').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-hot-pink'){
    document.getElementById('bl-label').style.background = '#e929f0'
    document.getElementById("bl-title").innerHTML = "Hot Pink";
    document.getElementById('back-legs').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-yellow'){
    document.getElementById('bl-label').style.background = 'yellow'
    document.getElementById("bl-title").innerHTML = "Yellow";
    document.getElementById('back-legs').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-maroon'){
    document.getElementById('bl-label').style.background = '#cb0039'
    document.getElementById("bl-title").innerHTML = "Maroon";
    document.getElementById('back-legs').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-grey'){
    document.getElementById('bl-label').style.background = '#969696'
    document.getElementById("bl-title").innerHTML = "Grey";
    document.getElementById('back-legs').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-navy'){
    document.getElementById('bl-label').style.background = '#152c91'
    document.getElementById("bl-title").innerHTML = "Navy";
    document.getElementById('back-legs').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-purple'){
    document.getElementById('bl-label').style.background = 'purple'
    document.getElementById("bl-title").innerHTML = "Purple";
    document.getElementById('back-legs').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-darkGreen'){
    document.getElementById('bl-label').style.background = 'Green'
    document.getElementById("bl-title").innerHTML = "Green";
    document.getElementById('back-legs').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-darkGrey'){
    document.getElementById('bl-label').style.background = '#494949'
    document.getElementById("bl-title").innerHTML = "Dark Grey";
    document.getElementById('back-legs').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-blue'){
    document.getElementById('bl-label').style.background = 'blue'
    document.getElementById("bl-title").innerHTML = "Blue";
    document.getElementById('back-legs').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-lime'){
    document.getElementById('bl-label').style.background = '#09b600'
    document.getElementById("bl-title").innerHTML = "Lime";
    document.getElementById('back-legs').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-white'){
    document.getElementById('bl-label').style.background = 'White'
    document.getElementById("bl-title").innerHTML = "White";
    document.getElementById('back-legs').style.fill = 'White'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-black'){
    document.getElementById('bl-label').style.background = 'Black'
    document.getElementById("bl-title").innerHTML = "Black";
    document.getElementById('back-legs').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-teal'){
    document.getElementById('bl-label').style.background = '#00b692'
    document.getElementById("bl-title").innerHTML = "Teal";
    document.getElementById('back-legs').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-aqua'){
    console.log('here')
    document.getElementById('bh-label').style.background = '#129793'
    document.getElementById("bh-title").innerHTML = "Aqua";
    document.getElementById('back-hips').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-red'){
    console.log('here')
    document.getElementById('bh-label').style.background = 'red'
    document.getElementById("bh-title").innerHTML = "Red";
    document.getElementById('back-hips').style.fill = 'red'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-neon-green'){
    document.getElementById('bh-label').style.background = '#29f04f'
    document.getElementById("bh-title").innerHTML = "Neon Green";
    document.getElementById('back-hips').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-hot-pink'){
    document.getElementById('bh-label').style.background = '#e929f0'
    document.getElementById("bh-title").innerHTML = "Hot Pink";
    document.getElementById('back-hips').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-yellow'){
    document.getElementById('bh-label').style.background = 'yellow'
    document.getElementById("bh-title").innerHTML = "Yellow";
    document.getElementById('back-hips').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-maroon'){
    document.getElementById('bh-label').style.background = '#cb0039'
    document.getElementById("bh-title").innerHTML = "Maroon";
    document.getElementById('back-hips').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-grey'){
    document.getElementById('bh-label').style.background = '#969696'
    document.getElementById("bh-title").innerHTML = "Grey";
    document.getElementById('back-hips').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-navy'){
    document.getElementById('bh-label').style.background = '#152c91'
    document.getElementById("bh-title").innerHTML = "Navy";
    document.getElementById('back-hips').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-purple'){
    document.getElementById('bh-label').style.background = 'purple'
    document.getElementById("bh-title").innerHTML = "Purple";
    document.getElementById('back-hips').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-darkGreen'){
    document.getElementById('bh-label').style.background = 'Green'
    document.getElementById("bh-title").innerHTML = "Green";
    document.getElementById('back-hips').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-darkGrey'){
    document.getElementById('bh-label').style.background = '#494949'
    document.getElementById("bh-title").innerHTML = "Dark Grey";
    document.getElementById('back-hips').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-bhue'){
    document.getElementById('bh-label').style.background = 'blue'
    document.getElementById("bh-title").innerHTML = "Blue";
    document.getElementById('back-hips').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-lime'){
    document.getElementById('bh-label').style.background = '#09b600'
    document.getElementById("bh-title").innerHTML = "Lime";
    document.getElementById('back-hips').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-white'){
    document.getElementById('bh-label').style.background = 'White'
    document.getElementById("bh-title").innerHTML = "White";
    document.getElementById('back-hips').style.fill = 'White'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-bhack'){
    document.getElementById('bh-label').style.background = 'Black'
    document.getElementById("bh-title").innerHTML = "Black";
    document.getElementById('back-hips').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bh-teal'){
    document.getElementById('bh-label').style.background = '#00b692'
    document.getElementById("bh-title").innerHTML = "Teal";
    document.getElementById('back-hips').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-bh').style.display = 'none'
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
//STRIPE
//STRIPE
//STRIPE

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
  document.getElementById('loading-payment').style.display = 'flex'
  $.ajax('https://www.discovercs.com/api/apetest',{
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
   document.getElementById("landingFormValidate_ul_page_9205_submit").click();
  //  location.redirect
   let url = "https://chuteoutsports.dev.userlite.com/website"
   window.location = url;
 });
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
