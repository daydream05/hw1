function pillar_position(touches) {
    const MAX_PILLARS = 7;
    const MAX_TOUCHES = touches;

    var current_pillar = 0;
    var current_touch = 0;

    for (i = 0; i < MAX_TOUCHES; i++) {
        current_pillar += 1;
        current_touch += 1 ;

        if (current_pillar > MAX_PILLARS) {
            // We reset to 1
            current_pillar = 1;
        }
    }

    return current_pillar;
}

$("#pillar-button").click(function () {
		var input_value = $("input[name=touches]").val();
        const pillar = pillar_position(input_value);

        if ($('li.flex-item').length == 0){
        	$("li[id=" + pillar + "]").text(pillar);
        } else {
        	$("li.flex-item").empty();
        	$("li[id=" + pillar + "]").text(pillar);
        }
        
               });

$(".js-flickr-keyword.btn").click(function () {
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    const input_tag = $('input[name=flickr-tag]').val();

    $(".gallery > img").remove();

    $.getJSON(flickerAPI,
    {
        tags: input_tag,
        tagmode: "any",
        format: "json"
    })
    .done(function(data) {
        console.log(data);
        $.each(data.items, function(i, item)
        {
            // Add div-img inside gallery div
            $("<img>").attr("src", item.media.m).appendTo('.gallery');
        });

    });

    $('.footer').text(input_tag);

})
