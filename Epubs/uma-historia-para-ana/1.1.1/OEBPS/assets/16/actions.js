pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 184;
pubcoder.page.title = pubcoder.page.title || "16";
pubcoder.page.number = pubcoder.page.number || 16;
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
var obj1976_onTouchUp_activeActionGroupIndex = -1;
var obj1976_onTouchUp_runningActionsCount = 0;
var obj1976_onTouchUp_loopCount = 0;
var obj1970_onTouchUp_activeActionGroupIndex = -1;
var obj1970_onTouchUp_runningActionsCount = 0;
var obj1970_onTouchUp_loopCount = 0;
var obj1964_onTouchUp_activeActionGroupIndex = -1;
var obj1964_onTouchUp_runningActionsCount = 0;
var obj1964_onTouchUp_loopCount = 0;
var obj1958_onTouchUp_activeActionGroupIndex = -1;
var obj1958_onTouchUp_runningActionsCount = 0;
var obj1958_onTouchUp_loopCount = 0;
var obj1952_onTouchUp_activeActionGroupIndex = -1;
var obj1952_onTouchUp_runningActionsCount = 0;
var obj1952_onTouchUp_loopCount = 0;
var obj1946_onTouchUp_activeActionGroupIndex = -1;
var obj1946_onTouchUp_runningActionsCount = 0;
var obj1946_onTouchUp_loopCount = 0;
var obj1940_onTouchUp_activeActionGroupIndex = -1;
var obj1940_onTouchUp_runningActionsCount = 0;
var obj1940_onTouchUp_loopCount = 0;
var obj1932_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj1932_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1932_SCEventCounterReachedTargetValue_loopCount = 0;
var obj1919_onLoad_activeActionGroupIndex = -1;
var obj1919_onLoad_runningActionsCount = 0;
var obj1919_onLoad_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj1932_counterValue = 0;
var obj1932_counterTargetValue = 7;
var obj1932_counterCanExceedTargetValue = false;
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
		
