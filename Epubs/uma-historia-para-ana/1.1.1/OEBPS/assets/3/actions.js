pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 88;
pubcoder.page.title = pubcoder.page.title || "3";
pubcoder.page.number = pubcoder.page.number || 3;
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
var obj448_onLoad_activeActionGroupIndex = -1;
var obj448_onLoad_runningActionsCount = 0;
var obj448_onLoad_loopCount = 0;
var obj485_SCEventRun_activeActionGroupIndex = -1;
var obj485_SCEventRun_runningActionsCount = 0;
var obj485_SCEventRun_loopCount = 0;
var obj492_SCEventRun_activeActionGroupIndex = -1;
var obj492_SCEventRun_runningActionsCount = 0;
var obj492_SCEventRun_loopCount = 0;
var obj499_SCEventRun_activeActionGroupIndex = -1;
var obj499_SCEventRun_runningActionsCount = 0;
var obj499_SCEventRun_loopCount = 0;
var obj506_SCEventRun_activeActionGroupIndex = -1;
var obj506_SCEventRun_runningActionsCount = 0;
var obj506_SCEventRun_loopCount = 0;
var obj521_onLoad_activeActionGroupIndex = -1;
var obj521_onLoad_runningActionsCount = 0;
var obj521_onLoad_loopCount = 0;
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
		
