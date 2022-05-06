import React from "react";

export function FIlterByLength(movies) {
  let shortMov = movies.filter((el) => {
    return el.duration <= 40;
  });
  return shortMov;
}

// export function FIlterByLength(movies, checked) {
//   if (!checked) {
//     return movies;
//   }
//   let shortMov = movies.filter((el) => {
//     return el.duration < 40;
//   });
//   return shortMov;
// }
