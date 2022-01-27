
class UploadDto {

    id;
    name;
    path;

    constructor(data) {
        this.id = data._id;
        this.name = data.name;
        this.path = data.path;
    }

}

module.exports = UploadDto;