pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 84;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj86_onLoad_activeActionGroupIndex = -1;
var obj86_onLoad_runningActionsCount = 0;
var obj86_onLoad_loopCount = 0;
var obj85_onLoad_activeActionGroupIndex = -1;
var obj85_onLoad_runningActionsCount = 0;
var obj85_onLoad_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj86_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86_onLoad_activeActionGroupIndex = -1;
		$("#obj86").trigger("obj86_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86) {
				console.warn("de-queueing event obj86." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj86
(function(){
	window.obj86_onLoad_runningActionsCount = obj86_onLoad_runningActionsCount + 1;

	var selector = "#obj86";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 5000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj86_onLoad_runningActionsCount = window.obj86_onLoad_runningActionsCount - 1;
if (window.obj86_onLoad_runningActionsCount < 0) {
	window.obj86_onLoad_runningActionsCount = 0;
} else if (window.obj86_onLoad_runningActionsCount == 0) {
	obj86_onLoad_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj86_onLoad_runningActionsCount = window.obj86_onLoad_runningActionsCount - 1;
if (window.obj86_onLoad_runningActionsCount < 0) {
	window.obj86_onLoad_runningActionsCount = 0;
} else if (window.obj86_onLoad_runningActionsCount == 0) {
	obj86_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86_onLoad_activeActionGroupIndex = -1;
		$("#obj86").trigger("obj86_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86) {
				console.warn("de-queueing event obj86." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86_onLoad_activeActionGroupIndex = 1;
	





















};
obj85_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85_onLoad_activeActionGroupIndex = -1;
		$("#obj85").trigger("obj85_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85) {
				console.warn("de-queueing event obj85." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj85
(function(){
	window.obj85_onLoad_runningActionsCount = obj85_onLoad_runningActionsCount + 1;

	var selector = "#obj85";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj85_onLoad_runningActionsCount = window.obj85_onLoad_runningActionsCount - 1;
if (window.obj85_onLoad_runningActionsCount < 0) {
	window.obj85_onLoad_runningActionsCount = 0;
} else if (window.obj85_onLoad_runningActionsCount == 0) {
	obj85_onLoad_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj85_onLoad_runningActionsCount = window.obj85_onLoad_runningActionsCount - 1;
if (window.obj85_onLoad_runningActionsCount < 0) {
	window.obj85_onLoad_runningActionsCount = 0;
} else if (window.obj85_onLoad_runningActionsCount == 0) {
	obj85_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85_onLoad_activeActionGroupIndex = -1;
		$("#obj85").trigger("obj85_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85) {
				console.warn("de-queueing event obj85." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj86: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj86_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86_onLoad is still running");
	return;
}
var obj86_onLoad_runningActionsCount = 0;
var obj86_onLoad_loopCount = 0;
obj86_onLoad_actionGroup0();
});










/*
 *
 *   obj85: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj85_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85_onLoad is still running");
	return;
}
var obj85_onLoad_runningActionsCount = 0;
var obj85_onLoad_loopCount = 0;
obj85_onLoad_actionGroup0();
});





		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
	
});