/*
 * File: app/view/CensusDetailPanel.js
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

Ext.define('TouchTreeGrid.view.CensusDetailPanel', {
    extend: 'Ext.Container',
    alias: 'widget.censusdetailpanel',

    requires: [
        'Ext.ux.PinchZoomImage'
    ],

    config: {
        cls: 'censusdetailpanel',
        scrollable: false,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                hidden: false,
                padding: '.4em 0 0 0',
                layout: {
                    align: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'spacer',
                        width: 10
                    },
                    {
                        xtype: 'label',
                        itemId: 'censusdetaillabel',
                        maxWidth: '10em',
                        style: 'color : white'
                    },
                    {
                        xtype: 'button',
                        itemId: 'censusdetailbackbtn',
                        maxWidth: 80,
                        minWidth: 80,
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                activeItem: 2,
                docked: 'top',
                height: '100%',
                hidden: false,
                items: [
                    {
                        xtype: 'container',
                        title: 'Map',
                        hidden: false,
                        items: [
                            {
                                xtype: 'container',
                                cls: 'censusmapSet',
                                height: '70em',
                                maxHeight: '70em',
                                minHeight: '70em',
                                layout: {
                                    type: 'vbox'
                                },
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        height: '70em',
                                        hidden: false,
                                        itemId: 'censusmapSet',
                                        maxHeight: '70em',
                                        minHeight: '70em',
                                        scrollable: false,
                                        items: [
                                            {
                                                xtype: 'pinchzoomimage',
                                                height: '40em',
                                                itemId: 'censusMapImage',
                                                src: './resources/images/RTSBapp_loading_bg.png'
                                            },
                                            {
                                                xtype: 'label',
                                                hidden: true,
                                                itemId: 'censusMapImage2'
                                            },
                                            {
                                                xtype: 'textfield',
                                                hidden: true,
                                                inputCls: 'detailtextfields',
                                                label: 'Field',
                                                labelWidth: '60%',
                                                readOnly: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Details',
                        hidden: false,
                        items: [
                            {
                                xtype: 'container',
                                cls: 'censusDetailSet',
                                docked: 'top',
                                height: '70em',
                                hidden: false,
                                maxHeight: '70em',
                                minHeight: '70em',
                                layout: {
                                    type: 'fit'
                                },
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        height: '70em',
                                        hidden: false,
                                        itemId: 'censusDetailSet',
                                        maxHeight: '70em',
                                        minHeight: '70em',
                                        layout: {
                                            type: 'fit'
                                        },
                                        scrollable: false,
                                        items: [
                                            {
                                                xtype: 'image',
                                                itemId: 'censusDetailImage',
                                                src: './resources/images/RTSBapp_loading_bg.png'
                                            },
                                            {
                                                xtype: 'textfield',
                                                hidden: true,
                                                label: 'Field'
                                            },
                                            {
                                                xtype: 'pinchzoomimage',
                                                height: '100%',
                                                hidden: false,
                                                itemId: 'censusDetailImage2'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                src: './resources/images/RTSB_Eastbound_EU-BALTIKUM-GUS.png',
                                height: '100%',
                                hidden: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Routs',
                        hidden: false,
                        items: [
                            {
                                xtype: 'toolbar',
                                docked: 'top',
                                minHeight: '1.5em',
                                style: 'background: #5e6266; font-size: .8em;',
                                items: [
                                    {
                                        xtype: 'label',
                                        docked: 'left',
                                        html: 'Number',
                                        style: 'text-align: right; padding-right: 1em; padding-top: .1em;',
                                        width: '66.666%'
                                    },
                                    {
                                        xtype: 'label',
                                        docked: 'right',
                                        hidden: true,
                                        html: 'Percent',
                                        style: 'padding-right: 1em; padding-top: .1em;'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                cls: 'censusfieldset1',
                                height: '70em',
                                itemId: 'censusscrollcont',
                                maxHeight: '70em',
                                minHeight: '70em',
                                layout: {
                                    type: 'hbox'
                                },
                                scrollable: 'vertical',
                                items: [
                                    {
                                        xtype: 'container',
                                        flex: 2,
                                        cls: 'censusfieldset1',
                                        height: '70em',
                                        maxHeight: '70em',
                                        minHeight: '70em',
                                        layout: {
                                            type: 'vbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                flex: 1,
                                                height: '70em',
                                                itemId: 'censusfieldset1',
                                                maxHeight: '70em',
                                                minHeight: '70em',
                                                scrollable: false,
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        inputCls: 'detailtextfields',
                                                        label: 'Field',
                                                        labelWidth: '60%',
                                                        readOnly: true
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        flex: 1,
                                        cls: 'censusfieldset2',
                                        height: '70em',
                                        maxHeight: '70em',
                                        minHeight: '70em',
                                        layout: {
                                            type: 'vbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                flex: 1,
                                                height: '70em',
                                                hidden: true,
                                                itemId: 'censusfieldset2',
                                                maxHeight: '70em',
                                                minHeight: '70em',
                                                scrollable: false,
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        hidden: true,
                                                        readOnly: true
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Test',
                        height: 414,
                        hidden: true,
                        scrollable: true
                    }
                ],
                tabBar: {
                    docked: 'top',
                    layout: {
                        pack: 'center',
                        type: 'hbox'
                    }
                }
            }
        ]
    }

});