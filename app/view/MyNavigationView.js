Ext.define('RTSB.view.MyNavigationView', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
                        {
                            title: 'Welcome',
                            iconCls: 'home',

                            styleHtmlContent: true,
                            scrollable: false,
                            html: [
                                '<div style="background-image:url(resources/loading/Loading_Preview.png);height:100%;width:100%;background-repeat:no-repeat;background-size: contain;"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div align="center"></div>'

                            ].join(""),
                            items: {
                                xtype: 'toolbar',
                                docked: 'top',
                                layout: {
                                    pack: 'center',
                                    type: 'hbox'
                                },
                                items: [
                                {
                                        xtype: 'button',
                                        itemId: 'Deutsch',
                                        text: 'Deutsch',

                                },
                                {
                                        xtype: 'button',
                                        text: 'English'
                                },
                                {
                                        xtype: 'button',
                                        text: 'Russisch'
                                }

                                ]

                            }

                        },

                        {
                                        title: 'Get Started',
                                        iconCls: 'action',

                                        items: [
                                            {
                                                docked: 'top',
                                                xtype: 'titlebar',
                                                title: 'Getting Started',
                                                styleHtmlContent: true,
                                                scrollable: true,
                                            },
                                            {
                                                xtype: 'video',
                                                html: [
                                                    '<div style="background-image:url(EastBoundWestbound.jpg);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;">'

                                                ].join("")
                                            }
                                        ]
                        },
            {
                title: 'EastBound',
                iconCls: 'action',

                items: [
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Getting Started',
                    styleHtmlContent: true,
                    scrollable: true,
                },
                {
                    xtype: 'video',
                    html: [
                            '<div style="background-image:url(EastBound.jpg);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;">'

                    ].join("")
                }
                ]
            },
                        {
                            title: 'NextOne',
                            iconCls: 'action',

                            items: [
                            {
                                docked: 'top',
                                xtype: 'titlebar',
                                title: 'Getting Started',
                                styleHtmlContent: true,
                                scrollable: true,
                            },
                            {
                                xtype: 'video',
                                html: [
                                        '<div style="background-image:url(NextOne.jpg);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;">'

                                ].join("")
                            }
                            ]
                        },
                        {
                            title: 'Nested List',
                            iconCls: 'action',
                            //items: [nestedList, detailContainer],
                            items: [
                            {
                                docked: 'top',
                                xtype: 'titlebar',
                                title: 'Nested List',
                                styleHtmlContent: true,
                                scrollable: true,
                            },
                            {
                                items: [{ xtype: "spacer" },
                                {
                                    xtype: "button",
                                    text: "New",
                                    ui: "action",
                                    // id: "new-note-btn",
                                    handler: this.onNewButtonTap,
                                    scope: this,
                                    views: ["nestedList", "detailContainer"],

                                },

                                ]

                            },

                            ]

                        }
                    ],

    },
    listeners: [{fn: 'onButtonDeutsch',event: 'tap',delegate: '#Deutsch'}],
    onButtonDeutsch: function (button, e, eOpts) {
    this.push(Ext.create("RTSB.view.NestedList"), {
        title: "NestedList"
    });
}
});
