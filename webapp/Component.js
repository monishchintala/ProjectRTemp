/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
    "samview/projectrtemp/model/models"
],
    function (UIComponent, Device, JSONModel, models) {
        "use strict";

        return UIComponent.extend("samview.projectrtemp.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // var oComponent = this;
                // const oModel = new JSONModel();
                // oModel.loadData('./model/products.json');
                // oComponent.setModel(oModel);

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);