
function convertJsonToBase64(data){
    let buff = Buffer.from(data);
    let base64data = buff.toString('base64');
    return 'data:application/json;base64,'+base64data
}

function convertImageToBase64(type,contents){
    var returnedData;
    if (type == "svg"){
        let imageBuff = Buffer.from(contents);
        let base64ImageData = imageBuff.toString('base64');
        returnedData = 'data:image/svg+xml;base64,' + base64ImageData;
    }else{
        returnedData = contents;
    }
    return returnedData;
}

function generateJSON(name,desc,image){
    var dict = {};
    dict["name"] = name.toString();
    dict["description"] = desc.toString();
    dict["image"] = image.toString();
    return JSON.stringify(dict);var fs = require('fs');
}

function generateEncoded() {

}