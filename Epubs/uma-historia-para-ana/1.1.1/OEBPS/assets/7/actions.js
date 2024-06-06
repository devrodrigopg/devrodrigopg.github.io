pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 109;
pubcoder.page.title = pubcoder.page.title || "7";
pubcoder.page.number = pubcoder.page.number || 7;
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
var obj679_onLoad_activeActionGroupIndex = -1;
var obj679_onLoad_runningActionsCount = 0;
var obj679_onLoad_loopCount = 0;
var obj680_onLoad_activeActionGroupIndex = -1;
var obj680_onLoad_runningActionsCount = 0;
var obj680_onLoad_loopCount = 0;
var obj681_onLoad_activeActionGroupIndex = -1;
var obj681_onLoad_runningActionsCount = 0;
var obj681_onLoad_loopCount = 0;
var obj682_onLoad_activeActionGroupIndex = -1;
var obj682_onLoad_runningActionsCount = 0;
var obj682_onLoad_loopCount = 0;
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
		
obj679_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj679_onLoad_activeActionGroupIndex = -1;
		$("#obj679").trigger("obj679_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 679) {
				console.warn("de-queueing event obj679." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj679").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj679_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj679 
rotate_697();
function rotate_697() {
	window.obj679_onLoad_runningActionsCount = obj679_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj679";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj679';
	var transformOriginX = '75.60976%';
	var transformOriginY = '69.23077%';
	var rotationToDegrees = '16.54169';
	var rotationSpeed = 0.7;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_697_completed(); }
	//TweenMax.to(targetObjectId, 0.7, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_697_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_697_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_697_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_697_completed() {
	setTimeout(function() {
		window.obj679_onLoad_runningActionsCount = window.obj679_onLoad_runningActionsCount - 1;
if (window.obj679_onLoad_runningActionsCount < 0) {
	window.obj679_onLoad_runningActionsCount = 0;
} else if (window.obj679_onLoad_runningActionsCount == 0) {
	obj679_onLoad_actionGroup1();
}
	}, 1);
}














};
obj679_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj679_onLoad_activeActionGroupIndex = -1;
		$("#obj679").trigger("obj679_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 679) {
				console.warn("de-queueing event obj679." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj679").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj679_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj679 
rotate_696();
function rotate_696() {
	window.obj679_onLoad_runningActionsCount = obj679_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj679";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj679';
	var transformOriginX = '75.60976%';
	var transformOriginY = '69.23077%';
	var rotationToDegrees = '-16.54169';
	var rotationSpeed = 0.7;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_696_completed(); }
	//TweenMax.to(targetObjectId, 0.7, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_696_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_696_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_696_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_696_completed() {
	setTimeout(function() {
		window.obj679_onLoad_runningActionsCount = window.obj679_onLoad_runningActionsCount - 1;
if (window.obj679_onLoad_runningActionsCount < 0) {
	window.obj679_onLoad_runningActionsCount = 0;
} else if (window.obj679_onLoad_runningActionsCount == 0) {
	obj679_onLoad_actionGroup2();
}
	}, 1);
}














};
obj679_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj679_onLoad_activeActionGroupIndex = -1;
		$("#obj679").trigger("obj679_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 679) {
				console.warn("de-queueing event obj679." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj679").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj679_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj679_onLoad();
function loop_obj679_onLoad() {
	var loopCount = 0;
	window.obj679_onLoad_loopCount = window.obj679_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj679_onLoad_loopCount > loopCount) {
		window.obj679_onLoad_loopCount = 0
		obj679_onLoad_actionGroup3();
	} else {
		obj679_onLoad_actionGroup0();
	}
}













};
obj679_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj679_onLoad_activeActionGroupIndex = -1;
		$("#obj679").trigger("obj679_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 679) {
				console.warn("de-queueing event obj679." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj679").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj679_onLoad_activeActionGroupIndex = 3;
	





















};
obj680_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj680_onLoad_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 680) {
				console.warn("de-queueing event obj680." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj680").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj680_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj680 
rotate_702();
function rotate_702() {
	window.obj680_onLoad_runningActionsCount = obj680_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj680";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj680';
	var transformOriginX = '18%';
	var transformOriginY = '22%';
	var rotationToDegrees = '16.54169';
	var rotationSpeed = 0.7;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_702_completed(); }
	//TweenMax.to(targetObjectId, 0.7, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_702_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_702_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_702_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_702_completed() {
	setTimeout(function() {
		window.obj680_onLoad_runningActionsCount = window.obj680_onLoad_runningActionsCount - 1;
if (window.obj680_onLoad_runningActionsCount < 0) {
	window.obj680_onLoad_runningActionsCount = 0;
} else if (window.obj680_onLoad_runningActionsCount == 0) {
	obj680_onLoad_actionGroup1();
}
	}, 1);
}














};
obj680_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj680_onLoad_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 680) {
				console.warn("de-queueing event obj680." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj680").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj680_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj680 
rotate_703();
function rotate_703() {
	window.obj680_onLoad_runningActionsCount = obj680_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj680";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj680';
	var transformOriginX = '18%';
	var transformOriginY = '22%';
	var rotationToDegrees = '-16.54169';
	var rotationSpeed = 0.7;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_703_completed(); }
	//TweenMax.to(targetObjectId, 0.7, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_703_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_703_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_703_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_703_completed() {
	setTimeout(function() {
		window.obj680_onLoad_runningActionsCount = window.obj680_onLoad_runningActionsCount - 1;
if (window.obj680_onLoad_runningActionsCount < 0) {
	window.obj680_onLoad_runningActionsCount = 0;
} else if (window.obj680_onLoad_runningActionsCount == 0) {
	obj680_onLoad_actionGroup2();
}
	}, 1);
}














};
obj680_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj680_onLoad_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 680) {
				console.warn("de-queueing event obj680." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj680").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj680_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj680_onLoad();
function loop_obj680_onLoad() {
	var loopCount = 0;
	window.obj680_onLoad_loopCount = window.obj680_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj680_onLoad_loopCount > loopCount) {
		window.obj680_onLoad_loopCount = 0
		obj680_onLoad_actionGroup3();
	} else {
		obj680_onLoad_actionGroup0();
	}
}













};
obj680_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj680_onLoad_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 680) {
				console.warn("de-queueing event obj680." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj680").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj680_onLoad_activeActionGroupIndex = 3;
	





















};
obj681_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj681_onLoad_activeActionGroupIndex = -1;
		$("#obj681").trigger("obj681_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 681) {
				console.warn("de-queueing event obj681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj681_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj681 
rotate_686();
function rotate_686() {
	window.obj681_onLoad_runningActionsCount = obj681_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj681";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj681';
	var transformOriginX = '97.16981%';
	var transformOriginY = '28.26087%';
	var rotationToDegrees = '6.775656';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_686_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_686_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_686_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_686_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_686_completed() {
	setTimeout(function() {
		window.obj681_onLoad_runningActionsCount = window.obj681_onLoad_runningActionsCount - 1;
if (window.obj681_onLoad_runningActionsCount < 0) {
	window.obj681_onLoad_runningActionsCount = 0;
} else if (window.obj681_onLoad_runningActionsCount == 0) {
	obj681_onLoad_actionGroup1();
}
	}, 1);
}














};
obj681_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj681_onLoad_activeActionGroupIndex = -1;
		$("#obj681").trigger("obj681_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 681) {
				console.warn("de-queueing event obj681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj681_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj681 
rotate_687();
function rotate_687() {
	window.obj681_onLoad_runningActionsCount = obj681_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj681";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj681';
	var transformOriginX = '97.16981%';
	var transformOriginY = '28.26087%';
	var rotationToDegrees = '-6.775656';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_687_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_687_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_687_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_687_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_687_completed() {
	setTimeout(function() {
		window.obj681_onLoad_runningActionsCount = window.obj681_onLoad_runningActionsCount - 1;
if (window.obj681_onLoad_runningActionsCount < 0) {
	window.obj681_onLoad_runningActionsCount = 0;
} else if (window.obj681_onLoad_runningActionsCount == 0) {
	obj681_onLoad_actionGroup2();
}
	}, 1);
}














};
obj681_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj681_onLoad_activeActionGroupIndex = -1;
		$("#obj681").trigger("obj681_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 681) {
				console.warn("de-queueing event obj681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj681_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj681_onLoad();
function loop_obj681_onLoad() {
	var loopCount = 2;
	window.obj681_onLoad_loopCount = window.obj681_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj681_onLoad_loopCount > loopCount) {
		window.obj681_onLoad_loopCount = 0
		obj681_onLoad_actionGroup3();
	} else {
		obj681_onLoad_actionGroup0();
	}
}













};
obj681_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj681_onLoad_activeActionGroupIndex = -1;
		$("#obj681").trigger("obj681_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 681) {
				console.warn("de-queueing event obj681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj681_onLoad_activeActionGroupIndex = 3;
	








//	action: wait
wait_2126();
function wait_2126() {
	window.obj681_onLoad_runningActionsCount = obj681_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj681_onLoad_runningActionsCount = window.obj681_onLoad_runningActionsCount - 1;
if (window.obj681_onLoad_runningActionsCount < 0) {
	window.obj681_onLoad_runningActionsCount = 0;
} else if (window.obj681_onLoad_runningActionsCount == 0) {
	obj681_onLoad_actionGroup4();
}
	}, 1000);
}













};
obj681_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj681_onLoad_activeActionGroupIndex = -1;
		$("#obj681").trigger("obj681_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 681) {
				console.warn("de-queueing event obj681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj681_onLoad_activeActionGroupIndex = 4;
	








//	action: loop
loop_obj681_onLoad();
function loop_obj681_onLoad() {
	var loopCount = 0;
	window.obj681_onLoad_loopCount = window.obj681_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj681_onLoad_loopCount > loopCount) {
		window.obj681_onLoad_loopCount = 0
		obj681_onLoad_actionGroup5();
	} else {
		obj681_onLoad_actionGroup0();
	}
}













};
obj681_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj681_onLoad_activeActionGroupIndex = -1;
		$("#obj681").trigger("obj681_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 681) {
				console.warn("de-queueing event obj681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj681_onLoad_activeActionGroupIndex = 5;
	





















};
obj682_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj682_onLoad_activeActionGroupIndex = -1;
		$("#obj682").trigger("obj682_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 682) {
				console.warn("de-queueing event obj682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj682_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj682 
rotate_691();
function rotate_691() {
	window.obj682_onLoad_runningActionsCount = obj682_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj682";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj682';
	var transformOriginX = '97.16981%';
	var transformOriginY = '28.26087%';
	var rotationToDegrees = '-6.775656';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_691_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_691_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_691_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_691_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_691_completed() {
	setTimeout(function() {
		window.obj682_onLoad_runningActionsCount = window.obj682_onLoad_runningActionsCount - 1;
if (window.obj682_onLoad_runningActionsCount < 0) {
	window.obj682_onLoad_runningActionsCount = 0;
} else if (window.obj682_onLoad_runningActionsCount == 0) {
	obj682_onLoad_actionGroup1();
}
	}, 1);
}














};
obj682_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj682_onLoad_activeActionGroupIndex = -1;
		$("#obj682").trigger("obj682_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 682) {
				console.warn("de-queueing event obj682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj682_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj682 
rotate_690();
function rotate_690() {
	window.obj682_onLoad_runningActionsCount = obj682_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj682";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj682';
	var transformOriginX = '97.16981%';
	var transformOriginY = '28.26087%';
	var rotationToDegrees = '6.775656';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_690_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_690_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_690_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_690_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_690_completed() {
	setTimeout(function() {
		window.obj682_onLoad_runningActionsCount = window.obj682_onLoad_runningActionsCount - 1;
if (window.obj682_onLoad_runningActionsCount < 0) {
	window.obj682_onLoad_runningActionsCount = 0;
} else if (window.obj682_onLoad_runningActionsCount == 0) {
	obj682_onLoad_actionGroup2();
}
	}, 1);
}














};
obj682_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj682_onLoad_activeActionGroupIndex = -1;
		$("#obj682").trigger("obj682_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 682) {
				console.warn("de-queueing event obj682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj682_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj682_onLoad();
function loop_obj682_onLoad() {
	var loopCount = 2;
	window.obj682_onLoad_loopCount = window.obj682_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj682_onLoad_loopCount > loopCount) {
		window.obj682_onLoad_loopCount = 0
		obj682_onLoad_actionGroup3();
	} else {
		obj682_onLoad_actionGroup0();
	}
}













};
obj682_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj682_onLoad_activeActionGroupIndex = -1;
		$("#obj682").trigger("obj682_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 682) {
				console.warn("de-queueing event obj682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj682_onLoad_activeActionGroupIndex = 3;
	








//	action: wait
wait_2124();
function wait_2124() {
	window.obj682_onLoad_runningActionsCount = obj682_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj682_onLoad_runningActionsCount = window.obj682_onLoad_runningActionsCount - 1;
if (window.obj682_onLoad_runningActionsCount < 0) {
	window.obj682_onLoad_runningActionsCount = 0;
} else if (window.obj682_onLoad_runningActionsCount == 0) {
	obj682_onLoad_actionGroup4();
}
	}, 1000);
}













};
obj682_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj682_onLoad_activeActionGroupIndex = -1;
		$("#obj682").trigger("obj682_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 682) {
				console.warn("de-queueing event obj682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj682_onLoad_activeActionGroupIndex = 4;
	








//	action: loop
loop_obj682_onLoad();
function loop_obj682_onLoad() {
	var loopCount = 0;
	window.obj682_onLoad_loopCount = window.obj682_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj682_onLoad_loopCount > loopCount) {
		window.obj682_onLoad_loopCount = 0
		obj682_onLoad_actionGroup5();
	} else {
		obj682_onLoad_actionGroup0();
	}
}













};
obj682_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj682_onLoad_activeActionGroupIndex = -1;
		$("#obj682").trigger("obj682_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 682) {
				console.warn("de-queueing event obj682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj682_onLoad_activeActionGroupIndex = 5;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



































/*
 *
 *   obj679: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj679_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj679_onLoad is still running");
	return;
}
var obj679_onLoad_runningActionsCount = 0;
var obj679_onLoad_loopCount = 0;
obj679_onLoad_actionGroup0();
});










/*
 *
 *   obj680: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj680_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj680_onLoad is still running");
	return;
}
var obj680_onLoad_runningActionsCount = 0;
var obj680_onLoad_loopCount = 0;
obj680_onLoad_actionGroup0();
});










/*
 *
 *   obj681: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj681_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj681_onLoad is still running");
	return;
}
var obj681_onLoad_runningActionsCount = 0;
var obj681_onLoad_loopCount = 0;
obj681_onLoad_actionGroup0();
});










/*
 *
 *   obj682: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj682_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj682_onLoad is still running");
	return;
}
var obj682_onLoad_runningActionsCount = 0;
var obj682_onLoad_loopCount = 0;
obj682_onLoad_actionGroup0();
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
	
$("#obj271").trigger('SCEventShow');
$("#obj315").trigger('SCEventShow');
$("#obj320").trigger('SCEventShow');
$("#obj679").trigger('SCEventShow');
$("#obj680").trigger('SCEventShow');
$("#obj681").trigger('SCEventShow');
$("#obj682").trigger('SCEventShow');
	
});