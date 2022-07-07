import axios from 'axios'

function userApiRequest(config) {
  return new Promise((resolve, reject) => {
    axios({
      ...config,
      headers: {
        'Authorization': process.env.REACT_APP_USER_API_TOKEN
      }
    })
      .then(res => {
        return resolve(res);
      })
      .catch(error => {
        return reject(error)
      })
  })
}

export default userApiRequest;
