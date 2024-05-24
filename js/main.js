const menuIcon = document.querySelector(".site-header__menu-icon");
const siteHeaderMobile = document.querySelector(".site-header__mobile");

menuIcon.onclick = () => {
  siteHeaderMobile.classList.add("site-header__mobile-key");
};

siteHeaderMobile.onclick = () => {
  siteHeaderMobile.classList.remove("site-header__mobile-key");
};

const question = document.querySelectorAll(".question");

question.forEach((item) => {
  item.onclick = () => {
    const accordion = item.parentElement;
    accordion.classList.toggle("open");
  };
});
