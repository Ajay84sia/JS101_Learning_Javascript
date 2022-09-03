// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let reg_username = "MasaiSchool";
let reg_password = "987654321";

let ent_username = "MasaiSchool";
let ent_password = "987654321";

if (ent_username==reg_username){
  if (ent_password==reg_password){
    console.log("Login Successfully!")
  } else {
    console.log("Invalid Password")
  }
}else{
  console.log("Incorrect Username!")
}