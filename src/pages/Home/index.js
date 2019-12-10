import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { Container } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/formater';
import * as CartActions from '../../store/modules/Cart/actions';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProductToCart = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        {products.map(product => (
          <ul key={product.id}>
            <li>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormated}</span>

              <button
                type="button"
                onClick={() => this.handleAddProductToCart(product)}
              >
                <div>
                  <MdAddShoppingCart size={20} color="#FFF" />3
                </div>

                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          </ul>
        ))}
      </Container>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(null, mapDispatchToProps)(Home);
