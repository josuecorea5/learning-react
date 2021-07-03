const app = document.getElementById("app");
const e = React.createElement;
const Avatar = (params) => {
  const src = `https://randomuser.me/api/portraits/${params.gender}/${params.id}.jpg`;
    return e("img", { src });
};

ReactDOM.render(e(Avatar, { id: 20, gender: "women" }), app);


//Component using jsx
const Avatar = (params) => {
  const src = `https://randomuser.me/api/portraits/${params.gender}/${params.id}.jpg`;

  return (
    <picture>
      <img
        onClick={(event) => {
          event.target.classList.toggle("disabled");
        }}
        src={src}
      />
      <em>{params.name}</em>
    </picture>
  );
};

ReactDOM.render(
  <div>
    <Avatar id={10} gender={"women"} />
    <Avatar id={20} gender={"men"} />
  </div>,
  app
);