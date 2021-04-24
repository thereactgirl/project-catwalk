import React, { useState, useEffect } from 'react';
import RatingsBar from './RatingsBar.jsx';
import styles from './StarFilter.module.css';

const StarFilter = ({reviews, handleOnClickStars}) => {

  const getFraction = (targetNumber) => {
    let filtered = reviews.filter((review, i) => {
      return review.rating === targetNumber;
    })
    let fraction = filtered.length / reviews.length;
    let fractionPercentage = (fraction * 100).toFixed(2);
    return fractionPercentage;
  }


  const [fiveStarFraction, setFiveStarFraction] = useState(() => {
    return getFraction(5);
  });
  const [fourStarFraction, setFourStarFraction] = useState(() => {
    return getFraction(4);
  });
  const [threeStarFraction, setThreeStarFraction] = useState(() => {
    return getFraction(3);
  });
  const [twoStarFraction, setTwoStarFraction] = useState(() => {
    return getFraction(2);
  });
  const [oneStarFraction, setOneStarFraction] = useState(() => {
    return getFraction(1);
  });

  console.log(handleOnClickStars);
  return (
    <div className={styles.starFilterContainer}>
      <div className={styles.starFilterItem}><span value={5} onClick={() => {
        console.log(event.target.value)
      }} className={styles.starLabel}>5 Stars</span> <RatingsBar ratingFraction={fiveStarFraction}/></div>
      <div className={styles.starFilterItem}><span className={styles.starLabel}>4 Stars</span> <RatingsBar ratingFraction={fourStarFraction}/></div>
      <div className={styles.starFilterItem}><span className={styles.starLabel}>3 Stars</span> <RatingsBar ratingFraction={threeStarFraction}/></div>
      <div className={styles.starFilterItem}><span className={styles.starLabel}>2 Stars</span> <RatingsBar ratingFraction={twoStarFraction}/></div>
      <div className={styles.starFilterItem}><span className={styles.starLabel}>1 Stars</span> <RatingsBar ratingFraction={oneStarFraction}/></div>
    </div>
  )
}

export default StarFilter;