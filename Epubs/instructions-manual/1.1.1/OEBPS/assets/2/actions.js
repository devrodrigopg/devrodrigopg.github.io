pubcoder.projectID = pubcoder.projectID || "00136A85BD6F4A18B157E38DC33C660A";
pubcoder.project.id = pubcoder.project.id || "00136A85BD6F4A18B157E38DC33C660A";
pubcoder.project.title = pubcoder.project.title || "Instructions Manual";
pubcoder.page.id = pubcoder.page.id || 162;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
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
var obj173_onDrag_activeActionGroupIndex = -1;
var obj173_onDrag_runningActionsCount = 0;
var obj173_onDrag_loopCount = 0;
var obj173_onTouchDown_activeActionGroupIndex = -1;
var obj173_onTouchDown_runningActionsCount = 0;
var obj173_onTouchDown_loopCount = 0;
var obj175_onDrag_activeActionGroupIndex = -1;
var obj175_onDrag_runningActionsCount = 0;
var obj175_onDrag_loopCount = 0;
var obj175_onTouchDown_activeActionGroupIndex = -1;
var obj175_onTouchDown_runningActionsCount = 0;
var obj175_onTouchDown_loopCount = 0;
var obj183_onDrag_activeActionGroupIndex = -1;
var obj183_onDrag_runningActionsCount = 0;
var obj183_onDrag_loopCount = 0;
var obj183_onTouchDown_activeActionGroupIndex = -1;
var obj183_onTouchDown_runningActionsCount = 0;
var obj183_onTouchDown_loopCount = 0;
var obj187_onDrag_activeActionGroupIndex = -1;
var obj187_onDrag_runningActionsCount = 0;
var obj187_onDrag_loopCount = 0;
var obj187_onTouchDown_activeActionGroupIndex = -1;
var obj187_onTouchDown_runningActionsCount = 0;
var obj187_onTouchDown_loopCount = 0;
var obj189_onDrag_activeActionGroupIndex = -1;
var obj189_onDrag_runningActionsCount = 0;
var obj189_onDrag_loopCount = 0;
var obj189_onTouchDown_activeActionGroupIndex = -1;
var obj189_onTouchDown_runningActionsCount = 0;
var obj189_onTouchDown_loopCount = 0;
var obj167_onDrag_activeActionGroupIndex = -1;
var obj167_onDrag_runningActionsCount = 0;
var obj167_onDrag_loopCount = 0;
var obj167_onTouchDown_activeActionGroupIndex = -1;
var obj167_onTouchDown_runningActionsCount = 0;
var obj167_onTouchDown_loopCount = 0;
var obj199_onDrag_activeActionGroupIndex = -1;
var obj199_onDrag_runningActionsCount = 0;
var obj199_onDrag_loopCount = 0;
var obj199_onTouchDown_activeActionGroupIndex = -1;
var obj199_onTouchDown_runningActionsCount = 0;
var obj199_onTouchDown_loopCount = 0;
var obj171_onDrag_activeActionGroupIndex = -1;
var obj171_onDrag_runningActionsCount = 0;
var obj171_onDrag_loopCount = 0;
var obj171_onTouchDown_activeActionGroupIndex = -1;
var obj171_onTouchDown_runningActionsCount = 0;
var obj171_onTouchDown_loopCount = 0;
var obj211_onDrag_activeActionGroupIndex = -1;
var obj211_onDrag_runningActionsCount = 0;
var obj211_onDrag_loopCount = 0;
var obj211_onTouchDown_activeActionGroupIndex = -1;
var obj211_onTouchDown_runningActionsCount = 0;
var obj211_onTouchDown_loopCount = 0;
var obj218_onDrag_activeActionGroupIndex = -1;
var obj218_onDrag_runningActionsCount = 0;
var obj218_onDrag_loopCount = 0;
var obj218_onTouchDown_activeActionGroupIndex = -1;
var obj218_onTouchDown_runningActionsCount = 0;
var obj218_onTouchDown_loopCount = 0;
var obj220_onDrag_activeActionGroupIndex = -1;
var obj220_onDrag_runningActionsCount = 0;
var obj220_onDrag_loopCount = 0;
var obj220_onTouchDown_activeActionGroupIndex = -1;
var obj220_onTouchDown_runningActionsCount = 0;
var obj220_onTouchDown_loopCount = 0;
var obj209_onDrag_activeActionGroupIndex = -1;
var obj209_onDrag_runningActionsCount = 0;
var obj209_onDrag_loopCount = 0;
var obj209_onTouchDown_activeActionGroupIndex = -1;
var obj209_onTouchDown_runningActionsCount = 0;
var obj209_onTouchDown_loopCount = 0;
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
		
