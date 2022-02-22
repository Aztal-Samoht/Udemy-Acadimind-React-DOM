import React, { useEffect } from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { useRouteMatch } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetails = () => {
  const match = useRouteMatch();
  const params = useParams();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'error') {
    return <p className='centered focused'>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <h1>Quote not found</h1>;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <Link className='btn' to={`${match.url}/comments`}>
          show comments
        </Link>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Link className='btn' to={`/quote/${params.quoteId}`}>
          hide comments
        </Link>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetails;
