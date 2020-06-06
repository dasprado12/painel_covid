import data from "./index.js"

export class Data{
    constructor(){
    }

    get_by_region(region){
        const DF = data.DF
        let retorno = []
        for(let i = 0; i < DF.length; i++){
            if(DF[i].regiao.toUpperCase() == region.toUpperCase() )[
                retorno.push(DF[i])
            ]
        }
        return retorno
    }
}