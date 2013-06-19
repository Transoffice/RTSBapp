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
                            title: 'Englisch',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'EnglishButton',
                                    text: 'Eastbound Routes & Services Europe – Russland – Zentralasien',
                                    ui: 'action',

                                 },
                {
                    xtype: 'button',
                    itemId: 'EnglishChinaButton',
                    text: 'China Routes & Services',
                    ui: 'action',

                }
                            ]
                        },
            {
                            xtype: 'container',
                            title: 'Russisch',
                            items: [
                                    {
                                        xtype: 'button',
                                        itemId: 'RUButton',
                                        text: 'Eastbound Routes & Services Europe – Russland – Zentralasien',
                                        ui: 'action',

                                    },
                                    {
                                        xtype: 'button',
                                        itemId: 'RUChinaButton',
                                        text: 'China Routes & Services',
                                        ui: 'action',

                                    }
                ]
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
                },
                {
                    fn: 'onMyEnglishbuttonTap',
                    event: 'tap',
                    delegate: '#EnglishButton',
                },
                {
                    fn: 'onMyEnglishChinabuttonTap',
                    event: 'tap',
                    delegate: '#EnglishChinaButton',
                },
                {
                    fn: 'onMyRUbuttonTap',
                    event: 'tap',
                    delegate: '#RUButton',
                },
                {
                    fn: 'onMyRUChinabuttonTap',
                    event: 'tap',
                    delegate: '#RUChinaButton',
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
    onMyEnglishbuttonTap: function (button, e, eOpts) {
        this.push(Ext.create("RTSB.view.NestedListEN"), {
            title: "NestedList"
        });
    },
    onMyEnglishChinabuttonTap: function (button, e, eOpts) {
        this.push(Ext.create("RTSB.view.CNEUEN"), {
            title: "NestedList"
        });
    },
    onMyRUbuttonTap: function (button, e, eOpts) {
        this.push(Ext.create("RTSB.view.NestedListRU"), {
            title: "NestedList"
        });
    },
    onMyRUChinabuttonTap: function (button, e, eOpts) {
        this.push(Ext.create("RTSB.view.CNEURU"), {
            title: "NestedList"
        });
    },
});
