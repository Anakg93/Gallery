function goToPage(page) {
    location.replace(page)
}
function sendEmail() {
    let userMail = document.getElementById('form_mail').value;
    let userName = document.getElementById('form_name').value;
    let userQuestion = document.getElementById('form_question').value;

    let subject = 'Poruka korisnika ' + userName;
    let body = "Pitanje: " + userQuestion + "? Odgovoriti na mail " + userMail;

    Email.send({
      Host: "smtp.gmail.com",
      Username: 'facultyexamples@gmail.com',
      Password: 'sifra123sifra',
      To: 'ananikolicana3@gmail.com',
      From: 'facultyexamples@gmail.com',
      Subject: subject,
      Body: body,      
    })
      .then(function (message) {
        alert("It has been sent successfully")
      });
  }
  
  