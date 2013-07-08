/*
 * File: app/view/MyContainer110.js
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

Ext.define('TouchTreeGrid.view.MyContainer110', {
    extend: 'Ext.Container',
    alias: 'widget.mycontainer110',

    config: {
        itemId: 'GridTest',
        items: [
            {
                xtype: 'titlebar',
                listeners: {
                    tap: {
                        fn: function() {
                              this.fireEvent('gridhelp', this.up('container'));
                          },
                        element: 'element'
                    }
                },
                docked: 'top',
                itemId: 'maintitlebar',
                minHeight: '2.2em',
                items: [
                    {
                        xtype: 'image',
                        docked: 'left',
                        height: '1.5em',
                        itemId: 'gridhelp',
                        margin: '.4em 0 0 .2em',
                        width: '1.5em',
                        src: './resources/images/question.png'
                    }
                ]
            }
        ]
    }

});