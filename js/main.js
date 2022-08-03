console.log('Starting up');



$(function initPage() {
  $(createProjects)
  $(onRenderProj)
})

// .on('click', function (id) { getById(id) })

function onRenderProj() {
  const strHTMLs = gProjects.map(proj => `
      <div class="col-md-4 col-sm-6 portfolio-item">
            <a onclick="onRenderModal(${proj.id})" class="portfolio-link" data-toggle="modal" href="#portfolioModal">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i data-id="${proj.id}" class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src=${proj.img} alt="">
            </a>
            <div class="portfolio-caption">
              <h4>${proj.name}</h4>
              <p class="text-muted">${proj.title}</p>
            </div>
          </div>
      `
  )
  $('.projects-container').html(strHTMLs)
}



function onRenderModal(projId) {
  console.log('projId:', projId);
  var proj = getProjectById(projId)
  console.log('proj:', proj);

  //proj.name
  $('.proj-name').text(`${proj.name}`)

  //proj.title
  $('.proj-title').text(`${proj.title}`)

  //proj.content
  $('.proj-content').text(`${proj.desc}`)

  // img.src
  $('.modal-img').attr("src", `${proj.img}`)

  // img.link
  $('.img-link').attr("href", `${proj.url}`)

  //proj.publishedAt
  $('.published-at').text(`${proj.publishedAt}`)
}