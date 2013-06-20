/*
 * File: app/view/NestedList.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('RTSBapp.view.EastBoundRu', {
    extend: 'Ext.navigation.View',

    config: {
        navigationBar: {
            hidden: true
        },
        title: 'EastBound List',
        items: [
            {
                items: [

                    {
                        xtype: 'button',
                        itemId: 'mybutton19',
                        text: 'Europa –> Weißrussland  –> GUS',

                    },
                    {
                        xtype: 'button',
                        itemId: 'mybutton20',
                        text: 'Europa –> Baltikum –> GUS'
                    },
                    {
                        xtype: 'button',
                        itemId: 'mybutton21',
                        text: 'Europa –> Ukraine –> GUS'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMybutton19Tap',
                event: 'tap',
                delegate: '#mybutton19',
                useToolbar: false
            },
            {
                fn: 'onMybutton20Tap',
                event: 'tap',
                delegate: '#mybutton20'
            },
            {
                fn: 'onMybutton21Tap',
                event: 'tap',
                delegate: '#mybutton21'
            }
        ]
    },

    onMybutton19Tap: function (button, e, eOpts) {
        this.push(Ext.create("RTSBapp.view.EWGRU"), {
            title: "EWG"
        });
    },
    onMybutton20Tap: function (button, e, eOpts) {
        this.push(Ext.create("RTSBapp.view.EBGRU"), {
            title: "EBG"
        });
    },
    onMybutton21Tap: function (button, e, eOpts) {
        this.push(Ext.create("RTSBapp.view.EUGRU"), {
            title: "EUG"
        });
    }
});