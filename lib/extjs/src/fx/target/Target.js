/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial
Software License Agreement provided with the Software or, alternatively, in accordance with the
terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-05-16 14:36:50 (f9be68accb407158ba2b1be2c226a6ce1f649314)
*/
/**
 * @class Ext.fx.target.Target

This class specifies a generic target for an animation. It provides a wrapper around a
series of different types of objects to allow for a generic animation API.
A target can be a single object or a Composite object containing other objects that are 
to be animated. This class and it's subclasses are generally not created directly, the 
underlying animation will create the appropriate Ext.fx.target.Target object by passing 
the instance to be animated.

The following types of objects can be animated:

- {@link Ext.fx.target.Component Components}
- {@link Ext.fx.target.Element Elements}
- {@link Ext.fx.target.Sprite Sprites}

 * @markdown
 * @abstract
 */
Ext.define('Ext.fx.target.Target', {

    isAnimTarget: true,

    /**
     * Creates new Target.
     * @param {Ext.Component/Ext.Element/Ext.draw.Sprite} target The object to be animated
     */
    constructor: function(target) {
        this.target = target;
        this.id = this.getId();
    },
    
    getId: function() {
        return this.target.id;
    }
});