obj173_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj173_onTouchDown_activeActionGroupIndex = -1;
		$("#obj173").trigger("obj173_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 173) {
				console.warn("de-queueing event obj173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj173_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj173");
//	action: dragDrop
//	target: obj173 
dragDrop_779();
function dragDrop_779() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj173_onTouchDown_runningActionsCount = obj173_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj173');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj173_onTouchDown_runningActionsCount = window.obj173_onTouchDown_runningActionsCount - 1;
if (window.obj173_onTouchDown_runningActionsCount < 0) {
	window.obj173_onTouchDown_runningActionsCount = 0;
} else if (window.obj173_onTouchDown_runningActionsCount == 0) {
	obj173_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_779 = false;
    	var dropped_id_779;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_779 = true;
					dropped_id_779 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_779) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj173_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj173_onTouchDown_activeActionGroupIndex = -1;
		$("#obj173").trigger("obj173_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 173) {
				console.warn("de-queueing event obj173." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj173").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj173_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj175_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_onTouchDown_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj175");
//	action: dragDrop
//	target: obj175 
dragDrop_767();
function dragDrop_767() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj175_onTouchDown_runningActionsCount = obj175_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj175');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj175_onTouchDown_runningActionsCount = window.obj175_onTouchDown_runningActionsCount - 1;
if (window.obj175_onTouchDown_runningActionsCount < 0) {
	window.obj175_onTouchDown_runningActionsCount = 0;
} else if (window.obj175_onTouchDown_runningActionsCount == 0) {
	obj175_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_767 = false;
    	var dropped_id_767;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_767 = true;
					dropped_id_767 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_767) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj175_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj175_onTouchDown_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj183_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj183_onTouchDown_activeActionGroupIndex = -1;
		$("#obj183").trigger("obj183_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 183) {
				console.warn("de-queueing event obj183." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj183").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj183_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj183");
//	action: dragDrop
//	target: obj183 
dragDrop_765();
function dragDrop_765() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj183_onTouchDown_runningActionsCount = obj183_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj183');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj183_onTouchDown_runningActionsCount = window.obj183_onTouchDown_runningActionsCount - 1;
if (window.obj183_onTouchDown_runningActionsCount < 0) {
	window.obj183_onTouchDown_runningActionsCount = 0;
} else if (window.obj183_onTouchDown_runningActionsCount == 0) {
	obj183_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_765 = false;
    	var dropped_id_765;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_765 = true;
					dropped_id_765 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_765) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj183_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj183_onTouchDown_activeActionGroupIndex = -1;
		$("#obj183").trigger("obj183_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 183) {
				console.warn("de-queueing event obj183." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj183").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj183_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj187_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj187_onTouchDown_activeActionGroupIndex = -1;
		$("#obj187").trigger("obj187_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 187) {
				console.warn("de-queueing event obj187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj187_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj187");
//	action: dragDrop
//	target: obj187 
dragDrop_764();
function dragDrop_764() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj187_onTouchDown_runningActionsCount = obj187_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj187');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj187_onTouchDown_runningActionsCount = window.obj187_onTouchDown_runningActionsCount - 1;
if (window.obj187_onTouchDown_runningActionsCount < 0) {
	window.obj187_onTouchDown_runningActionsCount = 0;
} else if (window.obj187_onTouchDown_runningActionsCount == 0) {
	obj187_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_764 = false;
    	var dropped_id_764;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_764 = true;
					dropped_id_764 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_764) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj187_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj187_onTouchDown_activeActionGroupIndex = -1;
		$("#obj187").trigger("obj187_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 187) {
				console.warn("de-queueing event obj187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj187_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj189_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj189_onTouchDown_activeActionGroupIndex = -1;
		$("#obj189").trigger("obj189_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 189) {
				console.warn("de-queueing event obj189." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj189").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj189_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj189");
//	action: dragDrop
//	target: obj189 
dragDrop_762();
function dragDrop_762() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj189_onTouchDown_runningActionsCount = obj189_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj189');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj189_onTouchDown_runningActionsCount = window.obj189_onTouchDown_runningActionsCount - 1;
if (window.obj189_onTouchDown_runningActionsCount < 0) {
	window.obj189_onTouchDown_runningActionsCount = 0;
} else if (window.obj189_onTouchDown_runningActionsCount == 0) {
	obj189_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_762 = false;
    	var dropped_id_762;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_762 = true;
					dropped_id_762 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_762) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj189_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj189_onTouchDown_activeActionGroupIndex = -1;
		$("#obj189").trigger("obj189_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 189) {
				console.warn("de-queueing event obj189." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj189").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj189_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj167_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj167_onTouchDown_activeActionGroupIndex = -1;
		$("#obj167").trigger("obj167_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 167) {
				console.warn("de-queueing event obj167." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj167").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj167_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj167");
//	action: dragDrop
//	target: obj167 
dragDrop_760();
function dragDrop_760() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj167_onTouchDown_runningActionsCount = obj167_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj167');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj167_onTouchDown_runningActionsCount = window.obj167_onTouchDown_runningActionsCount - 1;
if (window.obj167_onTouchDown_runningActionsCount < 0) {
	window.obj167_onTouchDown_runningActionsCount = 0;
} else if (window.obj167_onTouchDown_runningActionsCount == 0) {
	obj167_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_760 = false;
    	var dropped_id_760;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_760 = true;
					dropped_id_760 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_760) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj167_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj167_onTouchDown_activeActionGroupIndex = -1;
		$("#obj167").trigger("obj167_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 167) {
				console.warn("de-queueing event obj167." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj167").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj167_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj199_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj199_onTouchDown_activeActionGroupIndex = -1;
		$("#obj199").trigger("obj199_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 199) {
				console.warn("de-queueing event obj199." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj199").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj199_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj199");
//	action: dragDrop
//	target: obj199 
dragDrop_758();
function dragDrop_758() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj199_onTouchDown_runningActionsCount = obj199_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj199');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj199_onTouchDown_runningActionsCount = window.obj199_onTouchDown_runningActionsCount - 1;
if (window.obj199_onTouchDown_runningActionsCount < 0) {
	window.obj199_onTouchDown_runningActionsCount = 0;
} else if (window.obj199_onTouchDown_runningActionsCount == 0) {
	obj199_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_758 = false;
    	var dropped_id_758;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_758 = true;
					dropped_id_758 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_758) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj199_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj199_onTouchDown_activeActionGroupIndex = -1;
		$("#obj199").trigger("obj199_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 199) {
				console.warn("de-queueing event obj199." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj199").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj199_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj171_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj171_onTouchDown_activeActionGroupIndex = -1;
		$("#obj171").trigger("obj171_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 171) {
				console.warn("de-queueing event obj171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj171_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj171");
//	action: dragDrop
//	target: obj171 
dragDrop_756();
function dragDrop_756() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj171_onTouchDown_runningActionsCount = obj171_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj171');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj171_onTouchDown_runningActionsCount = window.obj171_onTouchDown_runningActionsCount - 1;
if (window.obj171_onTouchDown_runningActionsCount < 0) {
	window.obj171_onTouchDown_runningActionsCount = 0;
} else if (window.obj171_onTouchDown_runningActionsCount == 0) {
	obj171_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_756 = false;
    	var dropped_id_756;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_756 = true;
					dropped_id_756 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_756) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj171_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj171_onTouchDown_activeActionGroupIndex = -1;
		$("#obj171").trigger("obj171_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 171) {
				console.warn("de-queueing event obj171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj171_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj211_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj211_onTouchDown_activeActionGroupIndex = -1;
		$("#obj211").trigger("obj211_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 211) {
				console.warn("de-queueing event obj211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj211_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj211");
//	action: dragDrop
//	target: obj211 
dragDrop_754();
function dragDrop_754() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj211_onTouchDown_runningActionsCount = obj211_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj211');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj211_onTouchDown_runningActionsCount = window.obj211_onTouchDown_runningActionsCount - 1;
if (window.obj211_onTouchDown_runningActionsCount < 0) {
	window.obj211_onTouchDown_runningActionsCount = 0;
} else if (window.obj211_onTouchDown_runningActionsCount == 0) {
	obj211_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_754 = false;
    	var dropped_id_754;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_754 = true;
					dropped_id_754 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_754) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj211_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj211_onTouchDown_activeActionGroupIndex = -1;
		$("#obj211").trigger("obj211_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 211) {
				console.warn("de-queueing event obj211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj211_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj218_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj218_onTouchDown_activeActionGroupIndex = -1;
		$("#obj218").trigger("obj218_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 218) {
				console.warn("de-queueing event obj218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj218_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj218");
//	action: dragDrop
//	target: obj218 
dragDrop_752();
function dragDrop_752() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj218_onTouchDown_runningActionsCount = obj218_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj218');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj218_onTouchDown_runningActionsCount = window.obj218_onTouchDown_runningActionsCount - 1;
if (window.obj218_onTouchDown_runningActionsCount < 0) {
	window.obj218_onTouchDown_runningActionsCount = 0;
} else if (window.obj218_onTouchDown_runningActionsCount == 0) {
	obj218_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_752 = false;
    	var dropped_id_752;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_752 = true;
					dropped_id_752 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_752) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj218_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj218_onTouchDown_activeActionGroupIndex = -1;
		$("#obj218").trigger("obj218_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 218) {
				console.warn("de-queueing event obj218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj218_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj220_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_onTouchDown_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 220) {
				console.warn("de-queueing event obj220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj220_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj220");
//	action: dragDrop
//	target: obj220 
dragDrop_749();
function dragDrop_749() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj220_onTouchDown_runningActionsCount = obj220_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj220');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj220_onTouchDown_runningActionsCount = window.obj220_onTouchDown_runningActionsCount - 1;
if (window.obj220_onTouchDown_runningActionsCount < 0) {
	window.obj220_onTouchDown_runningActionsCount = 0;
} else if (window.obj220_onTouchDown_runningActionsCount == 0) {
	obj220_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_749 = false;
    	var dropped_id_749;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_749 = true;
					dropped_id_749 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_749) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj220_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj220_onTouchDown_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 220) {
				console.warn("de-queueing event obj220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj220_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj209_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj209_onTouchDown_activeActionGroupIndex = -1;
		$("#obj209").trigger("obj209_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 209) {
				console.warn("de-queueing event obj209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj209_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj209");
//	action: dragDrop
//	target: obj209 
dragDrop_747();
function dragDrop_747() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj209_onTouchDown_runningActionsCount = obj209_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj209');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj165');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj209_onTouchDown_runningActionsCount = window.obj209_onTouchDown_runningActionsCount - 1;
if (window.obj209_onTouchDown_runningActionsCount < 0) {
	window.obj209_onTouchDown_runningActionsCount = 0;
} else if (window.obj209_onTouchDown_runningActionsCount == 0) {
	obj209_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_747 = false;
    	var dropped_id_747;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_747 = true;
					dropped_id_747 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_747) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj209_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj209_onTouchDown_activeActionGroupIndex = -1;
		$("#obj209").trigger("obj209_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 209) {
				console.warn("de-queueing event obj209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj209_onTouchDown_activeActionGroupIndex = 1;
	





















};
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
 *   obj173: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj173");
	var winTarget = document.getElementById("obj173");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj173").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj173_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj173_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj173_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj173_onTouchDown is still running");
	return;
}
var obj173_onTouchDown_runningActionsCount = 0;
var obj173_onTouchDown_loopCount = 0;
obj173_onTouchDown_actionGroup0();
});










/*
 *
 *   obj175: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj175");
	var winTarget = document.getElementById("obj175");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj175").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj175_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj175_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj175_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj175_onTouchDown is still running");
	return;
}
var obj175_onTouchDown_runningActionsCount = 0;
var obj175_onTouchDown_loopCount = 0;
obj175_onTouchDown_actionGroup0();
});










/*
 *
 *   obj183: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj183");
	var winTarget = document.getElementById("obj183");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj183").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj183_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj183_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj183_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj183_onTouchDown is still running");
	return;
}
var obj183_onTouchDown_runningActionsCount = 0;
var obj183_onTouchDown_loopCount = 0;
obj183_onTouchDown_actionGroup0();
});










/*
 *
 *   obj187: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj187");
	var winTarget = document.getElementById("obj187");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj187").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj187_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj187_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj187_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj187_onTouchDown is still running");
	return;
}
var obj187_onTouchDown_runningActionsCount = 0;
var obj187_onTouchDown_loopCount = 0;
obj187_onTouchDown_actionGroup0();
});










/*
 *
 *   obj189: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj189");
	var winTarget = document.getElementById("obj189");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj189").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj189_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj189_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj189_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj189_onTouchDown is still running");
	return;
}
var obj189_onTouchDown_runningActionsCount = 0;
var obj189_onTouchDown_loopCount = 0;
obj189_onTouchDown_actionGroup0();
});










/*
 *
 *   obj167: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj167");
	var winTarget = document.getElementById("obj167");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj167").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj167_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj167_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj167_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj167_onTouchDown is still running");
	return;
}
var obj167_onTouchDown_runningActionsCount = 0;
var obj167_onTouchDown_loopCount = 0;
obj167_onTouchDown_actionGroup0();
});










/*
 *
 *   obj199: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj199");
	var winTarget = document.getElementById("obj199");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj199").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj199_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj199_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj199_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj199_onTouchDown is still running");
	return;
}
var obj199_onTouchDown_runningActionsCount = 0;
var obj199_onTouchDown_loopCount = 0;
obj199_onTouchDown_actionGroup0();
});










/*
 *
 *   obj171: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj171");
	var winTarget = document.getElementById("obj171");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj171").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj171_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj171_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj171_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj171_onTouchDown is still running");
	return;
}
var obj171_onTouchDown_runningActionsCount = 0;
var obj171_onTouchDown_loopCount = 0;
obj171_onTouchDown_actionGroup0();
});










/*
 *
 *   obj211: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj211");
	var winTarget = document.getElementById("obj211");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj211").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj211_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj211_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj211_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj211_onTouchDown is still running");
	return;
}
var obj211_onTouchDown_runningActionsCount = 0;
var obj211_onTouchDown_loopCount = 0;
obj211_onTouchDown_actionGroup0();
});










/*
 *
 *   obj218: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj218");
	var winTarget = document.getElementById("obj218");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj218").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj218_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj218_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj218_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj218_onTouchDown is still running");
	return;
}
var obj218_onTouchDown_runningActionsCount = 0;
var obj218_onTouchDown_loopCount = 0;
obj218_onTouchDown_actionGroup0();
});










/*
 *
 *   obj220: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj220");
	var winTarget = document.getElementById("obj220");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj220").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj220_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj220_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj220_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj220_onTouchDown is still running");
	return;
}
var obj220_onTouchDown_runningActionsCount = 0;
var obj220_onTouchDown_loopCount = 0;
obj220_onTouchDown_actionGroup0();
});










/*
 *
 *   obj209: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj209");
	var winTarget = document.getElementById("obj209");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj209").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj209_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj209_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj209_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj209_onTouchDown is still running");
	return;
}
var obj209_onTouchDown_runningActionsCount = 0;
var obj209_onTouchDown_loopCount = 0;
obj209_onTouchDown_actionGroup0();
});







































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
	
$("#obj163").trigger('SCEventShow');
$("#obj165").trigger('SCEventShow');
$("#obj173").trigger('SCEventShow');
$("#obj175").trigger('SCEventShow');
$("#obj183").trigger('SCEventShow');
$("#obj187").trigger('SCEventShow');
$("#obj189").trigger('SCEventShow');
$("#obj167").trigger('SCEventShow');
$("#obj199").trigger('SCEventShow');
$("#obj171").trigger('SCEventShow');
$("#obj211").trigger('SCEventShow');
$("#obj218").trigger('SCEventShow');
$("#obj220").trigger('SCEventShow');
$("#obj209").trigger('SCEventShow');
$("#obj4").trigger('SCEventShow');
$("#obj6").trigger('SCEventShow');
$("#obj10").trigger('SCEventShow');
$("#obj12").trigger('SCEventShow');
$("#obj83").trigger('SCEventShow');
$("#obj266").trigger('SCEventShow');
	
});