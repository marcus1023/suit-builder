// function collect(){
//
//  document.getElementById('pop-confirm-wrap').style.display = 'flex'
//  document.getElementById('popup-confirm-section').style.display = 'flex'
// // Front
//   let frontGrippers = " Gripers Color: " + document.getElementById("gripers-title").innerHTML + " / "
//   let frontCollar = " Collar Color: " + document.getElementById("collar-title").innerHTML + " / "
//   let frontLeft = " Front Left Color: " + document.getElementById("front-left-title").innerHTML + " / "
//   let frontRight = " Front Right Color: " + document.getElementById("front-right-title").innerHTML + " / "
//   let fra = " Front Right Arm Color: " + document.getElementById("front-left-lower-arm-title").innerHTML + " / "
//   let fla = " Front Left Arm Color: " + document.getElementById("front-right-lower-arm-title").innerHTML + " / "
//   let flul = " Front Left Upper Leg Color: " + document.getElementById("front-right-upper-leg-title").innerHTML + " / "
//   let frul = " Front Right Upper Leg Color: " + document.getElementById("front-left-upper-leg-title").innerHTML + " / "
//   let frk = " Front Right Knee Color: " + document.getElementById("flk-title").innerHTML + " / "
//   let flk = " Front Left Knee Color: " + document.getElementById("frk-title").innerHTML + " / "
//   let flll = " Front Right Lower Leg Color: " + document.getElementById("flll-title").innerHTML + " / "
//   let frll = " Front Left Lower Leg Color: " + document.getElementById("frll-title").innerHTML + " / "
//
//   let allFrontValues = frontGrippers + frontCollar + frontRight+fra+fla+flul+frul+frk+flk+flll+frll
// // Back
//   let back = " Back Color: " + document.getElementById("b-title").innerHTML + " / "
//   let blua = " Back Left Upper Arm Color: " + document.getElementById("blua-title").innerHTML + " / "
//   let brua = " Back Right Upper Arm Color: " + document.getElementById("brua-title").innerHTML + " / "
//   let blla = " Back Left Lower Arm Color: " + document.getElementById("blla-title").innerHTML + " / "
//   let brla = " Back Right Lower Arm Color: " + document.getElementById("brla-title").innerHTML + " / "
//   let bl = " Back Legs Color: " + document.getElementById("bl-title").innerHTML + " / "
//   let bh = " Back Hips Color: " + document.getElementById("bh-title").innerHTML + " / "
//
//   let allBackValues = back+blua+brua+blla+brla+bl+bh
// //Measurements
//   let NECK_CIRCUMFERENCE = " NECK_CIRCUMFERENCE: " + document.getElementById("NECK_CIRCUMFERENCE").value + " / "
//   let SHOULDER_TO_SHOULDER = " SHOULDER_TO_SHOULDER: " + document.getElementById("SHOULDER_TO_SHOULDER").value + " / "
//   let SHOULDER_TO_ELBOW_LENGTH = " SHOULDER_TO_ELBOW_LENGTH: " + document.getElementById("SHOULDER_TO_ELBOW_LENGTH").value + " / "
//   let ELBOW_TO_WRIST_LENGTH = " ELBOW_TO_WRIST_LENGTH: " + document.getElementById("ELBOW_TO_WRIST_LENGTH").value + " / "
//   let CHEST_CIRCUMFERENCE = " CHEST_CIRCUMFERENCE: " + document.getElementById("CHEST_CIRCUMFERENCE").value + " / "
//   let TORSO_LENGTH = " TORSO_LENGTH: " + document.getElementById("TORSO_LENGTH").value + " / "
//   let FULL_ARM_BENT_90_LENGTH = " FULL_ARM_BENT_90_LENGTH: " + document.getElementById("FULL_ARM_BENT_90_LENGTH").value + " / "
//   let BICEP_CIRCUMFERENCE = " BICEP_CIRCUMFERENCE: " + document.getElementById("BICEP_CIRCUMFERENCE").value + " / "
//   let FOREARM_CIRCUMFERENCE = " FOREARM_CIRCUMFERENCE: " + document.getElementById("FOREARM_CIRCUMFERENCE").value + " / "
//   let WRIST_CIRCUMFERENCE = " WRIST_CIRCUMFERENCE: " + document.getElementById("WRIST_CIRCUMFERENCE").value + " / "
//   let FOOT_TO_SHOULDER_LENGTH = " FOOT_TO_SHOULDER_LENGTH: " + document.getElementById("FOOT_TO_SHOULDER_LENGTH").value + " / "
//   let WAIST_CIRCUMFERENCE = " WAIST_CIRCUMFERENCE: " + document.getElementById("WAIST_CIRCUMFERENCE").value + " / "
//   let HIPS_CIRCUMFERENCE = " HIPS_CIRCUMFERENCE: " + document.getElementById("HIPS_CIRCUMFERENCE").value + " / "
//   let IN_SEAM_LENGTH = " IN_SEAM_LENGTH: " + document.getElementById("IN_SEAM_LENGTH").value + " / "
//   let THIGH_CIRCUMFERENCE = " THIGH_CIRCUMFERENCE: " + document.getElementById("THIGH_CIRCUMFERENCE").value + " / "
//   let CALF_CIRCUMFERENCE = " CALF_CIRCUMFERENCE: " + document.getElementById("CALF_CIRCUMFERENCE").value + " / "
//   let CROTCH_TO_KNEE_LENGTH = " CROTCH_TO_KNEE_LENGTH: " + document.getElementById("CROTCH_TO_KNEE_LENGTH").value + " / "
//   let LOWER_LEG_LENGTH = " LOWER_LEG_LENGTH: " + document.getElementById("LOWER_LEG_LENGTH").value + " / "
//   let ANKLE_CIRCUMFERENCE = " ANKLE_CIRCUMFERENCE: " + document.getElementById("ANKLE_CIRCUMFERENCE").value + " / "
//   let FOOT_LENGTH_SIZE = " FOOT_LENGTH_SIZE: " + document.getElementById("FOOT_LENGTH_SIZE").value + " / "
//   let tm = " TORSO MATERIAL: " + document.getElementById("select-tfab-title").innerHTML + " / "
//   let lam = " LOWER ARMS MATERIAL: " + document.getElementById("select-lafab-title").innerHTML + " / "
//
//   let allMeasurements = NECK_CIRCUMFERENCE + SHOULDER_TO_SHOULDER+SHOULDER_TO_ELBOW_LENGTH+ELBOW_TO_WRIST_LENGTH+CHEST_CIRCUMFERENCE+FULL_ARM_BENT_90_LENGTH+BICEP_CIRCUMFERENCE+FOREARM_CIRCUMFERENCE+WRIST_CIRCUMFERENCE+FOOT_TO_SHOULDER_LENGTH+WAIST_CIRCUMFERENCE+HIPS_CIRCUMFERENCE+IN_SEAM_LENGTH+THIGH_CIRCUMFERENCE+CALF_CIRCUMFERENCE+CROTCH_TO_KNEE_LENGTH+LOWER_LEG_LENGTH+ANKLE_CIRCUMFERENCE+FOOT_LENGTH_SIZE+tm+lam
//   document.getElementById("form-group-company").getElementsByClassName("form-control")[0].value = allFrontValues
//   document.getElementById("form-group-comment").getElementsByClassName("form-control")[0].value = allBackValues
//   document.getElementById("form-group-organization").getElementsByClassName("form-control")[0].value = allMeasurements
//
// // contact Info
//   let nameI = " Full Name: " + document.getElementById("input-name").value + " / "
//   let emailI = " Email: " + document.getElementById("input-email").value + " / "
//   let input_phone = " Phone: " + document.getElementById("input_phone").value + " / "
//   let input_address = " Address: " + document.getElementById("input_address").value + " / "
//   let input_city = " City: " + document.getElementById("input_city").value + " / "
//   let input_state = " State: " + document.getElementById("input_state").value + " / "
//   let input_country = " Country: " + document.getElementById("input_country").value + " / "
//
//   let contactInfo = nameI+emailI+input_phone+input_address+input_city+input_state+input_country
//   document.getElementById("form-group-c_d9lp9").getElementsByClassName("form-control")[0].value = contactInfo
//
// console.log(allFrontValues)
// console.log(allBackValues)
// console.log(allMeasurements)
//   document.getElementById("form-group-name_first").getElementsByClassName("form-control")[0].value = nameI
//   document.getElementById("form-group-email").getElementsByClassName("form-control")[0].value = emailI
//
// }
