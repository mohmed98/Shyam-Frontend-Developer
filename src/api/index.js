export default function api(url, params) {
  return new Promise((resolve, reject) =>
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  );
}
