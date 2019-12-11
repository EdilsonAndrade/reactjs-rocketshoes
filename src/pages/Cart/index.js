import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { Container, ProductTable } from './styles';
import * as CartActions from '../../store/modules/Cart/actions';
import { formatPrice } from '../../utils/formater';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <span>{product.title}</span>
                <strong>{product.priceFormated}</strong>
              </td>
              <td>
                <div>
                  <MdRemoveCircleOutline onClick={() => decrement(product)} />
                  <input type="text" disabled value={product.amount} />
                  <MdAddCircleOutline onClick={() => increment(product)} />
                </div>{' '}
              </td>
              <td>
                <span>{product.subtotal}</span>
              </td>
              <td>
                <FaTrashAlt onClick={() => removeFromCart(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">FINALIZAR PEDIDO</button>
        <div>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </div>
      </footer>
    </Container>
  );
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
