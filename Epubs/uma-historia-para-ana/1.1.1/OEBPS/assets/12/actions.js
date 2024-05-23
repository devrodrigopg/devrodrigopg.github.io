pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 152;
pubcoder.page.title = pubcoder.page.title || "12";
pubcoder.page.number = pubcoder.page.number || 12;
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
var obj802_onLoad_activeActionGroupIndex = -1;
var obj802_onLoad_runningActionsCount = 0;
var obj802_onLoad_loopCount = 0;
var obj811_onLoad_activeActionGroupIndex = -1;
var obj811_onLoad_runningActionsCount = 0;
var obj811_onLoad_loopCount = 0;
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
		
obj802_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj802_onLoad_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj802 
rotate_806();
function rotate_806() {
	window.obj802_onLoad_runningActionsCount = obj802_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj802";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj802';
	var transformOriginX = '28.64964%';
	var transformOriginY = '77.30496%';
	var rotationToDegrees = '6.97493';
	var rotationSpeed = 0;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_806_completed(); }
	//TweenMax.to(targetObjectId, 0, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_806_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_806_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_806_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_806_completed() {
	setTimeout(function() {
		window.obj802_onLoad_runningActionsCount = window.obj802_onLoad_runningActionsCount - 1;
if (window.obj802_onLoad_runningActionsCount < 0) {
	window.obj802_onLoad_runningActionsCount = 0;
} else if (window.obj802_onLoad_runningActionsCount == 0) {
	obj802_onLoad_actionGroup1();
}
	}, 1);
}














};
obj802_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj802_onLoad_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_808();
function wait_808() {
	window.obj802_onLoad_runningActionsCount = obj802_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj802_onLoad_runningActionsCount = window.obj802_onLoad_runningActionsCount - 1;
if (window.obj802_onLoad_runningActionsCount < 0) {
	window.obj802_onLoad_runningActionsCount = 0;
} else if (window.obj802_onLoad_runningActionsCount == 0) {
	obj802_onLoad_actionGroup2();
}
	}, 1000);
}













};
obj802_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj802_onLoad_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_onLoad_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj802 
move_807();
function move_807() {
	window.obj802_onLoad_runningActionsCount = obj802_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj802");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=148";
	var moveY = "+=18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj802_onLoad_runningActionsCount = window.obj802_onLoad_runningActionsCount - 1;
if (window.obj802_onLoad_runningActionsCount < 0) {
	window.obj802_onLoad_runningActionsCount = 0;
} else if (window.obj802_onLoad_runningActionsCount == 0) {
	obj802_onLoad_actionGroup3();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj802 
rotate_809();
function rotate_809() {
	window.obj802_onLoad_runningActionsCount = obj802_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj802";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj802';
	var transformOriginX = '28.64964%';
	var transformOriginY = '77.30496%';
	var rotationToDegrees = '-6.97493';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_809_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_809_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_809_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_809_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_809_completed() {
	setTimeout(function() {
		window.obj802_onLoad_runningActionsCount = window.obj802_onLoad_runningActionsCount - 1;
if (window.obj802_onLoad_runningActionsCount < 0) {
	window.obj802_onLoad_runningActionsCount = 0;
} else if (window.obj802_onLoad_runningActionsCount == 0) {
	obj802_onLoad_actionGroup3();
}
	}, 1);
}














};
obj802_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj802_onLoad_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_onLoad_activeActionGroupIndex = 3;
	





















};
obj811_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj811_onLoad_activeActionGroupIndex = -1;
		$("#obj811").trigger("obj811_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 811) {
				console.warn("de-queueing event obj811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj811_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj811 
rotate_814();
function rotate_814() {
	window.obj811_onLoad_runningActionsCount = obj811_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj811";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj811';
	var transformOriginX = '8.715596%';
	var transformOriginY = '30%';
	var rotationToDegrees = '-13.21275';
	var rotationSpeed = 0.6;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_814_completed(); }
	//TweenMax.to(targetObjectId, 0.6, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_814_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_814_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_814_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_814_completed() {
	setTimeout(function() {
		window.obj811_onLoad_runningActionsCount = window.obj811_onLoad_runningActionsCount - 1;
if (window.obj811_onLoad_runningActionsCount < 0) {
	window.obj811_onLoad_runningActionsCount = 0;
} else if (window.obj811_onLoad_runningActionsCount == 0) {
	obj811_onLoad_actionGroup1();
}
	}, 1);
}














};
obj811_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj811_onLoad_activeActionGroupIndex = -1;
		$("#obj811").trigger("obj811_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 811) {
				console.warn("de-queueing event obj811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj811_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj811 
rotate_815();
function rotate_815() {
	window.obj811_onLoad_runningActionsCount = obj811_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj811";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj811';
	var transformOriginX = '8.715596%';
	var transformOriginY = '30%';
	var rotationToDegrees = '13.21275';
	var rotationSpeed = 0.6;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_815_completed(); }
	//TweenMax.to(targetObjectId, 0.6, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_815_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_815_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_815_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_815_completed() {
	setTimeout(function() {
		window.obj811_onLoad_runningActionsCount = window.obj811_onLoad_runningActionsCount - 1;
if (window.obj811_onLoad_runningActionsCount < 0) {
	window.obj811_onLoad_runningActionsCount = 0;
} else if (window.obj811_onLoad_runningActionsCount == 0) {
	obj811_onLoad_actionGroup2();
}
	}, 1);
}














};
obj811_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj811_onLoad_activeActionGroupIndex = -1;
		$("#obj811").trigger("obj811_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 811) {
				console.warn("de-queueing event obj811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj811_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj811_onLoad();
function loop_obj811_onLoad() {
	var loopCount = 0;
	window.obj811_onLoad_loopCount = window.obj811_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj811_onLoad_loopCount > loopCount) {
		window.obj811_onLoad_loopCount = 0
		obj811_onLoad_actionGroup3();
	} else {
		obj811_onLoad_actionGroup0();
	}
}













};
obj811_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj811_onLoad_activeActionGroupIndex = -1;
		$("#obj811").trigger("obj811_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 811) {
				console.warn("de-queueing event obj811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj811_onLoad_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























/*
 *
 *   obj802: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj802_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj802_onLoad is still running");
	return;
}
var obj802_onLoad_runningActionsCount = 0;
var obj802_onLoad_loopCount = 0;
obj802_onLoad_actionGroup0();
});










/*
 *
 *   obj811: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj811_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj811_onLoad is still running");
	return;
}
var obj811_onLoad_runningActionsCount = 0;
var obj811_onLoad_loopCount = 0;
obj811_onLoad_actionGroup0();
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
	
$("#obj356").trigger('SCEventShow');
$("#obj365").trigger('SCEventShow');
$("#obj802").trigger('SCEventShow');
$("#obj811").trigger('SCEventShow');
$("#obj2855").trigger('SCEventShow');
$("#obj2927").trigger('SCEventShow');
	
});