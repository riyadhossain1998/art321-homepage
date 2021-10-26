function hw_gen(title, description, tools, imgURL, link, row, completed) {
    
    cardProgress = ""
    if(completed == true) {
        // The assignment is complete.
        cardProgress = "completed-card"
    }
    else {
        cardProgress = "full-card"
    }
    

    card = '<div class="col-md-4">'+
                '<div class="card '+ cardProgress +'">' +
                    '<img src="' + imgURL + '" class="card-img"><a>' +
                    '<div class="card-img-overlay">' +
                        '<h5 class="card-title">'+ title +'</h5>' +
                        '<p class="card-text">'+ description +'</p>' +
                        '<div class="row">' +
                            '<div class="col-sm-12"><p class="card-text">Tools Used: <b>'+ tools +'</b></div>' +
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col-sm-3 offset-9">' +
                                '<a href="'+ link +'">'+ '<button class="btn btn-outline-dark view">View</button></a>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
    if(row % 3 == 0) {
        card += '<div class="w-100 mb-md-5"></div>'
    }   
    
    document.querySelector(".assignment-content").innerHTML += card;
    
    
    
    
    
    console.log('hello');
}