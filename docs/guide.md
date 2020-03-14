# 指南

中二语句

## Example

随机刷新 ↓

<p id="say">说些什么吧？</p>
<script>
  fetch(new Request("sentences.json"))
    .then(function(res) {
      if (res.ok) {
        res.json().then(function(data) {
          let i = Math.floor(Math.random() * data.length);
          document.querySelector("#say").innerHTML = data[i].content;
        });
      } else {
        throw new Error("HTTP error, status = " + res.status);
      }
    })
    .catch(function(e) {
      console.log("error: " + e.toString());
    });
</script>

```html
<p id="say">说些什么吧？</p>

<script>
  fetch(new Request("sentences.json"))
    .then(function(res) {
      if (res.ok) {
        // random
        res.json().then(function(data) {
          let i = Math.floor(Math.random() * data.length);
          document.querySelector("#say").innerHTML = data[i].content;
        });
      } else {
        throw new Error("HTTP error, status = " + res.status);
      }
    })
    .catch(function(e) {
      console.log("error: " + e.toString());
    });
</script>
```
