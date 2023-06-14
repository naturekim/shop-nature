# Ecommerce platform with React.js
## 자연농원
리액트를 사용한 웹 프론트엔드 프로젝트입니다. [사이트 바로가기](naturefarm.netrify.com)  
- 개발 기간 및 인원
  - 2023.05.19 ~ 2023.06.12 (1명)  

<br />

# 🔍 Preview
### Small Screen   

### Wide Screen   


<br />

# Stacks
- Front-end  
![HTML5](https://img.shields.io/badge/-HTML5-F05032?style=for-the-badge&logo=html5&logoColor=ffffff)
![CSS3](https://img.shields.io/badge/-CSS3-007ACC?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A)
![React](https://img.shields.io/badge/-React-222222?style=for-the-badge&logo=react)
 ![reactrouter](https://img.shields.io/badge/ReactRouter-CA4245.svg?&style=for-the-badge&logo=ReactRouter&logoColor=white)
 ![redux](https://img.shields.io/badge/Redux-764ABC.svg?&style=for-the-badge&logo=Redux&logoColor=white)

- Common  
![Git](https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=ffffff)
![Github](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=ffffff)
![Font Awesome](https://img.shields.io/badge/-FontAwesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)

<br />

# 🛠 Features
- 순수 CSS로 구현된 반응형 UI
- React-router로 페이지 이동
- Redux를 이용한 전역 상태관리 (장바구니)
- 구성
  - 메인 페이지
    - Header, Navigator, Footer
    - 반응형 상품 목록
  - 상품 상세 페이지
    - 반응형 상품이미지
    - 상품설명 탭
    - 장바구니담기
  - 장바구니 페이지
    - 장바구니에 담긴 상품 목록
    - 수량 변경 및 삭제
    - 체크박스 선택하여 여러 상품 선택하여 삭제/결제금액 반영
    - 결제금액 표시   

<br />

# ⚙️ Installation

##

```bash
$ git clone https://github.com/naturekim/shop-nature
$ cd shop-nature
$ npm start
```

<br />

# License
[MIT](https://choosealicense.com/licenses/mit/)

<br />

# 프로젝트 후기

**첫 리액트 프로젝트**

리액트의 state와 props, 컴포넌트, 그리고 JSX 내부에서의 코드 사용, useEffect 등
낯설고 헷갈렸던 개념들이 익숙해지고 리액트의 편리함을 체감할 수 있었다.
리액트는 반복되는 코드를 컴포넌트화 하여 코드를 줄일 수 있고, 리액트의 state를 사용하면 자바스크립트에서 변수와는 달리 UI를 렌더링하는 코드를 넣지 않아도 되서 편리한 것 같다.

**반응형 퍼블리싱**

 CSS는 라이브러리의 도움을 받지 않고 구현하는 것을 목표로 해서, 그리고 넓은 화면과 좁은 화면을 둘다 고려해서 퍼블리싱을 하다보니 다소 시간이 걸렸는데 프로젝트 후반부에 들어서니 이전에 비해 단축되고 있다는 것을 느꼈다.
 막막할때는 다른 사이트들과 책을 참고하여 개발하여 안써본 css 속성들도 알게되었다.
 많이 사용되는 기본적인 UI 요소들을 만들어보아서 좋았다.


**쇼핑몰 사이트**

프로젝트를 하며 다른 쇼핑몰 사이트를 관찰하면서 이렇게나 세세하게 많은 기능이 있다는 것을 새삼 깨달았다. 로그인, 회원가입, 캐러셀, 결제 등 다른 기능들도 궁금하고 구현해보고 싶다.

<br />

**아쉬운점**  

이번에 useEffect를 많이 사용해보지 않아서 언제 사용하는지 잘 와닿지 않았다. 활용할 수 있는 곳을 찾아 더 사용해보고 싶다. 또한 백엔드도 개발해 axios도 사용해보고 싶다.   
HTML 요소들이 추가될수록 css가 복잡해져서 다음날 수정하려고 하니 잊어버리고 복잡해서 scss의 필요성을 체감했다.