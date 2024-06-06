document.addEventListener('DOMContentLoaded', function()
{
	//variable init + event listeners
	var inputBox = document.getElementById('taskInput');
	var buttonAdd = document.getElementById('addButton');
	var buttonDelete = document.getElementById('deleteButton');
	var taskList = document.getElementById('taskList');	
	buttonAdd.addEventListener('click', onAddPress);
	buttonDelete.addEventListener('click', onDeletePress);
	inputBox.addEventListener('input', function() {
		addButton.disabled = inputBox.value.trim().length === 0;
	});
	
	//focus on the box, //TO FIX
	inputbox.focus();
	
	//add to the list !
	function onAddPress()
	{
		var inputText = inputBox.value.trim();
		var li = document.createElement('li');
		var check = document.createElement('input');
		check.type = 'checkbox';
		li.appendChild(check);
		li.appendChild(document.createTextNode(inputText));
		taskList.appendChild(li);
		inputBox.value = '';
		buttonAdd.disabled = true;
		buttonDelete.disabled = false;
	}
	
	//delete unwanted list entries
	function onDeletePress() {
		var checks = document.querySelectorAll('#taskList input[type="checkbox"]:checked');
		checks.forEach(function(checkbox) {
			var listItem = checkbox.parentNode;
			taskList.removeChild(listItem);
		});
	}
	
	buttonDelete.disabled = taskList.childElementCount === 0
});