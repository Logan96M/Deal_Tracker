// // button functionality for signing up and storing login in Local Storage
document.getElementById('signUp').addEventListener('click', event => {
  
  event.preventDefault()
  isNameUnique()

})
  


function isNameUnique(username) {

  console.log(username)
  axios.get("/api/users/") 

  .then(({data}) => {

    console.log(data)
  for (i = 0; i < data.length; i++) {
    if(data[i].name === document.getElementById("newUsername").value) {
      alert("Sorry username already exists... try again");
      console.log("false")
      location.reload()
      
    }
  }}) 
    console.log("true") 
     axios.post('/api/users', {
    name: document.getElementById('newUsername').value
    })
    .then(({ data }) => {
      // console.log(data)
      localStorage.setItem('users', data.id)
     window.location = '/deals.html'
  })

  .catch(err => console.error(err))
}

// button functionality for signing in and storing login in Local Storage
document.getElementById('signIn').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`api/login/${document.getElementById('username').value}`)
    .then(({ data }) => {
      // console.log(data)
      localStorage.setItem('users', data.id)
      window.location = '/deals.html'
    })
    .catch(err => console.error(err))
})

