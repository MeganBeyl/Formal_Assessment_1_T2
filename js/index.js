

addStudent = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subject = document.getElementById("subject").value;

    if(){
        userName.push(name);
        userEmail.push(email);
        userNumber.push(number);
        userSubject.push(subject);
        alert("Welcome " + name + "! Thank you for your interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number);
    } else {
        alert("Well, well, well...why didn't you want to sign up for our newsletter...you don't seem to be that interested " + name + " ! If you want to sign up, you better CHECK that newsletter box!");
    }

    console.log(userName);
    console.log(userEmail);
    console.log(userNumber);
    console.log(userSubject);

    document.getElementById("signUpForm").reset();
}