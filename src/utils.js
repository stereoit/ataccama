
// finds key in object, returns path and value
export function findPathByKey(obj, key) {
  let result = null;
  if(obj instanceof Array){
    let localResult = null
    for(var i=0; i < obj.length; i++) {
      localResult = findPathByKey(obj[i], key)
      if (localResult) {
        result = i + "." + localResult
        break;
      }
    }
  } else {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (prop == key) {
          return prop
        }
        let item = obj[prop]
        if ( item instanceof Array || item instanceof Object) {

          // I need to wrap this otherwise `prop` is always the same
          let localResult = (function(p) {
            let result = findPathByKey(item, key)
              if (result) {
                return p + "." + result
              }
            })(prop);

            if(localResult) {
              result = localResult
              break;
            }
          }
        }
      }
    }
  return result;
}


// recLookup returns value specified `path`
// if the path is not present in `obj` it returns null
export function nestedLookup(obj, path) {
    let parts = path.split(".");
    if (parts.length==1){
        return obj[parts[0]];
    }
    return nestedLookup(obj[parts[0]], parts.slice(1).join("."));
}


// nestedDel removes property of `obj` specified by `path`
export function nestedDel(obj, path) {
  let parts = path.split(".");
  if (parts.length==1){
      return delete obj[parts[0]];
  }
  return nestedDel(obj[parts[0]], parts.slice(1).join("."));
}

export default {
  findPathByKey: findPathByKey,
  nestedLookup: nestedLookup,
  nestedDel: nestedDel
}
