let dropdownCtrlBack = true
// toggle beteen measurements and colorPicker
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
}
function run(){
  dropdownCtrlBack = true
}
//choose your color
function colorPickerSelectBack(color){
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
    document.getElementById('back-left-top-arm').style.fill = 'yellow'
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
    document.getElementById('back-body-wrap-label').style.background = '#129793'
    document.getElementById("back-body-wrap-title").innerHTML = "Aqua";
    document.getElementById('back-back').style.fill = '#129793'
    document.getElementById('back-color-picker-dropdown-body-wrap').style.display = 'none'
    dropdownCtrlBack = true
    console.log(dropdownCtrlBack)
  }
  if(color === 'bw-neon-green'){
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
    document.getElementById('back-left-stripe').style.fill = '#09b600'
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
// Save suit options - make sure you require them to watch the video and add measurements before
