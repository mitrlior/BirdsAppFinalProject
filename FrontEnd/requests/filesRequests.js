import { BASE_URL, TEST_MODE, TEST_URL } from "@env";
const url = TEST_MODE === 1 ? TEST_URL : BASE_URL;
const base_url = url + "bird/myTest.jpg";

const post_file = async (uri) => {
  //   console.log(url);
  console.log(base_url);
  //   const body = createFormData(uri);
  const response = await fetch(uri);
  const imgBlob = await response.blob().then(function (content) {
    let reader = new FileReader();

    reader.addEventListener("loadend", async function () {
      const formData = new createFormData(uri);
      formData.append("content", reader.result);
      await fetch(base_url, {
        method: "POST",
        body: formData,
      });
    });
    reader.readAsDataURL(content);
    console.log(reader.result);
  });
};

const createFormData = (uri) => {
  let fileName = uri.split("/").pop();
  const fileType = fileName.split(".").pop();
  fileName = "mtTest.jpg";
  const formData = new FormData();
  formData.append("file", {
    uri,
    name: fileName,
    type: `image/${fileType}`,
  });
  console.log(formData);
  return formData;
};

module.exports = { post_file };
