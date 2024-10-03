/*global QUnit*/

sap.ui.define([
	"samview/projectrtemp/controller/samView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("samView Controller");

	QUnit.test("I should test the samView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
