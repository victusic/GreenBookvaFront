export const getReview = async (index) => {
  const review = await fetch(`https://db.greenbookva.shop/review/${index}`);

  if (!review.ok) {
    throw new Response('', { status: review.status, statusText: review.statusText });
  }

  return review.json();
};

export const addReview = async (product, account, header, review, rate) => {
  const requestData = {
    product_id: product,
    account_id: account,
    header: header,
    review_text: review,
    evaluation: rate,
  };

  const reviewRequest = await fetch(`https://db.greenbookva.shop/review `, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  if (!reviewRequest.ok) {
    throw new Response('', { status: reviewRequest.status, statusText: reviewRequest.statusText });
  }

  return reviewRequest.json();
};

export const updateReview = async (id, header, review, rate) => {
  const requestData = {
    header: header,
    review_text: review,
    evaluation: rate,
  };

  const reviewRequest = await fetch(`https://db.greenbookva.shop/review/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  if (!reviewRequest.ok) {
    throw new Response('', { status: reviewRequest.status, statusText: reviewRequest.statusText });
  }

  return reviewRequest.json();
};

export const delReview = async (index) => {
  const review = await fetch(`https://db.greenbookva.shop/review/${index}`, { method: 'DELETE' });

  if (!review.ok) {
    throw new Response('', { status: review.status, statusText: review.statusText });
  }

  return review.json();
};
