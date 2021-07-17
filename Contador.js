// .contador {
//   display: flex;
//   justify-content: center;
//   justify-content: space-around;
//   margin-top: 10px;
// }
// .contador button {
//   cursor: pointer;
// }
// .contador span {
//   font-size: 30px;
// }
const useState = React.useState;

function Contador() {
  const [count, setCount] = useState(21);
  return (
    <div className="contador">
      <button onClick={() => setCount(count + 1)}>Increment +</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>Decrement -</button>
    </div>
  );
}