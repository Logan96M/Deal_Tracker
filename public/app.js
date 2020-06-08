let currentId = 0
//event listener for signing out the user
document.getElementById('signOut').addEventListener('click', event => {
  event.preventDefault()
  localStorage.clear();
  window.location = '/index.html'
})

// Listen for click on "+ Add a Deal" button on 'Lead' stage and open modal with fields for creating a new deal:
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
  $('.ui.modal').modal('show')
  // Give functionality to dropdown in form:
  $('.selection.dropdown')
    .dropdown()
    ;
})

//button functionality for adding a new deal for specific user
  document.getElementById('submitDeal').addEventListener('click', event => {
    event.preventDefault()
    // document.getElementById(`editDeal`).style.display = 'block'
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
      document.getElementById(`${data.stage}`).append(dealElem)
    })
    .catch(err => console.log(err))
  })
//show all deals for user
function showDealsbyUser(userId){
   userId = localStorage.getItem("users")
   console.log(userId)
  axios.get("/api/deals/" + userId)  
  .then(({data}) => {
    console.log(data)
let array = data
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
  document.getElementById(`${data.stage}`).append(dealElem)
})
})

}

showDealsbyUser(localStorage.getItem("users"))

  //button functionality for edit/update deal for specific user
const displayDeal = (id => {
    event.preventDefault()
    currentId = id
    console.log(currentId)
    $('.ui.modal').modal('show')
    document.getElementById('updateDeal').style.display = 'inline'
    document.getElementById('submitDeal').style.display = 'none'
    document.getElementById('stageDiv').style.display = 'none'
    axios.get("api/deal/" + id)
    .then(({data}) => {
      JSON.stringify(data)
      console.log(data) 
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

document.getElementById("updateDeal").addEventListener("click", event => {
  console.log(currentId)
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
  location.reload()
  .catch(err => console.log(err))
})
  
  

  //button functionality for delete deal for specific user
  document.getElementById("deleteDeal").addEventListener("click", event => {
    event.preventDefault()
    console.log(currentId)
   console.log("ping", currentId)
    axios.delete("api/deal/" + currentId) 
    location.reload()
    .catch(err => console.log(err))
})


