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
  if(color === 'grip-hot-pink'){
    document.getElementById('gripers-label').style.background = '#e929f0'
    document.getElementById("gripers-title").innerHTML = "Hot Pink";
    document.getElementById('front-left-arm-gripper').style.fill = '#e929f0'
    document.getElementById('front-right-arm-gripper').style.fill = '#29f04f'
    document.getElementById('front-left-leg-gripper').style.fill = '#29f04f'
    document.getElementById('front-right-leg-gripper').style.fill = '#29f04f'
    document.getElementById('back-left-arm-griper').style.fill = '#29f04f'
    document.getElementById('back-right-arm-griper').style.fill = '#29f04f'
    document.getElementById('back-leg-grippers').style.fill = '#29f04f'
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
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-neon-green'){
  document.getElementById('front-left-label').style.background = '#29f04f'
  document.getElementById("front-left-title").innerHTML = "Neon Green";
  document.getElementById('front-left-chest').style.fill = '#29f04f'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-hot-pink'){
  document.getElementById('front-left-label').style.background = '#e929f0'
  document.getElementById("front-left-title").innerHTML = "Hot Pink";
  document.getElementById('front-left-chest').style.fill = '#e929f0'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-yellow'){
  document.getElementById('front-left-label').style.background = 'yellow'
  document.getElementById("front-left-title").innerHTML = "Yellow";
  document.getElementById('front-left-chest').style.fill = 'yellow'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-maroon'){
  document.getElementById('front-left-label').style.background = '#cb0039'
  document.getElementById("front-left-title").innerHTML = "Maroon";
  document.getElementById('front-left-chest').style.fill = '#cb0039'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-grey'){
  document.getElementById('front-left-label').style.background = '#969696'
  document.getElementById("front-left-title").innerHTML = "Grey";
  document.getElementById('front-left-chest').style.fill = '#969696'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-navy'){
  document.getElementById('front-left-label').style.background = '#152c91'
  document.getElementById("front-left-title").innerHTML = "Navy";
  document.getElementById('front-left-chest').style.fill = '#152c91'
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
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-darkGrey'){
  document.getElementById('front-left-label').style.background = '#494949'
  document.getElementById("front-left-title").innerHTML = "Dark Grey";
  document.getElementById('front-left-chest').style.fill = '#494949'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-blue'){
  document.getElementById('front-left-label').style.background = 'blue'
  document.getElementById("front-left-title").innerHTML = "Blue";
  document.getElementById('front-left-chest').style.fill = 'blue'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-lime'){
  document.getElementById('front-left-label').style.background = '#09b600'
  document.getElementById("front-left-title").innerHTML = "Lime";
  document.getElementById('front-left-chest').style.fill = '#09b600'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-white'){
  document.getElementById('front-left-label').style.background = 'White'
  document.getElementById("front-left-title").innerHTML = "White";
  document.getElementById('front-left-chest').style.fill = 'White'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-black'){
  document.getElementById('front-left-label').style.background = 'Black'
  document.getElementById("front-left-title").innerHTML = "Black";
  document.getElementById('front-left-chest').style.fill = 'Black'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-left-teal'){
  document.getElementById('front-left-label').style.background = '#00b692'
  document.getElementById("front-left-title").innerHTML = "Teal";
  document.getElementById('front-left-chest').style.fill = '#00b692'
  document.getElementById('color-picker-dropdown-front-right').style.display = 'none'
  dropdownCtrl = true
}
//Front left
if(color === 'front-right-aqua'){
  console.log('here')
  document.getElementById('front-right-label').style.background = '#129793'
  document.getElementById("front-right-title").innerHTML = "Aqua";
  document.getElementById('front-right-chest').style.fill = '#129793'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-neon-green'){
  document.getElementById('front-right-label').style.background = '#29f04f'
  document.getElementById("front-right-title").innerHTML = "Neon Green";
  document.getElementById('front-right-chest').style.fill = '#29f04f'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-hot-pink'){
  document.getElementById('front-right-label').style.background = '#e929f0'
  document.getElementById("front-right-title").innerHTML = "Hot Pink";
  document.getElementById('front-right-chest').style.fill = '#e929f0'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-yellow'){
  document.getElementById('front-right-label').style.background = 'yellow'
  document.getElementById("front-right-title").innerHTML = "Yellow";
  document.getElementById('front-right-chest').style.fill = 'yellow'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-maroon'){
  document.getElementById('front-right-label').style.background = '#cb0039'
  document.getElementById("front-right-title").innerHTML = "Maroon";
  document.getElementById('front-right-chest').style.fill = '#cb0039'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-grey'){
  document.getElementById('front-right-label').style.background = '#969696'
  document.getElementById("front-right-title").innerHTML = "Grey";
  document.getElementById('front-right-chest').style.fill = '#969696'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-navy'){
  document.getElementById('front-right-label').style.background = '#152c91'
  document.getElementById("front-right-title").innerHTML = "Navy";
  document.getElementById('front-right-chest').style.fill = '#152c91'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-purple'){
  document.getElementById('front-right-label').style.background = 'purple'
  document.getElementById("front-right-title").innerHTML = "Purple";
  document.getElementById('front-right-chest').style.fill = 'purple'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-darkGreen'){
  document.getElementById('front-right-label').style.background = 'Green'
  document.getElementById("front-right-title").innerHTML = "Green";
  document.getElementById('front-right-chest').style.fill = 'Green'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-darkGrey'){
  document.getElementById('front-right-label').style.background = '#494949'
  document.getElementById("front-right-title").innerHTML = "Dark Grey";
  document.getElementById('front-right-chest').style.fill = '#494949'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-blue'){
  document.getElementById('front-right-label').style.background = 'blue'
  document.getElementById("front-right-title").innerHTML = "Blue";
  document.getElementById('front-right-chest').style.fill = 'blue'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-lime'){
  document.getElementById('front-right-label').style.background = '#09b600'
  document.getElementById("front-right-title").innerHTML = "Lime";
  document.getElementById('front-right-chest').style.fill = '#09b600'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-white'){
  document.getElementById('front-right-label').style.background = 'White'
  document.getElementById("front-right-title").innerHTML = "White";
  document.getElementById('front-right-chest').style.fill = 'White'
  document.getElementById('color-picker-dropdown-front-left').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'front-right-black'){
  document.getElementById('front-right-label').style.background = 'Black'
  document.getElementById("front-right-title").innerHTML = "Black";
  document.getElementById('front-right-chest').style.fill = 'Black'
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
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-neon-green'){
  document.getElementById('front-right-lower-arm-label').style.background = '#29f04f'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Neon Green";
  document.getElementById('front-right-lower-arm').style.fill = '#29f04f'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-hot-pink'){
  document.getElementById('front-right-lower-arm-label').style.background = '#e929f0'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Hot Pink";
  document.getElementById('front-right-lower-arm').style.fill = '#e929f0'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-yellow'){
  document.getElementById('front-right-lower-arm-label').style.background = 'yellow'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Yellow";
  document.getElementById('front-right-lower-arm').style.fill = 'yellow'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-maroon'){
  document.getElementById('front-right-lower-arm-label').style.background = '#cb0039'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Maroon";
  document.getElementById('front-right-lower-arm').style.fill = '#cb0039'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-grey'){
  document.getElementById('front-right-lower-arm-label').style.background = '#969696'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Grey";
  document.getElementById('front-right-lower-arm').style.fill = '#969696'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-navy'){
  document.getElementById('front-right-lower-arm-label').style.background = '#152c91'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Navy";
  document.getElementById('front-right-lower-arm').style.fill = '#152c91'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-purple'){
  document.getElementById('front-right-lower-arm-label').style.background = 'purple'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Purple";
  document.getElementById('front-right-lower-arm').style.fill = 'purple'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-darkGreen'){
  document.getElementById('front-right-lower-arm-label').style.background = 'Green'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Green";
  document.getElementById('front-right-lower-arm').style.fill = 'Green'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-darkGrey'){
  document.getElementById('front-right-lower-arm-label').style.background = '#494949'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Dark Grey";
  document.getElementById('front-right-lower-arm').style.fill = '#494949'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-blue'){
  document.getElementById('front-right-lower-arm-label').style.background = 'blue'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Blue";
  document.getElementById('front-right-lower-arm').style.fill = 'blue'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-lime'){
  document.getElementById('front-right-lower-arm-label').style.background = '#09b600'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Lime";
  document.getElementById('front-right-lower-arm').style.fill = '#09b600'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-white'){
  document.getElementById('front-right-lower-arm-label').style.background = 'White'
  document.getElementById("front-right-lower-arm-title").innerHTML = "White";
  document.getElementById('front-right-lower-arm').style.fill = 'White'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-black'){
  document.getElementById('front-right-lower-arm-label').style.background = 'Black'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Black";
  document.getElementById('front-right-lower-arm').style.fill = 'Black'
  document.getElementById('color-picker-dropdown-frla').style.display = 'none'
  dropdownCtrl = true
}
if(color === 'frla-teal'){
  document.getElementById('front-right-lower-arm-label').style.background = '#00b692'
  document.getElementById("front-right-lower-arm-title").innerHTML = "Teal";
  document.getElementById('front-right-lower-arm').style.fill = '#00b692'
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
  if(color === 'bluablualack'){
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
