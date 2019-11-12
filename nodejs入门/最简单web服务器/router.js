function route(handle, path, response) {
    console.log('处理请求地址为' + path);
    if (typeof handle[path] === 'function') {
        handle[path](response);
    }
    else {
        console.log('No handler for ' + path);
    }
}

module.exports.route = route;
