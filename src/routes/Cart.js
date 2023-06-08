import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { addCount, deleteItem } from "../store";

function Cart() {
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state;
  });
  console.log(state);
  let totalAmout = 0;

  return (
    <main className="cart">
      <h4 className="section__title">장바구니</h4>
      {state.cart.length === 0 ? (
        <section className="cart-empty">
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <p>원하는 상품을 장바구니에 담아보세요</p>
          <button className="btn outline-accent">
            쇼핑 계속하기 <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </section>
      ) : (
        <section>
          {state.cart.map((a, i) => (
            <div className="cart-item" key={i}>
              <div class="checkbox-wrapper-18">
                <div class="round">
                  <input type="checkbox" id={`checkbox-${i}`} />
                  <label for={`checkbox-${i}`}></label>
                </div>
              </div>

              <div>
                <img
                  className="cart-thumbnail"
                  src={`${process.env.PUBLIC_URL}/img/${state.cart[i].img}.jpg`}
                />
              </div>
              <div>{state.cart[i].title}</div>
              <div>
                <button
                  className="btn-sm basic"
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id, -1));
                  }}
                >
                  -
                </button>
                <input type="text" value={state.cart[i].count} />

                <button
                  className="btn-sm basic"
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id, +1));
                  }}
                >
                  +
                </button>
              </div>
              <div>{state.cart[i].price} 원</div>
              <div>
                <button
                  className="btn-sm basic"
                  onClick={() => {
                    dispatch(deleteItem(state.cart[i].id));
                  }}
                >
                  삭제
                </button>
                <button className="btn-sm outline-accent">주문하기</button>
              </div>
            </div>
          ))}
          <div className="cart__footer">
            <div>
              <p>결제예정금액</p>
              <p>20000 원</p>
            </div>
            <div>
              <button className="btn noline-accent">선택상품 주문하기</button>
              <button className="btn accent">전체상품 주문하기</button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Cart;
