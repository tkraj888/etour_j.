

class AuthenticationService {
      Role() { return (sessionStorage.getItem("Role")) }
      JwtToken() { return (sessionStorage.getItem("jwtToken")) }
      Auth_ID() { return JSON.parse(sessionStorage.getItem("Auth_Id")) }
      Uname() { return JSON.parse(sessionStorage.getItem("User_Name")) }
      Logout() { sessionStorage.clear(); console.log(sessionStorage.getItem("jwtToken")); } ;
      headers(){ 
                if (sessionStorage.getItem("jwtToken")!=null) {
                      return  sessionStorage.getItem("jwtToken");
                  }
                  else
                      return null;
                    }

}
export default new AuthenticationService();


// import axios from 'axios';
 
// export const setAuthToken = token => {
//    if (token) {
//        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//    }
//    else
//        delete axios.defaults.headers.common["Authorization"];
// }