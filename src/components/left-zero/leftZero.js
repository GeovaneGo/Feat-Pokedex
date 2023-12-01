const LeftZero =({num})=> {
        if(num > 9999){
             return   ("00000" + num).slice(-5);
        } else {                
             return   ("0000" + num).slice(-4);
        }
}

export default LeftZero;