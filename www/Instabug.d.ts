import registry from "./ArgsRegistry";
import bugReporting from "./BugReporting";
declare namespace Instabug {
    const welcomeMessageMode: typeof registry.welcomeMessageMode;
    const floatingButtonEdge: typeof registry.floatingButtonEdge;
    const colorTheme: typeof registry.colorTheme;
    const strings: typeof registry.strings;
    const reproStepsMode: typeof registry.reproStepsMode;
    const locale: typeof registry.locale;
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
    const start: (token: string, invocationEvents: bugReporting.invocationEvents[], success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Shows default Instabug prompt.
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const show: (success?: () => void, error?: ((err: any) => void) | undefined) => void;
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
    const setPrimaryColor: (color: string, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Logs a user event that happens through the lifecycle of the application.
     * Logged user events are going to be sent with each report, as well as at the end of a session.
     *
     * @param userEvent the user event name.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const logUserEventWithName: (userEvent: string, success?: () => void, error?: ((err: any) => void) | undefined) => void;
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
    const setReproStepsMode: (reproStepsMode: registry.reproStepsMode | "enabled" | "disabled" | "enabledWithNoScreenshots", success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * The session profiler is enabled by default and it attaches to the bug and
     * crash reports the following information during the last 60 seconds before the report is sent.
     * @param isEnabled a boolean to enable or disable the feature.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setSessionProfilerEnabled: (isEnabled: boolean, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Sets the welcome message mode to live, beta or disabled.
     * @param mode an enum to set the welcome message mode.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setWelcomeMessageMode: (mode: registry.welcomeMessageMode, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Shows the welcome message in a specific mode.
     * @param mode an enum to set the mode to show the welcome message with.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const showWelcomeMessage: (mode: registry.welcomeMessageMode, success?: () => void, error?: ((err: any) => void) | undefined) => void;
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
    const setUserData: (data: string, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Add file to be attached to the bug report.
     *
     * @param filePath the path of the file to be attached.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const addFile: (filePath: string, success?: () => void, error?: ((err: any) => void) | undefined) => void;
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
    const addLog: (message: string, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Clear all Instabug logs, console logs, network logs and user steps.
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const clearLog: (success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Sets whether IBGLog should also print to Xcode's console log or not.
     *
     * @param isEnabled a boolean to set whether printing to
     *                  Xcode's console is enabled or not.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setIBGLogPrintsToConsole: (isEnabled: boolean, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Disables all Instabug functionality
     * It works on android only
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const disable: (success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Enables all Instabug functionality
     * It works on android only
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const enable: (success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Gets a boolean indicating whether the SDK is enabled or not
     * It works on android only
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const isEnabled: (success: (isEnabled: boolean) => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Sets user attribute to overwrite it's value or create a new one if it doesn't exist.
     *
     * @param key   the attribute key.
     * @param value the attribute value.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setUserAttribute: (key: string, value: string, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Removes user attribute if exists.
     *
     * @param key the attribute key as string.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const removeUserAttribute: (key: string, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Returns all user attributes.
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const getAllUserAttributes: (success: (userAttributes: {
        key: string;
        value: string;
    }[]) => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Returns the user attribute associated with a given key.
     *
     * @param key the attribute key as string.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const getUserAttribute: (key: string, success: (value: string) => void, error?: ((err: any) => void) | undefined) => void;
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
    const identifyUserWithEmail: (email: string, name: string, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    const setPreSendingHandler: (success: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Sets the default value of the user's email to nil and show email field and remove user name
     * from all reports
     * It also reset the chats on device and removes user attributes, user data and completed surveys.
     *
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const logOut: (success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Enable/Disable debug logs from Instabug SDK
     * Default state: disabled
     *
     * @param isDebugEnabled a boolean to control whether debug logs should be printed or not into LogCat.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setDebugEnabled: (isDebugEnabled: boolean, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Sets the SDK's locale.
     * Use to change the SDK's UI to different language.
     * Defaults to the device's current locale.
     *
     * @param locale a locale to set the SDK to.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setLocale: (locale: registry.locale | "arabic" | "azerbaijani" | "chineseSimplified" | "chineseTraditional" | "danish" | "dutch" | "english" | "french" | "german" | "italian" | "japanese" | "korean" | "polish" | "portugueseBrazil" | "russian" | "spanish" | "swedish" | "turkish" | "czech", success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Sets SDK color theme.
     *
     * @param theme the color theme to set the SDK UI to.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setColorTheme: (theme: registry.colorTheme, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Overrides any of the strings shown in the SDK with custom ones.
     * Allows you to customize any of the strings shown to users in the SDK.
     * @param key the key of the string to override.
     * @param value the string value to override the default one.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setString: (key: registry.strings, value: string, success?: () => void, error?: ((err: any) => void) | undefined) => void;
}
export = Instabug;
