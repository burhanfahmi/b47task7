// let namaSiswa1="fahmi";
// let namaSiswa2="budi";
// let namaSiswa3="salsa";

// console.log(`nama saya ${namaSiswa1}`);
// console.log(`nama saya ${namaSiswa2}`);
// console.log(`nama saya ${namaSiswa3}`);

// =========ARRAY=========
// let namaSiswa = ["fahmi","budi","salsa"];
// console.log(namaSiswa);
// console.log(namaSiswa[2]);
// console.log(namaSiswa[0]);

//========OBJECT=======
// let nama = "Fahmi burhan";
// let usia = 24;
// let alamat = "Kota tangerang";

// console.log(nama);
// console.log(usia);
// console.log(alamat);

// let dataMahasiswa1={
//     nama:"Fahmi Burhan",
//     usia:24,
//     alamat: "Kota tangerang",
// };
// let dataMahasiswa2={
//     nama:"Wahyudin",
//     usia: 25,
//     alamat:"Jakarta Barat",
// };
// let dataMahasiswa3={
//     nama:"Bunga Lestari",
//     usia:26,
//     alamat:"Jakarta Timur",
// };
// let dataMahasiswa4={
//     nama:"Fatur",
//     usia:26,
//     alamat:"Bogor Selatan"
// };

// console.log(dataMahasiswa1);
// console.log(dataMahasiswa2);
// console.log(dataMahasiswa3);
// console.log(dataMahasiswa4);

//=========ARRAY OF OBJECT======
// let dataCaleg=[
//     {nama:"Jok Widodo",alamat:"Solo",koalisi:"Partai PDI"},
//     {nama:"Anis Baswedan",alamat:"Jakarta Barat",koalisi:"Partai Nasdem"},
//     {nama:"Prabowo",alamat:"Jakarta Timur",koalisi:"Parta Gerinda"}
// ];
// console.log(dataCaleg);

// membuat array kosong
let myProject = [];

function projectPost(event) {
    // untuk menghilangkan refresh atau reload
    event.preventDefault();
    // untuk memasukan elemen berdasarkan id dengamn nilai ( value ) yang diinput ke variable
    let projectName = document.getElementById('input-title').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let message = document.getElementById('input-textarea').value;
    let image = document.getElementById('input-image').files;

    //  untuk memasukan icon kedalam variabel
    let nodeJs = '<i class="fa-brands fa-node"></i>';
    let javaScript = '<i class="fa-brands fa-js"></i>';
    let reactJs = '<i class="fa-brands fa-react"></i>';
    let golang = '<i class="fa-brands fa-golang"></i>';

    //  untuk memasukan element berasarkan id dengan checkbox yang dipilih kedalam variable
    let iconNode = document.getElementById('node').checked ? nodeJs : "";
    let iconJavascript = document.getElementById('javascript').checked ? javaScript : "";
    let iconreact = document.getElementById('react').checked ? reactJs : "";
    let iconGolang = document.getElementById('golang').checked ? golang : "";

    // membuat nama nama bulan  
    let monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ]

    // perhitungan durasi project
    startDate = new Date(startDate);
    let date = startDate.getDate();
    let month = startDate.getMonth();
    month = monthNames[month];
    let year = startDate.getFullYear();

    endDate = new Date(endDate);
    let enddate = endDate.getDate();
    let endmonth = endDate.getMonth();
    endmonth = monthNames[endmonth];
    let endyear = endDate.getFullYear();

    let duration = endDate - startDate;
    let millisecond = 1000; // 1 detik sama dengan 1000 milidetik
    let secondInHours = 3600; // detik dalam jam = 1 jam : 3600 detik
    let hoursInDay = 24;// satu hari 24 jam



    let totalHari = Math.floor(duration / (millisecond * secondInHours * hoursInDay));
    let dayInMonth = Math.floor(totalHari / (30));
    let sisaDay = totalHari - (dayInMonth * 30);
    let monthStr = sisaDay + " day";
    if (dayInMonth > 0) {
        monthStr = dayInMonth + " month " + monthStr
    }
    // membuat url image 
    image = URL.createObjectURL(image[0]);
    console.log(image);

    // membuat object
    let projectView = {
        projectName,
        startDate,
        endDate,
        date,
        month,
        year,
        enddate,
        endmonth,
        endyear,
        monthStr,
        // postAt :new Date(),
        // auhor :"fahmi burhan",
        message,
        iconNode,
        iconreact,
        iconJavascript,
        iconGolang,
        image,
    };
    // memasukan value kedalam array 
    myProject.push(projectView);
    console.log(myProject);
    // memanggil function ketika blok project ditambahkan
    renderProject();

}

function renderProject() {
    document.getElementById('content').innerHTML = "";

    for (let i = 0; i < myProject.length; i++) {
        document.getElementById('content').innerHTML += `

        <div class="card">
        <div class="galery">
            <img src="${myProject[i].image}" alt="image">
            <div>

            <h3 ><a href="blog_detail.html">${myProject[i].projectName}</a></h3>
            <div>
                
            </div>
            <p>${myProject[i].date} ${myProject[i].month} ${myProject[i].year} - ${myProject[i].enddate} ${myProject[i].endmonth} ${myProject[i].endyear} (${myProject[i].monthStr})</p>
            <p class="durasi-1">${myProject[i].message}</p>
            <div class="icon1">
                ${myProject[i].iconNode}
                ${myProject[i].iconreact}
                ${myProject[i].iconJavascript} 
                ${myProject[i].iconGolang}
            </div>
            <div class="btn-group">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>

             </div>
        </div> 
    </div>
     `;
    }
}

// function getFullTime(time){
//     // console.log("get full time")
//     // let time = new Date();
//     // console.log(time);
//     let montName =[
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Set",
//         "Oct",
//         "Nov",
//         "Des",

//     ];

//     let date =time.getDate();
//     let montIndex= time.getMonth();
//     let year =time.getYear=time.getFullYear();
//     let hours = time.getHours();
//     let minutes=time.getMinutes();

//     if(hours <= 10){
//         hours ="0" + hours;
//     }else if(minutes <=10){
//         minutes="0" + minutes;
//     }

//     return `${date} ${montName[montIndex]} ${year} ${hours}":"${minutes} WIB`;
// }

// getFullTime();










