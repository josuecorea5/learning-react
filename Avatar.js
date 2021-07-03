const app = document.getElementById("app");
const e = React.createElement;
const Avatar = (params) => {
  const src = `https://randomuser.me/api/portraits/${params.gender}/${params.id}.jpg`;
    return e("img", { src });
};

ReactDOM.render(e(Avatar, { id: 20, gender: "women" }), app);

//import of useState
const useState = React.useState;

//Component using jsx
const Avatar = (params) => {
  //state of component
  const [enabled, setEnabled] = useState(true);
  const src = `https://randomuser.me/api/portraits/${params.gender}/${params.id}.jpg`;

  return (
    <picture>
      <img
        onClick={() => setEnabled(!enabled)}
        src={src}
        className={className}
      />
      <em>{props.name}</em>
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