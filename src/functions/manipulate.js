
export class Manipulate {
    constructor(){ }
    
    mms(data, period){
        data = this.dia(data)
        let arr_ret = []
        for(let i = 0; i < data.length; i++){
            if(i < period){
                arr_ret.push( data[i]/2 )
            }else{
                let aux = 0
                for(let j = 0; j < period; j++){
                    aux += data[i - j]
                }
                arr_ret.push(~~(aux/period))
            }
        }
        return arr_ret
    }

}
