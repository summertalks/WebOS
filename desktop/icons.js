$(function() {
	$("#draggable").draggable({
		containment: "#desktop",
		scroll: false,
		snap: true,
		grid: [
			20,
			20
		]
	});

	$("#draggable2").draggable({
		containment: "#desktop",
		scroll: false,
		snap: true,
		grid: [
			20,
			20
		]
	});
});

$(function() {
	$("#dialog").dialog({
		autoOpen: false,
		show: {
			effect: "scale",
			duration: 1000
		},
		hide: {
			effect: "explode",
			duration: 700
		}
	});

	$("#item1").click(function() {
		$("#dialog").dialog("open");
	});
});

$(function(){
	$.contextMenu({
		selector: '#desktop', 
		callback: function(key, options) {
			var m = "clicked: " + key;
			window.console && console.log(m) || alert(m); 
		},
		items: {
			"edit": {name: "Edit", icon: "edit"},
			"cut": {name: "Cut", icon: "cut"},
			"copy": {name: "Copy", icon: "copy"},
			"paste": {name: "Paste", icon: "paste"},
			"delete": {name: "Delete", icon: "delete"},
			"sep1": "---------",
			"quit": {name: "Quit", icon: "quit"}
		}
	});

	$('#desktop').on('click', function(e){
		console.log('clicked', this);
	})
});