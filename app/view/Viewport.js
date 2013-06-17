memoBook.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    initComponent: function() {

        var config = {};
        Ext.apply(this, config);

        memoBook.views.memoList = new memoBook.views.MemoList();
        memoBook.views.memoAdd = new memoBook.views.MemoAdd();
        memoBook.views.memoDetails = new memoBook.views.MemoDetails();

        Ext.apply(this, {
            items: [
                memoBook.views.memoList,
                memoBook.views.memoAdd,
                memoBook.views.memoDetails
        ]
        });

        memoBook.views.Viewport.superclass.initComponent.call(this);
    }
});