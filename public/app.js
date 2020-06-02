document.getElementById('signUp').addEventListener('click', event => {
    event.preventDefault()
    axios.post('/api/users', {
      name: document.getElementById('newUsername').value
    })
      .then(({ data }) => {
        // console.log(data)
        localStorage.setItem('users', data.id)
        window.location = '/deals.html'
      })
      .catch(err => console.error(err))
  })

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

//button functionality for adding a new deal for specific user
  document.getElementById('addDeal').addEventListener('click', event => {
    event.preventDefault()
    axios.post(`api/users/:id`, {
      dealName: document.getElementById('dealName').value,
      value: document.getElementById('dealValue').value,
      organization: document.getElementById('dealOrg').value,
      contact: document.getElementById('dealContact').value,
      phone: document.getElementById('dealPhone').value,
      email: document.getElementById('dealEmail').value,
      notes: document.getElementById('dealNotes').value,
      stage: document.getElementById('dealStage').value,
      userId: localStorage.getItem(data.id)
    })
    .then(({data}) => {
      let dealElem = document.createElement('li')
      petElem.textContent = `
      <div class="ui raised card" draggable="true" ondragstart="drag(event)" id="deal1">
        <div class="content">
          <div class="header">${document.getElementById('dealName').value}</div>
            <div class="description">
              <h5>Value: ${document.getElementById('dealValue').value}</h5>
            </div>
          </div>
            <div class="extra content">
              <p><strong>Organization: </strong>${document.getElementById('dealOrg').value}</p>
              <p><strong>Contact: </strong>${document.getElementById('dealContact').value}</p>
              <p><strong>Phone: </strong>${document.getElementById('dealPhone').value}</p>
              <p><strong>Email: </strong>${document.getElementById('dealEmail').value}</p>
              <p><strong>Notes: </strong>${document.getElementById('dealNotes').value}</p>
            </div>
      </div>`
      document.getElementById(`${dealStage}`).append(dealElem)
      document.getElementById('dealName').value = ''
      document.getElementById('dealValue').value = ''
      document.getElementById('dealOrg').value = ''
      document.getElementById('dealContact').value = ''
      document.getElementById('dealPhone').value = ''
      document.getElementById('dealEmail').value = ''
      document.getElementById('dealNotes').value = ''
      document.getElementById('dealStage').value = ''
      location.reload()
    })
    .catch(err => console.log(err))
  })

  //button functionality for edit/update deal for specific user
  document.getElementById('editDeal').addEventListener('click', event => {
    event.preventDefault()
    axios.put(`api/users/:id`, {
      dealName: document.getElementById('dealName').value,
      value: document.getElementById('dealValue').value,
      organization: document.getElementById('dealOrg').value,
      contact: document.getElementById('dealContact').value,
      phone: document.getElementById('dealPhone').value,
      email: document.getElementById('dealEmail').value,
      notes: document.getElementById('dealNotes').value,
      stage: document.getElementById('dealStage').value,
      userId: localStorage.getItem(data.id)
    })
    .then(({data}) => {
      location.reload()
    })
    .catch(err => console.log(err))
  })

  //button functionality for delete deal for specific user
  document.getElementById('editDeal').addEventListener('click', event => {
    event.preventDefault()
    axios.delete(`api/deals/:id`, {
      dealName: document.getElementById('dealName').value,
      value: document.getElementById('dealValue').value,
      organization: document.getElementById('dealOrg').value,
      contact: document.getElementById('dealContact').value,
      phone: document.getElementById('dealPhone').value,
      email: document.getElementById('dealEmail').value,
      notes: document.getElementById('dealNotes').value,
      stage: document.getElementById('dealStage').value,
      userId: localStorage.getItem(data.id)
    })
    .then(({data}) => {
      location.reload()
    })
    .catch(err => console.log(err))
  })