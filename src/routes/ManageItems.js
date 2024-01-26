const ManageItems = (props) => {
  return (
    <>
      <ProductList items={props.items} />
    </>
  );
};
const ProductList = () => {
  return (
    <main className="cart">
      <section>
        <h4 className="section__title">장바구니</h4>
        <div class="productList">
          <table>
            <thead>
              <th>상품명</th>
              <th>학명</th>
              <th>가격</th>
              <th>할인율</th>
            </thead>
            <tbody>
              <tr>
                <td>장미</td>
                <td>rose</td>
                <td>10000</td>
                <td>10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
const AddProduct = () => {
  return (
    <div class="addProductForm">
      <h3>상품추가</h3>
      <div>
        <form>
          <div>
            <label for="fname">상품 타이틀</label>
            <input type="text" />
          </div>
          <div>
            <label for="fname">학명</label>
            <input type="text" />
          </div>
          <div>
            <label for="fname">가격</label>
            <input type="text" />
          </div>
          <div>
            <label for="fname">이미지 파일 업로드</label>
            <input type="file" />
          </div>
          <h5>상품설명</h5>
          <textarea></textarea>
        </form>
      </div>
    </div>
  );
};

export default ManageItems;
