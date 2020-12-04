import * as constants from "../Constants";



export const products = async (obj) => {
  try {
    console.log('entrrooooooooo')
    console.log('entrrooooooooo')
    console.log(obj)
    // const url = `${constants.appLocalBaseUrl}products`;

    // var formData = new FormData();
    // formData.append("name", obj.name);
    // formData.append("email", obj.email);
    // formData.append("phone", obj.phone);
    // formData.append("age", obj.age);

    // let response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   body: formData
    // });

    // let responseJson = await response.json();
    // return responseJson;
  } catch (error) {
    console.log(error);
    alert("faile at fetchLogin signIn");
  }
};
