function Service()
{
    this.name = "service";
}
Service.prototype.analyse = function(input)
{
    var input   = input.toString();
    var prefix  = input[0];
    var residue = input.slice(1, input.length);
    return [prefix, residue];
}
Service.prototype.changeRed = function() {  this.style.color = "red";}

function Wrapper(instance)
{
    this.instance = instance;
}

//Actually we can use another wrapper to make click receive another function as an argument.
Wrapper.prototype.click = function(functionName) {this.instance.addEventListener("click", functionName); }
Wrapper.prototype.hide  = function() {this.instance.style.display = "none";}
Wrapper.prototype.show  = function() {this.instance.style.display = "inline-block";}


function $(input)
{
    var type; 
    var name;
    [type, name] = new Service().analyse(input);

    if (type == "#")
    {
        return new Wrapper(document.getElementById(name));
    }
}
