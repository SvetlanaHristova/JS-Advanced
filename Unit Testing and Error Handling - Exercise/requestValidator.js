function requestValidator(obj) {
    let methodValid = ["GET", 'POST', 'DELETE', 'CONNECT'];
    let versionValid = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /[a-z0-9.]+/;
    let msPattern = /[^<>\&'"]+/;

    if (!(obj.method&&methodValid.includes(obj.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!(obj.version&&versionValid.includes(obj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!(obj.uri&&uriPattern.test(obj.uri))){
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!(obj.message == "" || msPattern.test(obj.message))) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return obj;
}

console.log(requestValidator(
    {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }));

console.log(requestValidator(
    {
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    }));

console.log(requestValidator(
    {
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
    }));


