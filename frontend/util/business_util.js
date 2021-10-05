export const businessIncludesCuisine = (business, cuisineFilter) => {
  let result = false;
  business.cuisines.forEach(cuisine => {
    if(cuisine.cuisine === cuisineFilter) {
      result = true;
    }
  });
  return result;
}

export const businessIncludesPrice = (business, price) => {
  return business.priceRange === price;
}