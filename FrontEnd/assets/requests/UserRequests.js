import { BASE_URL } from "@env";

const base_url = BASE_URL + "user/";

async function addNewUser(user) {
    console.log("USER: " + JSON.stringify(user))
  const url = base_url + user.username;
  const body = {
      "first_name" : user.first_name,
      "last_name" : user.last_name,
      "email" : user.email,
      "password" : user.password
  }
  console.log(url);
  console.log(JSON.stringify(body));
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  console.log(res.status);
  console.log(res.json());
  return res;
}

module.exports = { addNewUser };
