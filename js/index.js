(function() {

    var $photo = $('#photo');

    $photo.on({
        'touchstart': function() {
            var $this = $(this);
            if ($this.hasClass('turn')) {
                return;
            }
            $this.addClass('turn');

            setTimeout(function() {
                $this.removeClass('turn');
            }, 1500);
        },
    });

    $photo.trigger('touchstart');
})();