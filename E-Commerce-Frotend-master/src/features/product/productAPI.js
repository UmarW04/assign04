export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO: As This URL is hard-Coded need to change server URL here
    const resposne = await fetch("http://localhost:8080/products");
    const data = await resposne.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  // TODO : On Sercer side we will support multi values
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  return new Promise(async (resolve) => {
    // TODO: As This URL is hard-Coded need to change server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
