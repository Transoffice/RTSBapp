/*
 * File: app/view/RTSBapp.js
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

Ext.define('TouchTreeGrid.view.RTSBapp', {
    extend: 'Ext.Container',
    alias: 'widget.rtsbapp',

    requires: [
        'TouchTreeGrid.view.TasksContainer',
        'TouchTreeGrid.view.CensusContainer',
        'TouchTreeGrid.view.ProjectContainer',
        'TouchTreeGrid.view.MyContainer110',
        'Ext.ux.PinchZoomImage'
    ],

    config: {
        itemId: 'rtsbapp',
        items: [
            {
                xtype: 'tabpanel',
                docked: 'bottom',
                height: '100%',
                itemId: 'RTSBPanel',
                items: [
                    {
                        xtype: 'container',
                        title: 'Home',
                        iconCls: 'home',
                        height: '100%',
                        itemId: 'HomePanel',
                        items: [
                            {
                                xtype: 'tasksContainer'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'View',
                        iconCls: 'star',
                        itemId: 'ViewPanel',
                        items: [
                            {
                                xtype: 'tabpanel',
                                height: '100%',
                                id: 'Languag',
                                itemId: 'LanguagePanel',
                                layout: {
                                    animation: 'slide',
                                    type: 'card'
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        title: 'Deutsch',
                                        itemId: 'DeutschPanel',
                                        items: [
                                            {
                                                xtype: 'censusContainer',
                                                height: '100%'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        title: 'English',
                                        itemId: 'EnglishPanel',
                                        items: [
                                            {
                                                xtype: 'censusContainer',
                                                height: '100%'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        title: 'Russian',
                                        itemId: 'RussianPanel',
                                        items: [
                                            {
                                                xtype: 'censusContainer',
                                                height: '100%'
                                            }
                                        ]
                                    }
                                ],
                                tabBar: {
                                    docked: 'top',
                                    id: 'langege',
                                    layout: {
                                        pack: 'center',
                                        type: 'hbox'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Impressum',
                        iconCls: 'info',
                        itemId: 'Impressum',
                        items: [
                            {
                                xtype: 'projectContainer',
                                height: '100%'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Impr',
                        iconCls: 'info',
                        itemId: 'Impr',
                        items: [
                            {
                                xtype: 'mycontainer110'
                            }
                        ]
                    }
                ],
                tabBar: {
                    docked: 'bottom',
                    id: 'RTSBhm'
                }
            }
        ]
    }

});