function managerCard(response) {
  return `
    <div class="Manager">
    <div class="card">
    <div class="container">
      <h4><b>${response.name}</b></h4>
      <p>${response.id}</p>
      <a href="mailto:${response.email}">${response.email}</a>
      <p>${response.officenumber}</p>
    </div>
    </div>
  </div>
    `
}

module.exports = managerCard;