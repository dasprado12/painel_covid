import axios from 'axios'

const url = process.env.VUE_APP_API + '/api/regions'
const url2 = process.env.VUE_APP_APIv2 + '/apiv2/regiao/'
const url3 = process.env.VUE_APP_APIv2 + '/apiv2/predicao/'

const endpoints = {
    all_data: url,
    many_regions: url + '/listMany',
    all_regions: url + '/list',
    all_dates: url + '/dates',
    last_date: url + '/newestDate'
}

export class Data {

    get_all_data = () => axios.get(endpoints.all_data)

    get_hist_data = () => axios.get(url+'?regiao=Total DF')

    get_all_regions = () => axios.get(endpoints.all_regions)
    
    get_all_dates = () => axios.get(endpoints.all_dates)

    get_last_date = () => axios.get(endpoints.last_date)

    get_data_by_region = (region) => axios.get(url+'?regiao='+region)
    get_data_by_state = (state) => axios.get(url+'?UF='+state)


    get_prevision_data = () => axios.get(url3+'?regiao=Total DF&diasPredicao=70')

    get_many_data(type, regions){
        if(!type){
            type = 'num'
        }
        return axios.get(endpoints.many_regions+`/${type}`+'?regiao='+regions)
    } 

    // get_one_region_by_data = (date) => axios.get(url)

    get_region_by_date = (time) => axios.get(url+'?dataExtracao='+time)
    get_region_by_date2 =(time) => axios.get(url2+'?dataExtracao='+time)

    get_incid = () => axios.get(url2+'maxincid')

    // get_all = () => axios.get(endpoints.all)
}
