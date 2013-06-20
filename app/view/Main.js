Ext.define("RTSBapp.view.Main", {
    extend: 'Ext.navigation.View',

    config: {
        items: [
            {
                xtype: 'container',
                title: 'Welcome to RTSB.app',
                items: [
                    {
                        xtype: 'video',
                        html: [
                            '<div style="background-image:url(resources/loading/RTSBapp_loading_bg.png);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;">'

                        ].join("")
                    }, {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'DeButton',
                                text: 'Deutsch'
                            },
                            {
                                xtype: 'button',
                                itemId: 'EnButton',
                                text: 'English'
                            },
                            {
                                xtype: 'button',
                                itemId: 'RuButton',
                                text: 'Russisch'
                            }
                        ]
                    }
                ]
            },
        ],
        listeners: [
            {
                fn: 'onDeButtonTap',
                event: 'tap',
                delegate: '#DeButton'
            },
            {
                fn: 'onEnButtonTap',
                event: 'tap',
                delegate: '#EnButton'
            },
            {
                fn: 'onRuButtonTap',
                event: 'tap',
                delegate: '#RuButton'
            }
        ]
    },

    onDeButtonTap: function(button, e, eOpts) {
        this.push(Ext.create("RTSBapp.view.DeutschPanel"), {
            title: "Deutsch Panel"
        });
    },

    onEnButtonTap: function(button, e, eOpts) {
        this.push(Ext.create("RTSBapp.view.EnglishPanel"), {
            title: "English Panel"
        });
    },

    onRuButtonTap: function(button, e, eOpts) {
        this.push(Ext.create("RTSBapp.view.RussianPanel"), {
            title: "Russian Panel"
        });
    }

});