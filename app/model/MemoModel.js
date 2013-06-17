Ext.regModel('Memo', {
    fields:
    [
        { name: 'id', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'LabelName', type: 'string' }
    ],
    proxy: {
        type: 'localstorage',
        id: 'items'
    }
});