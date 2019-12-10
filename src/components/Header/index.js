import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaShoppingBasket } from 'react-icons/fa';
import logo from '../../assets/images/header.svg';
import { Container, Cart } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>

        <FaShoppingBasket fontSize={36} color="#fff" />
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number,
};
Header.defaultProps = {
  cartSize: 0,
};
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
