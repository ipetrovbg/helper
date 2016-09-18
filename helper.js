	var $helper = (function (){

		var booblesort = function( arr, operator ){
			if( arr ){
				if( arr.length === 0 ){
					return arr;
				}else if( arr.length === 1 ){
					return arr;
				}
			}
				

				var swapped 	= true;
				var j 			= 0;
				var i 			= 0;
				var tmp;

				if( operator ){
					if( operator === 'undefined'){
						operator = false;
					}
				}

				while (swapped) {
			            swapped = false;
			            j++;
			            if( arr ){
			            	for (i = 0; i < arr.length - j; i++) { 
				            	if(operator){
				            		if (arr[i] < arr[i + 1]) {                       
					                        tmp = arr[i];
					                        arr[i] = arr[i + 1];
					                        arr[i + 1] = tmp;
					                        swapped = true;
					                  }
				            	}else{
				            		if (arr[i] > arr[i + 1]) {                       
					                        tmp = arr[i];
					                        arr[i] = arr[i + 1];
					                        arr[i + 1] = tmp;
					                        swapped = true;
					                  }
				            	}                                     
				                  
				            }   
			            }
			                         
			      }
			      return arr;
			}

			var contains = function ( data, search ) {

				if( data.constructor === Array ){
					var i = data.length;
				    while (i--) {
				        if (data[i] === search) {
				            return true;
				        }
				    }
				    return false;
				}else{
					return data;
				}			    
			}
		



		var publicFunctions = {
			booblesort: booblesort,
			contains: contains
		}

		return publicFunctions;
	})();