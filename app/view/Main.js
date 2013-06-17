Ext.define('RTSB.app.view.Main', {
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
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to RTSB.app'
                },

                html: [
                       '<div style="background-image:url(eisenbahn4.jpg);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;"><br><br><br><br><br><br><br><br><br><br><br><div align="center"><p><font size="8" color=\"1C1C1C\">RTSB GmBh (logo)</font></p><p><font size="5" color=\"1C1C1C\">Rail Transportation Service Broker</font></p><p><font size="5" color=\"1C1C1C\">THE OFFICIAL FORWARDER OF THE »OJSC RZD«</font></p><p><font size="5" color=\"1C1C1C\">Routes & Services</font></p><button style="height:50px; width:70px;color:black;background-color: #0174DF;" onclick="">Deutsch</button><button style="height:50px; width:70px;color:black;background-color: #0174DF;" onclick="">Englisch</button><button style="height:50px; width:70px;color:black;background-color: #0174DF;" onclick="">Russisch</button></div>'

                ].join("")
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
                        title: 'LastOne',
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
                                '<div style="background-image:url(LastOne.jpg);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;">'

                        ].join("")

                    }
                    ]
                    }

        ]
    }
});

