Ext.define('RTSB.view.MyNavigationView', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    stores: ['Countries'],
    models: ['Country'],
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {

        items: [
    {
        xtype: 'tabpanel',
        docked: 'bottom',
        items: [
            {
                xtype: 'container',
                title: 'Home',
                iconCls: 'home'
            },
            {
                xtype: 'container',
                title: 'About',
                iconCls: 'info'
            }
        ],

        tabBar: {
            docked: 'bottom'
        }
    },
    {
        title: 'Home',
        xtype: 'tabpanel',
        items: [
            {
                xtype: 'container',
                title: 'Home',
                leaf: true,
                items: [
                    {
                        docked: 'top',

                        styleHtmlContent: true,
                        scrollable: true,
                    },
                    {
                        xtype: 'video',
                        html: [
                            '<div style="background-image:url(resources/loading/Loading_Preview.png);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;">'

                        ].join("")
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'Deutsch',
                items: [
                {
                    xtype: 'button',
                    itemId: 'mybutton11',
                    text: 'Eastbound Routes & Services Europe – Russland – Zentralasien',
                    ui: 'action',

                },
                                {
                                    xtype: 'button',
                                    itemId: 'mybutton12',
                                    text: 'China Routes & Services',
                                    ui: 'action',

                                }
                ]
            },
                        {
                            xtype: 'container',
                            title: 'Englisch'
                        },
            {
                xtype: 'container',
                title: 'Russisch'
            }
        ]
    }
        ],
        listeners: [
        {
        fn: 'onMybutton11Tap',
        event: 'tap',
        delegate: '#mybutton11'
        },
                {
                    fn: 'onMybutton12Tap',
                    event: 'tap',
                    delegate: '#mybutton12',
                }

  ]


        
    },
    onMybutton11Tap: function (button, e, eOpts) {
        this.push(Ext.create("RTSB.view.NestedList"), {
            title: "NestedList"
        });
    },
    onMybutton12Tap: function (button, e, eOpts) {
        this.push(Ext.create("RTSB.view.CNEU"), {
            title: "NestedList"
        });
    },
});
