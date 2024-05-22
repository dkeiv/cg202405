const products = ['Sony Xperia', 'Samsung Galaxy'];

const $ = id => document.getElementById(id);

const onClickAddHandle = () => {
  const newProduct = $('addProduct').value;
  if (newProduct) {
    products.push(newProduct);
    renderProductTable();
    $('addProduct').value = '';
  }
}

const onClickDelete = (index) => {
  if (window.confirm('Are you sure you want to delete this product?')) {
    products.splice(index, 1);
    renderProductTable();
  }
}

const onClickEdit = (index) => {
  const edit = prompt(`Edit product`);

  if (edit) {
    products[index] = edit;
    renderProductTable();
  }
}

const buildProductTable = () => {
  let code = `<table>
                <tr>
                    <th colspan="2">Product Name</th>
                    <th>${products.length} products</th>
                </tr>`

  for (let i = 0; i < products.length; i++) {
    code += `<tr>
                <td id=${i}>${products[i]}</td>
                <td><button onclick=onClickEdit(${i}) >Edit</button></td>
                <td><button onclick=onClickDelete(${i}) >Delete</button></td>
             </tr>`
  }
  code += `</table>`

  return code;
}

const renderProductTable = () => $('productTable').innerHTML = buildProductTable();

const main = () => {
  renderProductTable();
}