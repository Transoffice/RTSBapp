Ext.regApplication({
    name: 'memoBook',

    launch: function() {
        this.views.viewport = new memoBook.views.Viewport({
            application: this
        });
        Ext.dispatch({
            controller: 'MemoController',
            action: 'showStartForm'
        });
        
        //our Store automatically picks up the LocalStorageProxy defined on the Memo model
        var store = new Ext.data.Store({
            model: "Memo"
        });

        //loads any existing Search data from localStorage
        store.load();
    }
});