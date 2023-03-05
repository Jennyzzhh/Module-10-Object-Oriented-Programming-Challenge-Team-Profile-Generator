function managerCard(response) {
  return `
    <div class="Manager">
    <div class="card">
    <div class="container">
      <h4><b>Name: ${response.name}</b></h4>
      <p>Role: Manager</p>
      <p>ID: ${response.id}</p>
      <a href="mailto:${response.email}">email: ${response.email}</a>
      <p>OfficeNumber: ${response.officenumber}</p>
    </div>
    </div>
  </div>
    `
}

module.exports = managerCard;