obj448_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj448_onLoad_activeActionGroupIndex = -1;
		$("#obj448").trigger("obj448_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 448) {
				console.warn("de-queueing event obj448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj448_onLoad_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj485 
runActionList_513();
function runActionList_513() {
	window.obj448_onLoad_runningActionsCount = obj448_onLoad_runningActionsCount + 1;
	$("#obj485").trigger('SCEventRun');
	setTimeout(function() {
		window.obj448_onLoad_runningActionsCount = window.obj448_onLoad_runningActionsCount - 1;
if (window.obj448_onLoad_runningActionsCount < 0) {
	window.obj448_onLoad_runningActionsCount = 0;
} else if (window.obj448_onLoad_runningActionsCount == 0) {
	obj448_onLoad_actionGroup1();
}		
	}, 1);
}



};
obj448_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj448_onLoad_activeActionGroupIndex = -1;
		$("#obj448").trigger("obj448_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 448) {
				console.warn("de-queueing event obj448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj448_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_517();
function wait_517() {
	window.obj448_onLoad_runningActionsCount = obj448_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj448_onLoad_runningActionsCount = window.obj448_onLoad_runningActionsCount - 1;
if (window.obj448_onLoad_runningActionsCount < 0) {
	window.obj448_onLoad_runningActionsCount = 0;
} else if (window.obj448_onLoad_runningActionsCount == 0) {
	obj448_onLoad_actionGroup2();
}
	}, 100);
}













};
obj448_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj448_onLoad_activeActionGroupIndex = -1;
		$("#obj448").trigger("obj448_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 448) {
				console.warn("de-queueing event obj448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj448_onLoad_activeActionGroupIndex = 2;
	


















//	action: run action list container
//	target: obj492 
runActionList_514();
function runActionList_514() {
	window.obj448_onLoad_runningActionsCount = obj448_onLoad_runningActionsCount + 1;
	$("#obj492").trigger('SCEventRun');
	setTimeout(function() {
		window.obj448_onLoad_runningActionsCount = window.obj448_onLoad_runningActionsCount - 1;
if (window.obj448_onLoad_runningActionsCount < 0) {
	window.obj448_onLoad_runningActionsCount = 0;
} else if (window.obj448_onLoad_runningActionsCount == 0) {
	obj448_onLoad_actionGroup3();
}		
	}, 1);
}



};
obj448_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj448_onLoad_activeActionGroupIndex = -1;
		$("#obj448").trigger("obj448_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 448) {
				console.warn("de-queueing event obj448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj448_onLoad_activeActionGroupIndex = 3;
	








//	action: wait
wait_518();
function wait_518() {
	window.obj448_onLoad_runningActionsCount = obj448_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj448_onLoad_runningActionsCount = window.obj448_onLoad_runningActionsCount - 1;
if (window.obj448_onLoad_runningActionsCount < 0) {
	window.obj448_onLoad_runningActionsCount = 0;
} else if (window.obj448_onLoad_runningActionsCount == 0) {
	obj448_onLoad_actionGroup4();
}
	}, 100);
}













};
obj448_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj448_onLoad_activeActionGroupIndex = -1;
		$("#obj448").trigger("obj448_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 448) {
				console.warn("de-queueing event obj448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj448_onLoad_activeActionGroupIndex = 4;
	


















//	action: run action list container
//	target: obj499 
runActionList_515();
function runActionList_515() {
	window.obj448_onLoad_runningActionsCount = obj448_onLoad_runningActionsCount + 1;
	$("#obj499").trigger('SCEventRun');
	setTimeout(function() {
		window.obj448_onLoad_runningActionsCount = window.obj448_onLoad_runningActionsCount - 1;
if (window.obj448_onLoad_runningActionsCount < 0) {
	window.obj448_onLoad_runningActionsCount = 0;
} else if (window.obj448_onLoad_runningActionsCount == 0) {
	obj448_onLoad_actionGroup5();
}		
	}, 1);
}



};
obj448_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj448_onLoad_activeActionGroupIndex = -1;
		$("#obj448").trigger("obj448_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 448) {
				console.warn("de-queueing event obj448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj448_onLoad_activeActionGroupIndex = 5;
	








//	action: wait
wait_519();
function wait_519() {
	window.obj448_onLoad_runningActionsCount = obj448_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj448_onLoad_runningActionsCount = window.obj448_onLoad_runningActionsCount - 1;
if (window.obj448_onLoad_runningActionsCount < 0) {
	window.obj448_onLoad_runningActionsCount = 0;
} else if (window.obj448_onLoad_runningActionsCount == 0) {
	obj448_onLoad_actionGroup6();
}
	}, 100);
}













};
obj448_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj448_onLoad_activeActionGroupIndex = -1;
		$("#obj448").trigger("obj448_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 448) {
				console.warn("de-queueing event obj448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj448_onLoad_activeActionGroupIndex = 6;
	


















//	action: run action list container
//	target: obj506 
runActionList_516();
function runActionList_516() {
	window.obj448_onLoad_runningActionsCount = obj448_onLoad_runningActionsCount + 1;
	$("#obj506").trigger('SCEventRun');
	setTimeout(function() {
		window.obj448_onLoad_runningActionsCount = window.obj448_onLoad_runningActionsCount - 1;
if (window.obj448_onLoad_runningActionsCount < 0) {
	window.obj448_onLoad_runningActionsCount = 0;
} else if (window.obj448_onLoad_runningActionsCount == 0) {
	obj448_onLoad_actionGroup7();
}		
	}, 1);
}



};
obj448_onLoad_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj448_onLoad_activeActionGroupIndex = -1;
		$("#obj448").trigger("obj448_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 448) {
				console.warn("de-queueing event obj448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj448_onLoad_activeActionGroupIndex = 7;
	





















};
obj485_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj485_SCEventRun_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_SCEventRun_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj448 
rotate_487();
function rotate_487() {
	window.obj485_SCEventRun_runningActionsCount = obj485_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj448";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj448';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '-16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_487_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_487_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_487_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_487_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_487_completed() {
	setTimeout(function() {
		window.obj485_SCEventRun_runningActionsCount = window.obj485_SCEventRun_runningActionsCount - 1;
if (window.obj485_SCEventRun_runningActionsCount < 0) {
	window.obj485_SCEventRun_runningActionsCount = 0;
} else if (window.obj485_SCEventRun_runningActionsCount == 0) {
	obj485_SCEventRun_actionGroup1();
}
	}, 1);
}














};
obj485_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj485_SCEventRun_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_SCEventRun_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj448 
rotate_488();
function rotate_488() {
	window.obj485_SCEventRun_runningActionsCount = obj485_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj448";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj448';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'linear';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_488_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_488_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_488_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_488_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_488_completed() {
	setTimeout(function() {
		window.obj485_SCEventRun_runningActionsCount = window.obj485_SCEventRun_runningActionsCount - 1;
if (window.obj485_SCEventRun_runningActionsCount < 0) {
	window.obj485_SCEventRun_runningActionsCount = 0;
} else if (window.obj485_SCEventRun_runningActionsCount == 0) {
	obj485_SCEventRun_actionGroup2();
}
	}, 1);
}














};
obj485_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj485_SCEventRun_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_SCEventRun_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj448 
rotate_489();
function rotate_489() {
	window.obj485_SCEventRun_runningActionsCount = obj485_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj448";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj448';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_489_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_489_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_489_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_489_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_489_completed() {
	setTimeout(function() {
		window.obj485_SCEventRun_runningActionsCount = window.obj485_SCEventRun_runningActionsCount - 1;
if (window.obj485_SCEventRun_runningActionsCount < 0) {
	window.obj485_SCEventRun_runningActionsCount = 0;
} else if (window.obj485_SCEventRun_runningActionsCount == 0) {
	obj485_SCEventRun_actionGroup3();
}
	}, 1);
}














};
obj485_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj485_SCEventRun_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_SCEventRun_activeActionGroupIndex = 3;
	







