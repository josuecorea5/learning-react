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
  // avoiding nested ifs
  const pictureClassName = {
    small: "is-small",
    large: "is-large"
  };
  const imgClassName = enabled ? "" : "disabled";
  return (
    <picture className={pictureClassName[props.size] || ""}>
      <img
        onClick={() => setEnabled(!enabled)}
        src={src}
        className={imgClassName}
      />
      <em>{props.name}</em>
    </picture>
  );
};

ReactDOM.render(
  <div>
    <Avatar id={20} gender={"men"} name="Felipe" size="small" />
    <Avatar id={10} gender={"women"} name="Keiry" />
    <Avatar id={1} gender={"men"} name="Christian" size="large" />
  </div>,
  app
);