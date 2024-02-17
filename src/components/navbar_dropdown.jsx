// const Exhibitions__dropper = document.querySelector(".Exhibitions__dropper");


// Exhibitions__dropper.addEventListener("mouseenter", function(event) {
//     const ul = event.target.childNodes[3];
//     ul.style.display = "block";
// })

// import React from 'react';

// const navbar_dropdown = () => {
//     return (
//         <div>

//         </div>
//     );
// };


// export default navbar_dropdown;

import NavStyles from "../Styles/NavbarStyles.module.css";
import React, { useEffect } from 'react';

const Navbar_dropdown = ({ toggelListItem }) => {
  useEffect(() => {
    const dropdownToggles = document.querySelectorAll(`.${NavStyles.Exhibitions__dropper}`);
    const dropdown = document.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
    if (toggelListItem) {
      // console.log("true")
      dropdownToggles.forEach(toggle => {
        // console.log("true")
        toggle.addEventListener("mouseenter", handleMouseEnter);
        toggle.addEventListener("mouseleave", handleMouseLeave);
        dropdown.style.animation = `${NavStyles.showUp} 0.5s 1`;
      });
    }

    return () => {
      if (toggelListItem) {
        // console.log("false")
        dropdownToggles.forEach(toggle => {
          // console.log("false")
          toggle.removeEventListener("mouseenter", handleMouseEnter);
          toggle.removeEventListener("mouseleave", handleMouseLeave);
        });
      }
    };
  }, [toggelListItem]);

  function handleMouseEnter() {
    const dropdown = this.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
    if (dropdown) {
      dropdown.style.display = "flex";
    }
  }

  function handleMouseLeave() {
    const dropdown = this.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
    if (dropdown) {
      dropdown.style.display = "none";
    }
  }

  return null;
};

export default Navbar_dropdown;




// import NavStyles from "../Styles/NavbarStyles.module.css";ssssssssssssssssssssss
// import React, { useEffect } from 'react';

// const Navbar_dropdown = ({ toggelListItem }) => {
//     // useEffect(() =>{

//     // })
//     const dropdownToggles = document.querySelectorAll(`.${NavStyles.Exhibitions__dropper}`);
//     useEffect(() => {
//         if (toggelListItem) {
//             dropdownToggles.forEach(toggle => {
//                 toggle.removeEventListener("mouseenter", handleMouseEnter);
//                 toggle.removeEventListener("mouseleave", handleMouseLeave);

//                 const dropdown = toggle.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
//                 if(dropdown){
//                     console.log("is truinnnnnng");
//                 }
//                 dropdown.style.display = "none";
//             })
//             console.log("is true");
//             // Add your logic here when toggleListItem is true
//         } else {
//             console.log("false")
//             dropdownToggles.forEach(toggle => {
//                 const dropdown = toggle.querySelector(`${NavStyles.item__dropdown__wrapper}`);
//                 // handleMouseEnter.call(toggle)
//                 toggle.addEventListener("mouseenter", handleMouseEnter);
//                 toggle.addEventListener("mouseleave", handleMouseLeave);
                
//                 if(dropdown){
//                     console.log("is truinnnnnng");
//                 }
//                 dropdown.style.display = "block";

//             });
//             //   console.log("show");

//             //   dropdownToggles.forEach(toggle => {
//             //     toggle.addEventListener("mouseenter", function () {
//             //       const dropdown = this.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
//             //       dropdown.style.display = "block";
//             //       dropdown.style.animation = `${NavStyles.showUp} 0.5s 1`;
//             //     });

//             //     toggle.addEventListener("mouseleave", function () {
//             //       const dropdown = this.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
//             //       dropdown.classList.remove("animate");
//             //       dropdown.classList.add("reverse-animate");
//             //       dropdown.style.display = "none";
//             //     });
//             //   });
//         }
//         // return null;
//     }, [toggelListItem]);

//     // return null;

//     // console.log("new content");

// };

// const handleMouseEnter = () => {
//     const dropdown = this.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
//     dropdown.style.display = "block";  
//     dropdown.style.animation = `${NavStyles.showUp} 0.5s 1`;
// }

// const handleMouseLeave = () => {
//     const dropdown = this.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
//     dropdown.classList.remove("animate");
//     dropdown.classList.add("reverse-animate");
//     dropdown.style.display = "none";
// }

// export default Navbar_dropdown;

// document.addEventListener("DOMContentLoaded", function () {
//     const dropdownToggles = this.querySelectorAll(`.${NavStyles.Exhibitions__dropper}`);
//     // const ss = document.querySelector(`.${NavStyles.hiiii}`);
//     // ss.style.color = "blue";

//     dropdownToggles.forEach(toggle => {
//         toggle.addEventListener("mouseenter", function () {
//             // console.log("Mouse enter event triggered");
//             const dropdown = this.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
//             dropdown.style.display = "block";
//             dropdown.style.animation = `${NavStyles.showUp} 0.5s 1`;
//             // dropdown.classList.add(``)
//         });

//         toggle.addEventListener("mouseleave", function () {
//             const dropdown = this.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
//             // dropdown.style.animation = `${NavStyles.showUp} 0.5s 1 reverse`;
//             dropdown.classList.remove("animate"); // Remove the original animation class
//             dropdown.classList.add("reverse-animate");
//             dropdown.style.display = "none";
//         });
//     });
// });






// const test = document.querySelectorAll(".hithere a");
// test.forEach(ulzzzz => {
//     ulzzzz.style.color = "yellow";
// })


// const newLet = document.querySelectorAll(".hi_hello a");
// newLet.forEach(part => {

//     part.style.color = "blue";
// })


// const getAll = document.querySelector(".isAll");
// // Apply the color to each li element


// getAll.addEventListener('mouseenter', function (e) {
//     const ul = e.target.childNodes[3];
//     ul.style.animation = 'showUp 0.35s 1';
//     ul.style.display = 'block';
// });

// const test = document.getElementById("hello");
// test.style.color="yellow";



// const selectUl = document.querySelectorAll("#list__item");
// selectUl.forEach(ul => {
//     ul.style.color = "yellow";
// });

// const test = document.querySelectorAll("#list__item");
// test.forEach(ul=>{
//     ul.style.color = "yellow";
// })

// // const getAll = document.querySelector(".isAll");
// // // Apply the color to each li element


// // getAll.addEventListener('mouseenter', function (e) {
// //     const ul = e.target.childNodes[3];
// //     ul.style.animation = 'showUp 0.35s 1';
// //     ul.style.display = 'block';
// // });

// // const test = document.getElementById("hello");
// // test.style.color="yellow";
