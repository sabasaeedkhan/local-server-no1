var allStudents = [];

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var regNumber = document.getElementById("regNumber").value;
    var course = document.getElementById("course").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    
    addStudent(name, regNumber, course, contact, email);
    document.getElementById("studentForm").reset();
});

function addStudent(name, regNumber, course, contact, email) {
    var student = {
        name: name,
        regNumber: regNumber,
        course: course,
        contact: contact,
        email: email
    };
    allStudents.push(student);
}

function searchStudent() {
    var searchName = document.getElementById("searchName").value;
    var foundStudent = allStudents.find(function(student) {
        return student.name === searchName;
    });

    var studentInfoDiv = document.getElementById("studentInfo");
    if (foundStudent) {
        studentInfoDiv.innerHTML = `
            <h2>Student Information</h2>
            <p><strong>Name:</strong> ${foundStudent.name}</p>
            <p><strong>Registration Number:</strong> ${foundStudent.regNumber}</p>
            <p><strong>Course:</strong> ${foundStudent.course}</p>
            <p><strong>Contact Number:</strong> ${foundStudent.contact}</p>
            <p><strong>Email Address:</strong> ${foundStudent.email}</p>
        `;
    } else {
        studentInfoDiv.innerHTML = "<p>Student not found.</p>";
    }
}