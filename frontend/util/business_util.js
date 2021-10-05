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

export const businessIncludesLoc = (business, loc) => {
  return business.city === loc;
}

export const parseCategory = (history) => {
  return capitalize(history.location.search.slice(9).split("&")[0]);
}

const parseSpaceBetween = (path) => {
  const strArr =  path.split("%20")
  const newPath = strArr.map((s) => s.charAt(0).toUpperCase() + s.slice(1));
  return newPath.join(" ");
}

export const parseLocation = (history) => {
  const path = history.location.search.slice(9).split("&").pop().slice(9);
  return parseSpaceBetween(path);
}

export const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}


// export const convertLocationToBounds = (location) => {

// }