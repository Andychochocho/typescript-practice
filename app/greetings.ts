class Greeter {
  constructor (message: string) {}
  greet() {
    return ("Hello, " + this.message)
  }
}

var greeters = [];
greeters.push(new Greeter("World"));
greeters.push(new Greeter("How are you?"));
greeters.push(new Greeter("This is the third test"));

console.log(greeters);
for(var greeter of greeters) {
  alert(greeter.greet());
}
