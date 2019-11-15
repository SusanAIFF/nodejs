function route(handle, path, response, params) {
    console.log('处理请求地址为' + path);
    if (typeof handle[path] === 'function') {
        handle[path](response, params);
    }
    else {
        console.log('No handler for ' + path);
    }
}

module.exports.route = route;
