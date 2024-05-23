pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 148;
pubcoder.page.title = pubcoder.page.title || "11";
pubcoder.page.number = pubcoder.page.number || 11;
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
var obj777_onLoad_activeActionGroupIndex = -1;
var obj777_onLoad_runningActionsCount = 0;
var obj777_onLoad_loopCount = 0;
var obj784_onLoad_activeActionGroupIndex = -1;
var obj784_onLoad_runningActionsCount = 0;
var obj784_onLoad_loopCount = 0;
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
		
obj777_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj777_onLoad_activeActionGroupIndex = -1;
		$("#obj777").trigger("obj777_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 777) {
				console.warn("de-queueing event obj777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj777_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_795();
function wait_795() {
	window.obj777_onLoad_runningActionsCount = obj777_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj777_onLoad_runningActionsCount = window.obj777_onLoad_runningActionsCount - 1;
if (window.obj777_onLoad_runningActionsCount < 0) {
	window.obj777_onLoad_runningActionsCount = 0;
} else if (window.obj777_onLoad_runningActionsCount == 0) {
	obj777_onLoad_actionGroup1();
}
	}, 1000);
}













};
obj777_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj777_onLoad_activeActionGroupIndex = -1;
		$("#obj777").trigger("obj777_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 777) {
				console.warn("de-queueing event obj777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj777_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj777
(function(){
	window.obj777_onLoad_runningActionsCount = obj777_onLoad_runningActionsCount + 1;

	var selector = "#obj777";
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
					window.obj777_onLoad_runningActionsCount = window.obj777_onLoad_runningActionsCount - 1;
if (window.obj777_onLoad_runningActionsCount < 0) {
	window.obj777_onLoad_runningActionsCount = 0;
} else if (window.obj777_onLoad_runningActionsCount == 0) {
	obj777_onLoad_actionGroup2();
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
				window.obj777_onLoad_runningActionsCount = window.obj777_onLoad_runningActionsCount - 1;
if (window.obj777_onLoad_runningActionsCount < 0) {
	window.obj777_onLoad_runningActionsCount = 0;
} else if (window.obj777_onLoad_runningActionsCount == 0) {
	obj777_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj777 
move_797();
function move_797() {
	window.obj777_onLoad_runningActionsCount = obj777_onLoad_runningActionsCount + 1;

	var easing = "ease-out";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj777");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-431";
	var moveY = "+=428";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 4000, easing, function() {
		setTimeout(function() {
			window.obj777_onLoad_runningActionsCount = window.obj777_onLoad_runningActionsCount - 1;
if (window.obj777_onLoad_runningActionsCount < 0) {
	window.obj777_onLoad_runningActionsCount = 0;
} else if (window.obj777_onLoad_runningActionsCount == 0) {
	obj777_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj777_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj777_onLoad_activeActionGroupIndex = -1;
		$("#obj777").trigger("obj777_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 777) {
				console.warn("de-queueing event obj777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj777_onLoad_activeActionGroupIndex = 2;
	





















};
obj784_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj784_onLoad_activeActionGroupIndex = -1;
		$("#obj784").trigger("obj784_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 784) {
				console.warn("de-queueing event obj784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj784_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj784 
rotate_789();
function rotate_789() {
	window.obj784_onLoad_runningActionsCount = obj784_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj784";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj784';
	var transformOriginX = '44.54545%';
	var transformOriginY = '72.1843%';
	var rotationToDegrees = '17.22252';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_789_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_789_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_789_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_789_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_789_completed() {
	setTimeout(function() {
		window.obj784_onLoad_runningActionsCount = window.obj784_onLoad_runningActionsCount - 1;
if (window.obj784_onLoad_runningActionsCount < 0) {
	window.obj784_onLoad_runningActionsCount = 0;
} else if (window.obj784_onLoad_runningActionsCount == 0) {
	obj784_onLoad_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj785 
rotate_790();
function rotate_790() {
	window.obj784_onLoad_runningActionsCount = obj784_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj785";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj785';
	var transformOriginX = '55.5624%';
	var transformOriginY = '69.1843%';
	var rotationToDegrees = '-17.22252';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_790_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_790_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_790_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_790_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_790_completed() {
	setTimeout(function() {
		window.obj784_onLoad_runningActionsCount = window.obj784_onLoad_runningActionsCount - 1;
if (window.obj784_onLoad_runningActionsCount < 0) {
	window.obj784_onLoad_runningActionsCount = 0;
} else if (window.obj784_onLoad_runningActionsCount == 0) {
	obj784_onLoad_actionGroup1();
}
	}, 1);
}














};
obj784_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj784_onLoad_activeActionGroupIndex = -1;
		$("#obj784").trigger("obj784_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 784) {
				console.warn("de-queueing event obj784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj784_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj784 
rotate_791();
function rotate_791() {
	window.obj784_onLoad_runningActionsCount = obj784_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj784";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj784';
	var transformOriginX = '44.54545%';
	var transformOriginY = '72.1843%';
	var rotationToDegrees = '-17.22252';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_791_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_791_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_791_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_791_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_791_completed() {
	setTimeout(function() {
		window.obj784_onLoad_runningActionsCount = window.obj784_onLoad_runningActionsCount - 1;
if (window.obj784_onLoad_runningActionsCount < 0) {
	window.obj784_onLoad_runningActionsCount = 0;
} else if (window.obj784_onLoad_runningActionsCount == 0) {
	obj784_onLoad_actionGroup2();
}
	}, 1);
}
//	action: rotate 
//	target: obj785 
rotate_792();
function rotate_792() {
	window.obj784_onLoad_runningActionsCount = obj784_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj785";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj785';
	var transformOriginX = '55.5624%';
	var transformOriginY = '69.1843%';
	var rotationToDegrees = '17.22252';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_792_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_792_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_792_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_792_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_792_completed() {
	setTimeout(function() {
		window.obj784_onLoad_runningActionsCount = window.obj784_onLoad_runningActionsCount - 1;
if (window.obj784_onLoad_runningActionsCount < 0) {
	window.obj784_onLoad_runningActionsCount = 0;
} else if (window.obj784_onLoad_runningActionsCount == 0) {
	obj784_onLoad_actionGroup2();
}
	}, 1);
}














};
obj784_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj784_onLoad_activeActionGroupIndex = -1;
		$("#obj784").trigger("obj784_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 784) {
				console.warn("de-queueing event obj784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj784_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj784_onLoad();
function loop_obj784_onLoad() {
	var loopCount = 0;
	window.obj784_onLoad_loopCount = window.obj784_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj784_onLoad_loopCount > loopCount) {
		window.obj784_onLoad_loopCount = 0
		obj784_onLoad_actionGroup3();
	} else {
		obj784_onLoad_actionGroup0();
	}
}













};
obj784_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj784_onLoad_activeActionGroupIndex = -1;
		$("#obj784").trigger("obj784_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 784) {
				console.warn("de-queueing event obj784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj784_onLoad_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























/*
 *
 *   obj777: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj777_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj777_onLoad is still running");
	return;
}
var obj777_onLoad_runningActionsCount = 0;
var obj777_onLoad_loopCount = 0;
obj777_onLoad_actionGroup0();
});










/*
 *
 *   obj784: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj784_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj784_onLoad is still running");
	return;
}
var obj784_onLoad_runningActionsCount = 0;
var obj784_onLoad_loopCount = 0;
obj784_onLoad_actionGroup0();
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
	
$("#obj351").trigger('SCEventShow');
$("#obj353").trigger('SCEventShow');
$("#obj784").trigger('SCEventShow');
$("#obj785").trigger('SCEventShow');
$("#obj780").trigger('SCEventShow');
	
});