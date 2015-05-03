define(function () {

    var subscribers = {};

    function ManageList(name) {
    	this.name = name;

    }
    // Model
    ManageList.prototype.addItem = function(type, fn) {
        if (!subscribers[type]) {
            subscribers[type] = [];
        }

        if (subscribers[type].indexOf(fn) == -1) {
            subscribers[type].push(fn);
        }
    };
    // Model	
    ManageList.prototype.removeItem = function(type, fn) {
    	// subscribers['test/foo'] = {};
        var listeners = subscribers[type];

        if (!listeners) {
            return;
        }

        var index = listeners.indexOf(fn);

        if (index > -1) {
            listeners.splice(index, 1);
        }   
    };
    // Controller
    ManageList.prototype.publish = function(type, evtObj) {
        if (!subscribers[type]) {
        	// console.log('i am here');
            return;
        }

        if (!evtObj.type) {
        	console.log('i am here2');
            evtObj.type = type;
        }

        var listeners = subscribers[type];

        for (var ii = 0, ll = listeners.length; ii < ll; ii++) {
            listeners[ii](evtObj);
        }
    };

    return {
        ManageList: ManageList
    };

});