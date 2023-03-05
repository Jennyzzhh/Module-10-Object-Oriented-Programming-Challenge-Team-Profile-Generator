function engineerCard(response) {
    return `
    <div class="engineer">
    <div class="card">
    <div class="container">
      <h4><b>${response.name}</b></h4>
      <p>${response.id}</p>
      <a href="mailto:${response.email}">${response.email}</a>
      <p>${response.github}</p>
    </div>
    </div>
  </div>
    `
}

module.exports = engineerCard;