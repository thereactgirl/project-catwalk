import React from 'react';

// components
import ProductOverview from './ProductOverview/index.jsx';
import QuestionsAnswers from './QuestionsAnswers/index.jsx';
import RelatedItems from './RelatedItems/index.jsx';


//Ratings and Reviews components
import ReviewsList from './ReviewsList/index.jsx';

class App extends React.Component {
  render () {
    return(
      <div className='app'>
          <h1> APP Here </h1>
          <ProductOverview />
          <QuestionsAnswers />
          <RelatedItems />
          <ReviewsList />
      </div>
    )
  }
}

export default App;