/*
 * File: app/view/EWG.js
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

Ext.define('RTSBapp.view.CNEU', {
    extend: 'Ext.navigation.View',
    requires: ['Ext.TitleBar', 'Ext.ux.PinchZoomImage'],
    config: {
        navigationBar: {
            hidden: true
        },
        items: [
            {
                xtype: 'tabpanel',
                items: [
                    {
                        xtype: 'container',
                        title: 'Map',
                        style: 'background-color:#000',
                        items: [
                            {
                                xtype: 'pinchzoomimage',
                                layout: 'card',
                                centered: true,
                                style: 'background-color:#000;overflow: hidden;',
                                height: 383,
                                maxHeight: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                minWidth: '100%',
                                src: 'resources/loading/RTSB_Westbound_CHINA-EU.png',

                                //src: 'http://127.0.0.1/touch/apps/RTSB/resources/loading/RTSBapp_loading_bg.png'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Details',

                        items: [
                                {
                                    xtype: 'pinchzoomimage',
                                    layout: 'card',
                                    centered: true,
                                    style: 'background-color:#000;overflow: hidden;',
                                    height: 383,
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    minWidth: '100%',
                                    src: 'resources/loading/DBGDetails.jpg',

                                    //src: 'http://127.0.0.1/touch/apps/RTSB/resources/loading/RTSBapp_loading_bg.png'
                                }
                        ]
                    }
                ]
            }
        ]
    }

});