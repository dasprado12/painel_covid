import axios from "axios";

const url = process.env.VUE_APP_API + "/api/regions";

const endpoints = {
  all_data: url,
  all_regions: url + "/list",
  all_dates: url + "/dates",
  last_date: url + "/newestDate"
};

export class Data {
  get_all_data = () => axios.get(endpoints.all_data);

  get_all_regions = () => axios.get(endpoints.all_regions);

  get_all_dates = () => axios.get(endpoints.all_dates);

  get_last_date = () => axios.get(endpoints.last_date);

  get_data_by_region = region => axios.get(url + "?regiao=" + region);

  // get_one_region_by_data = (date) => axios.get(url)

  get_region_by_date = time => axios.get(url + "?dataExtracao=" + time);

  // get_all = () => axios.get(endpoints.all)
}
