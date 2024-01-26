import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <section>
      <div className="section__title">
        <span>
          <FontAwesomeIcon icon={faTree} />
        </span>
        <h3>이번주 인기상품</h3>
      </div>
      <div className="wrapper-row-wrap">
        {props.items.length > 0 &&
          props.items.map((item, i) => {
            return <Card item={item} key={i} />;
          })}
      </div>
      <button className="btn outline-accent">더보기</button>
    </section>
  );
}

function Card(props) {
  return (
    <div className="card">
      <Link to={"/detail/" + props.item.id}>
        <div className="card__image">
          <img
            alt={props.item.title}
            src={process.env.PUBLIC_URL + "/img/" + props.item.img + ".jpg"}
          />
        </div>
        <div className="card__desc">
          <h5>{props.item.title}</h5>
          <div>
            <span></span>
            <span>{props.item.price} 원</span>
          </div>
          <p>{props.item.content}</p>
        </div>
      </Link>
    </div>
  );
}

export default Main;
