function Button(props) {
  return (
    <div className="btn">
      <button onClick={() => props.setCount(props.count + 1)}>Count {props.count}</button>
    </div>
  );
}

export default Button
