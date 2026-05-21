// Constructor Function

function Student(name, age, course){

  this.name = name;
  this.age = age;
  this.course = course;

  // Object Method

  this.introduce = function(){
    return `Hi, my name is ${this.name} and I study ${this.course}`;
  };

}

// Array to store students

let students = [];

// DOM Elements

const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");

// Add Student

addBtn.addEventListener("click", () => {

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const course = document.getElementById("course").value;

  if(name === "" || age === "" || course === ""){
    alert("Please fill all fields");
    return;
  }

  // Create Object

  const student = new Student(name, age, course);

  // Push into array

  students.push(student);

  // Render

  displayStudents();

  // Clear Fields

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";

});

// Display Students

function displayStudents(){

  studentList.innerHTML = "";

  students.forEach((student, index) => {

    const card = document.createElement("div");

    card.classList.add("student-card");

    card.innerHTML = `
      <h3>${student.name}</h3>
      <p><strong>Age:</strong> ${student.age}</p>
      <p><strong>Course:</strong> ${student.course}</p>

      <div class="card-buttons">

        <button class="intro-btn" onclick="showIntro(${index})">
          Introduce
        </button>

        <button class="delete-btn" onclick="deleteStudent(${index})">
          Delete
        </button>

      </div>
    `;

    studentList.appendChild(card);

  });

}

// Object Method Call

function showIntro(index){

  alert(students[index].introduce());

}

// Delete Student

function deleteStudent(index){

  students.splice(index, 1);

  displayStudents();

}

// Digital Clock using setInterval()

function updateClock(){

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  document.getElementById("clock").innerText =
    `${hours}:${minutes}:${seconds}`;

}

// Update every second

setInterval(updateClock, 1000);

updateClock();