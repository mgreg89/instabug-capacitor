"use strict";
/*
 * Instabug Bug Reporting module.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var IBGCordova_1 = require("./IBGCordova");
var ArgsRegistry_1 = __importDefault(require("./ArgsRegistry"));
var BugReporting;
(function (BugReporting) {
    var reportType;
    (function (reportType) {
        reportType["bug"] = "bug";
        reportType["feedback"] = "feedback";
        reportType["question"] = "question";
    })(reportType = BugReporting.reportType || (BugReporting.reportType = {}));
    var option;
    (function (option) {
        option["emailFieldHidden"] = "emailFieldHidden";
        option["emailFieldOptional"] = "emailFieldOptional";
        option["commentFieldRequired"] = "commentFieldRequired";
        option["disablePostSendingDialog"] = "disablePostSendingDialog";
    })(option = BugReporting.option || (BugReporting.option = {}));
    var invocationEvents;
    (function (invocationEvents) {
        invocationEvents["shake"] = "shake";
        invocationEvents["button"] = "button";
        invocationEvents["screenshot"] = "screenshot";
        invocationEvents["swipe"] = "swipe";
        invocationEvents["none"] = "none";
    })(invocationEvents = BugReporting.invocationEvents || (BugReporting.invocationEvents = {}));
    var extendedBugReportMode;
    (function (extendedBugReportMode) {
        extendedBugReportMode["enabledWithRequiredFields"] = "enabledWithRequiredFields";
        extendedBugReportMode["enabledWithOptionalFields"] = "enabledWithOptionalFields";
        extendedBugReportMode["disabled"] = "disabled";
    })(extendedBugReportMode = BugReporting.extendedBugReportMode || (BugReporting.extendedBugReportMode = {}));
    BugReporting.position = ArgsRegistry_1.default.position;
    /**
     * Enables or disables all bug reporting functionalities.
     * @param isEnabled a boolean to enable or disable the feature.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setEnabled = function (isEnabled, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setBugReportingEnabled", [isEnabled], success, error);
    };
    /**
     * Sets report type either bug, feedback or both.
     * @param reportTypes an array of reportType.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setReportTypes = function (reportTypes, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setReportTypes", [reportTypes], success, error);
    };
    /**
     * Shows report view with specified options.
     * @param reportType an enum of reportType.
     * @param options an array of invocation option.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.showWithOptions = function (reportType, options, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "showBugReportingWithReportTypeAndOptions", [reportType, options], success, error);
    };
    /**
     * Sets the invocation options.
     * Default is set by `Instabug.start`.
     * @param options an array of invocation option.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setOptions = function (options, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setInvocationOptions", [options], success, error);
    };
    /**
     * Sets a block of code to be executed just before the SDK's UI is presented.
     * This block is executed on the UI thread. Could be used for performing any
     * UI changes before the SDK's UI is shown.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setOnInvokeHandler = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setPreInvocationHandler", [], success, error);
    };
    /**
     * Sets a block of code to be executed right after the SDK's UI is dismissed.
     * This block is executed on the UI thread. Could be used for performing any
     * UI changes after the SDK's UI is dismissed.
     * @param success callback on function success; param includes reportType and dismissType.
     * @param error callback on function error.
     */
    BugReporting.setOnDismissHandler = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setPostInvocationHandler", [], success, error);
    };
    /**
     * Sets the events that will invoke the SDK.
     * @param events an array of invocationEvents.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setInvocationEvents = function (events, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setInvocationEvents", [events], success, error);
    };
    /**
     * Sets enabled types of attachments for bug reporting.
     * @param screenshot a boolean to enable/disable screenshot attachment.
     * @param extraScreenshot a boolean to enable/disable extra screenshot attachment.
     * @param galleryImage a boolean to enable/disable gallery image attachment.
     * @param screenRecording a boolean to enable/disable screen recording attachment.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setEnabledAttachmentTypes = function (screenshot, extraScreenshot, galleryImage, screenRecording, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setAttachmentTypesEnabled", [screenshot, extraScreenshot, galleryImage, screenRecording], success, error);
    };
    /**
     *
     * @param extendedBugReportMode an enum of extendedBugReportMode.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setExtendedBugReportMode = function (extendedBugReportMode, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setExtendedBugReportMode", [extendedBugReportMode], success, error);
    };
    /**
     * Sets the default edge and offset from the top at which the floating button
     * will be shown. Different orientations are already handled.
     * @param edge the position of the edge; the default is right.
     * @param offset the offset value from the top edge.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setFloatingButtonEdge = function (edge, offset, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setFloatingButtonEdge", [edge, offset], success, error);
    };
    /**
     * Sets the threshold value of the shake gesture for iPhone/iPod Touch
     * Default for iPhone is 2.5.
     * @param threshold the shaking threshold for iPhone.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setShakingThresholdForiPhone = function (threshold, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setShakingThresholdForiPhone", [threshold], success, error);
    };
    /**
     * Sets the threshold value of the shake gesture for iPad.
     * Default for iPad is 0.6.
     * @param threshold the shaking threshold for iPad.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setShakingThresholdForiPad = function (threshold, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setShakingThresholdForiPad", [threshold], success, error);
    };
    /**
     * Sets the threshold value of the shake gesture for android devices.
     * Default for android is an integer value equals 350.
     * you could increase the shaking difficulty level by
     * increasing the `350` value and vice versa
     * @param threshold the shaking threshold for android devices.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setShakingThresholdForAndroid = function (threshold, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setShakingThreshold", [threshold], success, error);
    };
    /**
     * Sets the default position at which the Instabug screen recording button will be shown.
     * Different orientations are already handled.
     * (Default for `position` is `bottomRight`)
     *
     * @param position an enum of position to control the video recording button position on the screen.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    BugReporting.setVideoRecordingFloatingButtonPosition = function (position, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setVideoRecordingFloatingButtonPosition", [position], success, error);
    };
})(BugReporting || (BugReporting = {}));
module.exports = BugReporting;
