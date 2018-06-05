
/*
* Created by Vincent on 2018/6/5
* github: https://github.com/VincentCWLOVE
* Email:438419787@qq.com
*/

class Tool {

    /*
    *   Data Type Methods
    *   The following methods is used to check data types
    * */

    static isString(o){
        return Object.prototype.toString.call(o) === '[object String]';
    }

    static isNumberg(o){
        return Object.prototype.toString.call(o) === '[object Number]';
    }

    static isBoolean(o){
        return Object.prototype.toString.call(o) === '[object Boolean]';
    }

    static isUndefined(o){
        return Object.prototype.toString.call(o) === '[object Undefined]';
    }

    static isNull(o){
        return Object.prototype.toString.call(o) === '[object Null]';
    }

    static isFunction(o){
        return Object.prototype.toString.call(o) === '[object Function]';
    }

    static isObject(o){
        return Object.prototype.toString.call(o) === '[object Object]';
    }
    static isJsonObject(obj){
        let flag = typeof(obj) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
        if(flag){

            Object.keys(obj).forEach((key) => {
                  if(!Tool.isFunction(obj[key])){
                       flag = false
                  }
            })
        }
        return flag

    }

    static isNan(o){
        return isNaN(o)
    }

    static  isIDCard(o){
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(o)
    }

    static  isEmail(o){
        return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(o);
    }

    static isPhoneNo(o){
        return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(o);
    }

    static isUrl(o){
       return /(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/g.test(o)
    }

    /**
     *
     * @desc   url参数转对象
     * @param  {String} url  default: window.location.href
     * @return {Object}
     */
    static parseQueryString(url) {
        url = url == null ? window.location.href : url;
        let search = url.substring(url.lastIndexOf('?') + 1);
        if (!search) {
            return {}
        }
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }
}

export default Tool