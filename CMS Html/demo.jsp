<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="/dailydiscount/script/jquery.js"></script>
</head>
<body>


	 <form id="addcityform" action="/dailydiscount/classify/delete.do" method="post">
 
 	 <p>Classify_name: <input type="text" name="Classify_name" /></p>
 	 <p>Classify_picture: <input type="text" name="Classify_picture" /></p>
 	 	 <p>id: <input type="text" name="Classify_id" /></p>
  <p>
 	 <input type="submit" value="Submit" />
 </form>
 

<!-- 

	<script type="text/javascript">

$.ajax({
    type: 'POST',
    contentType: 'application/json',
    url: '/dailydiscount/city/addcity.do',
    dataType: 'json',
    success: function(data){
    	var dataObj=eval("("+data+")");//转换为json对象
    	alert(dataObj.root.length);//输出root的子对象数量
    	$.each(dataObj.root,function(idx,item){
    	if(idx==0){
    	return true;	
    	}

    	//输出每个root子对象的名称和值
    	alert("name:"+item.name+",value:"+item.value);
    	}); },
    error: function(){
        alert("error");
    }
});
</script>
 -->

	
</body>
</html>