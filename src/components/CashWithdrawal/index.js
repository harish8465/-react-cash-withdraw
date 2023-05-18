// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {
    currentBalance: 2000,
  }

  withdrawAmount = val => {
    this.setState(prevState =>
      prevState.currentBalance < val
        ? {currentBalance: prevState.currentBalance}
        : {
            currentBalance: prevState.currentBalance - val,
          },
    )
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <div className="profile-section">
            <div className="profile-image">
              <p>S</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-section">
            <div>
              <p>Your Balance</p>
            </div>
            <div>
              <p className="amount">{currentBalance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p className="amount">Withdraw</p>
          <p className="sum-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="cards">
            {denominationsList.map(each => (
              <DenominationItem
                eachItem={each}
                key={each.id}
                withdrawAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
