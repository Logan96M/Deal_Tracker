//define currentId
let currentId = 0
//event listener for signing out the user
document.getElementById('signOut').addEventListener('click', event => {
  event.preventDefault()
  localStorage.clear();
  window.location = '/index.html'
})
// Listen for click on "+ Add a Deal" button on 'Lead' stage and open modal with fields for creating a new deal
document.getElementById('addDealButton').addEventListener('click', event => {
  event.preventDefault()
  document.getElementById('updateDeal').style.display = 'none'
  document.getElementById('submitDeal').style.display = 'inline'
  document.getElementById('deleteDeal').style.display = 'none'
  document.getElementById('dealName').value = ''
  document.getElementById('dealValue').value = ''
  document.getElementById('dealOrg').value = ''
  document.getElementById('dealContact').value = ''
  document.getElementById('dealPhone').value = ''
  document.getElementById('dealEmail').value = ''
  document.getElementById('dealNotes').value = ''
  document.getElementById('dealStage').value = 'Lead'
  //show modal
  $('.ui.modal').modal('show')
  // Give functionality to dropdown in form:
  $('.selection.dropdown')
    .dropdown()
    ;
})
//function to alert to fill out all inputs
function validateForm() {
  var x = document.forms["DealForm"]["dealName"].value;
  if (x == "") {
      alert("Deal name cannot be blank.");
      return false;
  }
  var y = document.forms["DealForm"]["dealValue"].value;
  if (y == "") {
      alert("Deal value cannot be blank.");
      return false;
  }
}
//button functionality for adding a new deal for specific user
  document.getElementById('submitDeal').addEventListener('click', event => {
    event.preventDefault()
    //run function for Deal Name input validation
    validateForm()
    //create new deal with input values
    axios.post(`api/deals`, {
      dealName: document.getElementById('dealName').value,
      value: document.getElementById('dealValue').value,
      organization: document.getElementById('dealOrg').value,
      contact: document.getElementById('dealContact').value,
      phone: document.getElementById('dealPhone').value,
      email: document.getElementById('dealEmail').value,
      notes: document.getElementById('dealNotes').value,
      stage: document.getElementById('dealStage').value,
      userId: localStorage.getItem("users")
    })
    //create new deal element with data values
    .then(({data}) => {
      console.log(data)
      let dealElem = document.createElement('div')
      dealElem.innerHTML = `
      <div class="ui raised card" draggable="true" ondragstart="drag(event)" id="${data.id}">
      <div class="content">
        <div class="header">${data.dealName}</div>
          <div class="description">
            <h5>Value: ${data.value}</h5>
          </div>
        </div>
          <div class="extra content">
          <button class="mini ui primary button" id="edit${data.id}" onclick="displayDeal(${data.id})">Edit Deal</button>
          </div>
    </div>`
      console.log(dealElem)
      //append to page
      document.getElementById(`${data.stage}`).append(dealElem)
    })
    .catch(err => console.log(err))
  })
//show all deals for user
function showDealsbyUser(userId){
  //define userId
   userId = localStorage.getItem("users")
  //  console.log(userId)
  //get all deals by this userId
  axios.get("/api/deals/" + userId)  
  .then(({data}) => {
    console.log(data)
    //define data as array
let array = data
//run through array and create objects from data
array.map(data=>{
  let dealElem = document.createElement('div')
  dealElem.innerHTML = `
  <div class="ui raised card" draggable="true" ondragstart="drag(event)" id="${data.id}">
    <div class="content">
      <div class="header">${data.dealName}</div>
        <div class="description">
          <h5>Value: ${data.value}</h5>
        </div>
      </div>
        <div class="extra content">
        <button class="mini ui primary button" id="edit${data.id}" onclick="displayDeal(${data.id})">Edit Deal</button>
        </div>
  </div>`
  console.log(dealElem)
  //append to page
  document.getElementById(`${data.stage}`).append(dealElem)
})
})
}
//function to get all deals by username on page load
showDealsbyUser(localStorage.getItem("users"))
//button functionality for edit/update deal for specific user
const displayDeal = (id => {
    event.preventDefault()
    //redefine currentId as id
    currentId = id
    console.log(currentId)
    //show modal
    $('.ui.modal').modal('show')
    //update display buttons
    document.getElementById('updateDeal').style.display = 'inline'
    document.getElementById('deleteDeal').style.display = 'inline'
    document.getElementById('submitDeal').style.display = 'none'
    document.getElementById('stageDiv').style.display = 'none'
    //get deal by id
    axios.get("api/deal/" + id)
    .then(({data}) => {
      JSON.stringify(data)
      console.log(data) 
      //display all existing information within input areas for editing modal
    document.getElementById('dealName').value = data.dealName
    document.getElementById('dealValue').value = data.value
    document.getElementById('dealOrg').value = data.organization
    document.getElementById('dealContact').value = data.contact
    document.getElementById('dealPhone').value = data.phone
    document.getElementById('dealEmail').value = data.email
    document.getElementById('dealNotes').value = data.notes
    document.getElementById('dealStage').value = data.stage
    })
    .catch(err => console.log(err))
  })
//event listener for updating deal
document.getElementById("updateDeal").addEventListener("click", event => {
  console.log(currentId)
  //update deal by id
  axios.put("api/deal/" + currentId, {
      dealName: document.getElementById('dealName').value,
      value: document.getElementById('dealValue').value,
      organization: document.getElementById('dealOrg').value,
      contact: document.getElementById('dealContact').value,
      phone: document.getElementById('dealPhone').value,
      email: document.getElementById('dealEmail').value,
      notes: document.getElementById('dealNotes').value,
      stage: document.getElementById('dealStage').value,
      userId: localStorage.getItem("users")
})
//reload page with this updated deal
  location.reload()
  .catch(err => console.log(err))
})
  //button functionality for delete deal for specific user
  document.getElementById("deleteDeal").addEventListener("click", event => {
    event.preventDefault()
    // console.log(currentId)
    //delete this deal by id
    axios.delete("api/deal/" + currentId) 
    //reload page with updated deals
    location.reload()
    .catch(err => console.log(err))
})


