import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSucces } from './actions';

function* addToCart({ id }) {
  console.tron.log('cheguei no middleware');
  // vai interceptar o botão adicionar carrinho do usuário
  // utilia o metodo call do saga que é a func que realiza chamada a api
  const response = yield call(api.get, `/products/${id}`);

  // put é a func que faz chamada a actions

  yield put(addToCartSucces(response.data));
}
// all - cadastrar vários listeners para escutar  actions
// takeLatest é o metodo que pega apenas a ultima requisição, se por exemplo o usuário clicar várias vezes rapido num botão
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