obj1976_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1976_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1976").trigger("obj1976_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1976) {
				console.warn("de-queueing event obj1976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1976_onTouchUp_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1976 
hide_1981();
function hide_1981() {
	var selector = "#obj1976";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1976_onTouchUp_runningActionsCount = obj1976_onTouchUp_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1976_onTouchUp_runningActionsCount = window.obj1976_onTouchUp_runningActionsCount - 1;
if (window.obj1976_onTouchUp_runningActionsCount < 0) {
	window.obj1976_onTouchUp_runningActionsCount = 0;
} else if (window.obj1976_onTouchUp_runningActionsCount == 0) {
	obj1976_onTouchUp_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1981(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1976_onTouchUp_runningActionsCount = window.obj1976_onTouchUp_runningActionsCount - 1;
if (window.obj1976_onTouchUp_runningActionsCount < 0) {
	window.obj1976_onTouchUp_runningActionsCount = 0;
} else if (window.obj1976_onTouchUp_runningActionsCount == 0) {
	obj1976_onTouchUp_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2000
(function(){
	window.obj1976_onTouchUp_runningActionsCount = obj1976_onTouchUp_runningActionsCount + 1;

	var selector = "#obj2000";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1976_onTouchUp_runningActionsCount = window.obj1976_onTouchUp_runningActionsCount - 1;
if (window.obj1976_onTouchUp_runningActionsCount < 0) {
	window.obj1976_onTouchUp_runningActionsCount = 0;
} else if (window.obj1976_onTouchUp_runningActionsCount == 0) {
	obj1976_onTouchUp_actionGroup1();
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
				window.obj1976_onTouchUp_runningActionsCount = window.obj1976_onTouchUp_runningActionsCount - 1;
if (window.obj1976_onTouchUp_runningActionsCount < 0) {
	window.obj1976_onTouchUp_runningActionsCount = 0;
} else if (window.obj1976_onTouchUp_runningActionsCount == 0) {
	obj1976_onTouchUp_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1930 
playAudio_1980();
function playAudio_1980() {
	window.obj1976_onTouchUp_runningActionsCount = obj1976_onTouchUp_runningActionsCount + 1;
	var myAudio = $("#obj1930")[0];
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
		    window.obj1976_onTouchUp_runningActionsCount = window.obj1976_onTouchUp_runningActionsCount - 1;
if (window.obj1976_onTouchUp_runningActionsCount < 0) {
	window.obj1976_onTouchUp_runningActionsCount = 0;
} else if (window.obj1976_onTouchUp_runningActionsCount == 0) {
	obj1976_onTouchUp_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1976_onTouchUp_runningActionsCount = window.obj1976_onTouchUp_runningActionsCount - 1;
if (window.obj1976_onTouchUp_runningActionsCount < 0) {
	window.obj1976_onTouchUp_runningActionsCount = 0;
} else if (window.obj1976_onTouchUp_runningActionsCount == 0) {
	obj1976_onTouchUp_actionGroup1();
}
	}
}



//	action: increment counter
//	target: obj1932 
incrementCounter_1979();
function incrementCounter_1979() {
	window.obj1976_onTouchUp_runningActionsCount = obj1976_onTouchUp_runningActionsCount + 1;

	var oldValue = obj1932_counterValue;
	obj1932_counterValue = obj1932_counterValue + 1;
	if (! obj1932_counterCanExceedTargetValue && obj1932_counterValue > obj1932_counterTargetValue) {
		obj1932_counterValue = obj1932_counterTargetValue;
	}
	if (oldValue != obj1932_counterValue) {
		$("#obj1932").trigger('SCEventCounterValueChange');
		$("#obj1932").trigger('SCEventCounterIncrease');
		if (obj1932_counterValue == obj1932_counterTargetValue)
			$("#obj1932").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1976_onTouchUp_runningActionsCount = window.obj1976_onTouchUp_runningActionsCount - 1;
if (window.obj1976_onTouchUp_runningActionsCount < 0) {
	window.obj1976_onTouchUp_runningActionsCount = 0;
} else if (window.obj1976_onTouchUp_runningActionsCount == 0) {
	obj1976_onTouchUp_actionGroup1();
} }, 1);
}





};
obj1976_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1976_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1976").trigger("obj1976_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1976) {
				console.warn("de-queueing event obj1976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1976_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj1970_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1970_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1970").trigger("obj1970_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1970) {
				console.warn("de-queueing event obj1970." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1970").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1970_onTouchUp_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1970 
hide_1975();
function hide_1975() {
	var selector = "#obj1970";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1970_onTouchUp_runningActionsCount = obj1970_onTouchUp_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1970_onTouchUp_runningActionsCount = window.obj1970_onTouchUp_runningActionsCount - 1;
if (window.obj1970_onTouchUp_runningActionsCount < 0) {
	window.obj1970_onTouchUp_runningActionsCount = 0;
} else if (window.obj1970_onTouchUp_runningActionsCount == 0) {
	obj1970_onTouchUp_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1975(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1970_onTouchUp_runningActionsCount = window.obj1970_onTouchUp_runningActionsCount - 1;
if (window.obj1970_onTouchUp_runningActionsCount < 0) {
	window.obj1970_onTouchUp_runningActionsCount = 0;
} else if (window.obj1970_onTouchUp_runningActionsCount == 0) {
	obj1970_onTouchUp_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj1994
(function(){
	window.obj1970_onTouchUp_runningActionsCount = obj1970_onTouchUp_runningActionsCount + 1;

	var selector = "#obj1994";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1970_onTouchUp_runningActionsCount = window.obj1970_onTouchUp_runningActionsCount - 1;
if (window.obj1970_onTouchUp_runningActionsCount < 0) {
	window.obj1970_onTouchUp_runningActionsCount = 0;
} else if (window.obj1970_onTouchUp_runningActionsCount == 0) {
	obj1970_onTouchUp_actionGroup1();
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
				window.obj1970_onTouchUp_runningActionsCount = window.obj1970_onTouchUp_runningActionsCount - 1;
if (window.obj1970_onTouchUp_runningActionsCount < 0) {
	window.obj1970_onTouchUp_runningActionsCount = 0;
} else if (window.obj1970_onTouchUp_runningActionsCount == 0) {
	obj1970_onTouchUp_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1930 
playAudio_1974();
function playAudio_1974() {
	window.obj1970_onTouchUp_runningActionsCount = obj1970_onTouchUp_runningActionsCount + 1;
	var myAudio = $("#obj1930")[0];
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
		    window.obj1970_onTouchUp_runningActionsCount = window.obj1970_onTouchUp_runningActionsCount - 1;
if (window.obj1970_onTouchUp_runningActionsCount < 0) {
	window.obj1970_onTouchUp_runningActionsCount = 0;
} else if (window.obj1970_onTouchUp_runningActionsCount == 0) {
	obj1970_onTouchUp_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1970_onTouchUp_runningActionsCount = window.obj1970_onTouchUp_runningActionsCount - 1;
if (window.obj1970_onTouchUp_runningActionsCount < 0) {
	window.obj1970_onTouchUp_runningActionsCount = 0;
} else if (window.obj1970_onTouchUp_runningActionsCount == 0) {
	obj1970_onTouchUp_actionGroup1();
}
	}
}



//	action: increment counter
//	target: obj1932 
incrementCounter_1973();
function incrementCounter_1973() {
	window.obj1970_onTouchUp_runningActionsCount = obj1970_onTouchUp_runningActionsCount + 1;

	var oldValue = obj1932_counterValue;
	obj1932_counterValue = obj1932_counterValue + 1;
	if (! obj1932_counterCanExceedTargetValue && obj1932_counterValue > obj1932_counterTargetValue) {
		obj1932_counterValue = obj1932_counterTargetValue;
	}
	if (oldValue != obj1932_counterValue) {
		$("#obj1932").trigger('SCEventCounterValueChange');
		$("#obj1932").trigger('SCEventCounterIncrease');
		if (obj1932_counterValue == obj1932_counterTargetValue)
			$("#obj1932").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1970_onTouchUp_runningActionsCount = window.obj1970_onTouchUp_runningActionsCount - 1;
if (window.obj1970_onTouchUp_runningActionsCount < 0) {
	window.obj1970_onTouchUp_runningActionsCount = 0;
} else if (window.obj1970_onTouchUp_runningActionsCount == 0) {
	obj1970_onTouchUp_actionGroup1();
} }, 1);
}





};
obj1970_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1970_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1970").trigger("obj1970_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1970) {
				console.warn("de-queueing event obj1970." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1970").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1970_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj1964_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1964_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1964").trigger("obj1964_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1964) {
				console.warn("de-queueing event obj1964." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1964").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1964_onTouchUp_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1964 
hide_1969();
function hide_1969() {
	var selector = "#obj1964";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1964_onTouchUp_runningActionsCount = obj1964_onTouchUp_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1964_onTouchUp_runningActionsCount = window.obj1964_onTouchUp_runningActionsCount - 1;
if (window.obj1964_onTouchUp_runningActionsCount < 0) {
	window.obj1964_onTouchUp_runningActionsCount = 0;
} else if (window.obj1964_onTouchUp_runningActionsCount == 0) {
	obj1964_onTouchUp_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1969(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1964_onTouchUp_runningActionsCount = window.obj1964_onTouchUp_runningActionsCount - 1;
if (window.obj1964_onTouchUp_runningActionsCount < 0) {
	window.obj1964_onTouchUp_runningActionsCount = 0;
} else if (window.obj1964_onTouchUp_runningActionsCount == 0) {
	obj1964_onTouchUp_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj1997
(function(){
	window.obj1964_onTouchUp_runningActionsCount = obj1964_onTouchUp_runningActionsCount + 1;

	var selector = "#obj1997";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1964_onTouchUp_runningActionsCount = window.obj1964_onTouchUp_runningActionsCount - 1;
if (window.obj1964_onTouchUp_runningActionsCount < 0) {
	window.obj1964_onTouchUp_runningActionsCount = 0;
} else if (window.obj1964_onTouchUp_runningActionsCount == 0) {
	obj1964_onTouchUp_actionGroup1();
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
				window.obj1964_onTouchUp_runningActionsCount = window.obj1964_onTouchUp_runningActionsCount - 1;
if (window.obj1964_onTouchUp_runningActionsCount < 0) {
	window.obj1964_onTouchUp_runningActionsCount = 0;
} else if (window.obj1964_onTouchUp_runningActionsCount == 0) {
	obj1964_onTouchUp_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1930 
playAudio_1968();
function playAudio_1968() {
	window.obj1964_onTouchUp_runningActionsCount = obj1964_onTouchUp_runningActionsCount + 1;
	var myAudio = $("#obj1930")[0];
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
		    window.obj1964_onTouchUp_runningActionsCount = window.obj1964_onTouchUp_runningActionsCount - 1;
if (window.obj1964_onTouchUp_runningActionsCount < 0) {
	window.obj1964_onTouchUp_runningActionsCount = 0;
} else if (window.obj1964_onTouchUp_runningActionsCount == 0) {
	obj1964_onTouchUp_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1964_onTouchUp_runningActionsCount = window.obj1964_onTouchUp_runningActionsCount - 1;
if (window.obj1964_onTouchUp_runningActionsCount < 0) {
	window.obj1964_onTouchUp_runningActionsCount = 0;
} else if (window.obj1964_onTouchUp_runningActionsCount == 0) {
	obj1964_onTouchUp_actionGroup1();
}
	}
}



//	action: increment counter
//	target: obj1932 
incrementCounter_1967();
function incrementCounter_1967() {
	window.obj1964_onTouchUp_runningActionsCount = obj1964_onTouchUp_runningActionsCount + 1;

	var oldValue = obj1932_counterValue;
	obj1932_counterValue = obj1932_counterValue + 1;
	if (! obj1932_counterCanExceedTargetValue && obj1932_counterValue > obj1932_counterTargetValue) {
		obj1932_counterValue = obj1932_counterTargetValue;
	}
	if (oldValue != obj1932_counterValue) {
		$("#obj1932").trigger('SCEventCounterValueChange');
		$("#obj1932").trigger('SCEventCounterIncrease');
		if (obj1932_counterValue == obj1932_counterTargetValue)
			$("#obj1932").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1964_onTouchUp_runningActionsCount = window.obj1964_onTouchUp_runningActionsCount - 1;
if (window.obj1964_onTouchUp_runningActionsCount < 0) {
	window.obj1964_onTouchUp_runningActionsCount = 0;
} else if (window.obj1964_onTouchUp_runningActionsCount == 0) {
	obj1964_onTouchUp_actionGroup1();
} }, 1);
}





};
obj1964_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1964_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1964").trigger("obj1964_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1964) {
				console.warn("de-queueing event obj1964." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1964").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1964_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj1958_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1958_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1958").trigger("obj1958_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1958) {
				console.warn("de-queueing event obj1958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1958_onTouchUp_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1958 
hide_1963();
function hide_1963() {
	var selector = "#obj1958";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1958_onTouchUp_runningActionsCount = obj1958_onTouchUp_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1958_onTouchUp_runningActionsCount = window.obj1958_onTouchUp_runningActionsCount - 1;
if (window.obj1958_onTouchUp_runningActionsCount < 0) {
	window.obj1958_onTouchUp_runningActionsCount = 0;
} else if (window.obj1958_onTouchUp_runningActionsCount == 0) {
	obj1958_onTouchUp_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1963(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1958_onTouchUp_runningActionsCount = window.obj1958_onTouchUp_runningActionsCount - 1;
if (window.obj1958_onTouchUp_runningActionsCount < 0) {
	window.obj1958_onTouchUp_runningActionsCount = 0;
} else if (window.obj1958_onTouchUp_runningActionsCount == 0) {
	obj1958_onTouchUp_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj1991
(function(){
	window.obj1958_onTouchUp_runningActionsCount = obj1958_onTouchUp_runningActionsCount + 1;

	var selector = "#obj1991";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1958_onTouchUp_runningActionsCount = window.obj1958_onTouchUp_runningActionsCount - 1;
if (window.obj1958_onTouchUp_runningActionsCount < 0) {
	window.obj1958_onTouchUp_runningActionsCount = 0;
} else if (window.obj1958_onTouchUp_runningActionsCount == 0) {
	obj1958_onTouchUp_actionGroup1();
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
				window.obj1958_onTouchUp_runningActionsCount = window.obj1958_onTouchUp_runningActionsCount - 1;
if (window.obj1958_onTouchUp_runningActionsCount < 0) {
	window.obj1958_onTouchUp_runningActionsCount = 0;
} else if (window.obj1958_onTouchUp_runningActionsCount == 0) {
	obj1958_onTouchUp_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1930 
playAudio_1962();
function playAudio_1962() {
	window.obj1958_onTouchUp_runningActionsCount = obj1958_onTouchUp_runningActionsCount + 1;
	var myAudio = $("#obj1930")[0];
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
		    window.obj1958_onTouchUp_runningActionsCount = window.obj1958_onTouchUp_runningActionsCount - 1;
if (window.obj1958_onTouchUp_runningActionsCount < 0) {
	window.obj1958_onTouchUp_runningActionsCount = 0;
} else if (window.obj1958_onTouchUp_runningActionsCount == 0) {
	obj1958_onTouchUp_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1958_onTouchUp_runningActionsCount = window.obj1958_onTouchUp_runningActionsCount - 1;
if (window.obj1958_onTouchUp_runningActionsCount < 0) {
	window.obj1958_onTouchUp_runningActionsCount = 0;
} else if (window.obj1958_onTouchUp_runningActionsCount == 0) {
	obj1958_onTouchUp_actionGroup1();
}
	}
}



//	action: increment counter
//	target: obj1932 
incrementCounter_1961();
function incrementCounter_1961() {
	window.obj1958_onTouchUp_runningActionsCount = obj1958_onTouchUp_runningActionsCount + 1;

	var oldValue = obj1932_counterValue;
	obj1932_counterValue = obj1932_counterValue + 1;
	if (! obj1932_counterCanExceedTargetValue && obj1932_counterValue > obj1932_counterTargetValue) {
		obj1932_counterValue = obj1932_counterTargetValue;
	}
	if (oldValue != obj1932_counterValue) {
		$("#obj1932").trigger('SCEventCounterValueChange');
		$("#obj1932").trigger('SCEventCounterIncrease');
		if (obj1932_counterValue == obj1932_counterTargetValue)
			$("#obj1932").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1958_onTouchUp_runningActionsCount = window.obj1958_onTouchUp_runningActionsCount - 1;
if (window.obj1958_onTouchUp_runningActionsCount < 0) {
	window.obj1958_onTouchUp_runningActionsCount = 0;
} else if (window.obj1958_onTouchUp_runningActionsCount == 0) {
	obj1958_onTouchUp_actionGroup1();
} }, 1);
}





};
obj1958_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1958_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1958").trigger("obj1958_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1958) {
				console.warn("de-queueing event obj1958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1958_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj1952_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1952_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1952").trigger("obj1952_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1952) {
				console.warn("de-queueing event obj1952." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1952").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1952_onTouchUp_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1952 
hide_1957();
function hide_1957() {
	var selector = "#obj1952";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1952_onTouchUp_runningActionsCount = obj1952_onTouchUp_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1952_onTouchUp_runningActionsCount = window.obj1952_onTouchUp_runningActionsCount - 1;
if (window.obj1952_onTouchUp_runningActionsCount < 0) {
	window.obj1952_onTouchUp_runningActionsCount = 0;
} else if (window.obj1952_onTouchUp_runningActionsCount == 0) {
	obj1952_onTouchUp_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1957(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1952_onTouchUp_runningActionsCount = window.obj1952_onTouchUp_runningActionsCount - 1;
if (window.obj1952_onTouchUp_runningActionsCount < 0) {
	window.obj1952_onTouchUp_runningActionsCount = 0;
} else if (window.obj1952_onTouchUp_runningActionsCount == 0) {
	obj1952_onTouchUp_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj1988
(function(){
	window.obj1952_onTouchUp_runningActionsCount = obj1952_onTouchUp_runningActionsCount + 1;

	var selector = "#obj1988";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1952_onTouchUp_runningActionsCount = window.obj1952_onTouchUp_runningActionsCount - 1;
if (window.obj1952_onTouchUp_runningActionsCount < 0) {
	window.obj1952_onTouchUp_runningActionsCount = 0;
} else if (window.obj1952_onTouchUp_runningActionsCount == 0) {
	obj1952_onTouchUp_actionGroup1();
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
				window.obj1952_onTouchUp_runningActionsCount = window.obj1952_onTouchUp_runningActionsCount - 1;
if (window.obj1952_onTouchUp_runningActionsCount < 0) {
	window.obj1952_onTouchUp_runningActionsCount = 0;
} else if (window.obj1952_onTouchUp_runningActionsCount == 0) {
	obj1952_onTouchUp_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1930 
playAudio_1956();
function playAudio_1956() {
	window.obj1952_onTouchUp_runningActionsCount = obj1952_onTouchUp_runningActionsCount + 1;
	var myAudio = $("#obj1930")[0];
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
		    window.obj1952_onTouchUp_runningActionsCount = window.obj1952_onTouchUp_runningActionsCount - 1;
if (window.obj1952_onTouchUp_runningActionsCount < 0) {
	window.obj1952_onTouchUp_runningActionsCount = 0;
} else if (window.obj1952_onTouchUp_runningActionsCount == 0) {
	obj1952_onTouchUp_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1952_onTouchUp_runningActionsCount = window.obj1952_onTouchUp_runningActionsCount - 1;
if (window.obj1952_onTouchUp_runningActionsCount < 0) {
	window.obj1952_onTouchUp_runningActionsCount = 0;
} else if (window.obj1952_onTouchUp_runningActionsCount == 0) {
	obj1952_onTouchUp_actionGroup1();
}
	}
}



//	action: increment counter
//	target: obj1932 
incrementCounter_1955();
function incrementCounter_1955() {
	window.obj1952_onTouchUp_runningActionsCount = obj1952_onTouchUp_runningActionsCount + 1;

	var oldValue = obj1932_counterValue;
	obj1932_counterValue = obj1932_counterValue + 1;
	if (! obj1932_counterCanExceedTargetValue && obj1932_counterValue > obj1932_counterTargetValue) {
		obj1932_counterValue = obj1932_counterTargetValue;
	}
	if (oldValue != obj1932_counterValue) {
		$("#obj1932").trigger('SCEventCounterValueChange');
		$("#obj1932").trigger('SCEventCounterIncrease');
		if (obj1932_counterValue == obj1932_counterTargetValue)
			$("#obj1932").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1952_onTouchUp_runningActionsCount = window.obj1952_onTouchUp_runningActionsCount - 1;
if (window.obj1952_onTouchUp_runningActionsCount < 0) {
	window.obj1952_onTouchUp_runningActionsCount = 0;
} else if (window.obj1952_onTouchUp_runningActionsCount == 0) {
	obj1952_onTouchUp_actionGroup1();
} }, 1);
}





};
obj1952_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1952_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1952").trigger("obj1952_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1952) {
				console.warn("de-queueing event obj1952." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1952").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1952_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj1946_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1946_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1946").trigger("obj1946_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1946) {
				console.warn("de-queueing event obj1946." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1946").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1946_onTouchUp_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1946 
hide_1951();
function hide_1951() {
	var selector = "#obj1946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1946_onTouchUp_runningActionsCount = obj1946_onTouchUp_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1946_onTouchUp_runningActionsCount = window.obj1946_onTouchUp_runningActionsCount - 1;
if (window.obj1946_onTouchUp_runningActionsCount < 0) {
	window.obj1946_onTouchUp_runningActionsCount = 0;
} else if (window.obj1946_onTouchUp_runningActionsCount == 0) {
	obj1946_onTouchUp_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1951(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1946_onTouchUp_runningActionsCount = window.obj1946_onTouchUp_runningActionsCount - 1;
if (window.obj1946_onTouchUp_runningActionsCount < 0) {
	window.obj1946_onTouchUp_runningActionsCount = 0;
} else if (window.obj1946_onTouchUp_runningActionsCount == 0) {
	obj1946_onTouchUp_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj1985
(function(){
	window.obj1946_onTouchUp_runningActionsCount = obj1946_onTouchUp_runningActionsCount + 1;

	var selector = "#obj1985";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1946_onTouchUp_runningActionsCount = window.obj1946_onTouchUp_runningActionsCount - 1;
if (window.obj1946_onTouchUp_runningActionsCount < 0) {
	window.obj1946_onTouchUp_runningActionsCount = 0;
} else if (window.obj1946_onTouchUp_runningActionsCount == 0) {
	obj1946_onTouchUp_actionGroup1();
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
				window.obj1946_onTouchUp_runningActionsCount = window.obj1946_onTouchUp_runningActionsCount - 1;
if (window.obj1946_onTouchUp_runningActionsCount < 0) {
	window.obj1946_onTouchUp_runningActionsCount = 0;
} else if (window.obj1946_onTouchUp_runningActionsCount == 0) {
	obj1946_onTouchUp_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1930 
playAudio_1950();
function playAudio_1950() {
	window.obj1946_onTouchUp_runningActionsCount = obj1946_onTouchUp_runningActionsCount + 1;
	var myAudio = $("#obj1930")[0];
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
		    window.obj1946_onTouchUp_runningActionsCount = window.obj1946_onTouchUp_runningActionsCount - 1;
if (window.obj1946_onTouchUp_runningActionsCount < 0) {
	window.obj1946_onTouchUp_runningActionsCount = 0;
} else if (window.obj1946_onTouchUp_runningActionsCount == 0) {
	obj1946_onTouchUp_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1946_onTouchUp_runningActionsCount = window.obj1946_onTouchUp_runningActionsCount - 1;
if (window.obj1946_onTouchUp_runningActionsCount < 0) {
	window.obj1946_onTouchUp_runningActionsCount = 0;
} else if (window.obj1946_onTouchUp_runningActionsCount == 0) {
	obj1946_onTouchUp_actionGroup1();
}
	}
}



//	action: increment counter
//	target: obj1932 
incrementCounter_1949();
function incrementCounter_1949() {
	window.obj1946_onTouchUp_runningActionsCount = obj1946_onTouchUp_runningActionsCount + 1;

	var oldValue = obj1932_counterValue;
	obj1932_counterValue = obj1932_counterValue + 1;
	if (! obj1932_counterCanExceedTargetValue && obj1932_counterValue > obj1932_counterTargetValue) {
		obj1932_counterValue = obj1932_counterTargetValue;
	}
	if (oldValue != obj1932_counterValue) {
		$("#obj1932").trigger('SCEventCounterValueChange');
		$("#obj1932").trigger('SCEventCounterIncrease');
		if (obj1932_counterValue == obj1932_counterTargetValue)
			$("#obj1932").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1946_onTouchUp_runningActionsCount = window.obj1946_onTouchUp_runningActionsCount - 1;
if (window.obj1946_onTouchUp_runningActionsCount < 0) {
	window.obj1946_onTouchUp_runningActionsCount = 0;
} else if (window.obj1946_onTouchUp_runningActionsCount == 0) {
	obj1946_onTouchUp_actionGroup1();
} }, 1);
}





};
obj1946_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1946_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1946").trigger("obj1946_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1946) {
				console.warn("de-queueing event obj1946." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1946").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1946_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj1940_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1940_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1940").trigger("obj1940_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1940) {
				console.warn("de-queueing event obj1940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1940_onTouchUp_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1940 
hide_1945();
function hide_1945() {
	var selector = "#obj1940";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1940_onTouchUp_runningActionsCount = obj1940_onTouchUp_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1940_onTouchUp_runningActionsCount = window.obj1940_onTouchUp_runningActionsCount - 1;
if (window.obj1940_onTouchUp_runningActionsCount < 0) {
	window.obj1940_onTouchUp_runningActionsCount = 0;
} else if (window.obj1940_onTouchUp_runningActionsCount == 0) {
	obj1940_onTouchUp_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1945(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1940_onTouchUp_runningActionsCount = window.obj1940_onTouchUp_runningActionsCount - 1;
if (window.obj1940_onTouchUp_runningActionsCount < 0) {
	window.obj1940_onTouchUp_runningActionsCount = 0;
} else if (window.obj1940_onTouchUp_runningActionsCount == 0) {
	obj1940_onTouchUp_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj1982
(function(){
	window.obj1940_onTouchUp_runningActionsCount = obj1940_onTouchUp_runningActionsCount + 1;

	var selector = "#obj1982";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1940_onTouchUp_runningActionsCount = window.obj1940_onTouchUp_runningActionsCount - 1;
if (window.obj1940_onTouchUp_runningActionsCount < 0) {
	window.obj1940_onTouchUp_runningActionsCount = 0;
} else if (window.obj1940_onTouchUp_runningActionsCount == 0) {
	obj1940_onTouchUp_actionGroup1();
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
				window.obj1940_onTouchUp_runningActionsCount = window.obj1940_onTouchUp_runningActionsCount - 1;
if (window.obj1940_onTouchUp_runningActionsCount < 0) {
	window.obj1940_onTouchUp_runningActionsCount = 0;
} else if (window.obj1940_onTouchUp_runningActionsCount == 0) {
	obj1940_onTouchUp_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1930 
playAudio_1944();
function playAudio_1944() {
	window.obj1940_onTouchUp_runningActionsCount = obj1940_onTouchUp_runningActionsCount + 1;
	var myAudio = $("#obj1930")[0];
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
		    window.obj1940_onTouchUp_runningActionsCount = window.obj1940_onTouchUp_runningActionsCount - 1;
if (window.obj1940_onTouchUp_runningActionsCount < 0) {
	window.obj1940_onTouchUp_runningActionsCount = 0;
} else if (window.obj1940_onTouchUp_runningActionsCount == 0) {
	obj1940_onTouchUp_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1940_onTouchUp_runningActionsCount = window.obj1940_onTouchUp_runningActionsCount - 1;
if (window.obj1940_onTouchUp_runningActionsCount < 0) {
	window.obj1940_onTouchUp_runningActionsCount = 0;
} else if (window.obj1940_onTouchUp_runningActionsCount == 0) {
	obj1940_onTouchUp_actionGroup1();
}
	}
}



//	action: increment counter
//	target: obj1932 
incrementCounter_1943();
function incrementCounter_1943() {
	window.obj1940_onTouchUp_runningActionsCount = obj1940_onTouchUp_runningActionsCount + 1;

	var oldValue = obj1932_counterValue;
	obj1932_counterValue = obj1932_counterValue + 1;
	if (! obj1932_counterCanExceedTargetValue && obj1932_counterValue > obj1932_counterTargetValue) {
		obj1932_counterValue = obj1932_counterTargetValue;
	}
	if (oldValue != obj1932_counterValue) {
		$("#obj1932").trigger('SCEventCounterValueChange');
		$("#obj1932").trigger('SCEventCounterIncrease');
		if (obj1932_counterValue == obj1932_counterTargetValue)
			$("#obj1932").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj1940_onTouchUp_runningActionsCount = window.obj1940_onTouchUp_runningActionsCount - 1;
if (window.obj1940_onTouchUp_runningActionsCount < 0) {
	window.obj1940_onTouchUp_runningActionsCount = 0;
} else if (window.obj1940_onTouchUp_runningActionsCount == 0) {
	obj1940_onTouchUp_actionGroup1();
} }, 1);
}





};
obj1940_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1940_onTouchUp_activeActionGroupIndex = -1;
		$("#obj1940").trigger("obj1940_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1940) {
				console.warn("de-queueing event obj1940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1940_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj1932_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1932_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1932").trigger("obj1932_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1932) {
				console.warn("de-queueing event obj1932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1932_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_1934();
function wait_1934() {
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = obj1932_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1932_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 500);
}













};
obj1932_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1932_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1932").trigger("obj1932_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1932) {
				console.warn("de-queueing event obj1932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1932_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj1925
(function(){
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = obj1932_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj1925";
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
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1932_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1932_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1923
(function(){
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = obj1932_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj1923";
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
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1932_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1932_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1928 
playAudio_1937();
function playAudio_1937() {
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = obj1932_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	var myAudio = $("#obj1928")[0];
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
		    window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1932_SCEventCounterReachedTargetValue_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1932_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1932_SCEventCounterReachedTargetValue_actionGroup2();
}
	}
}









};
obj1932_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1932_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1932").trigger("obj1932_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1932) {
				console.warn("de-queueing event obj1932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1932_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	





















};
obj1919_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1919_onLoad_activeActionGroupIndex = -1;
		$("#obj1919").trigger("obj1919_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1919) {
				console.warn("de-queueing event obj1919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1919_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_1921();
function wait_1921() {
	window.obj1919_onLoad_runningActionsCount = obj1919_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1919_onLoad_runningActionsCount = window.obj1919_onLoad_runningActionsCount - 1;
if (window.obj1919_onLoad_runningActionsCount < 0) {
	window.obj1919_onLoad_runningActionsCount = 0;
} else if (window.obj1919_onLoad_runningActionsCount == 0) {
	obj1919_onLoad_actionGroup1();
}
	}, 10);
}













};
obj1919_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1919_onLoad_activeActionGroupIndex = -1;
		$("#obj1919").trigger("obj1919_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1919) {
				console.warn("de-queueing event obj1919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1919_onLoad_activeActionGroupIndex = 1;
	












//	action: playAudio
//	target: obj1919 
playAudio_1922();
function playAudio_1922() {
	window.obj1919_onLoad_runningActionsCount = obj1919_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj1919")[0];
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
		    window.obj1919_onLoad_runningActionsCount = window.obj1919_onLoad_runningActionsCount - 1;
if (window.obj1919_onLoad_runningActionsCount < 0) {
	window.obj1919_onLoad_runningActionsCount = 0;
} else if (window.obj1919_onLoad_runningActionsCount == 0) {
	obj1919_onLoad_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1919_onLoad_runningActionsCount = window.obj1919_onLoad_runningActionsCount - 1;
if (window.obj1919_onLoad_runningActionsCount < 0) {
	window.obj1919_onLoad_runningActionsCount = 0;
} else if (window.obj1919_onLoad_runningActionsCount == 0) {
	obj1919_onLoad_actionGroup2();
}
	}
}









};
obj1919_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1919_onLoad_activeActionGroupIndex = -1;
		$("#obj1919").trigger("obj1919_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1919) {
				console.warn("de-queueing event obj1919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1919_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		







































































































/*
 *
 *   obj1976: Event Touch Up
 *
 */
$("#obj1976").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj1976").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj1976").unbind("obj1976_onTouchDown_ended", startActionList);
	    if (window.obj1976_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1976_onTouchUp is still running");
	return;
}
var obj1976_onTouchUp_runningActionsCount = 0;
var obj1976_onTouchUp_loopCount = 0;
obj1976_onTouchUp_actionGroup0();
	};
	if ((window['obj1976_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj1976_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj1976").bind("obj1976_onTouchDown_ended", startActionList);
	}
});










/*
 *
 *   obj1970: Event Touch Up
 *
 */
$("#obj1970").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj1970").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj1970").unbind("obj1970_onTouchDown_ended", startActionList);
	    if (window.obj1970_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1970_onTouchUp is still running");
	return;
}
var obj1970_onTouchUp_runningActionsCount = 0;
var obj1970_onTouchUp_loopCount = 0;
obj1970_onTouchUp_actionGroup0();
	};
	if ((window['obj1970_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj1970_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj1970").bind("obj1970_onTouchDown_ended", startActionList);
	}
});










/*
 *
 *   obj1964: Event Touch Up
 *
 */
$("#obj1964").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj1964").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj1964").unbind("obj1964_onTouchDown_ended", startActionList);
	    if (window.obj1964_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1964_onTouchUp is still running");
	return;
}
var obj1964_onTouchUp_runningActionsCount = 0;
var obj1964_onTouchUp_loopCount = 0;
obj1964_onTouchUp_actionGroup0();
	};
	if ((window['obj1964_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj1964_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj1964").bind("obj1964_onTouchDown_ended", startActionList);
	}
});










/*
 *
 *   obj1958: Event Touch Up
 *
 */
$("#obj1958").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj1958").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj1958").unbind("obj1958_onTouchDown_ended", startActionList);
	    if (window.obj1958_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1958_onTouchUp is still running");
	return;
}
var obj1958_onTouchUp_runningActionsCount = 0;
var obj1958_onTouchUp_loopCount = 0;
obj1958_onTouchUp_actionGroup0();
	};
	if ((window['obj1958_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj1958_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj1958").bind("obj1958_onTouchDown_ended", startActionList);
	}
});










/*
 *
 *   obj1952: Event Touch Up
 *
 */
$("#obj1952").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj1952").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj1952").unbind("obj1952_onTouchDown_ended", startActionList);
	    if (window.obj1952_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1952_onTouchUp is still running");
	return;
}
var obj1952_onTouchUp_runningActionsCount = 0;
var obj1952_onTouchUp_loopCount = 0;
obj1952_onTouchUp_actionGroup0();
	};
	if ((window['obj1952_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj1952_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj1952").bind("obj1952_onTouchDown_ended", startActionList);
	}
});










/*
 *
 *   obj1946: Event Touch Up
 *
 */
$("#obj1946").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj1946").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj1946").unbind("obj1946_onTouchDown_ended", startActionList);
	    if (window.obj1946_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1946_onTouchUp is still running");
	return;
}
var obj1946_onTouchUp_runningActionsCount = 0;
var obj1946_onTouchUp_loopCount = 0;
obj1946_onTouchUp_actionGroup0();
	};
	if ((window['obj1946_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj1946_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj1946").bind("obj1946_onTouchDown_ended", startActionList);
	}
});










/*
 *
 *   obj1940: Event Touch Up
 *
 */
$("#obj1940").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj1940").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj1940").unbind("obj1940_onTouchDown_ended", startActionList);
	    if (window.obj1940_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1940_onTouchUp is still running");
	return;
}
var obj1940_onTouchUp_runningActionsCount = 0;
var obj1940_onTouchUp_loopCount = 0;
obj1940_onTouchUp_actionGroup0();
	};
	if ((window['obj1940_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj1940_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj1940").bind("obj1940_onTouchDown_ended", startActionList);
	}
});
























/*
 *
 *   obj1932: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj1932").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj1932_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1932_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj1932_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1932_SCEventCounterReachedTargetValue_loopCount = 0;
obj1932_SCEventCounterReachedTargetValue_actionGroup0();
});















































/*
 *
 *   obj1919: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1919_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1919_onLoad is still running");
	return;
}
var obj1919_onLoad_runningActionsCount = 0;
var obj1919_onLoad_loopCount = 0;
obj1919_onLoad_actionGroup0();
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
	
$("#obj413").trigger('SCEventShow');
$("#obj2006").trigger('SCEventShow');
$("#obj2003").trigger('SCEventShow');
$("#obj1976").trigger('SCEventShow');
$("#obj1970").trigger('SCEventShow');
$("#obj1964").trigger('SCEventShow');
$("#obj1958").trigger('SCEventShow');
$("#obj1952").trigger('SCEventShow');
$("#obj1946").trigger('SCEventShow');
$("#obj1940").trigger('SCEventShow');
$("#obj1938").trigger('SCEventShow');
$("#obj1930").trigger('SCEventShow');
$("#obj1928").trigger('SCEventShow');
$("#obj1919").trigger('SCEventShow');
	
});