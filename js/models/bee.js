class Bee {
    constructor(id, name, username, email, address, isOwner, phone, website, company, avatar) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.isOwner = isOwner;
        this.phone = phone;
        this.website = website;
        this.company = company;
        this.posts = [];
        this.todos = [];
        this.albums = [];
        this.avatar = avatar;
    }
}