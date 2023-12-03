let event=[
    {
        src: "asset/image/one.png",
        h3: "Tọa đàm Dịch Văn học dành cho SV định hướng",
        p: "Sáng ngày 13/4/2022, Khoa tiếng Italia đã tổ chức buổi. Tọa đàm Dịch văn học với sự tham gia của diễn giả. Nguyễn Xuân Hồng - Một dịch giả có nhiều tác phẩm dịch có uy tín. Khách mời của buổi tọa đàm là dịch giả, nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa."
    },
    {
        src: "asset/image/16.png",
        h3: "Chương trình hướng nghiệp giành cho các sinh viên",
        p: "Vào ngày 23/11/2020, Khoa tiếng Italia có tổ chức một chương trình đặc biệt giành cho các sinh viên với nhiều chương trình đặc biệt  . ọc với sự tham gia của diễn giả. Mọi người đã tham gia rất đông"
    }, {
        src: "asset/image/11.png",
        h3: "Hội thảo giành cho Sinh viên khoa tiếng Trung",
        p: "Ngày 20/11/2022, Khoa tiếng bắt đầu hội thảo. Tọa đàm Dịch văn học với sự tham gia của diễn giả. Chu Xuân Hiếu - Một dịch giả rất nổi tiếng . Khách mời của buổi tọa đàm là dịch giả, nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa."
    }

]
let str=''
  for (let i = 0; i < event.length; i++) {
     str += `
     <div class="event-content">
        <div class="event-content-image">
             <img src=${event[i].src} alt="">
        </div>
        <div class="even-news-content">
            <h3>${event[i].h3}</h3>
            <p>${event[i].p}</p>
            <div class="time">
                <div class="time-icon">
                    <i class="far fa-clock"><strong>21/10/2021</strong> </i>
                    <a href="">Xem thêm</a>
                </div>
            </div>
        </div>
    </div>`
  }
  document.getElementById('event-content').innerHTML=str

//   const slices = document.getElementsByClassName("event-content");
//   const currentSlices=document.getElementById('event-content')
//   let  slicesWidth=slices[0].offsetWidth
//   console.log(slicesWidth,1111);
//  let currentIndex=0;
//  let positionX=0
// function nextSlice() {
//     if (currentIndex < slices.length) {
//         positionX = positionX - slicesWidth;
//
//         currentSlices.style.transition = 'transform 0.3s ease-in-out';
//         currentSlices.style.transform = `translateX(${positionX}px)`;
//
//         currentIndex++;
//
//         if (currentIndex === slices.length) {
//             setTimeout(() => {
//                 currentSlices.style.transition = 'none';
//                 currentSlices.style.transform = 'translateX(0)';
//                 positionX = 0;
//                 currentIndex = 0;
//             }, 300);
//         }
//     }
// }
// function previousSlice() {
//     if (currentIndex > 0) {
//         currentIndex--;
//
//         positionX = -positionX + slicesWidth*slices.length;
//
//         currentSlices.style.transition = 'transform 0.3s ease-in-out';
//         currentSlices.style.transform = `translateX(${positionX}px)`;
//
//         if (currentIndex === 0) {
//             setTimeout(() => {
//                 currentSlices.style.transition = 'none';
//                 currentSlices.style.transform = `translateX(${slicesWidth * -1}px)`;
//                 positionX = slicesWidth * -1;
//             }, 300);
//         }
//     }
// }
//
