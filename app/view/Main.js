Ext.define('RTSB.app.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',



        onNewButtonTap: function ()
        {
            //console.log("newNoteCommand");
            //this.fireEvent("newNoteCommand", this);
            Ext.Viewport.add(Ext.create('RTSB.app.view.Nested'));
        },
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: false,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to RTSB.app'
                },

                html: [
                       '<div style="background-image:url(resources/loading/Logo_RTSB_GmbH_Slogan.png);height:100%;width:100%;background-repeat:no-repeat;background-size: contain;"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div align="center"><button style="height:50px; width:70px;color:black;background-color: #0174DF;" onclick="">Deutsch</button><button style="height:50px; width:70px;color:black;background-color: #0174DF;" onclick="">Englisch</button><button style="height:50px; width:70px;color:black;background-color: #0174DF;" onclick="">Russisch</button></div>'

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
                                items: [{ xtype: "spacer"}, 
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
                        

        ]
    }
});


Ext.define('ListItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['text']
    }
});
var treeStore = Ext.create('Ext.data.TreeStore', {
    model: 'ListItem',
    defaultRootProperty: 'items',
    root: {
        items: [{
            text: 'Info',
            items: [{
                text: 'Eastbound',
                items: [{
                    text: 'Still',
                    leaf: true
                }, {
                    text: 'WestBound',
                    leaf: true
                }]
            }, {
                text: 'NextBound',
                leaf: true
            }]
        },
        {
            text: 'Info',
            items: [{
                text: 'Eastbound',
                items: [{
                    text: 'Still',
                    leaf: true
                }, {
                    text: 'WestBound',
                    leaf: true
                }]
            }, {
                text: 'NextBound',
                leaf: true
            }]
        },
        {
            text: 'Language',
            items: [{
                text: 'Russisch',
                leaf: true
            }, {
                text: 'Deutsch',
                leaf: true
            }, {
                text: 'English',
                leaf: true
            }]
        }]
    }
});
var detailContainer = Ext.create('Ext.Container', {
    layout: 'card',
    flex: 1
});

var nestedList = Ext.create('Ext.NestedList', {
    store: treeStore,
    detailContainer: detailContainer,
    detailCard: true,
    listeners: {
        leafitemtap: function (nestedList, list, index, target, record) {
            var detailCard = nestedList.getDetailCard();
            detailCard.setHtml('You selected: ' + record.get('text'));
        }
    },
    flex: 1
});
var newButton = {
    xtype: "button",
    text: 'New',
    ui: 'action',
    handler: this.onNewButtonTap,
    scope: this
};