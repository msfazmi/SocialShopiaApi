class Constants {
    static OTP_TYPE_VERIFY_EMAIL = 1;
    static OTP_TYPE_FORGOT_PASSWORD = 2;
    static OTP_VALID = "valid";
    static OTP_INVALID = "invalid";
    static OTP_EXPIRED = "expired";

    static USER_STATUS_VERIFIED = 'verified';
    static USER_STATUS_UNVERIFIED = 'unverified';
    static USER_STATUS_BANNED = 'banned';


    static BCRYPT_PASSWORD_SALT_FACTOR = 10;

    static PLACEHOLDER_USER_IMAGE = process.env.APP_URL_STORAGE + '/profile/user.png'
}

module.exports = Constants;