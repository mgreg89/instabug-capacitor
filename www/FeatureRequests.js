"use strict";
/*
 * Instabug Feature Requests module.
 */
var IBGCordova_1 = require("./IBGCordova");
var FeatureRequests;
(function (FeatureRequests) {
    var actionTypes;
    (function (actionTypes) {
        actionTypes["requestNewFeature"] = "requestNewFeature";
        actionTypes["addCommentToFeature"] = "addCommentToFeature";
    })(actionTypes = FeatureRequests.actionTypes || (FeatureRequests.actionTypes = {}));
    /**
     * Shows the UI for feature requests list.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    FeatureRequests.show = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "showFeatureRequests", [], success, error);
    };
    /**
     * Sets whether users are required to enter an email address or not when
     * sending reports.
     * Defaults to YES.
     * @param isRequired a boolean to indicate if email field is required.
     * @param actionTypes array of actionTypes.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    FeatureRequests.setEmailFieldRequired = function (isRequired, actionTypes, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setEmailFieldRequiredForFeatureRequests", [isRequired, actionTypes], success, error);
    };
})(FeatureRequests || (FeatureRequests = {}));
module.exports = FeatureRequests;
