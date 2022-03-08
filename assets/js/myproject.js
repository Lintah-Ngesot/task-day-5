// deklarasi u/ push
let projects = []; //==> 3

// deklarasi function (onsubmit). (event:parameter => stop realod ketika submit)
function addProject(event)  {         //==> 1
  
  event.preventDefault(); //untuk penghentian reload yg berhubungan dengan onsubmit

  // panggil
  let inputTitle = document.getElementById("input-project-title").value; 
  let startdate = document.getElementById("input-startdate").value;
  let enddate = document.getElementById("input-enddate").value;
  let inputDescription = document.getElementById("input-project-description").value;
  let inputCategories = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value); 
  // panggil gambar
  let img = document.getElementById("input-project-image");
  // ambil dr url yg diterima
  img = URL.createObjectURL(img.files[0]) ; 

  // bungkus dalam objek
  let project = { 
    // authors : "admin", 
    inputTitle,
    startdate,
    enddate,
    inputDescription,
    inputCategories,
    img,
    }

    // simpan di array
    projects.push(project) ; //untuk kirim data di akhir
    
    
    renderproject(); //==> 4
    console.table(project)
}

function renderproject() {
  // akses array, panggil objeknya
  console.table(projects)
  // console.log(projects[0].inputTitle) 
  let lengthData = projects.length ;
  let projectContainer = document.getElementById("list-project") ; 

  projectContainer.innerHTML = firstProjectContent();
  //looping/perulangan ==> 5
  for (let i = 0; i < lengthData; i++) {
    projectContainer.innerHTML += `
      <div class="list-project">    
        <div class="header">
          <img src="assets/img/cs1.jpg" alt="" width="100%">
          <a href="projectdetail.html" target="_blank"> <b>${projects[i].inputTitle}</b></a><br>
          <small>Duration :  ${durationTime(projects[i].startdate, projects[i].enddate)}</small>
        </div>
        <div class="content">
          <p>${projects[i].inputDescription}</p>
          <p class="content-awesome">
            <i class="${projects[i].inputCategories[0]}"></i>
            <i class="${projects[i].inputCategories[1]}"></i>
            <i class="${projects[i].inputCategories[2]}"></i>
            <i class="${projects[i].inputCategories[3]}"></i>
          </p>
        </div>
        <div class="footer">
          <div class="edit">
            <a href="#">edit</a>
          </div>
          <div class="delete">
            <a href="#">delete</a>
          </div>
        </div>  
      </div>
     `
  }; 
}

function firstProjectContent() {
  return `
    <div class="list-project">
      <div class="header">
        <img src="assets/img/cs1.jpg" alt=""  width="100%">
        <p> <b> Dumbways Mobile App - 2022</b></p>
        <small>Duration : 3 Month</small>
      </div>
      <div class="content">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,orem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,orem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,</p>
        <p class="content-awesome">
          <i class="fab fa-google-play"></i>
          <i class="fab fa-android"></i>
          <i class="fab fa-java"></i>
        </p>
      </div>
      <div class="footer">
        <div class="edit">
          <a href="#">edit</a>
        </div>
        <div class="delete">
          <a href="#">delete</a>
        </div>
      </div>
    </div>`
}


//conver durasi
function durationTime(startdate, enddate) {
  // Convert Start - End Date to Days
  let newStartDate = new Date(startdate)
  let newEndDate = new Date(enddate)
  let duration = Math.abs(newStartDate - newEndDate)

  let day = Math.floor(duration / (1000 * 60 * 60 * 24))

  if (day < 30) {
    return day + ` days `
  } else {
    let diffMonths = Math.ceil(duration / (1000 * 60 * 60 * 24 * 30));
    if (diffMonths >= 1) {
      return diffMonths + ` month `
    } else {
      let diffYears = Math.ceil(duration / (1000 * 60 * 60 * 24 * 30 * 12)); // ms dlm 1 thn
      if (diffYears >= 1) {
        return diffMonths + ` year `}}
  }
}


// function getDistanceTime(startdate, enddate) {
//   const mathMonth = 30;
//   const mathYear = mathMonth * 12;
//   const durationTime = new Date(enddate) - new Date(startdate);
//   const DistanceOneDay = durationTime / (60 * 60 * 24 * 1000);
//   const DurationYear = Math.floor(DistanceOneDay / mathYear);
//   const DurationMonth = Math.floor((DistanceOneDay % mathYear) / mathMonth);
//   const DurationWeek = Math.floor(((DistanceOneDay % mathYear) % mathMonth) / 7);
//   const DurationDay = ((DistanceOneDay % mathYear) % mathMonth) % 7;

//   let duration = "";
//       if (DurationYear > 0) {duration += DurationYear + " Year, ";}
//       if (DurationMonth > 0) {duration += DurationMonth + " Month, ";}
//       if (DurationWeek > 0) {duration += DurationWeek + " Week, ";}
//       if (DurationDay > 0) {duration += DurationDay + " Day";}
//       return duration;}