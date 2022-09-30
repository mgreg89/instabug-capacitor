"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var IBGCordova_1 = require("./IBGCordova");
var ArgsRegistry_1 = __importDefault(require("./ArgsRegistry"));
var Instabug;
(function (Instabug) {
    Instabug.welcomeMessageMode = ArgsRegistry_1.default.welcomeMessageMode;
    Instabug.floatingButtonEdge = ArgsRegistry_1.default.floatingButtonEdge;
    Instabug.colorTheme = ArgsRegistry_1.default.colorTheme;
    Instabug.strings = ArgsRegistry_1.default.strings;
    Instabug.reproStepsMode = ArgsRegistry_1.default.reproStepsMode;
    Instabug.locale = ArgsRegistry_1.default.locale;
    /**
     * Starts the SDK.
     * This is the main SDK method that does all the magic. This is the only
     * method that SHOULD be called.
     * Should be called in constructor of the AppRegistry component
     *
     * @param token the token that identifies the app, you can find
     * it on your dashboard.
     * @param invocationEvents an array of invocationEvents that invoke
     * the SDK's UI.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.start = function (token, invocationEvents, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "start", [token, invocationEvents], success, error);
    };
    /**
     * Shows default Instabug prompt.
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.show = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "show", [], success, error);
    };
    /**
     * Sets the primary color of the SDK's UI.
     * Sets the color of UI elements indicating interactivity or call to action.
     * To use, import processColor and pass to it with argument the color hex
     * as argument.
     *
     * @param color a color hex to set the UI elements of the SDK to.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setPrimaryColor = function (color, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setPrimaryColor", [color], success, error);
    };
    /**
     * Logs a user event that happens through the lifecycle of the application.
     * Logged user events are going to be sent with each report, as well as at the end of a session.
     *
     * @param userEvent the user event name.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.logUserEventWithName = function (userEvent, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "logUserEventWithName", [userEvent], success, error);
    };
    /**
     * Sets whether user steps tracking is visual, non visual or disabled.
     * User Steps tracking is enabled by default if it's available
     * in your current plan.
     *
     * @param reproStepsMode an enum to set user steps tracking
     * to be enabled, non visual or disabled.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setReproStepsMode = function (reproStepsMode, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setReproStepsMode", [reproStepsMode], success, error);
    };
    /**
     * The session profiler is enabled by default and it attaches to the bug and
     * crash reports the following information during the last 60 seconds before the report is sent.
     * @param isEnabled a boolean to enable or disable the feature.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setSessionProfilerEnabled = function (isEnabled, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setSessionProfilerEnabled", [isEnabled], success, error);
    };
    /**
     * Sets the welcome message mode to live, beta or disabled.
     * @param mode an enum to set the welcome message mode.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setWelcomeMessageMode = function (mode, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setWelcomeMessageMode", [mode], success, error);
    };
    /**
     * Shows the welcome message in a specific mode.
     * @param mode an enum to set the mode to show the welcome message with.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.showWelcomeMessage = function (mode, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "showWelcomeMessage", [mode], success, error);
    };
    /**
     * Attaches user data to each report being sent.
     * Each call to this method overrides the user data to be attached.
     * Maximum size of the string is 1,000 characters.
     *
     * @param data a string to be attached to each report, with a
     * maximum size of 1,000 characters.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setUserData = function (data, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setUserData", [data], success, error);
    };
    /**
     * Add file to be attached to the bug report.
     *
     * @param filePath the path of the file to be attached.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.addFile = function (filePath, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "addFile", [filePath], success, error);
    };
    /**
     * Appends a log message to Instabug internal log
     * <p>
     * These logs are then sent along the next uploaded report.
     * All log messages are timestamped <br/>
     * Logs aren't cleared per single application run.
     * If you wish to reset the logs,
     * use {@link #clearLogs()} ()}
     * </p>
     * Note: logs passed to this method are <b>NOT</b> printed to Logcat
     *
     * @param message the log message.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.addLog = function (message, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "addLog", [message], success, error);
    };
    /**
     * Clear all Instabug logs, console logs, network logs and user steps.
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.clearLog = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "clearLog", [], success, error);
    };
    /**
     * Sets whether IBGLog should also print to Xcode's console log or not.
     *
     * @param isEnabled a boolean to set whether printing to
     *                  Xcode's console is enabled or not.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setIBGLogPrintsToConsole = function (isEnabled, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setIBGLogPrintsToConsole", [isEnabled], success, error);
    };
    /**
     * Disables all Instabug functionality
     * It works on android only
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.disable = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "disable", [], success, error);
    };
    /**
     * Enables all Instabug functionality
     * It works on android only
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.enable = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "enable", [], success, error);
    };
    /**
     * Gets a boolean indicating whether the SDK is enabled or not
     * It works on android only
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.isEnabled = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "getIsEnabled", [], success, error);
    };
    /**
     * Sets user attribute to overwrite it's value or create a new one if it doesn't exist.
     *
     * @param key   the attribute key.
     * @param value the attribute value.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setUserAttribute = function (key, value, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setUserAttribute", [key, value], success, error);
    };
    /**
     * Removes user attribute if exists.
     *
     * @param key the attribute key as string.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.removeUserAttribute = function (key, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "removeUserAttribute", [key], success, error);
    };
    /**
     * Returns all user attributes.
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.getAllUserAttributes = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "getAllUserAttributes", [], success, error);
    };
    /**
     * Returns the user attribute associated with a given key.
     *
     * @param key the attribute key as string.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.getUserAttribute = function (key, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "getUserAttribute", [key], success, error);
    };
    /**
     * Sets the default value of the user's email and hides the email field from the reporting UI
     * and set the user's name to be included with all reports.
     * It also reset the chats on device to that email and removes user attributes,
     * user data and completed surveys.
     *
     * @param email the email address to be set as the user's email.
     * @param name the name of the user to be set.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.identifyUserWithEmail = function (email, name, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "identifyUserWithEmail", [email, name], success, error);
    };
    Instabug.setPreSendingHandler = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setPreSendingHandler", [], success, error);
    };
    /**
     * Sets the default value of the user's email to nil and show email field and remove user name
     * from all reports
     * It also reset the chats on device and removes user attributes, user data and completed surveys.
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.logOut = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "logOut", [], success, error);
    };
    /**
     * Enable/Disable debug logs from Instabug SDK
     * Default state: disabled
     *
     * @param isDebugEnabled a boolean to control whether debug logs should be printed or not into LogCat.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setDebugEnabled = function (isDebugEnabled, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setDebugEnabled", [isDebugEnabled], success, error);
    };
    /**
     * Sets the SDK's locale.
     * Use to change the SDK's UI to different language.
     * Defaults to the device's current locale.
     *
     * @param locale a locale to set the SDK to.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setLocale = function (locale, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setLocale", [locale], success, error);
    };
    /**
     * Sets SDK color theme.
     *
     * @param theme the color theme to set the SDK UI to.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setColorTheme = function (theme, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setColorTheme", [theme], success, error);
    };
    /**
     * Overrides any of the strings shown in the SDK with custom ones.
     * Allows you to customize any of the strings shown to users in the SDK.
     * @param key the key of the string to override.
     * @param value the string value to override the default one.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Instabug.setString = function (key, value, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setString", [key, value], success, error);
    };
})(Instabug || (Instabug = {}));
module.exports = Instabug;
