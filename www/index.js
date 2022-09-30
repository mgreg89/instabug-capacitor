"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Instabug_1 = __importDefault(require("./Instabug"));
var BugReporting_1 = __importDefault(require("./BugReporting"));
var FeatureRequests_1 = __importDefault(require("./FeatureRequests"));
var Replies_1 = __importDefault(require("./Replies"));
var Surveys_1 = __importDefault(require("./Surveys"));
module.exports = { Instabug: Instabug_1.default, BugReporting: BugReporting_1.default, FeatureRequests: FeatureRequests_1.default, Surveys: Surveys_1.default, Replies: Replies_1.default };
