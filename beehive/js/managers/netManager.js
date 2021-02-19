class NetManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.urlBase = 'https://beehive-2021-default-rtdb.firebaseio.com/data/';
    }


    downloadData(){
        console.log("Downloading data...")
        var request = new XMLHttpRequest();
        var url = this.urlBase + 'users.json';
        request.onreadystatechange = this.onUsersRequest.bind(this);
        request.open('GET', url);
        request.send();
    }

    onUsersRequest(e){
        var request = e.target;
        if(request.status === 200) {
            if(request.readyState === 4) {
                var data = JSON.parse(request.response);
                //1.Parsed to user objects

                // console.log(data);

                data.forEach(user => {
                    //Create Address object
                    //Create Company object

                    var bee = new Bee(user.id, user.name, user.username, user.email, user.address, 
                        user.isOwner, user.phone, user.website, user.company);
                
                    console.log(user);
                });
            }
        } else {

        }
    }
}