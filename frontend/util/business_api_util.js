export const fetchBusinesses = (filters) => {
  return $.ajax({
    url: '/api/businesses',
    method: 'GET',
    data: filters
  });
};

export const fetchBusiness = (businessId) => {
  return $.ajax({
    url: `/api/businesses/${businessId}`,
    method: 'GET'
  });
};

export const createBusiness = (business) => {
  return $.ajax({
    url: '/api/businesses',
    method: 'POST',
    data: {
      business: {
        name: business.name,
        address: business.address,
        city: business.city,
        state: business.state,
        zip_code: business.zipCode,
        url: business.url,
        phone: business.phone,
        price_range: business.priceRange,
        opening_hours: business.openingHours,
        lat: business.lat,
        long: business.long
      }
    }
  });
};