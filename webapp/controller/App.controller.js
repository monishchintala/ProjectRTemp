sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
  ],
  function (BaseController, Filter, FilterOperator) {
    "use strict";

    return BaseController.extend("samview.projectrtemp.controller.App", {
      onInit: function () {
        this.oFilterBar = this.getView().byId("filterbar");
        this.oTable = this.getView().byId("table1");
      },
      onSelectionChange: function (oEvent) {
        this.oFilterBar.fireFilterChange(oEvent);
      },
      onFilterChange: function (oEvent) {
        this._updateLabelsAndTable();
      },
      _updateLabelsAndTable: function () {
        // this.oExpandedLabel.setText(this.getFormattedSummaryTextExpanded());
        // this.oSnappedLabel.setText(this.getFormattedSummaryText());
        this.oTable.setShowOverlay(true);
      },
      onSearch: function () {
        var aTableFilters = this.oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {
          var oControl = oFilterGroupItem.getControl(),
            aSelectedKeys = oControl.getSelectedKeys(),
            aFilters = aSelectedKeys.map(function (sSelectedKey) {
              return new Filter({
                path: oFilterGroupItem.getName(),
                operator: FilterOperator.Contains,
                value1: sSelectedKey
              });
            });
  
          if (aSelectedKeys.length > 0) {
            aResult.push(new Filter({
              filters: aFilters,
              and: false
            }));
          }
  
          return aResult;
        }, []);
  
        this.oTable.getBinding("items").filter(aTableFilters);
        this.oTable.setShowOverlay(false);
      },
      onItemPress: function (oEvent) {
        var oController = this;
        var oModel = oController.getView().getModel();
        var oContext = oEvent.getParameter("listItem").getBindingContext()
        var sPath = oContext.getPath()
        var id = oModel.getProperty(sPath + '/companyId')
        var oRouter = oController.getOwnerComponent().getRouter();
        oRouter.navTo("Products", {
          id: id,
        });
      }
    });
  }
);
