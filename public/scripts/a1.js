function a1Gen(qNum, answer, img1, img2, img3) {
    

    document.querySelector(".assignments").innerHTML += 
    '<div class="row text-center q m-5'+ qNum +'">'+ // Question Number
        '<div class="col-md-12">'+
            '<p class="lead mb-4">'+
                '<b>'+ qNum + '</b>' + answer + // Question Answer
            '</p>'+
        '</div>'+
        
        
    '/<div>'
    if(img3 == null) {
        document.querySelector(".assignments").innerHTML += 
        '<div class="row text-center m-5">' +
            '<div class="col-md-6">'+
                '<img src="' + img1 + '">' + // Image1
            '</div>'+
            '<div class="col-md-6">'+
                '<img src="' + img2 + '">' + // Image2
            '</div>'+ 
        '</div>'
    }
    else {
        document.querySelector(".assignments").innerHTML += 
        '<div class="row text-center m-5">' +
            '<div class="col-md-4">'+
                '<img src="' + img1 + '">' + // Image1
            '</div>'+
            '<div class="col-md-4">'+
                '<img src="' + img2 + '">' + // Image2
            '</div>'+ 
            '<div class="col-md-4">'+
                '<img src="' + img3 + '">' + // Image2
            '</div>'+ 
        '</div>'
    }
    
}