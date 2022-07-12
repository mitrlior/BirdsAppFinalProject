import { BASE_URL } from '@env';
// BASE_URL = "http://birds-app-final-project.herokuapp.com/";
const base_url = BASE_URL + "user/";


/* POST */
const addNewUser = async (user) => {
  console.log("USER: " + JSON.stringify(user));
  const url = base_url + user.username;
  console.log(`url = ${url}`);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      user_type: user.user_type,
    }),
  };

  let res = await fetch(url, requestOptions);
    // .then((response) => response.json())
    // .then((json) => {
    //   return json;
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

  console.log(`res = ${res.status}`);
  console.log(`body = ${res.body}`);
  console.log(res.json());
  return res;
};
/* Get */
async function getUser(username) {

  //TODO : Check what the fuck!
  console.log(`Got get request username =  ${username}`);

  const url = BASE_URL + 'user/' + username;

  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json());
};




/* GET */
module.exports = { addNewUser, getUser };
