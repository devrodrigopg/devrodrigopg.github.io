pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 99;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 5;
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
var obj620_onLoad_activeActionGroupIndex = -1;
var obj620_onLoad_runningActionsCount = 0;
var obj620_onLoad_loopCount = 0;
var obj614_onLoad_activeActionGroupIndex = -1;
var obj614_onLoad_runningActionsCount = 0;
var obj614_onLoad_loopCount = 0;
var obj630_onLoad_activeActionGroupIndex = -1;
var obj630_onLoad_runningActionsCount = 0;
var obj630_onLoad_loopCount = 0;
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
		
obj620_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj620_onLoad_activeActionGroupIndex = -1;
		$("#obj620").trigger("obj620_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 620) {
				console.warn("de-queueing event obj620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj620_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_627();
function wait_627() {
	window.obj620_onLoad_runningActionsCount = obj620_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj620_onLoad_runningActionsCount = window.obj620_onLoad_runningActionsCount - 1;
if (window.obj620_onLoad_runningActionsCount < 0) {
	window.obj620_onLoad_runningActionsCount = 0;
} else if (window.obj620_onLoad_runningActionsCount == 0) {
	obj620_onLoad_actionGroup1();
}
	}, 3000);
}













};
obj620_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj620_onLoad_activeActionGroupIndex = -1;
		$("#obj620").trigger("obj620_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 620) {
				console.warn("de-queueing event obj620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj620_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj620
(function(){
	window.obj620_onLoad_runningActionsCount = obj620_onLoad_runningActionsCount + 1;

	var selector = "#obj620";
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
	
		var animationType = "fadeInRightBig";
		var animationDurationMs = 3000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj620_onLoad_runningActionsCount = window.obj620_onLoad_runningActionsCount - 1;
if (window.obj620_onLoad_runningActionsCount < 0) {
	window.obj620_onLoad_runningActionsCount = 0;
} else if (window.obj620_onLoad_runningActionsCount == 0) {
	obj620_onLoad_actionGroup2();
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
				window.obj620_onLoad_runningActionsCount = window.obj620_onLoad_runningActionsCount - 1;
if (window.obj620_onLoad_runningActionsCount < 0) {
	window.obj620_onLoad_runningActionsCount = 0;
} else if (window.obj620_onLoad_runningActionsCount == 0) {
	obj620_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj620_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj620_onLoad_activeActionGroupIndex = -1;
		$("#obj620").trigger("obj620_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 620) {
				console.warn("de-queueing event obj620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj620_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj620 
hide_629();
function hide_629() {
	var selector = "#obj620";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj620_onLoad_runningActionsCount = obj620_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj620_onLoad_runningActionsCount = window.obj620_onLoad_runningActionsCount - 1;
if (window.obj620_onLoad_runningActionsCount < 0) {
	window.obj620_onLoad_runningActionsCount = 0;
} else if (window.obj620_onLoad_runningActionsCount == 0) {
	obj620_onLoad_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_629(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj620_onLoad_runningActionsCount = window.obj620_onLoad_runningActionsCount - 1;
if (window.obj620_onLoad_runningActionsCount < 0) {
	window.obj620_onLoad_runningActionsCount = 0;
} else if (window.obj620_onLoad_runningActionsCount == 0) {
	obj620_onLoad_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj620_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj620_onLoad_activeActionGroupIndex = -1;
		$("#obj620").trigger("obj620_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 620) {
				console.warn("de-queueing event obj620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj620_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	selector: #obj620
(function(){
	window.obj620_onLoad_runningActionsCount = obj620_onLoad_runningActionsCount + 1;

	var selector = "#obj620";
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
	
		var animationType = "tada";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj620_onLoad_runningActionsCount = window.obj620_onLoad_runningActionsCount - 1;
if (window.obj620_onLoad_runningActionsCount < 0) {
	window.obj620_onLoad_runningActionsCount = 0;
} else if (window.obj620_onLoad_runningActionsCount == 0) {
	obj620_onLoad_actionGroup4();
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
				window.obj620_onLoad_runningActionsCount = window.obj620_onLoad_runningActionsCount - 1;
if (window.obj620_onLoad_runningActionsCount < 0) {
	window.obj620_onLoad_runningActionsCount = 0;
} else if (window.obj620_onLoad_runningActionsCount == 0) {
	obj620_onLoad_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj620_onLoad_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj620_onLoad_activeActionGroupIndex = -1;
		$("#obj620").trigger("obj620_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 620) {
				console.warn("de-queueing event obj620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj620_onLoad_activeActionGroupIndex = 4;
	





















};
obj614_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj614_onLoad_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 614) {
				console.warn("de-queueing event obj614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj614_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_617();
function wait_617() {
	window.obj614_onLoad_runningActionsCount = obj614_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj614_onLoad_runningActionsCount = window.obj614_onLoad_runningActionsCount - 1;
if (window.obj614_onLoad_runningActionsCount < 0) {
	window.obj614_onLoad_runningActionsCount = 0;
} else if (window.obj614_onLoad_runningActionsCount == 0) {
	obj614_onLoad_actionGroup1();
}
	}, 1000);
}













};
obj614_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj614_onLoad_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 614) {
				console.warn("de-queueing event obj614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj614_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj614
(function(){
	window.obj614_onLoad_runningActionsCount = obj614_onLoad_runningActionsCount + 1;

	var selector = "#obj614";
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
	
		var animationType = "jackInTheBox";
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj614_onLoad_runningActionsCount = window.obj614_onLoad_runningActionsCount - 1;
if (window.obj614_onLoad_runningActionsCount < 0) {
	window.obj614_onLoad_runningActionsCount = 0;
} else if (window.obj614_onLoad_runningActionsCount == 0) {
	obj614_onLoad_actionGroup2();
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
				window.obj614_onLoad_runningActionsCount = window.obj614_onLoad_runningActionsCount - 1;
if (window.obj614_onLoad_runningActionsCount < 0) {
	window.obj614_onLoad_runningActionsCount = 0;
} else if (window.obj614_onLoad_runningActionsCount == 0) {
	obj614_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj614_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj614_onLoad_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 614) {
				console.warn("de-queueing event obj614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj614_onLoad_activeActionGroupIndex = 2;
	





















};
obj630_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj630_onLoad_activeActionGroupIndex = -1;
		$("#obj630").trigger("obj630_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 630) {
				console.warn("de-queueing event obj630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj630_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj630 
rotate_633();
function rotate_633() {
	window.obj630_onLoad_runningActionsCount = obj630_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj630";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj630';
	var transformOriginX = '0%';
	var transformOriginY = '100%';
	var rotationToDegrees = '15';
	var rotationSpeed = 0.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_633_completed(); }
	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_633_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_633_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_633_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_633_completed() {
	setTimeout(function() {
		window.obj630_onLoad_runningActionsCount = window.obj630_onLoad_runningActionsCount - 1;
if (window.obj630_onLoad_runningActionsCount < 0) {
	window.obj630_onLoad_runningActionsCount = 0;
} else if (window.obj630_onLoad_runningActionsCount == 0) {
	obj630_onLoad_actionGroup1();
}
	}, 1);
}














};
obj630_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj630_onLoad_activeActionGroupIndex = -1;
		$("#obj630").trigger("obj630_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 630) {
				console.warn("de-queueing event obj630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj630_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_634();
function wait_634() {
	window.obj630_onLoad_runningActionsCount = obj630_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj630_onLoad_runningActionsCount = window.obj630_onLoad_runningActionsCount - 1;
if (window.obj630_onLoad_runningActionsCount < 0) {
	window.obj630_onLoad_runningActionsCount = 0;
} else if (window.obj630_onLoad_runningActionsCount == 0) {
	obj630_onLoad_actionGroup2();
}
	}, 500);
}













};
obj630_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj630_onLoad_activeActionGroupIndex = -1;
		$("#obj630").trigger("obj630_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 630) {
				console.warn("de-queueing event obj630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj630_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj630_onLoad();
function loop_obj630_onLoad() {
	var loopCount = 0;
	window.obj630_onLoad_loopCount = window.obj630_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj630_onLoad_loopCount > loopCount) {
		window.obj630_onLoad_loopCount = 0
		obj630_onLoad_actionGroup3();
	} else {
		obj630_onLoad_actionGroup0();
	}
}













};
obj630_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj630_onLoad_activeActionGroupIndex = -1;
		$("#obj630").trigger("obj630_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 630) {
				console.warn("de-queueing event obj630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj630_onLoad_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj620: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj620_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj620_onLoad is still running");
	return;
}
var obj620_onLoad_runningActionsCount = 0;
var obj620_onLoad_loopCount = 0;
obj620_onLoad_actionGroup0();
});






























/*
 *
 *   obj614: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj614_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj614_onLoad is still running");
	return;
}
var obj614_onLoad_runningActionsCount = 0;
var obj614_onLoad_loopCount = 0;
obj614_onLoad_actionGroup0();
});










/*
 *
 *   obj630: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj630_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj630_onLoad is still running");
	return;
}
var obj630_onLoad_runningActionsCount = 0;
var obj630_onLoad_loopCount = 0;
obj630_onLoad_actionGroup0();
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
	
$("#obj234").trigger('SCEventShow');
$("#obj304").trigger('SCEventShow');
$("#obj611").trigger('SCEventShow');
$("#obj630").trigger('SCEventShow');
$("#obj2425").trigger('SCEventShow');
	
});