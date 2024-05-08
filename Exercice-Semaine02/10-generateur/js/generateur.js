function createItem(name)
{
	return name
}

function createList(list)
{
	var length = list.length;
	var str = "<ul>";
	for (var i = 0; i < length; i++)
		str += list[i] + "<br>";
	str += "</ul>";
	return str;
}