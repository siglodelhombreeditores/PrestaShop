/******/!function(t){// webpackBootstrap
/******/var r={};function c(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=r,c.d=function(e,i,t){c.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(i,e){if(1&e&&(i=c(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var r in i)c.d(t,r,function(e){return i[e]}.bind(null,r));return t},c.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(i,"a",i),i},c.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},c.p="",c(c.s=280)}({280:function(e,i,t){"use strict";function c(e,i){for(var t=0;t<i.length;t++){var r=i[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(i);
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
var a=window.$,r=function(){function e(){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.prefixCreateForm="form_step2_specific_price_",this.prefixEditForm="form_modal_",this.editModalIsOpen=!1,this.$createPriceFormDefaultValues=new Object,this.storePriceFormDefaultValues(),this.loadAndDisplayExistingSpecificPricesList(),this.configureAddPriceFormBehavior(),this.configureEditPriceModalBehavior(),this.configureDeletePriceButtonsBehavior(),this.configureMultipleModalsBehavior()}var i,t,r;return i=e,(t=[{key:"loadAndDisplayExistingSpecificPricesList",value:function(){var r=this,c=a("#js-specific-price-list"),e=c.data("listingUrl").replace(/list\/\d+/,"list/"+this.getProductId());a.ajax({type:"GET",url:e}).done(function(e){var i=c.find("tbody");i.find("tr").remove(),0<e.length?c.removeClass("hide"):c.addClass("hide");var t=r.renderSpecificPricesListingAsHtml(e);i.append(t)})}},{key:"renderSpecificPricesListingAsHtml",value:function(e){var c="",o=this;return a.each(e,function(e,i){var t=a("#js-specific-price-list").attr("data-action-delete").replace(/delete\/\d+/,"delete/"+i.id_specific_price),r=o.renderSpecificPriceRow(i,t);c+=r}),c}},{key:"renderSpecificPriceRow",value:function(e,i){var t=e.id_specific_price;return"<tr><td>"+e.rule_name+"</td><td>"+e.attributes_name+"</td><td>"+e.currency+"</td><td>"+e.country+"</td><td>"+e.group+"</td><td>"+e.customer+"</td><td>"+e.fixed_price+"</td><td>"+e.impact+"</td><td>"+e.period+"</td><td>"+e.from_quantity+"</td><td>"+(e.can_delete?'<a href="'+i+'" class="js-delete delete btn tooltip-link delete pl-0 pr-0"><i class="material-icons">delete</i></a>':"")+"</td><td>"+(e.can_edit?'<a href="#" data-specific-price-id="'+t+'" class="js-edit edit btn tooltip-link delete pl-0 pr-0"><i class="material-icons">edit</i></a>':"")+"</td></tr>"}},{key:"configureAddPriceFormBehavior",value:function(){var e=this,i=this.getPrefixSelector(!0);a("#specific_price_form .js-cancel").click(function(){e.resetCreatePriceFormDefaultValues(),a("#specific_price_form").collapse("hide")}),a("#specific_price_form .js-save").on("click",function(){return e.submitCreatePriceForm()}),a("#js-open-create-specific-price-form").on("click",function(){return e.loadAndFillOptionsForSelectCombinationInput(!0)}),a(i+"leave_bprice").on("click",function(){return e.enableSpecificPriceFieldIfEligible(!0)}),a(i+"sp_reduction_type").on("change",function(){return e.enableSpecificPriceTaxFieldIfEligible(!0)})}},{key:"configureEditPriceFormInsideModalBehavior",value:function(){var e=this,i=this.getPrefixSelector(!1);a("#form_modal_cancel").click(function(){return e.closeEditPriceModalAndRemoveForm()}),a("#form_modal_close").click(function(){return e.closeEditPriceModalAndRemoveForm()}),a("#form_modal_save").click(function(){return e.submitEditPriceForm()}),this.loadAndFillOptionsForSelectCombinationInput(!1),a(i+"leave_bprice").on("click",function(){return e.enableSpecificPriceFieldIfEligible(!1)}),a(i+"sp_reduction_type").on("change",function(){return e.enableSpecificPriceTaxFieldIfEligible(!1)}),this.reinitializeDatePickers(),this.initializeLeaveBPriceField(!1),this.enableSpecificPriceTaxFieldIfEligible(!1)}},{key:"reinitializeDatePickers",value:function(){a(".datepicker input").datetimepicker({format:"YYYY-MM-DD"})}},{key:"initializeLeaveBPriceField",value:function(e){var i=this.getPrefixSelector(e);""!=a(i+"sp_price").val()&&(a(i+"sp_price").prop("disabled",!1),a(i+"leave_bprice").prop("checked",!1))}},{key:"configureEditPriceModalBehavior",value:function(){var t=this;a(document).on("click","#js-specific-price-list .js-edit",function(e){e.preventDefault();var i=a(e.currentTarget).data("specificPriceId");t.openEditPriceModalAndLoadForm(i)})}},{key:"configureDeletePriceButtonsBehavior",value:function(){var i=this;a(document).on("click","#js-specific-price-list .js-delete",function(e){e.preventDefault(),i.deleteSpecificPrice(e.currentTarget)})}},{key:"configureMultipleModalsBehavior",value:function(){var e=this;a(".modal").on("hidden.bs.modal",function(){e.editModalIsOpen&&a("body").addClass("modal-open")})}},{key:"submitCreatePriceForm",value:function(){var i=this,e=a("#specific_price_form").attr("data-action"),t=a("#specific_price_form input, #specific_price_form select, #form_id_product").serialize();a("#specific_price_form .js-save").attr("disabled","disabled"),a.ajax({type:"POST",url:e,data:t}).done(function(e){showSuccessMessage(translate_javascripts["Form update success"]),i.resetCreatePriceFormDefaultValues(),a("#specific_price_form").collapse("hide"),i.loadAndDisplayExistingSpecificPricesList(),a("#specific_price_form .js-save").removeAttr("disabled")}).fail(function(e){showErrorMessage(e.responseJSON),a("#specific_price_form .js-save").removeAttr("disabled")})}},{key:"submitEditPriceForm",value:function(){var i=this,e=a("#edit-specific-price-modal-form").attr("data-action"),t=a("#edit-specific-price-modal-form").data("specificPriceId"),r=e.replace(/update\/\d+/,"update/"+t),c=a("#edit-specific-price-modal-form input, #edit-specific-price-modal-form select, #form_id_product").serialize();a("#edit-specific-price-modal-form .js-save").attr("disabled","disabled"),a.ajax({type:"POST",url:r,data:c}).done(function(e){showSuccessMessage(translate_javascripts["Form update success"]),i.closeEditPriceModalAndRemoveForm(),i.loadAndDisplayExistingSpecificPricesList(),a("#edit-specific-price-modal-form .js-save").removeAttr("disabled")}).fail(function(e){showErrorMessage(e.responseJSON),a("#edit-specific-price-modal-form .js-save").removeAttr("disabled")})}},{key:"deleteSpecificPrice",value:function(i){var t=this;modalConfirmation.create(translate_javascripts["This will delete the specific price. Do you wish to proceed?"],null,{onContinue:function(){var e=a(i).attr("href");a(i).attr("disabled","disabled"),a.ajax({type:"GET",url:e}).done(function(e){t.loadAndDisplayExistingSpecificPricesList(),showSuccessMessage(e),a(i).removeAttr("disabled")}).fail(function(e){showErrorMessage(e.responseJSON),a(i).removeAttr("disabled")})}}).show()}},{key:"storePriceFormDefaultValues",value:function(){var t=this.$createPriceFormDefaultValues;a("#specific_price_form").find("select,input").each(function(e,i){t[a(i).attr("id")]=a(i).val()}),a("#specific_price_form").find("input:checkbox").each(function(e,i){t[a(i).attr("id")]=a(i).prop("checked")}),this.$createPriceFormDefaultValues=t}},{key:"loadAndFillOptionsForSelectCombinationInput",value:function(e){var i=this.getPrefixSelector(e),t=a(i+"sp_id_product_attribute"),r=t.attr("data-action").replace(/product-combinations\/\d+/,"product-combinations/"+this.getProductId());a.ajax({type:"GET",url:r}).done(function(e){t.find("option:gt(0)").remove(),a.each(e,function(e,i){t.append('<option value="'+i.id+'">'+i.name+"</option>")}),"0"!=t.data("selectedAttribute")&&t.val(t.data("selectedAttribute")).trigger("change")})}},{key:"enableSpecificPriceTaxFieldIfEligible",value:function(e){var i=this.getPrefixSelector(e);"percentage"===a(i+"sp_reduction_type").val()?a(i+"sp_reduction_tax").hide():a(i+"sp_reduction_tax").show()}},{key:"resetCreatePriceFormDefaultValues",value:function(){var t=this.$createPriceFormDefaultValues;a("#specific_price_form").find("input").each(function(e,i){a(i).val(t[a(i).attr("id")])}),a("#specific_price_form").find("select").each(function(e,i){a(i).val(t[a(i).attr("id")]).change()}),a("#specific_price_form").find("input:checkbox").each(function(e,i){a(i).prop("checked",!0)})}},{key:"enableSpecificPriceFieldIfEligible",value:function(e){var i=this.getPrefixSelector(e);a(i+"sp_price").prop("disabled",a(i+"leave_bprice").is(":checked")).val("")}},{key:"openEditPriceModalAndLoadForm",value:function(i){var t=this,e=a("#js-specific-price-list").data("actionEdit").replace(/form\/\d+/,"form/"+i);a("#edit-specific-price-modal").modal("show"),this.editModalIsOpen=!0,a.ajax({type:"GET",url:e}).done(function(e){t.insertEditSpecificPriceFormIntoModal(e),a("#edit-specific-price-modal-form").data("specificPriceId",i),t.configureEditPriceFormInsideModalBehavior()}).fail(function(e){showErrorMessage(e.responseJSON)})}},{key:"closeEditPriceModalAndRemoveForm",value:function(){a("#edit-specific-price-modal").modal("hide"),this.editModalIsOpen=!1,a("#edit-specific-price-modal-form").empty()}},{key:"insertEditSpecificPriceFormIntoModal",value:function(e){var i=a("#edit-specific-price-modal-form");i.empty(),i.append(e)}},{key:"getProductId",value:function(){return a("#form_id_product").val()}},{key:"getPrefixSelector",value:function(e){return 1==e?"#"+this.prefixCreateForm:"#"+this.prefixEditForm}}])&&c(i.prototype,t),r&&c(i,r),e}();(0,window.$)(function(){new r})}});