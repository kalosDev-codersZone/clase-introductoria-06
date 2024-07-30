function first() {
  let expression = "can i help you?";
  expression = "what would you like?";
  return function socialExpressions(response) {
    console.log(expression, response);
  };
}

const myFavoriteExpression = first();
myFavoriteExpression("a beer please");
