import "./css/App.css";
import "./css/Reset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faTruckFast,
  faTree,
  faCartShopping,
  faUser,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import data from "./data.js";
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js";

function App() {
  const [items, setItems] = useState(data);

  return (
    <div id="top">
      {/* Header */}
      <header>
        <nav className="navbar">
          <div className="navbar__logo">
            <Link to="/">
              <h1>
                <FontAwesomeIcon icon={faTree} /> 자연농원
              </h1>
            </Link>
            {/* 토글버튼 */}
            <ul className="navbar__toggle">
              <li>
                <Link to="/cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
              </li>
              <li>
                <Link to="/mypage">
                  <>
                    <FontAwesomeIcon icon={faUser} />
                  </>
                </Link>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar__search">
            <input type="text" placeholder="상품검색"></input>
            {/* <button>
              <FontAwesomeIcon icon={faX} />
            </button> */}
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <ul className="navbar__menu">
            <li>
              <Link to="/cart">
                <>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>장바구니</span>
                </>
              </Link>
            </li>
            <li>
              <Link to="/mypage/orderlist">
                <FontAwesomeIcon icon={faTruckFast} /> <span>주문조회</span>
              </Link>
            </li>
            <li>
              <Link to="/mypage">
                <>
                  <FontAwesomeIcon icon={faUser} />
                  <span>마이페이지</span>
                </>
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="category">
          <li>봄 심기 구근</li>
          <li>여름 심기 구근</li>
          <li>가을 심기 구근</li>
          <li>숙근류 (뿌리)</li>
          <li>묘목 (나무)</li>
          <li>종자 (씨앗)</li>
          <li>포트상품</li>
          <li>자재</li>
        </ul>
      </header>

      {/* Main */}
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section>
                <div className="section__title">
                  <span>
                    <FontAwesomeIcon icon={faTree} />
                  </span>
                  <h3>이번주 인기상품</h3>
                </div>
                <div className="wrapper-row-wrap">
                  {items.length > 0 &&
                    items.map((item, i) => {
                      return <Card item={item} key={i} />;
                    })}
                </div>
                <button className="btn outline-accent">더보기</button>
              </section>
            </main>
          }
        />
        <Route path="/detail/:id" element={<Detail items={items} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<div>로그인페이지</div>} />
        <Route path="/mypage" element={<Mypage />}>
          <Route path="orderlist" element={<section>주문조회</section>} />
          <Route path="myinfo" element={<section>회원정보수정</section>} />
          <Route path="qnailist" element={<section>문의내역</section>} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <section>없는페이지입니다.</section>
            </main>
          }
        />
      </Routes>

      {/* Footer */}
      <footer>
        <ul>
          <li>
            <a>사업자정보</a>
          </li>
          <li>
            <a>개인정보처리방침</a>
          </li>
          <li>
            <a>이용약관</a>
          </li>
        </ul>
        <p>© 2023 자연농원</p>
        <a href="#top" className="topBtn accent">
          <FontAwesomeIcon icon={faChevronUp} />
        </a>
      </footer>
    </div>
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
            <span>20000원</span>
            <span>{props.item.price} 원</span>
          </div>
          <p>{props.item.content}</p>
        </div>
      </Link>
    </div>
  );
}

function Mypage() {
  return (
    <main>
      <h4 className="section__title">마이페이지</h4>
      <section>
        <nav className="tab">
          <button className="on">주문조회</button>
          <button>문의내역</button>
          <button>회원정보수정</button>
        </nav>
        <div className="tab-content">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default App;
