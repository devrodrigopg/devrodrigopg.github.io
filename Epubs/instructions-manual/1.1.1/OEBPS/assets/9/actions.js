pubcoder.projectID = pubcoder.projectID || "00136A85BD6F4A18B157E38DC33C660A";
pubcoder.project.id = pubcoder.project.id || "00136A85BD6F4A18B157E38DC33C660A";
pubcoder.project.title = pubcoder.project.title || "Instructions Manual";
pubcoder.page.id = pubcoder.page.id || 33;
pubcoder.page.title = pubcoder.page.title || "9";
pubcoder.page.number = pubcoder.page.number || 9;
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
var obj108_onTap_activeActionGroupIndex = -1;
var obj108_onTap_runningActionsCount = 0;
var obj108_onTap_loopCount = 0;
var obj110_onTap_activeActionGroupIndex = -1;
var obj110_onTap_runningActionsCount = 0;
var obj110_onTap_loopCount = 0;
var obj118_onTap_activeActionGroupIndex = -1;
var obj118_onTap_runningActionsCount = 0;
var obj118_onTap_loopCount = 0;
var obj123_onTap_activeActionGroupIndex = -1;
var obj123_onTap_runningActionsCount = 0;
var obj123_onTap_loopCount = 0;
var obj128_onTap_activeActionGroupIndex = -1;
var obj128_onTap_runningActionsCount = 0;
var obj128_onTap_loopCount = 0;
var obj133_onTap_activeActionGroupIndex = -1;
var obj133_onTap_runningActionsCount = 0;
var obj133_onTap_loopCount = 0;
var obj389_onTap_activeActionGroupIndex = -1;
var obj389_onTap_runningActionsCount = 0;
var obj389_onTap_loopCount = 0;
var obj394_onTap_activeActionGroupIndex = -1;
var obj394_onTap_runningActionsCount = 0;
var obj394_onTap_loopCount = 0;
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
		
