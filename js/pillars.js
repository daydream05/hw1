function pillar_position(pillars, touches) {
    const MAX_PILLARS = pillars;
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