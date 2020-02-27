Ext.data.JsonP.Autolinker_htmlParser_EntityNode({"tagname":"class","name":"Autolinker.htmlParser.EntityNode","autodetected":{},"files":[{"filename":"entity-node.js","href":"entity-node.html#Autolinker-htmlParser-EntityNode"}],"extends":"Autolinker.htmlParser.HtmlNode","members":[{"name":"offset","tagname":"cfg","owner":"Autolinker.htmlParser.HtmlNode","id":"cfg-offset","meta":{"required":true}},{"name":"text","tagname":"cfg","owner":"Autolinker.htmlParser.HtmlNode","id":"cfg-text","meta":{"required":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.htmlParser.HtmlNode","id":"method-constructor","meta":{}},{"name":"getOffset","tagname":"method","owner":"Autolinker.htmlParser.HtmlNode","id":"method-getOffset","meta":{}},{"name":"getText","tagname":"method","owner":"Autolinker.htmlParser.HtmlNode","id":"method-getText","meta":{}},{"name":"getType","tagname":"method","owner":"Autolinker.htmlParser.EntityNode","id":"method-getType","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.htmlParser.EntityNode","short_doc":"Represents a known HTML entity node that has been parsed by the Autolinker.htmlParser.HtmlParser. ...","component":false,"superclasses":["Autolinker.htmlParser.HtmlNode"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Autolinker.htmlParser.HtmlNode' rel='Autolinker.htmlParser.HtmlNode' class='docClass'>Autolinker.htmlParser.HtmlNode</a><div class='subclass '><strong>Autolinker.htmlParser.EntityNode</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/entity-node.html#Autolinker-htmlParser-EntityNode' target='_blank'>entity-node.js</a></div></pre><div class='doc-contents'><p>Represents a known HTML entity node that has been parsed by the <a href=\"#!/api/Autolinker.htmlParser.HtmlParser\" rel=\"Autolinker.htmlParser.HtmlParser\" class=\"docClass\">Autolinker.htmlParser.HtmlParser</a>.\nEx: '&amp;nbsp;', or '&amp;amp#160;' (which will be retrievable from the <a href=\"#!/api/Autolinker.htmlParser.EntityNode-method-getText\" rel=\"Autolinker.htmlParser.EntityNode-method-getText\" class=\"docClass\">getText</a>\nmethod.</p>\n\n<p>Note that this class will only be returned from the HtmlParser for the set of\nchecked HTML entity nodes  defined by the Autolinker.htmlParser.HtmlParser.htmlCharacterEntitiesRegex.</p>\n\n<p>See this class's superclass (<a href=\"#!/api/Autolinker.htmlParser.HtmlNode\" rel=\"Autolinker.htmlParser.HtmlNode\" class=\"docClass\">Autolinker.htmlParser.HtmlNode</a>) for more\ndetails.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-offset' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.htmlParser.HtmlNode' rel='Autolinker.htmlParser.HtmlNode' class='defined-in docClass'>Autolinker.htmlParser.HtmlNode</a><br/><a href='source/html-node.html#Autolinker-htmlParser-HtmlNode-cfg-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.HtmlNode-cfg-offset' class='name expandable'>offset</a> : Number<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>The offset of the HTML node in the original text that was parsed. ...</div><div class='long'><p>The offset of the HTML node in the original text that was parsed.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-text' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.htmlParser.HtmlNode' rel='Autolinker.htmlParser.HtmlNode' class='defined-in docClass'>Autolinker.htmlParser.HtmlNode</a><br/><a href='source/html-node.html#Autolinker-htmlParser-HtmlNode-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.HtmlNode-cfg-text' class='name expandable'>text</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>The text that was matched for the HtmlNode. ...</div><div class='long'><p>The text that was matched for the HtmlNode.</p>\n\n<ul>\n<li>In the case of an <a href=\"#!/api/Autolinker.htmlParser.ElementNode\" rel=\"Autolinker.htmlParser.ElementNode\" class=\"docClass\">ElementNode</a>,\nthis will be the tag's text.</li>\n<li>In the case of an <a href=\"#!/api/Autolinker.htmlParser.CommentNode\" rel=\"Autolinker.htmlParser.CommentNode\" class=\"docClass\">CommentNode</a>,\nthis will be the comment's text.</li>\n<li>In the case of a <a href=\"#!/api/Autolinker.htmlParser.TextNode\" rel=\"Autolinker.htmlParser.TextNode\" class=\"docClass\">TextNode</a>, this\nwill be the text itself.</li>\n<li>In the case of a <a href=\"#!/api/Autolinker.htmlParser.EntityNode\" rel=\"Autolinker.htmlParser.EntityNode\" class=\"docClass\">EntityNode</a>,\nthis will be the text of the HTML entity.</li>\n</ul>\n\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.htmlParser.HtmlNode' rel='Autolinker.htmlParser.HtmlNode' class='defined-in docClass'>Autolinker.htmlParser.HtmlNode</a><br/><a href='source/html-node.html#Autolinker-htmlParser-HtmlNode-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.htmlParser.HtmlNode-method-constructor' class='name expandable'>Autolinker.htmlParser.EntityNode</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.htmlParser.HtmlNode\" rel=\"Autolinker.htmlParser.HtmlNode\" class=\"docClass\">Autolinker.htmlParser.HtmlNode</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match instance,\nspecified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.htmlParser.HtmlNode\" rel=\"Autolinker.htmlParser.HtmlNode\" class=\"docClass\">Autolinker.htmlParser.HtmlNode</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.htmlParser.HtmlNode' rel='Autolinker.htmlParser.HtmlNode' class='defined-in docClass'>Autolinker.htmlParser.HtmlNode</a><br/><a href='source/html-node.html#Autolinker-htmlParser-HtmlNode-method-getOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.HtmlNode-method-getOffset' class='name expandable'>getOffset</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the offset of the HtmlNode. ...</div><div class='long'><p>Retrieves the <a href=\"#!/api/Autolinker.htmlParser.HtmlNode-cfg-offset\" rel=\"Autolinker.htmlParser.HtmlNode-cfg-offset\" class=\"docClass\">offset</a> of the HtmlNode. This is the offset of the\nHTML node in the original string that was parsed.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.htmlParser.HtmlNode' rel='Autolinker.htmlParser.HtmlNode' class='defined-in docClass'>Autolinker.htmlParser.HtmlNode</a><br/><a href='source/html-node.html#Autolinker-htmlParser-HtmlNode-method-getText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.HtmlNode-method-getText' class='name expandable'>getText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the text for the HtmlNode. ...</div><div class='long'><p>Retrieves the <a href=\"#!/api/Autolinker.htmlParser.HtmlNode-cfg-text\" rel=\"Autolinker.htmlParser.HtmlNode-cfg-text\" class=\"docClass\">text</a> for the HtmlNode.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.htmlParser.EntityNode'>Autolinker.htmlParser.EntityNode</span><br/><a href='source/entity-node.html#Autolinker-htmlParser-EntityNode-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.EntityNode-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a string name for the type of node that this class represents. ...</div><div class='long'><p>Returns a string name for the type of node that this class represents.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});