memoBook.views.MemoList = Ext.extend(Ext.Panel, {
    initComponent: function() {
        var config = {
            layout: 'fit',
            fullscreen: true,
            scroll: 'vertical',
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    title: 'Memo',
                    items: [{
                        xtype: 'spacer'
                    }, {
                        ui: 'round',
                        iconMask: true,
                        iconCls: 'iconAdd',
                        handler: this.onCreateAction,
                        scope: this
                    }
                    ]
                }
                ],
            items:
                [
                    {
                        xtype: 'list',
                        id: 'itemList',
                        itemTpl: new Ext.XTemplate(
                                        '<tpl for=".">',
                                            '<span class = "label">{LabelName}</span>',
                                            '<br/>',
                                            '<span class="description">{Description}</span>',
                                        '</tpl>'
                        ),
                        autoLoad: true,
                        store: 'MemoStore',
                        listeners: {
                            scope: this,
                            itemtap: this.onItemtapAction,
                            itemswipe: this.onItemSwipe
                        }

                    }
                ]
        };

        Ext.apply(this, config);
        memoBook.views.MemoList.superclass.initComponent.call(this);
    },

    onCreateAction: function() {
        Ext.dispatch({
            controller: 'MemoController',
            action: 'showAddForm'
        });
    },

    onItemtapAction: function(list, index, item, e) {
        Ext.dispatch({
            controller: 'MemoController',
            action: 'showDetailForm',
            index: index
        });
    },

    onItemSwipe: function(list, index, item, e) {
        Ext.dispatch({
            controller: 'MemoController',
            action: 'deleteMemo',
            index: index
        });
    }
});