obj108_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj108_onTap_activeActionGroupIndex = -1;
		$("#obj108").trigger("obj108_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 108) {
				console.warn("de-queueing event obj108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj108_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj369
(function(){
	window.obj108_onTap_runningActionsCount = obj108_onTap_runningActionsCount + 1;

	var selector = "#obj369";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj108_onTap_runningActionsCount = window.obj108_onTap_runningActionsCount - 1;
if (window.obj108_onTap_runningActionsCount < 0) {
	window.obj108_onTap_runningActionsCount = 0;
} else if (window.obj108_onTap_runningActionsCount == 0) {
	obj108_onTap_actionGroup1();
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
				window.obj108_onTap_runningActionsCount = window.obj108_onTap_runningActionsCount - 1;
if (window.obj108_onTap_runningActionsCount < 0) {
	window.obj108_onTap_runningActionsCount = 0;
} else if (window.obj108_onTap_runningActionsCount == 0) {
	obj108_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj110
(function(){
	window.obj108_onTap_runningActionsCount = obj108_onTap_runningActionsCount + 1;

	var selector = "#obj110";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj108_onTap_runningActionsCount = window.obj108_onTap_runningActionsCount - 1;
if (window.obj108_onTap_runningActionsCount < 0) {
	window.obj108_onTap_runningActionsCount = 0;
} else if (window.obj108_onTap_runningActionsCount == 0) {
	obj108_onTap_actionGroup1();
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
				window.obj108_onTap_runningActionsCount = window.obj108_onTap_runningActionsCount - 1;
if (window.obj108_onTap_runningActionsCount < 0) {
	window.obj108_onTap_runningActionsCount = 0;
} else if (window.obj108_onTap_runningActionsCount == 0) {
	obj108_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj595 
playAudio_857();
function playAudio_857() {
	window.obj108_onTap_runningActionsCount = obj108_onTap_runningActionsCount + 1;
	var myAudio = $("#obj595")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj108_onTap_runningActionsCount = window.obj108_onTap_runningActionsCount - 1;
if (window.obj108_onTap_runningActionsCount < 0) {
	window.obj108_onTap_runningActionsCount = 0;
} else if (window.obj108_onTap_runningActionsCount == 0) {
	obj108_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj108_onTap_runningActionsCount = window.obj108_onTap_runningActionsCount - 1;
if (window.obj108_onTap_runningActionsCount < 0) {
	window.obj108_onTap_runningActionsCount = 0;
} else if (window.obj108_onTap_runningActionsCount == 0) {
	obj108_onTap_actionGroup1();
}
	}
}









};
obj108_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj108_onTap_activeActionGroupIndex = -1;
		$("#obj108").trigger("obj108_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 108) {
				console.warn("de-queueing event obj108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj108_onTap_activeActionGroupIndex = 1;
	





















};
obj110_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj110_onTap_activeActionGroupIndex = -1;
		$("#obj110").trigger("obj110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 110) {
				console.warn("de-queueing event obj110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj110_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj110 
hide_862();
function hide_862() {
	var selector = "#obj110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj110_onTap_runningActionsCount = obj110_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj110_onTap_runningActionsCount = window.obj110_onTap_runningActionsCount - 1;
if (window.obj110_onTap_runningActionsCount < 0) {
	window.obj110_onTap_runningActionsCount = 0;
} else if (window.obj110_onTap_runningActionsCount == 0) {
	obj110_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_862(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj110_onTap_runningActionsCount = window.obj110_onTap_runningActionsCount - 1;
if (window.obj110_onTap_runningActionsCount < 0) {
	window.obj110_onTap_runningActionsCount = 0;
} else if (window.obj110_onTap_runningActionsCount == 0) {
	obj110_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj369 
hide_863();
function hide_863() {
	var selector = "#obj369";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj110_onTap_runningActionsCount = obj110_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj110_onTap_runningActionsCount = window.obj110_onTap_runningActionsCount - 1;
if (window.obj110_onTap_runningActionsCount < 0) {
	window.obj110_onTap_runningActionsCount = 0;
} else if (window.obj110_onTap_runningActionsCount == 0) {
	obj110_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_863(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj110_onTap_runningActionsCount = window.obj110_onTap_runningActionsCount - 1;
if (window.obj110_onTap_runningActionsCount < 0) {
	window.obj110_onTap_runningActionsCount = 0;
} else if (window.obj110_onTap_runningActionsCount == 0) {
	obj110_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}











//	action: playAudio
//	target: obj595 
playAudio_861();
function playAudio_861() {
	window.obj110_onTap_runningActionsCount = obj110_onTap_runningActionsCount + 1;
	var myAudio = $("#obj595")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj110_onTap_runningActionsCount = window.obj110_onTap_runningActionsCount - 1;
if (window.obj110_onTap_runningActionsCount < 0) {
	window.obj110_onTap_runningActionsCount = 0;
} else if (window.obj110_onTap_runningActionsCount == 0) {
	obj110_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj110_onTap_runningActionsCount = window.obj110_onTap_runningActionsCount - 1;
if (window.obj110_onTap_runningActionsCount < 0) {
	window.obj110_onTap_runningActionsCount = 0;
} else if (window.obj110_onTap_runningActionsCount == 0) {
	obj110_onTap_actionGroup1();
}
	}
}









};
obj110_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj110_onTap_activeActionGroupIndex = -1;
		$("#obj110").trigger("obj110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 110) {
				console.warn("de-queueing event obj110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj110_onTap_activeActionGroupIndex = 1;
	





















};
obj118_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj118_onTap_activeActionGroupIndex = -1;
		$("#obj118").trigger("obj118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 118) {
				console.warn("de-queueing event obj118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj118_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj365
(function(){
	window.obj118_onTap_runningActionsCount = obj118_onTap_runningActionsCount + 1;

	var selector = "#obj365";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj118_onTap_runningActionsCount = window.obj118_onTap_runningActionsCount - 1;
if (window.obj118_onTap_runningActionsCount < 0) {
	window.obj118_onTap_runningActionsCount = 0;
} else if (window.obj118_onTap_runningActionsCount == 0) {
	obj118_onTap_actionGroup1();
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
				window.obj118_onTap_runningActionsCount = window.obj118_onTap_runningActionsCount - 1;
if (window.obj118_onTap_runningActionsCount < 0) {
	window.obj118_onTap_runningActionsCount = 0;
} else if (window.obj118_onTap_runningActionsCount == 0) {
	obj118_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj123
(function(){
	window.obj118_onTap_runningActionsCount = obj118_onTap_runningActionsCount + 1;

	var selector = "#obj123";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj118_onTap_runningActionsCount = window.obj118_onTap_runningActionsCount - 1;
if (window.obj118_onTap_runningActionsCount < 0) {
	window.obj118_onTap_runningActionsCount = 0;
} else if (window.obj118_onTap_runningActionsCount == 0) {
	obj118_onTap_actionGroup1();
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
				window.obj118_onTap_runningActionsCount = window.obj118_onTap_runningActionsCount - 1;
if (window.obj118_onTap_runningActionsCount < 0) {
	window.obj118_onTap_runningActionsCount = 0;
} else if (window.obj118_onTap_runningActionsCount == 0) {
	obj118_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj595 
playAudio_865();
function playAudio_865() {
	window.obj118_onTap_runningActionsCount = obj118_onTap_runningActionsCount + 1;
	var myAudio = $("#obj595")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj118_onTap_runningActionsCount = window.obj118_onTap_runningActionsCount - 1;
if (window.obj118_onTap_runningActionsCount < 0) {
	window.obj118_onTap_runningActionsCount = 0;
} else if (window.obj118_onTap_runningActionsCount == 0) {
	obj118_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj118_onTap_runningActionsCount = window.obj118_onTap_runningActionsCount - 1;
if (window.obj118_onTap_runningActionsCount < 0) {
	window.obj118_onTap_runningActionsCount = 0;
} else if (window.obj118_onTap_runningActionsCount == 0) {
	obj118_onTap_actionGroup1();
}
	}
}









};
obj118_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj118_onTap_activeActionGroupIndex = -1;
		$("#obj118").trigger("obj118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 118) {
				console.warn("de-queueing event obj118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj118_onTap_activeActionGroupIndex = 1;
	





















};
obj123_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj123_onTap_activeActionGroupIndex = -1;
		$("#obj123").trigger("obj123_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 123) {
				console.warn("de-queueing event obj123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj123_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj123 
hide_870();
function hide_870() {
	var selector = "#obj123";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj123_onTap_runningActionsCount = obj123_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;
if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_870(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;
if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj365 
hide_871();
function hide_871() {
	var selector = "#obj365";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj123_onTap_runningActionsCount = obj123_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;
if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_871(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;
if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}











//	action: playAudio
//	target: obj595 
playAudio_869();
function playAudio_869() {
	window.obj123_onTap_runningActionsCount = obj123_onTap_runningActionsCount + 1;
	var myAudio = $("#obj595")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;
if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj123_onTap_runningActionsCount = window.obj123_onTap_runningActionsCount - 1;
if (window.obj123_onTap_runningActionsCount < 0) {
	window.obj123_onTap_runningActionsCount = 0;
} else if (window.obj123_onTap_runningActionsCount == 0) {
	obj123_onTap_actionGroup1();
}
	}
}









};
obj123_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj123_onTap_activeActionGroupIndex = -1;
		$("#obj123").trigger("obj123_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 123) {
				console.warn("de-queueing event obj123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj123_onTap_activeActionGroupIndex = 1;
	





















};
obj128_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj128_onTap_activeActionGroupIndex = -1;
		$("#obj128").trigger("obj128_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 128) {
				console.warn("de-queueing event obj128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj128_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj368
(function(){
	window.obj128_onTap_runningActionsCount = obj128_onTap_runningActionsCount + 1;

	var selector = "#obj368";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;
if (window.obj128_onTap_runningActionsCount < 0) {
	window.obj128_onTap_runningActionsCount = 0;
} else if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
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
				window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;
if (window.obj128_onTap_runningActionsCount < 0) {
	window.obj128_onTap_runningActionsCount = 0;
} else if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj133
(function(){
	window.obj128_onTap_runningActionsCount = obj128_onTap_runningActionsCount + 1;

	var selector = "#obj133";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;
if (window.obj128_onTap_runningActionsCount < 0) {
	window.obj128_onTap_runningActionsCount = 0;
} else if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
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
				window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;
if (window.obj128_onTap_runningActionsCount < 0) {
	window.obj128_onTap_runningActionsCount = 0;
} else if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj595 
playAudio_873();
function playAudio_873() {
	window.obj128_onTap_runningActionsCount = obj128_onTap_runningActionsCount + 1;
	var myAudio = $("#obj595")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;
if (window.obj128_onTap_runningActionsCount < 0) {
	window.obj128_onTap_runningActionsCount = 0;
} else if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;
if (window.obj128_onTap_runningActionsCount < 0) {
	window.obj128_onTap_runningActionsCount = 0;
} else if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
}
	}
}









};
obj128_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj128_onTap_activeActionGroupIndex = -1;
		$("#obj128").trigger("obj128_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 128) {
				console.warn("de-queueing event obj128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj128_onTap_activeActionGroupIndex = 1;
	





















};
obj133_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj133_onTap_activeActionGroupIndex = -1;
		$("#obj133").trigger("obj133_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 133) {
				console.warn("de-queueing event obj133." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj133").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj133_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj133 
hide_878();
function hide_878() {
	var selector = "#obj133";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj133_onTap_runningActionsCount = obj133_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj133_onTap_runningActionsCount = window.obj133_onTap_runningActionsCount - 1;
if (window.obj133_onTap_runningActionsCount < 0) {
	window.obj133_onTap_runningActionsCount = 0;
} else if (window.obj133_onTap_runningActionsCount == 0) {
	obj133_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_878(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj133_onTap_runningActionsCount = window.obj133_onTap_runningActionsCount - 1;
if (window.obj133_onTap_runningActionsCount < 0) {
	window.obj133_onTap_runningActionsCount = 0;
} else if (window.obj133_onTap_runningActionsCount == 0) {
	obj133_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj368 
hide_879();
function hide_879() {
	var selector = "#obj368";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj133_onTap_runningActionsCount = obj133_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj133_onTap_runningActionsCount = window.obj133_onTap_runningActionsCount - 1;
if (window.obj133_onTap_runningActionsCount < 0) {
	window.obj133_onTap_runningActionsCount = 0;
} else if (window.obj133_onTap_runningActionsCount == 0) {
	obj133_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_879(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj133_onTap_runningActionsCount = window.obj133_onTap_runningActionsCount - 1;
if (window.obj133_onTap_runningActionsCount < 0) {
	window.obj133_onTap_runningActionsCount = 0;
} else if (window.obj133_onTap_runningActionsCount == 0) {
	obj133_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}











//	action: playAudio
//	target: obj595 
playAudio_877();
function playAudio_877() {
	window.obj133_onTap_runningActionsCount = obj133_onTap_runningActionsCount + 1;
	var myAudio = $("#obj595")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj133_onTap_runningActionsCount = window.obj133_onTap_runningActionsCount - 1;
if (window.obj133_onTap_runningActionsCount < 0) {
	window.obj133_onTap_runningActionsCount = 0;
} else if (window.obj133_onTap_runningActionsCount == 0) {
	obj133_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj133_onTap_runningActionsCount = window.obj133_onTap_runningActionsCount - 1;
if (window.obj133_onTap_runningActionsCount < 0) {
	window.obj133_onTap_runningActionsCount = 0;
} else if (window.obj133_onTap_runningActionsCount == 0) {
	obj133_onTap_actionGroup1();
}
	}
}









};
obj133_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj133_onTap_activeActionGroupIndex = -1;
		$("#obj133").trigger("obj133_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 133) {
				console.warn("de-queueing event obj133." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj133").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj133_onTap_activeActionGroupIndex = 1;
	





















};
obj389_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj389_onTap_activeActionGroupIndex = -1;
		$("#obj389").trigger("obj389_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 389) {
				console.warn("de-queueing event obj389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj389_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj367
(function(){
	window.obj389_onTap_runningActionsCount = obj389_onTap_runningActionsCount + 1;

	var selector = "#obj367";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj389_onTap_runningActionsCount = window.obj389_onTap_runningActionsCount - 1;
if (window.obj389_onTap_runningActionsCount < 0) {
	window.obj389_onTap_runningActionsCount = 0;
} else if (window.obj389_onTap_runningActionsCount == 0) {
	obj389_onTap_actionGroup1();
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
				window.obj389_onTap_runningActionsCount = window.obj389_onTap_runningActionsCount - 1;
if (window.obj389_onTap_runningActionsCount < 0) {
	window.obj389_onTap_runningActionsCount = 0;
} else if (window.obj389_onTap_runningActionsCount == 0) {
	obj389_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj394
(function(){
	window.obj389_onTap_runningActionsCount = obj389_onTap_runningActionsCount + 1;

	var selector = "#obj394";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj389_onTap_runningActionsCount = window.obj389_onTap_runningActionsCount - 1;
if (window.obj389_onTap_runningActionsCount < 0) {
	window.obj389_onTap_runningActionsCount = 0;
} else if (window.obj389_onTap_runningActionsCount == 0) {
	obj389_onTap_actionGroup1();
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
				window.obj389_onTap_runningActionsCount = window.obj389_onTap_runningActionsCount - 1;
if (window.obj389_onTap_runningActionsCount < 0) {
	window.obj389_onTap_runningActionsCount = 0;
} else if (window.obj389_onTap_runningActionsCount == 0) {
	obj389_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj595 
playAudio_881();
function playAudio_881() {
	window.obj389_onTap_runningActionsCount = obj389_onTap_runningActionsCount + 1;
	var myAudio = $("#obj595")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj389_onTap_runningActionsCount = window.obj389_onTap_runningActionsCount - 1;
if (window.obj389_onTap_runningActionsCount < 0) {
	window.obj389_onTap_runningActionsCount = 0;
} else if (window.obj389_onTap_runningActionsCount == 0) {
	obj389_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj389_onTap_runningActionsCount = window.obj389_onTap_runningActionsCount - 1;
if (window.obj389_onTap_runningActionsCount < 0) {
	window.obj389_onTap_runningActionsCount = 0;
} else if (window.obj389_onTap_runningActionsCount == 0) {
	obj389_onTap_actionGroup1();
}
	}
}









};
obj389_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj389_onTap_activeActionGroupIndex = -1;
		$("#obj389").trigger("obj389_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 389) {
				console.warn("de-queueing event obj389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj389_onTap_activeActionGroupIndex = 1;
	





















};
obj394_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj394_onTap_activeActionGroupIndex = -1;
		$("#obj394").trigger("obj394_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 394) {
				console.warn("de-queueing event obj394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj394_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj394 
hide_886();
function hide_886() {
	var selector = "#obj394";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj394_onTap_runningActionsCount = obj394_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj394_onTap_runningActionsCount = window.obj394_onTap_runningActionsCount - 1;
if (window.obj394_onTap_runningActionsCount < 0) {
	window.obj394_onTap_runningActionsCount = 0;
} else if (window.obj394_onTap_runningActionsCount == 0) {
	obj394_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_886(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj394_onTap_runningActionsCount = window.obj394_onTap_runningActionsCount - 1;
if (window.obj394_onTap_runningActionsCount < 0) {
	window.obj394_onTap_runningActionsCount = 0;
} else if (window.obj394_onTap_runningActionsCount == 0) {
	obj394_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj367 
hide_887();
function hide_887() {
	var selector = "#obj367";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj394_onTap_runningActionsCount = obj394_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj394_onTap_runningActionsCount = window.obj394_onTap_runningActionsCount - 1;
if (window.obj394_onTap_runningActionsCount < 0) {
	window.obj394_onTap_runningActionsCount = 0;
} else if (window.obj394_onTap_runningActionsCount == 0) {
	obj394_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_887(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj394_onTap_runningActionsCount = window.obj394_onTap_runningActionsCount - 1;
if (window.obj394_onTap_runningActionsCount < 0) {
	window.obj394_onTap_runningActionsCount = 0;
} else if (window.obj394_onTap_runningActionsCount == 0) {
	obj394_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}











//	action: playAudio
//	target: obj595 
playAudio_885();
function playAudio_885() {
	window.obj394_onTap_runningActionsCount = obj394_onTap_runningActionsCount + 1;
	var myAudio = $("#obj595")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj394_onTap_runningActionsCount = window.obj394_onTap_runningActionsCount - 1;
if (window.obj394_onTap_runningActionsCount < 0) {
	window.obj394_onTap_runningActionsCount = 0;
} else if (window.obj394_onTap_runningActionsCount == 0) {
	obj394_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj394_onTap_runningActionsCount = window.obj394_onTap_runningActionsCount - 1;
if (window.obj394_onTap_runningActionsCount < 0) {
	window.obj394_onTap_runningActionsCount = 0;
} else if (window.obj394_onTap_runningActionsCount == 0) {
	obj394_onTap_actionGroup1();
}
	}
}









};
obj394_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj394_onTap_activeActionGroupIndex = -1;
		$("#obj394").trigger("obj394_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 394) {
				console.warn("de-queueing event obj394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj394_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj108: Event Touch Down
 *
 */
$("#obj108").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj108_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj108_onTap is still running");
	return;
}
var obj108_onTap_runningActionsCount = 0;
var obj108_onTap_loopCount = 0;
obj108_onTap_actionGroup0();
});










/*
 *
 *   obj110: Event Touch Down
 *
 */
$("#obj110").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj110_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj110_onTap is still running");
	return;
}
var obj110_onTap_runningActionsCount = 0;
var obj110_onTap_loopCount = 0;
obj110_onTap_actionGroup0();
});










/*
 *
 *   obj118: Event Touch Down
 *
 */
$("#obj118").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj118_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj118_onTap is still running");
	return;
}
var obj118_onTap_runningActionsCount = 0;
var obj118_onTap_loopCount = 0;
obj118_onTap_actionGroup0();
});










/*
 *
 *   obj123: Event Touch Down
 *
 */
$("#obj123").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj123_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj123_onTap is still running");
	return;
}
var obj123_onTap_runningActionsCount = 0;
var obj123_onTap_loopCount = 0;
obj123_onTap_actionGroup0();
});










/*
 *
 *   obj128: Event Touch Down
 *
 */
$("#obj128").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj128_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj128_onTap is still running");
	return;
}
var obj128_onTap_runningActionsCount = 0;
var obj128_onTap_loopCount = 0;
obj128_onTap_actionGroup0();
});










/*
 *
 *   obj133: Event Touch Down
 *
 */
$("#obj133").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj133_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj133_onTap is still running");
	return;
}
var obj133_onTap_runningActionsCount = 0;
var obj133_onTap_loopCount = 0;
obj133_onTap_actionGroup0();
});










/*
 *
 *   obj389: Event Touch Down
 *
 */
$("#obj389").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj389_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj389_onTap is still running");
	return;
}
var obj389_onTap_runningActionsCount = 0;
var obj389_onTap_loopCount = 0;
obj389_onTap_actionGroup0();
});










/*
 *
 *   obj394: Event Touch Down
 *
 */
$("#obj394").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj394_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj394_onTap is still running");
	return;
}
var obj394_onTap_runningActionsCount = 0;
var obj394_onTap_loopCount = 0;
obj394_onTap_actionGroup0();
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
	
$("#obj363").trigger('SCEventShow');
$("#obj108").trigger('SCEventShow');
$("#obj118").trigger('SCEventShow');
$("#obj128").trigger('SCEventShow');
$("#obj389").trigger('SCEventShow');
$("#obj138").trigger('SCEventShow');
$("#obj595").trigger('SCEventShow');
	
});