// exzam  age check


let age = 19;
let feePaid = true;

if (age >= 18 && feePaid) {
  console.log("Allowed to enter the exam");
} else {
  console.log("Not allowed to enter the exam");
}


// login check

let emailCorrect = false;
let phoneCorrect = true;

if (emailCorrect || phoneCorrect) {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

// check

let isBlocked = false;

if (!isBlocked) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}



// discount


let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;

if (isLoggedIn && (isPremium || hasCoupon)) {
  console.log("Special discount applied");
} else {
  console.log("No discount available");
}
