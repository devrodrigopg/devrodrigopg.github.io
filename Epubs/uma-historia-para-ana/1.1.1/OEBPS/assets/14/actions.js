pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 167;
pubcoder.page.title = pubcoder.page.title || "14";
pubcoder.page.number = pubcoder.page.number || 14;
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
var obj861_onLoad_activeActionGroupIndex = -1;
var obj861_onLoad_runningActionsCount = 0;
var obj861_onLoad_loopCount = 0;
var obj869_onLoad_activeActionGroupIndex = -1;
var obj869_onLoad_runningActionsCount = 0;
var obj869_onLoad_loopCount = 0;
var obj870_onLoad_activeActionGroupIndex = -1;
var obj870_onLoad_runningActionsCount = 0;
var obj870_onLoad_loopCount = 0;
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
		
obj861_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj861_onLoad_activeActionGroupIndex = -1;
		$("#obj861").trigger("obj861_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 861) {
				console.warn("de-queueing event obj861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj861_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj861 
rotate_864();
function rotate_864() {
	window.obj861_onLoad_runningActionsCount = obj861_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj861";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj861';
	var transformOriginX = '60.6383%';
	var transformOriginY = '83.33333%';
	var rotationToDegrees = '-21.80141';
	var rotationSpeed = 0.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_864_completed(); }
	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_864_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_864_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_864_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_864_completed() {
	setTimeout(function() {
		window.obj861_onLoad_runningActionsCount = window.obj861_onLoad_runningActionsCount - 1;
if (window.obj861_onLoad_runningActionsCount < 0) {
	window.obj861_onLoad_runningActionsCount = 0;
} else if (window.obj861_onLoad_runningActionsCount == 0) {
	obj861_onLoad_actionGroup1();
}
	}, 1);
}














};
obj861_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj861_onLoad_activeActionGroupIndex = -1;
		$("#obj861").trigger("obj861_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 861) {
				console.warn("de-queueing event obj861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj861_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj861 
rotate_865();
function rotate_865() {
	window.obj861_onLoad_runningActionsCount = obj861_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj861";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj861';
	var transformOriginX = '60.6383%';
	var transformOriginY = '83.33333%';
	var rotationToDegrees = '21.80141';
	var rotationSpeed = 0.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_865_completed(); }
	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_865_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_865_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_865_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_865_completed() {
	setTimeout(function() {
		window.obj861_onLoad_runningActionsCount = window.obj861_onLoad_runningActionsCount - 1;
if (window.obj861_onLoad_runningActionsCount < 0) {
	window.obj861_onLoad_runningActionsCount = 0;
} else if (window.obj861_onLoad_runningActionsCount == 0) {
	obj861_onLoad_actionGroup2();
}
	}, 1);
}














};
obj861_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj861_onLoad_activeActionGroupIndex = -1;
		$("#obj861").trigger("obj861_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 861) {
				console.warn("de-queueing event obj861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj861_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj861_onLoad();
function loop_obj861_onLoad() {
	var loopCount = 0;
	window.obj861_onLoad_loopCount = window.obj861_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj861_onLoad_loopCount > loopCount) {
		window.obj861_onLoad_loopCount = 0
		obj861_onLoad_actionGroup3();
	} else {
		obj861_onLoad_actionGroup0();
	}
}













};
obj861_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj861_onLoad_activeActionGroupIndex = -1;
		$("#obj861").trigger("obj861_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 861) {
				console.warn("de-queueing event obj861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj861_onLoad_activeActionGroupIndex = 3;
	





















};
obj869_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj869_onLoad_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj869 
rotate_882();
function rotate_882() {
	window.obj869_onLoad_runningActionsCount = obj869_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj869";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj869';
	var transformOriginX = '25%';
	var transformOriginY = '10.12658%';
	var rotationToDegrees = '-9.055103';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_882_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_882_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_882_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_882_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_882_completed() {
	setTimeout(function() {
		window.obj869_onLoad_runningActionsCount = window.obj869_onLoad_runningActionsCount - 1;
if (window.obj869_onLoad_runningActionsCount < 0) {
	window.obj869_onLoad_runningActionsCount = 0;
} else if (window.obj869_onLoad_runningActionsCount == 0) {
	obj869_onLoad_actionGroup1();
}
	}, 1);
}














};
obj869_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj869_onLoad_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj869 
rotate_883();
function rotate_883() {
	window.obj869_onLoad_runningActionsCount = obj869_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj869";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj869';
	var transformOriginX = '25%';
	var transformOriginY = '10.12658%';
	var rotationToDegrees = '9.055103';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_883_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_883_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_883_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_883_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_883_completed() {
	setTimeout(function() {
		window.obj869_onLoad_runningActionsCount = window.obj869_onLoad_runningActionsCount - 1;
if (window.obj869_onLoad_runningActionsCount < 0) {
	window.obj869_onLoad_runningActionsCount = 0;
} else if (window.obj869_onLoad_runningActionsCount == 0) {
	obj869_onLoad_actionGroup2();
}
	}, 1);
}














};
obj869_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj869_onLoad_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onLoad_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj869 
rotate_2015();
function rotate_2015() {
	window.obj869_onLoad_runningActionsCount = obj869_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj869";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj869';
	var transformOriginX = '25%';
	var transformOriginY = '10.12658%';
	var rotationToDegrees = '-9.055103';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2015_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2015_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2015_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2015_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2015_completed() {
	setTimeout(function() {
		window.obj869_onLoad_runningActionsCount = window.obj869_onLoad_runningActionsCount - 1;
if (window.obj869_onLoad_runningActionsCount < 0) {
	window.obj869_onLoad_runningActionsCount = 0;
} else if (window.obj869_onLoad_runningActionsCount == 0) {
	obj869_onLoad_actionGroup3();
}
	}, 1);
}














};
obj869_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj869_onLoad_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onLoad_activeActionGroupIndex = 3;
	







//	action: rotate 
//	target: obj869 
rotate_2016();
function rotate_2016() {
	window.obj869_onLoad_runningActionsCount = obj869_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj869";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj869';
	var transformOriginX = '25%';
	var transformOriginY = '10.12658%';
	var rotationToDegrees = '9.055103';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2016_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2016_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2016_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2016_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2016_completed() {
	setTimeout(function() {
		window.obj869_onLoad_runningActionsCount = window.obj869_onLoad_runningActionsCount - 1;
if (window.obj869_onLoad_runningActionsCount < 0) {
	window.obj869_onLoad_runningActionsCount = 0;
} else if (window.obj869_onLoad_runningActionsCount == 0) {
	obj869_onLoad_actionGroup4();
}
	}, 1);
}














};
obj869_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj869_onLoad_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onLoad_activeActionGroupIndex = 4;
	







//	action: rotate 
//	target: obj869 
rotate_2017();
function rotate_2017() {
	window.obj869_onLoad_runningActionsCount = obj869_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj869";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj869';
	var transformOriginX = '25%';
	var transformOriginY = '10.12658%';
	var rotationToDegrees = '-9.055103';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2017_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2017_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2017_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2017_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2017_completed() {
	setTimeout(function() {
		window.obj869_onLoad_runningActionsCount = window.obj869_onLoad_runningActionsCount - 1;
if (window.obj869_onLoad_runningActionsCount < 0) {
	window.obj869_onLoad_runningActionsCount = 0;
} else if (window.obj869_onLoad_runningActionsCount == 0) {
	obj869_onLoad_actionGroup5();
}
	}, 1);
}














};
obj869_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj869_onLoad_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onLoad_activeActionGroupIndex = 5;
	







//	action: rotate 
//	target: obj869 
rotate_2018();
function rotate_2018() {
	window.obj869_onLoad_runningActionsCount = obj869_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj869";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj869';
	var transformOriginX = '25%';
	var transformOriginY = '10.12658%';
	var rotationToDegrees = '9.055103';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2018_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2018_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2018_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2018_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2018_completed() {
	setTimeout(function() {
		window.obj869_onLoad_runningActionsCount = window.obj869_onLoad_runningActionsCount - 1;
if (window.obj869_onLoad_runningActionsCount < 0) {
	window.obj869_onLoad_runningActionsCount = 0;
} else if (window.obj869_onLoad_runningActionsCount == 0) {
	obj869_onLoad_actionGroup6();
}
	}, 1);
}














};
obj869_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj869_onLoad_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onLoad_activeActionGroupIndex = 6;
	








//	action: wait
wait_2019();
function wait_2019() {
	window.obj869_onLoad_runningActionsCount = obj869_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj869_onLoad_runningActionsCount = window.obj869_onLoad_runningActionsCount - 1;
if (window.obj869_onLoad_runningActionsCount < 0) {
	window.obj869_onLoad_runningActionsCount = 0;
} else if (window.obj869_onLoad_runningActionsCount == 0) {
	obj869_onLoad_actionGroup7();
}
	}, 1000);
}













};
obj869_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj869_onLoad_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onLoad_activeActionGroupIndex = 7;
	








