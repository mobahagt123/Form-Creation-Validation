
async function fetchUserData() {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    
    let DataContainer = document.getElementById('api-data')
    
    try {
        const response = await fetch(apiUrl)
        const users = await response.json()
        DataContainer.innerHTML  = ''
        const userList = document.createElement('ul')

        users.forEach((user) => {
            username = user['name']
            const list = document.createElement('li')
            list.textContent = username
            userList.appendChild(list)    
        });

        DataContainer.appendChild(userList)
    
    }
    catch(error){
        error = 'Failed to load user data.'
        DataContainer.innerHTML = ''
        DataContainer.textContent = error
    
    }
        
    }


document.addEventListener('DOMContentLoaded', function(){
    fetchUserData()
})
