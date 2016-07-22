const {
	activateUnit
} = require('../../build/actions/application');

const expect = require("expect");

describe('Actions', ()=>{
  describe('application', ()=>{
    it('should return -1 when the value is not present', function() {
    	const ret = activateUnit("testId");

    	expect(ret).toEqual({
    		type:"ACTIVATE_UNIT",
    		payload:{
    			id:"testId"
    		}
    	});
    });
  });
});