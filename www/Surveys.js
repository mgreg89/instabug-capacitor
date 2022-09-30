"use strict";
/*
 * Instabug Surveys module.
 */
var IBGCordova_1 = require("./IBGCordova");
var Surveys;
(function (Surveys) {
    /**
     * Sets whether auto surveys showing are enabled or not.
     * @param autoShowingSurveysEnabled  a boolean for whether to auto show a survey.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Surveys.setAutoShowingEnabled = function (autoShowingSurveysEnabled, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setAutoShowingSurveysEnabled", [autoShowingSurveysEnabled], success, error);
    };
    /**
     * Sets whether surveys are enabled or not.
     * If you disable surveys on the SDK but still have active surveys on your Instabug dashboard,
     * those surveys are still going to be sent to the device, but are not going to be
     * shown automatically.
     * To manually display any available surveys, call `Instabug.showSurveyIfAvailable()`.
     * Defaults to `true`.
     * @param isEnabled a boolean to enable or disable the feature.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Surveys.setEnabled = function (isEnabled, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setSurveysEnabled", [isEnabled], success, error);
    };
    /**
     * Shows one of the surveys that were not shown before, that also have conditions
     * that match the current device/user.
     * Does nothing if there are no available surveys or if a survey has already been shown
     * in the current session.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Surveys.showSurveyIfAvailable = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "showSurveyIfAvailable", [], success, error);
    };
    /**
     * Sets a block of code to be executed just before the survey's UI is presented.
     * This block is executed on the UI thread. Could be used for performing any UI changes before
     * the survey's UI is shown.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Surveys.setOnShowHandler = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "willShowSurveyHandler", [], success, error);
    };
    /**
     * Sets a block of code to be executed right after the survey's UI is dismissed.
     * This block is executed on the UI thread. Could be used for performing any UI
     * changes after the survey's UI is dismissed.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Surveys.setOnDismissHandler = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "didDismissSurveyHandler", [], success, error);
    };
    /**
     * Shows survey with a specific token.
     * Does nothing if there are no available surveys with that specific token.
     * Answered and cancelled surveys won't show up again.
     * @param surveyToken a string with a survey token.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Surveys.showSurveyWithToken = function (surveyToken, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "showSurveyWithToken", [surveyToken], success, error);
    };
    /**
     * Returns true if the survey with a specific token was answered before.
     * Will return false if the token does not exist or if the survey was not answered before.
     * @param surveyToken a string with a survey token.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Surveys.hasRespondedToSurveyWithToken = function (surveyToken, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "hasRespondedToSurveyWithToken", [surveyToken], success, error);
    };
    /**
     * Returns an array containing the available surveys.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Surveys.getAvailableSurveys = function (success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "getAvailableSurveys", [], success, error);
    };
    /**
     * Setting an option for all the surveys to show a welcome screen before
     * the user starts taking the survey.
     * @param shouldShowWelcomeScreen  a boolean to control whether the welcome screen should show.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    Surveys.setShouldShowSurveysWelcomeScreen = function (shouldShowWelcomeScreen, success, error) {
        (0, IBGCordova_1.exec)("IBGPlugin", "setShouldShowSurveysWelcomeScreen", [shouldShowWelcomeScreen], success, error);
    };
})(Surveys || (Surveys = {}));
module.exports = Surveys;
