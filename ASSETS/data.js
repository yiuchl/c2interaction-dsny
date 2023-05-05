// Base
function renderItems(collection) {
  const collectionList = document.getElementById("collection");

  console.log("data records in your JSON:", collection);

  collection.forEach((item) => {

    let collectionItems = document.querySelector(".collection");

    let coordWrapper = document.createElement("div");
    collectionItems.appendChild(coordWrapper)

    let content = document.createElement('div')
    content.classList.add('coord-content')
    coordWrapper.appendChild(content)

    let coords = document.createElement("h2");
    coords.classList.add('coord-title')
    coords.innerHTML = `(${item.LATITUDE}, ${item.LONGITUDE})`;
    content.appendChild(coords)

    let sheet = document.createElement("div");
    sheet.classList.add('sheet-wrapper')
    coordWrapper.appendChild(sheet)

    let sheetInfo =
      `
        <button onclick="toggle(this)">
        <canvas id="cv"></canvas>
        </button>

        <div class="sheet-info">

        <div id="arrow-left-2" class="close-btn x flip2">➔</div>
        <div class="sheet-head">
            <div>
                <h2 class="sheet-title">DSNY-GRAFFITI-TRACKING-MANHATTAN</h2>
            </div>
            <h2>Community Board</h2>
            <h3 class="bold">${item.COMMUNITY_BOARD}</h3>
            <hr>
        </div>

        <div class="line">&nbsp;</div>

        <div class="sheet-specifics">
            <div class="sheet-terms">
                <h2 class="">Police Precinct</h2>
                <h2 class="">City Council District</h2>
                <h2 class="">Created Date</h2>
                <h2 class="">Status</h2>
                <h2 class="">Resolution Action</h2>
                <h2 class="">Closed Date</h2>
            </div>
            <div class="sheet-description">
                <h2 class="sheet-description">${item.POLICE_PRECINCT}</h2>
                <h2 class="sheet-description">Number&nbsp;${item.CITY_COUNCIL_DISTRICT}</h2>
                <h2 class="sheet-description">${item.CREATED_DATE}</h2>
                <h2 class="sheet-description">${item.STATUS}</h2>
                <h2 class="sheet-description">${item.RESOLUTION_ACTION}</h2>
                <h2 class="sheet-description">${item.CLOSED_DATE}</h2>
            </div>
        </div>

        <div class="small-sheet-specifics">
          <div class="sheet-terms">

              <div class="small-term">
                  <h2 >Police Precinct</h2>
                  <h2 class="sheet-description">${item.POLICE_PRECINCT}</h2>
              </div>
              <div class="small-term">
                  <h2 class="">City Council District</h2>
                  <h2 class="sheet-description">Number&nbsp;${item.CITY_COUNCIL_DISTRICT}</h2>

              </div>
              <div class="small-term">
                  <h2 class="">Created Date</h2>
                  <h2 class="sheet-description">${item.CREATED_DATE}</h2>
              </div>
              <div class="small-term">
                  <h2 class="">Status</h2>
                  <h2 class="sheet-description">${item.STATUS}</h2>
              </div>
              <div class="small-term">
                  <h2 class="">Resolution Action</h2>
                  <h2 class="sheet-description">${item.RESOLUTION_ACTION}</h2>
              </div>
              <div class="small-term">
                  <h2 class="">Closed Date</h2>
                  <h2 class="sheet-description">${item.CLOSED_DATE}</h2>
              </div>

          </div>
        </div>

        </div>
    `
    sheet.insertAdjacentHTML("beforeEnd", sheetInfo)
    coordWrapper.appendChild(sheet)

    console.log("we ♡ interacion lab and studio");

    // Opens specific information about the coordinates
    content.addEventListener('click', () => {
      sheet.classList.add('is-open')
    })

    // canvas
    var canvas = document.getElementById('cv');
    // var page = document.getElementById('ra');
    var ctx = canvas.getContext('2d');
    var img = document.createElement('img');
    img.onload = function () {
      ctx.beginPath();
      ctx.drawImage(img, 0, 0);
      ctx.closePath();
      ctx.globalCompositeOperation = 'destination-out';
    }

    img.width = 489;
    img.height = 300;
    img.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipground.com%2Fimages%2Fsewer-clipart-7.jpg&f=1&nofb=1";

    function drawPoint(pointX, pointY) {
      var grd = ctx.createRadialGradient(pointX, pointY, 0, pointX, pointY, 50000000000);
      grd.addColorStop(0, "rgba(255,255,255,.6)");
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(pointX, pointY, 50, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
    }

    canvas.onmousemove = function (e) {
      drawPoint(e.clientX, e.clientY);
    }

    let toggle = button => {

      let canvas = document.getElementById("cv");
      let hidden = canvas.getAttribute("hidden");

      if (hidden) {
        canvas.removeAttribute("hidden");
        button.innerText = "Hide canvas";
      } else {
        canvas.setAttribute("hidden", "hidden");
        button.innerText = "Show canvas";
      }
    }

    // Hides the sheet on click
    sheet.addEventListener('click', () => {
      sheet.classList.remove('is-open')
      console.log("clicked")
    })
  });
}

// side navigation bar
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("hamburger").style.marginLeft = "0";
}

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "inline-block";
}
btn2.onclick = function () {
  modal2.style.display = "inline-block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
span2.onclick = function () {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// "Please, that's so fetch" retrieves Jason (gets the JSON data)
fetch("./ASSETS/2022.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (collection) {
    renderItems(collection);
  })

// text scamble
// classes container and scramble
let interval

const element = document.querySelector('.scramble')
const originalText = element.innerText

const randomInt = max => Math.floor(Math.random() * max)
const randomFromArray = array => array[randomInt(array.length)]

const scrambleText = text => {
  const chars = '*>⋆&@#✧.%$-_:/✿;?!'.split('')
  return text
    .split('')
    .map(x => randomInt(3) > 1 ? randomFromArray(chars) : x)
    .join('')
}

element.addEventListener('mouseover', () => {
  interval = setInterval(() =>
    element.innerText = scrambleText(originalText)
    , 100)
})

element.addEventListener('mouseout', () => {
  clearInterval(interval)
  element.innerText = originalText
})
