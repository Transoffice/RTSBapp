memoBook.views.MemoAdd = Ext.extend(Ext.form.FormPanel, {
    initComponent: function() {
        var config = {
            layout: 'fit',
            fullscreen: true,
            scroll: 'vertical',
            dockedItems: [
				{
				    dock: 'top',
				    xtype: 'toolbar',
				    title: 'Create memo',
				    type: 'light',
				},
				{
				    dock: 'bottom',
				    xtype: 'toolbar',
				    type: 'light',
				    items: [
				        {
				            xtype: 'spacer'
				        },
				        {
				            text: 'Save',
				            ui: 'round',
				            handler: this.onSaveAction,
				            scope: this
				        },
				        {
				             text: 'Cancel',
				            ui: 'round',
				            handler: this.onCancleAction,
				            scope: this
				        },
				        {
				             xtype: 'spacer'
				        }
					]
				}
			],
			
			items:[
			        {
					xtype: 'fieldset',
					title: 'Memo details',
					instructions: 'Enter the information above.',
					defaults: {
						labelAlign: 'left'
					},
					items: [
						{
							xtype: 'textfield',
							name : 'Description',
							allowBlank: false,
							useClearIcon: true,
							autoCapitalize : false
						},
						{
							xtype: 'selectfield',
							name : 'LabelName',
							label: 'Label',
							valueField : 'LabelName',
							displayField : 'LabelName',
							store : Ext.getStore('LabelStore')
						}]
			}]
        };
        Ext.apply(this, config);
        memoBook.views.MemoAdd.superclass.initComponent.call(this);
    },


    onSaveAction: function() {
        Ext.dispatch({
            controller: 'MemoController',
            action: 'saveMemo',
            data: this.getValues()
        });
        this.reset();
    },
    onCancleAction: function() {
        Ext.dispatch({
            controller: 'MemoController',
            action: 'showStartForm'
        });
        this.reset();
    }
});
