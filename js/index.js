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

$(".btn").click(function () {
		var input_value = $("input[name=touches]").val();
        const pillar = pillar_position(input_value);

        if ($('li.flex-item').length == 0){
        	$("li[id=" + pillar + "]").text(pillar);
        } else {
        	$("li.flex-item").empty();
        	$("li[id=" + pillar + "]").text(pillar);
        }
        
               });