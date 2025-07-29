export type LoggedOutStackType = {
    LOGIN_PAGE: undefined;
    REGISTRATION_PAGE: undefined;
};
export type LoggedInStackType = {
HOME_PAGE: undefined;
};

const LoggedOutStackScreens: LoggedOutStackType = {
LOGIN_PAGE: undefined,
REGISTRATION_PAGE: undefined,
};
const LoggedInStackScreens: LoggedInStackType = {
HOME_PAGE: undefined,
};
export type RootStackNavigation = {
LOGGED_IN_STACK: {screen?: keyof typeof LoggedInStackScreens};
LOGGED_OUT_STACK: {screen?: keyof typeof LoggedOutStackScreens};
};





