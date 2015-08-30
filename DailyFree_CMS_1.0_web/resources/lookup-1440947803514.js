(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "01Login",
    "7e5a7121-e05d-433a-b40e-f973ed6b82b0": "07Publish_banner",
    "39035e96-c38e-4aa2-b8f8-aa5c44b6af6e": "06Manage",
    "fe486610-dddf-4be9-9513-428a86874a0f": "04Publish",
    "aa06a9f5-8533-458c-b739-69018908dcbc": "08Collect",
    "2a807cac-1677-4b01-968e-9633ab9dbe30": "02Home",
    "6606e6b4-268c-4f36-8de4-799f45de24bc": "03Content",
    "133aa7fc-5dec-4a25-b005-83549ca5a51d": "05Category",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);