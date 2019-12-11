import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import { addToCartSucces, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../utils/formater';

function* addToCart({ id }) {
  const productExist = yield select(state => state.cart.find(p => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  const currentAmount = productExist ? productExist.amount : 0;

  const amount = currentAmount + 1;
  if (amount > stockAmount) {
    toast.error('Quantidade desejada não possui no estoque');
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(productExist.id, amount));
  } else {
    // vai interceptar o botão adicionar carrinho do usuário
    // utilia o metodo call do saga que é a func que realiza chamada a api
    const response = yield call(api.get, `/products/${id}`);

    // put é a func que faz chamada a actions
    const data = {
      ...response.data,
      amount: 1,
      priceFormated: formatPrice(response.data.price),
    };
    yield put(addToCartSucces(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const currentAmount = stock.data.amount;
  if (amount > currentAmount) {
    toast.error('Quantidade desejada não possui no estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}
// all - cadastrar vários listeners para escutar  actions
// takeLatest é o metodo que pega apenas a ultima requisição, se por exemplo o usuário clicar várias vezes rapido num botão
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
