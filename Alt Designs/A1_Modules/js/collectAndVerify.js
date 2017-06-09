function collect(){
  function checkCollect(){
    if(document.getElementById("input-name").value){
      document.getElementById('pop-confirm-wrap').style.display = 'flex'
      document.getElementById('popup-confirm-section').style.display = 'flex'
    }else{
      alert('Please Fill out all Measurements and Contact Info before continuing to checkout')
    }
  }
  checkCollect();
// Front
  let frul = " Front Right Upper Leg: " + document.getElementById("frul-title").innerHTML + " / "
  let flul = " Front Left Upper Leg: " + document.getElementById("flul-title").innerHTML + " / "
  let frcl = " Front Left Croth: " + document.getElementById("frcl-title").innerHTML + " / "
  let flcl = " Front Right Croth: " + document.getElementById("flcl-title").innerHTML + " / "
  let frml = " Front Left Middle Leg: " + document.getElementById("frml-title").innerHTML + " / "
  let flml = " Front Right Middle Leg: " + document.getElementById("flml-title").innerHTML + " / "
  let frly = " Front Left Lyrica " + document.getElementById("frly-title").innerHTML + " / "
  let flly = " Front Right Lyrica " + document.getElementById("flly-title").innerHTML + " / "
  let frll = " Front Left Lower Leg " + document.getElementById("frll-title").innerHTML + " / "
  let flll = " Front Right Lower Leg " + document.getElementById("flll-title").innerHTML + " / "


  let allFrontValues = frul+flul+frcl+flcl+frml+flml+frly+flly+frll+flll
// Back
  let br = " Back Right Upper Leg: " + document.getElementById("br-title").innerHTML + " / "
  let bl = " Back Left Upper Leg: " + document.getElementById("bl-title").innerHTML + " / "
  let brc = " Back Right Crotch: " + document.getElementById("brc-title").innerHTML + " / "
  let blc = " Back Left Crotch: " + document.getElementById("blc-title").innerHTML + " / "
  let brml = " Back Right Middle Leg: " + document.getElementById("brml-title").innerHTML + " / "
  let blml = " Back Left Middle Leg: " + document.getElementById("blml-title").innerHTML + " / "
  let brly = " Back Right Lyrica: " + document.getElementById("brly-title").innerHTML + " / "
  let blly = " Back Left Lyrica: " + document.getElementById("blly-title").innerHTML + " / "
  let brll = " Back Right Lower Leg: " + document.getElementById("brll-title").innerHTML + " / "
  let blll = " Back Left Lower Leg: " + document.getElementById("blll-title").innerHTML + " / "

  let allBackValues = br+bl+brc+blc+brml+blml+brly+blly+brll+blll
//Measurements
  let WAIST_CIRCUMFERENCE = " WAIST_CIRCUMFERENCE: " + document.getElementById("WAIST_CIRCUMFERENCE").value + " / "
  let HIPS_CIRCUMFERENCE = " HIPS_CIRCUMFERENCE: " + document.getElementById("HIPS_CIRCUMFERENCE").value + " / "
  let FRONT_TO_BACK_RISE_LEGNTH = " FRONT_TO_BACK_RISE_LEGNTH: " + document.getElementById("FRONT_TO_BACK_RISE_LEGNTH").value + " / "
  let THIGH_CIRCUMFERENCE = " THIGH_CIRCUMFERENCE: " + document.getElementById("THIGH_CIRCUMFERENCE").value + " / "
  let CALF_CIRCUMFERENCE = " CALF_CIRCUMFERENCE: " + document.getElementById("CALF_CIRCUMFERENCE").value + " / "
  let CROTCH_TO_KNEE_LENGTH = " CROTCH_TO_KNEE_LENGTH: " + document.getElementById("CROTCH_TO_KNEE_LENGTH").value + " / "


  let tm = " TORSO MATERIAL: " + document.getElementById("select-tfab-title").innerHTML + " / "

  let allMeasurements = WAIST_CIRCUMFERENCE+HIPS_CIRCUMFERENCE+FRONT_TO_BACK_RISE_LEGNTH+THIGH_CIRCUMFERENCE+CALF_CIRCUMFERENCE+CROTCH_TO_KNEE_LENGTH+tm
  document.getElementById("form-group-c_33n7r").getElementsByClassName("form-control")[0].value = allFrontValues
  document.getElementById("form-group-comment").getElementsByClassName("form-control")[0].value = allBackValues
  document.getElementById("form-group-c_z8zee").getElementsByClassName("form-control")[0].value = allMeasurements

// contact Info
  let nameI = " Full Name: " + document.getElementById("input-name").value + " / "
  let emailI = " Email: " + document.getElementById("input-email").value + " / "
  let input_phone = " Phone: " + document.getElementById("input_phone").value + " / "
  let input_address = " Address: " + document.getElementById("input_address").value + " / "
  let input_city = " City: " + document.getElementById("input_city").value + " / "
  let input_state = " State: " + document.getElementById("input_state").value + " / "
  let input_country = " Country: " + document.getElementById("input_country").value + " / "
  let input_zip = " Zip: " + document.getElementById("input_zip").value + " / "
  let input_dcode = " Distributor Code: " + document.getElementById("input_dcode").value + " / "

  let contactInfo = nameI+emailI+input_phone+input_address+input_city+input_state+input_country+input_zip+input_dcode
  document.getElementById("form-group-c_d9lp9").getElementsByClassName("form-control")[0].value = contactInfo

console.log(allFrontValues)
console.log(allBackValues)
console.log(allMeasurements)
document.getElementById("form-group-name_first").getElementsByClassName("form-control")[0].value = nameI
document.getElementById("form-group-email").getElementsByClassName("form-control")[0].value = "marcus@discovercs.com"
document.getElementById("form-group-c_9cadg").getElementsByClassName("form-control")[0].value = emailI

}
