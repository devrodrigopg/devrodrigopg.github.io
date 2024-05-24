pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 96;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
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
var obj530_onLoad_activeActionGroupIndex = -1;
var obj530_onLoad_runningActionsCount = 0;
var obj530_onLoad_loopCount = 0;
var obj544_onLoad_activeActionGroupIndex = -1;
var obj544_onLoad_runningActionsCount = 0;
var obj544_onLoad_loopCount = 0;
var obj540_onLoad_activeActionGroupIndex = -1;
var obj540_onLoad_runningActionsCount = 0;
var obj540_onLoad_loopCount = 0;
var obj541_onLoad_activeActionGroupIndex = -1;
var obj541_onLoad_runningActionsCount = 0;
var obj541_onLoad_loopCount = 0;
var obj542_onLoad_activeActionGroupIndex = -1;
var obj542_onLoad_runningActionsCount = 0;
var obj542_onLoad_loopCount = 0;
var obj543_onLoad_activeActionGroupIndex = -1;
var obj543_onLoad_runningActionsCount = 0;
var obj543_onLoad_loopCount = 0;
var obj582_SCEventRun_activeActionGroupIndex = -1;
var obj582_SCEventRun_runningActionsCount = 0;
var obj582_SCEventRun_loopCount = 0;
var obj589_SCEventRun_activeActionGroupIndex = -1;
var obj589_SCEventRun_runningActionsCount = 0;
var obj589_SCEventRun_loopCount = 0;
var obj599_SCEventRun_activeActionGroupIndex = -1;
var obj599_SCEventRun_runningActionsCount = 0;
var obj599_SCEventRun_loopCount = 0;
var obj594_SCEventRun_activeActionGroupIndex = -1;
var obj594_SCEventRun_runningActionsCount = 0;
var obj594_SCEventRun_loopCount = 0;
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
		
