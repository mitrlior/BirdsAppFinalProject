import { BASE_URL } from "@env";

async function predict_bird(image_name) {
  console.log(`Got define bird for image ${image_name}`);
  const url = BASE_URL + "predict/" + image_name;
  console.log(`url = ${url}`);
  res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await res;
}

async function get_all_birds_types() {
  console.log('Get all birds types request')
  const url = BASE_URL + "types"
  const res = await fetch(url);
  return await res;
}

module.exports = { predict_bird, get_all_birds_types };
