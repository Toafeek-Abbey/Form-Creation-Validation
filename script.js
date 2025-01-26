document.addEventListener(DOMContentLoaded, function () {


       const form = document.getElementById('registration-form')
       const feedbackDiv = document.getElementById('form-feedback')   
       formaddEventListener('submit',  function () {
         event.preventDefault()
       } )
       const username = document.getElementById('username').value.trim()
       const email = document.getElementById('email').value.trim()
       const password = document.getElementById('password').value.trim()
       var isValid = true
       const messages = []
       if (username.length < 3 ) {
         isValid = false
         messages.push('incorrect username')
       }
       if (email.includes('@') && email.includes('.')) {
         isValid = false
         messages.push('incorrect email')
       }
       if (password.length < 8 ) {
         isValid = false
         messages.push('incorrect password')
       }
       feedbackDiv.style.display = block
       if (isValid == true ) {
         feedbackDiv.textContent = "Registration successful!"
         feedbackDiv.style.color = "#28a745"
       }
       if (isValid == false ) {
         feedbackDiv.innerHTML = messages.join('<br>')
         feedbackDiv.style.color = "#dc3545"
       }
}
 )
