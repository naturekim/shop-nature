import "./css/App.css";
import "./css/Reset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faTruckFast,
  faTree,
  faCartShopping,
  faX,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import data from "./data.js";
import { useState } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function App() {
  const [items, setItems] = useState(data);
  let navigate = useNavigate();
  // console.log(items[0]);
  // console.log(items);

  return (
    <div className="wrapper">
      {/* Header */}
      <header>
        <a href="#header" className="topBtn accent">
          <FontAwesomeIcon icon={faChevronUp} />
        </a>
        <nav className="navbar">
          <div className="navbar__logo">
            <Link to="/">
              <h1>
                <FontAwesomeIcon icon={faTree} /> 자연산약초세상
              </h1>
            </Link>
            {/* 토글버튼 */}
            <ul className="navbar__toggle">
              <li>
                <Link to="/basket">
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
            <button>
              <FontAwesomeIcon icon={faX} />
            </button>
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <ul className="navbar__menu">
            <li>
              <Link to="/basket">
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
              <Link to="login">
                <>
                  <FontAwesomeIcon icon={faUser} />
                  <span>로그인</span>
                </>
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
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
        </nav>
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
                <div className="card-list">
                  {items.length > 0 &&
                    items.map((item, i) => {
                      return <Card item={item} key={i} />;
                    })}
                </div>
              </section>
            </main>
          }
        />
        <Route path="/detail/:id" element={<Detail items={items} />} />
        <Route path="/basket" element={<div>장바구니페이지</div>} />
        <Route path="/login" element={<div>로그인페이지</div>} />
        <Route path="/mypage" element={<Mypage />}>
          <Route path="orderlist" element={<div>주문조회</div>} />
          <Route path="myinfo" element={<div>회원정보수정</div>} />
          <Route path="qnailist" element={<div>문의내역</div>} />
        </Route>
        <Route path="*" element={<div>없는페이지</div>} />
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
        <p>© 2023 자연산약초세상</p>
      </footer>
    </div>
  );
}

function Detail(props) {
  let [탭, 탭변경] = useState(0);
  let { id } = useParams();
  let 찾은상품 = props.items.find((x) => x.id == id);
  return (
    <main>
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
      <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>상품설명</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>상품리뷰</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>상품문의</Nav.Link>
      </Nav.Item>
    </Nav>
      <TabContent 탭={탭} />
      </section>
    </main>
  );
}

function TabContent({탭}){
  return [ <div>상품설명</div>, <div>상품리뷰</div>, <div>상품문의</div> ][탭]
}

function Card(props) {
  console.log(props.item);
  return (
    <div className="card-item">
      <Link to={"/detail/" + props.item.id}>
        <div className="card-image">
          <img
            src={process.env.PUBLIC_URL + "/img/" + props.item.img + ".jpg"}
          />
        </div>
        <div className="card-desc">
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
    <section>
      <h4>마이페이지</h4>
      <Outlet />
    </section>
  );
}
export default App;
