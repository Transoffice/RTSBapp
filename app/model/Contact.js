Ext.define('RTSBapp.model.Contact',{
	extend: 'Ext.data.Model',
	
	config:{
		fields:[
		    {name:'firstName', type:'string'},
		    {name:'lastName', type:'string'},
		    {name:'phone',type:'string'},
		    {name:'email',type:'string'}
		]
	},
	
	fullName:function(){
		var data = this.data;
		return data.firstName+' '+data.lastName;
	}
});