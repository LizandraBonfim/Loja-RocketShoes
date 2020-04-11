import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

import logo from '../../assets/logo.png';

function Header({cartSize}) {
  console.tron.log(cartSize)

  return (


    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes"></img>
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}

export default connect(state => ({
  cartSize: state.cart.length,

}))(Header);
