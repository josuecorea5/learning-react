const app = document.getElementById("app");
const e = React.createElement;
const Avatar = (params) => {
  const src = `https://randomuser.me/api/portraits/${params.gender}/${params.id}.jpg`;
    return e("img", { src });
};

ReactDOM.render(e(Avatar, { id: 20, gender: "women" }), app);