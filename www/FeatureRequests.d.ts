declare namespace FeatureRequests {
    enum actionTypes {
        requestNewFeature = "requestNewFeature",
        addCommentToFeature = "addCommentToFeature"
    }
    /**
     * Shows the UI for feature requests list.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const show: (success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Sets whether users are required to enter an email address or not when
     * sending reports.
     * Defaults to YES.
     * @param isRequired a boolean to indicate if email field is required.
     * @param actionTypes array of actionTypes.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setEmailFieldRequired: (isRequired: boolean, actionTypes: actionTypes[], success?: () => void, error?: ((err: any) => void) | undefined) => void;
}
export = FeatureRequests;
