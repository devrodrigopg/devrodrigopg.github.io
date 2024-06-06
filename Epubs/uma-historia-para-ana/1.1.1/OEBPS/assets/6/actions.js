pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 104;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj646_onLoad_activeActionGroupIndex = -1;
var obj646_onLoad_runningActionsCount = 0;
var obj646_onLoad_loopCount = 0;
var obj656_onLoad_activeActionGroupIndex = -1;
var obj656_onLoad_runningActionsCount = 0;
var obj656_onLoad_loopCount = 0;
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
		
obj646_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj646_onLoad_activeActionGroupIndex = -1;
		$("#obj646").trigger("obj646_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 646) {
				console.warn("de-queueing event obj646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj646_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj646 
rotate_649();
function rotate_649() {
	window.obj646_onLoad_runningActionsCount = obj646_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj646";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj646';
	var transformOriginX = '26.35328%';
	var transformOriginY = '73.02632%';
	var rotationToDegrees = '-25.24053';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_649_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_649_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_649_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_649_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_649_completed() {
	setTimeout(function() {
		window.obj646_onLoad_runningActionsCount = window.obj646_onLoad_runningActionsCount - 1;
if (window.obj646_onLoad_runningActionsCount < 0) {
	window.obj646_onLoad_runningActionsCount = 0;
} else if (window.obj646_onLoad_runningActionsCount == 0) {
	obj646_onLoad_actionGroup1();
}
	}, 1);
}














};
obj646_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj646_onLoad_activeActionGroupIndex = -1;
		$("#obj646").trigger("obj646_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 646) {
				console.warn("de-queueing event obj646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj646_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj646 
rotate_653();
function rotate_653() {
	window.obj646_onLoad_runningActionsCount = obj646_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj646";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj646';
	var transformOriginX = '26.35328%';
	var transformOriginY = '73.02632%';
	var rotationToDegrees = '25.24053';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_653_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_653_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_653_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_653_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_653_completed() {
	setTimeout(function() {
		window.obj646_onLoad_runningActionsCount = window.obj646_onLoad_runningActionsCount - 1;
if (window.obj646_onLoad_runningActionsCount < 0) {
	window.obj646_onLoad_runningActionsCount = 0;
} else if (window.obj646_onLoad_runningActionsCount == 0) {
	obj646_onLoad_actionGroup2();
}
	}, 1);
}














};
obj646_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj646_onLoad_activeActionGroupIndex = -1;
		$("#obj646").trigger("obj646_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 646) {
				console.warn("de-queueing event obj646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj646_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj646_onLoad();
function loop_obj646_onLoad() {
	var loopCount = 0;
	window.obj646_onLoad_loopCount = window.obj646_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj646_onLoad_loopCount > loopCount) {
		window.obj646_onLoad_loopCount = 0
		obj646_onLoad_actionGroup3();
	} else {
		obj646_onLoad_actionGroup0();
	}
}













};
obj646_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj646_onLoad_activeActionGroupIndex = -1;
		$("#obj646").trigger("obj646_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 646) {
				console.warn("de-queueing event obj646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj646_onLoad_activeActionGroupIndex = 3;
	





















};
obj656_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj656_onLoad_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_2128();
function wait_2128() {
	window.obj656_onLoad_runningActionsCount = obj656_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj656_onLoad_runningActionsCount = window.obj656_onLoad_runningActionsCount - 1;
if (window.obj656_onLoad_runningActionsCount < 0) {
	window.obj656_onLoad_runningActionsCount = 0;
} else if (window.obj656_onLoad_runningActionsCount == 0) {
	obj656_onLoad_actionGroup1();
}
	}, 2000);
}













};
obj656_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj656_onLoad_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj656
(function(){
	window.obj656_onLoad_runningActionsCount = obj656_onLoad_runningActionsCount + 1;

	var selector = "#obj656";
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
					window.obj656_onLoad_runningActionsCount = window.obj656_onLoad_runningActionsCount - 1;
if (window.obj656_onLoad_runningActionsCount < 0) {
	window.obj656_onLoad_runningActionsCount = 0;
} else if (window.obj656_onLoad_runningActionsCount == 0) {
	obj656_onLoad_actionGroup2();
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
				window.obj656_onLoad_runningActionsCount = window.obj656_onLoad_runningActionsCount - 1;
if (window.obj656_onLoad_runningActionsCount < 0) {
	window.obj656_onLoad_runningActionsCount = 0;
} else if (window.obj656_onLoad_runningActionsCount == 0) {
	obj656_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj656_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj656_onLoad_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj659
(function(){
	window.obj656_onLoad_runningActionsCount = obj656_onLoad_runningActionsCount + 1;

	var selector = "#obj659";
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
					window.obj656_onLoad_runningActionsCount = window.obj656_onLoad_runningActionsCount - 1;
if (window.obj656_onLoad_runningActionsCount < 0) {
	window.obj656_onLoad_runningActionsCount = 0;
} else if (window.obj656_onLoad_runningActionsCount == 0) {
	obj656_onLoad_actionGroup3();
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
				window.obj656_onLoad_runningActionsCount = window.obj656_onLoad_runningActionsCount - 1;
if (window.obj656_onLoad_runningActionsCount < 0) {
	window.obj656_onLoad_runningActionsCount = 0;
} else if (window.obj656_onLoad_runningActionsCount == 0) {
	obj656_onLoad_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj656_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj656_onLoad_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	selector: #obj665
(function(){
	window.obj656_onLoad_runningActionsCount = obj656_onLoad_runningActionsCount + 1;

	var selector = "#obj665";
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
					window.obj656_onLoad_runningActionsCount = window.obj656_onLoad_runningActionsCount - 1;
if (window.obj656_onLoad_runningActionsCount < 0) {
	window.obj656_onLoad_runningActionsCount = 0;
} else if (window.obj656_onLoad_runningActionsCount == 0) {
	obj656_onLoad_actionGroup4();
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
				window.obj656_onLoad_runningActionsCount = window.obj656_onLoad_runningActionsCount - 1;
if (window.obj656_onLoad_runningActionsCount < 0) {
	window.obj656_onLoad_runningActionsCount = 0;
} else if (window.obj656_onLoad_runningActionsCount == 0) {
	obj656_onLoad_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj656_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj656_onLoad_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj662
(function(){
	window.obj656_onLoad_runningActionsCount = obj656_onLoad_runningActionsCount + 1;

	var selector = "#obj662";
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
					window.obj656_onLoad_runningActionsCount = window.obj656_onLoad_runningActionsCount - 1;
if (window.obj656_onLoad_runningActionsCount < 0) {
	window.obj656_onLoad_runningActionsCount = 0;
} else if (window.obj656_onLoad_runningActionsCount == 0) {
	obj656_onLoad_actionGroup5();
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
				window.obj656_onLoad_runningActionsCount = window.obj656_onLoad_runningActionsCount - 1;
if (window.obj656_onLoad_runningActionsCount < 0) {
	window.obj656_onLoad_runningActionsCount = 0;
} else if (window.obj656_onLoad_runningActionsCount == 0) {
	obj656_onLoad_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj656_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj656_onLoad_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_onLoad_activeActionGroupIndex = 5;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



































/*
 *
 *   obj646: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj646_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj646_onLoad is still running");
	return;
}
var obj646_onLoad_runningActionsCount = 0;
var obj646_onLoad_loopCount = 0;
obj646_onLoad_actionGroup0();
});




















/*
 *
 *   obj656: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj656_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj656_onLoad is still running");
	return;
}
var obj656_onLoad_runningActionsCount = 0;
var obj656_onLoad_loopCount = 0;
obj656_onLoad_actionGroup0();
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
	
$("#obj257").trigger('SCEventShow');
$("#obj308").trigger('SCEventShow');
$("#obj310").trigger('SCEventShow');
$("#obj646").trigger('SCEventShow');
$("#obj643").trigger('SCEventShow');
$("#obj2667").trigger('SCEventShow');
	
});