import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  totalExpenses = () => {
    const { expenses } = this.props;
    const sumExpenses = expenses.reduce((acc, curr) => {
      const currentExpense = curr.value;
      const askValue = curr.exchangeRates[curr.currency].ask;
      return acc + Number(currentExpense * askValue);
    }, 0);
    return Number(sumExpenses).toFixed(2);
  };

  render() {
    const { userEmail, expenses } = this.props;
    console.log(expenses);

    return (
      <div>
        <div>
          <h3 data-testid="email-field">
            { userEmail }
          </h3>
        </div>
        <div>
          <h3 data-testid="total-field">
            { this.totalExpenses() }
          </h3>
        </div>
        <div>
          <h6 data-testid="header-currency-field">
            BRL
          </h6>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf({}).isRequired,
};
