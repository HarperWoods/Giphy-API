fetch(
  "https://api.giphy.com/v1/gifs/trending?api_key=8PyPY3yrCnVoeNM1vlmiEmqsCZOVriAk&limit=50&rating=pg-13"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (gifs) {
    console.log(gifs);
  });

// SWIPER //
const swiper = new Swiper(".swiper", {});

const API_KEY = "8PyPY3yrCnVoeNM1vlmiEmqsCZOVriAk";

fetch(
  "https://api.giphy.com/v1/gifs/trending?api_key=8PyPY3yrCnVoeNM1vlmiEmqsCZOVriAk&limit=50&rating=pg-13"
)
  .then((response) => response.json())
  .then((gifs) => {
    // console.log(gifs.data);
    // console.log(gifs.data[0].images.downsized.url);

    const videoContainer = document.querySelector(".swiper-wrapper");

    gifs.data.forEach((gif) => {
      // template
      const template = `
            <div class="swiper-slide">
              <img src="${gif.images.downsized.url}" />
            </div>
          `;

      // connect to HTML
      videoContainer.insertAdjacentHTML("afterbegin", template);
    });
  });