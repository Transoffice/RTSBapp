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

Ext.define('RTSB.view.EBGEN', {
    extend: 'Ext.navigation.View',

    config: {
        items: [
            {
                xtype: 'tabpanel',
                items: [
                    {
                        xtype: 'container',
                        title: 'Map',
                        html: [
                                '<div style="background-image:url(resources/loading/RTSB_Eastbound_EU-BALTIKUM-GUS.png);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;">'

                        ].join("")
                    },
                    {
                        xtype: 'container',
                        title: 'Details',
                        html: [
                                '<div style="background-image:url(resources/loading/DBGDetails.jpg);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;">'

                        ].join("")
                    }
                ]
            }
        ]
    }

});