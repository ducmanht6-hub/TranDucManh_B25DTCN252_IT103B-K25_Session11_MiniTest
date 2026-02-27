let products = [
  {
    id: "P01",
    name: "Laptop MacBook Pro M3",
    price: 2000,
    category: "Laptop",
    inStock: true,
  },
  {
    id: "P02",
    name: "Chuột không day Logitech",
    price: 45,
    category: "Phụ kien",
    inStock: true,
  },
  {
    id: "P03",
    name: "Ban phím cơ Keychron",
    price: 95,
    category: "Phụ kien",
    inStock: false,
  },
  {
    id: "P04",
    name: "Man hinh Dell UltraSharp",
    price: 450,
    category: "Man hinh",
    inStock: true,
  },
  {
    id: "P05",
    name: "Tai nghe Sony WH-1000XM5",
    price: 350,
    category: "Phụ kiện",
    inStock: true,
  },
];
function validateProductPrices(productList) {
  const isValid = productList.every(product => product.price > 0);

  if (isValid) {
    console.log("Dữ liệu bảng giá hợp lệ");
  } else {
    console.log("Phát hiện sản phẩm chưa cập nhật giá");
  }
}
function formatCatalogDisplay(productList) {
  return productList.map(product => {
    const status = product.inStock ? "Còn hàng" : "Hết hàng";
    return `${product.name} - Giá: $${product.price} | Trạng thái: ${status}`;
  });
}

let catalogDisplay = formatCatalogDisplay(products);

console.log(catalogDisplay);