//	action: loop
loop_obj869_onLoad();
function loop_obj869_onLoad() {
	var loopCount = 0;
	window.obj869_onLoad_loopCount = window.obj869_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj869_onLoad_loopCount > loopCount) {
		window.obj869_onLoad_loopCount = 0
		obj869_onLoad_actionGroup8();
	} else {
		obj869_onLoad_actionGroup0();
	}
}













};
obj869_onLoad_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj869_onLoad_activeActionGroupIndex = -1;
		$("#obj869").trigger("obj869_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 869) {
				console.warn("de-queueing event obj869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj869_onLoad_activeActionGroupIndex = 8;
	





















};
obj870_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj870_onLoad_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 870) {
				console.warn("de-queueing event obj870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj870_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj870 
rotate_886();
function rotate_886() {
	window.obj870_onLoad_runningActionsCount = obj870_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj870";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj870';
	var transformOriginX = '68.89764%';
	var transformOriginY = '7.352941%';
	var rotationToDegrees = '-9.832913';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_886_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_886_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_886_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_886_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_886_completed() {
	setTimeout(function() {
		window.obj870_onLoad_runningActionsCount = window.obj870_onLoad_runningActionsCount - 1;
if (window.obj870_onLoad_runningActionsCount < 0) {
	window.obj870_onLoad_runningActionsCount = 0;
} else if (window.obj870_onLoad_runningActionsCount == 0) {
	obj870_onLoad_actionGroup1();
}
	}, 1);
}














};
obj870_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj870_onLoad_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 870) {
				console.warn("de-queueing event obj870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj870_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj870 
rotate_887();
function rotate_887() {
	window.obj870_onLoad_runningActionsCount = obj870_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj870";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj870';
	var transformOriginX = '68.89764%';
	var transformOriginY = '7.352941%';
	var rotationToDegrees = '9.832913';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_887_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_887_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_887_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_887_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_887_completed() {
	setTimeout(function() {
		window.obj870_onLoad_runningActionsCount = window.obj870_onLoad_runningActionsCount - 1;
if (window.obj870_onLoad_runningActionsCount < 0) {
	window.obj870_onLoad_runningActionsCount = 0;
} else if (window.obj870_onLoad_runningActionsCount == 0) {
	obj870_onLoad_actionGroup2();
}
	}, 1);
}














};
obj870_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj870_onLoad_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 870) {
				console.warn("de-queueing event obj870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj870_onLoad_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj870 
rotate_2023();
function rotate_2023() {
	window.obj870_onLoad_runningActionsCount = obj870_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj870";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj870';
	var transformOriginX = '68.89764%';
	var transformOriginY = '7.352941%';
	var rotationToDegrees = '-9.832913';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2023_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2023_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2023_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2023_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2023_completed() {
	setTimeout(function() {
		window.obj870_onLoad_runningActionsCount = window.obj870_onLoad_runningActionsCount - 1;
if (window.obj870_onLoad_runningActionsCount < 0) {
	window.obj870_onLoad_runningActionsCount = 0;
} else if (window.obj870_onLoad_runningActionsCount == 0) {
	obj870_onLoad_actionGroup3();
}
	}, 1);
}














};
obj870_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj870_onLoad_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 870) {
				console.warn("de-queueing event obj870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj870_onLoad_activeActionGroupIndex = 3;
	







//	action: rotate 
//	target: obj870 
rotate_2024();
function rotate_2024() {
	window.obj870_onLoad_runningActionsCount = obj870_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj870";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj870';
	var transformOriginX = '68.89764%';
	var transformOriginY = '7.352941%';
	var rotationToDegrees = '9.832913';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2024_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2024_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2024_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2024_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2024_completed() {
	setTimeout(function() {
		window.obj870_onLoad_runningActionsCount = window.obj870_onLoad_runningActionsCount - 1;
if (window.obj870_onLoad_runningActionsCount < 0) {
	window.obj870_onLoad_runningActionsCount = 0;
} else if (window.obj870_onLoad_runningActionsCount == 0) {
	obj870_onLoad_actionGroup4();
}
	}, 1);
}














};
obj870_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj870_onLoad_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 870) {
				console.warn("de-queueing event obj870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj870_onLoad_activeActionGroupIndex = 4;
	







//	action: rotate 
//	target: obj870 
rotate_2025();
function rotate_2025() {
	window.obj870_onLoad_runningActionsCount = obj870_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj870";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj870';
	var transformOriginX = '68.89764%';
	var transformOriginY = '7.352941%';
	var rotationToDegrees = '-9.832913';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2025_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2025_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2025_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2025_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2025_completed() {
	setTimeout(function() {
		window.obj870_onLoad_runningActionsCount = window.obj870_onLoad_runningActionsCount - 1;
if (window.obj870_onLoad_runningActionsCount < 0) {
	window.obj870_onLoad_runningActionsCount = 0;
} else if (window.obj870_onLoad_runningActionsCount == 0) {
	obj870_onLoad_actionGroup5();
}
	}, 1);
}














};
obj870_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj870_onLoad_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 870) {
				console.warn("de-queueing event obj870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj870_onLoad_activeActionGroupIndex = 5;
	







//	action: rotate 
//	target: obj870 
rotate_2026();
function rotate_2026() {
	window.obj870_onLoad_runningActionsCount = obj870_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj870";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj870';
	var transformOriginX = '68.89764%';
	var transformOriginY = '7.352941%';
	var rotationToDegrees = '9.832913';
	var rotationSpeed = 0.8;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2026_completed(); }
	//TweenMax.to(targetObjectId, 0.8, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2026_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2026_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2026_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2026_completed() {
	setTimeout(function() {
		window.obj870_onLoad_runningActionsCount = window.obj870_onLoad_runningActionsCount - 1;
if (window.obj870_onLoad_runningActionsCount < 0) {
	window.obj870_onLoad_runningActionsCount = 0;
} else if (window.obj870_onLoad_runningActionsCount == 0) {
	obj870_onLoad_actionGroup6();
}
	}, 1);
}














};
obj870_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj870_onLoad_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 870) {
				console.warn("de-queueing event obj870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj870_onLoad_activeActionGroupIndex = 6;
	








//	action: wait
wait_2021();
function wait_2021() {
	window.obj870_onLoad_runningActionsCount = obj870_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj870_onLoad_runningActionsCount = window.obj870_onLoad_runningActionsCount - 1;
if (window.obj870_onLoad_runningActionsCount < 0) {
	window.obj870_onLoad_runningActionsCount = 0;
} else if (window.obj870_onLoad_runningActionsCount == 0) {
	obj870_onLoad_actionGroup7();
}
	}, 1000);
}













};
obj870_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj870_onLoad_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 870) {
				console.warn("de-queueing event obj870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj870_onLoad_activeActionGroupIndex = 7;
	








//	action: loop
loop_obj870_onLoad();
function loop_obj870_onLoad() {
	var loopCount = 0;
	window.obj870_onLoad_loopCount = window.obj870_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj870_onLoad_loopCount > loopCount) {
		window.obj870_onLoad_loopCount = 0
		obj870_onLoad_actionGroup8();
	} else {
		obj870_onLoad_actionGroup0();
	}
}













};
obj870_onLoad_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj870_onLoad_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 870) {
				console.warn("de-queueing event obj870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj870_onLoad_activeActionGroupIndex = 8;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























/*
 *
 *   obj861: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj861_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj861_onLoad is still running");
	return;
}
var obj861_onLoad_runningActionsCount = 0;
var obj861_onLoad_loopCount = 0;
obj861_onLoad_actionGroup0();
});










/*
 *
 *   obj869: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj869_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj869_onLoad is still running");
	return;
}
var obj869_onLoad_runningActionsCount = 0;
var obj869_onLoad_loopCount = 0;
obj869_onLoad_actionGroup0();
});










/*
 *
 *   obj870: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj870_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj870_onLoad is still running");
	return;
}
var obj870_onLoad_runningActionsCount = 0;
var obj870_onLoad_loopCount = 0;
obj870_onLoad_actionGroup0();
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
	
$("#obj383").trigger('SCEventShow');
$("#obj385").trigger('SCEventShow');
$("#obj861").trigger('SCEventShow');
$("#obj869").trigger('SCEventShow');
$("#obj870").trigger('SCEventShow');
$("#obj876").trigger('SCEventShow');
$("#obj879").trigger('SCEventShow');
	
});