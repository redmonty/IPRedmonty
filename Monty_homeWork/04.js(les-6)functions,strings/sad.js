//как лучше ? 

function zebra(str, bool) {
	var len = str.length,
		zebraStr = '',
		upper = '',
		lower = '';
		for(var i = 0; i < len; i+=2){
            if(bool == true) {
			    upper = str[i].toUpperCase();
			    lower = str.substring(i+1,i+2).toLowerCase();
			    zebraStr += upper + lower;
            } else
            if(bool == false) {
                upper = str[i].toLowerCase();
	            lower = str.substring(i+1,i+2).toUpperCase();
                zebraStr += upper + lower;
            }
		}
	    return zebraStr;
};

function zebra2(str, bool) {
	var len = str.length,
		zebraStr = '',
		upper = '',
		lower = '';
	if(bool == true) {
		for(var i = 0; i < len; i+=2){
			upper = str[i].toUpperCase();
			lower = str.substring(i+1,i+2).toLowerCase();
			zebraStr += upper + lower;
		}
	} else 
	if(bool == false) {
		for(var i = 0; i < len; i+=2){
			upper = str[i].toLowerCase();
			lower = str.substring(i+1,i+2).toUpperCase();
			zebraStr += upper + lower;
		}
	}
	return zebraStr;
};