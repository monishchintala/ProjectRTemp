sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";
        return Controller.extend("samview.projectrtemp.controller.Products", {
            onInit: function () {
                var oController = this;
                var oRouter = oController.getOwnerComponent().getRouter()
                oRouter.getRoute("Products").attachMatched(oController._onRouteMatched, oController);
            },
            _onRouteMatched: function (oEvent) {
                var oController = this;
                var oModel = oController.getView().getModel()
                var projectsItems = oModel.getProperty("/companies")
                var oArgs, oView;
                oArgs = oEvent.getParameter("arguments");
                oView = oController.getView();

                var index = projectsItems.findIndex(item => item.companyId == oArgs.id)

                oView.bindElement({
                    path: "/companies/" + index,
                });
            },
            onNavBack: function () {
                var oController = this;
                var oRouter = oController.getOwnerComponent().getRouter();
                oRouter.navTo("App");
            }
        });
    });
