const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name)
};
function destructivelyPrependCat(name){
  cats.unshift(name)

};
    
function destructivelyRemoveLastCat(){
  cats.pop()
}
function destructivelyRemoveFirstCat(){
  cats.shift()
}
function appendCatPure(cats,name){
  return [...cats,name];
}
function prependCat(cats,name){
   return [name, ...cats];
}
function removeLastCat(cats) {
  return cats.slice(0, -1);
}
function removeFirstCat(cats) {
  return cats.slice(1);
}