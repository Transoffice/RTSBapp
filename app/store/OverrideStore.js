/*
 * File: app/store/OverrideStore.js
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

Ext.define('RTSBapp.store.OverrideStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.overrideStore',

    requires: [
        'RTSBapp.model.Task'
    ],

    config: {
        autoLoad: true,
        model: 'RTSBapp.model.Task',
        storeId: 'overrideStore',
        defaultRootProperty: 'items',
        root: {
            items: [
                {
                    text: 'Today',
                    items: [
                        {
                            text: 'Mow Grass',
                            leaf: true
                        },
                        {
                            text: 'Buy Groceries',
                            leaf: true
                        },
                        {
                            text: 'Watch Game',
                            leaf: true
                        }
                    ]
                },
                {
                    text: 'Tomorrow',
                    items: [
                        {
                            text: 'Frisbee',
                            leaf: true
                        },
                        {
                            text: 'Cookout',
                            leaf: true
                        }
                    ]
                },
                {
                    text: 'This week',
                    items: [
                        {
                            text: 'Call Mom',
                            leaf: true
                        },
                        {
                            text: 'Study',
                            items: [
                                {
                                    text: 'Calculus',
                                    leaf: true
                                },
                                {
                                    text: 'Physics',
                                    leaf: true
                                },
                                {
                                    text: 'History',
                                    leaf: true
                                }
                            ]
                        }
                    ]
                },
                {
                    text: 'Later',
                    items: [
                        {
                            text: 'Buy Clothes',
                            leaf: true
                        }
                    ]
                }
            ]
        }
    }
});