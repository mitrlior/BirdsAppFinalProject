const BASE_URL = "https://birds-app-final-project.herokuapp.com/";

const base_url = BASE_URL + "user/";

// Not ready yet
async function AddNewBird(bird) {
  console.log("BIRD: " + JSON.stringify(user));
  const url = base_url + user.username;
  const body = {
    /* Need to fill */
  };
  console.log("Bird = " + JSON.stringify(url));
  console.log("Bird url = " + JSON.stringify(url));
  console.log(JSON.stringify(body));
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  console.log(res.status);Z
  console.log(res.json());
  return res;
}

module.exports = { addNewUser };
