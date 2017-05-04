/**
    The aim of this program is to plot a histogram.

    the first version of this program is to receive an array like:

        [1,2,3,4,5,6,7,8,22,163]

    then plot a histogram according to each element of the array.

////////////////////////////////////////////////////

    the idea is simple, first create a div contain all the bins of the histogram, we call it

        #divMother

    then we later create n bins to be its children, finally plot the figure.

**/
var histogram_hashlzf = {};

    //to return a random color value of #??????
    histogram_hashlzf.randomColor = 

        function ()
        {
            var string = "#";
            string     += Math.floor(Math.random() * 255).toString(16);
            string     += Math.floor(Math.random() * 255).toString(16);
            string     += Math.floor(Math.random() * 255).toString(16);
            return string;
        };

    //math
    histogram_hashlzf.maxMinMean = 

        function (argArray)
        {
            var sum = 0; var i = 0; var len = argArray.length ;
            var max = -Infinity;
            var min =  Infinity;

            for(/**/; i < len; i++)
            {   
                if (argArray[i] > max) {max = argArray[i];}
                if (argArray[i] < min) {min = argArray[i];}
                sum += argArray[i];
            }

            var mean = 1.0 * sum / len;
            return [min, mean, max];
        };

    //this is to generate the div container
    histogram_hashlzf.generateMother = 

        function()
        {
            var divMother                       = document.createElement("div");
                divMother.id                    = "divMother";
                divMother.style.width           = "1280px";
                divMother.style.height          = "768px";
                divMother.style.backgroundColor = "#ddd";
                divMother.style.position        = "relative";
                divMother.style.margin          = "0 auto 0 auto";
                this.divMother                  = divMother; 
            return divMother;       
        }

    histogram_hashlzf.formatObject = 

        function(argObj)
        {
            var  keys    = Object.keys(argObj);
            var  values  = [];
            var i = 0; var len = keys.length;
            for(/**/; i < len; i++)
            {
                values.push(argObj[keys[i]]);
            }            
            return [keys, values];
        }

        

    //this is to generate 1 bin
    histogram_hashlzf.generateSingleDiv = 
    
        function (width, height, bottom)
        {
            var color                     = this.randomColor();
            var div                       = document.createElement("div");
                div.style.width           = width;
                div.style.height          = height;
                div.style.backgroundColor = color;  
                div.style.position        = "absolute";
                div.style.left            = bottom;  
                div.style.bottom          = 0;  
                div.style.border          = "1px solid #111"; 
                div.innerHTML             =  this.originalArray[this.divList.length];
                
                //uncomment this to get non-border-box style of bins.
                div.style.boxSizing       = "border-box";   
            return div
        }

    //receive an array argument as input and then plot all the bins
    histogram_hashlzf.generateDivs = 

        function (argArray)
        {   

            var max = this.maxMinMean(argArray)[2];
            var bottom = 0; var i = 0; var len = argArray.length;

            for(/**/; i < len; i++)
            {
                var width = 100.0 / len / 2;
                    width = width + "%";
                var height= argArray[i] / max * 100  + "%";
                var color = this.randomColor();

                //bottom should be in '%' unit to fit different size of container
                this.divList.push(this.generateSingleDiv(width, height, (bottom + '%')));
                bottom += 100 / len / 2;
            }
        }

    //finally, append all the bins to divMother and render divMother
    histogram_hashlzf.paintArr = 

        function ()
        {   
            var i, len;
            for(i = 0, len = this.divList.length; i < len; i++)
            {
                this.divMother.appendChild(this.divList[i]);
            }
            document.body.appendChild(this.divMother);
        }

    //run a instance to generate div

    histogram_hashlzf.inputID =

        function(argInput)
        {
            var input = document.getElementById(argInput);
            var originalArray;
            if (input && input.value)
            {
                originalArray = eval(input.value);
            } 
            return originalArray;       
        } 
    
    histogram_hashlzf.run = 

        function (originalArray)
        {
            //uncomment this to generate arg array.
            //originalArray = [1,2,3,4,5,6,7,8,9,10];  

            histogram_hashlzf.divList         = [];
            histogram_hashlzf.oroginalArray   = [];
            window.histogram_hashlzf          = histogram_hashlzf;
            histogram_hashlzf.originalArray   = originalArray;
            histogram_hashlzf.generateMother()
            histogram_hashlzf.generateDivs(originalArray);
            histogram_hashlzf.paintArr();           
        }
    
    histogram_hashlzf.clear = 

    //delete the div
        function ()
        {
            var div = document.getElementById("divMother");
                div.remove();
        }
    
    //uncomment the following to plot what you desire.
    histogram_hashlzf.run();
    setTimeout(histogram_hashlzf.clear, 5000);
