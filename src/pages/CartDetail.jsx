// CartDetail.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item, Button } from "semantic-ui-react"; // Semantic UI bileşenlerini ekleyin
import { clearCart, removeFromCart } from "../store/actions/cartActions";

export default function CartDetail() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    const quantityToRemove = 1;

    const totalQuantity = cartItems.find((item) => item.product.id === productId)?.quantity;
    if (totalQuantity === 1) {
      dispatch(removeFromCart({ id: productId }));
    } else {
      dispatch(removeFromCart({ id: productId, quantity: quantityToRemove }));
    }
  };

  return (
    <div>
      <h2>Sepet Detayı</h2>
      <Button color="red" floated="right" onClick={() => dispatch(clearCart())}>Sepeti Temizle </Button>
      <Item.Group divided>
        {cartItems.map((cartItem) => (
          <Item key={cartItem.product.id}>
            <Item.Image size="small" src="https://react.semantic-ui.com/images/wireframe/image.png" />

            <Item.Content verticalAlign="middle">
              <Item.Header>{cartItem.product.productName}</Item.Header>
              <Item.Description>
                Adet: {cartItem.quantity}
              </Item.Description>
              <Item.Extra>
                <Button color="blue" floated="right" onClick={() => handleRemoveFromCart(cartItem.product.id)}>
                  Sepetten Çıkar
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  );
}
