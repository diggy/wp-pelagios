define('lib/text!template/pleiades.tmpl',[],function () { return '(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates[\'pleiades\'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  this.compilerInfo = [2,\'>= 1.0.0-rc.3\'];\nhelpers = helpers || Handlebars.helpers; data = data || {};\n  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;\n\nfunction program1(depth0,data) {\n  \n  var buffer = "", stack1;\n  buffer += "\\r\\n    <p>Some alternative names: ";\n  if (stack1 = helpers.altNames) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.altNames; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + " (the results below are for all alternative names)</p>  \\r\\n    ";\n  return buffer;\n  }\n\nfunction program3(depth0,data) {\n  \n  var buffer = "", stack1;\n  buffer += " \\r\\n    <div id=\\""\n    + escapeExpression(((stack1 = ((stack1 = depth0.widgetContext),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-map\\">    \\r\\n        <div id=\\""\n    + escapeExpression(((stack1 = ((stack1 = depth0.widgetContext),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-map_canvas\\" style=\\"width:"\n    + escapeExpression(((stack1 = ((stack1 = depth0.widgetContext),stack1 == null || stack1 === false ? stack1 : stack1.mapWidth)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "; height:200px\\"></div>\\r\\n    </div>   \\r\\n    ";\n  return buffer;\n  }\n\n  buffer += " <h1 id=\\""\n    + escapeExpression(((stack1 = ((stack1 = depth0.widgetContext),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-title\\" class=\\"pelagios-title\\">";\n  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }\n  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  buffer += escapeExpression(stack2)\n    + "</h1>    \\r\\n<div class=\\"section-content\\" id=\\""\n    + escapeExpression(((stack1 = ((stack1 = depth0.widgetContext),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-pleiades\\">\\r\\n    <div id=\\""\n    + escapeExpression(((stack1 = ((stack1 = depth0.widgetContext),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-description\\"><p>";\n  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }\n  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  buffer += escapeExpression(stack2)\n    + "</p>\\r\\n    ";\n  stack2 = helpers[\'if\'].call(depth0, depth0.altNames, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += "\\r\\n    ";\n  stack2 = helpers[\'if\'].call(depth0, ((stack1 = depth0.widgetContext),stack1 == null || stack1 === false ? stack1 : stack1.displayMap), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += "\\r\\n    <p><img src=\\""\n    + escapeExpression(((stack1 = ((stack1 = depth0.widgetContext),stack1 == null || stack1 === false ? stack1 : stack1.baseURL)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "images/icons/pleiades.png\\"  class=\\"pleiades-icon\\" />\\r\\n    <a href=\\"http://pleiades.stoa.org/places/";\n  if (stack2 = helpers.pleiadesID) { stack2 = stack2.call(depth0, {hash:{},data:data}); }\n  else { stack2 = depth0.pleiadesID; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  buffer += escapeExpression(stack2)\n    + "\\" target=\\"_blank\\">Entry in the Pleiades Gazetteer</a></p>    \\r\\n</div>";\n  return buffer;\n  });\n})();';});