// // button functionality for signing up and storing login in Local Storage
document.getElementById('signUp').addEventListener('click', event => {
  event.preventDefault()
  isNameUnique()
})
function isNameUnique(username) {
  // console.log(username)
  //get all users
  axios.get("/api/users/") 
  .then(({data}) => {
    console.log(data)
    //go through array of users and check if matches any existing users
  for (i = 0; i < data.length; i++) {
    //if matches
    if(data[i].name === document.getElementById("newUsername").value) {
      //return error, and send back to homepage
      alert("Sorry username already exists... try again");
      console.log("false")
      location.reload()
    }
  }
  //if no match
    console.log("true") 
    //create new username
    axios.post('/api/users', {
    name: document.getElementById('newUsername').value
    })
      .then(({ data }) => {
      // console.log(data)
      //add key value pair to local storage
      localStorage.setItem('users', data.id)
      //change window to deals
      window.location = '/deals.html'
  })
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

