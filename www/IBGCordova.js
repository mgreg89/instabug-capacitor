"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
var exec = function (service, action, args, success, fail) {
    cordova.exec(success, fail, service, action, args);
};
exports.exec = exec;
