/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
function getCustomLayouts() {
    return {
        /*
         * CenterLayout demo panel
         */
        centerLayout: {
            id: 'center-panel',
            layout: 'ux.center',
            items: {
                title: 'Centered Panel: 75% of container width and fit height',
                layout: 'ux.center',
                autoScroll: true,
                widthRatio: 0.75,
                bodyStyle: 'padding:20px 0;',
                items: [{
                    title: 'Inner Centered Panel',
                    html: 'Fixed 300px wide and auto height. The container panel will also autoscroll if narrower than 300px.',
                    width: 300,
                    frame: true,
                    autoHeight: true,
                    bodyStyle: 'padding:10px 20px;'
                }]
            }
        }
    };

}
