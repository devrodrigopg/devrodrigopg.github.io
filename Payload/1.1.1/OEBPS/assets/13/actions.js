pubcoder.projectID = pubcoder.projectID || "978-65-86021-35-6";
pubcoder.project.id = pubcoder.project.id || "978-65-86021-35-6";
pubcoder.project.title = pubcoder.project.title || "Uma história para Ana";
pubcoder.page.id = pubcoder.page.id || 163;
pubcoder.page.title = pubcoder.page.title || "13";
pubcoder.page.number = pubcoder.page.number || 13;
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
var obj827_onLoad_activeActionGroupIndex = -1;
var obj827_onLoad_runningActionsCount = 0;
var obj827_onLoad_loopCount = 0;
var obj841_onLoad_activeActionGroupIndex = -1;
var obj841_onLoad_runningActionsCount = 0;
var obj841_onLoad_loopCount = 0;
var obj853_onLoad_activeActionGroupIndex = -1;
var obj853_onLoad_runningActionsCount = 0;
var obj853_onLoad_loopCount = 0;
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
		
obj827_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onLoad_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj827 
rotate_830();
function rotate_830() {
	window.obj827_onLoad_runningActionsCount = obj827_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj827";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj827';
	var transformOriginX = '16.33663%';
	var transformOriginY = '79.55466%';
	var rotationToDegrees = '9.76687';
	var rotationSpeed = 2.5;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_830_completed(); }
	//TweenMax.to(targetObjectId, 2.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_830_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_830_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_830_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_830_completed() {
	setTimeout(function() {
		window.obj827_onLoad_runningActionsCount = window.obj827_onLoad_runningActionsCount - 1;
if (window.obj827_onLoad_runningActionsCount < 0) {
	window.obj827_onLoad_runningActionsCount = 0;
} else if (window.obj827_onLoad_runningActionsCount == 0) {
	obj827_onLoad_actionGroup1();
}
	}, 1);
}














};
obj827_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onLoad_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj827 
rotate_831();
function rotate_831() {
	window.obj827_onLoad_runningActionsCount = obj827_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj827";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj827';
	var transformOriginX = '16.33663%';
	var transformOriginY = '79.55466%';
	var rotationToDegrees = '-9.76687';
	var rotationSpeed = 2.5;
	var rotationEasing = 'ease-in';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_831_completed(); }
	//TweenMax.to(targetObjectId, 2.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_831_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_831_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_831_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_831_completed() {
	setTimeout(function() {
		window.obj827_onLoad_runningActionsCount = window.obj827_onLoad_runningActionsCount - 1;
if (window.obj827_onLoad_runningActionsCount < 0) {
	window.obj827_onLoad_runningActionsCount = 0;
} else if (window.obj827_onLoad_runningActionsCount == 0) {
	obj827_onLoad_actionGroup2();
}
	}, 1);
}














};
obj827_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onLoad_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onLoad_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj827 
rotate_833();
function rotate_833() {
	window.obj827_onLoad_runningActionsCount = obj827_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj827";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj827';
	var transformOriginX = '16.33663%';
	var transformOriginY = '79.55466%';
	var rotationToDegrees = '-9.76687';
	var rotationSpeed = 2.5;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_833_completed(); }
	//TweenMax.to(targetObjectId, 2.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_833_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_833_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_833_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_833_completed() {
	setTimeout(function() {
		window.obj827_onLoad_runningActionsCount = window.obj827_onLoad_runningActionsCount - 1;
if (window.obj827_onLoad_runningActionsCount < 0) {
	window.obj827_onLoad_runningActionsCount = 0;
} else if (window.obj827_onLoad_runningActionsCount == 0) {
	obj827_onLoad_actionGroup3();
}
	}, 1);
}














};
obj827_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onLoad_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onLoad_activeActionGroupIndex = 3;
	







