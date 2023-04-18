import "./card.css";

function Card(props) {
  console.log(props);
  const classNm = "card " + props.className;
  console.log(classNm);
  return <div className={classNm}>{props.children}</div>;
}

export default Card;
