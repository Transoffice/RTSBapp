Ext.define('RTSBapp.view.DeContact', {
    extend: 'Ext.navigation.View',
    xtype: ['mainPanel', 'widget.mainPanel'],
    require: ['RTSBapp.view.ContactList', 'RTSBapp.view.ContactDetail'],

    config: {
        items: [{
            xtype: 'contactList'
        }]
    }

});