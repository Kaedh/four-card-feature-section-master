import './Card.css'

const Card = ({color, children, icon}) => {
  return (
    <div className="card">
      <div className={"top " + color}> </div>
      {children[0]}
      {children[1]}
      <img src={icon}></img>
    </div>
  );
}

export default Card;