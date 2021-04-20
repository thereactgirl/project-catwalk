import React from 'react';
import ReviewItem from './ReviewItem.jsx';

//Styling
import styles from './Reviews.module.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews.slice(0, 5) || [],
      loading : false,
      hasMore : false,
      clickedMoreReviews: false,
      reviewsView: 2,
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClickMoreReviews = this.handleClickMoreReviews.bind(this);
  }



  handleScroll (event) {
    console.log('Review List got Scrolled!');
    let element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.setState((prevState) => ({
        loading: true,
        reviews: [...prevState.reviews, ...this.props.reviews]
      }));
      this.setState({
        hasMore: this.props.reviews > 0
      })
      this.setState({
        loading: false
      })
    }
  }

  handleClickMoreReviews (event) {
    console.log('More Reviews Got Clicked!')
    this.setState({
      clickedMoreReviews: !this.state.clickedMoreReviews,
      reviewsView: this.state.reviewsView + 2
    })
  }

  //A lot of repeating code, might want to refactor
  render() {
    let reviews = this.state.reviews;

    if (reviews === 0) {
      return (<div>Currently, there are no reviews for this product.</div>)
    }
    let reviewsList = reviews.map((review, index) => {
      return <ReviewItem key={index} review={review}/>
    })
    if (!this.state.clickedMoreReviews) {
      return (
        <div className={styles.reviewsContainer} onScroll={this.handleScroll}>
          <div className='reviewSorter'>
            <p>
              {`${reviews.length} reviews, sorted by `} <select>
                <option>Relevance</option>
                <option>Helpful</option>
                <option>Newest</option>
              </select>
            </p>
          </div>
          <div className={styles.reviewsList}>
            {reviewsList.slice(0, this.state.reviewsView)}
          </div>
          <div className='buttons'>
            {this.state.reviews.length > 2 ? <button className={styles.moreReviewsButton} onClick={this.handleClickMoreReviews}>More Reviews</button> : null}
            <button className={styles.addAReviewButton}>Add A Review</button>
          </div>
        </div>
        );
    }
    return (
      <div className={styles.reviewsContainer} onScroll={this.handleScroll}>
        <div className='reviewSorter'>
          <p>
            {`${reviews.length} reviews, sorted by `} <select>
              <option>Relevance</option>
              <option>Helpful</option>
              <option>Newest</option>
            </select>
          </p>
        </div>
        <div className={styles.reviewsList}>
          {reviewsList.slice(0, this.state.reviewsView)}
        </div>
        <div className='buttons'>
          {this.state.reviewsView <= this.props.reviews.length ? <button className={styles.moreReviewsButton} onClick={this.handleClickMoreReviews}>More Reviews</button> : null}
          <button className={styles.addAReviewButton} >Add A Review</button>
        </div>
      </div>
      );
  }
}

export default Reviews;