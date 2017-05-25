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
  if(drop === 'collar'){
    document.getElementById('color-picker-dropdown-collar').style.display = 'flex'
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
