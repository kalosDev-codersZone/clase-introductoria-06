function first() {
  this.one = 0;
  return () => {
    console.log(++one);
  };
}
const firstTest = first();
const secondTest = first();
firstTest();
firstTest();
firstTest();
firstTest();
secondTest();
secondTest();
secondTest();
secondTest();
