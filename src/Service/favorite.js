function saveSong(song) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (favorite) {
      favorite.push(song);
    } else {
      favorite = [song];
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }
  
  function getAll() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    return favorite;
  }
  
  export { saveSong, getAll};