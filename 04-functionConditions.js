var ingredient = "kale";
var ginger = "ginger";
var strawberry = "strawberry";

function juice(ingredient){
  if (ingredient == "kale"){
    return "sure";
  }
  else if (ingredient == "ginger"){
    return "yes please";
  }
  else if (ingredient == "strawberry"){
    return "no thanks";
  }
  else {
      return "you'll have to ask my boss";
  }
}
