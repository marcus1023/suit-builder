function collect(){

 document.getElementById('pop-confirm-wrap').style.display = 'flex'
 document.getElementById('popup-confirm-section').style.display = 'flex'
// Front
  let frontGrippers = " Gripers Color: " + document.getElementById("gripers-title").innerHTML + " / "
  let frontCollar = " Collar Color: " + document.getElementById("collar-title").innerHTML + " / "
  let frontLeft = " Front Left Color: " + document.getElementById("front-left-title").innerHTML + " / "
  let frontRight = " Front Right Color: " + document.getElementById("front-right-title").innerHTML + " / "
  let fra = " Front Right Arm Color: " + document.getElementById("front-left-lower-arm-title").innerHTML + " / "
  let fla = " Front Left Arm Color: " + document.getElementById("front-right-lower-arm-title").innerHTML + " / "
  let flul = " Front Left Upper Leg Color: " + document.getElementById("front-right-upper-leg-title").innerHTML + " / "
  let frul = " Front Right Upper Leg Color: " + document.getElementById("front-left-upper-leg-title").innerHTML + " / "
  let frk = " Front Right Knee Color: " + document.getElementById("flk-title").innerHTML + " / "
  let flk = " Front Left Knee Color: " + document.getElementById("frk-title").innerHTML + " / "
  let flll = " Front Right Lower Leg Color: " + document.getElementById("flll-title").innerHTML + " / "
  let frll = " Front Left Lower Leg Color: " + document.getElementById("frll-title").innerHTML + " / "

  let allFrontValues = frontGrippers + frontCollar + frontRight+fra+fla+flul+frul+frk+flk+flll+frll
// Back
  let back = " Back Color: " + document.getElementById("b-title").innerHTML + " / "
  let blua = " Back Left Upper Arm Color: " + document.getElementById("blua-title").innerHTML + " / "
  let brua = " Back Right Upper Arm Color: " + document.getElementById("brua-title").innerHTML + " / "
  let blla = " Back Left Lower Arm Color: " + document.getElementById("blla-title").innerHTML + " / "
  let brla = " Back Right Lower Arm Color: " + document.getElementById("brla-title").innerHTML + " / "
  let bl = " Back Legs Color: " + document.getElementById("bl-title").innerHTML + " / "
  let bh = " Back Hips Color: " + document.getElementById("bh-title").innerHTML + " / "

  let allBackValues = back+blua+brua+blla+brla+bl+bh
//Measurements
  let NECK_CIRCUMFERENCE = " NECK_CIRCUMFERENCE: " + document.getElementById("NECK_CIRCUMFERENCE").value + " / "
  let SHOULDER_TO_SHOULDER = " SHOULDER_TO_SHOULDER: " + document.getElementById("SHOULDER_TO_SHOULDER").value + " / "
  let SHOULDER_TO_ELBOW_LENGTH = " SHOULDER_TO_ELBOW_LENGTH: " + document.getElementById("SHOULDER_TO_ELBOW_LENGTH").value + " / "
  let ELBOW_TO_WRIST_LENGTH = " ELBOW_TO_WRIST_LENGTH: " + document.getElementById("ELBOW_TO_WRIST_LENGTH").value + " / "
  let CHEST_CIRCUMFERENCE = " CHEST_CIRCUMFERENCE: " + document.getElementById("CHEST_CIRCUMFERENCE").value + " / "
  let TORSO_LENGTH = " TORSO_LENGTH: " + document.getElementById("TORSO_LENGTH").value + " / "
  let FULL_ARM_BENT_90_LENGTH = " FULL_ARM_BENT_90_LENGTH: " + document.getElementById("FULL_ARM_BENT_90_LENGTH").value + " / "
  let BICEP_CIRCUMFERENCE = " BICEP_CIRCUMFERENCE: " + document.getElementById("BICEP_CIRCUMFERENCE").value + " / "
  let FOREARM_CIRCUMFERENCE = " FOREARM_CIRCUMFERENCE: " + document.getElementById("FOREARM_CIRCUMFERENCE").value + " / "
  let WRIST_CIRCUMFERENCE = " WRIST_CIRCUMFERENCE: " + document.getElementById("WRIST_CIRCUMFERENCE").value + " / "
  let FOOT_TO_SHOULDER_LENGTH = " FOOT_TO_SHOULDER_LENGTH: " + document.getElementById("FOOT_TO_SHOULDER_LENGTH").value + " / "
  let WAIST_CIRCUMFERENCE = " WAIST_CIRCUMFERENCE: " + document.getElementById("WAIST_CIRCUMFERENCE").value + " / "
  let HIPS_CIRCUMFERENCE = " HIPS_CIRCUMFERENCE: " + document.getElementById("HIPS_CIRCUMFERENCE").value + " / "
  let IN_SEAM_LENGTH = " IN_SEAM_LENGTH: " + document.getElementById("IN_SEAM_LENGTH").value + " / "
  let THIGH_CIRCUMFERENCE = " THIGH_CIRCUMFERENCE: " + document.getElementById("THIGH_CIRCUMFERENCE").value + " / "
  let CALF_CIRCUMFERENCE = " CALF_CIRCUMFERENCE: " + document.getElementById("CALF_CIRCUMFERENCE").value + " / "
  let CROTCH_TO_KNEE_LENGTH = " CROTCH_TO_KNEE_LENGTH: " + document.getElementById("CROTCH_TO_KNEE_LENGTH").value + " / "
  let LOWER_LEG_LENGTH = " LOWER_LEG_LENGTH: " + document.getElementById("LOWER_LEG_LENGTH").value + " / "
  let ANKLE_CIRCUMFERENCE = " ANKLE_CIRCUMFERENCE: " + document.getElementById("ANKLE_CIRCUMFERENCE").value + " / "
  let FOOT_LENGTH_SIZE = " FOOT_LENGTH_SIZE: " + document.getElementById("FOOT_LENGTH_SIZE").value + " / "
  let tm = " TORSO MATERIAL: " + document.getElementById("select-tfab-title").innerHTML + " / "
  let lam = " LOWER ARMS MATERIAL: " + document.getElementById("select-lafab-title").innerHTML + " / "

  let allMeasurements = NECK_CIRCUMFERENCE + SHOULDER_TO_SHOULDER+SHOULDER_TO_ELBOW_LENGTH+ELBOW_TO_WRIST_LENGTH+CHEST_CIRCUMFERENCE+FULL_ARM_BENT_90_LENGTH+BICEP_CIRCUMFERENCE+FOREARM_CIRCUMFERENCE+WRIST_CIRCUMFERENCE+FOOT_TO_SHOULDER_LENGTH+WAIST_CIRCUMFERENCE+HIPS_CIRCUMFERENCE+IN_SEAM_LENGTH+THIGH_CIRCUMFERENCE+CALF_CIRCUMFERENCE+CROTCH_TO_KNEE_LENGTH+LOWER_LEG_LENGTH+ANKLE_CIRCUMFERENCE+FOOT_LENGTH_SIZE+tm+lam
  document.getElementById("form-group-company").getElementsByClassName("form-control")[0].value = allFrontValues
  document.getElementById("form-group-comment").getElementsByClassName("form-control")[0].value = allBackValues
  document.getElementById("form-group-organization").getElementsByClassName("form-control")[0].value = allMeasurements

// contact Info
  let nameI = " Full Name: " + document.getElementById("input-name").value + " / "
  let emailI = " Email: " + document.getElementById("input-email").value + " / "
  let input_phone = " Phone: " + document.getElementById("input_phone").value + " / "
  let input_address = " Address: " + document.getElementById("input_address").value + " / "
  let input_city = " City: " + document.getElementById("input_city").value + " / "
  let input_state = " State: " + document.getElementById("input_state").value + " / "
  let input_country = " Country: " + document.getElementById("input_country").value + " / "

  let contactInfo = nameI+emailI+input_phone+input_address+input_city+input_state+input_country
  document.getElementById("form-group-c_d9lp9").getElementsByClassName("form-control")[0].value = contactInfo

console.log(allFrontValues)
console.log(allBackValues)
console.log(allMeasurements)
  document.getElementById("form-group-name_first").getElementsByClassName("form-control")[0].value = nameI
  document.getElementById("form-group-email").getElementsByClassName("form-control")[0].value = emailI

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
    let maroon = document.getElementById('admin-maroon').innerHTML
    if(maroon === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-maroon').length; i++){
                document.getElementsByClassName('acc-maroon')[i].style.display = 'none'
            }
    }
    let grey = document.getElementById('admin-grey').innerHTML
    if(grey === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-grey').length; i++){
                document.getElementsByClassName('acc-grey')[i].style.display = 'none'
            }
    }
    let navy = document.getElementById('admin-navy').innerHTML
    if(navy === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-navy').length; i++){
                document.getElementsByClassName('acc-navy')[i].style.display = 'none'
            }
    }
    let purple = document.getElementById('admin-purple').innerHTML
    if(purple === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-purple').length; i++){
                document.getElementsByClassName('acc-purple')[i].style.display = 'none'
            }
    }
    let darkGreen = document.getElementById('admin-darkGreen').innerHTML
    if(darkGreen === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-darkGreen').length; i++){
                document.getElementsByClassName('acc-darkGreen')[i].style.display = 'none'
            }
    }
    let darkGrey = document.getElementById('admin-darkGrey').innerHTML
    if(darkGrey === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-darkGrey').length; i++){
                document.getElementsByClassName('acc-darkGrey')[i].style.display = 'none'
            }
    }
    let blue = document.getElementById('admin-blue').innerHTML
    if(blue === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-blue').length; i++){
                document.getElementsByClassName('acc-blue')[i].style.display = 'none'
            }
    }
    let lime = document.getElementById('admin-lime').innerHTML
    if(lime === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-lime').length; i++){
                document.getElementsByClassName('acc-lime')[i].style.display = 'none'
            }
    }
    let white = document.getElementById('admin-white').innerHTML
    if(white === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-white').length; i++){
                document.getElementsByClassName('acc-white')[i].style.display = 'none'
            }
    }
    let black = document.getElementById('admin-black').innerHTML
    if(black === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-black').length; i++){
                document.getElementsByClassName('acc-black')[i].style.display = 'none'
            }
    }
    let teal = document.getElementById('admin-teal').innerHTML
    if(teal === 'off'){
            for(let i = 0; i < document.getElementsByClassName('acc-teal').length; i++){
                document.getElementsByClassName('acc-teal')[i].style.display = 'none'
            }
    }
}
adminColorControl()
// colorPickerDropdownBack middler
function colorPickerDropdownBack(drop){
  if(drop === 'back'){
    document.getElementById('color-picker-dropdown-back').style.display = 'flex'
  }
  if(drop === 'blla'){
    document.getElementById('color-picker-dropdown-blla').style.display = 'flex'
  }
  if(drop === 'brla'){
    document.getElementById('color-picker-dropdown-brla').style.display = 'flex'
  }
  if(drop === 'ble'){
    document.getElementById('color-picker-dropdown-ble').style.display = 'flex'
  }
  if(drop === 'bre'){
    document.getElementById('color-picker-dropdown-bre').style.display = 'flex'
  }
  if(drop === 'blua'){
    document.getElementById('color-picker-dropdown-blua').style.display = 'flex'
  }
  if(drop === 'brua'){
    document.getElementById('color-picker-dropdown-brua').style.display = 'flex'
  }
  if(drop === 'bleb'){
    document.getElementById('color-picker-dropdown-bleb').style.display = 'flex'
  }
  if(drop === 'breb'){
    document.getElementById('color-picker-dropdown-breb').style.display = 'flex'
  }
  if(drop === 'blsh'){
    document.getElementById('color-picker-dropdown-blsh').style.display = 'flex'
  }
  if(drop === 'brsh'){
    document.getElementById('color-picker-dropdown-brsh').style.display = 'flex'
  }
  if(drop === 'brsh'){
    document.getElementById('color-picker-dropdown-brsh').style.display = 'flex'
  }
  if(drop === 'blcr'){
    document.getElementById('color-picker-dropdown-blcr').style.display = 'flex'
  }
  if(drop === 'brcr'){
    document.getElementById('color-picker-dropdown-brcr').style.display = 'flex'
  }
  if(drop === 'blul'){
    document.getElementById('color-picker-dropdown-blul').style.display = 'flex'
  }
  if(drop === 'brul'){
    document.getElementById('color-picker-dropdown-brul').style.display = 'flex'
  }
  if(drop === 'blll'){
    document.getElementById('color-picker-dropdown-blll').style.display = 'flex'
  }
  if(drop === 'brll'){
    document.getElementById('color-picker-dropdown-brll').style.display = 'flex'
  }
  if(drop === 'blml'){
    document.getElementById('color-picker-dropdown-blml').style.display = 'flex'
  }
  if(drop === 'brml'){
    document.getElementById('color-picker-dropdown-brml').style.display = 'flex'
  }
  if(drop === 'blul'){
    document.getElementById('color-picker-dropdown-blul').style.display = 'flex'
  }
  if(drop === 'brul'){
    document.getElementById('color-picker-dropdown-brul').style.display = 'flex'
  }
  if(drop === 'blll'){
    document.getElementById('color-picker-dropdown-blll').style.display = 'flex'
  }
  if(drop === 'brll'){
    document.getElementById('color-picker-dropdown-brll').style.display = 'flex'
  }
  if(drop === 'blly'){
    document.getElementById('color-picker-dropdown-blly').style.display = 'flex'
  }
  if(drop === 'brly'){
    document.getElementById('color-picker-dropdown-brly').style.display = 'flex'
  }
  if(drop === 'bins'){
    document.getElementById('color-picker-dropdown-bins').style.display = 'flex'
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
  if(color === 'back-aqua'){
    console.log('here')
    document.getElementById('back-label').style.background = '#129793'
    document.getElementById("back-title").innerHTML = "Aqua";
    document.getElementById('back').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-neon-green'){
    document.getElementById('back-label').style.background = '#29f04f'
    document.getElementById("back-title").innerHTML = "Neon Green";
    document.getElementById('back').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-hot-pink'){
    document.getElementById('back-label').style.background = '#e929f0'
    document.getElementById("back-title").innerHTML = "Hot Pink";
    document.getElementById('back').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-yellow'){
    document.getElementById('back-label').style.background = 'yellow'
    document.getElementById("back-title").innerHTML = "Yellow";
    document.getElementById('back').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-maroon'){
    document.getElementById('back-label').style.background = '#cb0039'
    document.getElementById("back-title").innerHTML = "Maroon";
    document.getElementById('back').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-grey'){
    document.getElementById('back-label').style.background = '#969696'
    document.getElementById("back-title").innerHTML = "Grey";
    document.getElementById('back').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-navy'){
    document.getElementById('back-label').style.background = '#152c91'
    document.getElementById("back-title").innerHTML = "Navy";
    document.getElementById('back').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-purple'){
    document.getElementById('back-label').style.background = 'purple'
    document.getElementById("back-title").innerHTML = "Purple";
    document.getElementById('back').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-darkGreen'){
    document.getElementById('back-label').style.background = 'Green'
    document.getElementById("back-title").innerHTML = "Green";
    document.getElementById('back').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-darkGrey'){
    document.getElementById('back-label').style.background = '#494949'
    document.getElementById("back-title").innerHTML = "Dark Grey";
    document.getElementById('back').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-blue'){
    document.getElementById('back-label').style.background = 'blue'
    document.getElementById("back-title").innerHTML = "Blue";
    document.getElementById('back').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-lime'){
    document.getElementById('back-label').style.background = '#09b600'
    document.getElementById("back-title").innerHTML = "Lime";
    document.getElementById('back').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-white'){
    document.getElementById('back-label').style.background = 'White'
    document.getElementById("back-title").innerHTML = "White";
    document.getElementById('back').style.fill = 'White'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-black'){
    document.getElementById('back-label').style.background = 'Black'
    document.getElementById("back-title").innerHTML = "Black";
    document.getElementById('back').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'back-teal'){
    document.getElementById('back-label').style.background = '#00b692'
    document.getElementById("back-title").innerHTML = "Teal";
    document.getElementById('back').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-back').style.display = 'none'
    dropdownCtrl = true
  }
  // back right lyrica
  if(color === 'brly-aqua'){
    console.log('here')
    document.getElementById('brly-label').style.background = '#129793'
    document.getElementById("brly-title").innerHTML = "Aqua";
    document.getElementById('brly').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-neon-green'){
    document.getElementById('brly-label').style.background = '#29f04f'
    document.getElementById("brly-title").innerHTML = "Neon Green";
    document.getElementById('brly').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-hot-pink'){
    document.getElementById('brly-label').style.background = '#e929f0'
    document.getElementById("brly-title").innerHTML = "Hot Pink";
    document.getElementById('brly').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-yellow'){
    document.getElementById('brly-label').style.background = 'yellow'
    document.getElementById("brly-title").innerHTML = "Yellow";
    document.getElementById('brly').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-maroon'){
    document.getElementById('brly-label').style.background = '#cb0039'
    document.getElementById("brly-title").innerHTML = "Maroon";
    document.getElementById('brly').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-red'){
    document.getElementById('brly-label').style.background = 'red'
    document.getElementById("brly-title").innerHTML = "Red";
    document.getElementById('brly').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-grey'){
    document.getElementById('brly-label').style.background = '#969696'
    document.getElementById("brly-title").innerHTML = "Grey";
    document.getElementById('brly').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-navy'){
    document.getElementById('brly-label').style.background = '#152c91'
    document.getElementById("brly-title").innerHTML = "Navy";
    document.getElementById('brly').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-purple'){
    document.getElementById('brly-label').style.background = 'purple'
    document.getElementById("brly-title").innerHTML = "Purple";
    document.getElementById('brly').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-darkGreen'){
    document.getElementById('brly-label').style.background = 'Green'
    document.getElementById("brly-title").innerHTML = "Green";
    document.getElementById('brly').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-darkGrey'){
    document.getElementById('brly-label').style.background = '#494949'
    document.getElementById("brly-title").innerHTML = "Dark Grey";
    document.getElementById('brly').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-blue'){
    document.getElementById('brly-label').style.background = 'blue'
    document.getElementById("brly-title").innerHTML = "Blue";
    document.getElementById('brly').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-lime'){
    document.getElementById('brly-label').style.background = '#09b600'
    document.getElementById("brly-title").innerHTML = "Lime";
    document.getElementById('brly').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-white'){
    document.getElementById('brly-label').style.background = 'White'
    document.getElementById("brly-title").innerHTML = "White";
    document.getElementById('brly').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-black'){
    document.getElementById('brly-label').style.background = 'Black'
    document.getElementById("brly-title").innerHTML = "Black";
    document.getElementById('brly').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-teal'){
    document.getElementById('brly-label').style.background = '#00b692'
    document.getElementById("brly-title").innerHTML = "Teal";
    document.getElementById('brly').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }

  // back left lyrica
  if(color === 'blly-aqua'){
    console.log('here')
    document.getElementById('blly-label').style.background = '#129793'
    document.getElementById("blly-title").innerHTML = "Aqua";
    document.getElementById('blly').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-neon-green'){
    document.getElementById('blly-label').style.background = '#29f04f'
    document.getElementById("blly-title").innerHTML = "Neon Green";
    document.getElementById('blly').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-hot-pink'){
    document.getElementById('blly-label').style.background = '#e929f0'
    document.getElementById("blly-title").innerHTML = "Hot Pink";
    document.getElementById('blly').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-yellow'){
    document.getElementById('blly-label').style.background = 'yellow'
    document.getElementById("blly-title").innerHTML = "Yellow";
    document.getElementById('blly').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-maroon'){
    document.getElementById('blly-label').style.background = '#cb0039'
    document.getElementById("blly-title").innerHTML = "Maroon";
    document.getElementById('blly').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-red'){
    document.getElementById('blly-label').style.background = 'red'
    document.getElementById("blly-title").innerHTML = "Red";
    document.getElementById('blly').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-grey'){
    document.getElementById('blly-label').style.background = '#969696'
    document.getElementById("blly-title").innerHTML = "Grey";
    document.getElementById('blly').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-navy'){
    document.getElementById('blly-label').style.background = '#152c91'
    document.getElementById("blly-title").innerHTML = "Navy";
    document.getElementById('blly').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-purple'){
    document.getElementById('blly-label').style.background = 'purple'
    document.getElementById("blly-title").innerHTML = "Purple";
    document.getElementById('blly').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-darkGreen'){
    document.getElementById('blly-label').style.background = 'Green'
    document.getElementById("blly-title").innerHTML = "Green";
    document.getElementById('blly').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-darkGrey'){
    document.getElementById('blly-label').style.background = '#494949'
    document.getElementById("blly-title").innerHTML = "Dark Grey";
    document.getElementById('blly').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-blue'){
    document.getElementById('blly-label').style.background = 'blue'
    document.getElementById("blly-title").innerHTML = "Blue";
    document.getElementById('blly').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-lime'){
    document.getElementById('blly-label').style.background = '#09b600'
    document.getElementById("blly-title").innerHTML = "Lime";
    document.getElementById('blly').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-white'){
    document.getElementById('blly-label').style.background = 'White'
    document.getElementById("blly-title").innerHTML = "White";
    document.getElementById('blly').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-black'){
    document.getElementById('blly-label').style.background = 'Black'
    document.getElementById("blly-title").innerHTML = "Black";
    document.getElementById('blly').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blly-teal'){
    document.getElementById('blly-label').style.background = '#00b692'
    document.getElementById("blly-title").innerHTML = "Teal";
    document.getElementById('blly').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blly').style.display = 'none'
    dropdownCtrl = true
  }

  // back left lower arm
  if(color === 'blla-aqua'){
    console.log('here')
    document.getElementById('blla-label').style.background = '#129793'
    document.getElementById("blla-title").innerHTML = "Aqua";
    document.getElementById('blla').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-neon-green'){
    document.getElementById('blla-label').style.background = '#29f04f'
    document.getElementById("blla-title").innerHTML = "Neon Green";
    document.getElementById('blla').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-hot-pink'){
    document.getElementById('blla-label').style.background = '#e929f0'
    document.getElementById("blla-title").innerHTML = "Hot Pink";
    document.getElementById('blla').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-yellow'){
    document.getElementById('blla-label').style.background = 'yellow'
    document.getElementById("blla-title").innerHTML = "Yellow";
    document.getElementById('blla').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-maroon'){
    document.getElementById('blla-label').style.background = '#cb0039'
    document.getElementById("blla-title").innerHTML = "Maroon";
    document.getElementById('blla').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-red'){
    document.getElementById('blla-label').style.background = 'red'
    document.getElementById("blla-title").innerHTML = "Red";
    document.getElementById('blla').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-grey'){
    document.getElementById('blla-label').style.background = '#969696'
    document.getElementById("blla-title").innerHTML = "Grey";
    document.getElementById('blla').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-navy'){
    document.getElementById('blla-label').style.background = '#152c91'
    document.getElementById("blla-title").innerHTML = "Navy";
    document.getElementById('blla').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-purple'){
    document.getElementById('blla-label').style.background = 'purple'
    document.getElementById("blla-title").innerHTML = "Purple";
    document.getElementById('blla').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-darkGreen'){
    document.getElementById('blla-label').style.background = 'Green'
    document.getElementById("blla-title").innerHTML = "Green";
    document.getElementById('blla').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-darkGrey'){
    document.getElementById('blla-label').style.background = '#494949'
    document.getElementById("blla-title").innerHTML = "Dark Grey";
    document.getElementById('blla').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-blue'){
    document.getElementById('blla-label').style.background = 'blue'
    document.getElementById("blla-title").innerHTML = "Blue";
    document.getElementById('blla').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-lime'){
    document.getElementById('blla-label').style.background = '#09b600'
    document.getElementById("blla-title").innerHTML = "Lime";
    document.getElementById('blla').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-white'){
    document.getElementById('blla-label').style.background = 'White'
    document.getElementById("blla-title").innerHTML = "White";
    document.getElementById('blla').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-black'){
    document.getElementById('blla-label').style.background = 'Black'
    document.getElementById("blla-title").innerHTML = "Black";
    document.getElementById('blla').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blla-teal'){
    document.getElementById('blla-label').style.background = '#00b692'
    document.getElementById("blla-title").innerHTML = "Teal";
    document.getElementById('blla').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-aqua'){
    console.log('here')
    document.getElementById('bleb-label').style.background = '#129793'
    document.getElementById("bleb-title").innerHTML = "Aqua";
    document.getElementById('bleb').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-neon-green'){
    document.getElementById('bleb-label').style.background = '#29f04f'
    document.getElementById("bleb-title").innerHTML = "Neon Green";
    document.getElementById('bleb').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-hot-pink'){
    document.getElementById('bleb-label').style.background = '#e929f0'
    document.getElementById("bleb-title").innerHTML = "Hot Pink";
    document.getElementById('bleb').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-yellow'){
    document.getElementById('bleb-label').style.background = 'yellow'
    document.getElementById("bleb-title").innerHTML = "Yellow";
    document.getElementById('bleb').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-maroon'){
    document.getElementById('bleb-label').style.background = '#cb0039'
    document.getElementById("bleb-title").innerHTML = "Maroon";
    document.getElementById('bleb').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-red'){
    document.getElementById('bleb-label').style.background = 'red'
    document.getElementById("bleb-title").innerHTML = "Red";
    document.getElementById('bleb').style.fill = 'red'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-grey'){
    document.getElementById('bleb-label').style.background = '#969696'
    document.getElementById("bleb-title").innerHTML = "Grey";
    document.getElementById('bleb').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-navy'){
    document.getElementById('bleb-label').style.background = '#152c91'
    document.getElementById("bleb-title").innerHTML = "Navy";
    document.getElementById('bleb').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-purple'){
    document.getElementById('bleb-label').style.background = 'purple'
    document.getElementById("bleb-title").innerHTML = "Purple";
    document.getElementById('bleb').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-darkGreen'){
    document.getElementById('bleb-label').style.background = 'Green'
    document.getElementById("bleb-title").innerHTML = "Green";
    document.getElementById('bleb').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-darkGrey'){
    document.getElementById('bleb-label').style.background = '#494949'
    document.getElementById("bleb-title").innerHTML = "Dark Grey";
    document.getElementById('bleb').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-blue'){
    document.getElementById('bleb-label').style.background = 'blue'
    document.getElementById("bleb-title").innerHTML = "Blue";
    document.getElementById('bleb').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-lime'){
    document.getElementById('bleb-label').style.background = '#09b600'
    document.getElementById("bleb-title").innerHTML = "Lime";
    document.getElementById('bleb').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-white'){
    document.getElementById('bleb-label').style.background = 'White'
    document.getElementById("bleb-title").innerHTML = "White";
    document.getElementById('bleb').style.fill = 'White'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-black'){
    document.getElementById('bleb-label').style.background = 'Black'
    document.getElementById("bleb-title").innerHTML = "Black";
    document.getElementById('bleb').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bleb-teal'){
    document.getElementById('bleb-label').style.background = '#00b692'
    document.getElementById("bleb-title").innerHTML = "Teal";
    document.getElementById('bleb').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-bleb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-aqua'){
    console.log('here')
    document.getElementById('breb-label').style.background = '#129793'
    document.getElementById("breb-title").innerHTML = "Aqua";
    document.getElementById('breb').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-neon-green'){
    document.getElementById('breb-label').style.background = '#29f04f'
    document.getElementById("breb-title").innerHTML = "Neon Green";
    document.getElementById('breb').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-hot-pink'){
    document.getElementById('breb-label').style.background = '#e929f0'
    document.getElementById("breb-title").innerHTML = "Hot Pink";
    document.getElementById('breb').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-yellow'){
    document.getElementById('breb-label').style.background = 'yellow'
    document.getElementById("breb-title").innerHTML = "Yellow";
    document.getElementById('breb').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-maroon'){
    document.getElementById('breb-label').style.background = '#cb0039'
    document.getElementById("breb-title").innerHTML = "Maroon";
    document.getElementById('breb').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-red'){
    document.getElementById('breb-label').style.background = 'red'
    document.getElementById("breb-title").innerHTML = "Red";
    document.getElementById('breb').style.fill = 'red'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-grey'){
    document.getElementById('breb-label').style.background = '#969696'
    document.getElementById("breb-title").innerHTML = "Grey";
    document.getElementById('breb').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-navy'){
    document.getElementById('breb-label').style.background = '#152c91'
    document.getElementById("breb-title").innerHTML = "Navy";
    document.getElementById('breb').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-purple'){
    document.getElementById('breb-label').style.background = 'purple'
    document.getElementById("breb-title").innerHTML = "Purple";
    document.getElementById('breb').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-darkGreen'){
    document.getElementById('breb-label').style.background = 'Green'
    document.getElementById("breb-title").innerHTML = "Green";
    document.getElementById('breb').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-darkGrey'){
    document.getElementById('breb-label').style.background = '#494949'
    document.getElementById("breb-title").innerHTML = "Dark Grey";
    document.getElementById('breb').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-blue'){
    document.getElementById('breb-label').style.background = 'blue'
    document.getElementById("breb-title").innerHTML = "Blue";
    document.getElementById('breb').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-lime'){
    document.getElementById('breb-label').style.background = '#09b600'
    document.getElementById("breb-title").innerHTML = "Lime";
    document.getElementById('breb').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-white'){
    document.getElementById('breb-label').style.background = 'White'
    document.getElementById("breb-title").innerHTML = "White";
    document.getElementById('breb').style.fill = 'White'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-black'){
    document.getElementById('breb-label').style.background = 'Black'
    document.getElementById("breb-title").innerHTML = "Black";
    document.getElementById('breb').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'breb-teal'){
    document.getElementById('breb-label').style.background = '#00b692'
    document.getElementById("breb-title").innerHTML = "Teal";
    document.getElementById('breb').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-breb').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-aqua'){
    console.log('here')
    document.getElementById('brla-label').style.background = '#129793'
    document.getElementById("brla-title").innerHTML = "Aqua";
    document.getElementById('brla').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-neon-green'){
    document.getElementById('brla-label').style.background = '#29f04f'
    document.getElementById("brla-title").innerHTML = "Neon Green";
    document.getElementById('brla').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-hot-pink'){
    document.getElementById('brla-label').style.background = '#e929f0'
    document.getElementById("brla-title").innerHTML = "Hot Pink";
    document.getElementById('brla').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-yellow'){
    document.getElementById('brla-label').style.background = 'yellow'
    document.getElementById("brla-title").innerHTML = "Yellow";
    document.getElementById('brla').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-maroon'){
    document.getElementById('brla-label').style.background = '#cb0039'
    document.getElementById("brla-title").innerHTML = "Maroon";
    document.getElementById('brla').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-red'){
    document.getElementById('brla-label').style.background = 'red'
    document.getElementById("brla-title").innerHTML = "Red";
    document.getElementById('brla').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-grey'){
    document.getElementById('brla-label').style.background = '#969696'
    document.getElementById("brla-title").innerHTML = "Grey";
    document.getElementById('brla').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-navy'){
    document.getElementById('brla-label').style.background = '#152c91'
    document.getElementById("brla-title").innerHTML = "Navy";
    document.getElementById('brla').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-purple'){
    document.getElementById('brla-label').style.background = 'purple'
    document.getElementById("brla-title").innerHTML = "Purple";
    document.getElementById('brla').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-darkGreen'){
    document.getElementById('brla-label').style.background = 'Green'
    document.getElementById("brla-title").innerHTML = "Green";
    document.getElementById('brla').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-darkGrey'){
    document.getElementById('brla-label').style.background = '#494949'
    document.getElementById("brla-title").innerHTML = "Dark Grey";
    document.getElementById('brla').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-blue'){
    document.getElementById('brla-label').style.background = 'blue'
    document.getElementById("brla-title").innerHTML = "Blue";
    document.getElementById('brla').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-lime'){
    document.getElementById('brla-label').style.background = '#09b600'
    document.getElementById("brla-title").innerHTML = "Lime";
    document.getElementById('brla').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-white'){
    document.getElementById('brla-label').style.background = 'White'
    document.getElementById("brla-title").innerHTML = "White";
    document.getElementById('brla').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-black'){
    document.getElementById('brla-label').style.background = 'Black'
    document.getElementById("brla-title").innerHTML = "Black";
    document.getElementById('brla').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brla-teal'){
    document.getElementById('brla-label').style.background = '#00b692'
    document.getElementById("brla-title").innerHTML = "Teal";
    document.getElementById('brla').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brla').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-aqua'){
    console.log('here')
    document.getElementById('ble-label').style.background = '#129793'
    document.getElementById("ble-title").innerHTML = "Aqua";
    document.getElementById('ble').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-neon-green'){
    document.getElementById('ble-label').style.background = '#29f04f'
    document.getElementById("ble-title").innerHTML = "Neon Green";
    document.getElementById('ble').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-hot-pink'){
    document.getElementById('ble-label').style.background = '#e929f0'
    document.getElementById("ble-title").innerHTML = "Hot Pink";
    document.getElementById('ble').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-yellow'){
    document.getElementById('ble-label').style.background = 'yellow'
    document.getElementById("ble-title").innerHTML = "Yellow";
    document.getElementById('ble').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-maroon'){
    document.getElementById('ble-label').style.background = '#cb0039'
    document.getElementById("ble-title").innerHTML = "Maroon";
    document.getElementById('ble').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-red'){
    document.getElementById('ble-label').style.background = 'red'
    document.getElementById("ble-title").innerHTML = "Red";
    document.getElementById('ble').style.fill = 'red'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-grey'){
    document.getElementById('ble-label').style.background = '#969696'
    document.getElementById("ble-title").innerHTML = "Grey";
    document.getElementById('ble').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-navy'){
    document.getElementById('ble-label').style.background = '#152c91'
    document.getElementById("ble-title").innerHTML = "Navy";
    document.getElementById('ble').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-purple'){
    document.getElementById('ble-label').style.background = 'purple'
    document.getElementById("ble-title").innerHTML = "Purple";
    document.getElementById('ble').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-darkGreen'){
    document.getElementById('ble-label').style.background = 'Green'
    document.getElementById("ble-title").innerHTML = "Green";
    document.getElementById('ble').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-darkGrey'){
    document.getElementById('ble-label').style.background = '#494949'
    document.getElementById("ble-title").innerHTML = "Dark Grey";
    document.getElementById('ble').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-blue'){
    document.getElementById('ble-label').style.background = 'blue'
    document.getElementById("ble-title").innerHTML = "Blue";
    document.getElementById('ble').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-lime'){
    document.getElementById('ble-label').style.background = '#09b600'
    document.getElementById("ble-title").innerHTML = "Lime";
    document.getElementById('ble').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-white'){
    document.getElementById('ble-label').style.background = 'White'
    document.getElementById("ble-title").innerHTML = "White";
    document.getElementById('ble').style.fill = 'White'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-black'){
    document.getElementById('ble-label').style.background = 'Black'
    document.getElementById("ble-title").innerHTML = "Black";
    document.getElementById('ble').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'ble-teal'){
    document.getElementById('ble-label').style.background = '#00b692'
    document.getElementById("ble-title").innerHTML = "Teal";
    document.getElementById('ble').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-ble').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-aqua'){
    console.log('here')
    document.getElementById('bre-label').style.background = '#129793'
    document.getElementById("bre-title").innerHTML = "Aqua";
    document.getElementById('bre').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-neon-green'){
    document.getElementById('bre-label').style.background = '#29f04f'
    document.getElementById("bre-title").innerHTML = "Neon Green";
    document.getElementById('bre').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-hot-pink'){
    document.getElementById('bre-label').style.background = '#e929f0'
    document.getElementById("bre-title").innerHTML = "Hot Pink";
    document.getElementById('bre').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-yellow'){
    document.getElementById('bre-label').style.background = 'yellow'
    document.getElementById("bre-title").innerHTML = "Yellow";
    document.getElementById('bre').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-maroon'){
    document.getElementById('bre-label').style.background = '#cb0039'
    document.getElementById("bre-title").innerHTML = "Maroon";
    document.getElementById('bre').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-red'){
    document.getElementById('bre-label').style.background = 'red'
    document.getElementById("bre-title").innerHTML = "Red";
    document.getElementById('bre').style.fill = 'red'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-grey'){
    document.getElementById('bre-label').style.background = '#969696'
    document.getElementById("bre-title").innerHTML = "Grey";
    document.getElementById('bre').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-navy'){
    document.getElementById('bre-label').style.background = '#152c91'
    document.getElementById("bre-title").innerHTML = "Navy";
    document.getElementById('bre').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-purple'){
    document.getElementById('bre-label').style.background = 'purple'
    document.getElementById("bre-title").innerHTML = "Purple";
    document.getElementById('bre').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-darkGreen'){
    document.getElementById('bre-label').style.background = 'Green'
    document.getElementById("bre-title").innerHTML = "Green";
    document.getElementById('bre').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-darkGrey'){
    document.getElementById('bre-label').style.background = '#494949'
    document.getElementById("bre-title").innerHTML = "Dark Grey";
    document.getElementById('bre').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-blue'){
    document.getElementById('bre-label').style.background = 'blue'
    document.getElementById("bre-title").innerHTML = "Blue";
    document.getElementById('bre').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-lime'){
    document.getElementById('bre-label').style.background = '#09b600'
    document.getElementById("bre-title").innerHTML = "Lime";
    document.getElementById('bre').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-white'){
    document.getElementById('bre-label').style.background = 'White'
    document.getElementById("bre-title").innerHTML = "White";
    document.getElementById('bre').style.fill = 'White'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-black'){
    document.getElementById('bre-label').style.background = 'Black'
    document.getElementById("bre-title").innerHTML = "Black";
    document.getElementById('bre').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bre-teal'){
    document.getElementById('bre-label').style.background = '#00b692'
    document.getElementById("bre-title").innerHTML = "Teal";
    document.getElementById('bre').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-bre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-aqua'){
    console.log('here')
    document.getElementById('blua-label').style.background = '#129793'
    document.getElementById("blua-title").innerHTML = "Aqua";
    document.getElementById('blua').style.fill = '#129793'
    document.getElementById('blua').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-neon-green'){
    document.getElementById('blua-label').style.background = '#29f04f'
    document.getElementById("blua-title").innerHTML = "Neon Green";
    document.getElementById('blua').style.fill = '#29f04f'
    document.getElementById('blua').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-hot-pink'){
    document.getElementById('blua-label').style.background = '#e929f0'
    document.getElementById("blua-title").innerHTML = "Hot Pink";
    document.getElementById('blua').style.fill = '#e929f0'
    document.getElementById('blua').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-yellow'){
    document.getElementById('blua-label').style.background = 'yellow'
    document.getElementById("blua-title").innerHTML = "Yellow";
    document.getElementById('blua').style.fill = 'yellow'
    document.getElementById('blua').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-maroon'){
    document.getElementById('blua-label').style.background = '#cb0039'
    document.getElementById("blua-title").innerHTML = "Maroon";
    document.getElementById('blua').style.fill = '#cb0039'
    document.getElementById('blua').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-red'){
    document.getElementById('blua-label').style.background = 'red'
    document.getElementById("blua-title").innerHTML = "Red";
    document.getElementById('blua').style.fill = 'red'
    document.getElementById('blua').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-grey'){
    document.getElementById('blua-label').style.background = '#969696'
    document.getElementById("blua-title").innerHTML = "Grey";
    document.getElementById('blua').style.fill = '#969696'
    document.getElementById('blua').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-navy'){
    document.getElementById('blua-label').style.background = '#152c91'
    document.getElementById("blua-title").innerHTML = "Navy";
    document.getElementById('blua').style.fill = '#152c91'
    document.getElementById('blua').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-purple'){
    document.getElementById('blua-label').style.background = 'purple'
    document.getElementById("blua-title").innerHTML = "Purple";
    document.getElementById('blua').style.fill = 'purple'
    document.getElementById('blua').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-darkGreen'){
    document.getElementById('blua-label').style.background = 'Green'
    document.getElementById("blua-title").innerHTML = "Green";
    document.getElementById('blua').style.fill = 'Green'
    document.getElementById('blua').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-darkGrey'){
    document.getElementById('blua-label').style.background = '#494949'
    document.getElementById("blua-title").innerHTML = "Dark Grey";
    document.getElementById('blua').style.fill = '#494949'
    document.getElementById('blua').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-blue'){
    document.getElementById('blua-label').style.background = 'blue'
    document.getElementById("blua-title").innerHTML = "Blue";
    document.getElementById('blua').style.fill = 'blue'
    document.getElementById('blua').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-lime'){
    document.getElementById('blua-label').style.background = '#09b600'
    document.getElementById("blua-title").innerHTML = "Lime";
    document.getElementById('blua').style.fill = '#09b600'
    document.getElementById('blua').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-white'){
    document.getElementById('blua-label').style.background = 'White'
    document.getElementById("blua-title").innerHTML = "White";
    document.getElementById('blua').style.fill = 'White'
    document.getElementById('blua').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-black'){
    document.getElementById('blua-label').style.background = 'Black'
    document.getElementById("blua-title").innerHTML = "Black";
    document.getElementById('blua').style.fill = 'Black'
    document.getElementById('blua').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blua-teal'){
    document.getElementById('blua-label').style.background = '#00b692'
    document.getElementById("blua-title").innerHTML = "Teal";
    document.getElementById('blua').style.fill = '#00b692'
    document.getElementById('blua').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-aqua'){
    console.log('here')
    document.getElementById('brua-label').style.background = '#129793'
    document.getElementById("brua-title").innerHTML = "Aqua";
    document.getElementById('brua').style.fill = '#129793'
    document.getElementById('brua').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-neon-green'){
    document.getElementById('brua-label').style.background = '#29f04f'
    document.getElementById("brua-title").innerHTML = "Neon Green";
    document.getElementById('brua').style.fill = '#29f04f'
    document.getElementById('brua').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-hot-pink'){
    document.getElementById('brua-label').style.background = '#e929f0'
    document.getElementById("brua-title").innerHTML = "Hot Pink";
    document.getElementById('brua').style.fill = '#e929f0'
    document.getElementById('brua').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-yellow'){
    document.getElementById('brua-label').style.background = 'yellow'
    document.getElementById("brua-title").innerHTML = "Yellow";
    document.getElementById('brua').style.fill = 'yellow'
    document.getElementById('brua').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-maroon'){
    document.getElementById('brua-label').style.background = '#cb0039'
    document.getElementById("brua-title").innerHTML = "Maroon";
    document.getElementById('brua').style.fill = '#cb0039'
    document.getElementById('brua').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-red'){
    document.getElementById('brua-label').style.background = 'red'
    document.getElementById("brua-title").innerHTML = "Red";
    document.getElementById('brua').style.fill = 'red'
    document.getElementById('brua').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-grey'){
    document.getElementById('brua-label').style.background = '#969696'
    document.getElementById("brua-title").innerHTML = "Grey";
    document.getElementById('brua').style.fill = '#969696'
    document.getElementById('brua').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-navy'){
    document.getElementById('brua-label').style.background = '#152c91'
    document.getElementById("brua-title").innerHTML = "Navy";
    document.getElementById('brua').style.fill = '#152c91'
    document.getElementById('brua').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-purple'){
    document.getElementById('brua-label').style.background = 'purple'
    document.getElementById("brua-title").innerHTML = "Purple";
    document.getElementById('brua').style.fill = 'purple'
    document.getElementById('brua').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-darkGreen'){
    document.getElementById('brua-label').style.background = 'Green'
    document.getElementById("brua-title").innerHTML = "Green";
    document.getElementById('brua').style.fill = 'Green'
    document.getElementById('brua').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-darkGrey'){
    document.getElementById('brua-label').style.background = '#494949'
    document.getElementById("brua-title").innerHTML = "Dark Grey";
    document.getElementById('brua').style.fill = '#494949'
    document.getElementById('brua').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-blue'){
    document.getElementById('brua-label').style.background = 'blue'
    document.getElementById("brua-title").innerHTML = "Blue";
    document.getElementById('brua').style.fill = 'blue'
    document.getElementById('brua').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-lime'){
    document.getElementById('brua-label').style.background = '#09b600'
    document.getElementById("brua-title").innerHTML = "Lime";
    document.getElementById('brua').style.fill = '#09b600'
    document.getElementById('brua').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-white'){
    document.getElementById('brua-label').style.background = 'White'
    document.getElementById("brua-title").innerHTML = "White";
    document.getElementById('brua').style.fill = 'White'
    document.getElementById('brua').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-black'){
    document.getElementById('brua-label').style.background = 'Black'
    document.getElementById("brua-title").innerHTML = "Black";
    document.getElementById('brua').style.fill = 'Black'
    document.getElementById('brua').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-teal'){
    document.getElementById('brua-label').style.background = '#00b692'
    document.getElementById("brua-title").innerHTML = "Teal";
    document.getElementById('brua').style.fill = '#00b692'
    document.getElementById('brua').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-aqua'){
    console.log('here')
    document.getElementById('blsh-label').style.background = '#129793'
    document.getElementById("blsh-title").innerHTML = "Aqua";
    document.getElementById('blsh').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-neon-green'){
    document.getElementById('blsh-label').style.background = '#29f04f'
    document.getElementById("blsh-title").innerHTML = "Neon Green";
    document.getElementById('blsh').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-hot-pink'){
    document.getElementById('blsh-label').style.background = '#e929f0'
    document.getElementById("blsh-title").innerHTML = "Hot Pink";
    document.getElementById('blsh').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-yellow'){
    document.getElementById('blsh-label').style.background = 'yellow'
    document.getElementById("blsh-title").innerHTML = "Yellow";
    document.getElementById('blsh').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-maroon'){
    document.getElementById('blsh-label').style.background = '#cb0039'
    document.getElementById("blsh-title").innerHTML = "Maroon";
    document.getElementById('blsh').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-red'){
    document.getElementById('blsh-label').style.background = 'red'
    document.getElementById("blsh-title").innerHTML = "Red";
    document.getElementById('blsh').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-grey'){
    document.getElementById('blsh-label').style.background = '#969696'
    document.getElementById("blsh-title").innerHTML = "Grey";
    document.getElementById('blsh').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-navy'){
    document.getElementById('blsh-label').style.background = '#152c91'
    document.getElementById("blsh-title").innerHTML = "Navy";
    document.getElementById('blsh').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-purple'){
    document.getElementById('blsh-label').style.background = 'purple'
    document.getElementById("blsh-title").innerHTML = "Purple";
    document.getElementById('blsh').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-darkGreen'){
    document.getElementById('blsh-label').style.background = 'Green'
    document.getElementById("blsh-title").innerHTML = "Green";
    document.getElementById('blsh').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-darkGrey'){
    document.getElementById('blsh-label').style.background = '#494949'
    document.getElementById("blsh-title").innerHTML = "Dark Grey";
    document.getElementById('blsh').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-blue'){
    document.getElementById('blsh-label').style.background = 'blue'
    document.getElementById("blsh-title").innerHTML = "Blue";
    document.getElementById('blsh').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-lime'){
    document.getElementById('blsh-label').style.background = '#09b600'
    document.getElementById("blsh-title").innerHTML = "Lime";
    document.getElementById('blsh').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-white'){
    document.getElementById('blsh-label').style.background = 'White'
    document.getElementById("blsh-title").innerHTML = "White";
    document.getElementById('blsh').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-black'){
    document.getElementById('blsh-label').style.background = 'Black'
    document.getElementById("blsh-title").innerHTML = "Black";
    document.getElementById('blsh').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blsh-teal'){
    document.getElementById('blsh-label').style.background = '#00b692'
    document.getElementById("blsh-title").innerHTML = "Teal";
    document.getElementById('blsh').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-aqua'){
    console.log('here')
    document.getElementById('brsh-label').style.background = '#129793'
    document.getElementById("brsh-title").innerHTML = "Aqua";
    document.getElementById('brsh').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-neon-green'){
    document.getElementById('brsh-label').style.background = '#29f04f'
    document.getElementById("brsh-title").innerHTML = "Neon Green";
    document.getElementById('brsh').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-hot-pink'){
    document.getElementById('brsh-label').style.background = '#e929f0'
    document.getElementById("brsh-title").innerHTML = "Hot Pink";
    document.getElementById('brsh').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-yellow'){
    document.getElementById('brsh-label').style.background = 'yellow'
    document.getElementById("brsh-title").innerHTMLx = "Yellow";
    document.getElementById('brsh').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-maroon'){
    document.getElementById('brsh-label').style.background = '#cb0039'
    document.getElementById("brsh-title").innerHTML = "Maroon";
    document.getElementById('brsh').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-red'){
    document.getElementById('brsh-label').style.background = 'red'
    document.getElementById("brsh-title").innerHTML = "Red";
    document.getElementById('brsh').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-grey'){
    document.getElementById('brsh-label').style.background = '#969696'
    document.getElementById("brsh-title").innerHTML = "Grey";
    document.getElementById('brsh').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-navy'){
    document.getElementById('brsh-label').style.background = '#152c91'
    document.getElementById("brsh-title").innerHTML = "Navy";
    document.getElementById('brsh').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-purple'){
    document.getElementById('brsh-label').style.background = 'purple'
    document.getElementById("brsh-title").innerHTML = "Purple";
    document.getElementById('brsh').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-darkGreen'){
    document.getElementById('brsh-label').style.background = 'Green'
    document.getElementById("brsh-title").innerHTML = "Green";
    document.getElementById('brsh').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-darkGrey'){
    document.getElementById('brsh-label').style.background = '#494949'
    document.getElementById("brsh-title").innerHTML = "Dark Grey";
    document.getElementById('brsh').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-blue'){
    document.getElementById('brsh-label').style.background = 'blue'
    document.getElementById("brsh-title").innerHTML = "Blue";
    document.getElementById('brsh').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-lime'){
    document.getElementById('brsh-label').style.background = '#09b600'
    document.getElementById("brsh-title").innerHTML = "Lime";
    document.getElementById('brsh').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-white'){
    document.getElementById('brsh-label').style.background = 'White'
    document.getElementById("brsh-title").innerHTML = "White";
    document.getElementById('brsh').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-black'){
    document.getElementById('brsh-label').style.background = 'Black'
    document.getElementById("brsh-title").innerHTML = "Black";
    document.getElementById('brsh').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brsh-teal'){
    document.getElementById('brsh-label').style.background = '#00b692'
    document.getElementById("brsh-title").innerHTML = "Teal";
    document.getElementById('brsh').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brsh').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-aqua'){
    console.log('here')
    document.getElementById('brua-label').style.background = '#129793'
    document.getElementById("brua-title").innerHTML = "Aqua";
    document.getElementById('brua').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-neon-green'){
    document.getElementById('brua-label').style.background = '#29f04f'
    document.getElementById("brua-title").innerHTML = "Neon Green";
    document.getElementById('brua').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-hot-pink'){
    document.getElementById('brua-label').style.background = '#e929f0'
    document.getElementById("brua-title").innerHTML = "Hot Pink";
    document.getElementById('brua').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-yellow'){
    document.getElementById('brua-label').style.background = 'yellow'
    document.getElementById("brua-title").innerHTMLx = "Yellow";
    document.getElementById('brua').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-maroon'){
    document.getElementById('brua-label').style.background = '#cb0039'
    document.getElementById("brua-title").innerHTML = "Maroon";
    document.getElementById('brua').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-red'){
    document.getElementById('brua-label').style.background = 'red'
    document.getElementById("brua-title").innerHTML = "Red";
    document.getElementById('brua').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-grey'){
    document.getElementById('brua-label').style.background = '#969696'
    document.getElementById("brua-title").innerHTML = "Grey";
    document.getElementById('brua').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-navy'){
    document.getElementById('brua-label').style.background = '#152c91'
    document.getElementById("brua-title").innerHTML = "Navy";
    document.getElementById('brua').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-purple'){
    document.getElementById('brua-label').style.background = 'purple'
    document.getElementById("brua-title").innerHTML = "Purple";
    document.getElementById('brua').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-darkGreen'){
    document.getElementById('brua-label').style.background = 'Green'
    document.getElementById("brua-title").innerHTML = "Green";
    document.getElementById('brua').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-darkGrey'){
    document.getElementById('brua-label').style.background = '#494949'
    document.getElementById("brua-title").innerHTML = "Dark Grey";
    document.getElementById('brua').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-blue'){
    document.getElementById('brua-label').style.background = 'blue'
    document.getElementById("brua-title").innerHTML = "Blue";
    document.getElementById('brua').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-lime'){
    document.getElementById('brua-label').style.background = '#09b600'
    document.getElementById("brua-title").innerHTML = "Lime";
    document.getElementById('brua').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-white'){
    document.getElementById('brua-label').style.background = 'White'
    document.getElementById("brua-title").innerHTML = "White";
    document.getElementById('brua').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-black'){
    document.getElementById('brua-label').style.background = 'Black'
    document.getElementById("brua-title").innerHTML = "Black";
    document.getElementById('brua').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brua-teal'){
    document.getElementById('brua-label').style.background = '#00b692'
    document.getElementById("brua-title").innerHTML = "Teal";
    document.getElementById('brua').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brua').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-aqua'){
    console.log('here')
    document.getElementById('brcr-label').style.background = '#129793'
    document.getElementById("brcr-title").innerHTML = "Aqua";
    document.getElementById('brcr').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-neon-green'){
    document.getElementById('brcr-label').style.background = '#29f04f'
    document.getElementById("brcr-title").innerHTML = "Neon Green";
    document.getElementById('brcr').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-hot-pink'){
    document.getElementById('brcr-label').style.background = '#e929f0'
    document.getElementById("brcr-title").innerHTML = "Hot Pink";
    document.getElementById('brcr').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-yellow'){
    document.getElementById('brcr-label').style.background = 'yellow'
    document.getElementById("brcr-title").innerHTMLx = "Yellow";
    document.getElementById('brcr').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-maroon'){
    document.getElementById('brcr-label').style.background = '#cb0039'
    document.getElementById("brcr-title").innerHTML = "Maroon";
    document.getElementById('brcr').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-red'){
    document.getElementById('brcr-label').style.background = 'red'
    document.getElementById("brcr-title").innerHTML = "Red";
    document.getElementById('brcr').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-grey'){
    document.getElementById('brcr-label').style.background = '#969696'
    document.getElementById("brcr-title").innerHTML = "Grey";
    document.getElementById('brcr').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-navy'){
    document.getElementById('brcr-label').style.background = '#152c91'
    document.getElementById("brcr-title").innerHTML = "Navy";
    document.getElementById('brcr').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-purple'){
    document.getElementById('brcr-label').style.background = 'purple'
    document.getElementById("brcr-title").innerHTML = "Purple";
    document.getElementById('brcr').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-darkGreen'){
    document.getElementById('brcr-label').style.background = 'Green'
    document.getElementById("brcr-title").innerHTML = "Green";
    document.getElementById('brcr').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-darkGrey'){
    document.getElementById('brcr-label').style.background = '#494949'
    document.getElementById("brcr-title").innerHTML = "Dark Grey";
    document.getElementById('brcr').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-blue'){
    document.getElementById('brcr-label').style.background = 'blue'
    document.getElementById("brcr-title").innerHTML = "Blue";
    document.getElementById('brcr').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-lime'){
    document.getElementById('brcr-label').style.background = '#09b600'
    document.getElementById("brcr-title").innerHTML = "Lime";
    document.getElementById('brcr').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-white'){
    document.getElementById('brcr-label').style.background = 'White'
    document.getElementById("brcr-title").innerHTML = "White";
    document.getElementById('brcr').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-black'){
    document.getElementById('brcr-label').style.background = 'Black'
    document.getElementById("brcr-title").innerHTML = "Black";
    document.getElementById('brcr').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brcr-teal'){
    document.getElementById('brcr-label').style.background = '#00b692'
    document.getElementById("brcr-title").innerHTML = "Teal";
    document.getElementById('brcr').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-aqua'){
    console.log('here')
    document.getElementById('blul-label').style.background = '#129793'
    document.getElementById("blul-title").innerHTML = "Aqua";
    document.getElementById('blul').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-neon-green'){
    document.getElementById('blul-label').style.background = '#29f04f'
    document.getElementById("blul-title").innerHTML = "Neon Green";
    document.getElementById('blul').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-hot-pink'){
    document.getElementById('blul-label').style.background = '#e929f0'
    document.getElementById("blul-title").innerHTML = "Hot Pink";
    document.getElementById('blul').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-yellow'){
    document.getElementById('blul-label').style.background = 'yellow'
    document.getElementById("blul-title").innerHTMLx = "Yellow";
    document.getElementById('blul').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-maroon'){
    document.getElementById('blul-label').style.background = '#cb0039'
    document.getElementById("blul-title").innerHTML = "Maroon";
    document.getElementById('blul').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-red'){
    document.getElementById('blul-label').style.background = 'red'
    document.getElementById("blul-title").innerHTML = "Red";
    document.getElementById('blul').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-grey'){
    document.getElementById('blul-label').style.background = '#969696'
    document.getElementById("blul-title").innerHTML = "Grey";
    document.getElementById('blul').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-navy'){
    document.getElementById('blul-label').style.background = '#152c91'
    document.getElementById("blul-title").innerHTML = "Navy";
    document.getElementById('blul').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-purple'){
    document.getElementById('blul-label').style.background = 'purple'
    document.getElementById("blul-title").innerHTML = "Purple";
    document.getElementById('blul').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-darkGreen'){
    document.getElementById('blul-label').style.background = 'Green'
    document.getElementById("blul-title").innerHTML = "Green";
    document.getElementById('blul').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-darkGrey'){
    document.getElementById('blul-label').style.background = '#494949'
    document.getElementById("blul-title").innerHTML = "Dark Grey";
    document.getElementById('blul').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-blue'){
    document.getElementById('blul-label').style.background = 'blue'
    document.getElementById("blul-title").innerHTML = "Blue";
    document.getElementById('blul').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-lime'){
    document.getElementById('blul-label').style.background = '#09b600'
    document.getElementById("blul-title").innerHTML = "Lime";
    document.getElementById('blul').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-white'){
    document.getElementById('blul-label').style.background = 'White'
    document.getElementById("blul-title").innerHTML = "White";
    document.getElementById('blul').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-black'){
    document.getElementById('blul-label').style.background = 'Black'
    document.getElementById("blul-title").innerHTML = "Black";
    document.getElementById('blul').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-teal'){
    document.getElementById('blul-label').style.background = '#00b692'
    document.getElementById("blul-title").innerHTML = "Teal";
    document.getElementById('blul').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-aqua'){
    console.log('here')
    document.getElementById('brul-label').style.background = '#129793'
    document.getElementById("brul-title").innerHTML = "Aqua";
    document.getElementById('brul').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-neon-green'){
    document.getElementById('brul-label').style.background = '#29f04f'
    document.getElementById("brul-title").innerHTML = "Neon Green";
    document.getElementById('brul').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-hot-pink'){
    document.getElementById('brul-label').style.background = '#e929f0'
    document.getElementById("brul-title").innerHTML = "Hot Pink";
    document.getElementById('brul').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-yellow'){
    document.getElementById('brul-label').style.background = 'yellow'
    document.getElementById("brul-title").innerHTMLx = "Yellow";
    document.getElementById('brul').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-maroon'){
    document.getElementById('brul-label').style.background = '#cb0039'
    document.getElementById("brul-title").innerHTML = "Maroon";
    document.getElementById('brul').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-red'){
    document.getElementById('brul-label').style.background = 'red'
    document.getElementById("brul-title").innerHTML = "Red";
    document.getElementById('brul').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-grey'){
    document.getElementById('brul-label').style.background = '#969696'
    document.getElementById("brul-title").innerHTML = "Grey";
    document.getElementById('brul').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-navy'){
    document.getElementById('brul-label').style.background = '#152c91'
    document.getElementById("brul-title").innerHTML = "Navy";
    document.getElementById('brul').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-purple'){
    document.getElementById('brul-label').style.background = 'purple'
    document.getElementById("brul-title").innerHTML = "Purple";
    document.getElementById('brul').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-darkGreen'){
    document.getElementById('brul-label').style.background = 'Green'
    document.getElementById("brul-title").innerHTML = "Green";
    document.getElementById('brul').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-darkGrey'){
    document.getElementById('brul-label').style.background = '#494949'
    document.getElementById("brul-title").innerHTML = "Dark Grey";
    document.getElementById('brul').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-blue'){
    document.getElementById('brul-label').style.background = 'blue'
    document.getElementById("brul-title").innerHTML = "Blue";
    document.getElementById('brul').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-lime'){
    document.getElementById('brul-label').style.background = '#09b600'
    document.getElementById("brul-title").innerHTML = "Lime";
    document.getElementById('brul').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-white'){
    document.getElementById('brul-label').style.background = 'White'
    document.getElementById("brul-title").innerHTML = "White";
    document.getElementById('brul').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-black'){
    document.getElementById('brul-label').style.background = 'Black'
    document.getElementById("brul-title").innerHTML = "Black";
    document.getElementById('brul').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-teal'){
    document.getElementById('brul-label').style.background = '#00b692'
    document.getElementById("brul-title").innerHTML = "Teal";
    document.getElementById('brul').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-aqua'){
    console.log('here')
    document.getElementById('blml-label').style.background = '#129793'
    document.getElementById("blml-title").innerHTML = "Aqua";
    document.getElementById('blml').style.fill = '#129793'
    document.getElementById('bins').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-neon-green'){
    document.getElementById('blml-label').style.background = '#29f04f'
    document.getElementById("blml-title").innerHTML = "Neon Green";
    document.getElementById('blml').style.fill = '#29f04f'
    document.getElementById('bins').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-hot-pink'){
    document.getElementById('blml-label').style.background = '#e929f0'
    document.getElementById("blml-title").innerHTML = "Hot Pink";
    document.getElementById('blml').style.fill = '#e929f0'
    document.getElementById('bins').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-yellow'){
    document.getElementById('blml-label').style.background = 'yellow'
    document.getElementById("blml-title").innerHTMLx = "Yellow";
    document.getElementById('blml').style.fill = 'yellow'
    document.getElementById('bins').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-maroon'){
    document.getElementById('blml-label').style.background = '#cb0039'
    document.getElementById("blml-title").innerHTML = "Maroon";
    document.getElementById('blml').style.fill = '#cb0039'
    document.getElementById('bins').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-red'){
    document.getElementById('blml-label').style.background = 'red'
    document.getElementById("blml-title").innerHTML = "Red";
    document.getElementById('blml').style.fill = 'red'
    document.getElementById('bins').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-grey'){
    document.getElementById('blml-label').style.background = '#969696'
    document.getElementById("blml-title").innerHTML = "Grey";
    document.getElementById('blml').style.fill = '#969696'
    document.getElementById('bins').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-navy'){
    document.getElementById('blml-label').style.background = '#152c91'
    document.getElementById("blml-title").innerHTML = "Navy";
    document.getElementById('blml').style.fill = '#152c91'
    document.getElementById('bins').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-purple'){
    document.getElementById('blml-label').style.background = 'purple'
    document.getElementById("blml-title").innerHTML = "Purple";
    document.getElementById('blml').style.fill = 'purple'
    document.getElementById('bins').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-darkGreen'){
    document.getElementById('blml-label').style.background = 'Green'
    document.getElementById("blml-title").innerHTML = "Green";
    document.getElementById('blml').style.fill = 'Green'
    document.getElementById('bins').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-darkGrey'){
    document.getElementById('blml-label').style.background = '#494949'
    document.getElementById("blml-title").innerHTML = "Dark Grey";
    document.getElementById('blml').style.fill = '#494949'
    document.getElementById('bins').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-blue'){
    document.getElementById('blml-label').style.background = 'blue'
    document.getElementById("blml-title").innerHTML = "Blue";
    document.getElementById('blml').style.fill = 'blue'
    document.getElementById('bins').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-lime'){
    document.getElementById('blml-label').style.background = '#09b600'
    document.getElementById("blml-title").innerHTML = "Lime";
    document.getElementById('blml').style.fill = '#09b600'
    document.getElementById('bins').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-white'){
    document.getElementById('blml-label').style.background = 'White'
    document.getElementById("blml-title").innerHTML = "White";
    document.getElementById('blml').style.fill = 'White'
    document.getElementById('bins').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-black'){
    document.getElementById('blml-label').style.background = 'Black'
    document.getElementById("blml-title").innerHTML = "Black";
    document.getElementById('blml').style.fill = 'Black'
    document.getElementById('bins').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blml-teal'){
    document.getElementById('blml-label').style.background = '#00b692'
    document.getElementById("blml-title").innerHTML = "Teal";
    document.getElementById('blml').style.fill = '#00b692'
    document.getElementById('bins').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blml').style.display = 'none'
    dropdownCtrl = true
  }

  if(color === 'brml-aqua'){
    console.log('here')
    document.getElementById('brml-label').style.background = '#129793'
    document.getElementById("brml-title").innerHTML = "Aqua";
    document.getElementById('brml').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-neon-green'){
    document.getElementById('brml-label').style.background = '#29f04f'
    document.getElementById("brml-title").innerHTML = "Neon Green";
    document.getElementById('brml').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-hot-pink'){
    document.getElementById('brml-label').style.background = '#e929f0'
    document.getElementById("brml-title").innerHTML = "Hot Pink";
    document.getElementById('brml').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-yellow'){
    document.getElementById('brml-label').style.background = 'yellow'
    document.getElementById("brml-title").innerHTMLx = "Yellow";
    document.getElementById('brml').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-maroon'){
    document.getElementById('brml-label').style.background = '#cb0039'
    document.getElementById("brml-title").innerHTML = "Maroon";
    document.getElementById('brml').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-red'){
    document.getElementById('brml-label').style.background = 'red'
    document.getElementById("brml-title").innerHTML = "Red";
    document.getElementById('brml').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-grey'){
    document.getElementById('brml-label').style.background = '#969696'
    document.getElementById("brml-title").innerHTML = "Grey";
    document.getElementById('brml').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-navy'){
    document.getElementById('brml-label').style.background = '#152c91'
    document.getElementById("brml-title").innerHTML = "Navy";
    document.getElementById('brml').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-purple'){
    document.getElementById('brml-label').style.background = 'purple'
    document.getElementById("brml-title").innerHTML = "Purple";
    document.getElementById('brml').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-darkGreen'){
    document.getElementById('brml-label').style.background = 'Green'
    document.getElementById("brml-title").innerHTML = "Green";
    document.getElementById('brml').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-darkGrey'){
    document.getElementById('brml-label').style.background = '#494949'
    document.getElementById("brml-title").innerHTML = "Dark Grey";
    document.getElementById('brml').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-blue'){
    document.getElementById('brml-label').style.background = 'blue'
    document.getElementById("brml-title").innerHTML = "Blue";
    document.getElementById('brml').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-lime'){
    document.getElementById('brml-label').style.background = '#09b600'
    document.getElementById("brml-title").innerHTML = "Lime";
    document.getElementById('brml').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-white'){
    document.getElementById('brml-label').style.background = 'White'
    document.getElementById("brml-title").innerHTML = "White";
    document.getElementById('brml').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-black'){
    document.getElementById('brml-label').style.background = 'Black'
    document.getElementById("brml-title").innerHTML = "Black";
    document.getElementById('brml').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brml-teal'){
    document.getElementById('brml-label').style.background = '#00b692'
    document.getElementById("brml-title").innerHTML = "Teal";
    document.getElementById('brml').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brml').style.display = 'none'
    dropdownCtrl = true
  }
  // back left lower arm
  if(color === 'bins-aqua'){
    console.log('here')
    document.getElementById('bins-label').style.background = '#129793'
    document.getElementById("bins-title").innerHTML = "Aqua";
    document.getElementById('bins').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-neon-green'){
    document.getElementById('bins-label').style.background = '#29f04f'
    document.getElementById("bins-title").innerHTML = "Neon Green";
    document.getElementById('bins').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-hot-pink'){
    document.getElementById('bins-label').style.background = '#e929f0'
    document.getElementById("bins-title").innerHTML = "Hot Pink";
    document.getElementById('bins').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-yellow'){
    document.getElementById('bins-label').style.background = 'yellow'
    document.getElementById("bins-title").innerHTML = "Yellow";
    document.getElementById('bins').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-maroon'){
    document.getElementById('bins-label').style.background = '#cb0039'
    document.getElementById("bins-title").innerHTML = "Maroon";
    document.getElementById('bins').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-red'){
    document.getElementById('bins-label').style.background = 'red'
    document.getElementById("bins-title").innerHTML = "Red";
    document.getElementById('bins').style.fill = 'red'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-grey'){
    document.getElementById('bins-label').style.background = '#969696'
    document.getElementById("bins-title").innerHTML = "Grey";
    document.getElementById('bins').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-navy'){
    document.getElementById('bins-label').style.background = '#152c91'
    document.getElementById("bins-title").innerHTML = "Navy";
    document.getElementById('bins').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-purple'){
    document.getElementById('bins-label').style.background = 'purple'
    document.getElementById("bins-title").innerHTML = "Purple";
    document.getElementById('bins').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-darkGreen'){
    document.getElementById('bins-label').style.background = 'Green'
    document.getElementById("bins-title").innerHTML = "Green";
    document.getElementById('bins').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-darkGrey'){
    document.getElementById('bins-label').style.background = '#494949'
    document.getElementById("bins-title").innerHTML = "Dark Grey";
    document.getElementById('bins').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-blue'){
    document.getElementById('bins-label').style.background = 'blue'
    document.getElementById("bins-title").innerHTML = "Blue";
    document.getElementById('bins').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-lime'){
    document.getElementById('bins-label').style.background = '#09b600'
    document.getElementById("bins-title").innerHTML = "Lime";
    document.getElementById('bins').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-white'){
    document.getElementById('bins-label').style.background = 'White'
    document.getElementById("bins-title").innerHTML = "White";
    document.getElementById('bins').style.fill = 'White'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-black'){
    document.getElementById('bins-label').style.background = 'Black'
    document.getElementById("bins-title").innerHTML = "Black";
    document.getElementById('bins').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'bins-teal'){
    document.getElementById('bins-label').style.background = '#00b692'
    document.getElementById("bins-title").innerHTML = "Teal";
    document.getElementById('bins').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-bins').style.display = 'none'
    dropdownCtrl = true
  }

  if(color === 'blll-aqua'){
    console.log('here')
    document.getElementById('blll-label').style.background = '#129793'
    document.getElementById("blll-title").innerHTML = "Aqua";
    document.getElementById('blll').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-neon-green'){
    document.getElementById('blll-label').style.background = '#29f04f'
    document.getElementById("blll-title").innerHTML = "Neon Green";
    document.getElementById('blll').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-hot-pink'){
    document.getElementById('blll-label').style.background = '#e929f0'
    document.getElementById("blll-title").innerHTML = "Hot Pink";
    document.getElementById('blll').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-yellow'){
    document.getElementById('blll-label').style.background = 'yellow'
    document.getElementById("blll-title").innerHTMLx = "Yellow";
    document.getElementById('blll').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-maroon'){
    document.getElementById('blll-label').style.background = '#cb0039'
    document.getElementById("blll-title").innerHTML = "Maroon";
    document.getElementById('blll').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-red'){
    document.getElementById('blll-label').style.background = 'red'
    document.getElementById("blll-title").innerHTML = "Red";
    document.getElementById('blll').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-grey'){
    document.getElementById('blll-label').style.background = '#969696'
    document.getElementById("blll-title").innerHTML = "Grey";
    document.getElementById('blll').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-navy'){
    document.getElementById('blll-label').style.background = '#152c91'
    document.getElementById("blll-title").innerHTML = "Navy";
    document.getElementById('blll').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-purple'){
    document.getElementById('blll-label').style.background = 'purple'
    document.getElementById("blll-title").innerHTML = "Purple";
    document.getElementById('blll').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-darkGreen'){
    document.getElementById('blll-label').style.background = 'Green'
    document.getElementById("blll-title").innerHTML = "Green";
    document.getElementById('blll').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-darkGrey'){
    document.getElementById('blll-label').style.background = '#494949'
    document.getElementById("blll-title").innerHTML = "Dark Grey";
    document.getElementById('blll').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-blue'){
    document.getElementById('blll-label').style.background = 'blue'
    document.getElementById("blll-title").innerHTML = "Blue";
    document.getElementById('blll').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-lime'){
    document.getElementById('blll-label').style.background = '#09b600'
    document.getElementById("blll-title").innerHTML = "Lime";
    document.getElementById('blll').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-white'){
    document.getElementById('blll-label').style.background = 'White'
    document.getElementById("blll-title").innerHTML = "White";
    document.getElementById('blll').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-black'){
    document.getElementById('blll-label').style.background = 'Black'
    document.getElementById("blll-title").innerHTML = "Black";
    document.getElementById('blll').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-teal'){
    document.getElementById('blll-label').style.background = '#00b692'
    document.getElementById("blll-title").innerHTML = "Teal";
    document.getElementById('blll').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-aqua'){
    console.log('here')
    document.getElementById('brll-label').style.background = '#129793'
    document.getElementById("brll-title").innerHTML = "Aqua";
    document.getElementById('brll').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-neon-green'){
    document.getElementById('brll-label').style.background = '#29f04f'
    document.getElementById("brll-title").innerHTML = "Neon Green";
    document.getElementById('brll').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-hot-pink'){
    document.getElementById('brll-label').style.background = '#e929f0'
    document.getElementById("brll-title").innerHTML = "Hot Pink";
    document.getElementById('brll').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-yellow'){
    document.getElementById('brll-label').style.background = 'yellow'
    document.getElementById("brll-title").innerHTMLx = "Yellow";
    document.getElementById('brll').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-maroon'){
    document.getElementById('brll-label').style.background = '#cb0039'
    document.getElementById("brll-title").innerHTML = "Maroon";
    document.getElementById('brll').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-red'){
    document.getElementById('brll-label').style.background = 'red'
    document.getElementById("brll-title").innerHTML = "Red";
    document.getElementById('brll').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-grey'){
    document.getElementById('brll-label').style.background = '#969696'
    document.getElementById("brll-title").innerHTML = "Grey";
    document.getElementById('brll').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-navy'){
    document.getElementById('brll-label').style.background = '#152c91'
    document.getElementById("brll-title").innerHTML = "Navy";
    document.getElementById('brll').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-purple'){
    document.getElementById('brll-label').style.background = 'purple'
    document.getElementById("brll-title").innerHTML = "Purple";
    document.getElementById('brll').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-darkGreen'){
    document.getElementById('brll-label').style.background = 'Green'
    document.getElementById("brll-title").innerHTML = "Green";
    document.getElementById('brll').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-darkGrey'){
    document.getElementById('brll-label').style.background = '#494949'
    document.getElementById("brll-title").innerHTML = "Dark Grey";
    document.getElementById('brll').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-blue'){
    document.getElementById('brll-label').style.background = 'blue'
    document.getElementById("brll-title").innerHTML = "Blue";
    document.getElementById('brll').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-lime'){
    document.getElementById('brll-label').style.background = '#09b600'
    document.getElementById("brll-title").innerHTML = "Lime";
    document.getElementById('brll').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-white'){
    document.getElementById('brll-label').style.background = 'White'
    document.getElementById("brll-title").innerHTML = "White";
    document.getElementById('brll').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-black'){
    document.getElementById('brll-label').style.background = 'Black'
    document.getElementById("brll-title").innerHTML = "Black";
    document.getElementById('brll').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-teal'){
    document.getElementById('brll-label').style.background = '#00b692'
    document.getElementById("brll-title").innerHTML = "Teal";
    document.getElementById('brll').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }






  //  bester
  if(color === 'blcr-aqua'){
    console.log('here')
    document.getElementById('blcr-label').style.background = '#129793'
    document.getElementById("blcr-title").innerHTML = "Aqua";
    document.getElementById('blcr').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-neon-green'){
    document.getElementById('blcr-label').style.background = '#29f04f'
    document.getElementById("blcr-title").innerHTML = "Neon Green";
    document.getElementById('blcr').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-hot-pink'){
    document.getElementById('blcr-label').style.background = '#e929f0'
    document.getElementById("blcr-title").innerHTML = "Hot Pink";
    document.getElementById('blcr').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-yellow'){
    document.getElementById('blcr-label').style.background = 'yellow'
    document.getElementById("blcr-title").innerHTMLx = "Yellow";
    document.getElementById('blcr').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-maroon'){
    document.getElementById('blcr-label').style.background = '#cb0039'
    document.getElementById("blcr-title").innerHTML = "Maroon";
    document.getElementById('blcr').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-red'){
    document.getElementById('blcr-label').style.background = 'red'
    document.getElementById("blcr-title").innerHTML = "Red";
    document.getElementById('blcr').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-grey'){
    document.getElementById('blcr-label').style.background = '#969696'
    document.getElementById("blcr-title").innerHTML = "Grey";
    document.getElementById('blcr').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-navy'){
    document.getElementById('blcr-label').style.background = '#152c91'
    document.getElementById("blcr-title").innerHTML = "Navy";
    document.getElementById('blcr').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-purple'){
    document.getElementById('blcr-label').style.background = 'purple'
    document.getElementById("blcr-title").innerHTML = "Purple";
    document.getElementById('blcr').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-darkGreen'){
    document.getElementById('blcr-label').style.background = 'Green'
    document.getElementById("blcr-title").innerHTML = "Green";
    document.getElementById('blcr').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-darkGrey'){
    document.getElementById('blcr-label').style.background = '#494949'
    document.getElementById("blcr-title").innerHTML = "Dark Grey";
    document.getElementById('blcr').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-blue'){
    document.getElementById('blcr-label').style.background = 'blue'
    document.getElementById("blcr-title").innerHTML = "Blue";
    document.getElementById('blcr').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-lime'){
    document.getElementById('blcr-label').style.background = '#09b600'
    document.getElementById("blcr-title").innerHTML = "Lime";
    document.getElementById('blcr').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-white'){
    document.getElementById('blcr-label').style.background = 'White'
    document.getElementById("blcr-title").innerHTML = "White";
    document.getElementById('blcr').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-black'){
    document.getElementById('blcr-label').style.background = 'Black'
    document.getElementById("blcr-title").innerHTML = "Black";
    document.getElementById('blcr').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blcr-teal'){
    document.getElementById('blcr-label').style.background = '#00b692'
    document.getElementById("blcr-title").innerHTML = "Teal";
    document.getElementById('blcr').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blcr').style.display = 'none'
    dropdownCtrl = true
  }

  if(color === 'brly-aqua'){
    console.log('here')
    document.getElementById('brly-label').style.background = '#129793'
    document.getElementById("brly-title").innerHTML = "Aqua";
    document.getElementById('brly').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-neon-green'){
    document.getElementById('brly-label').style.background = '#29f04f'
    document.getElementById("brly-title").innerHTML = "Neon Green";
    document.getElementById('brly').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-hot-pink'){
    document.getElementById('brly-label').style.background = '#e929f0'
    document.getElementById("brly-title").innerHTML = "Hot Pink";
    document.getElementById('brly').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-yellow'){
    document.getElementById('brly-label').style.background = 'yellow'
    document.getElementById("brly-title").innerHTMLx = "Yellow";
    document.getElementById('brly').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-maroon'){
    document.getElementById('brly-label').style.background = '#cb0039'
    document.getElementById("brly-title").innerHTML = "Maroon";
    document.getElementById('brly').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-red'){
    document.getElementById('brly-label').style.background = 'red'
    document.getElementById("brly-title").innerHTML = "Red";
    document.getElementById('brly').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-grey'){
    document.getElementById('brly-label').style.background = '#969696'
    document.getElementById("brly-title").innerHTML = "Grey";
    document.getElementById('brly').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-navy'){
    document.getElementById('brly-label').style.background = '#152c91'
    document.getElementById("brly-title").innerHTML = "Navy";
    document.getElementById('brly').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-purple'){
    document.getElementById('brly-label').style.background = 'purple'
    document.getElementById("brly-title").innerHTML = "Purple";
    document.getElementById('brly').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-darkGreen'){
    document.getElementById('brly-label').style.background = 'Green'
    document.getElementById("brly-title").innerHTML = "Green";
    document.getElementById('brly').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-darkGrey'){
    document.getElementById('brly-label').style.background = '#494949'
    document.getElementById("brly-title").innerHTML = "Dark Grey";
    document.getElementById('brly').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-blue'){
    document.getElementById('brly-label').style.background = 'blue'
    document.getElementById("brly-title").innerHTML = "Blue";
    document.getElementById('brly').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-lime'){
    document.getElementById('brly-label').style.background = '#09b600'
    document.getElementById("brly-title").innerHTML = "Lime";
    document.getElementById('brly').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-white'){
    document.getElementById('brly-label').style.background = 'White'
    document.getElementById("brly-title").innerHTML = "White";
    document.getElementById('brly').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-black'){
    document.getElementById('brly-label').style.background = 'Black'
    document.getElementById("brly-title").innerHTML = "Black";
    document.getElementById('brly').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brly-teal'){
    document.getElementById('brly-label').style.background = '#00b692'
    document.getElementById("brly-title").innerHTML = "Teal";
    document.getElementById('brly').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brly').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-aqua'){
    console.log('here')
    document.getElementById('blul-label').style.background = '#129793'
    document.getElementById("blul-title").innerHTML = "Aqua";
    document.getElementById('blul').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-neon-green'){
    document.getElementById('blul-label').style.background = '#29f04f'
    document.getElementById("blul-title").innerHTML = "Neon Green";
    document.getElementById('blul').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-hot-pink'){
    document.getElementById('blul-label').style.background = '#e929f0'
    document.getElementById("blul-title").innerHTML = "Hot Pink";
    document.getElementById('blul').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-yellow'){
    document.getElementById('blul-label').style.background = 'yellow'
    document.getElementById("blul-title").innerHTMLx = "Yellow";
    document.getElementById('blul').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-maroon'){
    document.getElementById('blul-label').style.background = '#cb0039'
    document.getElementById("blul-title").innerHTML = "Maroon";
    document.getElementById('blul').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-red'){
    document.getElementById('blul-label').style.background = 'red'
    document.getElementById("blul-title").innerHTML = "Red";
    document.getElementById('blul').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-grey'){
    document.getElementById('blul-label').style.background = '#969696'
    document.getElementById("blul-title").innerHTML = "Grey";
    document.getElementById('blul').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-navy'){
    document.getElementById('blul-label').style.background = '#152c91'
    document.getElementById("blul-title").innerHTML = "Navy";
    document.getElementById('blul').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-purple'){
    document.getElementById('blul-label').style.background = 'purple'
    document.getElementById("blul-title").innerHTML = "Purple";
    document.getElementById('blul').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-darkGreen'){
    document.getElementById('blul-label').style.background = 'Green'
    document.getElementById("blul-title").innerHTML = "Green";
    document.getElementById('blul').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-darkGrey'){
    document.getElementById('blul-label').style.background = '#494949'
    document.getElementById("blul-title").innerHTML = "Dark Grey";
    document.getElementById('blul').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-blue'){
    document.getElementById('blul-label').style.background = 'blue'
    document.getElementById("blul-title").innerHTML = "Blue";
    document.getElementById('blul').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-lime'){
    document.getElementById('blul-label').style.background = '#09b600'
    document.getElementById("blul-title").innerHTML = "Lime";
    document.getElementById('blul').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-white'){
    document.getElementById('blul-label').style.background = 'White'
    document.getElementById("blul-title").innerHTML = "White";
    document.getElementById('blul').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-black'){
    document.getElementById('blul-label').style.background = 'Black'
    document.getElementById("blul-title").innerHTML = "Black";
    document.getElementById('blul').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blul-teal'){
    document.getElementById('blul-label').style.background = '#00b692'
    document.getElementById("blul-title").innerHTML = "Teal";
    document.getElementById('blul').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-aqua'){
    console.log('here')
    document.getElementById('brul-label').style.background = '#129793'
    document.getElementById("brul-title").innerHTML = "Aqua";
    document.getElementById('brul').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-neon-green'){
    document.getElementById('brul-label').style.background = '#29f04f'
    document.getElementById("brul-title").innerHTML = "Neon Green";
    document.getElementById('brul').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-hot-pink'){
    document.getElementById('brul-label').style.background = '#e929f0'
    document.getElementById("brul-title").innerHTML = "Hot Pink";
    document.getElementById('brul').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-yellow'){
    document.getElementById('brul-label').style.background = 'yellow'
    document.getElementById("brul-title").innerHTMLx = "Yellow";
    document.getElementById('brul').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-maroon'){
    document.getElementById('brul-label').style.background = '#cb0039'
    document.getElementById("brul-title").innerHTML = "Maroon";
    document.getElementById('brul').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-red'){
    document.getElementById('brul-label').style.background = 'red'
    document.getElementById("brul-title").innerHTML = "Red";
    document.getElementById('brul').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-grey'){
    document.getElementById('brul-label').style.background = '#969696'
    document.getElementById("brul-title").innerHTML = "Grey";
    document.getElementById('brul').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-navy'){
    document.getElementById('brul-label').style.background = '#152c91'
    document.getElementById("brul-title").innerHTML = "Navy";
    document.getElementById('brul').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-purple'){
    document.getElementById('brul-label').style.background = 'purple'
    document.getElementById("brul-title").innerHTML = "Purple";
    document.getElementById('brul').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-darkGreen'){
    document.getElementById('brul-label').style.background = 'Green'
    document.getElementById("brul-title").innerHTML = "Green";
    document.getElementById('brul').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-darkGrey'){
    document.getElementById('brul-label').style.background = '#494949'
    document.getElementById("brul-title").innerHTML = "Dark Grey";
    document.getElementById('brul').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-blue'){
    document.getElementById('brul-label').style.background = 'blue'
    document.getElementById("brul-title").innerHTML = "Blue";
    document.getElementById('brul').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-lime'){
    document.getElementById('brul-label').style.background = '#09b600'
    document.getElementById("brul-title").innerHTML = "Lime";
    document.getElementById('brul').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-white'){
    document.getElementById('brul-label').style.background = 'White'
    document.getElementById("brul-title").innerHTML = "White";
    document.getElementById('brul').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-black'){
    document.getElementById('brul-label').style.background = 'Black'
    document.getElementById("brul-title").innerHTML = "Black";
    document.getElementById('brul').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brul-teal'){
    document.getElementById('brul-label').style.background = '#00b692'
    document.getElementById("brul-title").innerHTML = "Teal";
    document.getElementById('brul').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brul').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-aqua'){
    console.log('here')
    document.getElementById('blll-label').style.background = '#129793'
    document.getElementById("blll-title").innerHTML = "Aqua";
    document.getElementById('blll').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-neon-green'){
    document.getElementById('blll-label').style.background = '#29f04f'
    document.getElementById("blll-title").innerHTML = "Neon Green";
    document.getElementById('blll').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-hot-pink'){
    document.getElementById('blll-label').style.background = '#e929f0'
    document.getElementById("blll-title").innerHTML = "Hot Pink";
    document.getElementById('blll').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-yellow'){
    document.getElementById('blll-label').style.background = 'yellow'
    document.getElementById("blll-title").innerHTMLx = "Yellow";
    document.getElementById('blll').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-maroon'){
    document.getElementById('blll-label').style.background = '#cb0039'
    document.getElementById("blll-title").innerHTML = "Maroon";
    document.getElementById('blll').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-red'){
    document.getElementById('blll-label').style.background = 'red'
    document.getElementById("blll-title").innerHTML = "Red";
    document.getElementById('blll').style.fill = 'red'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-grey'){
    document.getElementById('blll-label').style.background = '#969696'
    document.getElementById("blll-title").innerHTML = "Grey";
    document.getElementById('blll').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-navy'){
    document.getElementById('blll-label').style.background = '#152c91'
    document.getElementById("blll-title").innerHTML = "Navy";
    document.getElementById('blll').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-purple'){
    document.getElementById('blll-label').style.background = 'purple'
    document.getElementById("blll-title").innerHTML = "Purple";
    document.getElementById('blll').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-darkGreen'){
    document.getElementById('blll-label').style.background = 'Green'
    document.getElementById("blll-title").innerHTML = "Green";
    document.getElementById('blll').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-darkGrey'){
    document.getElementById('blll-label').style.background = '#494949'
    document.getElementById("blll-title").innerHTML = "Dark Grey";
    document.getElementById('blll').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-blue'){
    document.getElementById('blll-label').style.background = 'blue'
    document.getElementById("blll-title").innerHTML = "Blue";
    document.getElementById('blll').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-lime'){
    document.getElementById('blll-label').style.background = '#09b600'
    document.getElementById("blll-title").innerHTML = "Lime";
    document.getElementById('blll').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-white'){
    document.getElementById('blll-label').style.background = 'White'
    document.getElementById("blll-title").innerHTML = "White";
    document.getElementById('blll').style.fill = 'White'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-black'){
    document.getElementById('blll-label').style.background = 'Black'
    document.getElementById("blll-title").innerHTML = "Black";
    document.getElementById('blll').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'blll-teal'){
    document.getElementById('blll-label').style.background = '#00b692'
    document.getElementById("blll-title").innerHTML = "Teal";
    document.getElementById('blll').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-blll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-aqua'){
    console.log('here')
    document.getElementById('brll-label').style.background = '#129793'
    document.getElementById("brll-title").innerHTML = "Aqua";
    document.getElementById('brll').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-neon-green'){
    document.getElementById('brll-label').style.background = '#29f04f'
    document.getElementById("brll-title").innerHTML = "Neon Green";
    document.getElementById('brll').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-hot-pink'){
    document.getElementById('brll-label').style.background = '#e929f0'
    document.getElementById("brll-title").innerHTML = "Hot Pink";
    document.getElementById('brll').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-yellow'){
    document.getElementById('brll-label').style.background = 'yellow'
    document.getElementById("brll-title").innerHTMLx = "Yellow";
    document.getElementById('brll').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-maroon'){
    document.getElementById('brll-label').style.background = '#cb0039'
    document.getElementById("brll-title").innerHTML = "Maroon";
    document.getElementById('brll').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-red'){
    document.getElementById('brll-label').style.background = 'red'
    document.getElementById("brll-title").innerHTML = "Red";
    document.getElementById('brll').style.fill = 'red'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-grey'){
    document.getElementById('brll-label').style.background = '#969696'
    document.getElementById("brll-title").innerHTML = "Grey";
    document.getElementById('brll').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-navy'){
    document.getElementById('brll-label').style.background = '#152c91'
    document.getElementById("brll-title").innerHTML = "Navy";
    document.getElementById('brll').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-purple'){
    document.getElementById('brll-label').style.background = 'purple'
    document.getElementById("brll-title").innerHTML = "Purple";
    document.getElementById('brll').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-darkGreen'){
    document.getElementById('brll-label').style.background = 'Green'
    document.getElementById("brll-title").innerHTML = "Green";
    document.getElementById('brll').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-darkGrey'){
    document.getElementById('brll-label').style.background = '#494949'
    document.getElementById("brll-title").innerHTML = "Dark Grey";
    document.getElementById('brll').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-blue'){
    document.getElementById('brll-label').style.background = 'blue'
    document.getElementById("brll-title").innerHTML = "Blue";
    document.getElementById('brll').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-lime'){
    document.getElementById('brll-label').style.background = '#09b600'
    document.getElementById("brll-title").innerHTML = "Lime";
    document.getElementById('brll').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-white'){
    document.getElementById('brll-label').style.background = 'White'
    document.getElementById("brll-title").innerHTML = "White";
    document.getElementById('brll').style.fill = 'White'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-black'){
    document.getElementById('brll-label').style.background = 'Black'
    document.getElementById("brll-title").innerHTML = "Black";
    document.getElementById('brll').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'brll-teal'){
    document.getElementById('brll-label').style.background = '#00b692'
    document.getElementById("brll-title").innerHTML = "Teal";
    document.getElementById('brll').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-brll').style.display = 'none'
    dropdownCtrl = true
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
  //Front collar // collar
  if(color === 'fc-aqua'){
    console.log('here')
    document.getElementById('fc-label').style.background = '#129793'
    document.getElementById("fc-title").innerHTML = "Aqua";
    document.getElementById('fc').style.fill = '#129793'
    document.getElementById('bcol').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-neon-green'){
    document.getElementById('fc-label').style.background = '#29f04f'
    document.getElementById("fc-title").innerHTML = "Neon Green";
    document.getElementById('fc').style.fill = '#29f04f'
    document.getElementById('bcol').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-hot-pink'){
    document.getElementById('fc-label').style.background = '#e929f0'
    document.getElementById("fc-title").innerHTML = "Hot Pink";
    document.getElementById('fc').style.fill = '#e929f0'
    document.getElementById('bcol').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-yellow'){
    document.getElementById('fc-label').style.background = 'yellow'
    document.getElementById("fc-title").innerHTML = "Yellow";
    document.getElementById('fc').style.fill = 'yellow'
    document.getElementById('bcol').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-maroon'){
    document.getElementById('fc-label').style.background = '#cb0039'
    document.getElementById("fc-title").innerHTML = "Maroon";
    document.getElementById('fc').style.fill = '#cb0039'
    document.getElementById('bcol').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-grey'){
    document.getElementById('fc-label').style.background = '#969696'
    document.getElementById("fc-title").innerHTML = "Grey";
    document.getElementById('fc').style.fill = '#969696'
    document.getElementById('bcol').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-navy'){
    document.getElementById('fc-label').style.background = '#152c91'
    document.getElementById("fc-title").innerHTML = "Navy";
    document.getElementById('fc').style.fill = '#152c91'
    document.getElementById('bcol').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-purple'){
    document.getElementById('fc-label').style.background = 'purple'
    document.getElementById("fc-title").innerHTML = "Purple";
    document.getElementById('fc').style.fill = 'purple'
    document.getElementById('bcol').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-darkGreen'){
    document.getElementById('fc-label').style.background = 'Green'
    document.getElementById("fc-title").innerHTML = "Green";
    document.getElementById('fc').style.fill = 'Green'
    document.getElementById('bcol').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-darkGrey'){
    document.getElementById('fc-label').style.background = '#494949'
    document.getElementById("fc-title").innerHTML = "Dark Grey";
    document.getElementById('fc').style.fill = '#494949'
    document.getElementById('bcol').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-blue'){
    document.getElementById('fc-label').style.background = 'blue'
    document.getElementById("fc-title").innerHTML = "Blue";
    document.getElementById('fc').style.fill = 'blue'
    document.getElementById('bcol').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-lime'){
    document.getElementById('fc-label').style.background = '#09b600'
    document.getElementById("fc-title").innerHTML = "Lime";
    document.getElementById('fc').style.fill = '#09b600'
    document.getElementById('bcol').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-white'){
    document.getElementById('fc-label').style.background = 'White'
    document.getElementById("fc-title").innerHTML = "White";
    document.getElementById('fc').style.fill = 'White'
    document.getElementById('bcol').style.fill = 'White'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-black'){
    document.getElementById('fc-label').style.background = 'Black'
    document.getElementById("fc-title").innerHTML = "Black";
    document.getElementById('fc').style.fill = 'Black'
    document.getElementById('bcol').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fc-teal'){
    document.getElementById('fc-label').style.background = '#00b692'
    document.getElementById("fc-title").innerHTML = "Teal";
    document.getElementById('fc').style.fill = '#00b692'
    document.getElementById('bcol').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-fc').style.display = 'none'
    dropdownCtrl = true
  }

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
  //front right elbow
  if(color === 'fre-aqua'){
    console.log('here')
    document.getElementById('fre-label').style.background = '#129793'
    document.getElementById("fre-title").innerHTML = "Aqua";
    document.getElementById('fre').style.fill = '#129793'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-neon-green'){
    document.getElementById('fre-label').style.background = '#29f04f'
    document.getElementById("fre-title").innerHTML = "Neon Green";
    document.getElementById('fre').style.fill = '#29f04f'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-hot-pink'){
    document.getElementById('fre-label').style.background = '#e929f0'
    document.getElementById("fre-title").innerHTML = "Hot Pink";
    document.getElementById('fre').style.fill = '#e929f0'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-yellow'){
    document.getElementById('fre-label').style.background = 'yellow'
    document.getElementById("fre-title").innerHTML = "Yellow";
    document.getElementById('fre').style.fill = 'yellow'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-maroon'){
    document.getElementById('fre-label').style.background = '#cb0039'
    document.getElementById("fre-title").innerHTML = "Maroon";
    document.getElementById('fre').style.fill = '#cb0039'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-grey'){
    document.getElementById('fre-label').style.background = '#969696'
    document.getElementById("fre-title").innerHTML = "Grey";
    document.getElementById('fre').style.fill = '#969696'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-navy'){
    document.getElementById('fre-label').style.background = '#152c91'
    document.getElementById("fre-title").innerHTML = "Navy";
    document.getElementById('fre').style.fill = '#152c91'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-purple'){
    document.getElementById('fre-label').style.background = 'purple'
    document.getElementById("fre-title").innerHTML = "Purple";
    document.getElementById('fre').style.fill = 'purple'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-darkGreen'){
    document.getElementById('fre-label').style.background = 'Green'
    document.getElementById("fre-title").innerHTML = "Green";
    document.getElementById('fre').style.fill = 'Green'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-darkGrey'){
    document.getElementById('fre-label').style.background = '#494949'
    document.getElementById("fre-title").innerHTML = "Dark Grey";
    document.getElementById('fre').style.fill = '#494949'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-blue'){
    document.getElementById('fre-label').style.background = 'blue'
    document.getElementById("fre-title").innerHTML = "Blue";
    document.getElementById('fre').style.fill = 'blue'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-lime'){
    document.getElementById('fre-label').style.background = '#09b600'
    document.getElementById("fre-title").innerHTML = "Lime";
    document.getElementById('fre').style.fill = '#09b600'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-white'){
    document.getElementById('fre-label').style.background = 'White'
    document.getElementById("fre-title").innerHTML = "White";
    document.getElementById('fre').style.fill = 'White'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-black'){
    document.getElementById('fre-label').style.background = 'Black'
    document.getElementById("fre-title").innerHTML = "Black";
    document.getElementById('fre').style.fill = 'Black'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
    dropdownCtrl = true
  }
  if(color === 'fre-teal'){
    document.getElementById('fre-label').style.background = '#00b692'
    document.getElementById("fre-title").innerHTML = "Teal";
    document.getElementById('fre').style.fill = '#00b692'
    document.getElementById('color-picker-dropdown-fre').style.display = 'none'
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



// color picker menu dropdown Back
//
//
//
//
//
//
//
//STRIPE STRIPE
let suitPrice = 0
let suitType = "x"
function openStripeForm(price, type){
  suitPrice = price
  suitType = type
  document.getElementById('payment-confirm').innerHTML = "$" + suitPrice + "(AUD)"
  document.getElementById('type-confirm').innerHTML = suitType
  console.log(suitPrice, suitType)
  document.getElementById('stripe-form').style.display = 'flex'
  document.getElementById('stripe-form-shade').style.display = 'flex'
}
let stripe = Stripe('pk_test_kA3wS31hOAFKooRGLboUrLWf');
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
var style = {
  base: {
    // Add your base input styles here. For example:
    fontSize: '16px',
    lineHeight: '24px'
  }
};

// Create an instance of the card Element
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>
card.mount('#card-element');
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Create a token or display an error when the form is submitted.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      alert('Oh Dear, Seems something went wrong! Try again and double check your card info!')
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {

      console.log(result)
      // Send the token to your server
      stripeTokenHandler(result.token);
    }
  });
});
//I'm the server ;)
function apiPoster(info){
  console.log('info in poster',info)
  $.ajax('https://www.discovercs.com/api/apetest',{
   data : JSON.stringify(info),
   contentType : 'application/json',
   type : 'POST',
 }).then(function(res){
   console.log(res.charge.id)
   console.log(res.charge)
   let newCustomer = {
     id: res.charge.id,
     amount: res.charge.amount/100,
     paid: res.charge.paid,
   }
   hideConfirmPop()
   document.getElementById('loading-payment').style.display = 'none'
   alert('Congrats! you just got yourself a new suit! you paied $' + newCustomer.amount + ' (AUD). your customer satisfaction ID is '+ newCustomer.id )

 });
 document.getElementById('loading-payment').style.display = 'flex'
}
function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);
  console.log('submitted and done', token)
  let charger = {}
  charger.amount = suitPrice * 100
  charger.token = token.id
  apiPoster(charger)
}

function hideStripeForm(){
  document.getElementById('stripe-form').style.display = 'none'
  document.getElementById('stripe-form-shade').style.display = 'none'
  console.log('tester')
}
