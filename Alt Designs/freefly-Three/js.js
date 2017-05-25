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
  //front right back prev
  if(color === 'frbprev-aqua'){
    console.log('here')
    document.getElementById('frbprev-label').style.background = '#129793'
    document.getElementById("frbprev-title").innerHTML = "Aqua";
    document.getElementById('frbprev').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-neon-green'){
    document.getElementById('frbprev-label').style.background = '#29f04f'
    document.getElementById("frbprev-title").innerHTML = "Neon Green";
    document.getElementById('frbprev').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-hot-pink'){
    document.getElementById('frbprev-label').style.background = '#e929f0'
    document.getElementById("frbprev-title").innerHTML = "Hot Pink";
    document.getElementById('frbprev').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-yellow'){
    document.getElementById('frbprev-label').style.background = 'yellow'
    document.getElementById("frbprev-title").innerHTML = "Yellow";
    document.getElementById('frbprev').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-maroon'){
    document.getElementById('frbprev-label').style.background = '#cb0039'
    document.getElementById("frbprev-title").innerHTML = "Maroon";
    document.getElementById('frbprev').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-grey'){
    document.getElementById('frbprev-label').style.background = '#969696'
    document.getElementById("frbprev-title").innerHTML = "Grey";
    document.getElementById('frbprev').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-navy'){
    document.getElementById('frbprev-label').style.background = '#152c91'
    document.getElementById("frbprev-title").innerHTML = "Navy";
    document.getElementById('frbprev').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-purple'){
    document.getElementById('frbprev-label').style.background = 'purple'
    document.getElementById("frbprev-title").innerHTML = "Purple";
    document.getElementById('frbprev').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-darkGreen'){
    document.getElementById('frbprev-label').style.background = 'Green'
    document.getElementById("frbprev-title").innerHTML = "Green";
    document.getElementById('frbprev').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-darkGrey'){
    document.getElementById('frbprev-label').style.background = '#494949'
    document.getElementById("frbprev-title").innerHTML = "Dark Grey";
    document.getElementById('frbprev').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-blue'){
    document.getElementById('frbprev-label').style.background = 'blue'
    document.getElementById("frbprev-title").innerHTML = "Blue";
    document.getElementById('frbprev').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-lime'){
    document.getElementById('frbprev-label').style.background = '#09b600'
    document.getElementById("frbprev-title").innerHTML = "Lime";
    document.getElementById('frbprev').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-white'){
    document.getElementById('frbprev-label').style.background = 'White'
    document.getElementById("frbprev-title").innerHTML = "White";
    document.getElementById('frbprev').style.fill = 'White'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-black'){
    document.getElementById('frbprev-label').style.background = 'Black'
    document.getElementById("frbprev-title").innerHTML = "Black";
    document.getElementById('frbprev').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'frbprev-teal'){
    document.getElementById('frbprev-label').style.background = '#00b692'
    document.getElementById("frbprev-title").innerHTML = "Teal";
    document.getElementById('frbprev').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-frbprev').style.display = 'none'
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
