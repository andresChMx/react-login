/*Nosotros usaremos session storage to manage tokens and user information, but if you want then you can also manage
all this things using local storage or redux

you can only store the token in session store, and manage user informacion in redux
*/
export const getUser=()=>{
    const userStr=sessionStorage.getItem("user");
    if(userStr) return JSON.parse(userStr);
    else return null;
}
export const getToken=()=>{
    return sessionStorage.getItem("token") || null;
}
export const setUserSession=(user,token)=>{
    sessionStorage.setItem("token",token);
    sessionStorage.setItem("user",JSON.stringify(user));
}
export const removeUserSession=()=>{    
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}