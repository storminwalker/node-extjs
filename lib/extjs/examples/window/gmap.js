/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', '../ux');
Ext.require([
    'Ext.window.*',
    'Ext.ux.GMapPanel'
]);

Ext.onReady(function(){
    var mapwin;
    
    Ext.get('show-btn').on('click', function() {
        // create the window on the first click and reuse on subsequent clicks
        if(!mapwin){

            mapwin = Ext.create('Ext.Window', {
                layout: 'fit',
                title: 'GMap Window',
                closeAction: 'hide',
                width:450,
                height:450,
                border: false,
                x: 40,
                y: 60,
                items: {
                    xtype: 'gmappanel',
                    zoomLevel: 14,
                    gmapType: 'map',
                    mapConfOpts: ['enableScrollWheelZoom','enableDoubleClickZoom','enableDragging'],
                    mapControls: ['GSmallMapControl','GMapTypeControl','NonExistantControl'],
                    setCenter: {
                        geoCodeAddr: '4 Yawkey Way, Boston, MA, 02215-3409, USA',
                        marker: {title: 'Fenway Park'}
                    },
                    markers: [{
                        lat: 42.339641,
                        lng: -71.094224,
                        marker: {title: 'Boston Museum of Fine Arts'},
                        listeners: {
                            click: function(e){
                                Ext.Msg.alert({title: 'Its fine', text: 'and its art.'});
                            }
                        }
                    },{
                        lat: 42.339419,
                        lng: -71.09077,
                        marker: {title: 'Northeastern University'}
                    }]
                }
            });
            
        }
        
        mapwin.show();
        
    });
    
 });
