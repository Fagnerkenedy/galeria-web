import userApiRequest from "./userApiRequest";

const apiURI = {
  checkEmail: (email) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_USER_API_BASE_URL}/checkemail`,
      data: { email } ,
    }
    return userApiRequest(config);
  },

  register: (data) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_USER_API_BASE_URL}/register`,
      data: { ...data }
    }

    return userApiRequest(config)

  },

  login: (data) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_USER_API_BASE_URL}/login`,
      data: { ...data }
    }
    return userApiRequest(config)
  },

  sendEmailConfirmation: (data) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_USER_API_BASE_URL}/mailconfirmation`,
      data: { ...data }
    }
    return userApiRequest(config)
  },

  userConfirmation: (data) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_USER_API_BASE_URL}/confirmation`,
      data: { ...data }
    }
    return userApiRequest(config)
  },

  updateUser: (data, batata) => {
    const config = {
      method: 'put',
      url: `${process.env.REACT_APP_USER_API_BASE_URL}/update/${batata}`,
      data: { ...data }
    }

    return userApiRequest(config)

  },
  

}

export default apiURI;