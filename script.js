document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('registration-form')

    const feedbackDiv = this.getElementById('form-feedback')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const usernameValue = document.getElementById('username').value.trim()
        const emailValue = document.getElementById('email').value.trim()
        const passwordValue = document.getElementById('password').value.trim()

        let isValid = true
        let messages = []

        // username validation
        if(usernameValue.length < 3){
            isValid = false
            messages.push('username should not be less than 3 characters')
            
        }

        // validate email
        if(!/[@.])/.test(emailValue)){
            isValid = false
            messages.push('Please enter a valid email that contains: @ and . charcters')
        }

        // validate password
        if(passwordValue.length < 8){
            isValid = false
            messages.push('The password has to be 8 or more characters')
            
        }

        feedbackDiv.style.display = 'block'
        if(isValid){
            feedbackDiv.textContent = 'Registration successful!'
            feedbackDiv.style.color = '#28a745'

        } else {
            const errorMessages = messages.join('<br>')
            feedbackDiv.innerHTML = errorMessages
            feedbackDiv.style.color = "#dc3545"
            
        }

    })

})