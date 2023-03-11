import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  onLeft = () => {
    const {activeId} = this.state
    if (activeId > 0) {
      this.setState(prevState => ({
        activeId: prevState.activeId - 1,
      }))
    }
  }

  onRight = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props

    if (activeId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeId: prevState.activeId + 1,
      }))
    }
  }

  onFinalRes = res => {
    const {imgUrl, username, companyName, description} = res

    return (
      <div className="details-cont">
        <img src={imgUrl} alt={username} className="image1" />
        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeId} = this.state
    const finalRes = reviewsList[activeId]
    return (
      <div className="bg-cont">
        <h1 className="header">Reviews</h1>
        <div className="buttons-cont">
          <button
            className="button"
            type="button"
            onClick={this.onLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="icon"
            />
          </button>
          {this.onFinalRes(finalRes)}
          <button
            className="button"
            type="button"
            onClick={this.onRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="icon"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
