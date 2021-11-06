import axiosInstance from "./MyAxios";


export default async function getDataWithAxios(url, funky, params=null){
    axiosInstance.get(url, params)
    .then(response => {
        var data = response.data;
        funky(data)
    }).catch(function (error) {
        console.log(error)
    });
}



