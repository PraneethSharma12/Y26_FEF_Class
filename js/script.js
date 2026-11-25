let name = "Praneeth";
const age = 20;
document.getElementById("studentName").textContent =
    "Name: "+ name;
document.getElementById("studentAge").textContent =
    "Age: "+ age;

document.getElementById("result").innerHTML =
    "Name: "+ name + " <br> Age: "+ age;

    document.write("Name: "+name+ "<br>");
    document.write("Age: "+age);

    function greet(){
        alert("Hello Students");
    }

    // ================= DIGITAL CLOCK =================
// Updates the dashboard clock with the current system time.
function updateClock() {
 // Finds the clock element in the HTML.
 const clock = document.getElementById("clock");

// Displays the current time.
if (clock) clock.textContent = new Date().toLocaleTimeString();
}
// Calls the clock function immediately.
updateClock();
// Repeats the clock update every one second (1000 milliseconds).
setInterval(updateClock, 1000);