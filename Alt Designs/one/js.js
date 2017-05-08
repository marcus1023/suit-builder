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
    document.getElementById('color-picker-dorpdown-right-upper-arm').style.display = 'flex'
    dropdownCtrl = false
    return
  }
}
function run(){
  dropdownCtrl = true
}
//choose your color
function colorPickerSelect(color){
  //left upper arm control
  if(color === 'la-green'){
    document.getElementById('left-upper-arm-label').style.background = 'green'
    document.getElementById("left-upper-arm-title").innerHTML = "Green";
    document.getElementById('upper-right-arm-svg').style.fill = 'green'
    document.getElementById('upper-right-arm-svg').style.stroke = 'black'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'la-blue'){
    document.getElementById('left-upper-arm-label').style.background = 'lightblue'
    document.getElementById("left-upper-arm-title").innerHTML = "Blue";
    document.getElementById('upper-right-arm-svg').style.fill = 'lightblue'
    document.getElementById('upper-right-arm-svg').style.stroke = 'black'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'la-red'){
    document.getElementById('left-upper-arm-label').style.background = 'red'
    document.getElementById("left-upper-arm-title").innerHTML = "Red";
    document.getElementById('upper-right-arm-svg').style.fill = 'red'
    document.getElementById('upper-right-arm-svg').style.stroke = 'black'
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  //right upper arm control
  if(color === 'rua-green'){
    document.getElementById('right-upper-arm-label').style.background = 'Green'
    document.getElementById("right-upper-arm-title").innerHTML = "Green";
    document.getElementById('upper-left-arm-svg').style.fill = 'green'
    document.getElementById('upper-left-arm-svg').style.stroke = 'black'
    document.getElementById('color-picker-dorpdown-right-upper-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-blue'){
    document.getElementById('right-upper-arm-label').style.background = 'lightblue'
    document.getElementById("right-upper-arm-title").innerHTML = "Blue";
    document.getElementById('upper-left-arm-svg').style.fill = 'lightblue'
    document.getElementById('upper-left-arm-svg').style.stroke = 'black'
    document.getElementById('color-picker-dorpdown-right-upper-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-red'){
    document.getElementById('right-upper-arm-label').style.background = 'Red'
    document.getElementById("right-upper-arm-title").innerHTML = "Red";
    document.getElementById('upper-left-arm-svg').style.fill = 'red'
    document.getElementById('upper-left-arm-svg').style.stroke = 'black'
    document.getElementById('color-picker-dorpdown-right-upper-arm').style.display = 'none'
    dropdownCtrl = true
  }
}
// Save suit options - make sure you require them to watch the video and add measurements before 





//testing
function testSVG(){
  alert("Acknowledge to modify object color.");
  var object = document.getElementById("right-upper-arm-SVG");
  object.setAttribute("fill", "green");
}
