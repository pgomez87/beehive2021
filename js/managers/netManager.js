class NetManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.urlBase = 'https://beehive-2021-default-rtdb.firebaseio.com/data/';
    }


    downloadData(endPoint, callback) {
        console.log("Downloading: ", endPoint);
        var request = new XMLHttpRequest();
        var url = this.urlBase + endPoint;
        request.onreadystatechange = this.onRequest.bind(this, callback);
        request.open('GET', url);
        request.send();
    }

    onRequest(callback, e) {
        var request = e.target;
        if (request.readyState === 4) {
            if (request.status === 200) {
                var data = JSON.parse(request.response);
                callback(data);
            } else {
                console.error('Error on request', request.status);
            }
        }
    }

    fetchBees() {
        this.downloadData('users.json', this.parseBees.bind(this));
    }

    fetchPosts() {
        this.downloadData('posts.json', this.parsePosts.bind(this));
    }

    fetchComments() {
        this.downloadData('comments.json', this.parseComments.bind(this));
    }

    fetchTodos() {
        this.downloadData('todos.json', this.parseTodos.bind(this));
    }

    fetchAlbums() {
        this.downloadData('albums.json', this.parseAlbums.bind(this));
    }

    fetchPhotos() {
        this.downloadData('photos.json', this.parsePhotos.bind(this));
    }

    parseBees(data) {
        data.forEach(model => {
            var geo = new Geo(model.address.geo.lat, model.address.geo.lng);
            var address = new Address(model.address.city, geo, model.address.street, model.address.suite, model.address.zipcode);
            var company = new Company(model.company.bs, model.company.catchPhrase, model.company.name);
            var bee = new Bee(model.id, model.name, model.username, model.email, address, model.isOwner, model.phone, model.website, company, model.avatar);
            this.appManager.dataManager.bees.push(bee);
        });

        this.fetchPosts();
    }

    parsePosts(data) {
        data.forEach(model => {
            var post = new Post(model.id, model.userId, model.title, model.body);
            this.addPostToBee(post);
        });
        this.fetchComments();
    }

    parseComments(data) {
        data.forEach(model => {
            var comment = new Comment(model.id, model.postId, model.name, model.body, model.beeId)
            this.addCommentToPost(comment);
            // console.log(comment);
        });
        this.fetchTodos();
    }

    parseTodos(data) {
        data.forEach(model => {
            var todo = new Todo(model.id, model.userId, model.title, model.completed);
            this.addTodoToBee(todo);
        });
        this.fetchAlbums();
    }

    parseAlbums(data) {
        data.forEach(model => {
            var album = new Album(model.id, model.userId, model.title)
            this.addAlbumToBee(album);
        });
        this.fetchPhotos();
    }

    parsePhotos(data) {
        data.forEach(model => {
            var photo = new Photo(model.id, model.albumId, model.title, model.thumbnailUrl, model.url);
            this.addPhotoToBeeAlbum(photo);
        });

        console.log(this.appManager.dataManager.bees);

        this.appManager.uiManager.showUI();
    }


    addPostToBee(post) {
        var bee = this.getBeeById(post.userId);
        if (bee) {
            {
                bee.posts.push(post);
            }
        }
    }

    addCommentToPost(comment) {
        this.appManager.dataManager.bees.forEach(bee => {
            bee.posts.forEach(post => {
                if (post.id === comment.postId) {
                    post.comments.push(comment);
                    return;
                }
            });
        });
    }

    addTodoToBee(todo) {
        var bee = this.getBeeById(todo.userId);
        if (bee) {
            bee.todos.push(todo);
        }
    }


    addAlbumToBee(album) {
        var bee = this.getBeeById(album.userId);
        if (bee) {
            bee.albums.push(album)
        }

    }

    addPhotoToBeeAlbum(photo) {
        this.appManager.dataManager.bees.forEach(bee => {
            bee.albums.forEach(album => {
                if (album.id === photo.albumId) {
                    album.photos.push(photo);
                }
            });
        });
    }

    getBeeById(id) {
        for (let i = 0; i < this.appManager.dataManager.bees.length; i++) {
            if (this.appManager.dataManager.bees[i].id === id) {
                return this.appManager.dataManager.bees[i];
            }

        }

        return null;
    }

    addNewPost(post, model) {
        model.addPost(post);
        this.appManager.uiManager.update.showPostListComponent(model);
    }

}