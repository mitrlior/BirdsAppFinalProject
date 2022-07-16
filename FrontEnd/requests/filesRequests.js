import { BASE_URL, TEST_MODE, TEST_URL } from "@env";
const url = TEST_MODE === 1 ? TEST_URL : BASE_URL;
const base_url = url + "bird/myTest.jpg";
import * as FileSystem from "expo-file-system";

const post_file = async (uri) => {
  console.log(base_url);
  console.log(uri);
  const base64 = await FileSystem.load(uri);
  img = await fetch(uri);
  let data = new FormData();
  data.append("file", img);
  //   console.log(img)
  //   console.log(await img);

  const res = await fetch(base_url, {
    method: "POST",
    headers: { "Content-Type": "image/jpeg" },
    body: {},
  });
  console.log(await res.json());
};

async function _send(uri) {
  //   const formData = new FormData(base_url);
  const res = await FileSystem.uploadAsync(base_url, uri, {
    method: "POST",
    headers: { "Content-Type": "image/jpeg" },
  });
}

module.exports = { post_file, _send };
