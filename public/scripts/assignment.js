function hw_gen(title, description, tools, imgURL, link, row, completed) {
    
    cardProgress = ""
    if(completed == true) {
        // The assignment is complete.
        cardProgress = "completed-card"
    }
    else {
        cardProgress = "full-card"
    }
    

    card = '<div class="col-sm-4">'+
                '<div class="card '+ cardProgress +'">' +
                    '<img src="' + imgURL + '" class="card-img">' +
                    '<div class="card-img-overlay">' +
                        '<h5 class="card-title">'+ title +'</h5>' +
                        '<p class="card-text">'+ description +'</p>' +
                        '<div class="row">' +
                            '<div class="col-sm-12"><p class="card-text">Tools Used: <b>'+ tools +'</b>' +
                        '</div></div>'+
                        '<div class="row"><div class="col-sm-3 offset-9">' +
                        '<a href="'+ link +'">'+ '<button class="btn btn-outline-light>View</a>' +
                        '</div></div></div></div></div></div>'
            '</div>'

    document.querySelector(".assignment-content-" + row).innerHTML += card;
    
    
    console.log('hello');
}