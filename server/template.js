const createTemplate = ({ content = '' } = {}) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>xD</title>
    <style>body{margin:0;padding:0}</style>
    <script>
      var loadAd = () => {
        const container = document.querySelector('#ad')
        if (!container) return
        container.innerHTML = '<img src="//placekitten.com/300/200" />'
      }
    </script>
  </head>
  <body>
    <div id="root">${content}</div>
    <script>
      var loadScript = url => () => {
        var link = document.createElement('script')
        link.setAttribute('src', url)
        document.head.appendChild(link)
      }
      var loadReact = loadScript('/static/client.js')
      loadAd()
      loadReact()
    </script>
  </body>
</html>`
}

export default createTemplate
