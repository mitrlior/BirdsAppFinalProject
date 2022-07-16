import { BASE_URL, TEST_MODE, TEST_URL } from "@env";
const url = TEST_MODE == 1 ? TEST_URL : BASE_URL;
const base_url = url + "bird/myTest.jpg";
import * as FileSystem from "expo-file-system";

const post_file = async (uri) => {
  console.log(base_url);
  console.log(uri);
  const base64 = await FileSystem.readAsStringAsync(uri, {
    encoding: "base64",
  });
  const img = await fetch(uri);
  let data = new FormData();
  data.append("file", img, 'test');
  console.log(img)
  console.log(await img);

  fetch(base_url, {
    method: "POST",
    headers: { "Content-Type": "image/jpeg" },
    body: data,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

module.exports = { post_file };
