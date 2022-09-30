"use strict";
/*
 * Instabug Replies module.
 */
var IBGCordova_1 = require("./IBGCordova");
var Replies;
(function (Replies) {
    /**
     * Enables or disables all replies functionalities.
     * @param isEnabled a boolean to enable or disable the feature.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Replies.setEnabled = function (isEnabled, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setRepliesEnabled", [isEnabled], success, error);
    };
    /**
     * Shows replies.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Replies.show = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "showReplies", [], success, error);
    };
    /**
     * Calls success callback if chats exist.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Replies.hasChats = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "hasChats", [], success, error);
    };
    /**
     * Returns the number of unread replies for the user.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Replies.getUnreadRepliesCount = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "getUnreadRepliesCount", [], success, error);
    };
    /**
     * Enables in app notifications for any new reply received.
     * @param isEnabled a boolean to enable or disable in-app notifications.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Replies.setInAppNotificationEnabled = function (isEnabled, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setChatNotificationEnabled", [isEnabled], success, error);
    };
})(Replies || (Replies = {}));
module.exports = Replies;
