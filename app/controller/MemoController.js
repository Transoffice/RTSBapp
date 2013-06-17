Ext.regController('MemoController', {
    showStartForm: function() {
        memoBook.views.viewport.setActiveItem(
			memoBook.views.memoList,
			{
			    type: 'slide',
			    direction: 'right'
			}
		);
    },

    showAddForm: function() {
        memoBook.views.viewport.setActiveItem(
			memoBook.views.memoAdd,
			{
			    type: 'slide',
			    direction: 'left'
			}
		);
    },

    deleteMemo: function(options) {
        var store = Ext.getStore('MemoStore');
        item = store.getAt(options.index);

        Ext.Msg.confirm("Confirmation", "Delete memo?", function(options) {
            if (options == "yes") {
                store.remove(item);
                store.sync();
            }
        });
    },

    showDetailForm: function(options) {
        memoBook.views.viewport.setActiveItem(
			memoBook.views.memoDetails,
			{
			    type: 'slide',
			    direction: 'left'
			}
		);

        var item = Ext.getStore('MemoStore').getAt(options.index);

        Ext.getStore('MemoDetailsStore').add({ 'id': item.data['id'], 'Description': item.data['Description'], 'LabelName': item.data['LabelName'] });
        Ext.getStore('MemoDetailsStore').load();
    },

    saveMemo: function(options) {
        if (options.data["Description"] == "") {
            Ext.Msg.alert("You have to enter description!");
            return;
        }
        Ext.getStore('MemoStore').create(options.data);
        this.showStartForm();
    }
});