/*
 * File: app/controller/TasksController.js
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

Ext.define('TouchTreeGrid.controller.TasksController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Task'
        ],
        stores: [
            'TaskAccordion',
            'Task2Store',
            'Task3Store'
        ],
        views: [
            'TasksContainer'
        ],

        control: {
            "tabpanel#tasksTabPanel": {
                activeitemchange: 'onTasksTabpanelActiveItemChange'
            },
            "container#task2": {
                leafItemTap: 'onTask2LeafItemTap',
                nodeItemTap: 'onTask2NodeItemTap'
            },
            "container#task3": {
                leafItemTap: 'onTask3LeafItemTap'
            }
        }
    },

    onTasksTabpanelActiveItemChange: function(container, value, oldValue, eOpts) {
        var me = this;
        var newcont = value.getItemId();
        var grid, gridcont, numNodes, mydata, numRecords, gridListItemId;

        gridcont = value.down('touchtreegrid');
        gridListItemId = '#'+gridcont.getListItemId();
        grid = gridcont.down(gridListItemId);

        if (newcont === 'task2cont'){
            Ext.Msg.alert('Collapse disabled!');
        }
        if (newcont === 'task3cont'){
            grid.getScrollable().getScroller().setDisabled(true);
            Ext.Msg.alert('Non-scrolling!');    
        }

    },

    onTask2LeafItemTap: function(me, list, index, target, record, e) {
        Ext.Msg.alert('You tapped leaf! : ' + record.get('text'));

    },

    onTask2NodeItemTap: function(me, list, index, target, record, e) {
        Ext.Msg.alert('You tapped Node! : ' + record.get('text'));

    },

    onTask3LeafItemTap: function(me, list, index, target, record, e) {
        Ext.Msg.alert('You tapped leaf! : ' + record.get('text'));

    }

});