class NetManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.urlBase = 'https://beehive-2021-default-rtdb.firebaseio.com/data/';
    }


// USERS

    downloadData(endPoint, callback){
        console.log("Downloading: ", endPoint);
        var request = new XMLHttpRequest();
        var url = this.urlBase +  endPoint;
        request.onreadystatechange = this.onRequest.bind(this, callback);
        request.open('GET', url);
        request.send();
    }

    onRequest(callback, e){
        var request = e.target;
        if(request.readyState === 4) {
            if(request.status === 200) {
                var data = JSON.parse(request.response);
                callback(data);
            } else {
                console.error('Error on request', request.status);
            }
        } 
    }

    fetchBees(){
        this.downloadData('users.json', this.parseBees.bind(this));
    }

    fetchPosts(){
        this.downloadData('posts.json', this.parsePosts.bind(this));
    }

    fetchComments(){
        this.downloadData('comments.json', this.parseComments.bind(this));
    }

    fetchTodos(){
        this.downloadData('todos.json', this.parseTodos.bind(this));
    }

    fetchAlbums(){
        this.downloadData('albums.json', this.parseAlbums.bind(this));
    }

    fetchPhotos(){
        this.downloadData('photos.json', this.parsePhotos.bind(this));
    }

    parseBees(data){
        data.forEach(user => {
            var geo = new Geo(user.address.geo.lat, user.address.geo.lng);
            var address = new Address(user.address.city, geo, user.address.street, user.address.suite, user.address.zipcode);
            var company = new Company(user.company.bs, user.company.catchPhrase, user.company.name);                   
            var bee = new Bee(user.id, user.name, user.username, user.email, address, user.isOwner, user.phone, user.website, company);
            this.appManager.dataManager.bees.push(bee);
        });
        
        this.fetchPosts();
    }
    
    parsePosts(data){
        data.forEach(model => {
            var post = new Post(model.id, model.userId, model.title, model.body);
            this.addPostToBee(post); 
        });
        this.fetchComments(); 
    }
    
    parseComments(data){
        data.forEach(model => {
            var comment = new Comment(model.id, model.postId, model.name, model.body, model.email)
            this.addCommentToPost(comment);
            // console.log(comment);
        });
        this.fetchTodos();
    }
    
    parseTodos(data){
        data.forEach(model => {
            var todo = new Todo(model.id, model.userId, model.title, model.completed);
            this.addTodoToBee(todo);
        });
        this.fetchAlbums();
    }

    parseAlbums(data){
        data.forEach(model => {
            var album = new Album(model.id, model.userId, model.title)
            this.addAlbumToBee(album);
        });
        this.fetchPhotos();
    }

    parsePhotos(data){
        data.forEach(photo => {
            // console.log(photo);
        });
        this.appManager.uiManager.showUI();
        console.log(this.appManager.dataManager.bees);
    }

    
    addPostToBee(post) {
        this.appManager.dataManager.bees.forEach(bee => {
            if (bee.id === post.userId) {
                bee.posts.push(post);
                return;
            }
        });
    }

    addCommentToPost(comment){
        this.appManager.dataManager.bees.forEach(bee => {
            bee.posts.forEach(post => {
                if(post.id === comment.postId) {
                    post.comments.push(comment);
                    return;
                }
            })
        })
    }

    addTodoToBee(todo){
        this.appManager.dataManager.bees.forEach(bee => {
            if(bee.id === todo.userId) {
                bee.todos.push(todo);
            }
        });
    }

    addAlbumToBee(album){
        this.appManager.dataManager.bees.forEach(bee => {
            if(bee.id === album.userId) {
                bee.albums.push(album);
            }
        })
    }

}

