function internCard(response) {
  return `
    <div class="intern">
    <div class="card">
    <div class="container">
      <h4><b>Name: ${response.name}</b></h4>
      <p>Role: Intern</p>
      <p>ID: ${response.id}</p>
      <a href="mailto:${response.email}">email: ${response.email}</a>
      <p>School: ${response.school}></p>
    </div>
    </div>
  </div>
    `
}

module.exports = internCard;