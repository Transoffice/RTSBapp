Ext.define('RTSBapp.view.ContactDetail',{
	extend:'Ext.Panel',
	xtype:['contactDetail','widget.contactDetail'],
	config:{
	    styleHtmlContent:true,
	    scrollable:'Vertical',
	    title:'Details',
	    tpl: 'Contact: {firstName} {lastName}, Phone Number: {phone}, Email: {email}',

	    items: [
        {
            xtype: 'video',
            html: [
                '<div style="background-image:url( {email} );height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;">'

            ].join("")
        },]

	}
});