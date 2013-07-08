/*
 * File: app/controller/ListsController.js
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

Ext.define('TouchTreeGrid.controller.ListsController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Dow2012',
            'Dow2012Tree'
        ],
        stores: [
            'Dow2012grouper',
            'Dow2012',
            'DynamicStore',
            'dow2012TreeStore',
            'Dow2012Horiz'
        ],
        views: [
            'ListsContainer'
        ],

        refs: {
            dow2012: '#dow2012',
            listscontainer: {
                autoCreate: true,
                selector: 'listscontainer',
                xtype: 'listscontainer'
            }
        },

        control: {
            "tabpanel#liststabpanel": {
                activeitemchange: 'onListsTabpanelActiveItemChange'
            },
            "container#dow2012grouper2": {
                expCollapse: 'onDow2012grouper2ExpCollapse'
            },
            "container#dow2012horiz": {
                leafItemTap: 'onHorizGridLeafItemTap'
            },
            "container#dow2012Dynamic": {
                leafItemTap: 'onDynamicGridLeafItemTap'
            }
        }
    },

    onListsTabpanelActiveItemChange: function(container, value, oldValue, eOpts) {
        var me = this;
        var newcont = value.getItemId();
        var grid, gridcont, numNodes, mydata, numRecords, gridListItemId;

        gridcont = value.down('touchtreegrid');
        gridListItemId = '#'+gridcont.getListItemId();
        grid = gridcont.down(gridListItemId);

        if (newcont === 'dow2012Cont'  || newcont === 'dow2012Basic2Cont'){
            numRecords = grid.getStore().getData().length;
            if (numRecords === 0) {
                Ext.Viewport.setMasked({
                    xtype: 'loadmask',
                    message: 'Loading Basic...'
                });
                grid.getStore().load();
                gridcont.doRefreshList();
                Ext.Viewport.setMasked(false);
            }  
        }

        if (newcont === 'dow2012grouperCont'){
            numRecords = grid.getStore().getData().length;
            if (numRecords === 0) {
                Ext.Viewport.setMasked({
                    xtype: 'loadmask',
                    message: 'Loading Grouper ...'
                });
                grid.getStore().load();
                gridcont.doRefreshList();
                Ext.Viewport.setMasked(false);
            }  else {grid.refresh();}
            }

            if (newcont === 'dow2012grouper2Cont'){
                numRecords = grid.getStore().getData().length;
                if (numRecords === 0) {
                    Ext.Viewport.setMasked({
                        xtype: 'loadmask',
                        message: 'Loading Grouper#2 ...'
                    });
                    this.loadDow2012Grouper2Store(gridcont, grid);  
                }  else {grid.refresh();}
                }


                if (newcont === 'dow2012HorizCont'){
                    numRecords = grid.getStore().getData().length;
                    if (numRecords === 0) {
                        Ext.Viewport.setMasked({
                            xtype: 'loadmask',
                            message: 'Loading Horiz ...'
                        });
                        grid.getStore().load();
                        gridcont.doRefreshList();
                        Ext.Viewport.setMasked(false);
                    }  
                }

                if (newcont === 'dow2012DynamicCont'){
                    // Reload each time pressed for dynamic grid example
                    this.loadDow2012DynamicStore(gridcont, grid);  

                }

    },

    onDow2012grouper2ExpCollapse: function(params) {
        // For really large data sets seems to expand/collapse faster by refreshing the treestore with appropriate collapse level
        var collapseLevel = params.collapseLevel;
        var list = params.list;
        var gridcont = params.gridcont;

        gridcont.collapseLevel = collapseLevel;

        this.loadDow2012Grouper2Store(gridcont, list);

        list.setMasked(false);

    },

    onHorizGridLeafItemTap: function(me, list, index, target, record, e) {
        // Example of how we can code to only act if CloseDate element touched
        var myDate = Ext.Date.format(record.get('CloseDate'), "n/j/Y");
        if (myDate !== e.target.innerText) {return;}

        Ext.Msg.alert('You tapped: ' + myDate);
        console.log('onHorizGridLeafItemTap record tapped:');
        console.log(record);

    },

    onDynamicGridLeafItemTap: function(me, list, index, target, record, e) {
        // Example of how we can code to only act if CloseDate element touched
        var myDate = Ext.Date.format(record.get('CloseDate'), "n/j/Y");
        if (myDate !== e.target.innerText) {return;}

        Ext.Msg.alert('You tapped: ' + myDate);
        console.log('onDynamicGridLeafItemTap record tapped:');
        console.log(record);

    },

    loadDow2012Grouper2Store: function(gridcont, grid) {
        var me = this;
        var gridurl = 'data/dow2012categ.json';

        // Passing loadStoreInPostProcess=true because for this example we will 
        // be loading dow2012TreeStore (flatfile format) and then post-processing
        // into treestore format 
        commonController.loadStore(me, gridcont, gridurl, 'Loading Grouper#2...', true);

    },

    loadDow2012DynamicStore: function(gridcont, grid) {
        var me = this;
        var gridurl = 'data/dow2012dynamicCss.json';

        commonController.loadDynamicStore(me, gridcont, gridurl, 'Loading Dynamic...', false);

    }

});