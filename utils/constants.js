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
    static MESSAGE_USER_FOUND = "User Found";

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

    //Banner
    static MESSAGE_BANNER_ADDED = "Banner Added";
    static MESSAGE_BANNER_ADD_FAILED = "Failed To Add Banner";
    static MESSAGE_BANNER_FOUND = "Banner Found";
    static MESSAGE_BANNER_NOT_FOUND = "No Banner Found";
    static MESSAGE_BANNER_ID_INVALID = "Invalid Banner Id";
    static MESSAGE_BANNER_UPDATE = "Banner Updated";
    static MESSAGE_BANNER_DELETED = "Banner Deleted";


    //Wishlist
    static MESSAGE_WISHLIST_ADDED = "Wishlist Added";
    static MESSAGE_WISHLIST_ADD_FAILED = "Failed To Add Wishlist";
    static MESSAGE_WISHLIST_FOUND = "Wishlist Found";
    static MESSAGE_WISHLIST_NOT_FOUND = "No Wishlist Found";
    static MESSAGE_WISHLIST_ID_INVALID = "Invalid Wishlist Id";
    static MESSAGE_WISHLIST_DELETED = "Wishlist Deleted";


    //Cart
    static MESSAGE_CART_ADDED = "Cart Added";
    static MESSAGE_CART_ADD_FAILED = "Failed To Add Cart";
    static MESSAGE_CART_FOUND = "Cart Found";
    static MESSAGE_CART_NOT_FOUND = "No Cart Found";
    static MESSAGE_CART_ID_INVALID = "Invalid Cart Id";
    static MESSAGE_CART_UPDATE = "Cart Updated";
    static MESSAGE_CART_DELETED = "Cart Deleted";
}

module.exports = Constants;