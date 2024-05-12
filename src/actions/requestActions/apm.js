export const getAuthor = async (index) => {
  const author = await fetch(`https://db.greenbookva.shop/author/${index}`);

  if (!author.ok) {
    throw new Response('', { status: author.status, statusText: author.statusText });
  }

  return author.json();
};

export const getAuthorSlides = async (index) => {
  const author = await fetch(`https://db.greenbookva.shop/author/${index}/slides`);

  if (!author.ok) {
    throw new Response('', { status: author.status, statusText: author.statusText });
  }

  return author.json();
};

export const getAuthorImages = async (index) => {
  const author = await fetch(`https://db.greenbookva.shop/author/${index}/images`);

  if (!author.ok) {
    throw new Response('', { status: author.status, statusText: author.statusText });
  }

  return author.json();
};

export const getPublisher = async (index) => {
  const publisher = await fetch(`https://db.greenbookva.shop/publisher/${index}`);

  if (!publisher.ok) {
    throw new Response('', { status: publisher.status, statusText: publisher.statusText });
  }

  return publisher.json();
};

export const getPublisherSlides = async (index) => {
  const publisher = await fetch(`https://db.greenbookva.shop/publisher/${index}/slides`);

  if (!publisher.ok) {
    throw new Response('', { status: publisher.status, statusText: publisher.statusText });
  }

  return publisher.json();
};

export const getManufacturer = async (index) => {
  const manufacturer = await fetch(`https://db.greenbookva.shop/manufacturer/${index}`);

  if (!manufacturer.ok) {
    throw new Response('', { status: manufacturer.status, statusText: manufacturer.statusText });
  }

  return manufacturer.json();
};

export const getManufacturerSlides = async (index) => {
  const manufacturer = await fetch(`https://db.greenbookva.shop/manufacturer/${index}/slides`);

  if (!manufacturer.ok) {
    throw new Response('', { status: manufacturer.status, statusText: manufacturer.statusText });
  }

  return manufacturer.json();
};
