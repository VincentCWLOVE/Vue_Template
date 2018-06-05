/*
* Created by Vincent on 2018/6/5
* github: https://github.com/VincentCWLOVE
* Email:438419787@qq.com
*/
class BaseModel {
    constructor(recived_obj){

        if(!BaseModel.isJSON(recived_obj)){
            throw new TypeError('recived_obj must be of type object, not array')
        }

        this.recived_obj = recived_obj
        Object.keys(this.recived_obj).forEach((key) => {
            this[key] = this.recived_obj[key]
        })
        
    }
    static isJSON(obj){
        return typeof(obj) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
    }
    

}

export default BaseModel