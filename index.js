const changes_arr = [
  {
    img_desk: "./images/desktop-image-hero-1.jpg",
    img_mob: "./images/mobile-image-hero-1.jpg",
    data: " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and ake your property a reflection of you and what you love. ",
    title: "Discover innovative ways to decorate",
  },
  {
    img_desk: "./images/desktop-image-hero-2.jpg",
    img_mob: "./images/mobile-image-hero-2.jpg",
    data: " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    title: "We are available all across the globe",
  },
  {
    img_desk: "./images/desktop-image-hero-3.jpg",
    img_mob: "./images/mobile-image-hero-3.jpg",
    data: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    title: "Manufactured with the best materials",
  },
];
let image_to_use = document.getElementById("image_change");
let query = window.matchMedia("(min-width:600px)");
window.addEventListener("DOMContentLoaded", () => {
  if (query.matches) {
    image_to_use.src = changes_arr[0].img_desk;
  } else {
    image_to_use.src = changes_arr[0].img_mob;
  }
});

let left_btn = document.getElementById("move_left");
let right_btn = document.getElementById("move_right");
let i = 0;

function index_set(chenge) {
  if (chenge == "inc") {
    i = (i + 1) % Object.keys(changes_arr).length;
    return i;
  }
  if (chenge == "dec") {
    i =
      (i - 1 + Object.keys(changes_arr).length) %
      Object.keys(changes_arr).length;
    return i;
  }
}
console.log(changes_arr[2].title);
right_btn.addEventListener("click", () => {
  let index = index_set("inc");
  console.log("click");
  document.getElementById("title").innerHTML = changes_arr[index].title;
  document.getElementById("info_para").innerHTML = changes_arr[index].data;
  if (query.matches) {
    document.getElementById("image_change").src = changes_arr[index].img_desk;
  } else {
    document.getElementById("image_change").src = changes_arr[index].img_mob;
  }
});
left_btn.addEventListener("click", () => {
  let index = index_set("dec");
  console.log("click");
  document.getElementById("title").innerHTML = changes_arr[index].title;
  document.getElementById("info_para").innerHTML = changes_arr[index].data;
  if (query.matches) {
    document.getElementById("image_change").src = changes_arr[index].img_desk;
  } else {
    document.getElementById("image_change").src = changes_arr[index].img_mob;
  }
});