//	action: rotate 
//	target: obj448 
rotate_490();
function rotate_490() {
	window.obj485_SCEventRun_runningActionsCount = obj485_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj448";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj448';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '-16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-in';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_490_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_490_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_490_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_490_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_490_completed() {
	setTimeout(function() {
		window.obj485_SCEventRun_runningActionsCount = window.obj485_SCEventRun_runningActionsCount - 1;
if (window.obj485_SCEventRun_runningActionsCount < 0) {
	window.obj485_SCEventRun_runningActionsCount = 0;
} else if (window.obj485_SCEventRun_runningActionsCount == 0) {
	obj485_SCEventRun_actionGroup4();
}
	}, 1);
}














};
obj485_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj485_SCEventRun_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_SCEventRun_activeActionGroupIndex = 4;
	








//	action: loop
loop_obj485_SCEventRun();
function loop_obj485_SCEventRun() {
	var loopCount = 0;
	window.obj485_SCEventRun_loopCount = window.obj485_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj485_SCEventRun_loopCount > loopCount) {
		window.obj485_SCEventRun_loopCount = 0
		obj485_SCEventRun_actionGroup5();
	} else {
		obj485_SCEventRun_actionGroup0();
	}
}













};
obj485_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj485_SCEventRun_activeActionGroupIndex = -1;
		$("#obj485").trigger("obj485_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 485) {
				console.warn("de-queueing event obj485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj485_SCEventRun_activeActionGroupIndex = 5;
	





















};
obj492_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj492_SCEventRun_activeActionGroupIndex = -1;
		$("#obj492").trigger("obj492_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 492) {
				console.warn("de-queueing event obj492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj492_SCEventRun_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj449 
rotate_494();
function rotate_494() {
	window.obj492_SCEventRun_runningActionsCount = obj492_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj449";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj449';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '-16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_494_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_494_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_494_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_494_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_494_completed() {
	setTimeout(function() {
		window.obj492_SCEventRun_runningActionsCount = window.obj492_SCEventRun_runningActionsCount - 1;
if (window.obj492_SCEventRun_runningActionsCount < 0) {
	window.obj492_SCEventRun_runningActionsCount = 0;
} else if (window.obj492_SCEventRun_runningActionsCount == 0) {
	obj492_SCEventRun_actionGroup1();
}
	}, 1);
}














};
obj492_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj492_SCEventRun_activeActionGroupIndex = -1;
		$("#obj492").trigger("obj492_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 492) {
				console.warn("de-queueing event obj492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj492_SCEventRun_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj449 
rotate_495();
function rotate_495() {
	window.obj492_SCEventRun_runningActionsCount = obj492_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj449";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj449';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'linear';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_495_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_495_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_495_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_495_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_495_completed() {
	setTimeout(function() {
		window.obj492_SCEventRun_runningActionsCount = window.obj492_SCEventRun_runningActionsCount - 1;
if (window.obj492_SCEventRun_runningActionsCount < 0) {
	window.obj492_SCEventRun_runningActionsCount = 0;
} else if (window.obj492_SCEventRun_runningActionsCount == 0) {
	obj492_SCEventRun_actionGroup2();
}
	}, 1);
}














};
obj492_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj492_SCEventRun_activeActionGroupIndex = -1;
		$("#obj492").trigger("obj492_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 492) {
				console.warn("de-queueing event obj492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj492_SCEventRun_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj449 
rotate_496();
function rotate_496() {
	window.obj492_SCEventRun_runningActionsCount = obj492_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj449";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj449';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_496_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_496_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_496_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_496_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_496_completed() {
	setTimeout(function() {
		window.obj492_SCEventRun_runningActionsCount = window.obj492_SCEventRun_runningActionsCount - 1;
if (window.obj492_SCEventRun_runningActionsCount < 0) {
	window.obj492_SCEventRun_runningActionsCount = 0;
} else if (window.obj492_SCEventRun_runningActionsCount == 0) {
	obj492_SCEventRun_actionGroup3();
}
	}, 1);
}














};
obj492_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj492_SCEventRun_activeActionGroupIndex = -1;
		$("#obj492").trigger("obj492_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 492) {
				console.warn("de-queueing event obj492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj492_SCEventRun_activeActionGroupIndex = 3;
	







//	action: rotate 
//	target: obj449 
rotate_497();
function rotate_497() {
	window.obj492_SCEventRun_runningActionsCount = obj492_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj449";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj449';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '-16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-in';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_497_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_497_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_497_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_497_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_497_completed() {
	setTimeout(function() {
		window.obj492_SCEventRun_runningActionsCount = window.obj492_SCEventRun_runningActionsCount - 1;
if (window.obj492_SCEventRun_runningActionsCount < 0) {
	window.obj492_SCEventRun_runningActionsCount = 0;
} else if (window.obj492_SCEventRun_runningActionsCount == 0) {
	obj492_SCEventRun_actionGroup4();
}
	}, 1);
}














};
obj492_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj492_SCEventRun_activeActionGroupIndex = -1;
		$("#obj492").trigger("obj492_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 492) {
				console.warn("de-queueing event obj492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj492_SCEventRun_activeActionGroupIndex = 4;
	








//	action: loop
loop_obj492_SCEventRun();
function loop_obj492_SCEventRun() {
	var loopCount = 0;
	window.obj492_SCEventRun_loopCount = window.obj492_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj492_SCEventRun_loopCount > loopCount) {
		window.obj492_SCEventRun_loopCount = 0
		obj492_SCEventRun_actionGroup5();
	} else {
		obj492_SCEventRun_actionGroup0();
	}
}













};
obj492_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj492_SCEventRun_activeActionGroupIndex = -1;
		$("#obj492").trigger("obj492_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 492) {
				console.warn("de-queueing event obj492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj492_SCEventRun_activeActionGroupIndex = 5;
	





















};
obj499_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj499_SCEventRun_activeActionGroupIndex = -1;
		$("#obj499").trigger("obj499_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 499) {
				console.warn("de-queueing event obj499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj499_SCEventRun_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj450 
rotate_501();
function rotate_501() {
	window.obj499_SCEventRun_runningActionsCount = obj499_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj450";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj450';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '-16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_501_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_501_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_501_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_501_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_501_completed() {
	setTimeout(function() {
		window.obj499_SCEventRun_runningActionsCount = window.obj499_SCEventRun_runningActionsCount - 1;
if (window.obj499_SCEventRun_runningActionsCount < 0) {
	window.obj499_SCEventRun_runningActionsCount = 0;
} else if (window.obj499_SCEventRun_runningActionsCount == 0) {
	obj499_SCEventRun_actionGroup1();
}
	}, 1);
}














};
obj499_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj499_SCEventRun_activeActionGroupIndex = -1;
		$("#obj499").trigger("obj499_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 499) {
				console.warn("de-queueing event obj499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj499_SCEventRun_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj450 
rotate_502();
function rotate_502() {
	window.obj499_SCEventRun_runningActionsCount = obj499_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj450";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj450';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'linear';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_502_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_502_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_502_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_502_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_502_completed() {
	setTimeout(function() {
		window.obj499_SCEventRun_runningActionsCount = window.obj499_SCEventRun_runningActionsCount - 1;
if (window.obj499_SCEventRun_runningActionsCount < 0) {
	window.obj499_SCEventRun_runningActionsCount = 0;
} else if (window.obj499_SCEventRun_runningActionsCount == 0) {
	obj499_SCEventRun_actionGroup2();
}
	}, 1);
}














};
obj499_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj499_SCEventRun_activeActionGroupIndex = -1;
		$("#obj499").trigger("obj499_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 499) {
				console.warn("de-queueing event obj499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj499_SCEventRun_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj450 
rotate_503();
function rotate_503() {
	window.obj499_SCEventRun_runningActionsCount = obj499_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj450";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj450';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_503_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_503_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_503_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_503_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_503_completed() {
	setTimeout(function() {
		window.obj499_SCEventRun_runningActionsCount = window.obj499_SCEventRun_runningActionsCount - 1;
if (window.obj499_SCEventRun_runningActionsCount < 0) {
	window.obj499_SCEventRun_runningActionsCount = 0;
} else if (window.obj499_SCEventRun_runningActionsCount == 0) {
	obj499_SCEventRun_actionGroup3();
}
	}, 1);
}














};
obj499_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj499_SCEventRun_activeActionGroupIndex = -1;
		$("#obj499").trigger("obj499_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 499) {
				console.warn("de-queueing event obj499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj499_SCEventRun_activeActionGroupIndex = 3;
	







//	action: rotate 
//	target: obj450 
rotate_504();
function rotate_504() {
	window.obj499_SCEventRun_runningActionsCount = obj499_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj450";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj450';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '-16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-in';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_504_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_504_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_504_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_504_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_504_completed() {
	setTimeout(function() {
		window.obj499_SCEventRun_runningActionsCount = window.obj499_SCEventRun_runningActionsCount - 1;
if (window.obj499_SCEventRun_runningActionsCount < 0) {
	window.obj499_SCEventRun_runningActionsCount = 0;
} else if (window.obj499_SCEventRun_runningActionsCount == 0) {
	obj499_SCEventRun_actionGroup4();
}
	}, 1);
}














};
obj499_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj499_SCEventRun_activeActionGroupIndex = -1;
		$("#obj499").trigger("obj499_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 499) {
				console.warn("de-queueing event obj499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj499_SCEventRun_activeActionGroupIndex = 4;
	








//	action: loop
loop_obj499_SCEventRun();
function loop_obj499_SCEventRun() {
	var loopCount = 0;
	window.obj499_SCEventRun_loopCount = window.obj499_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj499_SCEventRun_loopCount > loopCount) {
		window.obj499_SCEventRun_loopCount = 0
		obj499_SCEventRun_actionGroup5();
	} else {
		obj499_SCEventRun_actionGroup0();
	}
}













};
obj499_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj499_SCEventRun_activeActionGroupIndex = -1;
		$("#obj499").trigger("obj499_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 499) {
				console.warn("de-queueing event obj499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj499_SCEventRun_activeActionGroupIndex = 5;
	





















};
obj506_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj506_SCEventRun_activeActionGroupIndex = -1;
		$("#obj506").trigger("obj506_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 506) {
				console.warn("de-queueing event obj506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj506_SCEventRun_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj455 
rotate_508();
function rotate_508() {
	window.obj506_SCEventRun_runningActionsCount = obj506_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj455";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj455';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '-16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_508_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_508_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_508_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_508_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_508_completed() {
	setTimeout(function() {
		window.obj506_SCEventRun_runningActionsCount = window.obj506_SCEventRun_runningActionsCount - 1;
if (window.obj506_SCEventRun_runningActionsCount < 0) {
	window.obj506_SCEventRun_runningActionsCount = 0;
} else if (window.obj506_SCEventRun_runningActionsCount == 0) {
	obj506_SCEventRun_actionGroup1();
}
	}, 1);
}














};
obj506_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj506_SCEventRun_activeActionGroupIndex = -1;
		$("#obj506").trigger("obj506_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 506) {
				console.warn("de-queueing event obj506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj506_SCEventRun_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj455 
rotate_509();
function rotate_509() {
	window.obj506_SCEventRun_runningActionsCount = obj506_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj455";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj455';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'linear';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_509_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_509_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_509_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_509_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_509_completed() {
	setTimeout(function() {
		window.obj506_SCEventRun_runningActionsCount = window.obj506_SCEventRun_runningActionsCount - 1;
if (window.obj506_SCEventRun_runningActionsCount < 0) {
	window.obj506_SCEventRun_runningActionsCount = 0;
} else if (window.obj506_SCEventRun_runningActionsCount == 0) {
	obj506_SCEventRun_actionGroup2();
}
	}, 1);
}














};
obj506_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj506_SCEventRun_activeActionGroupIndex = -1;
		$("#obj506").trigger("obj506_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 506) {
				console.warn("de-queueing event obj506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj506_SCEventRun_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj455 
rotate_510();
function rotate_510() {
	window.obj506_SCEventRun_runningActionsCount = obj506_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj455";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj455';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_510_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_510_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_510_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_510_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_510_completed() {
	setTimeout(function() {
		window.obj506_SCEventRun_runningActionsCount = window.obj506_SCEventRun_runningActionsCount - 1;
if (window.obj506_SCEventRun_runningActionsCount < 0) {
	window.obj506_SCEventRun_runningActionsCount = 0;
} else if (window.obj506_SCEventRun_runningActionsCount == 0) {
	obj506_SCEventRun_actionGroup3();
}
	}, 1);
}














};
obj506_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj506_SCEventRun_activeActionGroupIndex = -1;
		$("#obj506").trigger("obj506_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 506) {
				console.warn("de-queueing event obj506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj506_SCEventRun_activeActionGroupIndex = 3;
	







//	action: rotate 
//	target: obj455 
rotate_511();
function rotate_511() {
	window.obj506_SCEventRun_runningActionsCount = obj506_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj455";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj455';
	var transformOriginX = '51.75439%';
	var transformOriginY = '82.6087%';
	var rotationToDegrees = '-16.12758';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease-in';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_511_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_511_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_511_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_511_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_511_completed() {
	setTimeout(function() {
		window.obj506_SCEventRun_runningActionsCount = window.obj506_SCEventRun_runningActionsCount - 1;
if (window.obj506_SCEventRun_runningActionsCount < 0) {
	window.obj506_SCEventRun_runningActionsCount = 0;
} else if (window.obj506_SCEventRun_runningActionsCount == 0) {
	obj506_SCEventRun_actionGroup4();
}
	}, 1);
}














};
obj506_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj506_SCEventRun_activeActionGroupIndex = -1;
		$("#obj506").trigger("obj506_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 506) {
				console.warn("de-queueing event obj506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj506_SCEventRun_activeActionGroupIndex = 4;
	








//	action: loop
loop_obj506_SCEventRun();
function loop_obj506_SCEventRun() {
	var loopCount = 0;
	window.obj506_SCEventRun_loopCount = window.obj506_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj506_SCEventRun_loopCount > loopCount) {
		window.obj506_SCEventRun_loopCount = 0
		obj506_SCEventRun_actionGroup5();
	} else {
		obj506_SCEventRun_actionGroup0();
	}
}













};
obj506_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj506_SCEventRun_activeActionGroupIndex = -1;
		$("#obj506").trigger("obj506_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 506) {
				console.warn("de-queueing event obj506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj506_SCEventRun_activeActionGroupIndex = 5;
	





















};
obj521_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj521_onLoad_activeActionGroupIndex = -1;
		$("#obj521").trigger("obj521_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 521) {
				console.warn("de-queueing event obj521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj521_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_524();
function wait_524() {
	window.obj521_onLoad_runningActionsCount = obj521_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj521_onLoad_runningActionsCount = window.obj521_onLoad_runningActionsCount - 1;
if (window.obj521_onLoad_runningActionsCount < 0) {
	window.obj521_onLoad_runningActionsCount = 0;
} else if (window.obj521_onLoad_runningActionsCount == 0) {
	obj521_onLoad_actionGroup1();
}
	}, 1000);
}













};
obj521_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj521_onLoad_activeActionGroupIndex = -1;
		$("#obj521").trigger("obj521_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 521) {
				console.warn("de-queueing event obj521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj521_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj521
(function(){
	window.obj521_onLoad_runningActionsCount = obj521_onLoad_runningActionsCount + 1;

	var selector = "#obj521";
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
	
		var animationType = "fadeInLeft";
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj521_onLoad_runningActionsCount = window.obj521_onLoad_runningActionsCount - 1;
if (window.obj521_onLoad_runningActionsCount < 0) {
	window.obj521_onLoad_runningActionsCount = 0;
} else if (window.obj521_onLoad_runningActionsCount == 0) {
	obj521_onLoad_actionGroup2();
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
				window.obj521_onLoad_runningActionsCount = window.obj521_onLoad_runningActionsCount - 1;
if (window.obj521_onLoad_runningActionsCount < 0) {
	window.obj521_onLoad_runningActionsCount = 0;
} else if (window.obj521_onLoad_runningActionsCount == 0) {
	obj521_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj521_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj521_onLoad_activeActionGroupIndex = -1;
		$("#obj521").trigger("obj521_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 521) {
				console.warn("de-queueing event obj521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj521_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























/*
 *
 *   obj448: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj448_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj448_onLoad is still running");
	return;
}
var obj448_onLoad_runningActionsCount = 0;
var obj448_onLoad_loopCount = 0;
obj448_onLoad_actionGroup0();
});










































/*
 *
 *   obj485: Event SCEventRun
 *
 */
$("#obj485").bind("SCEventRun", function(event) {
	if (window.obj485_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj485_SCEventRun is still running");
	return;
}
var obj485_SCEventRun_runningActionsCount = 0;
var obj485_SCEventRun_loopCount = 0;
obj485_SCEventRun_actionGroup0();
});










/*
 *
 *   obj492: Event SCEventRun
 *
 */
$("#obj492").bind("SCEventRun", function(event) {
	if (window.obj492_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj492_SCEventRun is still running");
	return;
}
var obj492_SCEventRun_runningActionsCount = 0;
var obj492_SCEventRun_loopCount = 0;
obj492_SCEventRun_actionGroup0();
});










/*
 *
 *   obj499: Event SCEventRun
 *
 */
$("#obj499").bind("SCEventRun", function(event) {
	if (window.obj499_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj499_SCEventRun is still running");
	return;
}
var obj499_SCEventRun_runningActionsCount = 0;
var obj499_SCEventRun_loopCount = 0;
obj499_SCEventRun_actionGroup0();
});










/*
 *
 *   obj506: Event SCEventRun
 *
 */
$("#obj506").bind("SCEventRun", function(event) {
	if (window.obj506_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj506_SCEventRun is still running");
	return;
}
var obj506_SCEventRun_runningActionsCount = 0;
var obj506_SCEventRun_loopCount = 0;
obj506_SCEventRun_actionGroup0();
});







/*
 *
 *   obj521: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj521_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj521_onLoad is still running");
	return;
}
var obj521_onLoad_runningActionsCount = 0;
var obj521_onLoad_loopCount = 0;
obj521_onLoad_actionGroup0();
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
	
$("#obj89").trigger('SCEventShow');
$("#obj300").trigger('SCEventShow');
$("#obj448").trigger('SCEventShow');
$("#obj449").trigger('SCEventShow');
$("#obj450").trigger('SCEventShow');
$("#obj455").trigger('SCEventShow');
	
});