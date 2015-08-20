this["HBS"] = this["HBS"] || {};

this["HBS"]["hbs/view.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<!-- view.hbs -->\n\ncaptain jack "
    + this.escapeExpression(((helper = (helper = helpers.bird || (depth0 != null ? depth0.bird : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"bird","hash":{},"data":data}) : helper)))
    + "\n";
},"useData":true});