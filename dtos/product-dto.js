const UploadDto = require('../dtos/upload-dto');
const AttributeDto = require('./attribute-dto');

class ProductDto {

    id;
    name;
    category;
    brand;
    images;
    thumbnail;
    description;
    price;
    attributes;
    featured;
    todaysDeal;
    hasDiscount;
    discount;
    discountType;
    discountStartDate;
    discountEndDate;
    metaTitle;
    metaDescription;
    metaImage;
    slug;

    constructor(data) {
        this.id = data._id;
        this.name = data.name;
        this.category = data.category;
        this.brand = data.brand;
        this.images = data.images.map((x) => new UploadDto(x));
        this.thumbnail = process.env.APP_URL_IMAGES + data.thumbnail.path;
        this.description = data.description;
        this.price = data.price;
        this.attributes = data.attributeIds.map((x) => new AttributeDto(x));
        this.featured = data.featured;
        this.todaysDeal = data.todaysDeal;
        this.metaTitle = data.metaTitle;
        this.metaDescription = data.metaDescription;
        this.metaImage = process.env.APP_URL_IMAGES + data.metaImage.path;
        this.slug = data.slug;
        this.hasDiscount = data.discount > 0;
        this.discount = data.discount;
        this.discountType = data.discountType;
        this.discountStartDate = data.discountStartDate;
        this.discountEndDate = data.discountEndDate;
    }

}

module.exports = ProductDto;
