/******/!function(o){// webpackBootstrap
/******/var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=o,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=274)}({274:function(e,t,o){"use strict";o.r(t);var n=o(38);function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var u=window.$,l=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.moduleCardController=e,this.DEFAULT_MAX_RECENTLY_USED=10,this.DEFAULT_MAX_PER_CATEGORIES=6,this.DISPLAY_GRID="grid",this.DISPLAY_LIST="list",this.CATEGORY_RECENTLY_USED="recently-used",this.currentCategoryDisplay={},this.currentDisplay="",this.isCategoryGridDisplayed=!1,this.currentTagsList=[],this.currentRefCategory=null,this.currentRefStatus=null,this.currentSorting=null,this.baseAddonsUrl="https://addons.prestashop.com/",this.pstaggerInput=null,this.lastBulkAction=null,this.isUploadStarted=!1,this.recentlyUsedSelector="#module-recently-used-list .modules-list",this.modulesList=[],this.addonsCardGrid=null,this.addonsCardList=null,this.moduleShortList=".module-short-list",this.seeMoreSelector=".see-more",this.seeLessSelector=".see-less",this.moduleItemGridSelector=".module-item-grid",this.moduleItemListSelector=".module-item-list",this.categorySelectorLabelSelector=".module-category-selector-label",this.categorySelector=".module-category-selector",this.categoryItemSelector=".module-category-menu",this.addonsLoginButtonSelector="#addons_login_btn",this.categoryResetBtnSelector=".module-category-reset",this.moduleInstallBtnSelector="input.module-install-btn",this.moduleSortingDropdownSelector=".module-sorting-author select",this.categoryGridSelector="#modules-categories-grid",this.categoryGridItemSelector=".module-category-item",this.addonItemGridSelector=".module-addons-item-grid",this.addonItemListSelector=".module-addons-item-list",this.upgradeAllSource=".module_action_menu_upgrade_all",this.upgradeAllTargets="#modules-list-container-update .module_action_menu_upgrade:visible",this.bulkActionDropDownSelector=".module-bulk-actions",this.bulkItemSelector=".module-bulk-menu",this.bulkActionCheckboxListSelector=".module-checkbox-bulk-list input",this.bulkActionCheckboxGridSelector=".module-checkbox-bulk-grid input",this.checkedBulkActionListSelector="".concat(this.bulkActionCheckboxListSelector,":checked"),this.checkedBulkActionGridSelector="".concat(this.bulkActionCheckboxGridSelector,":checked"),this.bulkActionCheckboxSelector="#module-modal-bulk-checkbox",this.bulkConfirmModalSelector="#module-modal-bulk-confirm",this.bulkConfirmModalActionNameSelector="#module-modal-bulk-confirm-action-name",this.bulkConfirmModalListSelector="#module-modal-bulk-confirm-list",this.bulkConfirmModalAckBtnSelector="#module-modal-confirm-bulk-ack",this.placeholderGlobalSelector=".module-placeholders-wrapper",this.placeholderFailureGlobalSelector=".module-placeholders-failure",this.placeholderFailureMsgSelector=".module-placeholders-failure-msg",this.placeholderFailureRetryBtnSelector="#module-placeholders-failure-retry",this.statusSelectorLabelSelector=".module-status-selector-label",this.statusItemSelector=".module-status-menu",this.statusResetBtnSelector=".module-status-reset",this.addonsConnectModalBtnSelector="#page-header-desc-configuration-addons_connect",this.addonsLogoutModalBtnSelector="#page-header-desc-configuration-addons_logout",this.addonsImportModalBtnSelector="#page-header-desc-configuration-add_module",this.dropZoneModalSelector="#module-modal-import",this.dropZoneModalFooterSelector="#module-modal-import .modal-footer",this.dropZoneImportZoneSelector="#importDropzone",this.addonsConnectModalSelector="#module-modal-addons-connect",this.addonsLogoutModalSelector="#module-modal-addons-logout",this.addonsConnectForm="#addons-connect-form",this.moduleImportModalCloseBtn="#module-modal-import-closing-cross",this.moduleImportStartSelector=".module-import-start",this.moduleImportProcessingSelector=".module-import-processing",this.moduleImportSuccessSelector=".module-import-success",this.moduleImportSuccessConfigureBtnSelector=".module-import-success-configure",this.moduleImportFailureSelector=".module-import-failure",this.moduleImportFailureRetrySelector=".module-import-failure-retry",this.moduleImportFailureDetailsBtnSelector=".module-import-failure-details-action",this.moduleImportSelectFileManualSelector=".module-import-start-select-manual",this.moduleImportFailureMsgDetailsSelector=".module-import-failure-details",this.moduleImportConfirmSelector=".module-import-confirm",this.initSortingDropdown(),this.initBOEventRegistering(),this.initCurrentDisplay(),this.initSortingDisplaySwitch(),this.initBulkDropdown(),this.initSearchBlock(),this.initCategorySelect(),this.initCategoriesGrid(),this.initActionButtons(),this.initAddonsSearch(),this.initAddonsConnect(),this.initAddModuleAction(),this.initDropzone(),this.initPageChangeProtection(),this.initPlaceholderMechanism(),this.initFilterStatusDropdown(),this.fetchModulesList(),this.getNotificationsCount(),this.initializeSeeMore()}var e,o,n;return e=t,(o=[{key:"initFilterStatusDropdown",value:function(){var e=this,t=u("body");t.on("click",e.statusItemSelector,function(){e.currentRefStatus=parseInt(u(this).data("status-ref"),10),u(e.statusSelectorLabelSelector).text(u(this).find("a:first").text()),u(e.statusResetBtnSelector).show(),e.updateModuleVisibility()}),t.on("click",e.statusResetBtnSelector,function(){u(e.statusSelectorLabelSelector).text(u(this).find("a").text()),u(this).hide(),e.currentRefStatus=null,e.updateModuleVisibility()})}},{key:"initBulkDropdown",value:function(){var o=this,e=u("body");e.on("click",o.getBulkCheckboxesSelector(),function(){var e=u(o.bulkActionDropDownSelector);0<u(o.getBulkCheckboxesCheckedSelector()).length?e.closest(".module-top-menu-item").removeClass("disabled"):e.closest(".module-top-menu-item").addClass("disabled")}),e.on("click",o.bulkItemSelector,function(){if(0!==u(o.getBulkCheckboxesCheckedSelector()).length){o.lastBulkAction=u(this).data("ref");var e=o.buildBulkActionModuleList(),t=u(this).find(":checked").text().toLowerCase();u(o.bulkConfirmModalListSelector).html(e),u(o.bulkConfirmModalActionNameSelector).text(t),"bulk-uninstall"===o.lastBulkAction?u(o.bulkActionCheckboxSelector).show():u(o.bulkActionCheckboxSelector).hide(),u(o.bulkConfirmModalSelector).modal("show")}else u.growl.warning({message:window.translate_javascripts["Bulk Action - One module minimum"]})}),e.on("click",this.bulkConfirmModalAckBtnSelector,function(e){e.preventDefault(),e.stopPropagation(),u(o.bulkConfirmModalSelector).modal("hide"),o.doBulkAction(o.lastBulkAction)})}},{key:"initBOEventRegistering",value:function(){window.BOEvent.on("Module Disabled",this.onModuleDisabled,this),window.BOEvent.on("Module Uninstalled",this.updateTotalResults,this)}},{key:"onModuleDisabled",value:function(){var e=this;e.getModuleItemSelector();u(".modules-list").each(function(){e.updateTotalResults()})}},{key:"initPlaceholderMechanism",value:function(){var e=this;u(e.placeholderGlobalSelector).length&&e.ajaxLoadPage(),u("body").on("click",e.placeholderFailureRetryBtnSelector,function(){u(e.placeholderFailureGlobalSelector).fadeOut(),u(e.placeholderGlobalSelector).fadeIn(),e.ajaxLoadPage()})}},{key:"ajaxLoadPage",value:function(){var r=this;u.ajax({method:"GET",url:window.moduleURLs.catalogRefresh}).done(function(e){if(!0===e.status){void 0===e.domElements&&(e.domElements=null),void 0===e.msg&&(e.msg=null);var t=document.styleSheets[0],o="{display: none}",n=".modules-list",i=".module-sorting-menu",l="".concat(n,",").concat(i);t.insertRule?t.insertRule(l+o,t.cssRules.length):t.addRule&&t.addRule(l,o,-1),u(r.placeholderGlobalSelector).fadeOut(800,function(){u.each(e.domElements,function(e,t){u(t.selector).append(t.content)}),u(n).fadeIn(800).css("display","flex"),u(i).fadeIn(800),u('[data-toggle="popover"]').popover(),r.initCurrentDisplay(),r.fetchModulesList()})}else u(r.placeholderGlobalSelector).fadeOut(800,function(){u(r.placeholderFailureMsgSelector).text(e.msg),u(r.placeholderFailureGlobalSelector).fadeIn(800)})}).fail(function(e){u(r.placeholderGlobalSelector).fadeOut(800,function(){u(r.placeholderFailureMsgSelector).text(e.statusText),u(r.placeholderFailureGlobalSelector).fadeIn(800)})})}},{key:"fetchModulesList",value:function(){var e,t,o=this;o.modulesList=[],u(".modules-list").each(function(){(e=u(this)).find(".module-item").each(function(){t=u(this),o.modulesList.push({domObject:t,id:t.data("id"),name:t.data("name").toLowerCase(),scoring:parseFloat(t.data("scoring")),logo:t.data("logo"),author:t.data("author").toLowerCase(),version:t.data("version"),description:t.data("description").toLowerCase(),techName:t.data("tech-name").toLowerCase(),childCategories:t.data("child-categories"),categories:String(t.data("categories")).toLowerCase(),type:t.data("type"),price:parseFloat(t.data("price")),active:parseInt(t.data("active"),10),access:t.data("last-access"),display:t.hasClass("module-item-list")?o.DISPLAY_LIST:o.DISPLAY_GRID,container:e}),t.remove()})}),o.addonsCardGrid=u(this.addonItemGridSelector),o.addonsCardList=u(this.addonItemListSelector),o.updateModuleVisibility(),u("body").trigger("moduleCatalogLoaded")}},{key:"updateModuleSorting",value:function(){if(this.currentSorting){var e="asc",i=this.currentSorting,t=i.split("-");1<t.length&&(i=t[0],"desc"===t[1]&&(e="desc"));this.modulesList.sort(function(e,t){var o=e[i],n=t[i];return"access"===i&&(o=new Date(o).getTime(),n=new Date(n).getTime(),(o=isNaN(o)?0:o)===(n=isNaN(n)?0:n))?t.name.localeCompare(e.name):o<n?-1:n<o?1:0}),"desc"===e&&this.modulesList.reverse()}}},{key:"updateModuleContainerDisplay",value:function(){var o=this;u(".module-short-list").each(function(){var e=u(this),t=e.find(".module-item").length;o.currentRefCategory&&o.currentRefCategory!==String(e.find(".modules-list").data("name"))||null!==o.currentRefStatus&&0===t||0===t&&String(e.find(".modules-list").data("name"))===o.CATEGORY_RECENTLY_USED||0<o.currentTagsList.length&&0===t?e.hide():(e.show(),t>=o.DEFAULT_MAX_PER_CATEGORIES?e.find("".concat(o.seeMoreSelector,", ").concat(o.seeLessSelector)).show():e.find("".concat(o.seeMoreSelector,", ").concat(o.seeLessSelector)).hide())})}},{key:"updateModuleVisibility",value:function(){var e,o,t,n,i,l=this;l.updateModuleSorting(),u(l.recentlyUsedSelector).find(".module-item").remove(),u(".modules-list").find(".module-item").remove();for(var r=l.modulesList.length,a={},s=0;s<r;s+=1)(o=l.modulesList[s]).display===l.currentDisplay&&(e=!0,t=l.currentRefCategory===l.CATEGORY_RECENTLY_USED?l.CATEGORY_RECENTLY_USED:o.categories,null!==l.currentRefCategory&&(e&=t===l.currentRefCategory),null!==l.currentRefStatus&&(e&=o.active===l.currentRefStatus),l.currentTagsList.length&&(n=!1,u.each(l.currentTagsList,function(e,t){i=t.toLowerCase(),n|=-1!==o.name.indexOf(i)||-1!==o.description.indexOf(i)||-1!==o.author.indexOf(i)||-1!==o.techName.indexOf(i)}),e&=n),l.currentDisplay!==l.DISPLAY_LIST||l.currentTagsList.length||(void 0===l.currentCategoryDisplay[t]&&(l.currentCategoryDisplay[t]=!1),a[t]||(a[t]=0),t===l.CATEGORY_RECENTLY_USED?a[t]>=l.DEFAULT_MAX_RECENTLY_USED&&(e&=l.currentCategoryDisplay[t]):a[t]>=l.DEFAULT_MAX_PER_CATEGORIES&&(e&=l.currentCategoryDisplay[t]),a[t]+=1),e&&(l.currentRefCategory===l.CATEGORY_RECENTLY_USED?u(l.recentlyUsedSelector).append(o.domObject):o.container.append(o.domObject)));l.updateModuleContainerDisplay(),l.currentTagsList.length&&u(".modules-list").append(this.currentDisplay===l.DISPLAY_GRID?this.addonsCardGrid:this.addonsCardList),l.updateTotalResults()}},{key:"initPageChangeProtection",value:function(){var e=this;u(window).on("beforeunload",function(){if(!0===e.isUploadStarted)return"It seems some critical operation are running, are you sure you want to change page ? It might cause some unexepcted behaviors."})}},{key:"buildBulkActionModuleList",value:function(){var e,t=this.getBulkCheckboxesCheckedSelector(),o=this.getModuleItemSelector(),n=0,i="";return u(t).each(function(){return 10===n?(i+="- ...",!1):(e=u(this).closest(o),i+="- ".concat(e.data("name"),"<br/>"),n+=1,!0)}),i}},{key:"initAddonsConnect",value:function(){var t=this;"#"===u(t.addonsConnectModalBtnSelector).attr("href")&&(u(t.addonsConnectModalBtnSelector).attr("data-toggle","modal"),u(t.addonsConnectModalBtnSelector).attr("data-target",t.addonsConnectModalSelector)),"#"===u(t.addonsLogoutModalBtnSelector).attr("href")&&(u(t.addonsLogoutModalBtnSelector).attr("data-toggle","modal"),u(t.addonsLogoutModalBtnSelector).attr("data-target",t.addonsLogoutModalSelector)),u("body").on("submit",t.addonsConnectForm,function(e){e.preventDefault(),e.stopPropagation(),u.ajax({method:"POST",url:u(this).attr("action"),dataType:"json",data:u(this).serialize(),beforeSend:function(){u(t.addonsLoginButtonSelector).show(),u('button.btn[type="submit"]',t.addonsConnectForm).hide()}}).done(function(e){1===e.success?location.reload():(u.growl.error({message:e.message}),u(t.addonsLoginButtonSelector).hide(),u('button.btn[type="submit"]',t.addonsConnectForm).fadeIn())})})}},{key:"initAddModuleAction",value:function(){var e=u(this.addonsImportModalBtnSelector);e.attr("data-toggle","modal"),e.attr("data-target",this.dropZoneModalSelector)}},{key:"initDropzone",value:function(){var o=this,e=u("body"),t=u(".dropzone");e.on("click",this.moduleImportFailureRetrySelector,function(){u("".concat(o.moduleImportSuccessSelector,",").concat(o.moduleImportFailureSelector,",").concat(o.moduleImportProcessingSelector)).fadeOut(function(){setTimeout(function(){u(o.moduleImportStartSelector).fadeIn(function(){u(o.moduleImportFailureMsgDetailsSelector).hide(),u(o.moduleImportSuccessConfigureBtnSelector).hide(),t.removeAttr("style")})},550)})}),e.on("hidden.bs.modal",this.dropZoneModalSelector,function(){u("".concat(o.moduleImportSuccessSelector,", ").concat(o.moduleImportFailureSelector)).hide(),u(o.moduleImportStartSelector).show(),t.removeAttr("style"),u(o.moduleImportFailureMsgDetailsSelector).hide(),u(o.moduleImportSuccessConfigureBtnSelector).hide(),u(o.dropZoneModalFooterSelector).html(""),u(o.moduleImportConfirmSelector).hide()}),e.on("click",".dropzone:not(".concat(this.moduleImportSelectFileManualSelector,", ").concat(this.moduleImportSuccessConfigureBtnSelector,")"),function(e,t){void 0===t&&(e.stopPropagation(),e.preventDefault())}),e.on("click",this.moduleImportSelectFileManualSelector,function(e){e.stopPropagation(),e.preventDefault(),u(".dz-hidden-input").trigger("click",["manual_select"])}),e.on("click",this.moduleImportModalCloseBtn,function(){!0!==o.isUploadStarted&&u(o.dropZoneModalSelector).modal("hide")}),e.on("click",this.moduleImportSuccessConfigureBtnSelector,function(e){e.stopPropagation(),e.preventDefault(),window.location=u(this).attr("href")}),e.on("click",this.moduleImportFailureDetailsBtnSelector,function(){u(o.moduleImportFailureMsgDetailsSelector).slideDown()});var n={url:window.moduleURLs.moduleImport,acceptedFiles:".zip, .tar",paramName:"file_uploaded",maxFilesize:50,uploadMultiple:!1,addRemoveLinks:!0,dictDefaultMessage:"",hiddenInputContainer:o.dropZoneImportZoneSelector,timeout:0,addedfile:function(){o.animateStartUpload()},processing:function(){},error:function(e,t){o.displayOnUploadError(t)},complete:function(e){if("error"!==e.status){var t=u.parseJSON(e.xhr.response);void 0===t.is_configurable&&(t.is_configurable=null),void 0===t.module_name&&(t.module_name=null),o.displayOnUploadDone(t)}o.isUploadStarted=!1}};t.dropzone(u.extend(n))}},{key:"animateStartUpload",value:function(){var e=u(".dropzone");this.isUploadStarted=!0,u(this.moduleImportStartSelector).hide(0),e.css("border","none"),u(this.moduleImportProcessingSelector).fadeIn()}},{key:"animateEndUpload",value:function(e){u(this.moduleImportProcessingSelector).finish().fadeOut(e)}},{key:"displayOnUploadDone",value:function(t){var o=this;o.animateEndUpload(function(){if(!0===t.status){if(!0===t.is_configurable){var e=window.moduleURLs.configurationPage.replace(/:number:/,t.module_name);u(o.moduleImportSuccessConfigureBtnSelector).attr("href",e),u(o.moduleImportSuccessConfigureBtnSelector).show()}u(o.moduleImportSuccessSelector).fadeIn()}else void 0!==t.confirmation_subject?o.displayPrestaTrustStep(t):(u(o.moduleImportFailureMsgDetailsSelector).html(t.msg),u(o.moduleImportFailureSelector).fadeIn())})}},{key:"displayOnUploadError",value:function(e){var t=this;t.animateEndUpload(function(){u(t.moduleImportFailureMsgDetailsSelector).html(e),u(t.moduleImportFailureSelector).fadeIn()})}},{key:"displayPrestaTrustStep",value:function(e){var t=this,o=t.moduleCardController._replacePrestaTrustPlaceholders(e),n=e.module.attributes.name;u(this.moduleImportConfirmSelector).html(o.find(".modal-body").html()).fadeIn(),u(this.dropZoneModalFooterSelector).html(o.find(".modal-footer").html()).fadeIn(),u(this.dropZoneModalFooterSelector).find(".pstrust-install").off("click").on("click",function(){u(t.moduleImportConfirmSelector).hide(),u(t.dropZoneModalFooterSelector).html(""),t.animateStartUpload(),u.post(e.module.attributes.urls.install,{"actionParams[confirmPrestaTrust]":"1"}).done(function(e){t.displayOnUploadDone(e[n])}).fail(function(e){t.displayOnUploadError(e[n])}).always(function(){t.isUploadStarted=!1})})}},{key:"getBulkCheckboxesSelector",value:function(){return this.currentDisplay===this.DISPLAY_GRID?this.bulkActionCheckboxGridSelector:this.bulkActionCheckboxListSelector}},{key:"getBulkCheckboxesCheckedSelector",value:function(){return this.currentDisplay===this.DISPLAY_GRID?this.checkedBulkActionGridSelector:this.checkedBulkActionListSelector}},{key:"getModuleItemSelector",value:function(){return this.currentDisplay===this.DISPLAY_GRID?this.moduleItemGridSelector:this.moduleItemListSelector}},{key:"getNotificationsCount",value:function(){u.getJSON(window.moduleURLs.notificationsCount,this.updateNotificationsCount).fail(function(){})}},{key:"updateNotificationsCount",value:function(e){var t={to_configure:u("#subtab-AdminModulesNotifications"),to_update:u("#subtab-AdminModulesUpdates")};for(var o in t)0!==t[o].length&&t[o].find(".notification-counter").text(e[o])}},{key:"initAddonsSearch",value:function(){var t=this;u("body").on("click","".concat(t.addonItemGridSelector,", ").concat(t.addonItemListSelector),function(){var e="";t.currentTagsList.length&&(e=encodeURIComponent(t.currentTagsList.join(" "))),window.open("".concat(t.baseAddonsUrl,"search.php?search_query=").concat(e),"_blank")})}},{key:"initCategoriesGrid",value:function(){var o=this;u("body").on("click",this.categoryGridItemSelector,function(e){e.stopPropagation(),e.preventDefault();var t=u(this).data("category-ref");return o.currentTagsList.length&&(o.pstaggerInput.resetTags(!1),o.currentTagsList=[]),!!u("".concat(o.categoryItemSelector,'[data-category-ref="').concat(t,'"]')).length&&(!0===o.isCategoryGridDisplayed&&(u(o.categoryGridSelector).fadeOut(),o.isCategoryGridDisplayed=!1),u("".concat(o.categoryItemSelector,'[data-category-ref="').concat(t,'"]')).click(),!0)})}},{key:"initCurrentDisplay",value:function(){this.currentDisplay=""===this.currentDisplay?this.DISPLAY_LIST:this.DISPLAY_GRID}},{key:"initSortingDropdown",value:function(){var e=this;e.currentSorting=u(this.moduleSortingDropdownSelector).find(":checked").attr("value"),e.currentSorting||(e.currentSorting="access-desc"),u("body").on("change",e.moduleSortingDropdownSelector,function(){e.currentSorting=u(this).find(":checked").attr("value"),e.updateModuleVisibility()})}},{key:"doBulkAction",value:function(o){var n=this,i=u("#force_bulk_deletion").prop("checked"),l={"bulk-uninstall":"uninstall","bulk-disable":"disable","bulk-enable":"enable","bulk-disable-mobile":"disable_mobile","bulk-enable-mobile":"enable_mobile","bulk-reset":"reset"};if(void 0===l[o])return u.growl.error({message:window.translate_javascripts["Bulk Action - Request not found"].replace("[1]",o)}),!1;var e=this.getBulkCheckboxesCheckedSelector();if(u(e).length<=0)return!1;var r,a,s,c,t=[];return u(e).each(function(){r=u(this).data("tech-name"),t.push({techName:r,actionMenuObj:u(this).closest(".module-checkbox-bulk-list").next()})}),u.each(t,function(e,t){a=t.actionMenuObj,r=t.techName,s=l[o],void 0!==n.moduleCardController&&(0<(c=u(n.moduleCardController.moduleActionMenuLinkSelector+s,a)).length?n.moduleCardController._requestToController(s,c,i):u.growl.error({message:window.translate_javascripts["Bulk Action - Request not available for module"].replace("[1]",s).replace("[2]",r)}))}),!0}},{key:"initActionButtons",value:function(){var t=this;u("body").on("click",t.moduleInstallBtnSelector,function(e){var t=u(this),o=u(t.next());e.preventDefault(),t.hide(),o.show(),u.ajax({url:t.data("url"),dataType:"json"}).done(function(){o.fadeOut()})}),u("body").on("click",t.upgradeAllSource,function(e){e.preventDefault(),u(t.upgradeAllTargets).click()})}},{key:"initCategorySelect",value:function(){var o=this,e=u("body");e.on("click",o.categoryItemSelector,function(){o.currentRefCategory=u(this).data("category-ref"),o.currentRefCategory=o.currentRefCategory?String(o.currentRefCategory).toLowerCase():null,u(o.categorySelectorLabelSelector).text(u(this).data("category-display-name")),u(o.categoryResetBtnSelector).show(),o.updateModuleVisibility()}),e.on("click",o.categoryResetBtnSelector,function(){var e=u(o.categorySelector).attr("aria-labelledby"),t=e.charAt(0).toUpperCase()+e.slice(1);u(o.categorySelectorLabelSelector).text(t),u(this).hide(),o.currentRefCategory=null,o.updateModuleVisibility()})}},{key:"initSearchBlock",value:function(){var t=this,o=this;o.pstaggerInput=u("#module-search-bar").pstagger({onTagsChanged:function(e){o.currentTagsList=e,o.updateModuleVisibility()},onResetTags:function(){o.currentTagsList=[],o.updateModuleVisibility()},inputPlaceholder:window.translate_javascripts["Search - placeholder"],closingCross:!0,context:o}),u("body").on("click",".module-addons-search-link",function(e){e.preventDefault(),e.stopPropagation(),window.open(u(t).attr("href"),"_blank")})}},{key:"initSortingDisplaySwitch",value:function(){var o=this;u("body").on("click",".module-sort-switch",function(){var e=u(this).data("switch"),t=u(this).hasClass("active-display");void 0!==e&&!1===t&&(o.switchSortingDisplayTo(e),o.currentDisplay=e)})}},{key:"switchSortingDisplayTo",value:function(e){e!==this.DISPLAY_GRID&&e!==this.DISPLAY_LIST||(u(".module-sort-switch").removeClass("module-sort-active"),u("#module-sort-".concat(e)).addClass("module-sort-active"),this.currentDisplay=e,this.updateModuleVisibility())}},{key:"initializeSeeMore",value:function(){var e=this;u("".concat(e.moduleShortList," ").concat(e.seeMoreSelector)).on("click",function(){e.currentCategoryDisplay[u(this).data("category")]=!0,u(this).addClass("d-none"),u(this).closest(e.moduleShortList).find(e.seeLessSelector).removeClass("d-none"),e.updateModuleVisibility()}),u("".concat(e.moduleShortList," ").concat(e.seeLessSelector)).on("click",function(){e.currentCategoryDisplay[u(this).data("category")]=!1,u(this).addClass("d-none"),u(this).closest(e.moduleShortList).find(e.seeMoreSelector).removeClass("d-none"),e.updateModuleVisibility()})}},{key:"updateTotalResults",value:function(){var t=function(e,t){var o=e.text().split(" ");o[0]=t,e.text(o.join(" "))},e=u(".module-short-list");if(0<e.length)e.each(function(){var e=u(this);t(e.find(".module-search-result-wording"),e.next(".modules-list").find(".module-item").length)});else{var o=u(".modules-list").find(".module-item").length;t(u(".module-search-result-wording"),o);var n=self.currentDisplay===self.DISPLAY_LIST?this.addonItemListSelector:this.addonItemGridSelector;u(n).toggle(o!==this.modulesList.length/2),0===o&&u(".module-addons-search-link").attr("href","".concat(this.baseAddonsUrl,"search.php?search_query=").concat(encodeURIComponent(this.currentTagsList.join(" "))))}}}])&&i(e.prototype,o),n&&i(e,n),t}();function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var a=window.$,s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),e.handleImport(),e.handleEvents()}var t,o,n;return t=e,n=[{key:"handleImport",value:function(){var e=a("#module-import");function t(){setTimeout(function(){e.removeClass("onclick"),e.addClass("validate",450,o)},2250)}function o(){setTimeout(function(){e.removeClass("validate")},1250)}e.click(function(){e.addClass("onclick",250,t)})}},{key:"handleEvents",value:function(){a("body").on("click","a.module-read-more-grid-btn, a.module-read-more-list-btn",function(e){e.preventDefault();var t=a(e.target).data("target");a.get(e.target.href,function(e){a(t).html(e),a(t).modal()})})}}],(o=null)&&r(t.prototype,o),n&&r(t,n),e}();(0,window.$)(function(){var e=new n.a;new s,new l(e)})},3:function(e,t){e.exports=jQuery},38:function(e,t,o){"use strict";(function(i){function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}o.d(t,"a",function(){return e});
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var u=window.$,d=function(e,t){var o=document.createEvent(t);o.initEvent(e,!0,!0),document.dispatchEvent(o)},e=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.moduleActionMenuLinkSelector="button.module_action_menu_",this.moduleActionMenuInstallLinkSelector="button.module_action_menu_install",this.moduleActionMenuEnableLinkSelector="button.module_action_menu_enable",this.moduleActionMenuUninstallLinkSelector="button.module_action_menu_uninstall",this.moduleActionMenuDisableLinkSelector="button.module_action_menu_disable",this.moduleActionMenuEnableMobileLinkSelector="button.module_action_menu_enable_mobile",this.moduleActionMenuDisableMobileLinkSelector="button.module_action_menu_disable_mobile",this.moduleActionMenuResetLinkSelector="button.module_action_menu_reset",this.moduleActionMenuUpdateLinkSelector="button.module_action_menu_upgrade",this.moduleItemListSelector=".module-item-list",this.moduleItemGridSelector=".module-item-grid",this.moduleItemActionsSelector=".module-actions",this.moduleActionModalDisableLinkSelector="a.module_action_modal_disable",this.moduleActionModalResetLinkSelector="a.module_action_modal_reset",this.moduleActionModalUninstallLinkSelector="a.module_action_modal_uninstall",this.forceDeletionOption="#force_deletion",this.initActionButtons()}var t,o,n;return t=e,(o=[{key:"initActionButtons",value:function(){var o=this;u(document).on("click",this.forceDeletionOption,function(){var e=u(o.moduleActionModalUninstallLinkSelector,u("div.module-item-list[data-tech-name='"+u(this).attr("data-tech-name")+"']"));!0===u(this).prop("checked")?e.attr("data-deletion","true"):e.removeAttr("data-deletion")}),u(document).on("click",this.moduleActionMenuInstallLinkSelector,function(){return u("#modal-prestatrust").length&&u("#modal-prestatrust").modal("hide"),o._dispatchPreEvent("install",this)&&o._confirmAction("install",this)&&o._requestToController("install",u(this))}),u(document).on("click",this.moduleActionMenuEnableLinkSelector,function(){return o._dispatchPreEvent("enable",this)&&o._confirmAction("enable",this)&&o._requestToController("enable",u(this))}),u(document).on("click",this.moduleActionMenuUninstallLinkSelector,function(){return o._dispatchPreEvent("uninstall",this)&&o._confirmAction("uninstall",this)&&o._requestToController("uninstall",u(this))}),u(document).on("click",this.moduleActionMenuDisableLinkSelector,function(){return o._dispatchPreEvent("disable",this)&&o._confirmAction("disable",this)&&o._requestToController("disable",u(this))}),u(document).on("click",this.moduleActionMenuEnableMobileLinkSelector,function(){return o._dispatchPreEvent("enable_mobile",this)&&o._confirmAction("enable_mobile",this)&&o._requestToController("enable_mobile",u(this))}),u(document).on("click",this.moduleActionMenuDisableMobileLinkSelector,function(){return o._dispatchPreEvent("disable_mobile",this)&&o._confirmAction("disable_mobile",this)&&o._requestToController("disable_mobile",u(this))}),u(document).on("click",this.moduleActionMenuResetLinkSelector,function(){return o._dispatchPreEvent("reset",this)&&o._confirmAction("reset",this)&&o._requestToController("reset",u(this))}),u(document).on("click",this.moduleActionMenuUpdateLinkSelector,function(){return o._dispatchPreEvent("update",this)&&o._confirmAction("update",this)&&o._requestToController("update",u(this))}),u(document).on("click",this.moduleActionModalDisableLinkSelector,function(){return o._requestToController("disable",u(o.moduleActionMenuDisableLinkSelector,u("div.module-item-list[data-tech-name='"+u(this).attr("data-tech-name")+"']")))}),u(document).on("click",this.moduleActionModalResetLinkSelector,function(){return o._requestToController("reset",u(o.moduleActionMenuResetLinkSelector,u("div.module-item-list[data-tech-name='"+u(this).attr("data-tech-name")+"']")))}),u(document).on("click",this.moduleActionModalUninstallLinkSelector,function(t){u(t.target).parents(".modal").on("hidden.bs.modal",function(e){return o._requestToController("uninstall",u(o.moduleActionMenuUninstallLinkSelector,u("div.module-item-list[data-tech-name='"+u(t.target).attr("data-tech-name")+"']")),u(t.target).attr("data-deletion"))}.bind(t))})}},{key:"_getModuleItemSelector",value:function(){return u(this.moduleItemListSelector).length?this.moduleItemListSelector:this.moduleItemGridSelector}},{key:"_confirmAction",value:function(e,t){var o=u("#"+u(t).data("confirm_modal"));return 1!=o.length||(o.first().modal("show"),!1)}},{key:"_confirmPrestaTrust",value:function(o){var n=this,i=this._replacePrestaTrustPlaceholders(o);i.find(".pstrust-install").off("click").on("click",function(){var e=u(n.moduleActionMenuInstallLinkSelector,'.module-item[data-tech-name="'+o.module.attributes.name+'"]'),t=e.parent("form");u("<input>").attr({type:"hidden",value:"1",name:"actionParams[confirmPrestaTrust]"}).appendTo(t),e.click(),i.modal("hide")}),i.modal()}},{key:"_replacePrestaTrustPlaceholders",value:function(e){var t=u("#modal-prestatrust"),o=e.module.attributes;if("PrestaTrust"===e.confirmation_subject&&t.length){var n=o.prestatrust.status?"success":"warning";return o.prestatrust.check_list.property?(t.find("#pstrust-btn-property-ok").show(),t.find("#pstrust-btn-property-nok").hide()):(t.find("#pstrust-btn-property-ok").hide(),t.find("#pstrust-btn-property-nok").show(),t.find("#pstrust-buy").attr("href",o.url).toggle(null!==o.url)),t.find("#pstrust-img").attr({src:o.img,alt:o.name}),t.find("#pstrust-name").text(o.displayName),t.find("#pstrust-author").text(o.author),t.find("#pstrust-label").attr("class","text-"+n).text(o.prestatrust.status?"OK":"KO"),t.find("#pstrust-message").attr("class","alert alert-"+n),t.find("#pstrust-message > p").text(o.prestatrust.message),t}}},{key:"_dispatchPreEvent",value:function(e,t){var o=i.Event("module_card_action_event");return u(t).trigger(o,[e]),!1===o.isPropagationStopped()&&!1===o.isImmediatePropagationStopped()&&!1!==o.result}},{key:"_requestToController",value:function(i,e,t){var l=this,r=e.closest(this.moduleItemActionsSelector),o=e.closest("form"),n=u('<button class="btn-primary-reverse onclick unbind spinner "></button>'),a="//"+window.location.host+o.attr("action"),s=o.serializeArray();return"true"!==t&&!0!==t||s.push({name:"actionParams[deletion]",value:!0}),u.ajax({url:a,dataType:"json",method:"POST",data:s,beforeSend:function(){r.hide(),r.after(n)}}).done(function(e){if(void 0===c(e))u.growl.error({message:"No answer received from server"});else{var t=Object.keys(e)[0];if(!1===e[t].status)void 0!==e[t].confirmation_subject&&l._confirmPrestaTrust(e[t]),u.growl.error({message:e[t].msg});else{u.growl.notice({message:e[t].msg});var o=null,n=null;"uninstall"==i?(r.fadeOut(function(){o=l._getModuleItemSelector().replace(".",""),(n=r.parents("."+o).first()).remove()}),d("Module Uninstalled","CustomEvent")):"disable"==i?(o=l._getModuleItemSelector().replace(".",""),(n=r.parents("."+o).first()).addClass(o+"-isNotActive"),n.attr("data-active","0"),d("Module Disabled","CustomEvent")):"enable"==i&&(o=l._getModuleItemSelector().replace(".",""),(n=r.parents("."+o).first()).removeClass(o+"-isNotActive"),n.attr("data-active","1"),d("Module Enabled","CustomEvent")),r.replaceWith(e[t].action_menu_html)}}}).always(function(){r.fadeIn(),n.remove()}),!1}}])&&l(t.prototype,o),n&&l(t,n),e}()}).call(this,o(3))}});