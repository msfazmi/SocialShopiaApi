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

    static MESSAGE_USER_NOT_FOUND = "No User Found";
    static MESSAGE_USER_FOUND = "No User Found";

    static MESSAGE_ACCOUNT_UPDATE = "Account Updated";

    static MESSAGE_ADDRESS_FOUND = "Address Found";
    static MESSAGE_ADDRESS_NOT_FOUND = "No Address Found";
    static MESSAGE_ADDRESS_ADDED = "Address Added Successfully";
    static MESSAGE_ADDRESS_ADD_FAILED = "Failed To Store Address";
    static MESSAGE_ADDRESS_UPDATED = "Address Updated";
    static MESSAGE_ADDRESS_UPDATE_FAILED = "Failed To Update Address";
    static MESSAGE_ADDRESS_DELETED = "Address Deleted Successfully";

    //Attribute
    static MESSAGE_ATTRIBUTE_ADDED = "Attribute Added";
    static MESSAGE_ATTRIBUTE_ADD_FAILED = "Failed To Add Attribute";
    static MESSAGE_ATTRIBUTE_FOUND = "Attribute Found";
    static MESSAGE_ATTRIBUTE_NOT_FOUND = "No Attribute Found";
    static MESSAGE_ATTRIBUTE_ID_INVALID = "Invalid Attribute Id";
    static MESSAGE_ATTRIBUTE_UPDATE = "Attribute Updated";
    static MESSAGE_ATTRIBUTE_DELETED = "Attribute Deleted";
}

module.exports = Constants;