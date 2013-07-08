/*
 * File: app/controller/CommonController.js
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

Ext.define('TouchTreeGrid.controller.CommonController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            rtsbapp: {
                selector: 'rtsbapp',
                xtype: 'rtsbapp'
            },
            griddetailpanel: {
                autoCreate: true,
                selector: 'griddetailpanel',
                xtype: 'griddetailpanel'
            },
            gridHelpPanel: {
                autoCreate: true,
                selector: 'gridHelpPanel',
                xtype: 'gridHelpPanel'
            }
        },

        control: {
            "tabpanel#RTSBPanel": {
                activeitemchange: 'onRTSBPanelActiveItemChange'
            },
            "viewport": {
                orientationchange: 'onOrientationChange'
            },
            "titlebar": {
                gridhelp: 'onTitlebarGridhelp'
            },
            "button#griddetailbackbtn": {
                tap: 'onGridDetailBackButtonTap'
            },
            "button#helpPanelCloseBtn": {
                tap: 'onHelpPanelCloseButtonTap'
            },
            "tabpanel#LanguagePanel": {
                activeitemchange: 'onLanguagePanelTopChange'
            }
        }
    },

    onRTSBPanelActiveItemChange: function(container, value, oldValue, eOpts) {
        var newcont = value.getItemId();
        var grid, gridcont, numNodes, mydata, numRecords;

        gridcont = value.down('touchtreegrid');
        grid = gridcont.down('#'+gridcont.getListItemId());

        if (newcont === 'ViewPanel') {

            // Check store for data and load if empty (only)
            numNodes = grid.getStore().getData().length;
            if (numNodes === 0) {censusController.loadCensusMaine2000Store();}  
        }
        if (newcont === 'HomePanel') {
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
        if (newcont === 'Impressum'){
            // Check store for data and load if empty (only)
            numNodes = grid.getStore().getData().length;
            if (numNodes === 0) {projectController.loadExample2Store(gridcont);}  
        }

        if (newcont === 'overlay')
        {


        }






    },

    onOrientationChange: function(viewport, orientation, width, height) {
        //Ext.Msg.alert('', 'Orientation change: ' + orientation, Ext.emptyFn); 

        // Call funciton to hide/show titlebar and bottom tabbar when in landscape mode, but only if
        // active window contains TouchGridPanel with active expand/collapse toolbar
        var gridcont = this.hideShowPanels();
        var gridItemId = gridcont.getItemId();
        // Demo reconfiguring columns array for Census example based on device and orientation
        if (gridItemId === 'censusmaine' || gridItemId === 'censusfilter') {
            censusController.loadColumnsCensusMaine(gridcont);
        }    
    },

    onTitlebarGridhelp: function(main) {
        // Trapping tap event on entire titlebar instead of just help icon
        var me=this;

        var image = main.down('#gridhelp');


        var currItem = Ext.Viewport.down('#RTSBPanel').getActiveItem();

        var grid;
        if (currItem.getItemId() === 'Impressum') {
            // Project example contained within sub tab panel so need to get active item of that 
            grid = currItem.down('#projecttabpanel').getActiveItem().down('touchtreegrid');
        } 
        else if (currItem.getItemId() === 'censustab') {
            // Census example contained within sub tab panel so need to get active item of that 
            grid = currItem.down('#censustabpanel').getActiveItem().down('touchtreegrid');
        } 
        else if (currItem.getItemId() === 'listscontainer') {
            // Lists example contained within sub tab panel so need to get active item of that 
            grid = currItem.down('#liststabpanel').getActiveItem().down('touchtreegrid');
        }
        else if (currItem.getItemId() === 'taskslisttab') {
            // Lists example contained within sub tab panel so need to get active item of that 
            grid = currItem.down('#tasksTabPanel').getActiveItem().down('touchtreegrid');
        } else
        {    
            grid = currItem.down('touchtreegrid');
        }   


        if (!grid) {return;}

        gridId = grid.getHelpHtml();

        Ext.Ajax.request({
            url: gridId,
            method: 'GET',
            callback: function(options, success, response) {

                var help = me.getGridHelpPanel();
                help.setHtml( response.responseText );
                help.showBy(image);
            }
        });
    },

    onGridDetailBackButtonTap: function(button, e, eOpts) {
        // Reusing the Back button for all Project Task examples by storing references when creating detail panel (list disclose)
        var swapcont = button.up('#griddetailpanel').swapcont;  
        if (swapcont)
        {
            gridItemId = button.up('#griddetailpanel').gridItemId;
            var newcont = swapcont.down('#'+gridItemId); 

            newcont.setShowAnimation({type :"slide", direction : "right"});
            swapcont.setActiveItem(newcont);  
        }    
    },

    onHelpPanelCloseButtonTap: function(button, e, eOpts) {
        button.up('gridHelpPanel').hide();
    },

    onLanguagePanelTopChange: function(container, value, oldValue, eOpts) {
        var newcont = value.getItemId();
        var grid, gridcont, numNodes, mydata, numRecords;

        gridcont = value.down('touchtreegrid');
        grid = gridcont.down('#'+gridcont.getListItemId());

        if (newcont === 'DeutschPanel') {

            // Check store for data and load if empty (only)
            numNodes = grid.getStore().getData().length;
            if (numNodes === 0) {censusController.loadCensusMaine2000Store();}  
        }

        if (newcont === 'EnglishPanel'){
            // Check store for data and load if empty (only)
            numNodes = grid.getStore().getData().length;
            if (numNodes === 0) {censusController.loadCensusMaine2000Store();}  
        }

        if (newcont === 'RussianPanel'){
            // Check store for data and load if empty (only)
            numNodes = grid.getStore().getData().length;
            if (numNodes === 0) {censusController.loadCensusMaine2000Store();}  
        }
    },

    loadTree: function(collapseLevel, ArrRef, fldListArr, gridcont, rootVal, hasTopRoot, filterOpts, skipApplyDefaultCollapseLevel) {
        var me = this;

        var gridlistname = gridcont.getListItemId();
        var gridlist = gridcont.down('#'+gridlistname);

        if (!Ext.isEmpty(ArrRef)) {gridlist.ArrRef = ArrRef;}  // Store ArrRef to Grid component for faster collapse/expand
        else {ArrRef = gridlist.ArrRef;} // Retrieved on subsequent calls

        var treejson = this.getTree(ArrRef, rootVal, collapseLevel, fldListArr, hasTopRoot, filterOpts);

        // Update current level for next time
        gridcont.collapseLevel = collapseLevel;

        var gridstore = gridlist.getStore();

        gridstore.suspendEvents();

        gridstore.removeAll();
        var gridloaded = gridstore.setData(treejson);  // setRoot() not working => http://www.sencha.com/forum/showthread.php?242257

        gridstore.resumeEvents(true); // "discard queued events" improves performance when filtering and/or expanding all

        var refreshed = gridcont.doRefreshList(skipApplyDefaultCollapseLevel);  


        // workaround to get Touch 2.2 pullrefresh plugin to auto-snapBack  ... or when collapsing rows after scrolling down     
        var scroller = gridlist.getScrollable().getScroller();
        scroller.minPosition.y = 1;
        scroller.scrollTo(0,1);

        gridlist.refresh();        



    },

    getTree: function(list, rootId, expLevel, fldListArr, hasTopRoot, filterOpts) {
        // Required Fields:  'ID', 'PARENT_ID'   
        // list       - data array to convert to treestore format
        // rootId     - value of ultimate PARENT_ID (can be null)
        // expLevel   - level to expand treestore to while generating
        // fldListArr - defines columns to include in treestore from ArrRef for specific levels (if empty array then all fields are included at all levels as provided in list[])
        //              2nd parameter defines levels including and higher where data element will be blanked out when generating the treestore
        //              (particularly used for totalled numerics that don't apply to root levels, but the generating SQL can't update as NULL due to SQL UNION constraints 
        //              Note:  Exclude ID, PARENT_ID columns as these will be auto-added
        //              For each field define level "up to which" values will be included on category rows.
        //               '0' means highest root row will include non-nullable values (or as defined in flat file) for this field.
        //               '1' means level 1 categories will include data (if defined)
        //               '2' means data will only be included for up to level 2.  Level 1 and root will not show data for this column.
        //                etc...
        //              Example:   fldListArr = [['YearMonth', 0], ['grouper', 0], ['CloseDate', 1], ['Open', 1], ... ]
        // hasTopRoot - true if a single root row exists
        // filterOpts - Object defining filter options with members as follows:
        //               - enabled : true or false (default)
        //               - displayNodesWithAllMembersFilteredAsLeafs : true (default) or false 
        //                   (if, as result of filter a node has no displayable children, then set to true so that it appears
        //                    as a leaf, or false to dispaly as expandable node ... regardless would not be expandable)
        //               - filterFn : function that returns true if row is to be included in results
        //
        //               Example:
        //               filterOpts = {
        //                  enabled: true,
        //                  displayNodesWithAllMembersFilteredAsLeafs: true,
        //                  filterFn: function (rowObj) {return (parseInt(rowObj.Female) < parseInt(rowObj.Male));}
        //               };
        //
        //               Notes about filtering:
        //               - Node is included if any of it's children are included (whether node passes filter test or not!)
        //               - 
        //
        expLevel = (Ext.isEmpty(expLevel) ? 99 : expLevel);  // Level for initial expansion ...Defaults to fully expanded if not provided

        if (fldListArr.length===0) {
            // Initialize fldListArr with default values from all data fields in first row of list[]
            for (fld in list[0]) {
                if (fld !== 'ID' && fld !== 'PARENT_ID') {  // These are auto-added in createTreeStructure()
                    fldListArr.push([fld, 0]);
                }
            }
        }
        var tree, root = {}, result = []; // fetch list from database
        root.ID = rootId;
        tree = {text : "."};
        result.push(this.createTreeStructure(tree, root, list, 1, expLevel, fldListArr, hasTopRoot, filterOpts).result);
        return result[0][0];
    },

    createTreeStructure: function(tree, root, list, level, expLevel, fldListArr, hasTopRoot, filterOpts) {
        var i=0, result = [], child, childList = [], children = [], temptree = {}, thisExp,
            has_nonfiltered_child = false;

        // Initialize Filter option variables
        filterOpts = (Ext.isEmpty(filterOpts) ? {} : filterOpts);
        var filtEnabled = (Ext.isEmpty(filterOpts.enabled) ? false : filterOpts.enabled);
        var filtNodesAsLeafs = (Ext.isEmpty(filterOpts.displayNodesWithAllMembersFilteredAsLeafs) ? true : filterOpts.displayNodesWithAllMembersFilteredAsLeafs);
        var filtFn = (Ext.isEmpty(filterOpts.filterFn) ? undefined : filterOpts.filterFn);

        if (level === 1 && hasTopRoot) {children = [list[0]];}  // Initial root
        else {children = this.getChildren(root, list, false);} //Fetch children

        var ln = children.length;

        for(i=0; i<ln;i++)
        {
            child = children[i];
            // Blank out categorized data above specified level as pre-specified in fldListArr
            // Example:  we may have 3 levels of cateogries.  Details sum to to the 3rd and perhaps 2nd level, 
            //           but the 1st level should leave this column empty as not desired or applicable.
            for (var j=0; j< fldListArr.length; j++) {
                if (fldListArr[j][1] > 0 && fldListArr[j][1]>=level) {child[fldListArr[j][0]] = '';}
            }

            if(this.getChildren(child, list, true).length===0) 
            {
                temptree = {LEVEL : level, ID : child.ID, PARENT_ID : child.PARENT_ID, leaf : true};
                this.assignMembers(fldListArr, temptree, child);

                // Push child to tree if filter not enabled or if passes filter condition
                if (!filtEnabled || filtFn(temptree)) { 
                    childList.push(temptree);
                    tree["children"] = childList; // Add leaf to child array of the passed parent (also links arrays)
                    has_nonfiltered_child = true;
                }
            }
            else
            {
                thisExp = (level < expLevel ? true : false);
                temptree = {LEVEL : level, ID : child.ID, PARENT_ID : child.PARENT_ID, expanded : thisExp, leaf : false}; 
                this.assignMembers(fldListArr, temptree, child);

                // Push to children array now, but we will Pop it back later if this record and all children fail the filter condition
                childList.push(temptree);
                tree["children"] = childList;  // Add node to child array of passed parent (also links arrays)

                // Recursively create tree structure for the child since children exist.
                if (!this.createTreeStructure(temptree, child, list, level+1, expLevel, fldListArr, hasTopRoot, filterOpts).has_nonfiltered_child) {
                    // If child items are all fitlered, but node passes filter test then  load this node as leaf instead of node (unless specified otherwise)
                    if (!filtEnabled || filtFn(temptree)) {
                        tree.children[tree.children.length-1].leaf = filtNodesAsLeafs;
                        tree.children[tree.children.length-1].expanded = false;
                        tree.children[tree.children.length-1].expandable = false;  // disallow expand all children are filtered 
                        has_nonfiltered_child = true;

                    } else {
                        tree.children.pop();    // If HAS_NONFILTERED_CHILD = false, then pop() per above
                    }
                } else {
                    has_nonfiltered_child = true;
                }

            }
        }

        result.push(tree);   // DON'T NEED TO DO THIS UNTIL DONE WITH FINAL ITERATION
        return {result: result, has_nonfiltered_child: has_nonfiltered_child};

    },

    assignMembers: function(fldListArr, treeObj, child) {
        for (var i=0; i< fldListArr.length; i++) {
            treeObj[fldListArr[i][0]] = child[fldListArr[i][0]];
        }
    },

    getChildren: function(root, list, firstOnly) {
        var i=0, ln = list.length, result = [];
        for(i=0; i<ln;i++)
        {
            if(root.ID===list[i].PARENT_ID)
            {
                result.push(list[i]);
                if (firstOnly) {return result;} // Only checking if single child exists so abort upon first detection
            }
        }
        return result;
    },

    hideShowPanels: function() {
        // Controls display of panels when phone is in landscape vs portrait orientation to
        //provide more realestate for scrolling the data

        var device = ((Ext.os.is.Phone) ? 'phone' : 'tablet');
        var orient = ((Ext.Viewport.getWindowWidth() > Ext.Viewport.getWindowHeight()) ? 'landscape' : 'portrait');


        // Call funciton to hide/show titlebar and bottom tabbar when in landscape mode, but only if
        // active window contains TouchGridPanel with active expand/collapse toolbar
        var currItem = Ext.Viewport.down('#RTSBPanel').getActiveItem();

        var collapseBar, projex=false, gridcont;
        if (currItem.getItemId() === 'Impressum') {
            // Project example contained within sub tab panel so need to get active item of that 
            projex=true;
            collapseBar = currItem.down('#projecttabpanel').getActiveItem().down('#touchtreegridbuttons');
            gridcont = currItem.down('#projecttabpanel').getActiveItem().down('touchtreegrid');
        } 
        else if (currItem.getItemId() === 'ViewPanel') {
            collapseBar = currItem.down('#censustabpanel').getActiveItem().down('#touchtreegridbuttons');
            gridcont = currItem.down('#censustabpanel').getActiveItem().down('touchtreegrid');    
        } 
        else if (currItem.getItemId() === 'HomePanel') {
            collapseBar = currItem.down('#tasklisttab').getActiveItem().down('#touchtreegridbuttons');
            gridcont = currItem.down('#tasklisttab').getActiveItem().down('touchtreegrid');    
        } 
        else if (currItem.getItemId() === 'listscontainer') {
            collapseBar = currItem.down('#liststabpanel').getActiveItem().down('#touchtreegridbuttons');
            gridcont = currItem.down('#liststabpanel').getActiveItem().down('touchtreegrid');    
        } 
        else{    
            collapseBar = currItem.down('#touchtreegridbuttons');
            gridcont = currItem.down('touchtreegrid');        
        }   

        var hide = (orient === 'landscape');

        // Hide bottom tabbar and titlebar for phones in landscape mode ... show in portrait mode

        /*if (device === 'phone')
        {
        var main = this.getMain();

        main.down('#maintitlebar').setHidden(hide);
        main.down('#maintabbar').setHidden(hide);

        main.down('#LanguagePanel').setHidden(hide);
        main.down('#RTSBPanel').setHidden(hide);

        // I could add logic for Project tab to add this for each tab in event user tabs to different example
        // if (projex) {....} else {...}

        if (!Ext.isEmpty(collapseBar)) {
            collapseBar.down('#touchtreegridlabel').setHtml(hide ? 'Rotate for Menu' : '');
            collapseBar.down('#touchtreegridicon').setHidden(!hide);
        }  
    }*/
    return gridcont;

    },

    loadStore: function(me, gridcont, gridurl, loadmask, loadStoreInPostProcess) {
        // Load TreeStore data from JSON file within Controller since doesn't seem to work from within Store itself.
        // NOTE:  autoload=true -and- dummy root initialization required in Store to work=>
        //     root: {children: []}
        // Also:  Regular stores in JSON file format seem to load from within Store without issue.

        if (loadmask) {
            Ext.Viewport.setMasked({
                xtype: 'loadmask',
                message: loadmask
            });
        }

        var myRequest = Ext.Ajax.request({
            url: gridurl,
            method: 'GET',
            timeout: 10000,
            cache: false,
            dataType: 'json',
            reader:{
                type: 'json'
            },

            success: function(response) {
                var griddata = Ext.JSON.decode(response.responseText);

                var gridListItemId = gridcont.getListItemId();
                var gridlist = gridcont.down('#'+gridListItemId);
                var gridstore = gridlist.getStore();

                if (!loadStoreInPostProcess) {
                    gridstore.suspendEvents();      
                    gridstore.removeAll();
                    var gridloaded = gridstore.setData(griddata);  
                    // setRoot() not working for TreeStores => http://www.sencha.com/forum/showthread.php?242257
                    gridstore.resumeEvents();
                    if (loadmask) {Ext.Viewport.setMasked(false);}
                }            

                commonController.postLoadProcess(gridListItemId, gridcont, griddata); 

            },

            failure: function(response, opts) {
                if (loadmask) {Ext.Viewport.setMasked(false);}

                Ext.Msg.alert('Data not loaded: '+gridurl);     
            }
        });

    },

    loadDynamicStore: function(me, gridcont, gridurl, loadmask, loadStoreInPostProcess) {

        if (loadmask) {
            Ext.Viewport.setMasked({
                xtype: 'loadmask',
                message: loadmask
            });
        }

        var myRequest = Ext.Ajax.request({
            url: gridurl,
            method: 'GET',
            timeout: 10000,
            cache: false,
            dataType: 'json',
            reader:{
                type: 'json'
            },

            success: function(response) {
                var alldata = Ext.JSON.decode(response.responseText);
                var griddata             = alldata.datalist;
                var columnsPhonePortrait = alldata.columnsPhonePortrait;
                var fields               = alldata.fields;

                // NOTE:  Could load different device and orienation column configurations
                //        and apply based on device/orientation here .. and update again
                //        within onOrientationChange().  If you load multiple configurations
                //        It is suggested that you store each of the column arrays to gridcont
                //        component for easy retrieval when switching.  
                //
                //        Ex:  gridcont.columnsPhonePortrait = columnsPhonePortrait;
                //             gridcont.columnsTabletLandscape = columnsTabletLandscape;
                //             etc...
                //
                //        Simply by calling doRefreshList() method after updating columns your 
                //        grid will immediately reflect the new column configuration.
                //
                //        Could support customized user preferences in this same way.

                var gridListItemId = gridcont.getListItemId();
                var gridlist = gridcont.down('#'+gridListItemId);
                gridcont.setColumns(columnsPhonePortrait);

                // Note: we are defining fields directly within Store instead of creating Model
                var gridstore = Ext.create('Ext.data.Store', {fields: fields});

                gridlist.setStore(gridstore);

                if (!loadStoreInPostProcess) {
                    gridstore.suspendEvents();      
                    var gridloaded = gridstore.add(griddata);  
                    gridstore.resumeEvents();
                    if (loadmask) {Ext.Viewport.setMasked(false);}
                }            

                commonController.postLoadProcess(gridListItemId, gridcont, griddata); 

            },

            failure: function(response, opts) {
                if (loadmask) {Ext.Viewport.setMasked(false);}

                Ext.Msg.alert('Data not loaded: '+gridurl);     
            }
        });

    },

    postLoadProcess: function(gridListItemId, gridcont, griddata) {
        var refreshed, fldListArr = [], collapseLvl, gridlist, scroller, myFilt = {};

        gridlist = gridcont.down('#'+gridListItemId);
        scroller = gridlist.getScrollable().getScroller();

        if (gridListItemId === 'censusmainelist') {
            // Collapse nodes to defined level
            var depth = gridcont.getDefaultCollapseLevel();
            if (depth !== 99) {gridcont.doExpandDepth(depth);}

            censusController.loadColumnsCensusMaine(gridcont, false); // also refreshes list
        }

        else if (gridListItemId === 'censusfilterlist') {

            collapseLvl = (Ext.isEmpty(gridcont.collapseLevel) ? 1 : gridcont.collapseLevel);
            // Refer to expCollapse() method where collapseLevel could be updated for manual expand processing

            myFilt = {};

            censusController.loadColumnsCensusMaine(gridcont, true); // also refreshes list

            commonController.loadTree(collapseLvl, griddata.datalist, [], gridcont, null, true, myFilt); // collapse on initial load

            Ext.Viewport.setMasked(false);

        }

        else if ((gridListItemId ==='example2list') ||
        (gridListItemId ==='example2Blist') ||
        (gridListItemId ==='example2Clist')) {

            if (gridListItemId ==='example2list') {
                Ext.Msg.alert('Custom Expand levels!'); 
            }

            projectController.getProjectContainer().down('#example2list').up('touchtreegrid').doRefreshList();
            projectController.getProjectContainer().down('#example2Blist').up('touchtreegrid').doRefreshList();
            projectController.getProjectContainer().down('#example2Clist').up('touchtreegrid').doRefreshList();

            // workaround to get Touch 2.2 pullrefresh plugin to auto-snapBack
            scroller.scrollTo(0,1);
        }

        else if (gridListItemId === 'dow2012grouper2list') {

            collapseLvl = (Ext.isEmpty(gridcont.collapseLevel) ? 1 : gridcont.collapseLevel);
            // Refer to expCollapse() method where collapseLevel could be updated for manual expand processing

            myFilt = {  // Test example: plug 'myFilt' parameter in loadTree() call below (6th parameter)
                enabled: true,
                displayNodesWithAllMembersFilteredAsLeafs: true,
                filterFn: function (rowObj) {return (rowObj.Chg < 0 && rowObj.Close>13000);}  
            };

            commonController.loadTree(collapseLvl, griddata.datalist, [], gridcont, null, false, {}); // collapse on initial load

            // Sort by YearMonth, then CloseDate
            gridlist.getStore().sort([{property: 'YearMonth', direction: 'DESC'},
            {property: 'CloseDate', direction: 'DESC'}]);

            Ext.Viewport.setMasked(false);
        }

        else if (gridListItemId === 'dow2012Dynamiclist') {
            refreshed = gridcont.doRefreshList(); 

            Ext.Msg.alert('Server defined Grid!');
        }

        else {
            refreshed = gridcont.doRefreshList(); 

        }
    },

    init: function(application) {
        /* Global object variables available throughout application */
        commonController = this.getApplication().getController('TouchTreeGrid.controller.CommonController');
        tasksController = this.getApplication().getController('TouchTreeGrid.controller.TasksController');
        projectController = this.getApplication().getController('TouchTreeGrid.controller.ProjectController');
        censusController = this.getApplication().getController('TouchTreeGrid.controller.CensusController');
        listsController = this.getApplication().getController('TouchTreeGrid.controller.ListsController');


    },

    launch: function() {
        /* Global variable to define current Touch version 2.1 vs. 2.2 */
        touchVersion = '2.2';

        /* Hack to look to see if setInfinite() function exists on one of the grids as means to determine framework version .. not sure if more direct method exists or not */
        var listcont = listsController.getListscontainer();
        var grp2cont = listcont.down('#dow2012grouper2Cont');
        var grp2grid = grp2cont.down('#dow2012grouper2list');


        if (typeof grp2grid.setInfinite != 'function') {  /* if not found then we are running 2.1 framework */
            touchVersion = '2.1';
        }
    }

});