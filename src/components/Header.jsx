import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    console.log(expenses);
    const totalExpenses = 0;
    // const totalExpenses = expenses
    //   .reduce((total, expense) => (Number(expense.value)
    //   * Number(expense.exchangeRates[expense.currency].ask) + total), 0);

    return (
      <div>
        <div>
          <h3 data-testid="email-field">
            { userEmail }
          </h3>
        </div>
        <div>
          <h3 data-testid="total-field">
            { totalExpenses.toFixed(2) }
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
};
