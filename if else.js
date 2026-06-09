const role = "teacher"; 

if (role === "admin") {
    console.log("Show Admin Dashboard");
} else if (role === "teacher") {
    console.log("Show Teacher Dashboard"); 
} else if (role === "student") {
    console.log("Show Student Dashboard");
} else {
    console.log("Show Access Denied"); 
}

const temperature = 15;

if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 10) {
    console.log("It's warm."); 
} else {
    console.log("It's cold.");
}
