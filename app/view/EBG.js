/*
 * File: app/view/EBG.js
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

Ext.define('RTSBapp.view.EBG', {
    extend: 'Ext.navigation.View',
    requires: [
        'Ext.TitleBar',
        'Ext.ux.PinchZoomImage',
        'Ext.Video'
    ],
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
                                // id: 'landscapeFormFields',
                                id: 'portraitFormFields',
                                xtype: 'pinchzoomimage',
                                layout: 'card',
                                centered: true,
                                style: 'background-color:#000;overflow: hidden;',
                                height: '100%',
                                width: '100%',
                                //maxHeight: '100%',
                                //maxWidth: '100%',
                                //minHeight: '100%',
                                //minWidth: '100%',
                                src: 'resources/loading/RTSB_Eastbound_EU-BALTIKUM-GUS.png',

                                //src: 'http://127.0.0.1/touch/apps/RTSB/resources/loading/RTSBapp_loading_bg.png'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Details',
                        scrollable: 'vertical',
                        style: 'background-color:#000;overflow: hidden;',
                        html: [
                                '<div style="background-image:url(resources/loading/Details_bg.png);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;">'

                        ].join(""),
                        items: [
                                {
                                    xtype: 'image',
                                    layout: 'card',
                                    centered: true,
                                    //style: 'background-color:#000;overflow: hidden;',
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    minWidth: '100%',
                                    // src: 'resources/loading/Details_bg.png',
                                    centered: true,
                                    html: '<p>' +
                                            '<strong><font size="5">Baltikum / Tallinn / Riga / Vilnius:</font></strong><br><br>' +
                                            '<font size="3">- Ueberseetransporte in die baltischen Haefen und Umladung <br>' +
                                            '- Kommissionierung<br>' +
                                            '- Lagerung<br>' +
                                            '- Verzollung<br>' +
                                            '- Deklarations<br>' +
                                            '- Zollangelegenheiten<br><br>' +
                                            '- Blockzuege fuer Projektlogistik<br>' +
                                            '- Bereitstellung von EVRU, LVRU Container</font><br>' +
                                            '</p>',
                                    styleHtmlContent: true,
                                    //src: 'http://127.0.0.1/touch/apps/RTSB/resources/loading/Details_bg.png'
                                }
                        ]
                    }
                ]
            }
        ]
    }

});