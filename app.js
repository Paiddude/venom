const appLink = document.querySelectorAll(".grant-page");

//Ensure adding the correct domain name
const domain = "https://venom.business/app/register";

appLink.forEach((registerBtn) => {
  registerBtn.href = domain;
});
