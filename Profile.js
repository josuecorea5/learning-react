const app = document.getElementById("app");
const Avatar = (params) => {
  const src = `https://randomuser.me/api/portraits/${params.gender}/${params.id}.jpg`;
  return `
  <picture>
    <img src="${src}" alt="" />
    ${params.name}
  </picture>
  `;
};
app.innerHTML = Avatar({ id: 10, gender: "women", name: "Marina" });
app.innerHTML += Avatar({ id: 35, gender: "women", name: "Pamela" });
app.innerHTML += Avatar({ id: 1, gender: "men", name: "Oscar" });

app.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("disabled");
  });
});