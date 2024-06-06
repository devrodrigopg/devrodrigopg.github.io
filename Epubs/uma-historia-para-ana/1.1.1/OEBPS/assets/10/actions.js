pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 145;
pubcoder.page.title = pubcoder.page.title || "10";
pubcoder.page.number = pubcoder.page.number || 10;
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
var obj748_onLoad_activeActionGroupIndex = -1;
var obj748_onLoad_runningActionsCount = 0;
var obj748_onLoad_loopCount = 0;
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
		
obj748_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj748_onLoad_activeActionGroupIndex = -1;
		$("#obj748").trigger("obj748_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 748) {
				console.warn("de-queueing event obj748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj748_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj748 
move_763();
function move_763() {
	window.obj748_onLoad_runningActionsCount = obj748_onLoad_runningActionsCount + 1;

	var easing = "ease";
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
	var targetObject = $("#obj748");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-596";
	var moveY = "+=72";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj748_onLoad_runningActionsCount = window.obj748_onLoad_runningActionsCount - 1;
if (window.obj748_onLoad_runningActionsCount < 0) {
	window.obj748_onLoad_runningActionsCount = 0;
} else if (window.obj748_onLoad_runningActionsCount == 0) {
	obj748_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj759 
move_765();
function move_765() {
	window.obj748_onLoad_runningActionsCount = obj748_onLoad_runningActionsCount + 1;

	var easing = "ease";
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
	var targetObject = $("#obj759");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-591";
	var moveY = "+=78";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj748_onLoad_runningActionsCount = window.obj748_onLoad_runningActionsCount - 1;
if (window.obj748_onLoad_runningActionsCount < 0) {
	window.obj748_onLoad_runningActionsCount = 0;
} else if (window.obj748_onLoad_runningActionsCount == 0) {
	obj748_onLoad_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj748 
rotate_764();
function rotate_764() {
	window.obj748_onLoad_runningActionsCount = obj748_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj748";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj748';
	var transformOriginX = '67.56098%';
	var transformOriginY = '94.59931%';
	var rotationToDegrees = '-4.288664';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_764_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_764_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_764_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_764_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_764_completed() {
	setTimeout(function() {
		window.obj748_onLoad_runningActionsCount = window.obj748_onLoad_runningActionsCount - 1;
if (window.obj748_onLoad_runningActionsCount < 0) {
	window.obj748_onLoad_runningActionsCount = 0;
} else if (window.obj748_onLoad_runningActionsCount == 0) {
	obj748_onLoad_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj759 
rotate_766();
function rotate_766() {
	window.obj748_onLoad_runningActionsCount = obj748_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj759";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj759';
	var transformOriginX = '93.57724%';
	var transformOriginY = '33.21317%';
	var rotationToDegrees = '-4.288664';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_766_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_766_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_766_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_766_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_766_completed() {
	setTimeout(function() {
		window.obj748_onLoad_runningActionsCount = window.obj748_onLoad_runningActionsCount - 1;
if (window.obj748_onLoad_runningActionsCount < 0) {
	window.obj748_onLoad_runningActionsCount = 0;
} else if (window.obj748_onLoad_runningActionsCount == 0) {
	obj748_onLoad_actionGroup1();
}
	}, 1);
}














};
obj748_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj748_onLoad_activeActionGroupIndex = -1;
		$("#obj748").trigger("obj748_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 748) {
				console.warn("de-queueing event obj748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj748_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj768 
move_770();
function move_770() {
	window.obj748_onLoad_runningActionsCount = obj748_onLoad_runningActionsCount + 1;

	var easing = "ease";
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
	var targetObject = $("#obj768");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=302";
	var moveY = "+=173";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj748_onLoad_runningActionsCount = window.obj748_onLoad_runningActionsCount - 1;
if (window.obj748_onLoad_runningActionsCount < 0) {
	window.obj748_onLoad_runningActionsCount = 0;
} else if (window.obj748_onLoad_runningActionsCount == 0) {
	obj748_onLoad_actionGroup2();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj768 
rotate_771();
function rotate_771() {
	window.obj748_onLoad_runningActionsCount = obj748_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj768";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj768';
	var transformOriginX = '4.061111%';
	var transformOriginY = '18.87055%';
	var rotationToDegrees = '4.97711';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_771_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_771_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_771_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_771_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_771_completed() {
	setTimeout(function() {
		window.obj748_onLoad_runningActionsCount = window.obj748_onLoad_runningActionsCount - 1;
if (window.obj748_onLoad_runningActionsCount < 0) {
	window.obj748_onLoad_runningActionsCount = 0;
} else if (window.obj748_onLoad_runningActionsCount == 0) {
	obj748_onLoad_actionGroup2();
}
	}, 1);
}














};
obj748_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj748_onLoad_activeActionGroupIndex = -1;
		$("#obj748").trigger("obj748_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 748) {
				console.warn("de-queueing event obj748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj748_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













































/*
 *
 *   obj748: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj748_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj748_onLoad is still running");
	return;
}
var obj748_onLoad_runningActionsCount = 0;
var obj748_onLoad_loopCount = 0;
obj748_onLoad_actionGroup0();
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
	
$("#obj344").trigger('SCEventShow');
$("#obj346").trigger('SCEventShow');
$("#obj759").trigger('SCEventShow');
$("#obj754").trigger('SCEventShow');
$("#obj748").trigger('SCEventShow');
$("#obj768").trigger('SCEventShow');
$("#obj2785").trigger('SCEventShow');
	
});