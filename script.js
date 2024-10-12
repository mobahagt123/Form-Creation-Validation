document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('registration-form')

    const feedbackDiv = this.getElementById('form-feedback')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const username = document.getElementById('username').value.trim()
        const email = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value.trim()

        let isValid = true
        let messages = []

        // username validation
        if(username.length < 3){
            isValid = false
            messages.push('username should not be less than 3 characters')
            
        }

        // validate email
        if(!/[@.])/.test(email)){
            isValid = false
            messages.push('Please enter a valid email that contains: @ and . charcters')
        }

        // validate password
        if(password.length < 8){
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