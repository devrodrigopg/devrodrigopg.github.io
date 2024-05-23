pubcoder.projectID = pubcoder.projectID || "00136A85BD6F4A18B157E38DC33C660A";
pubcoder.project.id = pubcoder.project.id || "00136A85BD6F4A18B157E38DC33C660A";
pubcoder.project.title = pubcoder.project.title || "Instructions Manual";
pubcoder.page.id = pubcoder.page.id || 28;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
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
var obj813_onLoad_activeActionGroupIndex = -1;
var obj813_onLoad_runningActionsCount = 0;
var obj813_onLoad_loopCount = 0;
var obj12_onTouchUp_activeActionGroupIndex = -1;
var obj12_onTouchUp_runningActionsCount = 0;
var obj12_onTouchUp_loopCount = 0;
var obj83_onTouchUp_activeActionGroupIndex = -1;
var obj83_onTouchUp_runningActionsCount = 0;
var obj83_onTouchUp_loopCount = 0;
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
		
obj813_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj791
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj791";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup1();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj792
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj792";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup2();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj793
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj793";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup3();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	selector: #obj794
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj794";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup4();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj795
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj795";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup5();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj796
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj796";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup6();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 6;
	

//	action: show 
//	selector: #obj797
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj797";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup7();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup7();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj798
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj798";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup8();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj799
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj799";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup9();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj800
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj800";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup10();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 10;
	

//	action: show 
//	selector: #obj801
(function(){
	window.obj813_onLoad_runningActionsCount = obj813_onLoad_runningActionsCount + 1;

	var selector = "#obj801";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup11();
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
				window.obj813_onLoad_runningActionsCount = window.obj813_onLoad_runningActionsCount - 1;
if (window.obj813_onLoad_runningActionsCount < 0) {
	window.obj813_onLoad_runningActionsCount = 0;
} else if (window.obj813_onLoad_runningActionsCount == 0) {
	obj813_onLoad_actionGroup11();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj813_onLoad_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj813_onLoad_activeActionGroupIndex = -1;
		$("#obj813").trigger("obj813_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 813) {
				console.warn("de-queueing event obj813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj813_onLoad_activeActionGroupIndex = 11;
	





















};
obj12_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12_onTouchUp_activeActionGroupIndex = -1;
		$("#obj12").trigger("obj12_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12) {
				console.warn("de-queueing event obj12." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12_onTouchUp_activeActionGroupIndex = 0;
	









//	action: openURL
openUrl_592();
function openUrl_592() {
	window.obj12_onTouchUp_runningActionsCount = obj12_onTouchUp_runningActionsCount + 1;
	XPUB.openUrl("http://www.studio361.it", true);
	window.obj12_onTouchUp_runningActionsCount = window.obj12_onTouchUp_runningActionsCount - 1;
if (window.obj12_onTouchUp_runningActionsCount < 0) {
	window.obj12_onTouchUp_runningActionsCount = 0;
} else if (window.obj12_onTouchUp_runningActionsCount == 0) {
	obj12_onTouchUp_actionGroup1();
}
}












};
obj12_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12_onTouchUp_activeActionGroupIndex = -1;
		$("#obj12").trigger("obj12_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12) {
				console.warn("de-queueing event obj12." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj83_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83_onTouchUp_activeActionGroupIndex = -1;
		$("#obj83").trigger("obj83_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83) {
				console.warn("de-queueing event obj83." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83_onTouchUp_activeActionGroupIndex = 0;
	









//	action: openURL
openUrl_593();
function openUrl_593() {
	window.obj83_onTouchUp_runningActionsCount = obj83_onTouchUp_runningActionsCount + 1;
	XPUB.openUrl("http://www.sudio361.it", true);
	window.obj83_onTouchUp_runningActionsCount = window.obj83_onTouchUp_runningActionsCount - 1;
if (window.obj83_onTouchUp_runningActionsCount < 0) {
	window.obj83_onTouchUp_runningActionsCount = 0;
} else if (window.obj83_onTouchUp_runningActionsCount == 0) {
	obj83_onTouchUp_actionGroup1();
}
}












};
obj83_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83_onTouchUp_activeActionGroupIndex = -1;
		$("#obj83").trigger("obj83_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83) {
				console.warn("de-queueing event obj83." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83_onTouchUp_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		







































































































































/*
 *
 *   obj813: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj813_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj813_onLoad is still running");
	return;
}
var obj813_onLoad_runningActionsCount = 0;
var obj813_onLoad_loopCount = 0;
obj813_onLoad_actionGroup0();
});






































/*
 *
 *   obj12: Event Touch Up
 *
 */
$("#obj12").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj12").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj12").unbind("obj12_onTouchDown_ended", startActionList);
	    if (window.obj12_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12_onTouchUp is still running");
	return;
}
var obj12_onTouchUp_runningActionsCount = 0;
var obj12_onTouchUp_loopCount = 0;
obj12_onTouchUp_actionGroup0();
	};
	if ((window['obj12_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj12_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj12").bind("obj12_onTouchDown_ended", startActionList);
	}
});










/*
 *
 *   obj83: Event Touch Up
 *
 */
$("#obj83").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj83").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj83").unbind("obj83_onTouchDown_ended", startActionList);
	    if (window.obj83_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83_onTouchUp is still running");
	return;
}
var obj83_onTouchUp_runningActionsCount = 0;
var obj83_onTouchUp_loopCount = 0;
obj83_onTouchUp_actionGroup0();
	};
	if ((window['obj83_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj83_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj83").bind("obj83_onTouchDown_ended", startActionList);
	}
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
	
$("#obj31").trigger('SCEventShow');
$("#obj4").trigger('SCEventShow');
$("#obj6").trigger('SCEventShow');
$("#obj10").trigger('SCEventShow');
$("#obj12").trigger('SCEventShow');
$("#obj83").trigger('SCEventShow');
$("#obj266").trigger('SCEventShow');
	
});