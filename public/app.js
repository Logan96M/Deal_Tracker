const checkUser = () => {
    if (localStorage.getItem('user')) {
      axios.get(`/api/users/${localStorage.getItem('user')}`)
        .then(({ data }) => {
          
          localStorage.setItem('user', data.user.id)

          data.groceries.forEach(grocery => {
            let groceryElem = document.createElement('li')
            groceryElem.textContent = `
            ${grocery.name} | Quantity: ${grocery.quantity}
          `
            document.getElementById('groceries').append(groceryElem)
          })

          document.getElementById('signUpForm').style.display = 'none'
          document.getElementById('signInForm').style.display = 'none'
          document.getElementById('signOut').style.display = 'block'
        })
        .catch(err => console.error(err))
    }
  }

  document.getElementById('signIn').addEventListener('click', event => {
    event.preventDefault()
    axios.get(`/api/users/${document.getElementById('username').value}`)
      .then(({ data }) => {

        localStorage.setItem('user', data.user.id)

        data.groceries.forEach(grocery => {
          let groceryElem = document.createElement('li')
          groceryElem.textContent = `
            ${grocery.name} | Quantity: ${grocery.quantity}
          `
          document.getElementById('groceries').append(groceryElem)
        })

        document.getElementById('signUpForm').style.display = 'none'
        document.getElementById('signInForm').style.display = 'none'
        document.getElementById('signOut').style.display = 'block'
      })
      .catch(err => console.error(err))
  })
      
    document.getElementById('signOut').addEventListener('click', () => {
        localStorage.removeItem('user')
        // document.getElementById('groceries').innerHTML = ''
        document.getElementById('signUpForm').style.display = 'block'
        document.getElementById('signInForm').style.display = 'block'
        document.getElementById('signOut').style.display = 'none'
        })
      
          checkUser()