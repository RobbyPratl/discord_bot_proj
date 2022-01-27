function convertJsonToBase64(data){
    let buff = Buffer.from(data);
    let base64data = buff.toString('base64');
    return 'data:application/json;base64,'+base64data
}

function convertImageToBase64(contents,type = null){
    var returnedData;
    if (type == "svg"){
        let imageBuff = Buffer.from(contents);
        let base64ImageData = imageBuff.toString('base64');
        returnedData = 'data:image/svg+xml;base64,' + base64ImageData;
    }else if(type == "link"){
        returnedData = contents;
    }else if(type == null){
      console.log("No type passed -- program assumes you passed in link!")
      returnedData = contents;
    }else{
        throw "Contents argument must be in form of ascii link or svg data!!";
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


/*
Generate Encoded JSON for an NFT by passing in three strings: name, description,image.
Type is prefered, not required if using a link to image, but required for passing in an svg 
*/
function generateEncoded(name,desc,image,type = null) {
  console.log("Generating JSON");
  imageToBase64 = convertImageToBase64(image,type);

  generatedJSON = generateJSON(name,desc,imageToBase64);
  
  return convertJsonToBase64(generatedJSON);

}


module.exports = {convertJsonToBase64,convertImageToBase64,generateJSON,generateEncoded};


