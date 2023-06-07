// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll("section");
//   let currentSectionIndex = 0;

//   const smoothScrollTo = (element) => {
//     element.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   const onScroll = (event) => {
//     event.preventDefault();

//     if (event.deltaY > 0) {
//       // Scrolling down
//       if (currentSectionIndex < sections.length - 1) {
//         currentSectionIndex++;
//         smoothScrollTo(sections[currentSectionIndex]);
//       }
//     } else {
//       // Scrolling up
//       if (currentSectionIndex > 0) {
//         currentSectionIndex--;
//         smoothScrollTo(sections[currentSectionIndex]);
//       }
//     }
//   };

//   document.addEventListener("wheel", onScroll, { passive: false });
// });
