pubcoder.projectID = pubcoder.projectID || "00136A85BD6F4A18B157E38DC33C660A";
pubcoder.project.id = pubcoder.project.id || "00136A85BD6F4A18B157E38DC33C660A";
pubcoder.project.title = pubcoder.project.title || "Instructions Manual";
pubcoder.page.id = pubcoder.page.id || 3;
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
var obj12_onTouchUp_activeActionGroupIndex = -1;
var obj12_onTouchUp_runningActionsCount = 0;
var obj12_onTouchUp_loopCount = 0;
var obj83_onTouchUp_activeActionGroupIndex = -1;
var obj83_onTouchUp_runningActionsCount = 0;
var obj83_onTouchUp_loopCount = 0;
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
	
SCPhotoGallery('#obj150', 1024, 768, true, true, false, true, 4); 
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
		
obj12_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12_onTouchUp_activeActionGroupIndex = -1;
		$("#obj12").trigger("obj12_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12) {
				console.warn("de-queueing event obj12." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12_onTouchUp_activeActionGroupIndex = 0;
	









//	action: openURL
openUrl_592();
function openUrl_592() {
	window.obj12_onTouchUp_runningActionsCount = obj12_onTouchUp_runningActionsCount + 1;
	XPUB.openUrl("http://www.studio361.it", true);
	window.obj12_onTouchUp_runningActionsCount = window.obj12_onTouchUp_runningActionsCount - 1;
if (window.obj12_onTouchUp_runningActionsCount < 0) {
	window.obj12_onTouchUp_runningActionsCount = 0;
} else if (window.obj12_onTouchUp_runningActionsCount == 0) {
	obj12_onTouchUp_actionGroup1();
}
}












};
obj12_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12_onTouchUp_activeActionGroupIndex = -1;
		$("#obj12").trigger("obj12_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12) {
				console.warn("de-queueing event obj12." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj83_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83_onTouchUp_activeActionGroupIndex = -1;
		$("#obj83").trigger("obj83_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83) {
				console.warn("de-queueing event obj83." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83_onTouchUp_activeActionGroupIndex = 0;
	









//	action: openURL
openUrl_593();
function openUrl_593() {
	window.obj83_onTouchUp_runningActionsCount = obj83_onTouchUp_runningActionsCount + 1;
	XPUB.openUrl("http://www.sudio361.it", true);
	window.obj83_onTouchUp_runningActionsCount = window.obj83_onTouchUp_runningActionsCount - 1;
if (window.obj83_onTouchUp_runningActionsCount < 0) {
	window.obj83_onTouchUp_runningActionsCount = 0;
} else if (window.obj83_onTouchUp_runningActionsCount == 0) {
	obj83_onTouchUp_actionGroup1();
}
}












};
obj83_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83_onTouchUp_activeActionGroupIndex = -1;
		$("#obj83").trigger("obj83_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83) {
				console.warn("de-queueing event obj83." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83_onTouchUp_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		































































/*
 *
 *   obj12: Event Touch Up
 *
 */
$("#obj12").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj12").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj12").unbind("obj12_onTouchDown_ended", startActionList);
	    if (window.obj12_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12_onTouchUp is still running");
	return;
}
var obj12_onTouchUp_runningActionsCount = 0;
var obj12_onTouchUp_loopCount = 0;
obj12_onTouchUp_actionGroup0();
	};
	if ((window['obj12_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj12_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj12").bind("obj12_onTouchDown_ended", startActionList);
	}
});










/*
 *
 *   obj83: Event Touch Up
 *
 */
$("#obj83").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj83").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj83").unbind("obj83_onTouchDown_ended", startActionList);
	    if (window.obj83_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83_onTouchUp is still running");
	return;
}
var obj83_onTouchUp_runningActionsCount = 0;
var obj83_onTouchUp_loopCount = 0;
obj83_onTouchUp_actionGroup0();
	};
	if ((window['obj83_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj83_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj83").bind("obj83_onTouchDown_ended", startActionList);
	}
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
	
$("#obj26").trigger('SCEventShow');
$("#obj140").trigger('SCEventShow');
$("#obj150").trigger('SCEventShow');
$("#obj4").trigger('SCEventShow');
$("#obj6").trigger('SCEventShow');
$("#obj10").trigger('SCEventShow');
$("#obj12").trigger('SCEventShow');
$("#obj83").trigger('SCEventShow');
$("#obj266").trigger('SCEventShow');
	
});