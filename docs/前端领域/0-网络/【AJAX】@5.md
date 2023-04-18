## AJAZ

1.XHR API
```js
<script>
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){
            // console.log(xhr.readyState);
            console.log(xhr.responseText);
        }
    }
    xhr.open('GET', 'https://www.baidu.com');
    xhr.send(null);
</script>
```js
2. Fetch API
```js
<script>
    fetch('https://www.baidu.com')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {

        })
</script>
```
