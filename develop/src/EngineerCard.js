function engineerCard(response) {
    return `
    <div class="engineer">
    <div class="card">
    <div class="container">
      <h4><b>Name: ${response.name}</b></h4>
      <p>Role: Engineer</p>
      <p>ID: ${response.id}</p>
      <a href="mailto:${response.email}">email: ${response.email}</a>
      <a href="https://github.com/${response.github}">github profile: ${response.github}</a>
    </div>
    </div>
  </div>
    `
}

module.exports = engineerCard;