//	action: rotate 
//	target: obj827 
rotate_832();
function rotate_832() {
	window.obj827_onLoad_runningActionsCount = obj827_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj827";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj827';
	var transformOriginX = '16.33663%';
	var transformOriginY = '79.55466%';
	var rotationToDegrees = '9.76687';
	var rotationSpeed = 2.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_832_completed(); }
	//TweenMax.to(targetObjectId, 2.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_832_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_832_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_832_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_832_completed() {
	setTimeout(function() {
		window.obj827_onLoad_runningActionsCount = window.obj827_onLoad_runningActionsCount - 1;
if (window.obj827_onLoad_runningActionsCount < 0) {
	window.obj827_onLoad_runningActionsCount = 0;
} else if (window.obj827_onLoad_runningActionsCount == 0) {
	obj827_onLoad_actionGroup4();
}
	}, 1);
}














};
obj827_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onLoad_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onLoad_activeActionGroupIndex = 4;
	








//	action: wait
wait_839();
function wait_839() {
	window.obj827_onLoad_runningActionsCount = obj827_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj827_onLoad_runningActionsCount = window.obj827_onLoad_runningActionsCount - 1;
if (window.obj827_onLoad_runningActionsCount < 0) {
	window.obj827_onLoad_runningActionsCount = 0;
} else if (window.obj827_onLoad_runningActionsCount == 0) {
	obj827_onLoad_actionGroup5();
}
	}, 1000);
}













};
obj827_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onLoad_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onLoad_activeActionGroupIndex = 5;
	








