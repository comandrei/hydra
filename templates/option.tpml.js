(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['option.hbs'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <li>\n    <label>\n      Target Branch\n      <input type=\"text\" name=\"target\" value=\""
    + escapeExpression(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"target","hash":{},"data":data}) : helper)))
    + "\">\n    </label>\n    <label>\n      Branch Pattern\n      <input type=\"text\" name=\"pattern\" value=\""
    + escapeExpression(((helper = (helper = helpers.pattern || (depth0 != null ? depth0.pattern : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pattern","hash":{},"data":data}) : helper)))
    + "\">\n    </label>\n  </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.branches : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();