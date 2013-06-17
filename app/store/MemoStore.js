Ext.regStore('MemoStore', {
    model: 'Memo',
    autoLoad: true,
    sorters: ['Description'],
    getGroupString: function(record) {
        return record.get('Description')[0];
    }
});