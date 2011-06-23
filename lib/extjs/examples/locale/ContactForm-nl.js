/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
if (Ext.app.ContactForm) {
    Ext.apply(Ext.app.ContactForm.prototype, {
        formTitle: 'Contact Informatie (Dutch)',
        firstName: 'Voornaam',
        lastName: 'Achternaam',
        surnamePrefix: 'Tussenvoegsel',
        company: 'Bedrijf',
        state: 'Provincie',
        stateEmptyText: 'Kies een provincie...',
        email: 'E-mail',
        birth: 'Geb. Datum',
        save: 'Opslaan',
        cancel: 'Annuleren'
    });
}
