declare namespace Replies {
    /**
     * Enables or disables all replies functionalities.
     * @param isEnabled a boolean to enable or disable the feature.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setEnabled: (isEnabled: boolean, success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Shows replies.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const show: (success?: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Calls success callback if chats exist.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const hasChats: (success: () => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Returns the number of unread replies for the user.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const getUnreadRepliesCount: (success: (repliesCount: number) => void, error?: ((err: any) => void) | undefined) => void;
    /**
     * Enables in app notifications for any new reply received.
     * @param isEnabled a boolean to enable or disable in-app notifications.
     * @param success callback on function success.
     * @param error callback on function error.
     */
    const setInAppNotificationEnabled: (isEnabled: boolean, success?: () => void, error?: ((err: any) => void) | undefined) => void;
}
export = Replies;
