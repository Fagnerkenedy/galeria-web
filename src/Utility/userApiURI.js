import userApiRequest from "./userApiRequest";

const apiURI = {

  checkEmail: (email) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_USER_API_BASE_URL}/checkemail`,
      data: { email } ,
    }
    return userApiRequest(config);
  }

}

export default apiURI;
