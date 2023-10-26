import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";


export const handleLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const currentAuth = auth.currentUser;
    localStorage.setItem("user-uid", currentAuth.uid);
    console.log("user en storage: ", "user-uid");
  } catch (error) {
    console.error(error);
  }
};

const userId = localStorage.getItem("user-uid");
const url = "https://mock-santander.glitch.me/"

export const logOut = () => {
  localStorage.clear();
}

/* 
 * Como alternativa, esta es la función que deben colocar en cada componente para manejar la promesa y evitar errores,
    los datos cambian según sea lo que necesiten, pero todo viene explicado en donde se necesita * 

 const getData = () => {
    return new Promise((resolve, reject) => {
      * aquí va la función get del servicio (como getPersonalInfo) *
        .then((data) => {
          * Aquí va la función en donde quieran aplicar la data, y lleva esa data como parámetro
          por ejemplo, si la función se llama showEmail, se vería así: showEmail(data) *
          resolve (data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  
*/

export const getPersonalInfo = () => {
  return new Promise((resolve, reject) => {
    fetch(url + "personal_info/" + userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject('Error al cargar datos: ' + error);
    });
  });
};

export const getCourseRecords = () => {
  return new Promise((resolve, reject) => {
    fetch(url + "course_records/" + userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject('Error al cargar datos: ' + error);
    });
  });
};

export const getLaborData = () => {
  return new Promise((resolve, reject) => {
    fetch(url + "labor_data/" + userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject('Error al cargar datos: ' + error);
    });
  });
};


export const getTimeOff = () => {
  return new Promise((resolve, reject) => {
    fetch(url + "time_off/" + userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject('Error al cargar datos: ' + error);
    });
  });
};

export const getSalaryCompensation = () => {
  return new Promise((resolve, reject) => {
    fetch(url + "salary_compensation/" + userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject('Error al cargar datos: ' + error);
    });
  });
};
