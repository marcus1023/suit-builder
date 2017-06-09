function collect(){
  function checkCollect(){
    if(document.getElementById("ANKLE_CIRCUMFERENCE").value && document.getElementById("IN_SEAM_LENGTH").value && document.getElementById("CROTCH_TO_KNEE_LENGTH").value && document.getElementById("CALF_CIRCUMFERENCE").value && document.getElementById("WAIST_CIRCUMFERENCE").value && document.getElementById("HIPS_CIRCUMFERENCE").value && document.getElementById("FRONT_TO_BACK_RISE_LEGNTH").value && document.getElementById("THIGH_CIRCUMFERENCE").value && document.getElementById("input-name").value && document.getElementById("input-email").value && document.getElementById("input_phone").value && document.getElementById("input_address").value && document.getElementById("input_city").value && document.getElementById("input_state").value && document.getElementById("input_country").value && document.getElementById("input_zip").value){
      document.getElementById('pop-confirm-wrap').style.display = 'flex'
      document.getElementById('popup-confirm-section').style.display = 'flex'
    }else{
      alert('Please Fill out all Measurements and Contact Info before continuing to checkout')
    }
  }
  checkCollect();
// Front
  let frul = " Front Right Upper Leg: " + document.getElementById("frul-title").innerHTML + " / "
  let flul = " Front Left Upper Leg: " + document.getElementById("flul-title").innerHTML + " / "
  let frcl = " Front Right Lyrica: " + document.getElementById("frcl-title").innerHTML + " / "
  let frml = " Front Left Lyrica: " + document.getElementById("frml-title").innerHTML + " / "
  let flml = " Front Right Knee: " + document.getElementById("flml-title").innerHTML + " / "
  let frly = " Front Left Knee: " + document.getElementById("frly-title").innerHTML + " / "
  let flly = " Front Right Lower Leg: " + document.getElementById("flly-title").innerHTML + " / "
  let frll = " Front Left Lower Leg: " + document.getElementById("frll-title").innerHTML + " / "


  let allFrontValues = frul+flul+frcl+frml+flml+frly+flly+frll
// Back
  let br = " Back Right Upper Leg: " + document.getElementById("br-title").innerHTML + " / "
  let bl = " Back Left Upper Leg: " + document.getElementById("bl-title").innerHTML + " / "
  let brll = " Back Right Lower Leg: " + document.getElementById("brll-title").innerHTML + " / "
  let blll = " Back Left Lower Leg: " + document.getElementById("blll-title").innerHTML + " / "

  let allBackValues = br+bl+brll+blll
//Measurements
  let WAIST_CIRCUMFERENCE = " WAIST_CIRCUMFERENCE: " + document.getElementById("WAIST_CIRCUMFERENCE").value + " / "
  let HIPS_CIRCUMFERENCE = " HIPS_CIRCUMFERENCE: " + document.getElementById("HIPS_CIRCUMFERENCE").value + " / "
  let FRONT_TO_BACK_RISE_LEGNTH = " FRONT_TO_BACK_RISE_LEGNTH: " + document.getElementById("FRONT_TO_BACK_RISE_LEGNTH").value + " / "
  let THIGH_CIRCUMFERENCE = " THIGH_CIRCUMFERENCE: " + document.getElementById("THIGH_CIRCUMFERENCE").value + " / "
  let CALF_CIRCUMFERENCE = " CALF_CIRCUMFERENCE: " + document.getElementById("CALF_CIRCUMFERENCE").value + " / "
  let CROTCH_TO_KNEE_LENGTH = " CROTCH_TO_KNEE_LENGTH: " + document.getElementById("CROTCH_TO_KNEE_LENGTH").value + " / "
  let ANKLE_CIRCUMFERENCE = " ANKLE_CIRCUMFERENCE: " + document.getElementById("ANKLE_CIRCUMFERENCE").value + " / "
  let IN_SEAM_LENGTH = " IN_SEAM_LENGTH: " + document.getElementById("IN_SEAM_LENGTH").value + " / "


  let tm = " TORSO MATERIAL: " + document.getElementById("select-tfab-title").innerHTML + " / "

  let allMeasurements = WAIST_CIRCUMFERENCE+HIPS_CIRCUMFERENCE+FRONT_TO_BACK_RISE_LEGNTH+THIGH_CIRCUMFERENCE+CALF_CIRCUMFERENCE+CROTCH_TO_KNEE_LENGTH+ANKLE_CIRCUMFERENCE+IN_SEAM_LENGTH+tm
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

  let contactInfo = nameI+emailI+input_phone+input_address+input_city+input_state+input_country+input_zip+input_dcode
  document.getElementById("form-group-c_d9lp9").getElementsByClassName("form-control")[0].value = contactInfo
  let randNum = Math.random()*100000000000000;

console.log(allFrontValues)
console.log(allBackValues)
console.log(allMeasurements)
document.getElementById("form-group-name_first").getElementsByClassName("form-control")[0].value = nameI
document.getElementById("form-group-email").getElementsByClassName("form-control")[0].value = "Ignore@email"+randNum+".com"
document.getElementById("form-group-c_9cadg").getElementsByClassName("form-control")[0].value = emailI

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
  if(drop === 'frul'){
    document.getElementById('color-picker-dropdown-frul').style.display = 'flex'
  }
  if(drop === 'flul'){
    document.getElementById('color-picker-dropdown-flul').style.display = 'flex'
  }
  if(drop === 'frcl'){
    document.getElementById('color-picker-dropdown-frcl').style.display = 'flex'
  }
  if(drop === 'flcl'){
    document.getElementById('color-picker-dropdown-flcl').style.display = 'flex'
  }
  if(drop === 'flcl'){
    document.getElementById('color-picker-dropdown-flcl').style.display = 'flex'
  }
  if(drop === 'frml'){
    document.getElementById('color-picker-dropdown-frml').style.display = 'flex'
  }
  if(drop === 'flml'){
    document.getElementById('color-picker-dropdown-flml').style.display = 'flex'
  }
  if(drop === 'frly'){
    document.getElementById('color-picker-dropdown-frly').style.display = 'flex'
  }
  if(drop === 'flly'){
    document.getElementById('color-picker-dropdown-flly').style.display = 'flex'
  }
  if(drop === 'flll'){
    document.getElementById('color-picker-dropdown-flll').style.display = 'flex'
  }
  if(drop === 'frll'){
    document.getElementById('color-picker-dropdown-frll').style.display = 'flex'
  }
}
// ballz
function colorPickerSelectFront(color){
  //Front Left Lower leg
  if(color === 'frul-aqua'){
    console.log('here')
    document.getElementById('frul-label').style.background = '#129793'
    document.getElementById("frul-title").innerHTML = "Aqua";
    document.getElementById('frul').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frul-red'){
    console.log('here')
    document.getElementById('frul-label').style.background = 'red'
    document.getElementById("frul-title").innerHTML = "Red";
    document.getElementById('frul').style.fill = 'red'
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
  if(color === 'flul-aqua'){
    console.log('here')
    document.getElementById('flul-label').style.background = '#129793'
    document.getElementById("flul-title").innerHTML = "Aqua";
    document.getElementById('flul').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flul-red'){
    console.log('here')
    document.getElementById('flul-label').style.background = 'red'
    document.getElementById("flul-title").innerHTML = "Red";
    document.getElementById('flul').style.fill = 'red'
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
  if(color === 'frcl-aqua'){
    console.log('here')
    document.getElementById('frcl-label').style.background = '#129793'
    document.getElementById("frcl-title").innerHTML = "Aqua";
    document.getElementById('frcl').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-red'){
    console.log('here')
    document.getElementById('frcl-label').style.background = 'red'
    document.getElementById("frcl-title").innerHTML = "Red";
    document.getElementById('frcl').style.fill = 'red'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-neon-green'){
    document.getElementById('frcl-label').style.background = '#29f04f'
    document.getElementById("frcl-title").innerHTML = "Neon Green";
    document.getElementById('frcl').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-hot-pink'){
    document.getElementById('frcl-label').style.background = '#e929f0'
    document.getElementById("frcl-title").innerHTML = "Hot Pink";
    document.getElementById('frcl').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-yellow'){
    document.getElementById('frcl-label').style.background = 'yellow'
    document.getElementById("frcl-title").innerHTML = "Yellow";
    document.getElementById('frcl').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-maroon'){
    document.getElementById('frcl-label').style.background = '#cb0039'
    document.getElementById("frcl-title").innerHTML = "Maroon";
    document.getElementById('frcl').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-grey'){
    document.getElementById('frcl-label').style.background = '#969696'
    document.getElementById("frcl-title").innerHTML = "Grey";
    document.getElementById('frcl').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-navy'){
    document.getElementById('frcl-label').style.background = '#152c91'
    document.getElementById("frcl-title").innerHTML = "Navy";
    document.getElementById('frcl').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-purple'){
    document.getElementById('frcl-label').style.background = 'purple'
    document.getElementById("frcl-title").innerHTML = "Purple";
    document.getElementById('frcl').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-darkGreen'){
    document.getElementById('frcl-label').style.background = 'Green'
    document.getElementById("frcl-title").innerHTML = "Green";
    document.getElementById('frcl').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-darkGrey'){
    document.getElementById('frcl-label').style.background = '#494949'
    document.getElementById("frcl-title").innerHTML = "Dark Grey";
    document.getElementById('frcl').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-blue'){
    document.getElementById('frcl-label').style.background = 'blue'
    document.getElementById("frcl-title").innerHTML = "Blue";
    document.getElementById('frcl').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-lime'){
    document.getElementById('frcl-label').style.background = '#09b600'
    document.getElementById("frcl-title").innerHTML = "Lime";
    document.getElementById('frcl').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-white'){
    document.getElementById('frcl-label').style.background = 'White'
    document.getElementById("frcl-title").innerHTML = "White";
    document.getElementById('frcl').style.fill = 'White'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-black'){
    document.getElementById('frcl-label').style.background = 'Black'
    document.getElementById("frcl-title").innerHTML = "Black";
    document.getElementById('frcl').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frcl-teal'){
    document.getElementById('frcl-label').style.background = '#00b692'
    document.getElementById("frcl-title").innerHTML = "Teal";
    document.getElementById('frcl').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-frcl').style.display = 'none'
    dropdownCtrl = true
  }

  if(color === 'flcl-aqua'){
    console.log('here')
    document.getElementById('flcl-label').style.background = '#129793'
    document.getElementById("flcl-title").innerHTML = "Aqua";
    document.getElementById('flcl').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-red'){
    console.log('here')
    document.getElementById('flcl-label').style.background = 'red'
    document.getElementById("flcl-title").innerHTML = "Red";
    document.getElementById('flcl').style.fill = 'red'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-neon-green'){
    document.getElementById('flcl-label').style.background = '#29f04f'
    document.getElementById("flcl-title").innerHTML = "Neon Green";
    document.getElementById('flcl').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-hot-pink'){
    document.getElementById('flcl-label').style.background = '#e929f0'
    document.getElementById("flcl-title").innerHTML = "Hot Pink";
    document.getElementById('flcl').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-yellow'){
    document.getElementById('flcl-label').style.background = 'yellow'
    document.getElementById("flcl-title").innerHTML = "Yellow";
    document.getElementById('flcl').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-maroon'){
    document.getElementById('flcl-label').style.background = '#cb0039'
    document.getElementById("flcl-title").innerHTML = "Maroon";
    document.getElementById('flcl').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-grey'){
    document.getElementById('flcl-label').style.background = '#969696'
    document.getElementById("flcl-title").innerHTML = "Grey";
    document.getElementById('flcl').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-navy'){
    document.getElementById('flcl-label').style.background = '#152c91'
    document.getElementById("flcl-title").innerHTML = "Navy";
    document.getElementById('flcl').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-purple'){
    document.getElementById('flcl-label').style.background = 'purple'
    document.getElementById("flcl-title").innerHTML = "Purple";
    document.getElementById('flcl').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-darkGreen'){
    document.getElementById('flcl-label').style.background = 'Green'
    document.getElementById("flcl-title").innerHTML = "Green";
    document.getElementById('flcl').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-darkGrey'){
    document.getElementById('flcl-label').style.background = '#494949'
    document.getElementById("flcl-title").innerHTML = "Dark Grey";
    document.getElementById('flcl').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-blue'){
    document.getElementById('flcl-label').style.background = 'blue'
    document.getElementById("flcl-title").innerHTML = "Blue";
    document.getElementById('flcl').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-lime'){
    document.getElementById('flcl-label').style.background = '#09b600'
    document.getElementById("flcl-title").innerHTML = "Lime";
    document.getElementById('flcl').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-white'){
    document.getElementById('flcl-label').style.background = 'White'
    document.getElementById("flcl-title").innerHTML = "White";
    document.getElementById('flcl').style.fill = 'White'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-black'){
    document.getElementById('flcl-label').style.background = 'Black'
    document.getElementById("flcl-title").innerHTML = "Black";
    document.getElementById('flcl').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flcl-teal'){
    document.getElementById('flcl-label').style.background = '#00b692'
    document.getElementById("flcl-title").innerHTML = "Teal";
    document.getElementById('flcl').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-flcl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-aqua'){
    console.log('here')
    document.getElementById('frml-label').style.background = '#129793'
    document.getElementById("frml-title").innerHTML = "Aqua";
    document.getElementById('frml').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-red'){
    console.log('here')
    document.getElementById('frml-label').style.background = 'red'
    document.getElementById("frml-title").innerHTML = "Red";
    document.getElementById('frml').style.fill = 'red'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-neon-green'){
    document.getElementById('frml-label').style.background = '#29f04f'
    document.getElementById("frml-title").innerHTML = "Neon Green";
    document.getElementById('frml').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-hot-pink'){
    document.getElementById('frml-label').style.background = '#e929f0'
    document.getElementById("frml-title").innerHTML = "Hot Pink";
    document.getElementById('frml').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-yellow'){
    document.getElementById('frml-label').style.background = 'yellow'
    document.getElementById("frml-title").innerHTML = "Yellow";
    document.getElementById('frml').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-maroon'){
    document.getElementById('frml-label').style.background = '#cb0039'
    document.getElementById("frml-title").innerHTML = "Maroon";
    document.getElementById('frml').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-grey'){
    document.getElementById('frml-label').style.background = '#969696'
    document.getElementById("frml-title").innerHTML = "Grey";
    document.getElementById('frml').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-navy'){
    document.getElementById('frml-label').style.background = '#152c91'
    document.getElementById("frml-title").innerHTML = "Navy";
    document.getElementById('frml').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-purple'){
    document.getElementById('frml-label').style.background = 'purple'
    document.getElementById("frml-title").innerHTML = "Purple";
    document.getElementById('frml').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-darkGreen'){
    document.getElementById('frml-label').style.background = 'Green'
    document.getElementById("frml-title").innerHTML = "Green";
    document.getElementById('frml').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-darkGrey'){
    document.getElementById('frml-label').style.background = '#494949'
    document.getElementById("frml-title").innerHTML = "Dark Grey";
    document.getElementById('frml').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-blue'){
    document.getElementById('frml-label').style.background = 'blue'
    document.getElementById("frml-title").innerHTML = "Blue";
    document.getElementById('frml').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-lime'){
    document.getElementById('frml-label').style.background = '#09b600'
    document.getElementById("frml-title").innerHTML = "Lime";
    document.getElementById('frml').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-white'){
    document.getElementById('frml-label').style.background = 'White'
    document.getElementById("frml-title").innerHTML = "White";
    document.getElementById('frml').style.fill = 'White'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-black'){
    document.getElementById('frml-label').style.background = 'Black'
    document.getElementById("frml-title").innerHTML = "Black";
    document.getElementById('frml').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frml-teal'){
    document.getElementById('frml-label').style.background = '#00b692'
    document.getElementById("frml-title").innerHTML = "Teal";
    document.getElementById('frml').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-frml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-aqua'){
    console.log('here')
    document.getElementById('flml-label').style.background = '#129793'
    document.getElementById("flml-title").innerHTML = "Aqua";
    document.getElementById('flml').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-red'){
    console.log('here')
    document.getElementById('flml-label').style.background = 'red'
    document.getElementById("flml-title").innerHTML = "Red";
    document.getElementById('flml').style.fill = 'red'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-neon-green'){
    document.getElementById('flml-label').style.background = '#29f04f'
    document.getElementById("flml-title").innerHTML = "Neon Green";
    document.getElementById('flml').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-hot-pink'){
    document.getElementById('flml-label').style.background = '#e929f0'
    document.getElementById("flml-title").innerHTML = "Hot Pink";
    document.getElementById('flml').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-yellow'){
    document.getElementById('flml-label').style.background = 'yellow'
    document.getElementById("flml-title").innerHTML = "Yellow";
    document.getElementById('flml').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-maroon'){
    document.getElementById('flml-label').style.background = '#cb0039'
    document.getElementById("flml-title").innerHTML = "Maroon";
    document.getElementById('flml').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-grey'){
    document.getElementById('flml-label').style.background = '#969696'
    document.getElementById("flml-title").innerHTML = "Grey";
    document.getElementById('flml').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-navy'){
    document.getElementById('flml-label').style.background = '#152c91'
    document.getElementById("flml-title").innerHTML = "Navy";
    document.getElementById('flml').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-purple'){
    document.getElementById('flml-label').style.background = 'purple'
    document.getElementById("flml-title").innerHTML = "Purple";
    document.getElementById('flml').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-darkGreen'){
    document.getElementById('flml-label').style.background = 'Green'
    document.getElementById("flml-title").innerHTML = "Green";
    document.getElementById('flml').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-darkGrey'){
    document.getElementById('flml-label').style.background = '#494949'
    document.getElementById("flml-title").innerHTML = "Dark Grey";
    document.getElementById('flml').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-blue'){
    document.getElementById('flml-label').style.background = 'blue'
    document.getElementById("flml-title").innerHTML = "Blue";
    document.getElementById('flml').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-lime'){
    document.getElementById('flml-label').style.background = '#09b600'
    document.getElementById("flml-title").innerHTML = "Lime";
    document.getElementById('flml').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-white'){
    document.getElementById('flml-label').style.background = 'White'
    document.getElementById("flml-title").innerHTML = "White";
    document.getElementById('flml').style.fill = 'White'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-black'){
    document.getElementById('flml-label').style.background = 'Black'
    document.getElementById("flml-title").innerHTML = "Black";
    document.getElementById('flml').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flml-teal'){
    document.getElementById('flml-label').style.background = '#00b692'
    document.getElementById("flml-title").innerHTML = "Teal";
    document.getElementById('flml').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-flml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-aqua'){
    console.log('here')
    document.getElementById('frly-label').style.background = '#129793'
    document.getElementById("frly-title").innerHTML = "Aqua";
    document.getElementById('frly').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frly-red'){
    console.log('here')
    document.getElementById('frly-label').style.background = 'red'
    document.getElementById("frly-title").innerHTML = "Red";
    document.getElementById('frly').style.fill = 'red'
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
  if(color === 'flly-aqua'){
    console.log('here')
    document.getElementById('flly-label').style.background = '#129793'
    document.getElementById("flly-title").innerHTML = "Aqua";
    document.getElementById('flly').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flly-red'){
    console.log('here')
    document.getElementById('flly-label').style.background = 'red'
    document.getElementById("flly-title").innerHTML = "Red";
    document.getElementById('flly').style.fill = 'red'
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
  if(color === 'frll-aqua'){
    console.log('here')
    document.getElementById('frll-label').style.background = '#129793'
    document.getElementById("frll-title").innerHTML = "Aqua";
    document.getElementById('frll').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frll-red'){
    console.log('here')
    document.getElementById('frll-label').style.background = 'red'
    document.getElementById("frll-title").innerHTML = "Red";
    document.getElementById('frll').style.fill = 'red'
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
  if(color === 'flll-aqua'){
    console.log('here')
    document.getElementById('flll-label').style.background = '#129793'
    document.getElementById("flll-title").innerHTML = "Aqua";
    document.getElementById('flll').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-flll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'flll-red'){
    console.log('here')
    document.getElementById('flll-label').style.background = 'red'
    document.getElementById("flll-title").innerHTML = "Red";
    document.getElementById('flll').style.fill = 'red'
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
  // back
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
  // back lineing
  if(color === 'back-lineing-aqua'){
    console.log('here')
    document.getElementById('back-lineing-label').style.background = '#129793'
    document.getElementById("back-lineing-title").innerHTML = "Aqua";
    document.getElementById('back-lineing').style.fill = '#129793'
    document.getElementById('front-lineing').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-red'){
    console.log('here')
    document.getElementById('back-lineing-label').style.background = 'red'
    document.getElementById("back-lineing-title").innerHTML = "Red";
    document.getElementById('back-lineing').style.fill = 'red'
    document.getElementById('front-lineing').style.fill = 'red'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-neon-green'){
    document.getElementById('back-lineing-label').style.background = '#29f04f'
    document.getElementById("back-lineing-title").innerHTML = "Neon Green";
    document.getElementById('back-lineing').style.fill = '#29f04f'
    document.getElementById('front-lineing').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-hot-pink'){
    document.getElementById('back-lineing-label').style.background = '#e929f0'
    document.getElementById("back-lineing-title").innerHTML = "Hot Pink";
    document.getElementById('back-lineing').style.fill = '#e929f0'
    document.getElementById('front-lineing').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-yellow'){
    document.getElementById('back-lineing-label').style.background = 'yellow'
    document.getElementById("back-lineing-title").innerHTML = "Yellow";
    document.getElementById('back-lineing').style.fill = 'yellow'
    document.getElementById('front-lineing').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-maroon'){
    document.getElementById('back-lineing-label').style.background = '#cb0039'
    document.getElementById("back-lineing-title").innerHTML = "Maroon";
    document.getElementById('back-lineing').style.fill = '#cb0039'
    document.getElementById('front-lineing').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-grey'){
    document.getElementById('back-lineing-label').style.background = '#969696'
    document.getElementById("back-lineing-title").innerHTML = "Grey";
    document.getElementById('back-lineing').style.fill = '#969696'
    document.getElementById('front-lineing').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-navy'){
    document.getElementById('back-lineing-label').style.background = '#152c91'
    document.getElementById("back-lineing-title").innerHTML = "Navy";
    document.getElementById('back-lineing').style.fill = '#152c91'
    document.getElementById('front-lineing').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-purple'){
    document.getElementById('back-lineing-label').style.background = 'purple'
    document.getElementById("back-lineing-title").innerHTML = "Purple";
    document.getElementById('back-lineing').style.fill = 'purple'
    document.getElementById('front-lineing').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-darkGreen'){
    document.getElementById('back-lineing-label').style.background = 'Green'
    document.getElementById("back-lineing-title").innerHTML = "Green";
    document.getElementById('back-lineing').style.fill = 'Green'
    document.getElementById('front-lineing').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-darkGrey'){
    document.getElementById('back-lineing-label').style.background = '#494949'
    document.getElementById("back-lineing-title").innerHTML = "Dark Grey";
    document.getElementById('back-lineing').style.fill = '#494949'
    document.getElementById('front-lineing').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-blue'){
    document.getElementById('back-lineing-label').style.background = 'blue'
    document.getElementById("back-lineing-title").innerHTML = "Blue";
    document.getElementById('back-lineing').style.fill = 'blue'
    document.getElementById('front-lineing').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-lime'){
    document.getElementById('back-lineing-label').style.background = '#09b600'
    document.getElementById("back-lineing-title").innerHTML = "Lime";
    document.getElementById('back-lineing').style.fill = '#09b600'
    document.getElementById('front-lineing').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-white'){
    document.getElementById('back-lineing-label').style.background = 'White'
    document.getElementById("back-lineing-title").innerHTML = "White";
    document.getElementById('back-lineing').style.fill = 'White'
    document.getElementById('front-lineing').style.fill = 'White'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-black'){
    document.getElementById('back-lineing-label').style.background = 'Black'
    document.getElementById("back-lineing-title").innerHTML = "Black";
    document.getElementById('back-lineing').style.fill = 'Black'
    document.getElementById('front-lineing').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lineing-teal'){
    document.getElementById('back-lineing-label').style.background = '#00b692'
    document.getElementById("back-lineing-title").innerHTML = "Teal";
    document.getElementById('back-lineing').style.fill = '#00b692'
    document.getElementById('front-lineing').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-aqua'){
    console.log('here')
    document.getElementById('br-label').style.background = '#129793'
    document.getElementById("br-title").innerHTML = "Aqua";
    document.getElementById('br').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-red'){
    console.log('here')
    document.getElementById('br-label').style.background = 'red'
    document.getElementById("br-title").innerHTML = "Red";
    document.getElementById('br').style.fill = 'red'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-neon-green'){
    document.getElementById('br-label').style.background = '#29f04f'
    document.getElementById("br-title").innerHTML = "Neon Green";
    document.getElementById('br').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-hot-pink'){
    document.getElementById('br-label').style.background = '#e929f0'
    document.getElementById("br-title").innerHTML = "Hot Pink";
    document.getElementById('br').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-yellow'){
    document.getElementById('br-label').style.background = 'yellow'
    document.getElementById("br-title").innerHTML = "Yellow";
    document.getElementById('br').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-maroon'){
    document.getElementById('br-label').style.background = '#cb0039'
    document.getElementById("br-title").innerHTML = "Maroon";
    document.getElementById('br').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-grey'){
    document.getElementById('br-label').style.background = '#969696'
    document.getElementById("br-title").innerHTML = "Grey";
    document.getElementById('br').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-navy'){
    document.getElementById('br-label').style.background = '#152c91'
    document.getElementById("br-title").innerHTML = "Navy";
    document.getElementById('br').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-purple'){
    document.getElementById('br-label').style.background = 'purple'
    document.getElementById("br-title").innerHTML = "Purple";
    document.getElementById('br').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-darkGreen'){
    document.getElementById('br-label').style.background = 'Green'
    document.getElementById("br-title").innerHTML = "Green";
    document.getElementById('br').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-darkGrey'){
    document.getElementById('br-label').style.background = '#494949'
    document.getElementById("br-title").innerHTML = "Dark Grey";
    document.getElementById('br').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-blue'){
    document.getElementById('br-label').style.background = 'blue'
    document.getElementById("br-title").innerHTML = "Blue";
    document.getElementById('br').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-lime'){
    document.getElementById('br-label').style.background = '#09b600'
    document.getElementById("br-title").innerHTML = "Lime";
    document.getElementById('br').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-white'){
    document.getElementById('br-label').style.background = 'White'
    document.getElementById("br-title").innerHTML = "White";
    document.getElementById('br').style.fill = 'White'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-black'){
    document.getElementById('br-label').style.background = 'Black'
    document.getElementById("br-title").innerHTML = "Black";
    document.getElementById('br').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-teal'){
    document.getElementById('br-label').style.background = '#00b692'
    document.getElementById("br-title").innerHTML = "Teal";
    document.getElementById('br').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-br').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-aqua'){
    console.log('here')
    document.getElementById('bl-label').style.background = '#129793'
    document.getElementById("bl-title").innerHTML = "Aqua";
    document.getElementById('bl').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-red'){
    console.log('here')
    document.getElementById('bl-label').style.background = 'red'
    document.getElementById("bl-title").innerHTML = "Red";
    document.getElementById('bl').style.fill = 'red'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-neon-green'){
    document.getElementById('bl-label').style.background = '#29f04f'
    document.getElementById("bl-title").innerHTML = "Neon Green";
    document.getElementById('bl').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-hot-pink'){
    document.getElementById('bl-label').style.background = '#e929f0'
    document.getElementById("bl-title").innerHTML = "Hot Pink";
    document.getElementById('bl').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-yellow'){
    document.getElementById('bl-label').style.background = 'yellow'
    document.getElementById("bl-title").innerHTML = "Yellow";
    document.getElementById('bl').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-maroon'){
    document.getElementById('bl-label').style.background = '#cb0039'
    document.getElementById("bl-title").innerHTML = "Maroon";
    document.getElementById('bl').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-grey'){
    document.getElementById('bl-label').style.background = '#969696'
    document.getElementById("bl-title").innerHTML = "Grey";
    document.getElementById('bl').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-navy'){
    document.getElementById('bl-label').style.background = '#152c91'
    document.getElementById("bl-title").innerHTML = "Navy";
    document.getElementById('bl').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-purple'){
    document.getElementById('bl-label').style.background = 'purple'
    document.getElementById("bl-title").innerHTML = "Purple";
    document.getElementById('bl').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-darkGreen'){
    document.getElementById('bl-label').style.background = 'Green'
    document.getElementById("bl-title").innerHTML = "Green";
    document.getElementById('bl').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-darkGrey'){
    document.getElementById('bl-label').style.background = '#494949'
    document.getElementById("bl-title").innerHTML = "Dark Grey";
    document.getElementById('bl').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-blue'){
    document.getElementById('bl-label').style.background = 'blue'
    document.getElementById("bl-title").innerHTML = "Blue";
    document.getElementById('bl').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-lime'){
    document.getElementById('bl-label').style.background = '#09b600'
    document.getElementById("bl-title").innerHTML = "Lime";
    document.getElementById('bl').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-white'){
    document.getElementById('bl-label').style.background = 'White'
    document.getElementById("bl-title").innerHTML = "White";
    document.getElementById('bl').style.fill = 'White'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-black'){
    document.getElementById('bl-label').style.background = 'Black'
    document.getElementById("bl-title").innerHTML = "Black";
    document.getElementById('bl').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-teal'){
    document.getElementById('bl-label').style.background = '#00b692'
    document.getElementById("bl-title").innerHTML = "Teal";
    document.getElementById('bl').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-bl').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-aqua'){
    console.log('here')
    document.getElementById('brc-label').style.background = '#129793'
    document.getElementById("brc-title").innerHTML = "Aqua";
    document.getElementById('brc').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-red'){
    console.log('here')
    document.getElementById('brc-label').style.background = 'red'
    document.getElementById("brc-title").innerHTML = "Red";
    document.getElementById('brc').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-neon-green'){
    document.getElementById('brc-label').style.background = '#29f04f'
    document.getElementById("brc-title").innerHTML = "Neon Green";
    document.getElementById('brc').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-hot-pink'){
    document.getElementById('brc-label').style.background = '#e929f0'
    document.getElementById("brc-title").innerHTML = "Hot Pink";
    document.getElementById('brc').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-yellow'){
    document.getElementById('brc-label').style.background = 'yellow'
    document.getElementById("brc-title").innerHTML = "Yellow";
    document.getElementById('brc').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-maroon'){
    document.getElementById('brc-label').style.background = '#cb0039'
    document.getElementById("brc-title").innerHTML = "Maroon";
    document.getElementById('brc').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-grey'){
    document.getElementById('brc-label').style.background = '#969696'
    document.getElementById("brc-title").innerHTML = "Grey";
    document.getElementById('brc').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-navy'){
    document.getElementById('brc-label').style.background = '#152c91'
    document.getElementById("brc-title").innerHTML = "Navy";
    document.getElementById('brc').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-purple'){
    document.getElementById('brc-label').style.background = 'purple'
    document.getElementById("brc-title").innerHTML = "Purple";
    document.getElementById('brc').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-darkGreen'){
    document.getElementById('brc-label').style.background = 'Green'
    document.getElementById("brc-title").innerHTML = "Green";
    document.getElementById('brc').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-darkGrey'){
    document.getElementById('brc-label').style.background = '#494949'
    document.getElementById("brc-title").innerHTML = "Dark Grey";
    document.getElementById('brc').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-brcue'){
    document.getElementById('brc-label').style.background = 'brcue'
    document.getElementById("brc-title").innerHTML = "brcue";
    document.getElementById('brc').style.fill = 'brcue'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-lime'){
    document.getElementById('brc-label').style.background = '#09b600'
    document.getElementById("brc-title").innerHTML = "Lime";
    document.getElementById('brc').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-white'){
    document.getElementById('brc-label').style.background = 'White'
    document.getElementById("brc-title").innerHTML = "White";
    document.getElementById('brc').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-black'){
    document.getElementById('brc-label').style.background = 'brcack'
    document.getElementById("brc-title").innerHTML = "brcack";
    document.getElementById('brc').style.fill = 'brcack'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brc-teal'){
    document.getElementById('brc-label').style.background = '#00b692'
    document.getElementById("brc-title").innerHTML = "Teal";
    document.getElementById('brc').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-aqua'){
    console.log('here')
    document.getElementById('blc-label').style.background = '#129793'
    document.getElementById("blc-title").innerHTML = "Aqua";
    document.getElementById('blc').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-red'){
    console.log('here')
    document.getElementById('blc-label').style.background = 'red'
    document.getElementById("blc-title").innerHTML = "Red";
    document.getElementById('blc').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-neon-green'){
    document.getElementById('blc-label').style.background = '#29f04f'
    document.getElementById("blc-title").innerHTML = "Neon Green";
    document.getElementById('blc').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-hot-pink'){
    document.getElementById('blc-label').style.background = '#e929f0'
    document.getElementById("blc-title").innerHTML = "Hot Pink";
    document.getElementById('blc').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-yellow'){
    document.getElementById('blc-label').style.background = 'yellow'
    document.getElementById("blc-title").innerHTML = "Yellow";
    document.getElementById('blc').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-maroon'){
    document.getElementById('blc-label').style.background = '#cb0039'
    document.getElementById("blc-title").innerHTML = "Maroon";
    document.getElementById('blc').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-grey'){
    document.getElementById('blc-label').style.background = '#969696'
    document.getElementById("blc-title").innerHTML = "Grey";
    document.getElementById('blc').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-navy'){
    document.getElementById('blc-label').style.background = '#152c91'
    document.getElementById("blc-title").innerHTML = "Navy";
    document.getElementById('blc').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-purple'){
    document.getElementById('blc-label').style.background = 'purple'
    document.getElementById("blc-title").innerHTML = "Purple";
    document.getElementById('blc').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-darkGreen'){
    document.getElementById('blc-label').style.background = 'Green'
    document.getElementById("blc-title").innerHTML = "Green";
    document.getElementById('blc').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-darkGrey'){
    document.getElementById('blc-label').style.background = '#494949'
    document.getElementById("blc-title").innerHTML = "Dark Grey";
    document.getElementById('blc').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-blue'){
    document.getElementById('blc-label').style.background = 'blue'
    document.getElementById("blc-title").innerHTML = "blue";
    document.getElementById('blc').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-lime'){
    document.getElementById('blc-label').style.background = '#09b600'
    document.getElementById("blc-title").innerHTML = "Lime";
    document.getElementById('blc').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-white'){
    document.getElementById('blc-label').style.background = 'White'
    document.getElementById("blc-title").innerHTML = "White";
    document.getElementById('blc').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-black'){
    document.getElementById('blc-label').style.background = 'black'
    document.getElementById("blc-title").innerHTML = "black";
    document.getElementById('blc').style.fill = 'black'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blc-teal'){
    document.getElementById('blc-label').style.background = '#00b692'
    document.getElementById("blc-title").innerHTML = "Teal";
    document.getElementById('blc').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-aqua'){
    console.log('here')
    document.getElementById('brml-label').style.background = '#129793'
    document.getElementById("brml-title").innerHTML = "Aqua";
    document.getElementById('brml').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-red'){
    console.log('here')
    document.getElementById('brml-label').style.background = 'red'
    document.getElementById("brml-title").innerHTML = "Red";
    document.getElementById('brml').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-neon-green'){
    document.getElementById('brml-label').style.background = '#29f04f'
    document.getElementById("brml-title").innerHTML = "Neon Green";
    document.getElementById('brml').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-hot-pink'){
    document.getElementById('brml-label').style.background = '#e929f0'
    document.getElementById("brml-title").innerHTML = "Hot Pink";
    document.getElementById('brml').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-yellow'){
    document.getElementById('brml-label').style.background = 'yellow'
    document.getElementById("brml-title").innerHTML = "Yellow";
    document.getElementById('brml').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-maroon'){
    document.getElementById('brml-label').style.background = '#cb0039'
    document.getElementById("brml-title").innerHTML = "Maroon";
    document.getElementById('brml').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-grey'){
    document.getElementById('brml-label').style.background = '#969696'
    document.getElementById("brml-title").innerHTML = "Grey";
    document.getElementById('brml').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-navy'){
    document.getElementById('brml-label').style.background = '#152c91'
    document.getElementById("brml-title").innerHTML = "Navy";
    document.getElementById('brml').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-purple'){
    document.getElementById('brml-label').style.background = 'purple'
    document.getElementById("brml-title").innerHTML = "Purple";
    document.getElementById('brml').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-darkGreen'){
    document.getElementById('brml-label').style.background = 'Green'
    document.getElementById("brml-title").innerHTML = "Green";
    document.getElementById('brml').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-darkGrey'){
    document.getElementById('brml-label').style.background = '#494949'
    document.getElementById("brml-title").innerHTML = "Dark Grey";
    document.getElementById('brml').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-blue'){
    document.getElementById('brml-label').style.background = 'blue'
    document.getElementById("brml-title").innerHTML = "blue";
    document.getElementById('brml').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-lime'){
    document.getElementById('brml-label').style.background = '#09b600'
    document.getElementById("brml-title").innerHTML = "Lime";
    document.getElementById('brml').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-white'){
    document.getElementById('brml-label').style.background = 'White'
    document.getElementById("brml-title").innerHTML = "White";
    document.getElementById('brml').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-black'){
    document.getElementById('brml-label').style.background = 'brmlack'
    document.getElementById("brml-title").innerHTML = "brmlack";
    document.getElementById('brml').style.fill = 'brmlack'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-teal'){
    document.getElementById('brml-label').style.background = '#00b692'
    document.getElementById("brml-title").innerHTML = "Teal";
    document.getElementById('brml').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-aqua'){
    console.log('here')
    document.getElementById('blml-label').style.background = '#129793'
    document.getElementById("blml-title").innerHTML = "Aqua";
    document.getElementById('blml').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-red'){
    console.log('here')
    document.getElementById('blml-label').style.background = 'red'
    document.getElementById("blml-title").innerHTML = "Red";
    document.getElementById('blml').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-neon-green'){
    document.getElementById('blml-label').style.background = '#29f04f'
    document.getElementById("blml-title").innerHTML = "Neon Green";
    document.getElementById('blml').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-hot-pink'){
    document.getElementById('blml-label').style.background = '#e929f0'
    document.getElementById("blml-title").innerHTML = "Hot Pink";
    document.getElementById('blml').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-yellow'){
    document.getElementById('blml-label').style.background = 'yellow'
    document.getElementById("blml-title").innerHTML = "Yellow";
    document.getElementById('blml').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-maroon'){
    document.getElementById('blml-label').style.background = '#cb0039'
    document.getElementById("blml-title").innerHTML = "Maroon";
    document.getElementById('blml').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-grey'){
    document.getElementById('blml-label').style.background = '#969696'
    document.getElementById("blml-title").innerHTML = "Grey";
    document.getElementById('blml').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-navy'){
    document.getElementById('blml-label').style.background = '#152c91'
    document.getElementById("blml-title").innerHTML = "Navy";
    document.getElementById('blml').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-purple'){
    document.getElementById('blml-label').style.background = 'purple'
    document.getElementById("blml-title").innerHTML = "Purple";
    document.getElementById('blml').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-darkGreen'){
    document.getElementById('blml-label').style.background = 'Green'
    document.getElementById("blml-title").innerHTML = "Green";
    document.getElementById('blml').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-darkGrey'){
    document.getElementById('blml-label').style.background = '#494949'
    document.getElementById("blml-title").innerHTML = "Dark Grey";
    document.getElementById('blml').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-blue'){
    document.getElementById('blml-label').style.background = 'blue'
    document.getElementById("blml-title").innerHTML = "blue";
    document.getElementById('blml').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-lime'){
    document.getElementById('blml-label').style.background = '#09b600'
    document.getElementById("blml-title").innerHTML = "Lime";
    document.getElementById('blml').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-white'){
    document.getElementById('blml-label').style.background = 'White'
    document.getElementById("blml-title").innerHTML = "White";
    document.getElementById('blml').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-black'){
    document.getElementById('blml-label').style.background = 'blmlack'
    document.getElementById("blml-title").innerHTML = "blmlack";
    document.getElementById('blml').style.fill = 'blmlack'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-teal'){
    document.getElementById('blml-label').style.background = '#00b692'
    document.getElementById("blml-title").innerHTML = "Teal";
    document.getElementById('blml').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-aqua'){
    console.log('here')
    document.getElementById('brly-label').style.background = '#129793'
    document.getElementById("brly-title").innerHTML = "Aqua";
    document.getElementById('brly').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-red'){
    console.log('here')
    document.getElementById('brly-label').style.background = 'red'
    document.getElementById("brly-title").innerHTML = "Red";
    document.getElementById('brly').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-neon-green'){
    document.getElementById('brly-label').style.background = '#29f04f'
    document.getElementById("brly-title").innerHTML = "Neon Green";
    document.getElementById('brly').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-hot-pink'){
    document.getElementById('brly-label').style.background = '#e929f0'
    document.getElementById("brly-title").innerHTML = "Hot Pink";
    document.getElementById('brly').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-yellow'){
    document.getElementById('brly-label').style.background = 'yellow'
    document.getElementById("brly-title").innerHTML = "Yellow";
    document.getElementById('brly').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-maroon'){
    document.getElementById('brly-label').style.background = '#cb0039'
    document.getElementById("brly-title").innerHTML = "Maroon";
    document.getElementById('brly').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-grey'){
    document.getElementById('brly-label').style.background = '#969696'
    document.getElementById("brly-title").innerHTML = "Grey";
    document.getElementById('brly').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-navy'){
    document.getElementById('brly-label').style.background = '#152c91'
    document.getElementById("brly-title").innerHTML = "Navy";
    document.getElementById('brly').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-purple'){
    document.getElementById('brly-label').style.background = 'purple'
    document.getElementById("brly-title").innerHTML = "Purple";
    document.getElementById('brly').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-darkGreen'){
    document.getElementById('brly-label').style.background = 'Green'
    document.getElementById("brly-title").innerHTML = "Green";
    document.getElementById('brly').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-darkGrey'){
    document.getElementById('brly-label').style.background = '#494949'
    document.getElementById("brly-title").innerHTML = "Dark Grey";
    document.getElementById('brly').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-blue'){
    document.getElementById('brly-label').style.background = 'blue'
    document.getElementById("brly-title").innerHTML = "blue";
    document.getElementById('brly').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-lime'){
    document.getElementById('brly-label').style.background = '#09b600'
    document.getElementById("brly-title").innerHTML = "Lime";
    document.getElementById('brly').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-white'){
    document.getElementById('brly-label').style.background = 'White'
    document.getElementById("brly-title").innerHTML = "White";
    document.getElementById('brly').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-black'){
    document.getElementById('brly-label').style.background = 'brlyack'
    document.getElementById("brly-title").innerHTML = "brlyack";
    document.getElementById('brly').style.fill = 'brlyack'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-teal'){
    document.getElementById('brly-label').style.background = '#00b692'
    document.getElementById("brly-title").innerHTML = "Teal";
    document.getElementById('brly').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-aqua'){
    console.log('here')
    document.getElementById('blly-label').style.background = '#129793'
    document.getElementById("blly-title").innerHTML = "Aqua";
    document.getElementById('blly').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-red'){
    console.log('here')
    document.getElementById('blly-label').style.background = 'red'
    document.getElementById("blly-title").innerHTML = "Red";
    document.getElementById('blly').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-neon-green'){
    document.getElementById('blly-label').style.background = '#29f04f'
    document.getElementById("blly-title").innerHTML = "Neon Green";
    document.getElementById('blly').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-hot-pink'){
    document.getElementById('blly-label').style.background = '#e929f0'
    document.getElementById("blly-title").innerHTML = "Hot Pink";
    document.getElementById('blly').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-yellow'){
    document.getElementById('blly-label').style.background = 'yellow'
    document.getElementById("blly-title").innerHTML = "Yellow";
    document.getElementById('blly').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-maroon'){
    document.getElementById('blly-label').style.background = '#cb0039'
    document.getElementById("blly-title").innerHTML = "Maroon";
    document.getElementById('blly').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-grey'){
    document.getElementById('blly-label').style.background = '#969696'
    document.getElementById("blly-title").innerHTML = "Grey";
    document.getElementById('blly').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-navy'){
    document.getElementById('blly-label').style.background = '#152c91'
    document.getElementById("blly-title").innerHTML = "Navy";
    document.getElementById('blly').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-purple'){
    document.getElementById('blly-label').style.background = 'purple'
    document.getElementById("blly-title").innerHTML = "Purple";
    document.getElementById('blly').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-darkGreen'){
    document.getElementById('blly-label').style.background = 'Green'
    document.getElementById("blly-title").innerHTML = "Green";
    document.getElementById('blly').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-darkGrey'){
    document.getElementById('blly-label').style.background = '#494949'
    document.getElementById("blly-title").innerHTML = "Dark Grey";
    document.getElementById('blly').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-blue'){
    document.getElementById('blly-label').style.background = 'blue'
    document.getElementById("blly-title").innerHTML = "blue";
    document.getElementById('blly').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-lime'){
    document.getElementById('blly-label').style.background = '#09b600'
    document.getElementById("blly-title").innerHTML = "Lime";
    document.getElementById('blly').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-white'){
    document.getElementById('blly-label').style.background = 'White'
    document.getElementById("blly-title").innerHTML = "White";
    document.getElementById('blly').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-black'){
    document.getElementById('blly-label').style.background = 'bllyack'
    document.getElementById("blly-title").innerHTML = "bllyack";
    document.getElementById('blly').style.fill = 'bllyack'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-teal'){
    document.getElementById('blly-label').style.background = '#00b692'
    document.getElementById("blly-title").innerHTML = "Teal";
    document.getElementById('blly').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-aqua'){
    console.log('here')
    document.getElementById('brll-label').style.background = '#129793'
    document.getElementById("brll-title").innerHTML = "Aqua";
    document.getElementById('brll').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-red'){
    console.log('here')
    document.getElementById('brll-label').style.background = 'red'
    document.getElementById("brll-title").innerHTML = "Red";
    document.getElementById('brll').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-neon-green'){
    document.getElementById('brll-label').style.background = '#29f04f'
    document.getElementById("brll-title").innerHTML = "Neon Green";
    document.getElementById('brll').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-hot-pink'){
    document.getElementById('brll-label').style.background = '#e929f0'
    document.getElementById("brll-title").innerHTML = "Hot Pink";
    document.getElementById('brll').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-yellow'){
    document.getElementById('brll-label').style.background = 'yellow'
    document.getElementById("brll-title").innerHTML = "Yellow";
    document.getElementById('brll').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-maroon'){
    document.getElementById('brll-label').style.background = '#cb0039'
    document.getElementById("brll-title").innerHTML = "Maroon";
    document.getElementById('brll').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-grey'){
    document.getElementById('brll-label').style.background = '#969696'
    document.getElementById("brll-title").innerHTML = "Grey";
    document.getElementById('brll').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-navy'){
    document.getElementById('brll-label').style.background = '#152c91'
    document.getElementById("brll-title").innerHTML = "Navy";
    document.getElementById('brll').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-purple'){
    document.getElementById('brll-label').style.background = 'purple'
    document.getElementById("brll-title").innerHTML = "Purple";
    document.getElementById('brll').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-darkGreen'){
    document.getElementById('brll-label').style.background = 'Green'
    document.getElementById("brll-title").innerHTML = "Green";
    document.getElementById('brll').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-darkGrey'){
    document.getElementById('brll-label').style.background = '#494949'
    document.getElementById("brll-title").innerHTML = "Dark Grey";
    document.getElementById('brll').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-blue'){
    document.getElementById('brll-label').style.background = 'blue'
    document.getElementById("brll-title").innerHTML = "blue";
    document.getElementById('brll').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-lime'){
    document.getElementById('brll-label').style.background = '#09b600'
    document.getElementById("brll-title").innerHTML = "Lime";
    document.getElementById('brll').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-white'){
    document.getElementById('brll-label').style.background = 'White'
    document.getElementById("brll-title").innerHTML = "White";
    document.getElementById('brll').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-black'){
    document.getElementById('brll-label').style.background = 'brllack'
    document.getElementById("brll-title").innerHTML = "brllack";
    document.getElementById('brll').style.fill = 'brllack'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-teal'){
    document.getElementById('brll-label').style.background = '#00b692'
    document.getElementById("brll-title").innerHTML = "Teal";
    document.getElementById('brll').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-aqua'){
    console.log('here')
    document.getElementById('blll-label').style.background = '#129793'
    document.getElementById("blll-title").innerHTML = "Aqua";
    document.getElementById('blll').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-red'){
    console.log('here')
    document.getElementById('blll-label').style.background = 'red'
    document.getElementById("blll-title").innerHTML = "Red";
    document.getElementById('blll').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-neon-green'){
    document.getElementById('blll-label').style.background = '#29f04f'
    document.getElementById("blll-title").innerHTML = "Neon Green";
    document.getElementById('blll').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-hot-pink'){
    document.getElementById('blll-label').style.background = '#e929f0'
    document.getElementById("blll-title").innerHTML = "Hot Pink";
    document.getElementById('blll').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-yellow'){
    document.getElementById('blll-label').style.background = 'yellow'
    document.getElementById("blll-title").innerHTML = "Yellow";
    document.getElementById('blll').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-maroon'){
    document.getElementById('blll-label').style.background = '#cb0039'
    document.getElementById("blll-title").innerHTML = "Maroon";
    document.getElementById('blll').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-grey'){
    document.getElementById('blll-label').style.background = '#969696'
    document.getElementById("blll-title").innerHTML = "Grey";
    document.getElementById('blll').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-navy'){
    document.getElementById('blll-label').style.background = '#152c91'
    document.getElementById("blll-title").innerHTML = "Navy";
    document.getElementById('blll').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-purple'){
    document.getElementById('blll-label').style.background = 'purple'
    document.getElementById("blll-title").innerHTML = "Purple";
    document.getElementById('blll').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-darkGreen'){
    document.getElementById('blll-label').style.background = 'Green'
    document.getElementById("blll-title").innerHTML = "Green";
    document.getElementById('blll').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-darkGrey'){
    document.getElementById('blll-label').style.background = '#494949'
    document.getElementById("blll-title").innerHTML = "Dark Grey";
    document.getElementById('blll').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-blue'){
    document.getElementById('blll-label').style.background = 'blue'
    document.getElementById("blll-title").innerHTML = "blue";
    document.getElementById('blll').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-lime'){
    document.getElementById('blll-label').style.background = '#09b600'
    document.getElementById("blll-title").innerHTML = "Lime";
    document.getElementById('blll').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-white'){
    document.getElementById('blll-label').style.background = 'White'
    document.getElementById("blll-title").innerHTML = "White";
    document.getElementById('blll').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-black'){
    document.getElementById('blll-label').style.background = 'blllack'
    document.getElementById("blll-title").innerHTML = "blllack";
    document.getElementById('blll').style.fill = 'blllack'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-teal'){
    document.getElementById('blll-label').style.background = '#00b692'
    document.getElementById("blll-title").innerHTML = "Teal";
    document.getElementById('blll').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }




}
//  faller
// colorPickerDropdownBack middler
function colorPickerDropdownBack(drop){
  if(drop === 'blua'){
    document.getElementById('color-picker-dropdown-blua').style.display = 'flex'
  }
  if(drop === 'back-lineing'){
    document.getElementById('color-picker-dropdown-back-lineing').style.display = 'flex'
  }
  if(drop === 'br'){
    document.getElementById('color-picker-dropdown-br').style.display = 'flex'
  }
  if(drop === 'bl'){
    document.getElementById('color-picker-dropdown-bl').style.display = 'flex'
  }
  if(drop === 'brc'){
    document.getElementById('color-picker-dropdown-brc').style.display = 'flex'
  }
  if(drop === 'blc'){
    document.getElementById('color-picker-dropdown-blc').style.display = 'flex'
  }
  if(drop === 'brml'){
    document.getElementById('color-picker-dropdown-brml').style.display = 'flex'
  }
  if(drop === 'blml'){
    document.getElementById('color-picker-dropdown-blml').style.display = 'flex'
  }
  if(drop === 'brly'){
    document.getElementById('color-picker-dropdown-brly').style.display = 'flex'
  }
  if(drop === 'blly'){
    document.getElementById('color-picker-dropdown-blly').style.display = 'flex'
  }
  if(drop === 'brll'){
    document.getElementById('color-picker-dropdown-brll').style.display = 'flex'
  }
  if(drop === 'blll'){
    document.getElementById('color-picker-dropdown-blll').style.display = 'flex'
  }
  if(drop === 'tfab'){
    document.getElementById('color-picker-dropdown-tfab').style.display = 'flex'
  }
}
// taller
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
  //  document.getElementById("landingFormValidate_ul_page_9205_submit").click();
  //  let url = "https://chuteoutsports.dev.userlite.com/website"
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
