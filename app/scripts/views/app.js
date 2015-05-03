require(["views/listmanager"], function (evtman) {
	
console.log(evtman);

	var listmanager = new evtman.ManageList("test/foo");

    function displayList(evt) {
        console.log(evt.message);
    }

    listmanager.addItem("test/foo", displayList);

    listmanager.publish("test/foo", { message: "Hello this is a custom event" });

    listmanager.removeItem("test/foo", displayList);

    listmanager.addItem("test/foo2", displayList);

    listmanager.publish("test/foo2", { message: "this should not be seen" });

   // listmanager.removeItem("test/foo", displayList);
   // console.log(evtman.subscribers);


});