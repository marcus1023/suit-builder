let dropdownCtrl = true
let pannelStatus = true
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
}
function run(){
  dropdownCtrl = true
}
//choose your color
function colorPickerSelect(color){
  console.log(color)
  console.log(dropdownCtrl)
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
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'lw-neon-green'){
    document.getElementById('left-wing-label').style.background = '#29f04f'
    document.getElementById("left-wing-title").innerHTML = "Neon Green";
    document.getElementById('front-left-top-wing').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-hot-pink'){
    document.getElementById('left-wing-label').style.background = '#e929f0'
    document.getElementById("left-wing-title").innerHTML = "Hot Pink";
    document.getElementById('front-left-top-wing').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-yellow'){
    document.getElementById('left-wing-label').style.background = 'yellow'
    document.getElementById("left-wing-title").innerHTML = "Yellow";
    document.getElementById('front-left-top-wing').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-maroon'){
    document.getElementById('left-wing-label').style.background = '#cb0039'
    document.getElementById("left-wing-title").innerHTML = "Maroon";
    document.getElementById('front-left-top-wing').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-grey'){
    document.getElementById('left-wing-label').style.background = '#969696'
    document.getElementById("left-wing-title").innerHTML = "Grey";
    document.getElementById('front-left-top-wing').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-navy'){
    document.getElementById('left-wing-label').style.background = '#152c91'
    document.getElementById("left-wing-title").innerHTML = "Navy";
    document.getElementById('front-left-top-wing').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-purple'){
    document.getElementById('left-wing-label').style.background = 'purple'
    document.getElementById("left-wing-title").innerHTML = "Purple";
    document.getElementById('front-left-top-wing').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-darkGreen'){
    document.getElementById('left-wing-label').style.background = 'Green'
    document.getElementById("left-wing-title").innerHTML = "Green";
    document.getElementById('front-left-top-wing').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-darkGrey'){
    document.getElementById('left-wing-label').style.background = '#494949'
    document.getElementById("left-wing-title").innerHTML = "Dark Grey";
    document.getElementById('front-left-top-wing').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-blue'){
    document.getElementById('left-wing-label').style.background = 'blue'
    document.getElementById("left-wing-title").innerHTML = "Blue";
    document.getElementById('front-left-top-wing').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-lime'){
    document.getElementById('left-wing-label').style.background = '#09b600'
    document.getElementById("left-wing-title").innerHTML = "Lime";
    document.getElementById('front-left-top-wing').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-white'){
    document.getElementById('left-wing-label').style.background = 'White'
    document.getElementById("left-wing-title").innerHTML = "White";
    document.getElementById('front-left-top-wing').style.fill = 'White'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-black'){
    document.getElementById('left-wing-label').style.background = 'Black'
    document.getElementById("left-wing-title").innerHTML = "Black";
    document.getElementById('front-left-top-wing').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-teal'){
    document.getElementById('left-wing-label').style.background = '#00b692'
    document.getElementById("left-wing-title").innerHTML = "Teal";
    document.getElementById('front-left-top-wing').style.fill = '#00b692'
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
    document.getElementById('color-picker-dropdown-body-wrap').style.display = 'none'
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
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'c-neon-green'){
    document.getElementById('collar-label').style.background = '#29f04f'
    document.getElementById("collar-title").innerHTML = "Neon Green";
    document.getElementById('front-collar').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-hot-pink'){
    document.getElementById('collar-label').style.background = '#e929f0'
    document.getElementById("collar-title").innerHTML = "Hot Pink";
    document.getElementById('front-collar').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-yellow'){
    document.getElementById('collar-label').style.background = 'yellow'
    document.getElementById("collar-title").innerHTML = "Yellow";
    document.getElementById('front-collar').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-maroon'){
    document.getElementById('collar-label').style.background = '#cb0039'
    document.getElementById("collar-title").innerHTML = "Maroon";
    document.getElementById('front-collar').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-grey'){
    document.getElementById('collar-label').style.background = '#969696'
    document.getElementById("collar-title").innerHTML = "Grey";
    document.getElementById('front-collar').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-navy'){
    document.getElementById('collar-label').style.background = '#152c91'
    document.getElementById("collar-title").innerHTML = "Navy";
    document.getElementById('front-collar').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-purple'){
    document.getElementById('collar-label').style.background = 'purple'
    document.getElementById("collar-title").innerHTML = "Purple";
    document.getElementById('front-collar').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-darkGreen'){
    document.getElementById('collar-label').style.background = 'Green'
    document.getElementById("collar-title").innerHTML = "Green";
    document.getElementById('front-collar').style.fill = 'Green'
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
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-lime'){
    document.getElementById('collar-label').style.background = '#09b600'
    document.getElementById("collar-title").innerHTML = "Lime";
    document.getElementById('front-collar').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-white'){
    document.getElementById('collar-label').style.background = 'White'
    document.getElementById("collar-title").innerHTML = "White";
    document.getElementById('front-collar').style.fill = 'White'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-black'){
    document.getElementById('collar-label').style.background = 'Black'
    document.getElementById("collar-title").innerHTML = "Black";
    document.getElementById('front-collar').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'c-teal'){
    document.getElementById('collar-label').style.background = '#00b692'
    document.getElementById("collar-title").innerHTML = "Teal";
    document.getElementById('front-collar').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-collar').style.display = 'none'
    dropdownCtrl = true
  }
}
// Save suit options - make sure you require them to watch the video and add measurements before

//testing
function test(){
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


let name = document.getElementById("input-name").innerHTML
let email = document.getElementById("input-email").innerHTML
  document.getElementById("form-group-name_first").getElementsByClassName("form-control")[0].value = name
  document.getElementById("form-group-email").getElementsByClassName("form-control")[0].value = email

}
