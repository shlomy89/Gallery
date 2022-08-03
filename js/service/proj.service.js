
var gProjects
var gProjectsId = 1
var gFormatDate = (new Date()).toLocaleString('he-IL')

function getProjectById(projId) {
  const proj = gProjects.find(proj => projId === proj.id)
  return proj
}


function createProjects() {
  var projects = [
    createProject('Mine Sweeper', 'Mine sweeper game', "img/portfolio/01-mine-sweeper.jpg", "https://shlomy89.github.io/Sprint1/"),
    createProject('Book Shop', 'Books shop management interface', "img/portfolio/02-books-shop.jpg", "https://shlomy89.github.io/Books-shop/"),
    createProject('Ball Game', 'Ball Game', "img/portfolio/03-ball-game.jpg", "https://shlomy89.github.io/BallGame/"),
    createProject('Touch the numbers', 'Touch Nums', "img/portfolio/04-touch-nums.jpg", "https://shlomy89.github.io/touch-nums/")
  ]
  gProjects = projects
  console.log('gProjects:', gProjects);
}

function createProject(name, title, img, url) {
  const proj = {
    id: gProjectsId++,
    name,
    title,
    desc: makeLorem(50),
    url,
    img,
    publishedAt: gFormatDate,
    labels: ["Matrixes", "keyboard events"],
  }
  return proj
}


