function internCard(response) {
    return `
    <div class="intern">
    <img src="img_avatar.png" alt="Avatar" style="width:100%">
    <div class="container">
      <h4><b>${response.name}</b></h4>
      <p>${response.id}</p>
      <p>${response.email}</p>
      <p>${response.school}</p>
    </div>
  </div>
    `
}

module.exports = internCard;