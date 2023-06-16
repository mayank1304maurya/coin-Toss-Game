import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {coin: true, totalScore: 0, heads: 0, tails: 0}

  onClickTossCoin = () => {
    const Num = Math.floor(Math.random() * 2)
    if (Num === 0) {
      this.setState(prevState => ({
        coin: true,
        totalScore: prevState.totalScore + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        coin: false,
        totalScore: prevState.totalScore + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {coin, totalScore, heads, tails} = this.state
    const image = coin
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <div className="image-container">
            <img src={image} alt="toss result" className="image" />
          </div>
          <div className="coin-toss-button-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickTossCoin}
            >
              Toss Coin
            </button>
          </div>
          <div className="score-container">
            <div className="total-score-container">
              <p className="score-status">Total: {totalScore}</p>
            </div>
            <div className="total-score-container">
              <p className="score-status">Heads: {heads}</p>
            </div>
            <div className="total-score-container">
              <p className="score-status">Tails: {tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
