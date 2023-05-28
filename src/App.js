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

function App() {
  return (
    <>
      <div class="wrapper">
        {/* Header */}
        <header id="header">
          <nav class="navbar">
            <div class="navbar__logo">
              <a href="#">
                <h1>
                  <FontAwesomeIcon icon={faTree} /> 자연산약초세상
                </h1>
              </a>
              {/* 토글버튼 */}
              <ul class="navbar__toggle">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faUser} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faBars} />
                  </a>
                </li>
              </ul>
            </div>
            <div class="navbar__search">
              <input type="text" placeholder="상품검색"></input>
              <button>
                <FontAwesomeIcon icon={faX} />
              </button>
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <ul class="navbar__menu">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>장바구니</span>
                </a>
              </li>
              <li>
                <span>
                  <a href="#">
                    <FontAwesomeIcon icon={faTruckFast} /> 주문조회
                  </a>
                </span>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faUser} />
                  <span>로그인</span>
                </a>
              </li>
            </ul>
          </nav>
          <nav class="navbar2">
            <ul class="navbar2__menu">
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
        <main>
          <section>
            <div class="section__title">
              <span>
                <FontAwesomeIcon icon={faTree} />
              </span>
              <h3>이번주 인기상품</h3>
            </div>
            <div class="card-list">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer class="footer">
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
      <a href="#header" class="anchor">
        <FontAwesomeIcon icon={faChevronUp} />
      </a>
    </>
  );
}

function Card(props) {
  return (
    <div class="card-item">
      <a href="#">
        <div class="card-image">
          <img src="https://cdn.pixabay.com/photo/2019/05/06/16/48/hosta-4183587_960_720.jpg" />
        </div>
        <div class="card-desc">
          <h5>호스타 숙근</h5>
          <div>
            <span>20000원</span>
            <span>10000원</span>
          </div>
          <p>
            넓은 잎사귀로 노지월동이 가능하여 잎이 아름다워 관상가치가 높은
            식물입니다
          </p>
        </div>
      </a>
    </div>
  )
}

export default App;
