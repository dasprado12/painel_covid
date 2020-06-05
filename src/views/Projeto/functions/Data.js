


class Data {
    filter_dates(){
        let data = null
        let retorno = []
        for(let i = 0; i < this.data.length; i++){
            data = this.data[i].dataExtracao
            retorno.indexOf(data) === -1 ? retorno.push(data) : console.log("This item already exists");
        }
        this.dates = retorno
    }
}