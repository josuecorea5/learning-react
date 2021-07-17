//component without using jsx
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
const Avatar = ({ id, gender, size, name = "👨‍💻" }) => {
  const [enabled, setEnabled] = useState(true);
  //conditional render
  /*if (!id)
    return <img src="https://randomuser.me/api/portraits/lego/8.jpg" />;
  */
  const src = `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;
  //const pictureClassName = props.size === "small" ? "is-small" : "";
  const pictureClassName = {
    small: "is-small",
    large: "is-large"
  };
  const imgClassName = enabled ? "" : "disabled";
  return (
    <picture className={pictureClassName[size] || ""}>
      {id ? (
        <img
          onClick={() => setEnabled(!enabled)}
          src={src}
          className={imgClassName}
        />
      ) : (
        <i>Whitout image</i>
      )}
      <em>{enabled ? name : "Desconnected"}</em>
    </picture>
  );
};

ReactDOM.render(
  <div>
    <Avatar id={20} gender={"men"} size="small" />
    <Avatar id={10} gender={"women"} name="Keiry" />
    <Avatar id={1} gender={"men"} name="Pedri" size="large" />
    <Avatar name="Chef" />
  </div>,
  app
);