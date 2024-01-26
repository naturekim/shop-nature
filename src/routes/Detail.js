import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addItem } from "../redux/cartSlice";

function Detail(props) {
  let [탭, 탭변경] = useState(0);
  let { id } = useParams();
  let 찾은상품 = props.items.find((x) => x.id === Number(id));
  let [fade2, setFade2] = useState("");

  // 전환 애니메이션
  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  return (
    <div className={"start " + fade2}>
      {찾은상품 == null ? (
        <section>없는 상품입니다.</section>
      ) : (
        <>
          <Product 찾은상품={찾은상품} />
          <section>
            <Tab 탭={탭} 탭변경={탭변경} />
            <TabContent 탭={탭} />
          </section>
        </>
      )}
    </div>
  );
}

function Product(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onConfirm = () => {
    if (
      window.confirm(
        "장바구니에 상품을 담았습니다.\n장바구니로 이동하시겠습니까?"
      )
    ) {
      navigate("/cart");
    }
  };

  return (
    <section className="detail">
      <div className="detail__image">
        <img
          alt={props.찾은상품.title}
          src={`${process.env.PUBLIC_URL}/img/${props.찾은상품.img}.jpg`}
        />
      </div>
      <div className="detail__desc">
        <div>{props.찾은상품.title}</div>
        <div>{props.찾은상품.content}</div>
        <div>{props.찾은상품.price}원</div>
        <div>
          <button
            className="btn accent"
            onClick={() => {
              dispatch(
                addItem({
                  id: props.찾은상품.id,
                  img: props.찾은상품.img,
                  title: props.찾은상품.title,
                  price: props.찾은상품.price,
                  count: 1,
                  checked: true,
                })
              );
              onConfirm();
            }}
          >
            장바구니
          </button>
        </div>
      </div>
    </section>
  );
}

function Tab(props) {
  return (
    <nav className="tab">
      {["상품설명", "상품후기", "상품문의", "반품/환불"].map((tab, i) => {
        return props.탭 === i ? (
          <button
            className="on"
            onClick={() => {
              props.탭변경(i);
            }}
            key={i}
          >
            {tab}
          </button>
        ) : (
          <button
            onClick={() => {
              props.탭변경(i);
            }}
            key={i}
          >
            {tab}
          </button>
        );
      })}
    </nav>
  );
}

function TabContent({ 탭 }) {
  return [
    <div className="tab-content">상품설명</div>,
    <div className="tab-content">상품후기</div>,
    <div className="tab-content">상품문의</div>,
    <div className="tab-content">반품/환불</div>,
  ][탭];
}

export default Detail;
