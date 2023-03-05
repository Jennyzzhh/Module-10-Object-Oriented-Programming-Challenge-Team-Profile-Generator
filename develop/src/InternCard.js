function internCard(response) {
  return `
    <div class="intern">
    <div class="card">
    <div class="container">
      <h4><b>${response.name}</b></h4>
      <p>${response.id}</p>
      <a href="mailto:${response.email}">email:${response.email}</a>
      <p>${response.school}></p>
    </div>
    </div>
  </div>
    `
}

module.exports = internCard;