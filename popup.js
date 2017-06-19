document.addEventListener('DOMContentLoaded', function() {
  
  function addHighlight() {
    const code = `
      var head = document.getElementsByTagName('head')[0];
      
      var highlight_stylesheet = document.createElement("link");
      highlight_stylesheet.rel = "stylesheet"
      highlight_stylesheet.href = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai-sublime.min.css"
      highlight_stylesheet.id = "highlight-css"
      
      var highlight_script = document.createElement("script");
      highlight_script.src = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
      highlight_script.id = "highlight-js"
      
      head.appendChild(highlight_stylesheet);
      head.appendChild(highlight_script);
      
      highlight_script.onload = function() {
        var start_highlight = document.createElement('script');
        start_highlight.innerHTML = "hljs.initHighlighting();"
        
        document.body.appendChild(start_highlight);
      };
    `;
    
    chrome.tabs.executeScript({code: code});
  }
  
  function removeHighlight() {
    const code = `
      var highlight_stylesheet = document.getElementById('highlight-css');
      var highlight_script = document.getElementById('highlight-js');
      
      if (highlight_stylesheet) { highlight_stylesheet.parentNode.removeChild(highlight_stylesheet); }
      if (highlight_script) { highlight_script.parentNode.removeChild(highlight_script); }
    `;
    
    chrome.tabs.executeScript({code: code});
  }
  
  var highlightButton = document.getElementById('highlight-code');
  var clearHighlightButton = document.getElementById('clear-highlight');
  
  highlightButton.addEventListener('click', function() {
    removeHighlight();
    addHighlight();
  });
  
  clearHighlightButton.addEventListener('click', function() {
    removeHighlight();
  });

});
  
