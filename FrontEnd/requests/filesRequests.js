import { BASE_URL, TEST_MODE, TEST_URL } from "@env";
const url = BASE_URL;
const base_url = url + "bird/myTest.jpg";
import * as FileSystem from "expo-file-system";

async function post_file(uri, file_name) {
  //   const formData = new FormData(base_url);

  const base_url = url + "bird/" + file_name;
  console.log(base_url);
  const res = await FileSystem.uploadAsync(base_url, uri, {
    method: "POST",
    //   base64: true,
    headers: { "Content-Type": "image/jpeg" },
  });
  console.log(await res.body);
}

module.exports = { post_file };