//	action: loop
loop_obj827_onLoad();
function loop_obj827_onLoad() {
	var loopCount = 1;
	window.obj827_onLoad_loopCount = window.obj827_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj827_onLoad_loopCount > loopCount) {
		window.obj827_onLoad_loopCount = 0
		obj827_onLoad_actionGroup6();
	} else {
		obj827_onLoad_actionGroup0();
	}
}













};
obj827_onLoad_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj827_onLoad_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 827) {
				console.warn("de-queueing event obj827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj827_onLoad_activeActionGroupIndex = 6;
	





















};
obj841_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj841_onLoad_activeActionGroupIndex = -1;
		$("#obj841").trigger("obj841_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 841) {
				console.warn("de-queueing event obj841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj841_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_844();
function wait_844() {
	window.obj841_onLoad_runningActionsCount = obj841_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj841_onLoad_runningActionsCount = window.obj841_onLoad_runningActionsCount - 1;
if (window.obj841_onLoad_runningActionsCount < 0) {
	window.obj841_onLoad_runningActionsCount = 0;
} else if (window.obj841_onLoad_runningActionsCount == 0) {
	obj841_onLoad_actionGroup1();
}
	}, 1000);
}













};
obj841_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj841_onLoad_activeActionGroupIndex = -1;
		$("#obj841").trigger("obj841_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 841) {
				console.warn("de-queueing event obj841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj841_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj841 
hide_845();
function hide_845() {
	var selector = "#obj841";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj841_onLoad_runningActionsCount = obj841_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj841_onLoad_runningActionsCount = window.obj841_onLoad_runningActionsCount - 1;
if (window.obj841_onLoad_runningActionsCount < 0) {
	window.obj841_onLoad_runningActionsCount = 0;
} else if (window.obj841_onLoad_runningActionsCount == 0) {
	obj841_onLoad_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_845(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj841_onLoad_runningActionsCount = window.obj841_onLoad_runningActionsCount - 1;
if (window.obj841_onLoad_runningActionsCount < 0) {
	window.obj841_onLoad_runningActionsCount = 0;
} else if (window.obj841_onLoad_runningActionsCount == 0) {
	obj841_onLoad_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj848
(function(){
	window.obj841_onLoad_runningActionsCount = obj841_onLoad_runningActionsCount + 1;

	var selector = "#obj848";
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
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj841_onLoad_runningActionsCount = window.obj841_onLoad_runningActionsCount - 1;
if (window.obj841_onLoad_runningActionsCount < 0) {
	window.obj841_onLoad_runningActionsCount = 0;
} else if (window.obj841_onLoad_runningActionsCount == 0) {
	obj841_onLoad_actionGroup2();
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
				window.obj841_onLoad_runningActionsCount = window.obj841_onLoad_runningActionsCount - 1;
if (window.obj841_onLoad_runningActionsCount < 0) {
	window.obj841_onLoad_runningActionsCount = 0;
} else if (window.obj841_onLoad_runningActionsCount == 0) {
	obj841_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj841_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj841_onLoad_activeActionGroupIndex = -1;
		$("#obj841").trigger("obj841_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 841) {
				console.warn("de-queueing event obj841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj841_onLoad_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj848 
rotate_850();
function rotate_850() {
	window.obj841_onLoad_runningActionsCount = obj841_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj848";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj848';
	var transformOriginX = '4.666667%';
	var transformOriginY = '31.15942%';
	var rotationToDegrees = '-19.57313';
	var rotationSpeed = 4;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_850_completed(); }
	//TweenMax.to(targetObjectId, 4, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_850_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_850_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_850_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_850_completed() {
	setTimeout(function() {
		window.obj841_onLoad_runningActionsCount = window.obj841_onLoad_runningActionsCount - 1;
if (window.obj841_onLoad_runningActionsCount < 0) {
	window.obj841_onLoad_runningActionsCount = 0;
} else if (window.obj841_onLoad_runningActionsCount == 0) {
	obj841_onLoad_actionGroup3();
}
	}, 1);
}














};
obj841_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj841_onLoad_activeActionGroupIndex = -1;
		$("#obj841").trigger("obj841_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 841) {
				console.warn("de-queueing event obj841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj841_onLoad_activeActionGroupIndex = 3;
	





















};
obj853_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj853_onLoad_activeActionGroupIndex = -1;
		$("#obj853").trigger("obj853_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 853) {
				console.warn("de-queueing event obj853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj853_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_2123();
function wait_2123() {
	window.obj853_onLoad_runningActionsCount = obj853_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj853_onLoad_runningActionsCount = window.obj853_onLoad_runningActionsCount - 1;
if (window.obj853_onLoad_runningActionsCount < 0) {
	window.obj853_onLoad_runningActionsCount = 0;
} else if (window.obj853_onLoad_runningActionsCount == 0) {
	obj853_onLoad_actionGroup1();
}
	}, 2000);
}













};
obj853_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj853_onLoad_activeActionGroupIndex = -1;
		$("#obj853").trigger("obj853_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 853) {
				console.warn("de-queueing event obj853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj853_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj853
(function(){
	window.obj853_onLoad_runningActionsCount = obj853_onLoad_runningActionsCount + 1;

	var selector = "#obj853";
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
	
		var animationType = "bounceInUp";
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj853_onLoad_runningActionsCount = window.obj853_onLoad_runningActionsCount - 1;
if (window.obj853_onLoad_runningActionsCount < 0) {
	window.obj853_onLoad_runningActionsCount = 0;
} else if (window.obj853_onLoad_runningActionsCount == 0) {
	obj853_onLoad_actionGroup2();
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
				window.obj853_onLoad_runningActionsCount = window.obj853_onLoad_runningActionsCount - 1;
if (window.obj853_onLoad_runningActionsCount < 0) {
	window.obj853_onLoad_runningActionsCount = 0;
} else if (window.obj853_onLoad_runningActionsCount == 0) {
	obj853_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj853_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj853_onLoad_activeActionGroupIndex = -1;
		$("#obj853").trigger("obj853_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 853) {
				console.warn("de-queueing event obj853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj853_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























/*
 *
 *   obj827: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj827_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj827_onLoad is still running");
	return;
}
var obj827_onLoad_runningActionsCount = 0;
var obj827_onLoad_loopCount = 0;
obj827_onLoad_actionGroup0();
});




















/*
 *
 *   obj841: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj841_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj841_onLoad is still running");
	return;
}
var obj841_onLoad_runningActionsCount = 0;
var obj841_onLoad_loopCount = 0;
obj841_onLoad_actionGroup0();
});




















/*
 *
 *   obj853: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj853_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj853_onLoad is still running");
	return;
}
var obj853_onLoad_runningActionsCount = 0;
var obj853_onLoad_loopCount = 0;
obj853_onLoad_actionGroup0();
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
	
$("#obj372").trigger('SCEventShow');
$("#obj377").trigger('SCEventShow');
$("#obj827").trigger('SCEventShow');
$("#obj824").trigger('SCEventShow');
$("#obj841").trigger('SCEventShow');
	
});