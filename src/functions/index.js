// import axios from 'axios'

const url = process.env.VUE_APP_API

const endpoints = {
    all: url + '/teste'
}

export class Data {
    get_all = () => console.log(endpoints.all)
    
    // get_all = () => axios.get(endpoints.all)
}