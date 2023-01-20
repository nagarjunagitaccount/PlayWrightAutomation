const base=require('@playwright/test');

exports.ctest= base.test.extend({
    fixturedata:{
        name:"fixturename"
    
    }
})