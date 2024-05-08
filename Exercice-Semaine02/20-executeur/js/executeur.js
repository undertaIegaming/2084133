'use strict'

function execute(_opname, _x, _y)
{
	if (typeof _opname === 'function')
	{
		var result = _opname(_x, _y);
		return result;
	}
	else if (typeof _opname !== 'string')
		return "Type d'operation inconnue";
	switch (_opname)
	{
		case 'ADD':
			return _x + _y;
			break;
		case 'SUB':
			return _x - _y;
			break;
		case 'MUL':
			return _x * _y;
			break;
		default:
			return "Nom d'operation inconnue";
			break;
	}
}