obj530_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj530_onLoad_activeActionGroupIndex = -1;
		$("#obj530").trigger("obj530_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 530) {
				console.warn("de-queueing event obj530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj530_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_551();
function wait_551() {
	window.obj530_onLoad_runningActionsCount = obj530_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj530_onLoad_runningActionsCount = window.obj530_onLoad_runningActionsCount - 1;
if (window.obj530_onLoad_runningActionsCount < 0) {
	window.obj530_onLoad_runningActionsCount = 0;
} else if (window.obj530_onLoad_runningActionsCount == 0) {
	obj530_onLoad_actionGroup1();
}
	}, 1000);
}













};
obj530_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj530_onLoad_activeActionGroupIndex = -1;
		$("#obj530").trigger("obj530_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 530) {
				console.warn("de-queueing event obj530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj530_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj530
(function(){
	window.obj530_onLoad_runningActionsCount = obj530_onLoad_runningActionsCount + 1;

	var selector = "#obj530";
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
					window.obj530_onLoad_runningActionsCount = window.obj530_onLoad_runningActionsCount - 1;
if (window.obj530_onLoad_runningActionsCount < 0) {
	window.obj530_onLoad_runningActionsCount = 0;
} else if (window.obj530_onLoad_runningActionsCount == 0) {
	obj530_onLoad_actionGroup2();
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
				window.obj530_onLoad_runningActionsCount = window.obj530_onLoad_runningActionsCount - 1;
if (window.obj530_onLoad_runningActionsCount < 0) {
	window.obj530_onLoad_runningActionsCount = 0;
} else if (window.obj530_onLoad_runningActionsCount == 0) {
	obj530_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj530_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj530_onLoad_activeActionGroupIndex = -1;
		$("#obj530").trigger("obj530_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 530) {
				console.warn("de-queueing event obj530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj530_onLoad_activeActionGroupIndex = 2;
	





















};
obj544_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj544_onLoad_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj544 
move_554();
function move_554() {
	window.obj544_onLoad_runningActionsCount = obj544_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj544");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-46";
	var moveY = "+=-266";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj544_onLoad_runningActionsCount = window.obj544_onLoad_runningActionsCount - 1;
if (window.obj544_onLoad_runningActionsCount < 0) {
	window.obj544_onLoad_runningActionsCount = 0;
} else if (window.obj544_onLoad_runningActionsCount == 0) {
	obj544_onLoad_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj544 
rotate_555();
function rotate_555() {
	window.obj544_onLoad_runningActionsCount = obj544_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj544";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj544';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '-12.03911';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_555_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_555_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_555_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_555_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_555_completed() {
	setTimeout(function() {
		window.obj544_onLoad_runningActionsCount = window.obj544_onLoad_runningActionsCount - 1;
if (window.obj544_onLoad_runningActionsCount < 0) {
	window.obj544_onLoad_runningActionsCount = 0;
} else if (window.obj544_onLoad_runningActionsCount == 0) {
	obj544_onLoad_actionGroup1();
}
	}, 1);
}














};
obj544_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj544_onLoad_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_onLoad_activeActionGroupIndex = 1;
	


















//	action: run action list container
//	target: obj582 
runActionList_588();
function runActionList_588() {
	window.obj544_onLoad_runningActionsCount = obj544_onLoad_runningActionsCount + 1;
	$("#obj582").trigger('SCEventRun');
	setTimeout(function() {
		window.obj544_onLoad_runningActionsCount = window.obj544_onLoad_runningActionsCount - 1;
if (window.obj544_onLoad_runningActionsCount < 0) {
	window.obj544_onLoad_runningActionsCount = 0;
} else if (window.obj544_onLoad_runningActionsCount == 0) {
	obj544_onLoad_actionGroup2();
}		
	}, 1);
}



};
obj544_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj544_onLoad_activeActionGroupIndex = -1;
		$("#obj544").trigger("obj544_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 544) {
				console.warn("de-queueing event obj544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj544_onLoad_activeActionGroupIndex = 2;
	





















};
obj540_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj540_onLoad_activeActionGroupIndex = -1;
		$("#obj540").trigger("obj540_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 540) {
				console.warn("de-queueing event obj540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj540_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_572();
function wait_572() {
	window.obj540_onLoad_runningActionsCount = obj540_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj540_onLoad_runningActionsCount = window.obj540_onLoad_runningActionsCount - 1;
if (window.obj540_onLoad_runningActionsCount < 0) {
	window.obj540_onLoad_runningActionsCount = 0;
} else if (window.obj540_onLoad_runningActionsCount == 0) {
	obj540_onLoad_actionGroup1();
}
	}, 1000);
}













};
obj540_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj540_onLoad_activeActionGroupIndex = -1;
		$("#obj540").trigger("obj540_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 540) {
				console.warn("de-queueing event obj540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj540_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj540 
move_558();
function move_558() {
	window.obj540_onLoad_runningActionsCount = obj540_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-6";
	var moveY = "+=-164";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj540_onLoad_runningActionsCount = window.obj540_onLoad_runningActionsCount - 1;
if (window.obj540_onLoad_runningActionsCount < 0) {
	window.obj540_onLoad_runningActionsCount = 0;
} else if (window.obj540_onLoad_runningActionsCount == 0) {
	obj540_onLoad_actionGroup2();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj540 
rotate_557();
function rotate_557() {
	window.obj540_onLoad_runningActionsCount = obj540_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj540";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj540';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '-5.701925';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_557_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_557_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_557_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_557_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_557_completed() {
	setTimeout(function() {
		window.obj540_onLoad_runningActionsCount = window.obj540_onLoad_runningActionsCount - 1;
if (window.obj540_onLoad_runningActionsCount < 0) {
	window.obj540_onLoad_runningActionsCount = 0;
} else if (window.obj540_onLoad_runningActionsCount == 0) {
	obj540_onLoad_actionGroup2();
}
	}, 1);
}














};
obj540_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj540_onLoad_activeActionGroupIndex = -1;
		$("#obj540").trigger("obj540_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 540) {
				console.warn("de-queueing event obj540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj540_onLoad_activeActionGroupIndex = 2;
	


















//	action: run action list container
//	target: obj589 
runActionList_604();
function runActionList_604() {
	window.obj540_onLoad_runningActionsCount = obj540_onLoad_runningActionsCount + 1;
	$("#obj589").trigger('SCEventRun');
	setTimeout(function() {
		window.obj540_onLoad_runningActionsCount = window.obj540_onLoad_runningActionsCount - 1;
if (window.obj540_onLoad_runningActionsCount < 0) {
	window.obj540_onLoad_runningActionsCount = 0;
} else if (window.obj540_onLoad_runningActionsCount == 0) {
	obj540_onLoad_actionGroup3();
}		
	}, 1);
}



};
obj540_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj540_onLoad_activeActionGroupIndex = -1;
		$("#obj540").trigger("obj540_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 540) {
				console.warn("de-queueing event obj540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj540_onLoad_activeActionGroupIndex = 3;
	





















};
obj541_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj541_onLoad_activeActionGroupIndex = -1;
		$("#obj541").trigger("obj541_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 541) {
				console.warn("de-queueing event obj541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj541_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_577();
function wait_577() {
	window.obj541_onLoad_runningActionsCount = obj541_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj541_onLoad_runningActionsCount = window.obj541_onLoad_runningActionsCount - 1;
if (window.obj541_onLoad_runningActionsCount < 0) {
	window.obj541_onLoad_runningActionsCount = 0;
} else if (window.obj541_onLoad_runningActionsCount == 0) {
	obj541_onLoad_actionGroup1();
}
	}, 1000);
}













};
obj541_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj541_onLoad_activeActionGroupIndex = -1;
		$("#obj541").trigger("obj541_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 541) {
				console.warn("de-queueing event obj541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj541_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj541 
move_563();
function move_563() {
	window.obj541_onLoad_runningActionsCount = obj541_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj541");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-6";
	var moveY = "+=-164";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj541_onLoad_runningActionsCount = window.obj541_onLoad_runningActionsCount - 1;
if (window.obj541_onLoad_runningActionsCount < 0) {
	window.obj541_onLoad_runningActionsCount = 0;
} else if (window.obj541_onLoad_runningActionsCount == 0) {
	obj541_onLoad_actionGroup2();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj541 
rotate_562();
function rotate_562() {
	window.obj541_onLoad_runningActionsCount = obj541_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj541";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj541';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '-5.701925';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_562_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_562_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_562_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_562_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_562_completed() {
	setTimeout(function() {
		window.obj541_onLoad_runningActionsCount = window.obj541_onLoad_runningActionsCount - 1;
if (window.obj541_onLoad_runningActionsCount < 0) {
	window.obj541_onLoad_runningActionsCount = 0;
} else if (window.obj541_onLoad_runningActionsCount == 0) {
	obj541_onLoad_actionGroup2();
}
	}, 1);
}














};
obj541_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj541_onLoad_activeActionGroupIndex = -1;
		$("#obj541").trigger("obj541_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 541) {
				console.warn("de-queueing event obj541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj541_onLoad_activeActionGroupIndex = 2;
	


















//	action: run action list container
//	target: obj599 
runActionList_605();
function runActionList_605() {
	window.obj541_onLoad_runningActionsCount = obj541_onLoad_runningActionsCount + 1;
	$("#obj599").trigger('SCEventRun');
	setTimeout(function() {
		window.obj541_onLoad_runningActionsCount = window.obj541_onLoad_runningActionsCount - 1;
if (window.obj541_onLoad_runningActionsCount < 0) {
	window.obj541_onLoad_runningActionsCount = 0;
} else if (window.obj541_onLoad_runningActionsCount == 0) {
	obj541_onLoad_actionGroup3();
}		
	}, 1);
}



};
obj541_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj541_onLoad_activeActionGroupIndex = -1;
		$("#obj541").trigger("obj541_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 541) {
				console.warn("de-queueing event obj541." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj541").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj541_onLoad_activeActionGroupIndex = 3;
	





















};
obj542_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj542_onLoad_activeActionGroupIndex = -1;
		$("#obj542").trigger("obj542_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 542) {
				console.warn("de-queueing event obj542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj542_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj542 
move_567();
function move_567() {
	window.obj542_onLoad_runningActionsCount = obj542_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj542");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-6";
	var moveY = "+=-164";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj542_onLoad_runningActionsCount = window.obj542_onLoad_runningActionsCount - 1;
if (window.obj542_onLoad_runningActionsCount < 0) {
	window.obj542_onLoad_runningActionsCount = 0;
} else if (window.obj542_onLoad_runningActionsCount == 0) {
	obj542_onLoad_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj542 
rotate_566();
function rotate_566() {
	window.obj542_onLoad_runningActionsCount = obj542_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj542";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj542';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '-5.701925';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_566_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_566_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_566_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_566_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_566_completed() {
	setTimeout(function() {
		window.obj542_onLoad_runningActionsCount = window.obj542_onLoad_runningActionsCount - 1;
if (window.obj542_onLoad_runningActionsCount < 0) {
	window.obj542_onLoad_runningActionsCount = 0;
} else if (window.obj542_onLoad_runningActionsCount == 0) {
	obj542_onLoad_actionGroup1();
}
	}, 1);
}














};
obj542_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj542_onLoad_activeActionGroupIndex = -1;
		$("#obj542").trigger("obj542_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 542) {
				console.warn("de-queueing event obj542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj542_onLoad_activeActionGroupIndex = 1;
	


















//	action: run action list container
//	target: obj594 
runActionList_606();
function runActionList_606() {
	window.obj542_onLoad_runningActionsCount = obj542_onLoad_runningActionsCount + 1;
	$("#obj594").trigger('SCEventRun');
	setTimeout(function() {
		window.obj542_onLoad_runningActionsCount = window.obj542_onLoad_runningActionsCount - 1;
if (window.obj542_onLoad_runningActionsCount < 0) {
	window.obj542_onLoad_runningActionsCount = 0;
} else if (window.obj542_onLoad_runningActionsCount == 0) {
	obj542_onLoad_actionGroup2();
}		
	}, 1);
}



};
obj542_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj542_onLoad_activeActionGroupIndex = -1;
		$("#obj542").trigger("obj542_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 542) {
				console.warn("de-queueing event obj542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj542_onLoad_activeActionGroupIndex = 2;
	





















};
obj543_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj543_onLoad_activeActionGroupIndex = -1;
		$("#obj543").trigger("obj543_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 543) {
				console.warn("de-queueing event obj543." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj543").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj543_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_579();
function wait_579() {
	window.obj543_onLoad_runningActionsCount = obj543_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj543_onLoad_runningActionsCount = window.obj543_onLoad_runningActionsCount - 1;
if (window.obj543_onLoad_runningActionsCount < 0) {
	window.obj543_onLoad_runningActionsCount = 0;
} else if (window.obj543_onLoad_runningActionsCount == 0) {
	obj543_onLoad_actionGroup1();
}
	}, 1000);
}













};
obj543_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj543_onLoad_activeActionGroupIndex = -1;
		$("#obj543").trigger("obj543_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 543) {
				console.warn("de-queueing event obj543." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj543").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj543_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj543
(function(){
	window.obj543_onLoad_runningActionsCount = obj543_onLoad_runningActionsCount + 1;

	var selector = "#obj543";
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
					window.obj543_onLoad_runningActionsCount = window.obj543_onLoad_runningActionsCount - 1;
if (window.obj543_onLoad_runningActionsCount < 0) {
	window.obj543_onLoad_runningActionsCount = 0;
} else if (window.obj543_onLoad_runningActionsCount == 0) {
	obj543_onLoad_actionGroup2();
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
				window.obj543_onLoad_runningActionsCount = window.obj543_onLoad_runningActionsCount - 1;
if (window.obj543_onLoad_runningActionsCount < 0) {
	window.obj543_onLoad_runningActionsCount = 0;
} else if (window.obj543_onLoad_runningActionsCount == 0) {
	obj543_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj543_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj543_onLoad_activeActionGroupIndex = -1;
		$("#obj543").trigger("obj543_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 543) {
				console.warn("de-queueing event obj543." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj543").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj543_onLoad_activeActionGroupIndex = 2;
	





















};
obj582_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj582_SCEventRun_activeActionGroupIndex = -1;
		$("#obj582").trigger("obj582_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 582) {
				console.warn("de-queueing event obj582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj582_SCEventRun_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj544 
rotate_585();
function rotate_585() {
	window.obj582_SCEventRun_runningActionsCount = obj582_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj544";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj544';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '12.03911';
	var rotationSpeed = 3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_585_completed(); }
	//TweenMax.to(targetObjectId, 3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_585_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_585_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_585_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_585_completed() {
	setTimeout(function() {
		window.obj582_SCEventRun_runningActionsCount = window.obj582_SCEventRun_runningActionsCount - 1;
if (window.obj582_SCEventRun_runningActionsCount < 0) {
	window.obj582_SCEventRun_runningActionsCount = 0;
} else if (window.obj582_SCEventRun_runningActionsCount == 0) {
	obj582_SCEventRun_actionGroup1();
}
	}, 1);
}














};
obj582_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj582_SCEventRun_activeActionGroupIndex = -1;
		$("#obj582").trigger("obj582_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 582) {
				console.warn("de-queueing event obj582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj582_SCEventRun_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj544 
rotate_586();
function rotate_586() {
	window.obj582_SCEventRun_runningActionsCount = obj582_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj544";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj544';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '-12.03911';
	var rotationSpeed = 3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_586_completed(); }
	//TweenMax.to(targetObjectId, 3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_586_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_586_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_586_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_586_completed() {
	setTimeout(function() {
		window.obj582_SCEventRun_runningActionsCount = window.obj582_SCEventRun_runningActionsCount - 1;
if (window.obj582_SCEventRun_runningActionsCount < 0) {
	window.obj582_SCEventRun_runningActionsCount = 0;
} else if (window.obj582_SCEventRun_runningActionsCount == 0) {
	obj582_SCEventRun_actionGroup2();
}
	}, 1);
}














};
obj582_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj582_SCEventRun_activeActionGroupIndex = -1;
		$("#obj582").trigger("obj582_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 582) {
				console.warn("de-queueing event obj582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj582_SCEventRun_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj582_SCEventRun();
function loop_obj582_SCEventRun() {
	var loopCount = 0;
	window.obj582_SCEventRun_loopCount = window.obj582_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj582_SCEventRun_loopCount > loopCount) {
		window.obj582_SCEventRun_loopCount = 0
		obj582_SCEventRun_actionGroup3();
	} else {
		obj582_SCEventRun_actionGroup0();
	}
}













};
obj582_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj582_SCEventRun_activeActionGroupIndex = -1;
		$("#obj582").trigger("obj582_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 582) {
				console.warn("de-queueing event obj582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj582_SCEventRun_activeActionGroupIndex = 3;
	





















};
obj589_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj589_SCEventRun_activeActionGroupIndex = -1;
		$("#obj589").trigger("obj589_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 589) {
				console.warn("de-queueing event obj589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj589_SCEventRun_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj540 
rotate_592();
function rotate_592() {
	window.obj589_SCEventRun_runningActionsCount = obj589_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj540";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj540';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '-12.03911';
	var rotationSpeed = 3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_592_completed(); }
	//TweenMax.to(targetObjectId, 3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_592_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_592_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_592_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_592_completed() {
	setTimeout(function() {
		window.obj589_SCEventRun_runningActionsCount = window.obj589_SCEventRun_runningActionsCount - 1;
if (window.obj589_SCEventRun_runningActionsCount < 0) {
	window.obj589_SCEventRun_runningActionsCount = 0;
} else if (window.obj589_SCEventRun_runningActionsCount == 0) {
	obj589_SCEventRun_actionGroup1();
}
	}, 1);
}














};
obj589_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj589_SCEventRun_activeActionGroupIndex = -1;
		$("#obj589").trigger("obj589_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 589) {
				console.warn("de-queueing event obj589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj589_SCEventRun_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj540 
rotate_591();
function rotate_591() {
	window.obj589_SCEventRun_runningActionsCount = obj589_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj540";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj540';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '12.03911';
	var rotationSpeed = 3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_591_completed(); }
	//TweenMax.to(targetObjectId, 3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_591_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_591_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_591_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_591_completed() {
	setTimeout(function() {
		window.obj589_SCEventRun_runningActionsCount = window.obj589_SCEventRun_runningActionsCount - 1;
if (window.obj589_SCEventRun_runningActionsCount < 0) {
	window.obj589_SCEventRun_runningActionsCount = 0;
} else if (window.obj589_SCEventRun_runningActionsCount == 0) {
	obj589_SCEventRun_actionGroup2();
}
	}, 1);
}














};
obj589_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj589_SCEventRun_activeActionGroupIndex = -1;
		$("#obj589").trigger("obj589_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 589) {
				console.warn("de-queueing event obj589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj589_SCEventRun_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj589_SCEventRun();
function loop_obj589_SCEventRun() {
	var loopCount = 0;
	window.obj589_SCEventRun_loopCount = window.obj589_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj589_SCEventRun_loopCount > loopCount) {
		window.obj589_SCEventRun_loopCount = 0
		obj589_SCEventRun_actionGroup3();
	} else {
		obj589_SCEventRun_actionGroup0();
	}
}













};
obj589_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj589_SCEventRun_activeActionGroupIndex = -1;
		$("#obj589").trigger("obj589_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 589) {
				console.warn("de-queueing event obj589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj589_SCEventRun_activeActionGroupIndex = 3;
	





















};
obj599_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj599_SCEventRun_activeActionGroupIndex = -1;
		$("#obj599").trigger("obj599_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 599) {
				console.warn("de-queueing event obj599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj599_SCEventRun_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj541 
rotate_601();
function rotate_601() {
	window.obj599_SCEventRun_runningActionsCount = obj599_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj541";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj541';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '12.03911';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_601_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_601_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_601_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_601_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_601_completed() {
	setTimeout(function() {
		window.obj599_SCEventRun_runningActionsCount = window.obj599_SCEventRun_runningActionsCount - 1;
if (window.obj599_SCEventRun_runningActionsCount < 0) {
	window.obj599_SCEventRun_runningActionsCount = 0;
} else if (window.obj599_SCEventRun_runningActionsCount == 0) {
	obj599_SCEventRun_actionGroup1();
}
	}, 1);
}














};
obj599_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj599_SCEventRun_activeActionGroupIndex = -1;
		$("#obj599").trigger("obj599_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 599) {
				console.warn("de-queueing event obj599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj599_SCEventRun_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj541 
rotate_602();
function rotate_602() {
	window.obj599_SCEventRun_runningActionsCount = obj599_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj541";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj541';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '-12.03911';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_602_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_602_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_602_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_602_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_602_completed() {
	setTimeout(function() {
		window.obj599_SCEventRun_runningActionsCount = window.obj599_SCEventRun_runningActionsCount - 1;
if (window.obj599_SCEventRun_runningActionsCount < 0) {
	window.obj599_SCEventRun_runningActionsCount = 0;
} else if (window.obj599_SCEventRun_runningActionsCount == 0) {
	obj599_SCEventRun_actionGroup2();
}
	}, 1);
}














};
obj599_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj599_SCEventRun_activeActionGroupIndex = -1;
		$("#obj599").trigger("obj599_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 599) {
				console.warn("de-queueing event obj599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj599_SCEventRun_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj599_SCEventRun();
function loop_obj599_SCEventRun() {
	var loopCount = 0;
	window.obj599_SCEventRun_loopCount = window.obj599_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj599_SCEventRun_loopCount > loopCount) {
		window.obj599_SCEventRun_loopCount = 0
		obj599_SCEventRun_actionGroup3();
	} else {
		obj599_SCEventRun_actionGroup0();
	}
}













};
obj599_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj599_SCEventRun_activeActionGroupIndex = -1;
		$("#obj599").trigger("obj599_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 599) {
				console.warn("de-queueing event obj599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj599_SCEventRun_activeActionGroupIndex = 3;
	





















};
obj594_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj594_SCEventRun_activeActionGroupIndex = -1;
		$("#obj594").trigger("obj594_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 594) {
				console.warn("de-queueing event obj594." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj594").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj594_SCEventRun_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj542 
rotate_596();
function rotate_596() {
	window.obj594_SCEventRun_runningActionsCount = obj594_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj542";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj542';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '8';
	var rotationSpeed = 2.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_596_completed(); }
	//TweenMax.to(targetObjectId, 2.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_596_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_596_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_596_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_596_completed() {
	setTimeout(function() {
		window.obj594_SCEventRun_runningActionsCount = window.obj594_SCEventRun_runningActionsCount - 1;
if (window.obj594_SCEventRun_runningActionsCount < 0) {
	window.obj594_SCEventRun_runningActionsCount = 0;
} else if (window.obj594_SCEventRun_runningActionsCount == 0) {
	obj594_SCEventRun_actionGroup1();
}
	}, 1);
}














};
obj594_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj594_SCEventRun_activeActionGroupIndex = -1;
		$("#obj594").trigger("obj594_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 594) {
				console.warn("de-queueing event obj594." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj594").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj594_SCEventRun_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj542 
rotate_597();
function rotate_597() {
	window.obj594_SCEventRun_runningActionsCount = obj594_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj542";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj542';
	var transformOriginX = '47.22222%';
	var transformOriginY = '92.15247%';
	var rotationToDegrees = '-8';
	var rotationSpeed = 2.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_597_completed(); }
	//TweenMax.to(targetObjectId, 2.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_597_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_597_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_597_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_597_completed() {
	setTimeout(function() {
		window.obj594_SCEventRun_runningActionsCount = window.obj594_SCEventRun_runningActionsCount - 1;
if (window.obj594_SCEventRun_runningActionsCount < 0) {
	window.obj594_SCEventRun_runningActionsCount = 0;
} else if (window.obj594_SCEventRun_runningActionsCount == 0) {
	obj594_SCEventRun_actionGroup2();
}
	}, 1);
}














};
obj594_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj594_SCEventRun_activeActionGroupIndex = -1;
		$("#obj594").trigger("obj594_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 594) {
				console.warn("de-queueing event obj594." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj594").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj594_SCEventRun_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj594_SCEventRun();
function loop_obj594_SCEventRun() {
	var loopCount = 0;
	window.obj594_SCEventRun_loopCount = window.obj594_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj594_SCEventRun_loopCount > loopCount) {
		window.obj594_SCEventRun_loopCount = 0
		obj594_SCEventRun_actionGroup3();
	} else {
		obj594_SCEventRun_actionGroup0();
	}
}













};
obj594_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj594_SCEventRun_activeActionGroupIndex = -1;
		$("#obj594").trigger("obj594_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 594) {
				console.warn("de-queueing event obj594." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj594").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj594_SCEventRun_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























/*
 *
 *   obj530: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj530_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj530_onLoad is still running");
	return;
}
var obj530_onLoad_runningActionsCount = 0;
var obj530_onLoad_loopCount = 0;
obj530_onLoad_actionGroup0();
});










/*
 *
 *   obj544: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj544_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj544_onLoad is still running");
	return;
}
var obj544_onLoad_runningActionsCount = 0;
var obj544_onLoad_loopCount = 0;
obj544_onLoad_actionGroup0();
});




















/*
 *
 *   obj540: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj540_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj540_onLoad is still running");
	return;
}
var obj540_onLoad_runningActionsCount = 0;
var obj540_onLoad_loopCount = 0;
obj540_onLoad_actionGroup0();
});










/*
 *
 *   obj541: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj541_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj541_onLoad is still running");
	return;
}
var obj541_onLoad_runningActionsCount = 0;
var obj541_onLoad_loopCount = 0;
obj541_onLoad_actionGroup0();
});










/*
 *
 *   obj542: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj542_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj542_onLoad is still running");
	return;
}
var obj542_onLoad_runningActionsCount = 0;
var obj542_onLoad_loopCount = 0;
obj542_onLoad_actionGroup0();
});










/*
 *
 *   obj543: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj543_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj543_onLoad is still running");
	return;
}
var obj543_onLoad_runningActionsCount = 0;
var obj543_onLoad_loopCount = 0;
obj543_onLoad_actionGroup0();
});












/*
 *
 *   obj582: Event SCEventRun
 *
 */
$("#obj582").bind("SCEventRun", function(event) {
	if (window.obj582_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj582_SCEventRun is still running");
	return;
}
var obj582_SCEventRun_runningActionsCount = 0;
var obj582_SCEventRun_loopCount = 0;
obj582_SCEventRun_actionGroup0();
});










/*
 *
 *   obj589: Event SCEventRun
 *
 */
$("#obj589").bind("SCEventRun", function(event) {
	if (window.obj589_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj589_SCEventRun is still running");
	return;
}
var obj589_SCEventRun_runningActionsCount = 0;
var obj589_SCEventRun_loopCount = 0;
obj589_SCEventRun_actionGroup0();
});










/*
 *
 *   obj599: Event SCEventRun
 *
 */
$("#obj599").bind("SCEventRun", function(event) {
	if (window.obj599_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj599_SCEventRun is still running");
	return;
}
var obj599_SCEventRun_runningActionsCount = 0;
var obj599_SCEventRun_loopCount = 0;
obj599_SCEventRun_actionGroup0();
});










/*
 *
 *   obj594: Event SCEventRun
 *
 */
$("#obj594").bind("SCEventRun", function(event) {
	if (window.obj594_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj594_SCEventRun is still running");
	return;
}
var obj594_SCEventRun_runningActionsCount = 0;
var obj594_SCEventRun_loopCount = 0;
obj594_SCEventRun_actionGroup0();
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
	
$("#obj97").trigger('SCEventShow');
$("#obj302").trigger('SCEventShow');
$("#obj544").trigger('SCEventShow');
$("#obj533").trigger('SCEventShow');
$("#obj540").trigger('SCEventShow');
$("#obj541").trigger('SCEventShow');
$("#obj542").trigger('SCEventShow');
$("#obj543").trigger('SCEventShow');
	
});