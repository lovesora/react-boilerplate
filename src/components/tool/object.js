export default class ObjectTool {
    static clone (obj){  
    if (typeof(obj) != 'object' || obj == null) return obj;  
    let newObj = new Object();  
    for (let i in obj){  
      newObj[i] = clone(obj[i]); 
    }
    return newObj;
}  
}