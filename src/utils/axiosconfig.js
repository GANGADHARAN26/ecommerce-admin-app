const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
  export const config={
    headers:{
        Authorization:`Bearer ${getUserfromLocalStorage !==null ? getUserfromLocalStorage.token:''}`,
        Accept:'application/json',
    }
  }