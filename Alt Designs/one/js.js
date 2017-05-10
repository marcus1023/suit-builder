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
}
// Save suit options - make sure you require them to watch the video and add measurements before





//testing
function test(){
  let value = {}
  value.rightArm = "right arm " + document.getElementById("right-upper-arm-title").innerHTML
  value.leftArm = "right arm " + document.getElementById("left-upper-arm-title").innerHTML
  console.log(value)
}
