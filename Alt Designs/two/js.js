
// ###############
// ###############
                  //price section Beginning
document.getElementById('price-banner-wrap').style.left = '0px '
                  //price section Ending
// ###############
// ###############

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
}
adminColorControl()
console.log(document.getElementById('admin-aqua').InnerHTML)
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

// show colors dropdown
function colorPickerDropdownBack(position){
  if(position === 'left-upper-arm' && dropdownCtrlBack === true){
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'right-upper-arm' && dropdownCtrlBack === true){
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'right-lower-arm' && dropdownCtrlBack === true){
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'left-lower-arm' && dropdownCtrlBack === true){
    console.log('gothere')
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'left-wing' && dropdownCtrlBack === true){
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'right-wing' && dropdownCtrlBack === true){
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'body-wrap' && dropdownCtrlBack === true){
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'body-left' && dropdownCtrlBack === true){
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'collar' && dropdownCtrlBack === true){
    document.getElementById('lineing').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'body-right' && dropdownCtrlBack === true){
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'lineing' && dropdownCtrlBack === true){
    document.getElementById('color-picker-dropdown-lineing').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'fab' && dropdownCtrlBack === true){
    document.getElementById('color-picker-dropdown-fab').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'pipe' && dropdownCtrlBack === true){
    document.getElementById('back-color-picker-dropdown-piping').style.display = 'flex'
    dropdownCtrlBack = false
    return
  }
  if(position === 'back-left-elbow' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'back-right-elbow' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'flex'
    dropdownCtrl = false
    return
  }
}
function run(){
  dropdownCtrlBack = true
}
//choose your color
function colorPickerSelectBack(color){
  //back left elbow
  if(color === 'ble-aqua'){
    console.log('here')
    document.getElementById('back-left-elbow-label').style.background = '#129793'
    document.getElementById("back-left-elbow-title").innerHTML = "Aqua";
    document.getElementById('back-left-elbow').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-neon-green'){
    document.getElementById('back-left-elbow-label').style.background = '#29f04f'
    document.getElementById("back-left-elbow-title").innerHTML = "Neon Green";
    document.getElementById('back-left-elbow').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-hot-pink'){
    document.getElementById('back-left-elbow-label').style.background = '#e929f0'
    document.getElementById("back-left-elbow-title").innerHTML = "Hot Pink";
    document.getElementById('back-left-elbow').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-yellow'){
    document.getElementById('back-left-elbow-label').style.background = 'yellow'
    document.getElementById("back-left-elbow-title").innerHTML = "Yellow";
    document.getElementById('back-left-elbow').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-maroon'){
    document.getElementById('back-left-elbow-label').style.background = '#cb0039'
    document.getElementById("back-left-elbow-title").innerHTML = "Maroon";
    document.getElementById('back-left-elbow').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-grey'){
    document.getElementById('back-left-elbow-label').style.background = '#969696'
    document.getElementById("back-left-elbow-title").innerHTML = "Grey";
    document.getElementById('back-left-elbow').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-navy'){
    document.getElementById('back-left-elbow-label').style.background = '#152c91'
    document.getElementById("back-left-elbow-title").innerHTML = "Navy";
    document.getElementById('back-left-elbow').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-purple'){
    document.getElementById('back-left-elbow-label').style.background = 'purple'
    document.getElementById("back-left-elbow-title").innerHTML = "Purple";
    document.getElementById('back-left-elbow').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-darkGreen'){
    document.getElementById('back-left-elbow-label').style.background = 'Green'
    document.getElementById("back-left-elbow-title").innerHTML = "Green";
    document.getElementById('back-left-elbow').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-darkGrey'){
    document.getElementById('back-left-elbow-label').style.background = '#494949'
    document.getElementById("back-left-elbow-title").innerHTML = "Dark Grey";
    document.getElementById('back-left-elbow').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-blue'){
    document.getElementById('back-left-elbow-label').style.background = 'blue'
    document.getElementById("back-left-elbow-title").innerHTML = "Blue";
    document.getElementById('back-left-elbow').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-lime'){
    document.getElementById('back-left-elbow-label').style.background = '#09b600'
    document.getElementById("back-left-elbow-title").innerHTML = "Lime";
    document.getElementById('back-left-elbow').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-white'){
    document.getElementById('back-left-elbow-label').style.background = 'White'
    document.getElementById("back-left-elbow-title").innerHTML = "White";
    document.getElementById('back-left-elbow').style.fill = 'White'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-black'){
    document.getElementById('back-left-elbow-label').style.background = 'Black'
    document.getElementById("back-left-elbow-title").innerHTML = "Black";
    document.getElementById('back-left-elbow').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-teal'){
    document.getElementById('back-left-elbow-label').style.background = '#00b692'
    document.getElementById("back-left-elbow-title").innerHTML = "Teal";
    document.getElementById('back-left-elbow').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-back-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  //back right elbow
  if(color === 'bre-aqua'){
    console.log('here')
    document.getElementById('back-right-elbow-label').style.background = '#129793'
    document.getElementById("back-right-elbow-title").innerHTML = "Aqua";
    document.getElementById('back-right-elbow').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-neon-green'){
    document.getElementById('back-right-elbow-label').style.background = '#29f04f'
    document.getElementById("back-right-elbow-title").innerHTML = "Neon Green";
    document.getElementById('back-right-elbow').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-hot-pink'){
    document.getElementById('back-right-elbow-label').style.background = '#e929f0'
    document.getElementById("back-right-elbow-title").innerHTML = "Hot Pink";
    document.getElementById('back-right-elbow').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-yellow'){
    document.getElementById('back-right-elbow-label').style.background = 'yellow'
    document.getElementById("back-right-elbow-title").innerHTML = "Yellow";
    document.getElementById('back-right-elbow').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-maroon'){
    document.getElementById('back-right-elbow-label').style.background = '#cb0039'
    document.getElementById("back-right-elbow-title").innerHTML = "Maroon";
    document.getElementById('back-right-elbow').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-grey'){
    document.getElementById('back-right-elbow-label').style.background = '#969696'
    document.getElementById("back-right-elbow-title").innerHTML = "Grey";
    document.getElementById('back-right-elbow').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-navy'){
    document.getElementById('back-right-elbow-label').style.background = '#152c91'
    document.getElementById("back-right-elbow-title").innerHTML = "Navy";
    document.getElementById('back-right-elbow').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-purple'){
    document.getElementById('back-right-elbow-label').style.background = 'purple'
    document.getElementById("back-right-elbow-title").innerHTML = "Purple";
    document.getElementById('back-right-elbow').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-darkGreen'){
    document.getElementById('back-right-elbow-label').style.background = 'Green'
    document.getElementById("back-right-elbow-title").innerHTML = "Green";
    document.getElementById('back-right-elbow').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-darkGrey'){
    document.getElementById('back-right-elbow-label').style.background = '#494949'
    document.getElementById("back-right-elbow-title").innerHTML = "Dark Grey";
    document.getElementById('back-right-elbow').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-blue'){
    document.getElementById('back-right-elbow-label').style.background = 'blue'
    document.getElementById("back-right-elbow-title").innerHTML = "Blue";
    document.getElementById('back-right-elbow').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-lime'){
    document.getElementById('back-right-elbow-label').style.background = '#09b600'
    document.getElementById("back-right-elbow-title").innerHTML = "Lime";
    document.getElementById('back-right-elbow').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-white'){
    document.getElementById('back-right-elbow-label').style.background = 'White'
    document.getElementById("back-right-elbow-title").innerHTML = "White";
    document.getElementById('back-right-elbow').style.fill = 'White'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-black'){
    document.getElementById('back-right-elbow-label').style.background = 'Black'
    document.getElementById("back-right-elbow-title").innerHTML = "Black";
    document.getElementById('back-right-elbow').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-teal'){
    document.getElementById('back-right-elbow-label').style.background = '#00b692'
    document.getElementById("back-right-elbow-title").innerHTML = "Teal";
    document.getElementById('back-right-elbow').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-back-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  //left upper arm control
  if(color === 'lua-aqua'){
    document.getElementById('back-left-upper-arm-label').style.background = '#129793'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Aqua";
    document.getElementById('back-left-top-arm').style.fill = '#129793'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-neon-green'){
    document.getElementById('back-left-upper-arm-label').style.background = '#29f04f'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Neon Green";
    document.getElementById('back-left-top-arm').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-hot-pink'){
    document.getElementById('back-left-upper-arm-label').style.background = '#e929f0'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Hot Pink";
    document.getElementById('back-left-top-arm').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-yellow'){
    document.getElementById('back-left-upper-arm-label').style.background = 'yellow'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Yellow";
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-maroon'){
    document.getElementById('back-left-upper-arm-label').style.background = '#cb0039'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Maroon";
    document.getElementByID ('back-left-top-arm').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-grey'){
    document.getElementById('back-left-upper-arm-label').style.background = '#969696'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Grey";
    document.getElementById('back-left-top-arm').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-navy'){
    document.getElementById('back-left-upper-arm-label').style.background = '#152c91'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Navy";
    document.getElementById('back-left-top-arm').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-purple'){
    document.getElementById('back-left-upper-arm-label').style.background = 'purple'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Purple";
    document.getElementById('back-left-top-arm').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-darkGreen'){
    document.getElementById('back-left-upper-arm-label').style.background = 'Green'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Green";
    document.getElementById('back-left-top-arm').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-darkGrey'){
    document.getElementById('back-left-upper-arm-label').style.background = '#494949'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Dark Grey";
    document.getElementById('back-left-top-arm').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-blue'){
    document.getElementById('back-left-upper-arm-label').style.background = 'blue'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Blue";
    document.getElementById('back-left-top-arm').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-lime'){
    document.getElementById('back-left-upper-arm-label').style.background = '#09b600'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Lime";
    document.getElementById('back-left-top-arm').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-white'){
    document.getElementById('back-left-upper-arm-label').style.background = 'White'
    document.getElementById("back-left-upper-arm-title").innerHTML = "White";
    document.getElementById('back-left-top-arm').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-black'){
    document.getElementById('back-left-upper-arm-label').style.background = 'Black'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Black";
    document.getElementById('back-left-top-arm').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lua-teal'){
    document.getElementById('back-left-upper-arm-label').style.background = '#00b692'
    document.getElementById("back-left-upper-arm-title").innerHTML = "Teal";
    document.getElementById('back-left-top-arm').style.fill = '#00b692'
    document.getElementById('back-color-picker-dropdown-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  //right upper arm control
  if(color === 'rua-aqua'){
    document.getElementById('back-right-upper-arm-label').style.background = '#129793'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Aqua";
    document.getElementById('back-right-arm').style.fill = '#129793'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'rua-neon-green'){
    document.getElementById('back-right-upper-arm-label').style.background = '#29f04f'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Neon Green";
    document.getElementById('back-right-arm').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-hot-pink'){
    document.getElementById('back-right-upper-arm-label').style.background = '#e929f0'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Hot Pink";
    document.getElementById('back-right-arm').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-yellow'){
    document.getElementById('back-right-upper-arm-label').style.background = 'yellow'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Yellow";
    document.getElementById('back-right-arm').style.fill = 'yellow'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-maroon'){
    document.getElementById('back-right-upper-arm-label').style.background = '#cb0039'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Maroon";
    document.getElementById('back-right-arm').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-grey'){
    document.getElementById('back-right-upper-arm-label').style.background = '#969696'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Grey";
    document.getElementById('back-right-arm').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-navy'){
    document.getElementById('back-right-upper-arm-label').style.background = '#152c91'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Navy";
    document.getElementById('back-right-arm').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-purple'){
    document.getElementById('back-right-upper-arm-label').style.background = 'purple'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Purple";
    document.getElementById('back-right-arm').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-darkGreen'){
    document.getElementById('back-right-upper-arm-label').style.background = 'Green'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Green";
    document.getElementById('back-right-arm').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-darkGrey'){
    document.getElementById('back-right-upper-arm-label').style.background = '#494949'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Dark Grey";
    document.getElementById('back-right-arm').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-blue'){
    document.getElementById('back-right-upper-arm-label').style.background = 'blue'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Blue";
    document.getElementById('back-right-arm').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-lime'){
    document.getElementById('back-right-upper-arm-label').style.background = '#09b600'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Lime";
    document.getElementById('back-right-arm').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-white'){
    document.getElementById('back-right-upper-arm-label').style.background = 'White'
    document.getElementById("back-right-upper-arm-title").innerHTML = "White";
    document.getElementById('back-right-arm').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-black'){
    document.getElementById('back-right-upper-arm-label').style.background = 'Black'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Black";
    document.getElementById('back-right-arm').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rua-teal'){
    document.getElementById('back-right-upper-arm-label').style.background = '#00b692'
    document.getElementById("back-right-upper-arm-title").innerHTML = "Teal";
    document.getElementById('back-back-right-arm').style.fill = '#00b692'
    document.getElementById('back-color-picker-dropdown-right-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  //left lower arm control
  if(color === 'lla-aqua'){
    document.getElementById('back-left-lower-arm-label').style.background = '#129793'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Aqua";
    document.getElementById('back-left-arm').style.fill = '#129793'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-neon-green'){
    document.getElementById('back-left-lower-arm-label').style.background = '#29f04f'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Neon Green";
    document.getElementById('back-left-arm').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-hot-pink'){
    document.getElementById('back-left-lower-arm-label').style.background = '#e929f0'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Hot Pink";
    document.getElementById('back-left-arm').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-yellow'){
    document.getElementById('back-left-lower-arm-label').style.background = 'yellow'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Yellow";
    document.getElementById('back-left-arm').style.fill = 'yellow'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-maroon'){
    document.getElementById('left-upper-arm-label').style.background = '#cb0039'
    document.getElementById("left-upper-arm-title").innerHTML = "Maroon";
    document.getElementById('back-left-arm').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-grey'){
    document.getElementById('left-upper-arm-label').style.background = '#969696'
    document.getElementById("left-upper-arm-title").innerHTML = "Grey";
    document.getElementById('back-left-arm').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-navy'){
    document.getElementById('back-left-lower-arm-label').style.background = '#152c91'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Navy";
    document.getElementById('back-left-arm').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-purple'){
    document.getElementById('back-left-lower-arm-label').style.background = 'purple'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Purple";
    document.getElementById('back-left-arm').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-darkGreen'){
    document.getElementById('back-left-lower-arm-label').style.background = 'Green'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Green";
    document.getElementById('back-left-arm').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-darkGrey'){
    document.getElementById('back-left-lower-arm-label').style.background = '#494949'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Dark Grey";
    document.getElementById('back-left-arm').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-blue'){
    document.getElementById('back-left-lower-arm-label').style.background = 'blue'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Blue";
    document.getElementById('back-left-arm').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-lime'){
    document.getElementById('back-left-lower-arm-label').style.background = '#09b600'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Lime";
    document.getElementById('back-left-arm').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-white'){
    document.getElementById('back-left-lower-arm-label').style.background = 'White'
    document.getElementById("back-left-lower-arm-title").innerHTML = "White";
    document.getElementById('back-left-arm').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-black'){
    document.getElementById('back-left-lower-arm-label').style.background = 'Black'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Black";
    document.getElementById('back-left-arm').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lla-teal'){
    document.getElementById('back-left-lower-arm-label').style.background = '#00b692'
    document.getElementById("back-left-lower-arm-title").innerHTML = "Teal";
    document.getElementById('back-left-arm').style.fill = '#00b692'
    document.getElementById('back-color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  //right lower arm control
  if(color === 'rla-aqua'){
    document.getElementById('back-right-lower-arm-label').style.background = '#129793'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Aqua";
    document.getElementById('back-righ-top-arm').style.fill = '#129793'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'rla-neon-green'){
    document.getElementById('back-right-lower-arm-label').style.background = '#29f04f'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Neon Green";
    document.getElementById('back-righ-top-arm').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-hot-pink'){
    document.getElementById('back-right-lower-arm-label').style.background = '#e929f0'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Hot Pink";
    document.getElementById('back-righ-top-arm').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-yellow'){
    document.getElementById('back-right-lower-arm-label').style.background = 'yellow'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Yellow";
    document.getElementById('back-righ-top-arm').style.fill = 'yellow'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-maroon'){
    document.getElementById('right-upper-arm-label').style.background = '#cb0039'
    document.getElementById("right-upper-arm-title").innerHTML = "Maroon";
    document.getElementById('back-righ-top-arm').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-grey'){
    document.getElementById('right-upper-arm-label').style.background = '#969696'
    document.getElementById("right-upper-arm-title").innerHTML = "Grey";
    document.getElementById('back-righ-top-arm').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-navy'){
    document.getElementById('back-right-lower-arm-label').style.background = '#152c91'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Navy";
    document.getElementById('back-righ-top-arm').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-purple'){
    document.getElementById('back-right-lower-arm-label').style.background = 'purple'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Purple";
    document.getElementById('back-righ-top-arm').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-darkGreen'){
    document.getElementById('back-right-lower-arm-label').style.background = 'Green'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Green";
    document.getElementById('back-righ-top-arm').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-darkGrey'){
    document.getElementById('back-right-lower-arm-label').style.background = '#494949'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Dark Grey";
    document.getElementById('back-righ-top-arm').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-blue'){
    document.getElementById('back-right-lower-arm-label').style.background = 'blue'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Blue";
    document.getElementById('back-righ-top-arm').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-lime'){
    document.getElementById('back-right-lower-arm-label').style.background = '#09b600'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Lime";
    document.getElementById('back-righ-top-arm').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-white'){
    document.getElementById('back-right-lower-arm-label').style.background = 'White'
    document.getElementById("back-right-lower-arm-title").innerHTML = "White";
    document.getElementById('back-righ-top-arm').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-black'){
    document.getElementById('back-right-lower-arm-label').style.background = 'Black'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Black";
    document.getElementById('back-righ-top-arm').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rla-teal'){
    document.getElementById('back-right-lower-arm-label').style.background = '#00b692'
    document.getElementById("back-right-lower-arm-title").innerHTML = "Teal";
    document.getElementById('back-righ-top-arm').style.fill = '#00b692'
    document.getElementById('back-color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrlBack = true
  }
  //left wing control
  if(color === 'lw-aqua'){
    document.getElementById('left-wing-label').style.background = '#129793'
    document.getElementById("back-left-wing-title").innerHTML = "Aqua";
    document.getElementById('back-left-wing').style.fill = '#129793'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'lw-neon-green'){
    document.getElementById('back-left-wing-label').style.background = '#29f04f'
    document.getElementById("back-left-wing-title").innerHTML = "Neon Green";
    document.getElementById('back-left-wing').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-hot-pink'){
    document.getElementById('back-left-wing-label').style.background = '#e929f0'
    document.getElementById("back-left-wing-title").innerHTML = "Hot Pink";
    document.getElementById('back-left-wing').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-yellow'){
    document.getElementById('back-left-wing-label').style.background = 'yellow'
    document.getElementById("back-left-wing-title").innerHTML = "Yellow";
    document.getElementById('back-left-wing').style.fill = 'yellow'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-maroon'){
    document.getElementById('back-left-wing-label').style.background = '#cb0039'
    document.getElementById("back-left-wing-title").innerHTML = "Maroon";
    document.getElementById('back-left-wing').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-grey'){
    document.getElementById('back-left-wing-label').style.background = '#969696'
    document.getElementById("back-left-wing-title").innerHTML = "Grey";
    document.getElementById('back-left-wing').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-navy'){
    document.getElementById('back-left-wing-label').style.background = '#152c91'
    document.getElementById("back-left-wing-title").innerHTML = "Navy";
    document.getElementById('back-left-wing').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-purple'){
    document.getElementById('back-left-wing-label').style.background = 'purple'
    document.getElementById("back-left-wing-title").innerHTML = "Purple";
    document.getElementById('back-left-wing').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-darkGreen'){
    document.getElementById('back-left-wing-label').style.background = 'Green'
    document.getElementById("back-left-wing-title").innerHTML = "Green";
    document.getElementById('back-left-wing').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-darkGrey'){
    document.getElementById('back-left-wing-label').style.background = '#494949'
    document.getElementById("back-left-wing-title").innerHTML = "Dark Grey";
    document.getElementById('back-left-wing').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-blue'){
    document.getElementById('back-left-wing-label').style.background = 'blue'
    document.getElementById("back-left-wing-title").innerHTML = "Blue";
    document.getElementById('back-left-wing').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-lime'){
    document.getElementById('back-left-wing-label').style.background = '#09b600'
    document.getElementById("back-left-wing-title").innerHTML = "Lime";
    document.getElementById('back-left-wing').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-white'){
    document.getElementById('back-left-wing-label').style.background = 'White'
    document.getElementById("back-left-wing-title").innerHTML = "White";
    document.getElementById('back-left-wing').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-black'){
    document.getElementById('back-left-wing-label').style.background = 'Black'
    document.getElementById("back-left-wing-title").innerHTML = "Black";
    document.getElementById('back-left-wing').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'lw-teal'){
    document.getElementById('back-left-wing-label').style.background = '#00b692'
    document.getElementById("back-left-wing-title").innerHTML = "Teal";
    document.getElementById('back-left-wing').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  //right wing control
  if(color === 'rw-aqua'){
    document.getElementById('back-right-wing-label').style.background = '#129793'
    document.getElementById("back-right-wing-label").innerHTML = "Aqua";
    document.getElementById('back-right-wing').style.fill = '#129793'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'rw-neon-green'){
    document.getElementById('back-right-wing-label').style.background = '#29f04f'
    document.getElementById("back-right-wing-label").innerHTML = "Neon Green";
    document.getElementById('back-right-wing').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-hot-pink'){
    document.getElementById('back-right-wing-label').style.background = '#e929f0'
    document.getElementById("back-right-wing-label").innerHTML = "Hot Pink";
    document.getElementById('back-right-wing').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-yellow'){
    document.getElementById('back-right-wing-label').style.background = 'yellow'
    document.getElementById("back-right-wing-label").innerHTML = "Yellow";
    document.getElementById('back-right-wing').style.fill = 'yellow'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-maroon'){
    document.getElementById('back-right-wing-label').style.background = '#cb0039'
    document.getElementById("back-right-wing-label").innerHTML = "Maroon";
    document.getElementById('back-right-wing').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-grey'){
    document.getElementById('back-right-wing-label').style.background = '#969696'
    document.getElementById("back-right-wing-label").innerHTML = "Grey";
    document.getElementById('back-right-wing').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-navy'){
    document.getElementById('back-right-wing-label').style.background = '#152c91'
    document.getElementById("back-right-wing-label").innerHTML = "Navy";
    document.getElementById('back-right-wing').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-purple'){
    document.getElementById('back-right-wing-label').style.background = 'purple'
    document.getElementById("back-right-wing-label").innerHTML = "Purple";
    document.getElementById('back-right-wing').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-darkGreen'){
    document.getElementById('back-right-wing-label').style.background = 'Green'
    document.getElementById("back-right-wing-label").innerHTML = "Green";
    document.getElementById('back-right-wing').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-darkGrey'){
    document.getElementById('back-right-wing-label').style.background = '#494949'
    document.getElementById("back-right-wing-label").innerHTML = "Dark Grey";
    document.getElementById('back-right-wing').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-blue'){
    document.getElementById('back-right-wing-label').style.background = 'blue'
    document.getElementById("back-right-wing-label").innerHTML = "Blue";
    document.getElementById('back-right-wing').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-lime'){
    document.getElementById('back-right-wing-label').style.background = '#09b600'
    document.getElementById("back-right-wing-label").innerHTML = "Lime";
    document.getElementById('back-right-wing').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-white'){
    document.getElementById('back-right-wing-label').style.background = 'White'
    document.getElementById("back-right-wing-label").innerHTML = "White";
    document.getElementById('back-right-wing').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-black'){
    document.getElementById('back-right-wing-label').style.background = 'Black'
    document.getElementById("back-right-wing-label").innerHTML = "Black";
    document.getElementById('back-right-wing').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'rw-teal'){
    document.getElementById('back-right-wing-label').style.background = '#00b692'
    document.getElementById("back-right-wing-label").innerHTML = "Teal";
    document.getElementById('back-right-wing').style.fill = '#00b692'
    document.getElementById('back-color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrlBack = true
  }
  //Body Wrap control
  if(color === 'bw-aqua'){
    // colorPickerSelect('bl-aqua')
    document.getElementById('back-body-wrap-label').style.background = '#129793'
    document.getElementById("back-body-wrap-title").innerHTML = "Aqua";
    document.getElementById('back-back').style.fill = '#129793'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'bw-neon-green'){
    // colorPickerSelect('bl-neon-green')
    document.getElementById('back-body-wrap-label').style.background = '#29f04f'
    document.getElementById("back-body-wrap-title").innerHTML = "Neon Green";
    document.getElementById('back-back').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-hot-pink'){
    document.getElementById('back-body-wrap-label').style.background = '#e929f0'
    document.getElementById("back-body-wrap-title").innerHTML = "Hot Pink";
    document.getElementById('back-back').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-yellow'){
    document.getElementById('back-body-wrap-label').style.background = 'yellow'
    document.getElementById("back-body-wrap-title").innerHTML = "Yellow";
    document.getElementById('back-back').style.fill = 'yellow'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-maroon'){
    document.getElementById('back-body-wrap-label').style.background = '#cb0039'
    document.getElementById("back-body-wrap-title").innerHTML = "Maroon";
    document.getElementById('back-back').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-grey'){
    document.getElementById('back-body-wrap-label').style.background = '#969696'
    document.getElementById("back-body-wrap-title").innerHTML = "Grey";
    document.getElementById('back-back').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-navy'){
    document.getElementById('back-body-wrap-label').style.background = '#152c91'
    document.getElementById("back-body-wrap-title").innerHTML = "Navy";
    document.getElementById('back-back').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-purple'){
    document.getElementById('back-body-wrap-label').style.background = 'purple'
    document.getElementById("back-body-wrap-title").innerHTML = "Purple";
    document.getElementById('back-back').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-darkGreen'){
    document.getElementById('back-body-wrap-label').style.background = 'Green'
    document.getElementById("back-body-wrap-title").innerHTML = "Green";
    document.getElementById('back-back').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-darkGrey'){
    document.getElementById('back-body-wrap-label').style.background = '#494949'
    document.getElementById("back-body-wrap-title").innerHTML = "Dark Grey";
    document.getElementById('back-back').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-blue'){
    document.getElementById('back-body-wrap-label').style.background = 'blue'
    document.getElementById("back-body-wrap-title").innerHTML = "Blue";
    document.getElementById('back-back').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-lime'){
    document.getElementById('back-body-wrap-label').style.background = '#09b600'
    document.getElementById("back-body-wrap-title").innerHTML = "Lime";
    document.getElementById('back-back').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-white'){
    document.getElementById('back-body-wrap-label').style.background = 'White'
    document.getElementById("back-body-wrap-title").innerHTML = "White";
    document.getElementById('back-back').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-black'){
    document.getElementById('back-body-wrap-label').style.background = 'Black'
    document.getElementById("back-body-wrap-title").innerHTML = "Black";
    document.getElementById('back-back').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bw-teal'){
    document.getElementById('back-body-wrap-label').style.background = '#00b692'
    document.getElementById("back-body-wrap-title").innerHTML = "Teal";
    document.getElementById('back-back').style.fill = '#00b692'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
  }
  //Body Left control
  if(color === 'bl-aqua'){
    document.getElementById('back-body-left-label').style.background = '#129793'
    document.getElementById("back-body-left-title").innerHTML = "Aqua";
    document.getElementById('back-left-stripe').style.fill = '#129793'
    document.getElementById('back-back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'bl-neon-green'){
    document.getElementById('back-body-left-label').style.background = '#29f04f'
    document.getElementById("back-body-left-title").innerHTML = "Neon Green";
    document.getElementById('back-left-stripe').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-hot-pink'){
    document.getElementById('back-body-left-label').style.background = '#e929f0'
    document.getElementById("back-body-left-title").innerHTML = "Hot Pink";
    document.getElementById('back-left-stripe').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-yellow'){
    document.getElementById('back-body-left-label').style.background = 'yellow'
    document.getElementById("back-body-left-title").innerHTML = "Yellow";
    document.getElementById('back-left-stripe').style.fill = 'yellow'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-maroon'){
    document.getElementById('back-body-left-label').style.background = '#cb0039'
    document.getElementById("back-body-left-title").innerHTML = "Maroon";
    document.getElementById('back-left-stripe').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-grey'){
    document.getElementById('back-body-left-label').style.background = '#969696'
    document.getElementById("back-body-left-title").innerHTML = "Grey";
    document.getElementById('back-left-stripe').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-navy'){
    document.getElementById('back-body-left-label').style.background = '#152c91'
    document.getElementById("back-body-left-title").innerHTML = "Navy";
    document.getElementById('back-left-stripe').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-purple'){
    document.getElementById('back-body-left-label').style.background = 'purple'
    document.getElementById("back-body-left-title").innerHTML = "Purple";
    document.getElementById('back-left-stripe').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-darkGreen'){
    document.getElementById('back-body-left-label').style.background = 'Green'
    document.getElementById("back-body-left-title").innerHTML = "Green";
    document.getElementById('back-left-stripe').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-darkGrey'){
    document.getElementById('back-body-left-label').style.background = '#494949'
    document.getElementById("back-body-left-title").innerHTML = "Dark Grey";
    document.getElementById('back-left-stripe').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-blue'){
    document.getElementById('back-body-left-label').style.background = 'blue'
    document.getElementById("back-body-left-title").innerHTML = "Blue";
    document.getElementById('back-left-stripe').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-lime'){
    document.getElementById('back-body-left-label').style.background = '#09b600'
    document.getElementById("back-body-left-title").innerHTML = "Lime";
    document.getElementById('back-piping').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-white'){
    document.getElementById('back-body-left-label').style.background = 'White'
    document.getElementById("back-body-left-title").innerHTML = "White";
    document.getElementById('back-left-stripe').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-black'){
    document.getElementById('back-body-left-label').style.background = 'Black'
    document.getElementById("back-body-left-title").innerHTML = "Black";
    document.getElementById('back-left-stripe').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'bl-teal'){
    document.getElementById('back-body-left-label').style.background = '#00b692'
    document.getElementById("back-body-left-title").innerHTML = "Teal";
    document.getElementById('back-left-stripe').style.fill = '#00b692'
    document.getElementById('back-color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrlBack = true
  }
  //piping control
  if(color === 'p-aqua'){
    document.getElementById('back-pipe-label').style.background = '#129793'
    document.getElementById("back-pipe-title").innerHTML = "Aqua";
    document.getElementById('back-piping').style.fill = '#129793'
    document.getElementById('back-back-color-picker-dropdown-piping').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'p-neon-green'){
    document.getElementById('back-pipe-label').style.background = '#29f04f'
    document.getElementById("back-pipe-title").innerHTML = "Neon Green";
    document.getElementById('back-piping').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-body-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-hot-pink'){
    document.getElementById('back-pipe-label').style.background = '#e929f0'
    document.getElementById("back-pipe-title").innerHTML = "Hot Pink";
    document.getElementById('back-piping').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-body-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-yellow'){
    document.getElementById('back-pipe-label').style.background = 'yellow'
    document.getElementById("back-pipe-title").innerHTML = "Yellow";
    document.getElementById('back-piping').style.fill = 'yellow'
    document.getElementById('back-color-picker-dropdown-body-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-maroon'){
    document.getElementById('back-pipe-label').style.background = '#cb0039'
    document.getElementById("back-pipe-title").innerHTML = "Maroon";
    document.getElementById('back-piping').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-body-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-grey'){
    document.getElementById('back-pipe-label').style.background = '#969696'
    document.getElementById("back-pipe-title").innerHTML = "Grey";
    document.getElementById('back-piping').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-body-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-navy'){
    document.getElementById('back-pipe-label').style.background = '#152c91'
    document.getElementById("back-pipe-title").innerHTML = "Navy";
    document.getElementById('back-piping').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-body-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-purple'){
    document.getElementById('back-pipe-label').style.background = 'purple'
    document.getElementById("back-pipe-title").innerHTML = "Purple";
    document.getElementById('back-piping').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-body-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-darkGreen'){
    document.getElementById('back-pipe-label').style.background = 'Green'
    document.getElementById("back-pipe-title").innerHTML = "Green";
    document.getElementById('back-piping').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-darkGrey'){
    document.getElementById('back-pipe-label').style.background = '#494949'
    document.getElementById("back-pipe-title").innerHTML = "Dark Grey";
    document.getElementById('back-piping').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-blue'){
    document.getElementById('back-pipe-label').style.background = 'blue'
    document.getElementById("back-pipe-title").innerHTML = "Blue";
    document.getElementById('back-piping').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-lime'){
    document.getElementById('back-pipe-abel').style.background = '#09b600'
    document.getElementById("back-pipe-title").innerHTML = "Lime";
    document.getElementById('back-piping').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-white'){
    document.getElementById('back-pipe-label').style.background = 'White'
    document.getElementById("back-pipe-title").innerHTML = "White";
    document.getElementById('back-piping').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-black'){
    document.getElementById('back-pipe-label').style.background = 'Black'
    document.getElementById("back-pipe-title").innerHTML = "Black";
    document.getElementById('back-piping').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'p-teal'){
    document.getElementById('back-pipe-label').style.background = '#00b692'
    document.getElementById("back-pipe-title").innerHTML = "Teal";
    document.getElementById('back-piping').style.fill = '#00b692'
    document.getElementById('back-color-picker-dropdown-piping').style.display = 'none'
    dropdownCtrlBack = true
  }
  //Body Right control
  if(color === 'br-aqua'){
    document.getElementById('back-body-right-label').style.background = '#129793'
    document.getElementById("body-right-title").innerHTML = "Aqua";
    document.getElementById('back-right-stripe').style.fill = '#129793'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'br-neon-green'){
    document.getElementById('back-body-right-label').style.background = '#29f04f'
    document.getElementById("back-body-right-title").innerHTML = "Neon Green";
    document.getElementById('back-right-stripe').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-hot-pink'){
    document.getElementById('back-body-right-label').style.background = '#e929f0'
    document.getElementById("body-right-title").innerHTML = "Hot Pink";
    document.getElementById('back-right-stripe').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-yellow'){
    document.getElementById('back-body-right-label').style.background = 'yellow'
    document.getElementById("body-right-title").innerHTML = "Yellow";
    document.getElementById('back-right-stripe').style.fill = 'yellow'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-maroon'){
    document.getElementById('back-body-right-label').style.background = '#cb0039'
    document.getElementById("body-right-title").innerHTML = "Maroon";
    document.getElementById('back-right-stripe').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-grey'){
    document.getElementById('back-body-right-label').style.background = '#969696'
    document.getElementById("body-right-title").innerHTML = "Grey";
    document.getElementById('back-right-stripe').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-navy'){
    document.getElementById('back-body-right-label').style.background = '#152c91'
    document.getElementById("body-right-title").innerHTML = "Navy";
    document.getElementById('back-right-stripe').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-purple'){
    document.getElementById('back-body-right-label').style.background = 'purple'
    document.getElementById("body-right-title").innerHTML = "Purple";
    document.getElementById('back-right-stripe').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-darkGreen'){
    document.getElementById('back-body-right-label').style.background = 'Green'
    document.getElementById("body-right-title").innerHTML = "Green";
    document.getElementById('back-right-stripe').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-darkGrey'){
    document.getElementById('back-body-right-label').style.background = '#494949'
    document.getElementById("body-right-title").innerHTML = "Dark Grey";
    document.getElementById('back-right-stripe').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-blue'){
    document.getElementById('back-body-right-label').style.background = 'blue'
    document.getElementById("body-right-title").innerHTML = "Blue";
    document.getElementById('back-right-stripe').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-lime'){
    document.getElementById('back-body-right-label').style.background = '#09b600'
    document.getElementById("body-right-title").innerHTML = "Lime";
    document.getElementById('back-right-stripe').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-white'){
    document.getElementById('back-body-right-label').style.background = 'White'
    document.getElementById("body-right-title").innerHTML = "White";
    document.getElementById('back-right-stripe').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-black'){
    document.getElementById('back-body-right-label').style.background = 'Black'
    document.getElementById("body-right-title").innerHTML = "Black";
    document.getElementById('back-right-stripe').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'br-teal'){
    document.getElementById('back-body-right-label').style.background = '#00b692'
    document.getElementById("body-right-title").innerHTML = "Teal";
    document.getElementById('back-right-stripe').style.fill = '#00b692'
    document.getElementById('back-color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrlBack = true
  }
  //Collar
  if(color === 'c-aqua'){
    document.getElementById('back-collar-label').style.background = '#129793'
    document.getElementById("collar-title").innerHTML = "Aqua";
    document.getElementById('back-collar').style.fill = '#129793'
    document.getElementById('back-collar').style.fill = '#129793'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'c-neon-green'){
    document.getElementById('back-collar-label').style.background = '#29f04f'
    document.getElementById("collar-title").innerHTML = "Neon Green";
    document.getElementById('back-collar').style.fill = '#29f04f'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-hot-pink'){
    document.getElementById('back-collar-label').style.background = '#e929f0'
    document.getElementById("collar-title").innerHTML = "Hot Pink";
    document.getElementById('back-collar').style.fill = '#e929f0'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-yellow'){
    document.getElementById('back-collar-label').style.background = 'yellow'
    document.getElementById("collar-title").innerHTML = "Yellow";
    document.getElementById('back-collar').style.fill = 'yellow'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-maroon'){
    document.getElementById('back-collar-label').style.background = '#cb0039'
    document.getElementById("collar-title").innerHTML = "Maroon";
    document.getElementById('back-collar').style.fill = '#cb0039'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-grey'){
    document.getElementById('back-collar-label').style.background = '#969696'
    document.getElementById("collar-title").innerHTML = "Grey";
    document.getElementById('back-collar').style.fill = '#969696'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-navy'){
    document.getElementById('back-collar-label').style.background = '#152c91'
    document.getElementById("collar-title").innerHTML = "Navy";
    document.getElementById('back-collar').style.fill = '#152c91'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-purple'){
    document.getElementById('back-collar-label').style.background = 'purple'
    document.getElementById("collar-title").innerHTML = "Purple";
    document.getElementById('back-collar').style.fill = 'purple'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-darkGreen'){
    document.getElementById('back-collar-label').style.background = 'Green'
    document.getElementById("collar-title").innerHTML = "Green";
    document.getElementById('back-collar').style.fill = 'Green'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-darkGrey'){
    document.getElementById('back-collar-label').style.background = '#494949'
    document.getElementById("collar-title").innerHTML = "Dark Grey";
    document.getElementById('back-collar').style.fill = '#494949'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-blue'){
    document.getElementById('back-collar-label').style.background = 'blue'
    document.getElementById("collar-title").innerHTML = "Blue";
    document.getElementById('back-collar').style.fill = 'blue'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-lime'){
    document.getElementById('back-collar-label').style.background = '#09b600'
    document.getElementById("collar-title").innerHTML = "Lime";
    document.getElementById('back-collar').style.fill = '#09b600'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-white'){
    document.getElementById('back-collar-label').style.background = 'White'
    document.getElementById("collar-title").innerHTML = "White";
    document.getElementById('back-collar').style.fill = 'White'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-black'){
    document.getElementById('back-collar-label').style.background = 'Black'
    document.getElementById("collar-title").innerHTML = "Black";
    document.getElementById('back-collar').style.fill = 'Black'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'c-teal'){
    document.getElementById('back-collar-label').style.background = '#00b692'
    document.getElementById("collar-title").innerHTML = "Teal";
    document.getElementById('back-collar').style.fill = '#00b692'
    document.getElementById('back-color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrlBack = true
  }
  //lineing
  if(color === 'line-aqua'){
    document.getElementById('lineing-label').style.background = '#129793'
    document.getElementById("lineing-title").innerHTML = "Aqua";
    document.getElementById('front-stitching').style.fill = '#129793'
    document.getElementById('back-stitching').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'line-neon-green'){
    document.getElementById('lineing-label').style.background = '#29f04f'
    document.getElementById("lineing-title").innerHTML = "Neon Green";
    document.getElementById('front-stitching').style.fill = '#29f04f'
    document.getElementById('back-stitching').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-hot-pink'){
    document.getElementById('lineing-label').style.background = '#e929f0'
    document.getElementById("lineing-title").innerHTML = "Hot Pink";
    document.getElementById('front-stitching').style.fill = '#e929f0'
    document.getElementById('back-stitching').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-yellow'){
    document.getElementById('lineing-label').style.background = 'yellow'
    document.getElementById("lineing-title").innerHTML = "Yellow";
    document.getElementById('front-stitching').style.fill = 'yellow'
    document.getElementById('back-stitching').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-maroon'){
    document.getElementById('lineing-label').style.background = '#cb0039'
    document.getElementById("lineing-title").innerHTML = "Maroon";
    document.getElementById('front-stitching').style.fill = '#cb0039'
    document.getElementById('back-stitching').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-grey'){
    document.getElementById('lineing-label').style.background = '#969696'
    document.getElementById("lineing-title").innerHTML = "Grey";
    document.getElementById('front-stitching').style.fill = '#969696'
    document.getElementById('front-stitching').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-navy'){
    document.getElementById('lineing-label').style.background = '#152c91'
    document.getElementById("lineing-title").innerHTML = "Navy";
    document.getElementById('front-stitching').style.fill = '#152c91'
    document.getElementById('back-stitching').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-purple'){
    document.getElementById('lineing-label').style.background = 'purple'
    document.getElementById("lineing-title").innerHTML = "Purple";
    document.getElementById('front-stitching').style.fill = 'purple'
    document.getElementById('back-stitching').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-darkGreen'){
    document.getElementById('lineing-label').style.background = 'Green'
    document.getElementById("lineing-title").innerHTML = "Green";
    document.getElementById('front-stitching').style.fill = 'Green'
    document.getElementById('back-stitching').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-darkGrey'){
    document.getElementById('lineing-label').style.background = '#494949'
    document.getElementById("lineing-title").innerHTML = "Dark Grey";
    document.getElementById('front-stitching').style.fill = '#494949'
    document.getElementById('back-stitching').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-blue'){
    document.getElementById('lineing-label').style.background = 'blue'
    document.getElementById("lineing-title").innerHTML = "Blue";
    document.getElementById('front-stitching').style.fill = 'blue'
    document.getElementById('back-stitching').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-lime'){
    document.getElementById('lineing-label').style.background = '#09b600'
    document.getElementById("lineing-title").innerHTML = "Lime";
    document.getElementById('front-stitching').style.fill = '#09b600'
    document.getElementById('back-stitching').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-white'){
    document.getElementById('lineing-label').style.background = 'White'
    document.getElementById("lineing-title").innerHTML = "White";
    document.getElementById('back-stitching').style.fill = 'White'
    document.getElementById('front-stitching').style.fill = 'White'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-black'){
    document.getElementById('lineing-label').style.background = 'Black'
    document.getElementById("lineing-title").innerHTML = "Black";
    document.getElementById('front-stitching').style.fill = 'Black'
    document.getElementById('back-stitching').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
  if(color === 'line-teal'){
    document.getElementById('lineing-label').style.background = '#00b692'
    document.getElementById("lineing-title").innerHTML = "Teal";
    document.getElementById('front-stitching').style.fill = '#00b692'
    document.getElementById('back-stitching').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-lineing').style.display = 'none'
    dropdownCtrlBack = true
  }
//Fabrics
if(color === 'fab-taslan'){
  document.getElementById('select-fab-label').style.background = ''
  document.getElementById("select-fab-title").innerHTML = "Taslan";
  document.getElementById('color-picker-dropdown-fab').style.display = 'none'
  dropdownCtrlBack = true
}
if(color === 'fab-polycot'){
  document.getElementById('select-fab-label').style.background = ''
  document.getElementById("select-fab-title").innerHTML = "Polycotton";
  document.getElementById('color-picker-dropdown-fab').style.display = 'none'
  dropdownCtrlBack = true
}

}
function colorPickerDropdown(position){
  console.log('getting here')
  if(position === 'left-upper-arm' && dropdownCtrl === true){
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'right-upper-arm' && dropdownCtrl === true){
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'right-lower-arm' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'left-lower-arm' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'left-wing' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'right-wing' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'body-wrap' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'body-left' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-body-left').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'collar' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-collar').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'body-right' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-body-right').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'front-left-elbow' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'flex'
    dropdownCtrl = false
    return
  }
  if(position === 'front-right-elbow' && dropdownCtrl === true){
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'flex'
    dropdownCtrl = false
    return
  }
}
function run(){
  dropdownCtrl = true
}
//choose your color
function colorPickerSelect(color){
  console.log(color)
  console.log(dropdownCtrl)
  //front right elbow control
  if(color === 'fre-aqua'){
    console.log('here')
    document.getElementById('front-right-elbow-label').style.background = '#129793'
    document.getElementById("front-right-elbow-title").innerHTML = "Aqua";
    document.getElementById('front-right-elbow').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-neon-green'){
    document.getElementById('front-right-elbow-label').style.background = '#29f04f'
    document.getElementById("front-right-elbow-title").innerHTML = "Neon Green";
    document.getElementById('front-right-elbow').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-hot-pink'){
    document.getElementById('front-right-elbow-label').style.background = '#e929f0'
    document.getElementById("front-right-elbow-title").innerHTML = "Hot Pink";
    document.getElementById('front-right-elbow').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-yellow'){
    document.getElementById('front-right-elbow-label').style.background = 'yellow'
    document.getElementById("front-right-elbow-title").innerHTML = "Yellow";
    document.getElementById('front-right-elbow').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-maroon'){
    document.getElementById('front-right-elbow-label').style.background = '#cb0039'
    document.getElementById("front-right-elbow-title").innerHTML = "Maroon";
    document.getElementById('front-right-elbow').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-grey'){
    document.getElementById('front-right-elbow-label').style.background = '#969696'
    document.getElementById("front-right-elbow-title").innerHTML = "Grey";
    document.getElementById('front-right-elbow').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-navy'){
    document.getElementById('front-right-elbow-label').style.background = '#152c91'
    document.getElementById("front-right-elbow-title").innerHTML = "Navy";
    document.getElementById('front-right-elbow').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-purple'){
    document.getElementById('front-right-elbow-label').style.background = 'purple'
    document.getElementById("front-right-elbow-title").innerHTML = "Purple";
    document.getElementById('front-right-elbow').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-darkGreen'){
    document.getElementById('front-right-elbow-label').style.background = 'Green'
    document.getElementById("front-right-elbow-title").innerHTML = "Green";
    document.getElementById('front-right-elbow').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-darkGrey'){
    document.getElementById('front-right-elbow-label').style.background = '#494949'
    document.getElementById("front-right-elbow-title").innerHTML = "Dark Grey";
    document.getElementById('front-right-elbow').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-blue'){
    document.getElementById('front-right-elbow-label').style.background = 'blue'
    document.getElementById("front-right-elbow-title").innerHTML = "Blue";
    document.getElementById('front-right-elbow').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-lime'){
    document.getElementById('front-right-elbow-label').style.background = '#09b600'
    document.getElementById("front-right-elbow-title").innerHTML = "Lime";
    document.getElementById('front-right-elbow').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-white'){
    document.getElementById('front-right-elbow-label').style.background = 'White'
    document.getElementById("front-right-elbow-title").innerHTML = "White";
    document.getElementById('front-right-elbow').style.fill = 'White'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-black'){
    document.getElementById('front-right-elbow-label').style.background = 'Black'
    document.getElementById("front-right-elbow-title").innerHTML = "Black";
    document.getElementById('front-right-elbow').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-teal'){
    document.getElementById('front-right-elbow-label').style.background = '#00b692'
    document.getElementById("front-right-elbow-title").innerHTML = "Teal";
    document.getElementById('front-right-elbow').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-front-right-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  //front right elbow control
  if(color === 'fle-aqua'){
    console.log('here')
    document.getElementById('front-left-elbow-label').style.background = '#129793'
    document.getElementById("front-left-elbow-title").innerHTML = "Aqua";
    document.getElementById('front-left-elbow').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-neon-green'){
    document.getElementById('front-left-elbow-label').style.background = '#29f04f'
    document.getElementById("front-left-elbow-title").innerHTML = "Neon Green";
    document.getElementById('front-left-elbow').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-hot-pink'){
    document.getElementById('front-left-elbow-label').style.background = '#e929f0'
    document.getElementById("front-left-elbow-title").innerHTML = "Hot Pink";
    document.getElementById('front-left-elbow').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-yellow'){
    document.getElementById('front-left-elbow-label').style.background = 'yellow'
    document.getElementById("front-left-elbow-title").innerHTML = "Yellow";
    document.getElementById('front-left-elbow').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-maroon'){
    document.getElementById('front-left-elbow-label').style.background = '#cb0039'
    document.getElementById("front-left-elbow-title").innerHTML = "Maroon";
    document.getElementById('front-left-elbow').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-grey'){
    document.getElementById('front-left-elbow-label').style.background = '#969696'
    document.getElementById("front-left-elbow-title").innerHTML = "Grey";
    document.getElementById('front-left-elbow').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-navy'){
    document.getElementById('front-left-elbow-label').style.background = '#152c91'
    document.getElementById("front-left-elbow-title").innerHTML = "Navy";
    document.getElementById('front-left-elbow').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-purple'){
    document.getElementById('front-left-elbow-label').style.background = 'purple'
    document.getElementById("front-left-elbow-title").innerHTML = "Purple";
    document.getElementById('front-left-elbow').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-darkGreen'){
    document.getElementById('front-left-elbow-label').style.background = 'Green'
    document.getElementById("front-left-elbow-title").innerHTML = "Green";
    document.getElementById('front-left-elbow').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-darkGrey'){
    document.getElementById('front-left-elbow-label').style.background = '#494949'
    document.getElementById("front-left-elbow-title").innerHTML = "Dark Grey";
    document.getElementById('front-left-elbow').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-blue'){
    document.getElementById('front-left-elbow-label').style.background = 'blue'
    document.getElementById("front-left-elbow-title").innerHTML = "Blue";
    document.getElementById('front-left-elbow').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-lime'){
    document.getElementById('front-left-elbow-label').style.background = '#09b600'
    document.getElementById("front-left-elbow-title").innerHTML = "Lime";
    document.getElementById('front-left-elbow').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-white'){
    document.getElementById('front-left-elbow-label').style.background = 'White'
    document.getElementById("front-left-elbow-title").innerHTML = "White";
    document.getElementById('front-left-elbow').style.fill = 'White'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-black'){
    document.getElementById('front-left-elbow-label').style.background = 'Black'
    document.getElementById("front-left-elbow-title").innerHTML = "Black";
    document.getElementById('front-left-elbow').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fle-teal'){
    document.getElementById('front-left-elbow-label').style.background = '#00b692'
    document.getElementById("front-left-elbow-title").innerHTML = "Teal";
    document.getElementById('front-left-elbow').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-front-left-elbow').style.display = 'none'
    dropdownCtrl = true
  }

  //left upper arm control
  if(color === 'lua-aqua'){
    console.log('here')
    document.getElementById('left-upper-arm-label').style.background = '#129793'
    document.getElementById("left-upper-arm-title").innerHTML = "Aqua";
    document.getElementById('front-left-top-arm').style.fill = '#129793'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-neon-green'){
    document.getElementById('left-upper-arm-label').style.background = '#29f04f'
    document.getElementById("left-upper-arm-title").innerHTML = "Neon Green";
    document.getElementById('front-left-top-arm').style.fill = '#29f04f'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-hot-pink'){
    document.getElementById('left-upper-arm-label').style.background = '#e929f0'
    document.getElementById("left-upper-arm-title").innerHTML = "Hot Pink";
    document.getElementById('front-left-top-arm').style.fill = '#e929f0'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-yellow'){
    document.getElementById('left-upper-arm-label').style.background = 'yellow'
    document.getElementById("left-upper-arm-title").innerHTML = "Yellow";
    document.getElementById('front-left-top-arm').style.fill = 'yellow'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-maroon'){
    document.getElementById('left-upper-arm-label').style.background = '#cb0039'
    document.getElementById("left-upper-arm-title").innerHTML = "Maroon";
    document.getElementById('front-left-top-arm').style.fill = '#cb0039'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-grey'){
    document.getElementById('left-upper-arm-label').style.background = '#969696'
    document.getElementById("left-upper-arm-title").innerHTML = "Grey";
    document.getElementById('front-left-top-arm').style.fill = '#969696'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-navy'){
    document.getElementById('left-upper-arm-label').style.background = '#152c91'
    document.getElementById("left-upper-arm-title").innerHTML = "Navy";
    document.getElementById('front-left-top-arm').style.fill = '#152c91'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-purple'){
    document.getElementById('left-upper-arm-label').style.background = 'purple'
    document.getElementById("left-upper-arm-title").innerHTML = "Purple";
    document.getElementById('front-left-top-arm').style.fill = 'purple'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-darkGreen'){
    document.getElementById('left-upper-arm-label').style.background = 'Green'
    document.getElementById("left-upper-arm-title").innerHTML = "Green";
    document.getElementById('front-left-top-arm').style.fill = 'Green'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-darkGrey'){
    document.getElementById('left-upper-arm-label').style.background = '#494949'
    document.getElementById("left-upper-arm-title").innerHTML = "Dark Grey";
    document.getElementById('front-left-top-arm').style.fill = '#494949'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-blue'){
    document.getElementById('left-upper-arm-label').style.background = 'blue'
    document.getElementById("left-upper-arm-title").innerHTML = "Blue";
    document.getElementById('front-left-top-arm').style.fill = 'blue'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-lime'){
    document.getElementById('left-upper-arm-label').style.background = '#09b600'
    document.getElementById("left-upper-arm-title").innerHTML = "Lime";
    document.getElementById('front-left-top-arm').style.fill = '#09b600'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-white'){
    document.getElementById('left-upper-arm-label').style.background = 'White'
    document.getElementById("left-upper-arm-title").innerHTML = "White";
    document.getElementById('front-left-top-arm').style.fill = 'White'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-black'){
    document.getElementById('left-upper-arm-label').style.background = 'Black'
    document.getElementById("left-upper-arm-title").innerHTML = "Black";
    document.getElementById('front-left-top-arm').style.fill = 'Black'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-teal'){
    document.getElementById('left-upper-arm-label').style.background = '#00b692'
    document.getElementById("left-upper-arm-title").innerHTML = "Teal";
    document.getElementById('front-left-top-arm').style.fill = '#00b692'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  //right upper arm control
  if(color === 'rua-aqua'){
    document.getElementById('right-upper-arm-label').style.background = '#129793'
    document.getElementById("right-upper-arm-title").innerHTML = "Aqua";
    document.getElementById('front-right-arm-top').style.fill = '#129793'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'rua-neon-green'){
    document.getElementById('right-upper-arm-label').style.background = '#29f04f'
    document.getElementById("right-upper-arm-title").innerHTML = "Neon Green";
    document.getElementById('front-right-arm-top').style.fill = '#29f04f'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-hot-pink'){
    document.getElementById('right-upper-arm-label').style.background = '#e929f0'
    document.getElementById("right-upper-arm-title").innerHTML = "Hot Pink";
    document.getElementById('front-right-arm-top').style.fill = '#e929f0'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-yellow'){
    document.getElementById('right-upper-arm-label').style.background = 'yellow'
    document.getElementById("right-upper-arm-title").innerHTML = "Yellow";
    document.getElementById('front-right-arm-top').style.fill = 'yellow'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-maroon'){
    document.getElementById('right-upper-arm-label').style.background = '#cb0039'
    document.getElementById("right-upper-arm-title").innerHTML = "Maroon";
    document.getElementById('front-right-arm-top').style.fill = '#cb0039'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-grey'){
    document.getElementById('right-upper-arm-label').style.background = '#969696'
    document.getElementById("right-upper-arm-title").innerHTML = "Grey";
    document.getElementById('front-right-arm-top').style.fill = '#969696'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-navy'){
    document.getElementById('right-upper-arm-label').style.background = '#152c91'
    document.getElementById("right-upper-arm-title").innerHTML = "Navy";
    document.getElementById('front-right-arm-top').style.fill = '#152c91'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-purple'){
    document.getElementById('right-upper-arm-label').style.background = 'purple'
    document.getElementById("right-upper-arm-title").innerHTML = "Purple";
    document.getElementById('front-right-arm-top').style.fill = 'purple'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-darkGreen'){
    document.getElementById('right-upper-arm-label').style.background = 'Green'
    document.getElementById("right-upper-arm-title").innerHTML = "Green";
    document.getElementById('front-right-arm-top').style.fill = 'Green'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-darkGrey'){
    document.getElementById('right-upper-arm-label').style.background = '#494949'
    document.getElementById("right-upper-arm-title").innerHTML = "Dark Grey";
    document.getElementById('front-right-arm-top').style.fill = '#494949'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-blue'){
    document.getElementById('right-upper-arm-label').style.background = 'blue'
    document.getElementById("right-upper-arm-title").innerHTML = "Blue";
    document.getElementById('front-right-arm-top').style.fill = 'blue'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-lime'){
    document.getElementById('right-upper-arm-label').style.background = '#09b600'
    document.getElementById("right-upper-arm-title").innerHTML = "Lime";
    document.getElementById('front-right-arm-top').style.fill = '#09b600'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-white'){
    document.getElementById('right-upper-arm-label').style.background = 'White'
    document.getElementById("right-upper-arm-title").innerHTML = "White";
    document.getElementById('front-right-arm-top').style.fill = 'White'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-black'){
    document.getElementById('right-upper-arm-label').style.background = 'Black'
    document.getElementById("right-upper-arm-title").innerHTML = "Black";
    document.getElementById('front-right-arm-top').style.fill = 'Black'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-teal'){
    document.getElementById('right-upper-arm-label').style.background = '#00b692'
    document.getElementById("right-upper-arm-title").innerHTML = "Teal";
    document.getElementById('front-right-arm-top').style.fill = '#00b692'
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'none'
    dropdownCtrl = true
  }
  //left lower arm control
  if(color === 'lla-aqua'){
    document.getElementById('left-lower-arm-label').style.background = '#129793'
    document.getElementById("left-lower-arm-title").innerHTML = "Aqua";
    document.getElementById('front-left-arm').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'lla-neon-green'){
    document.getElementById('left-lower-arm-label').style.background = '#29f04f'
    document.getElementById("left-lower-arm-title").innerHTML = "Neon Green";
    document.getElementById('front-left-arm').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-hot-pink'){
    document.getElementById('left-lower-arm-label').style.background = '#e929f0'
    document.getElementById("left-lower-arm-title").innerHTML = "Hot Pink";
    document.getElementById('front-left-arm').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-yellow'){
    document.getElementById('left-lower-arm-label').style.background = 'yellow'
    document.getElementById("left-lower-arm-title").innerHTML = "Yellow";
    document.getElementById('front-left-arm').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-maroon'){
    document.getElementById('left-upper-arm-label').style.background = '#cb0039'
    document.getElementById("left-upper-arm-title").innerHTML = "Maroon";
    document.getElementById('front-left-arm').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-grey'){
    document.getElementById('left-upper-arm-label').style.background = '#969696'
    document.getElementById("left-upper-arm-title").innerHTML = "Grey";
    document.getElementById('front-left-arm').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-navy'){
    document.getElementById('left-lower-arm-label').style.background = '#152c91'
    document.getElementById("left-lower-arm-title").innerHTML = "Navy";
    document.getElementById('front-left-arm').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-purple'){
    document.getElementById('left-lower-arm-label').style.background = 'purple'
    document.getElementById("left-lower-arm-title").innerHTML = "Purple";
    document.getElementById('front-left-arm').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-darkGreen'){
    document.getElementById('left-lower-arm-label').style.background = 'Green'
    document.getElementById("left-lower-arm-title").innerHTML = "Green";
    document.getElementById('front-left-arm').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-darkGrey'){
    document.getElementById('left-lower-arm-label').style.background = '#494949'
    document.getElementById("left-lower-arm-title").innerHTML = "Dark Grey";
    document.getElementById('front-left-arm').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-blue'){
    document.getElementById('left-lower-arm-label').style.background = 'blue'
    document.getElementById("left-lower-arm-title").innerHTML = "Blue";
    document.getElementById('front-left-arm').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-lime'){
    document.getElementById('left-lower-arm-label').style.background = '#09b600'
    document.getElementById("left-lower-arm-title").innerHTML = "Lime";
    document.getElementById('front-left-arm').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-white'){
    document.getElementById('left-lower-arm-label').style.background = 'White'
    document.getElementById("left-lower-arm-title").innerHTML = "White";
    document.getElementById('front-left-arm').style.fill = 'White'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-black'){
    document.getElementById('left-lower-arm-label').style.background = 'Black'
    document.getElementById("left-lower-arm-title").innerHTML = "Black";
    document.getElementById('front-left-arm').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-teal'){
    document.getElementById('left-lower-arm-label').style.background = '#00b692'
    document.getElementById("left-lower-arm-title").innerHTML = "Teal";
    document.getElementById('front-left-arm').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-lower-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  //right lower arm control
  if(color === 'rla-aqua'){
    document.getElementById('right-lower-arm-label').style.background = '#129793'
    document.getElementById("right-lower-arm-title").innerHTML = "Aqua";
    document.getElementById('front-bottom-right-arm').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'rla-neon-green'){
    document.getElementById('right-lower-arm-label').style.background = '#29f04f'
    document.getElementById("right-lower-arm-title").innerHTML = "Neon Green";
    document.getElementById('front-bottom-right-arm').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-hot-pink'){
    document.getElementById('right-lower-arm-label').style.background = '#e929f0'
    document.getElementById("right-lower-arm-title").innerHTML = "Hot Pink";
    document.getElementById('front-bottom-right-arm').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-yellow'){
    document.getElementById('right-lower-arm-label').style.background = 'yellow'
    document.getElementById("right-lower-arm-title").innerHTML = "Yellow";
    document.getElementById('front-bottom-right-arm').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-maroon'){
    document.getElementById('right-upper-arm-label').style.background = '#cb0039'
    document.getElementById("right-upper-arm-title").innerHTML = "Maroon";
    document.getElementById('front-bottom-right-arm').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-grey'){
    document.getElementById('right-upper-arm-label').style.background = '#969696'
    document.getElementById("right-upper-arm-title").innerHTML = "Grey";
    document.getElementById('front-bottom-right-arm').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-navy'){
    document.getElementById('right-lower-arm-label').style.background = '#152c91'
    document.getElementById("right-lower-arm-title").innerHTML = "Navy";
    document.getElementById('front-bottom-right-arm').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-purple'){
    document.getElementById('right-lower-arm-label').style.background = 'purple'
    document.getElementById("right-lower-arm-title").innerHTML = "Purple";
    document.getElementById('front-bottom-right-arm').style.fill = 'purple'
    document.getElementById('front-left-arm').style.fill = 'purple'
    document.getElementById('front-left-top-arm').style.fill = 'purple'
    document.getElementById('front-right-arm-top').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-darkGreen'){
    document.getElementById('right-lower-arm-label').style.background = 'Green'
    document.getElementById("right-lower-arm-title").innerHTML = "Green";
    document.getElementById('front-bottom-right-arm').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-darkGrey'){
    document.getElementById('right-lower-arm-label').style.background = '#494949'
    document.getElementById("right-lower-arm-title").innerHTML = "Dark Grey";
    document.getElementById('front-bottom-right-arm').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-blue'){
    document.getElementById('right-lower-arm-label').style.background = 'blue'
    document.getElementById("right-lower-arm-title").innerHTML = "Blue";
    document.getElementById('front-bottom-right-arm').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-lime'){
    document.getElementById('right-lower-arm-label').style.background = '#09b600'
    document.getElementById("right-lower-arm-title").innerHTML = "Lime";
    document.getElementById('front-bottom-right-arm').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-white'){
    document.getElementById('right-lower-arm-label').style.background = 'White'
    document.getElementById("right-lower-arm-title").innerHTML = "White";
    document.getElementById('front-bottom-right-arm').style.fill = 'White'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-black'){
    document.getElementById('right-lower-arm-label').style.background = 'Black'
    document.getElementById("right-lower-arm-title").innerHTML = "Black";
    document.getElementById('front-bottom-right-arm').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rla-teal'){
    document.getElementById('right-lower-arm-label').style.background = '#00b692'
    document.getElementById("right-lower-arm-title").innerHTML = "Teal";
    document.getElementById('front-bottom-right-arm').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-right-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  //left wing control
  if(color === 'lw-aqua'){
    document.getElementById('left-wing-label').style.background = '#129793'
    document.getElementById("left-wing-title").innerHTML = "Aqua";
    document.getElementById('front-left-top-wing').style.fill = '#129793'
    document.getElementById('front-write-wing').style.fill = '#129793'
    document.getElementById('back-left-wing').style.fill = '#129793'
    document.getElementById('back-right-wing').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'lw-neon-green'){
    document.getElementById('left-wing-label').style.background = '#29f04f'
    document.getElementById("left-wing-title").innerHTML = "Neon Green";
    document.getElementById('front-left-top-wing').style.fill = '#29f04f'
    document.getElementById('front-write-wing').style.fill = '#29f04f'
    document.getElementById('back-left-wing').style.fill = '#29f04f'
    document.getElementById('back-right-wing').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-hot-pink'){
    document.getElementById('left-wing-label').style.background = '#e929f0'
    document.getElementById("left-wing-title").innerHTML = "Hot Pink";
    document.getElementById('front-left-top-wing').style.fill = '#e929f0'
    document.getElementById('front-write-wing').style.fill = '#e929f0'
    document.getElementById('back-left-wing').style.fill = '#e929f0'
    document.getElementById('back-right-wing').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-yellow'){
    document.getElementById('left-wing-label').style.background = 'yellow'
    document.getElementById("left-wing-title").innerHTML = "Yellow";
    document.getElementById('front-left-top-wing').style.fill = 'yellow'
    document.getElementById('front-write-wing').style.fill = 'yellow'
    document.getElementById('back-left-wing').style.fill = 'yellow'
    document.getElementById('back-right-wing').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-maroon'){
    document.getElementById('left-wing-label').style.background = '#cb0039'
    document.getElementById("left-wing-title").innerHTML = "Maroon";
    document.getElementById('front-left-top-wing').style.fill = '#cb0039'
    document.getElementById('front-write-wing').style.fill = '#cb0039'
    document.getElementById('back-left-wing').style.fill = '#cb0039'
    document.getElementById('back-right-wing').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-grey'){
    document.getElementById('left-wing-label').style.background = '#969696'
    document.getElementById("left-wing-title").innerHTML = "Grey";
    document.getElementById('front-left-top-wing').style.fill = '#969696'
    document.getElementById('front-write-wing').style.fill = '#969696'
    document.getElementById('back-left-wing').style.fill = '#969696'
    document.getElementById('back-right-wing').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-navy'){
    document.getElementById('left-wing-label').style.background = '#152c91'
    document.getElementById("left-wing-title").innerHTML = "Navy";
    document.getElementById('front-left-top-wing').style.fill = '#152c91'
    document.getElementById('front-write-wing').style.fill = '#152c91'
    document.getElementById('back-left-wing').style.fill = '#152c91'
    document.getElementById('back-right-wing').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-purple'){
    document.getElementById('left-wing-label').style.background = 'purple'
    document.getElementById("left-wing-title").innerHTML = "Purple";
    document.getElementById('front-left-top-wing').style.fill = 'purple'
    document.getElementById('front-write-wing').style.fill = 'purple'
    document.getElementById('back-left-wing').style.fill = 'purple'
    document.getElementById('back-right-wing').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-darkGreen'){
    document.getElementById('left-wing-label').style.background = 'Green'
    document.getElementById("left-wing-title").innerHTML = "Green";
    document.getElementById('front-left-top-wing').style.fill = 'Green'
    document.getElementById('front-write-wing').style.fill = 'Green'
    document.getElementById('back-left-wing').style.fill = 'Green'
    document.getElementById('back-right-wing').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-darkGrey'){
    document.getElementById('left-wing-label').style.background = '#494949'
    document.getElementById("left-wing-title").innerHTML = "Dark Grey";
    document.getElementById('front-left-top-wing').style.fill = '#494949'
    document.getElementById('front-write-wing').style.fill = '#494949'
    document.getElementById('back-left-wing').style.fill = '#494949'
    document.getElementById('back-right-wing').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-blue'){
    document.getElementById('left-wing-label').style.background = 'blue'
    document.getElementById("left-wing-title").innerHTML = "Blue";
    document.getElementById('front-left-top-wing').style.fill = 'blue'
    document.getElementById('front-write-wing').style.fill = 'blue'
    document.getElementById('back-left-wing').style.fill = 'blue'
    document.getElementById('back-right-wing').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-lime'){
    document.getElementById('left-wing-label').style.background = '#09b600'
    document.getElementById("left-wing-title").innerHTML = "Lime";
    document.getElementById('front-left-top-wing').style.fill = '#09b600'
    document.getElementById('front-write-wing').style.fill = '#09b600'
    document.getElementById('back-left-wing').style.fill = '#09b600'
    document.getElementById('back-right-wing').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-white'){
    document.getElementById('left-wing-label').style.background = 'White'
    document.getElementById("left-wing-title").innerHTML = "White";
    document.getElementById('front-left-top-wing').style.fill = 'White'
    document.getElementById('front-write-wing').style.fill = 'white'
    document.getElementById('back-left-wing').style.fill = 'white'
    document.getElementById('back-right-wing').style.fill = 'white'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-black'){
    document.getElementById('left-wing-label').style.background = 'Black'
    document.getElementById("left-wing-title").innerHTML = "Black";
    document.getElementById('front-left-top-wing').style.fill = 'Black'
    document.getElementById('front-write-wing').style.fill = 'black'
    document.getElementById('back-left-wing').style.fill = 'black'
    document.getElementById('back-right-wing').style.fill = 'black'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-teal'){
    document.getElementById('left-wing-label').style.background = '#00b692'
    document.getElementById("left-wing-title").innerHTML = "Teal";
    document.getElementById('front-left-top-wing').style.fill = '#00b692'
    document.getElementById('front-write-wing').style.fill = '#09b600'
    document.getElementById('back-left-wing').style.fill = '#09b600'
    document.getElementById('back-right-wing').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  //right wing control
  if(color === 'rw-aqua'){
    document.getElementById('left-wing-label').style.background = '#129793'
    document.getElementById("left-wing-title").innerHTML = "Aqua";
    document.getElementById('front-write-wing').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'rw-neon-green'){
    document.getElementById('right-wing-label').style.background = '#29f04f'
    document.getElementById("right-wing-title").innerHTML = "Neon Green";
    document.getElementById('front-write-wing').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-hot-pink'){
    document.getElementById('right-wing-label').style.background = '#e929f0'
    document.getElementById("right-wing-title").innerHTML = "Hot Pink";
    document.getElementById('front-write-wing').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-yellow'){
    document.getElementById('right-wing-label').style.background = 'yellow'
    document.getElementById("right-wing-title").innerHTML = "Yellow";
    document.getElementById('front-write-wing').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-maroon'){
    document.getElementById('right-wing-label').style.background = '#cb0039'
    document.getElementById("right-wing-title").innerHTML = "Maroon";
    document.getElementById('front-write-wing').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-grey'){
    document.getElementById('right-wing-label').style.background = '#969696'
    document.getElementById("right-wing-title").innerHTML = "Grey";
    document.getElementById('front-write-wing').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-navy'){
    document.getElementById('right-wing-label').style.background = '#152c91'
    document.getElementById("right-wing-title").innerHTML = "Navy";
    document.getElementById('front-write-wing').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-purple'){
    document.getElementById('right-wing-label').style.background = 'purple'
    document.getElementById("right-wing-title").innerHTML = "Purple";
    document.getElementById('front-write-wing').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-darkGreen'){
    document.getElementById('right-wing-label').style.background = 'Green'
    document.getElementById("right-wing-title").innerHTML = "Green";
    document.getElementById('front-write-wing').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-darkGrey'){
    document.getElementById('right-wing-label').style.background = '#494949'
    document.getElementById("right-wing-title").innerHTML = "Dark Grey";
    document.getElementById('front-write-wing').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-blue'){
    document.getElementById('right-wing-label').style.background = 'blue'
    document.getElementById("right-wing-title").innerHTML = "Blue";
    document.getElementById('front-write-wing').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-lime'){
    document.getElementById('right-wing-label').style.background = '#09b600'
    document.getElementById("right-wing-title").innerHTML = "Lime";
    document.getElementById('front-write-wing').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-white'){
    document.getElementById('right-wing-label').style.background = 'White'
    document.getElementById("right-wing-title").innerHTML = "White";
    document.getElementById('front-write-wing').style.fill = 'White'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-black'){
    document.getElementById('right-wing-label').style.background = 'Black'
    document.getElementById("right-wing-title").innerHTML = "Black";
    document.getElementById('front-write-wing').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rw-teal'){
    document.getElementById('right-wing-label').style.background = '#00b692'
    document.getElementById("right-wing-title").innerHTML = "Teal";
    document.getElementById('front-write-wing').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-right-wing').style.display = 'none'
    dropdownCtrl = true
  }
  //Body Wrap control
  if(color === 'bw-aqua'){
    document.getElementById('body-wrap-label').style.background = '#129793'
    document.getElementById("body-wrap-title").innerHTML = "Aqua";
    document.getElementById('front-chest-around').style.fill = '#129793'


    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none';
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'bw-neon-green'){
    document.getElementById('body-wrap-label').style.background = '#29f04f'
    document.getElementById("body-wrap-title").innerHTML = "Neon Green";
    document.getElementById('front-chest-around').style.fill = '#29f04f'


    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-hot-pink'){
    document.getElementById('body-wrap-label').style.background = '#e929f0'
    document.getElementById("body-wrap-title").innerHTML = "Hot Pink";
    document.getElementById('front-chest-around').style.fill = '#e929f0'


    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-yellow'){
    document.getElementById('body-wrap-label').style.background = 'yellow'
    document.getElementById("body-wrap-title").innerHTML = "Yellow";
    document.getElementById('front-chest-around').style.fill = 'yellow'

    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-maroon'){
    document.getElementById('body-wrap-label').style.background = '#cb0039'
    document.getElementById("body-wrap-title").innerHTML = "Maroon";
    document.getElementById('front-chest-around').style.fill = '#cb0039'

    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-grey'){
    document.getElementById('body-wrap-label').style.background = '#969696'
    document.getElementById("body-wrap-title").innerHTML = "Grey";
    document.getElementById('front-chest-around').style.fill = '#969696'

    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-navy'){
    document.getElementById('body-wrap-label').style.background = '#152c91'
    document.getElementById("body-wrap-title").innerHTML = "Navy";
    document.getElementById('front-chest-around').style.fill = '#152c91'

    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-purple'){
    document.getElementById('body-wrap-label').style.background = 'purple'
    document.getElementById("body-wrap-title").innerHTML = "Purple";
    document.getElementById('front-chest-around').style.fill = 'purple'

    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-darkGreen'){
    document.getElementById('body-wrap-label').style.background = 'Green'
    document.getElementById("body-wrap-title").innerHTML = "Green";
    document.getElementById('front-chest-around').style.fill = 'Green'

    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-darkGrey'){
    document.getElementById('body-wrap-label').style.background = '#494949'
    document.getElementById("body-wrap-title").innerHTML = "Dark Grey";
    document.getElementById('front-chest-around').style.fill = '#494949'

    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-blue'){
    document.getElementById('body-wrap-label').style.background = 'blue'
    document.getElementById("body-wrap-title").innerHTML = "Blue";
    document.getElementById('front-chest-around').style.fill = 'blue'

    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-lime'){
    document.getElementById('body-wrap-label').style.background = '#09b600'
    document.getElementById("body-wrap-title").innerHTML = "Lime";
    document.getElementById('front-chest-around').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-white'){
    document.getElementById('body-wrap-label').style.background = 'White'
    document.getElementById("body-wrap-title").innerHTML = "White";
    document.getElementById('front-chest-around').style.fill = 'White'
    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-black'){
    document.getElementById('body-wrap-label').style.background = 'Black'
    document.getElementById("body-wrap-title").innerHTML = "Black";
    document.getElementById('front-chest-around').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bw-teal'){
    document.getElementById('body-wrap-label').style.background = '#00b692'
    document.getElementById("body-wrap-title").innerHTML = "Teal";
    document.getElementById('front-chest-around').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  //Body Left control
  if(color === 'bl-aqua'){
    document.getElementById('body-left-label').style.background = '#129793'
    document.getElementById("body-left-title").innerHTML = "Aqua";
    document.getElementById('front-chest-left').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-left-wrap').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'bl-neon-green'){
    document.getElementById('body-left-label').style.background = '#29f04f'
    document.getElementById("body-left-title").innerHTML = "Neon Green";
    document.getElementById('front-chest-left').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-left-wrap').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-hot-pink'){
    document.getElementById('body-left-label').style.background = '#e929f0'
    document.getElementById("body-left-title").innerHTML = "Hot Pink";
    document.getElementById('front-chest-left').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-yellow'){
    document.getElementById('body-left-label').style.background = 'yellow'
    document.getElementById("body-left-title").innerHTML = "Yellow";
    document.getElementById('front-chest-left').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-maroon'){
    document.getElementById('body-left-label').style.background = '#cb0039'
    document.getElementById("body-left-title").innerHTML = "Maroon";
    document.getElementById('front-chest-left').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-grey'){
    document.getElementById('body-left-label').style.background = '#969696'
    document.getElementById("body-left-title").innerHTML = "Grey";
    document.getElementById('front-chest-left').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-navy'){
    document.getElementById('body-left-label').style.background = '#152c91'
    document.getElementById("body-left-title").innerHTML = "Navy";
    document.getElementById('front-chest-left').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-purple'){
    document.getElementById('body-left-label').style.background = 'purple'
    document.getElementById("body-left-title").innerHTML = "Purple";
    document.getElementById('front-chest-left').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-darkGreen'){
    document.getElementById('body-left-label').style.background = 'Green'
    document.getElementById("body-left-title").innerHTML = "Green";
    document.getElementById('front-chest-left').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-darkGrey'){
    document.getElementById('body-left-label').style.background = '#494949'
    document.getElementById("body-left-title").innerHTML = "Dark Grey";
    document.getElementById('front-chest-left').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-blue'){
    document.getElementById('body-left-label').style.background = 'blue'
    document.getElementById("body-left-title").innerHTML = "Blue";
    document.getElementById('front-chest-left').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-lime'){
    document.getElementById('body-left-label').style.background = '#09b600'
    document.getElementById("body-left-title").innerHTML = "Lime";
    document.getElementById('front-chest-left').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-white'){
    document.getElementById('body-left-label').style.background = 'White'
    document.getElementById("body-left-title").innerHTML = "White";
    document.getElementById('front-chest-left').style.fill = 'White'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-black'){
    document.getElementById('body-left-label').style.background = 'Black'
    document.getElementById("body-left-title").innerHTML = "Black";
    document.getElementById('front-chest-left').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bl-teal'){
    document.getElementById('body-left-label').style.background = '#00b692'
    document.getElementById("body-left-title").innerHTML = "Teal";
    document.getElementById('front-chest-left').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-body-left').style.display = 'none'
    dropdownCtrl = true
  }
  //Body Right control
  if(color === 'br-aqua'){
    document.getElementById('body-right-label').style.background = '#129793'
    document.getElementById("body-right-title").innerHTML = "Aqua";
    document.getElementById('front-chest-right').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'br-neon-green'){
    document.getElementById('body-right-label').style.background = '#29f04f'
    document.getElementById("body-right-title").innerHTML = "Neon Green";
    document.getElementById('front-chest-right').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-hot-pink'){
    document.getElementById('body-right-label').style.background = '#e929f0'
    document.getElementById("body-right-title").innerHTML = "Hot Pink";
    document.getElementById('front-chest-right').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-yellow'){
    document.getElementById('body-right-label').style.background = 'yellow'
    document.getElementById("body-right-title").innerHTML = "Yellow";
    document.getElementById('front-chest-right').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-maroon'){
    document.getElementById('body-right-label').style.background = '#cb0039'
    document.getElementById("body-right-title").innerHTML = "Maroon";
    document.getElementById('front-chest-right').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-grey'){
    document.getElementById('body-right-label').style.background = '#969696'
    document.getElementById("body-right-title").innerHTML = "Grey";
    document.getElementById('front-chest-right').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-navy'){
    document.getElementById('body-right-label').style.background = '#152c91'
    document.getElementById("body-right-title").innerHTML = "Navy";
    document.getElementById('front-chest-right').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-purple'){
    document.getElementById('body-right-label').style.background = 'purple'
    document.getElementById("body-right-title").innerHTML = "Purple";
    document.getElementById('front-chest-right').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-darkGreen'){
    document.getElementById('body-right-label').style.background = 'Green'
    document.getElementById("body-right-title").innerHTML = "Green";
    document.getElementById('front-chest-right').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-darkGrey'){
    document.getElementById('body-right-label').style.background = '#494949'
    document.getElementById("body-right-title").innerHTML = "Dark Grey";
    document.getElementById('front-chest-right').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-blue'){
    document.getElementById('body-right-label').style.background = 'blue'
    document.getElementById("body-right-title").innerHTML = "Blue";
    document.getElementById('front-chest-right').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-lime'){
    document.getElementById('body-right-label').style.background = '#09b600'
    document.getElementById("body-right-title").innerHTML = "Lime";
    document.getElementById('front-chest-right').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-white'){
    document.getElementById('body-right-label').style.background = 'White'
    document.getElementById("body-right-title").innerHTML = "White";
    document.getElementById('front-chest-right').style.fill = 'White'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-black'){
    document.getElementById('body-right-label').style.background = 'Black'
    document.getElementById("body-right-title").innerHTML = "Black";
    document.getElementById('front-chest-right').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'br-teal'){
    document.getElementById('body-right-label').style.background = '#00b692'
    document.getElementById("body-right-title").innerHTML = "Teal";
    document.getElementById('front-chest-right').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-body-right').style.display = 'none'
    dropdownCtrl = true
  }
  //Collar
  if(color === 'c-aqua'){
    document.getElementById('collar-label').style.background = '#129793'
    document.getElementById("collar-title").innerHTML = "Aqua";
    document.getElementById('front-collar').style.fill = '#129793'
    document.getElementById('back-collar').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
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
    document.getElementById('back-collar').style.fill = 'green'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-darkGrey'){
    document.getElementById('collar-label').style.background = '#494949'
    document.getElementById("collar-title").innerHTML = "Dark Grey";
    document.getElementById('front-collar').style.fill = '#494949'
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
    document.getElementById('back-collar').style.fill = 'white'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-black'){
    document.getElementById('collar-label').style.background = 'Black'
    document.getElementById("collar-title").innerHTML = "Black";
    document.getElementById('front-collar').style.fill = 'Black'
    document.getElementById('back-collar').style.fill = 'black'
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
// Save suit options - make sure you require them to watch the video and add measurements before

//testing
function test(){

  document.getElementById('pop-confirm-wrap').style.display = 'flex'
  document.getElementById('popup-confirm-section').style.display = 'flex'
// Front
  let leftUpperArm = "Left Upper Arm: " + document.getElementById("left-upper-arm-title").innerHTML + " "
  let leftLowerArm = "Left Lower Arm: " + document.getElementById("left-lower-arm-title").innerHTML + " "
  let leftWing = "Left Wing: " + document.getElementById("left-wing-title").innerHTML + " "
  let leftBody = "Body Left: " + document.getElementById("body-left-title").innerHTML + " "


  let rightUpperArm = "Right Upper Arm: " + document.getElementById("right-upper-arm-title").innerHTML
  let rightLowerArm = "Right Lower Arm: " + document.getElementById("right-lower-arm-title").innerHTML + " "
  let rightWing = "Right Wing: " + document.getElementById("right-wing-title").innerHTML + " "
  let rightBody = "Right Body: " + document.getElementById("body-right-title").innerHTML + " "


  let collar = "Collar: " + document.getElementById("collar-title").innerHTML + " "
  let bodyWrap = "Body Wrap: " + document.getElementById("body-wrap-title").innerHTML + " "



  let allFrontValues = leftUpperArm +leftLowerArm+leftWing+leftBody+rightUpperArm+rightLowerArm+rightWing+rightBody+collar+bodyWrap
  document.getElementById("form-group-company").getElementsByClassName("form-control")[0].value = "this is a success"
  document.getElementById("form-group-email").getElementsByClassName("form-control")[0].value = "allFrontValues@success.com"
  document.getElementById("form-group-comment").getElementsByClassName("form-control")[0].value = allFrontValues

// Back
  let backleftUpperArm = "Left Upper Arm: " + document.getElementById("left-upper-arm-title").innerHTML + " "
  let backleftLowerArm = "Left Lower Arm: " + document.getElementById("left-lower-arm-title").innerHTML + " "
  let backleftWing = "Left Wing: " + document.getElementById("left-wing-title").innerHTML + " "
  let backleftBody = "Body Left: " + document.getElementById("body-left-title").innerHTML + " "


  let backrightUpperArm = "Right Upper Arm: " + document.getElementById("right-upper-arm-title").innerHTML
  let backrightLowerArm = "Right Lower Arm: " + document.getElementById("right-lower-arm-title").innerHTML + " "
  let backrightWing = "Right Wing: " + document.getElementById("right-wing-title").innerHTML + " "
  let backrightBody = "Right Body: " + document.getElementById("body-right-title").innerHTML + " "


  let backcollar = "Collar: " + document.getElementById("collar-title").innerHTML + " "
  let backbodyWrap = "Body Wrap: " + document.getElementById("body-wrap-title").innerHTML + " "

//Measurements
  let jacketLength = "Jacket Length: " + document.getElementById("measure-jacket-legnth").value
  let sholderToSholder = "Sholder to Sholder: " + document.getElementById("measure-sholder-sholder").value
  let fullArm = "Full Arm: " + document.getElementById("measure-full-arm").value
  let sholderToElbow = "Sholder to Elbow: " +  document.getElementById("measure-sholder-elbow").value
  let elbowToWrist = "Elbow to Wrist: " +  document.getElementById("measure-elbow-wrist").value
  let chestLength = "Chest Length: " +  document.getElementById("measure-chest-legnth").value
  let biceptCur = "Bicept Cur: " +  document.getElementById("measure-bicept-cur").value
  let forearmCur = "Forearm Cur: " +  document.getElementById("measure-forearm-cur").value
  let waistCur = "Waist Cur: " +  document.getElementById("measure-bicept-cur").value
  let wristCur = "Wrist Cur: " +  document.getElementById("measure-wrist-cur").value
  let trouserCur = "Trouser Waist Cur: " +  document.getElementById("measure-trouser-cur").value
  let fabType = "Fabric Type: " +  document.getElementById("select-fab-title").innerHTML

  let allMeasurements = jacketLength+sholderToSholder+fullArm+sholderToElbow+elbowToWrist+chestLength+biceptCur+forearmCur+waistCur+wristCur+trouserCur+fabType
  document.getElementById("form-group-organization").getElementsByClassName("form-control")[0].value = allMeasurements

  let allBackValues = backleftUpperArm +backleftLowerArm+backleftWing+backleftBody+backrightUpperArm+backrightLowerArm+backrightWing+backrightBody+backcollar+backbodyWrap
  document.getElementById("form-group-company").getElementsByClassName("form-control")[0].value = allBackValues


let name = document.getElementById("input-name").value
let email = document.getElementById("input-email").value
  document.getElementById("form-group-name_first").getElementsByClassName("form-control")[0].value = name
  document.getElementById("form-group-email").getElementsByClassName("form-control")[0].value = email

}
// Save suit options - make sure you require them to watch the video and add measurements before
