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

  console.log(username);

  const url = base_url + username;
  
  console.log(`url = ${url}`);

  const requestOptions = {
    headers: { "Content-Type": "application/json" }
  };

  const res = await fetch(url).then(res => res.json());

  // const body = await res.json;
  // const status = await res.status;
  console.log(res);
  console.log(res.status);

  return {res, res};
};




/* GET */
module.exports = { addNewUser, getUser };
