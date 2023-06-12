import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPlus,
  faEquals,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  addCount,
  deleteItem,
  deleteSelected,
  handleChkbox,
  handleAllChkbox,
} from "../store";
import { useNavigate } from "react-router-dom";

function Cart() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state;
  });

  const 배송비 = 3500;
  let 선택상품금액 = 0;
  let 선택상품개수 = 0;
  let isAllChecked = true;
  state.cart.forEach((item) => {
    if (item.checked) {
      선택상품금액 += item.price * item.count;
      선택상품개수++;
    } else {
      isAllChecked = false; // 아이템 중 하나라도 체크가 안되어있으면 전체선택표시 해제
    }
  });

  return (
    <main className="cart">
      <h4 className="section__title">장바구니</h4>
      {state.cart.length === 0 ? (
        <section className="cart-empty">
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <p>원하는 상품을 장바구니에 담아보세요</p>
          <button className="btn outline-accent" onClick={() => navigate("/")}>
            쇼핑 계속하기 <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </section>
      ) : (
        <section>
          <div className="cart__header">
            <div className="checkbox-wrapper-18">
              <div className="round">
                <input
                  type="checkbox"
                  id="selectAll"
                  checked={isAllChecked}
                  onChange={(e) => {
                    dispatch(
                      handleAllChkbox({
                        checked: e.target.checked,
                      })
                    );
                  }}
                />
                <label htmlFor="selectAll"></label>
              </div>
            </div>
            <span className="mr-1">전체선택 ({선택상품개수}개)</span>
            <button
              className="btn-sm basic"
              onClick={() => {
                dispatch(deleteSelected());
              }}
            >
              선택삭제
            </button>
          </div>
          {state.cart.map((a, i) => (
            <div className="cart__item" key={i}>
              {/* 1. 체크박스 */}
              <div>
                <div className="checkbox-wrapper-18">
                  <div className="round">
                    <input
                      type="checkbox"
                      id={`checkbox-${i}`}
                      checked={state.cart[i].checked}
                      onChange={(e) => {
                        dispatch(
                          handleChkbox({
                            id: state.cart[i].id,
                            checked: e.target.checked,
                          })
                        );
                      }}
                    />
                    <label htmlFor={`checkbox-${i}`}></label>
                  </div>
                </div>
              </div>
              {/* 2. 썸네일 */}
              <div
                className="pointer"
                onClick={() => navigate("/detail/" + state.cart[i].id)}
              >
                <img
                  className="cart__item__img"
                  alt={state.cart[i].title}
                  src={`${process.env.PUBLIC_URL}/img/${state.cart[i].img}.jpg`}
                />
              </div>
              {/* 3. 상품명 */}
              <div
                className="cart__item__title"
                onClick={() => navigate("/detail/" + state.cart[i].id)}
              >
                {state.cart[i].title}
              </div>
              <div>
              {/* 4. 수량 */}
              <div>
                <button
                  className="btn-sm basic"
                  onClick={() => {
                    dispatch(addCount({ id: state.cart[i].id, amount: -1 }));
                  }}
                >
                  -
                </button>
                {state.cart[i].count}개
                <button
                  className="btn-sm basic"
                  onClick={() => {
                    dispatch(addCount({ id: state.cart[i].id, amount: 1 }));
                  }}
                >
                  +
                </button>
              </div>
              {/* 5. 가격 */}
              <div>{state.cart[i].price * state.cart[i].count} 원</div>
              </div>
              {/* 6. 버튼그룹 */}
              <div>
                <button
                  className="btn-sm outline-accent"
                  onClick={() => {
                    dispatch(deleteItem(state.cart[i].id));
                  }}
                >
                  삭제
                </button>
                <button className="btn-sm accent">주문하기</button>
              </div>
            </div>
          ))}
          <div className="cart__footer">
            <div className="wrapper-row-center">
              <div>선택한 상품금액 {선택상품금액}원</div>
              <div>
                <FontAwesomeIcon icon={faPlus} className="text-accent" />
                <span>&nbsp;&nbsp;&nbsp;배송비 {배송비}원</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faEquals} className="text-accent" />
                <span>
                  &nbsp;&nbsp;&nbsp;결제예정금액 {선택상품금액 + 배송비}원
                </span>
              </div>
            </div>
            <div className="wrapper-row-center">
              <button className="btn noline-accent">전체상품 주문하기</button>
              <button className="btn accent">선택상품 주문하기</button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Cart;
