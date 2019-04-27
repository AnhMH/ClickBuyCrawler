var TFS = {
	init: function(){
		this.Main.init();
	},
}
$(document).ready(function(){
	TFS.init();
})

TFS.Main = {
	init: function(){
		this.tfsActionPage();
	},
	tfsActionPage : function(){
		$('.careUser > a').click(function(){
			$(this).next().toggleClass('open')
		});
		$(document).on('click','.userMB', function(){
			$(this).parent().toggleClass('open')
		})
	}
}