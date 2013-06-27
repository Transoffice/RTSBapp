Ext.define('RTSBapp.view.ContactList',{
	extend:'Ext.List',
	xtype:['contactList','widget.contactList'],
	config:{
		title:'Contacts',
		grouped:true,
		indexBar:false,
		itemTpl: '{firstName} {lastName}',
		store:'StoreContats',
		onItemDisclosure:true
	}
});