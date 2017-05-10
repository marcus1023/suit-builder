let dropdownCtrl = true
let pannelStatus = true
// toggle beteen measurements and colorPicker
function colorPickerPannelSet(type) {
  if(type === 'measurements'){
      document.getElementById('color-picker-colors').style.display = 'none'
      document.getElementById('color-picker-measurements').style.display = 'flex'
  }
  if(type === 'colors'){
      document.getElementById('color-picker-measurements').style.display = 'none'
      document.getElementById('color-picker-colors').style.display = 'flex'
  }
}
// show colors dropdown
function colorPickerDropdown(position){
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
    document.getElementById('color-picker-dorpdown-right-arm').style.display = 'flex'
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
    document.getElementById('left-upper-arm-label').style.background = '#129793'
    document.getElementById("left-upper-arm-title").innerHTML = "Aqua";
    document.getElementById('front-left-top-arm').style.fill = '#129793'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lua-n-green'){
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
  if(color === 'rua-n-green'){
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
  if(color === 'lla-n-green'){
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
  if(color === 'lla-aqua'){
    document.getElementById('right-lower-arm-label').style.background = '#129793'
    document.getElementById("right-lower-arm-title").innerHTML = "Aqua";
    document.getElementById('front-bottom-right-arm').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'lla-n-green'){
    document.getElementById('right-lower-arm-label').style.background = '#29f04f'
    document.getElementById("right-lower-arm-title").innerHTML = "Neon Green";
    document.getElementById('front-bottom-right-arm').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-hot-pink'){
    document.getElementById('right-lower-arm-label').style.background = '#e929f0'
    document.getElementById("right-lower-arm-title").innerHTML = "Hot Pink";
    document.getElementById('front-bottom-right-arm').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-yellow'){
    document.getElementById('right-lower-arm-label').style.background = 'yellow'
    document.getElementById("right-lower-arm-title").innerHTML = "Yellow";
    document.getElementById('front-bottom-right-arm').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-maroon'){
    document.getElementById('right-upper-arm-label').style.background = '#cb0039'
    document.getElementById("right-upper-arm-title").innerHTML = "Maroon";
    document.getElementById('front-bottom-right-arm').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-grey'){
    document.getElementById('right-upper-arm-label').style.background = '#969696'
    document.getElementById("right-upper-arm-title").innerHTML = "Grey";
    document.getElementById('front-bottom-right-arm').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-navy'){
    document.getElementById('right-lower-arm-label').style.background = '#152c91'
    document.getElementById("right-lower-arm-title").innerHTML = "Navy";
    document.getElementById('front-bottom-right-arm').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-purple'){
    document.getElementById('right-lower-arm-label').style.background = 'purple'
    document.getElementById("right-lower-arm-title").innerHTML = "Purple";
    document.getElementById('front-bottom-right-arm').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-darkGreen'){
    document.getElementById('right-lower-arm-label').style.background = 'Green'
    document.getElementById("right-lower-arm-title").innerHTML = "Green";
    document.getElementById('front-bottom-right-arm').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-darkGrey'){
    document.getElementById('right-lower-arm-label').style.background = '#494949'
    document.getElementById("right-lower-arm-title").innerHTML = "Dark Grey";
    document.getElementById('front-bottom-right-arm').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-blue'){
    document.getElementById('right-lower-arm-label').style.background = 'blue'
    document.getElementById("right-lower-arm-title").innerHTML = "Blue";
    document.getElementById('front-bottom-right-arm').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-lime'){
    document.getElementById('right-lower-arm-label').style.background = '#09b600'
    document.getElementById("right-lower-arm-title").innerHTML = "Lime";
    document.getElementById('front-bottom-right-arm').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-white'){
    document.getElementById('right-lower-arm-label').style.background = 'White'
    document.getElementById("right-lower-arm-title").innerHTML = "White";
    document.getElementById('front-bottom-right-arm').style.fill = 'White'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-black'){
    document.getElementById('right-lower-arm-label').style.background = 'Black'
    document.getElementById("right-lower-arm-title").innerHTML = "Black";
    document.getElementById('front-bottom-right-arm').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lla-teal'){
    document.getElementById('right-lower-arm-label').style.background = '#00b692'
    document.getElementById("right-lower-arm-title").innerHTML = "Teal";
    document.getElementById('front-bottom-right-arm').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  //left wing control
  if(color === 'lw-aqua'){
    document.getElementById('left-wing-label').style.background = '#129793'
    document.getElementById("left-wing-title").innerHTML = "Aqua";
    document.getElementById('front-write-wing').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
    console.log(dropdownCtrl)
  }
  if(color === 'lw-n-green'){
    document.getElementById('left-wing-label').style.background = '#29f04f'
    document.getElementById("left-wing-title").innerHTML = "Neon Green";
    document.getElementById('front-write-wing').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-hot-pink'){
    document.getElementById('left-wing-label').style.background = '#e929f0'
    document.getElementById("left-wing-title").innerHTML = "Hot Pink";
    document.getElementById('front-write-wing').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-yellow'){
    document.getElementById('left-wing-label').style.background = 'yellow'
    document.getElementById("left-wing-title").innerHTML = "Yellow";
    document.getElementById('front-write-wing').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-maroon'){
    document.getElementById('left-wing-label').style.background = '#cb0039'
    document.getElementById("left-wing-title").innerHTML = "Maroon";
    document.getElementById('front-write-wing').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-grey'){
    document.getElementById('left-wing-label').style.background = '#969696'
    document.getElementById("left-wing-title").innerHTML = "Grey";
    document.getElementById('front-write-wing').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-navy'){
    document.getElementById('left-wing-label').style.background = '#152c91'
    document.getElementById("left-wing-title").innerHTML = "Navy";
    document.getElementById('front-write-wing').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-purple'){
    document.getElementById('left-wing-label').style.background = 'purple'
    document.getElementById("left-wing-title").innerHTML = "Purple";
    document.getElementById('front-write-wing').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-darkGreen'){
    document.getElementById('left-wing-label').style.background = 'Green'
    document.getElementById("left-wing-title").innerHTML = "Green";
    document.getElementById('front-write-wing').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-darkGrey'){
    document.getElementById('left-wing-label').style.background = '#494949'
    document.getElementById("left-wing-title").innerHTML = "Dark Grey";
    document.getElementById('front-write-wing').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-blue'){
    document.getElementById('left-wing-label').style.background = 'blue'
    document.getElementById("left-wing-title").innerHTML = "Blue";
    document.getElementById('front-write-wing').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-lime'){
    document.getElementById('left-wing-label').style.background = '#09b600'
    document.getElementById("left-wing-title").innerHTML = "Lime";
    document.getElementById('front-write-wing').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-white'){
    document.getElementById('left-wing-label').style.background = 'White'
    document.getElementById("left-wing-title").innerHTML = "White";
    document.getElementById('front-write-wing').style.fill = 'White'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-black'){
    document.getElementById('left-wing-label').style.background = 'Black'
    document.getElementById("left-wing-title").innerHTML = "Black";
    document.getElementById('front-write-wing').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-left-wing').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'lw-teal'){
    document.getElementById('left-wing-label').style.background = '#00b692'
    document.getElementById("left-wing-title").innerHTML = "Teal";
    document.getElementById('front-write-wing').style.fill = '#00b692'
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
  if(color === 'rw-n-green'){
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
  if(color === 'bw-n-green'){
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
}
// Save suit options - make sure you require them to watch the video and add measurements before





//testing
function test(){
  let value = {}
  value.rightArm = "right arm " + document.getElementById("right-upper-arm-title").innerHTML
  value.leftArm = "right arm " + document.getElementById("left-upper-arm-title").innerHTML
  console.log(value)
}
