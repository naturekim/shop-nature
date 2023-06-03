import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let [탭, 탭변경] = useState(0);
  let { id } = useParams();
  let 찾은상품 = props.items.find((x) => x.id == id);
  let [fade2, setFade2] = useState("");

  // 전환 애니메이션
  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  return (
    <main className={"start " + fade2}>
      <section className="detail">
        <div className="detail-image">
          <img src={`${process.env.PUBLIC_URL}/img/${찾은상품.img}.jpg`} />
        </div>
        <div className="detail-desc">
          <div>{찾은상품.title}</div>
          <div>{찾은상품.content}</div>
          <div>{찾은상품.price}원</div>
          <div>
            <button className="btn outline-accent">장바구니담기</button>
            <button className="btn accent">주문하기</button>
          </div>
        </div>
      </section>
      <section>
        <Tab 탭={탭} 탭변경={탭변경} />
        <TabContent 탭={탭} />
      </section>
    </main>
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
          >
            {tab}
          </button>
        ) : (
          <button
            onClick={() => {
              props.탭변경(i);
            }}
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
