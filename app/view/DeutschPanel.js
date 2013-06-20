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

Ext.define('RTSBapp.view.DeutschPanel', {
    extend: 'Ext.navigation.View',
    initialize: function () {
        var me = this;
        me.callParent(arguments);
    },
    config: {
        navigationBar: {
            hidden: true
        },
        fullscreen: true,
        title: 'Deutsch Panel',
        items: [
            {
                xtype: 'panel',
                minHeight: '100%',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'EastBoundButton',
                        minHeight: '50%',
                        text: 'EastBound'
                    },
                    {
                        xtype: 'button',
                        itemId: 'ChinaButton',
                        minHeight: '50%',
                        text: 'China'
                    }
                ]
            },
                        {
                            xtype: 'toolbar',
                            docked: 'bottom',
                            layout: {
                                pack: 'center',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'Impressum',
                                    icon: 'true',
                                    iconAlign: 'center',
                                    iconCls: 'info'
                                }
                            ]
                        }
        ],
        listeners: [
            {
                fn: 'onEastBoundTap',
                event: 'tap',
                delegate: '#EastBoundButton'
            },
            {
                fn: 'OnChinaTap',
                event: 'tap',
                delegate: '#ChinaButton'
            },
            {
                fn: 'OnImpressumClick',
                event: 'tap',
                delegate: '#Impressum'
            },
        ]
    },

    onEastBoundTap: function (button, e, eOpts) {
        this.push(Ext.create("RTSBapp.view.EastBoundDe"), {
            title: "EastBound Panel"
        });
    },

    OnChinaTap: function (button, e, eOpts) {
        this.push(Ext.create("RTSBapp.view.CNEU"), {
            title: "EastBound Panel"
        });
    },
    OnImpressumClick: function (button, e, eOpts) {
        if (!this.popup) {
            this.popup = Ext.Viewport.add({
                xtype: 'myoverlay'
            });
        }
        this.popup.show();
    }

});