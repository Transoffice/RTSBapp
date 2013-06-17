memoBook.views.MemoDetails = Ext.extend(Ext.Panel, {
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
                        ui: 'back',
                        handler: this.onBackAction,
                        scope: this
                    }
                    ]
                }
                ],
            items:
                [
                    {
                        xtype: 'panel',
                        id: 'itemDetails',
                        tpl: new Ext.XTemplate(
                                        '<tpl>',
                                            '<h2>Description:</h2>',
                                            '<br>',
                                            '<span class="description">{Description}</span>',
                                            '<br>',
                                            '<h2>Label:</h2>',
                                            '<br>',
                                            '<span class = "label">{LabelName}</span>',
                                            '<br/>',
                                        '</tpl>'
                        )
                    }
                ],
            store: 'MemoDetailsStore'
        };

        Ext.apply(this, config);
        memoBook.views.MemoList.superclass.initComponent.call(this);
    },

    onBackAction: function(list, index, item, e) {
        Ext.dispatch({
            controller: 'MemoController',
            action: 'showStartForm',
        });
    }
});