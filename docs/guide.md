# 指南

中二语句

## Example

随机刷新 ↓

<p id="say">说些什么吧？</p>
<script>
  fetch(new Request("sentences.json"))
    .then(function(res) {
      if (!res.ok) {
        throw new Error("HTTP error, status = " + res.status);
      }
      res.json().then(function(data) {
        // 随机获取
        let i = Math.floor(Math.random() * data.length);
        document.querySelector("#say").innerHTML = data[i].content;
      });
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
      if (!res.ok) {
        throw new Error("HTTP error, status = " + res.status);
      }
      res.json().then(function(data) {
        // 随机获取
        let i = Math.floor(Math.random() * data.length);
        document.querySelector("#say").innerHTML = data[i].content;
      });
    })
    .catch(function(e) {
      console.log("error: " + e.toString());
    });
</script>
```
