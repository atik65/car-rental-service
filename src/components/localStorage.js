const addToDb = (id) => {
  const exist = getDb();
  let cart = {};
  if (!exist) {
    cart[id] = 1;
  } else {
    cart = JSON.parse(exist);
    if (cart[id]) {
      cart[id] = cart[id] + 1;
    } else {
      cart[id] = 1;
    }
  }
  updateDb(cart);
};

const getDb = () => {
  return localStorage.getItem("cartItem");
};

const updateDb = (cart) => {
  localStorage.setItem("cartItem", JSON.stringify(cart));
};

export { addToDb, getDb };
