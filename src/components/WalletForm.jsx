import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurrencies, fetchApiExchange } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiCurrencies());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { value, description, currency, method, tag } = this.state;
    const { dispatch, id } = this.props;
    const itens = { id, value, description, currency, method, tag };

    dispatch(fetchApiExchange(itens));

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="expenses">
          Despesas:
          <input
            id="expenses"
            type="number"
            name="value"
            value={ value }
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            { currencies.map((element) => (
              <option
                key={ element }
                value={ element }
              >
                {element}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select
            id="paymentMethod"
            name="method"
            value={ method }
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Método de pagamento:
          <select
            id="tag"
            name="tag"
            value={ tag }
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="cash">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="healt">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  id: state.wallet.expenses.length,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};
