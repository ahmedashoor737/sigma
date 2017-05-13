
function my() {
    "use strict";
    var s = new sigma.parsers.json('./r.json',{
    container: 'json_ting',
    settings: {
      defaultNodeColor: '#ec5148'
    }
  });
    s.refresh;
}