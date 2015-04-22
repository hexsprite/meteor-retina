
if (Meteor.isClient) {

	var RetinaSettings = RetinaSettings || {
		retinajs : true,
		attribute : 'data-retina'
	};

	function isRetinaDisplay() {
	    if (window.matchMedia) {
	    	var mq;
	        mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
	        if (mq && mq.matches || (window.devicePixelRatio > 1)) return true;
	        return false;
	    }
	}

	isRetina = false;
	if (isRetinaDisplay()) {
		isRetina = true;
	}

	if (isRetina) {
		// Globally rendered callback
		Template.onRendered(function () {
			var images;
			images = this.$('img');

			images.each(function(){
				if (RetinaSettings.attribute) {
					var $this;
					$this = jQuery(this);

					if ($this.attr(RetinaSettings.attribute)) {
						$this.attr('src', $this.attr(RetinaSettings.attribute));
						return;
					}
				}
				if (RetinaSettings.retinajs) {
					new RetinaImage(this);
				}

			});

		});
	}

}
