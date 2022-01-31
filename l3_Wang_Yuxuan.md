# Lab 3

* repo: <https://git.cs.dal.ca/yuxuanw/l3_wang_yuxuan.git>
* url: <https://web.cs.dal.ca/~yuxuanw/csci3172/lab3/l3_wang_yuxuan>

## Authors

* [Yuxuan Wang](yx703587@dal.ca) - *(Developer)*

## Sources Used

### <https://getbootstrap.com/>

1. <https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css>

2. <https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js>

## Short answer questions

1. ```preventDefault()```prevent the browser execute default actions of the current selected element. for example, stop a form submission when clicking a button

2. The below code keeps the previous on page, replace this to code at line 23-27 keeps previous data on page

```javascript
    document.getElementById('main').insertAdjacentHTML('beforeend',"<div>"+
                            "<p>first name: "+values[0]+"<p/>"+
                            "<p>last name: "+values[1]+"<p/>"+
                            "<p>gender: "+values[2]+"<p/>"+
                            "<p>country: "+values[3]+"<p/>"+
                            "</div>");
```
