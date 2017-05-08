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
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'la-blue'){
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'la-red'){
    document.getElementById('color-picker-dorpdown-left-arm').style.display = 'none'
    dropdownCtrl = true
  }
  //right upper arm control
  if(color === 'rua-green'){
    document.getElementById('color-picker-dorpdown-right-upper-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-blue'){
    document.getElementById('color-picker-dorpdown-right-upper-arm').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'rua-red'){
    document.getElementById('color-picker-dorpdown-right-upper-arm').style.display = 'none'
    dropdownCtrl = true
  }
}
