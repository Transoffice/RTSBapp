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
                       '<div style="background-image:url(eisenbahn4.jpg);height:1024px;width:100%;background-repeat:no-repeat;background-size: 100%;"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div align="center"><p><font color=\"1C1C1C\">RTSB GmBh (logo)</font></p><button style="height:50px; width:70px;" onclick="">Deutsch</button><button style="height:50px; width:70px;" onclick="">Englisch</button><button style="height:50px; width:70px;" onclick="">Russisch</button></div>'

                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'EastBoundWestbound.jpg',
                        posterUrl: 'EastBoundWestbound.jpg'
                    }
                ]
            }
        ]
    }
});
