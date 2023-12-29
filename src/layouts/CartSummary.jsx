import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'
import { clearCart } from '../store/actions/cartActions';

export default function CartSummary() {

    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart)
    const handleClearCart = () => {
        dispatch(clearCart());
      };
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem) => (
                            <Dropdown.Item key={cartItem.product.id}>
                                {cartItem.product.productName}
                                <Label>
                                    {cartItem.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                    <Dropdown.Item onClick={handleClearCart}>Sepeti Temizle</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
