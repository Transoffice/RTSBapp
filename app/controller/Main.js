Ext.define('RTSBapp.controller.Main',{
	extend:'Ext.app.Controller',
	
	config:{
		refs:{
			main:'mainPanel'
		},
		control:{
			'contactList':{
				disclose:'showDetail'
			}
		}
	},

	showDetail:function(list,record){
		this.getMain().push({
			xtype:'contactDetail',
			title:record.fullName(),
			data: record.data
		});
	}
});