document.addEventListener('DOMContentLoaded', function() {
  
  var checkPageButton = document.getElementById('checkPage');

  checkPageButton.addEventListener('click', function() {
    console.log('test');
    const code = `
      // var code_blocks = document.getElementsByTagName('code');
      // console.log(code_blocks);
      // 
      // var code_highlighter = document.createElement("script");
      // code_highlighter.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js";
      // 
      // document.getElementsByTagName("head")[0].appendChild(code_highlighter);
      
      // <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/dracula.min.css">
      var head = document.getElementsByTagName('head')[0];
      
      var highlight_stylesheet = document.createElement("link");
      highlight_stylesheet.rel = "stylesheet"
      highlight_stylesheet.href = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/dracula.min.css"
      console.log(highlight_stylesheet)
      
      // <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
      var highlight_script = document.createElement("script");
      highlight_script.src = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
      console.log(highlight_script);
      
      var start_highlight = document.createElement('script');
      start_highlight.innerHTML = "hljs.initHighlighting();"
      console.log(start_highlight);
      
      head.appendChild(highlight_stylesheet);
      head.appendChild(highlight_script);
      head.appendChild(start_highlight);
      alert('hello');
      
      // <script>hljs.initHighlightingOnLoad();</script>
    `;
    
    console.log('start executing');

    // Execute script on active tab
    chrome.tabs.executeScript({code: code});
    
    console.log('done executing');
  });

});
  
